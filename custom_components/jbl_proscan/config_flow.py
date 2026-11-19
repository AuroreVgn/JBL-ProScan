"""Config flow for JBL ProScan."""

from __future__ import annotations

import asyncio
import logging
from typing import Any

import voluptuous as vol

from homeassistant import config_entries
from homeassistant.const import CONF_PASSWORD
from homeassistant.core import callback
from homeassistant.data_entry_flow import FlowResult
from homeassistant.helpers.aiohttp_client import async_create_clientsession
from homeassistant.helpers.selector import (
    NumberSelector,
    NumberSelectorConfig,
    NumberSelectorMode,
    SelectSelector,
    SelectSelectorConfig,
    SelectSelectorMode,
)

from .api import JBLProScanApi
from .const import (
    CONF_AQUARIUM_ID,
    CONF_EMAIL,
    CONF_SCAN_INTERVAL,
    CONF_REMINDER_DAYS,
    DEFAULT_SCAN_INTERVAL,
    DEFAULT_REMINDER_DAYS,
    DOMAIN,
    MAX_SCAN_INTERVAL,
    MIN_SCAN_INTERVAL,
    MAX_REMINDER_DAYS,
    MIN_REMINDER_DAYS,
)
from .exceptions import (
    JBLProScanAuthenticationError,
    JBLProScanConnectionError,
    JBLProScanParseError,
)


_LOGGER = logging.getLogger(__name__)


class JBLProScanConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a JBL ProScan config flow."""

    VERSION = 4

    def __init__(self) -> None:
        """Initialize the flow."""
        self._credentials: dict[str, Any] = {}
        self._aquariums: dict[str, str] = {}
        self._api: JBLProScanApi | None = None

    async def async_step_user(
        self, user_input: dict[str, Any] | None = None
    ) -> FlowResult:
        """Authenticate and discover the user's aquariums and ponds."""
        errors: dict[str, str] = {}
        diagnostic = ""

        if user_input is not None:
            # A separate cookie jar prevents config flows from sharing logins.
            api = JBLProScanApi(
                session=async_create_clientsession(self.hass),
                email=user_input[CONF_EMAIL],
                password=user_input[CONF_PASSWORD],
            )
            try:
                aquariums = await api.async_get_aquariums()
            except JBLProScanAuthenticationError:
                errors["base"] = "invalid_auth"
            except JBLProScanConnectionError:
                errors["base"] = "cannot_connect"
            except JBLProScanParseError:
                errors["base"] = "no_aquariums"
            except Exception as err:  # noqa: BLE001
                diagnostic = type(err).__name__
                _LOGGER.exception("Unexpected error during JBL ProScan aquarium discovery")
                errors["base"] = "unknown"
            else:
                self._credentials = dict(user_input)
                self._aquariums = aquariums
                self._api = api
                return await self.async_step_aquarium()
            finally:
                if self._api is not api:
                    await api.async_close()

        schema = vol.Schema(
            {
                vol.Required(CONF_EMAIL): str,
                vol.Required(CONF_PASSWORD): str,
                vol.Optional(
                    CONF_SCAN_INTERVAL, default=DEFAULT_SCAN_INTERVAL
                ): NumberSelector(
                    NumberSelectorConfig(
                        min=MIN_SCAN_INTERVAL,
                        max=MAX_SCAN_INTERVAL,
                        step=1,
                        mode=NumberSelectorMode.BOX,
                        unit_of_measurement="min",
                    )
                ),
            }
        )
        return self.async_show_form(
            step_id="user",
            data_schema=schema,
            errors=errors,
            description_placeholders={"diagnostic": diagnostic},
        )

    async def async_step_aquarium(
        self, user_input: dict[str, Any] | None = None
    ) -> FlowResult:
        """Let the user select one discovered aquarium or pond."""
        if not self._credentials or not self._aquariums or self._api is None:
            return self.async_abort(reason="discovery_expired")

        errors: dict[str, str] = {}
        if user_input is not None:
            selected_ids = user_input[CONF_AQUARIUM_ID]
            if not isinstance(selected_ids, list) or not selected_ids or any(
                aquarium_id not in self._aquariums for aquarium_id in selected_ids
            ):
                errors["base"] = "invalid_aquarium"
            else:
                # Keep each aquarium as a separate config entry. The first is
                # created by this flow; the others use independent import flows.
                new_ids = []
                for aquarium_id in dict.fromkeys(selected_ids):
                    unique_id = f"{self._credentials[CONF_EMAIL].lower()}_{aquarium_id}"
                    if not any(
                        entry.unique_id == unique_id
                        for entry in self._async_current_entries()
                    ):
                        new_ids.append(aquarium_id)

                if not new_ids:
                    return self.async_abort(reason="already_configured")

                reminder_days = user_input.get(
                    CONF_REMINDER_DAYS, DEFAULT_REMINDER_DAYS
                )
                first_id, *remaining_ids = new_ids
                await self.async_set_unique_id(
                    f"{self._credentials[CONF_EMAIL].lower()}_{first_id}"
                )
                self._abort_if_unique_id_configured()
                entry_data = {
                    **self._credentials,
                    CONF_AQUARIUM_ID: first_id,
                    CONF_REMINDER_DAYS: reminder_days,
                }
                if remaining_ids:
                    # The manager finishes the first flow before the scheduled
                    # task starts creating the remaining independent entries.
                    self.hass.async_create_task(
                        self._async_create_remaining_entries(
                            remaining_ids, reminder_days
                        ),
                        eager_start=False,
                    )
                await self._api.async_close()
                self._api = None
                return self.async_create_entry(
                    title=self._aquariums[first_id].rsplit(" — ", 1)[0],
                    data=entry_data,
                )

        options = [
            {"value": aquarium_id, "label": name}
            for aquarium_id, name in self._aquariums.items()
        ]
        return self.async_show_form(
            step_id="aquarium",
            data_schema=vol.Schema(
                {
                    vol.Required(CONF_AQUARIUM_ID): SelectSelector(
                        SelectSelectorConfig(
                            options=options,
                            mode=SelectSelectorMode.DROPDOWN,
                            multiple=True,
                        )
                    ),
                    vol.Required(
                        CONF_REMINDER_DAYS,
                        default=DEFAULT_REMINDER_DAYS,
                    ): NumberSelector(
                        NumberSelectorConfig(
                            min=MIN_REMINDER_DAYS,
                            max=MAX_REMINDER_DAYS,
                            step=1,
                            mode=NumberSelectorMode.BOX,
                        )
                    ),
                }
            ),
            errors=errors,
        )

    async def _async_create_remaining_entries(
        self, aquarium_ids: list[str], reminder_days: int
    ) -> None:
        """Create a separate config entry for each additional aquarium."""
        # Allow the initiating flow to finish and persist its entry.
        await asyncio.sleep(0)
        for aquarium_id in aquarium_ids:
            try:
                await self.hass.config_entries.flow.async_init(
                    DOMAIN,
                    context={"source": config_entries.SOURCE_IMPORT},
                    data={
                        **self._credentials,
                        CONF_AQUARIUM_ID: aquarium_id,
                        CONF_REMINDER_DAYS: reminder_days,
                        "aquarium_name": self._aquariums[aquarium_id].rsplit(
                            " — ", 1
                        )[0],
                    },
                )
            except Exception:  # noqa: BLE001
                _LOGGER.exception(
                    "Failed to add selected JBL ProScan aquarium %s", aquarium_id
                )

    async def async_step_import(self, user_input: dict[str, Any]) -> FlowResult:
        """Create an additional entry selected during multi-aquarium setup."""
        aquarium_id = user_input[CONF_AQUARIUM_ID]
        await self.async_set_unique_id(
            f"{user_input[CONF_EMAIL].lower()}_{aquarium_id}"
        )
        self._abort_if_unique_id_configured()
        name = user_input.pop("aquarium_name", f"JBL ProScan ({aquarium_id})")
        return self.async_create_entry(title=name, data=user_input)

    @staticmethod
    @callback
    def async_get_options_flow(
        config_entry: config_entries.ConfigEntry,
    ) -> JBLProScanOptionsFlow:
        return JBLProScanOptionsFlow(config_entry)


class JBLProScanOptionsFlow(config_entries.OptionsFlow):
    """Handle JBL ProScan options."""

    def __init__(self, config_entry: config_entries.ConfigEntry) -> None:
        self._config_entry = config_entry

    async def async_step_init(
        self, user_input: dict[str, Any] | None = None
    ) -> FlowResult:
        if user_input is not None:
            return self.async_create_entry(title="", data=user_input)

        current = self._config_entry.options.get(
            CONF_SCAN_INTERVAL,
            self._config_entry.data.get(CONF_SCAN_INTERVAL, DEFAULT_SCAN_INTERVAL),
        )
        return self.async_show_form(
            step_id="init",
            data_schema=vol.Schema(
                {
                    vol.Required(
                        CONF_SCAN_INTERVAL, default=current
                    ): NumberSelector(
                        NumberSelectorConfig(
                            min=MIN_SCAN_INTERVAL,
                            max=MAX_SCAN_INTERVAL,
                            step=1,
                            mode=NumberSelectorMode.BOX,
                            unit_of_measurement="min",
                        )
                    ),
                    vol.Required(
                        CONF_REMINDER_DAYS,
                        default=self._config_entry.options.get(
                            CONF_REMINDER_DAYS, DEFAULT_REMINDER_DAYS
                        ),
                    ): NumberSelector(
                        NumberSelectorConfig(
                            min=MIN_REMINDER_DAYS,
                            max=MAX_REMINDER_DAYS,
                            step=1,
                            mode=NumberSelectorMode.BOX,
                            unit_of_measurement="days",
                        )
                    ),
                }
            ),
        )
