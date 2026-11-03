"""Expose the bundled JBL ProScan Lovelace card to Home Assistant."""

from __future__ import annotations

import logging
from pathlib import Path

from homeassistant.components.http import StaticPathConfig
from homeassistant.core import HomeAssistant

_LOGGER = logging.getLogger(__name__)

CARD_URL = "/jbl_proscan/jbl-proscan-card.js"
CARD_FILE = Path(__file__).parent / "www" / "jbl-proscan-card.js"
_REGISTERED_KEY = "jbl_proscan_card_resource_registered"


async def async_setup_card(hass: HomeAssistant) -> None:
    """Expose the JavaScript once and register it in storage-mode Lovelace."""
    if hass.data.get(_REGISTERED_KEY):
        return

    await hass.http.async_register_static_paths(
        [StaticPathConfig(CARD_URL, str(CARD_FILE), cache_headers=False)]
    )
    hass.data[_REGISTERED_KEY] = True

    lovelace = hass.data.get("lovelace")
    resources = getattr(lovelace, "resources", None)
    if resources is None:
        _LOGGER.debug("Add Lovelace resource %s manually if needed", CARD_URL)
        return

    try:
        if not resources.loaded:
            await resources.async_load()
        if any(
            item.get("url", "").split("?")[0] == CARD_URL
            for item in resources.async_items()
        ):
            return
        await resources.async_create_item(
            {"res_type": "module", "url": CARD_URL}
        )
    except Exception:
        _LOGGER.warning(
            "Could not register JBL ProScan card automatically; add %s manually",
            CARD_URL,
            exc_info=True,
        )
