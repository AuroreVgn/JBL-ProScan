"""Regression tests for concurrent JBL ProScan card registration."""

from __future__ import annotations

import asyncio
import importlib.util
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import AsyncMock

import pytest


@pytest.fixture
def card_module():
    """Load card.py without importing the integration's __init__.py."""
    path = Path(__file__).resolve().parents[1] / "custom_components" / "jbl_proscan" / "card.py"
    spec = importlib.util.spec_from_file_location("jbl_proscan_card_test", path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


@pytest.mark.asyncio
async def test_concurrent_entries_register_route_only_once(card_module):
    """Two aquarium entries must not register the same HTTP route twice."""
    registered_paths = []

    async def register(paths):
        # Give another setup task a chance to race before registration finishes.
        await asyncio.sleep(0)
        if registered_paths:
            raise RuntimeError("Added route will never be executed")
        registered_paths.extend(paths)

    resources = SimpleNamespace(
        loaded=True,
        async_items=lambda: [],
        async_create_item=AsyncMock(),
    )
    hass = SimpleNamespace(
        data={"lovelace": SimpleNamespace(resources=resources)},
        http=SimpleNamespace(async_register_static_paths=register),
    )

    await asyncio.gather(
        card_module.async_setup_card(hass),
        card_module.async_setup_card(hass),
        card_module.async_setup_card(hass),
    )

    assert len(registered_paths) == 1
    resources.async_create_item.assert_awaited_once_with(
        {"res_type": "module", "url": card_module.CARD_URL}
    )


@pytest.mark.asyncio
async def test_failed_registration_can_be_retried(card_module):
    """A failed HTTP registration must not set the success flag."""
    register = AsyncMock(side_effect=[RuntimeError("temporary failure"), None])
    hass = SimpleNamespace(
        data={},
        http=SimpleNamespace(async_register_static_paths=register),
    )

    with pytest.raises(RuntimeError, match="temporary failure"):
        await card_module.async_setup_card(hass)

    assert not hass.data.get(card_module._REGISTERED_KEY)
    await card_module.async_setup_card(hass)
    assert hass.data[card_module._REGISTERED_KEY] is True
    assert register.await_count == 2
