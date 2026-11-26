"""Packaged Streamlit Components v2 wrapper for the VoxSense gallery."""

from __future__ import annotations

from collections.abc import Callable
from typing import Any

import streamlit as st

_COMPONENT_NAME = "voice-reveal-component.voice_reveal_component"
_RECORDING_TRIGGER = "voice-gallery"
_DEFAULT_MOUNT_KEY = "voice_reveal"
_STATE_KEY = "last_event_id"

_VOICE_REVEAL_COMPONENT = st.components.v2.component(
    _COMPONENT_NAME,
    js="index-*.js",
    css="index.css",
    html="""
<div class="voice-reveal-root" data-phase="boot">
  <section class="stage" aria-label="Dark sculpture gallery with two marble figures">
    <canvas id="gallery-canvas" aria-label="Two marble statues in a dark gallery"></canvas>

    <div class="fallback" aria-hidden="true">
      <img class="fallback-figure fallback-female" alt="Marble bust representing the female output class" />
      <img class="fallback-figure fallback-male" alt="Marble bust representing the male output class" />
    </div>

    <div class="stage-scrim" aria-hidden="true"></div>

    <div class="stage-meta">
      <span class="status-dot" aria-hidden="true"></span>
      <span>Voice analysis</span>
      <span aria-hidden="true">·</span>
      <span id="status-text">Preparing the gallery</span>
    </div>

    <div class="loading" role="status" aria-live="polite" aria-hidden="false">
      <p class="loading-label">The gallery is waking</p>
      <div class="loading-track" aria-hidden="true">
        <span id="loading-progress"></span>
      </div>
      <p class="loading-message" id="loading-message">Loading the marble figures</p>
    </div>

    <div class="asset-banner" role="status" aria-hidden="true">
      <span id="asset-banner-text"></span>
      <button class="asset-retry" id="asset-retry" type="button">Retry</button>
    </div>

    <div class="result" hidden aria-hidden="true">
      <p class="result-eyebrow" id="result-eyebrow">Predicted voice category</p>
      <h2 class="result-label" id="result-label"></h2>
      <p class="result-meta" id="result-meta"></p>
      <p class="result-caveat" id="result-caveat"></p>
    </div>

    <div class="notice" hidden aria-hidden="true" role="status">
      <h3 class="notice-title" id="notice-title"></h3>
      <p class="notice-message" id="notice-message"></p>
      <button class="notice-retry" id="notice-retry" type="button">Try another recording</button>
    </div>
  </section>

  <div class="controls">
    <div class="waveform" aria-hidden="true">
      <canvas id="waveform-canvas"></canvas>
    </div>

    <div class="control-row">
      <button
        class="record-button"
        id="record-button"
        type="button"
        disabled
        aria-label="Begin recording. Speak for a few seconds."
        aria-pressed="false"
      >
        <span class="record-icon" aria-hidden="true">
          <svg class="icon-mic" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z" />
            <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0" />
            <path d="M12 18v3" />
          </svg>
          <svg class="icon-stop" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="7" y="7" width="10" height="10" rx="1" />
          </svg>
        </span>
        <span>
          <span class="record-label" id="record-label">Begin recording</span>
          <span class="record-hint" id="record-hint">Speak for a few seconds</span>
        </span>
      </button>
      <button
        class="cancel-button"
        id="cancel-button"
        type="button"
        aria-label="Cancel the current recording"
        hidden
      >
        Cancel
      </button>
      <span class="timer" id="timer" hidden aria-label="Recording time">0:00</span>
    </div>

    <button
      class="replay-button"
      id="replay-button"
      type="button"
      aria-label="Play the last recording"
      hidden
    >
      Play recording
    </button>
  </div>

  <p class="sr-only" id="live-region" role="status" aria-live="polite"></p>
</div>
""",
)


def _no_op() -> None:
    """Required callback for the harmless default state key."""


def voice_reveal_component(
    state: dict[str, Any],
    *,
    key: str | None = None,
    on_recording_complete: Callable[[dict[str, Any]], None] | None = None,
    height: str | int = "content",
):
    """Mount the VoxSense gallery and forward completed recordings to Python.

    Parameters
    ----------
    state:
        The versioned visual state produced by ``voice_inference.make_state``.
        Raw audio must never be included here.
    key:
        Stable Streamlit element key. A stable key keeps the mounted Three.js
        scene alive across reruns.
    on_recording_complete:
        Called once with the browser's base64 audio payload when the user
        finishes a recording.
    height:
        Streamlit height for the mounted component.

    Returns
    -------
    ComponentResult
        The component result. Trigger values are also delivered through
        ``on_recording_complete``.
    """
    mount_key = key or _DEFAULT_MOUNT_KEY

    def _handle_recording_complete() -> None:
        if on_recording_complete is None:
            return
        component_state = st.session_state.get(mount_key)
        payload = (
            component_state.get(_RECORDING_TRIGGER)
            if isinstance(component_state, dict)
            else None
        )
        if isinstance(payload, dict):
            on_recording_complete(payload)

    callbacks: dict[str, Callable[[], None]] = {
        f"on_{_STATE_KEY}_change": _no_op,
        f"on_{_RECORDING_TRIGGER}_change": _handle_recording_complete,
    }

    return _VOICE_REVEAL_COMPONENT(
        key=mount_key,
        data={"state": state},
        default={_STATE_KEY: None},
        width="stretch",
        height=height,
        **callbacks,
    )
