"""Regression tests for multi-aquarium config entry creation."""

from __future__ import annotations

from unittest.mock import AsyncMock, MagicMock

import pytest

from custom_components.jbl_proscan.config_flow import JBLProScanConfigFlow
from custom_components.jbl_proscan.const import (
    CONF_AQUARIUM_ID,
    CONF_EMAIL,
    CONF_REMINDER_DAYS,
)


@pytest.mark.asyncio
async def test_import_creates_independent_entry_without_internal_name():
    """Imported entries retain the correct ID and do not store UI-only names."""
    flow = JBLProScanConfigFlow()
    flow.async_set_unique_id = AsyncMock()
    flow._abort_if_unique_id_configured = MagicMock()
    flow.async_create_entry = MagicMock(return_value={"type": "create_entry"})

    data = {
        CONF_EMAIL: "user@example.com",
        CONF_AQUARIUM_ID: "854251",
        CONF_REMINDER_DAYS: 30,
        "aquarium_name": "Test",
    }
    await flow.async_step_import(data)

    flow.async_set_unique_id.assert_awaited_once_with("user@example.com_854251")
    flow._abort_if_unique_id_configured.assert_called_once()
    flow.async_create_entry.assert_called_once()
    kwargs = flow.async_create_entry.call_args.kwargs
    assert kwargs["title"] == "Test"
    assert kwargs["data"][CONF_AQUARIUM_ID] == "854251"
    assert "aquarium_name" not in kwargs["data"]


@pytest.mark.asyncio
async def test_remaining_entries_use_separate_import_flows():
    """Each additional aquarium starts an independent Home Assistant flow."""
    flow = JBLProScanConfigFlow()
    flow._credentials = {CONF_EMAIL: "user@example.com", "password": "secret"}
    flow._aquariums = {"1": "First — 1", "2": "Second — 2"}
    manager = MagicMock()
    manager.flow.async_init = AsyncMock()
    flow.hass = manager

    await flow._async_create_remaining_entries(["1", "2"], 14)

    assert manager.flow.async_init.await_count == 2
    for call, aquarium_id in zip(manager.flow.async_init.await_args_list, ["1", "2"]):
        assert call.kwargs["data"][CONF_AQUARIUM_ID] == aquarium_id
        assert call.kwargs["data"][CONF_REMINDER_DAYS] == 14
