"""VoxSense — a dark gallery reveal for the existing voice classifier."""

from __future__ import annotations

import base64
import binascii
import logging
import time
from typing import Any

import streamlit as st

import voice_inference
from voice_reveal_component import voice_reveal_component

LOGGER = logging.getLogger(__name__)

MOUNT_KEY = "voice_reveal"
MAX_REMEMBERED_EVENTS = 32
MAX_BASE64_LENGTH = 11_000_000

st.set_page_config(
    page_title="VoxSense — voice reveal",
    page_icon=":material/record_voice_over:",
    layout="wide",
)

st.html(
    """
<style>
  .stApp {
    background:
      radial-gradient(
        ellipse 92% 54% at 50% -12%,
        rgba(132, 110, 76, 0.16) 0%,
        rgba(11, 10, 8, 0) 62%
      ),
      linear-gradient(180deg, #0b0a08 0%, #090807 58%, #070605 100%);
  }

  html[data-voice-theme="light"] .stApp {
    background: radial-gradient(ellipse 85% 48% at 50% -10%, #ffffff 0%, transparent 65%), linear-gradient(180deg, #f5f3ef 0%, #eeece7 100%);
    color: #25231f;
  }

  [data-testid="stAppViewContainer"],
  [data-testid="stMain"] {
    background: transparent;
  }

  .block-container {
    max-width: 1180px;
    padding-top: 1.65rem;
    padding-bottom: 2.25rem;
  }

  .vr-page-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: 1.35rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(232, 222, 203, 0.12);
    color: #f2ede3;
  }

  .vr-page-kicker {
    margin: 0 0 0.55rem;
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #a49a8b;
  }

  .vr-page-title {
    margin: 0;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(2.1rem, 4.4vw, 3.35rem);
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.025em;
    color: #f7f2e9;
  }

  .vr-page-subtitle {
    margin: 0.65rem 0 0;
    max-width: 36rem;
    font-size: 0.84rem;
    line-height: 1.6;
    color: #a49a8b;
  }

  .vr-page-status {
    flex: none;
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    padding-bottom: 0.25rem;
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: #746b5e;
  }

  .vr-page-status::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #d8c096;
  }

  .vr-page-footer {
    margin-top: 1.4rem;
    padding-top: 0.9rem;
    border-top: 1px solid rgba(232, 222, 203, 0.1);
    color: #8d8477;
    font-size: 0.72rem;
  }

  .vr-page-footer p {
    margin-bottom: 0.3rem;
  }

  html[data-voice-theme="light"] .vr-page-header { color: #25231f; border-color: rgba(45, 42, 35, 0.14); }
  html[data-voice-theme="light"] .vr-page-kicker,
  html[data-voice-theme="light"] .vr-page-subtitle,
  html[data-voice-theme="light"] .vr-page-status,
  html[data-voice-theme="light"] .vr-page-footer { color: #77736b; }
  html[data-voice-theme="light"] .vr-page-title { color: #25231f; }
  html[data-voice-theme="light"] [data-testid="stCaptionContainer"] { color: #77736b; }
  html[data-voice-theme="light"] [data-testid="stPopover"] button { color: #36332e; border-color: rgba(45, 42, 35, 0.16); }

  .stFileUploader,
  .stButton button {
    font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
  }

  .stButton button[kind="primaryFormSubmit"] {
    border-color: rgba(216, 192, 150, 0.4);
    background: #2a241b;
    color: #f7f2e9;
  }

  .stButton button[kind="primaryFormSubmit"]:hover {
    border-color: rgba(216, 192, 150, 0.7);
    background: #362e22;
  }

  @media (max-width: 720px) {
    .vr-page-header {
      align-items: flex-start;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .vr-page-status {
      padding-bottom: 0;
    }
  }
</style>
"""
)


def _init_state() -> None:
    """Initialise per-session state in one place."""
    st.session_state.setdefault("voice_state", voice_inference.idle_state())
    st.session_state.setdefault("voice_seen_event_ids", [])
    st.session_state.setdefault("voice_latest_event_id", None)
    st.session_state.setdefault("voice_latest_started_at", 0.0)
    st.session_state.setdefault("voice_last_duration_ms", None)


def _remember_event(
    event_id: str,
    started_at: float,
    duration_ms: float | None = None,
) -> None:
    """Remember only event metadata — never audio bytes."""
    seen = list(st.session_state.get("voice_seen_event_ids", []))
    if event_id not in seen:
        seen.append(event_id)
    st.session_state["voice_seen_event_ids"] = seen[-MAX_REMEMBERED_EVENTS:]
    st.session_state["voice_latest_event_id"] = event_id
    st.session_state["voice_latest_started_at"] = float(started_at)
    if duration_ms is not None:
        st.session_state["voice_last_duration_ms"] = float(duration_ms)


def _is_fresh(event_id: str, started_at: float) -> bool:
    """Ignore duplicate or older events before they reach the model."""
    return voice_inference.is_event_fresh(
        event_id,
        started_at,
        st.session_state.get("voice_seen_event_ids", []),
        float(st.session_state.get("voice_latest_started_at", 0.0)),
    )


def _handle_recording_complete(payload: dict[str, Any]) -> None:
    """Decode one browser recording and deliver a truthful terminal state."""
    event_id = str(payload.get("event_id") or "").strip()
    if not event_id:
        event_id = voice_inference.new_event_id()

    try:
        started_at = float(payload.get("started_at"))
    except (TypeError, ValueError):
        started_at = time.time() * 1000

    raw_duration = payload.get("duration_ms")
    try:
        duration_ms = float(raw_duration) if raw_duration is not None else None
    except (TypeError, ValueError):
        duration_ms = None

    if not _is_fresh(event_id, started_at):
        LOGGER.info("Ignoring a duplicate or stale recording event")
        return

    st.session_state["voice_state"] = voice_inference.make_state(
        event_id=event_id,
        started_at=started_at,
        status="processing",
        source="microphone",
        message="Analysing voice",
    )

    try:
        encoded = payload.get("audio_base64")
        if not isinstance(encoded, str) or not encoded:
            raise ValueError("missing audio payload")
        if len(encoded) > MAX_BASE64_LENGTH:
            raise ValueError("audio payload is too large")
        audio_bytes = base64.b64decode(encoded, validate=True)
        outcome = voice_inference.analyze_audio(audio_bytes)
        st.session_state["voice_state"] = voice_inference.make_state(
            event_id=event_id,
            started_at=started_at,
            status=outcome.status,
            prediction=outcome.prediction,
            prediction_label=outcome.prediction_label,
            confidence=outcome.confidence,
            message=outcome.message,
            source="microphone",
        )
    except (ValueError, binascii.Error):
        LOGGER.exception("A browser recording could not be decoded")
        st.session_state["voice_state"] = voice_inference.make_state(
            event_id=event_id,
            started_at=started_at,
            status="error",
            message="The recording could not be decoded. Try another recording.",
            source="microphone",
        )
    except Exception:  # noqa: BLE001 - keep the gallery usable on any failure
        LOGGER.exception("Unexpected failure while handling a recording")
        st.session_state["voice_state"] = voice_inference.make_state(
            event_id=event_id,
            started_at=started_at,
            status="error",
            message="The voice sample could not be analysed. Try another recording.",
            source="microphone",
        )

    _remember_event(event_id, started_at, duration_ms)


_init_state()

st.html(
    """
<header class="vr-page-header">
  <div>
    <p class="vr-page-kicker">VoxSense · voice analysis</p>
    <h1 class="vr-page-title">Voice, in marble</h1>
    <p class="vr-page-subtitle">
      Speak. The gallery reveals the model’s prediction.
    </p>
  </div>
  <span class="vr-page-status">Private session</span>
</header>
"""
)

voice_reveal_component(
    state=st.session_state["voice_state"],
    key=MOUNT_KEY,
    on_recording_complete=_handle_recording_complete,
    height="content",
)

duration_ms = st.session_state.get("voice_last_duration_ms")
if duration_ms is not None:
    st.caption(
        f"Last sample: {duration_ms / 1000:.1f} s · "
        "Audio is processed in this session and is not stored."
    )
else:
    st.caption(
        "Use a short sample in a quiet room. Audio is processed in this "
        "session and is not stored."
    )

with st.popover("Upload", icon=":material/upload_file:", help="Analyse an audio file"):
    st.caption(
        "The same model and feature pipeline analyse the file. No result is "
        "shown until inference finishes."
    )
    with st.form("voice_upload_form", border=False):
        uploaded = st.file_uploader(
            "Choose an audio file",
            type="audio",
            key="voice_upload_file",
        )
        analyze_upload = st.form_submit_button(
            "Reveal from upload",
            icon=":material/auto_awesome:",
            width="content",
        )

    if analyze_upload:
        if uploaded is None:
            st.warning("Choose an audio file first.", icon=":material/audio_file:")
        else:
            event_id = voice_inference.new_event_id()
            started_at = time.time() * 1000
            outcome = voice_inference.analyze_audio(uploaded.getvalue())
            st.session_state["voice_state"] = voice_inference.make_state(
                event_id=event_id,
                started_at=started_at,
                status=outcome.status,
                prediction=outcome.prediction,
                prediction_label=outcome.prediction_label,
                confidence=outcome.confidence,
                message=outcome.message,
                source="upload",
            )
            _remember_event(event_id, started_at)
            st.rerun()

with st.popover("About", icon=":material/info:", help="About the model and gallery"):
    st.markdown(
        """
The prediction comes from the project's unchanged Logistic Regression model
trained on openSMILE **eGeMAPSv02** functionals. The frontend only displays
that result; it never guesses a class or calculates its own confidence. The
confidence shown is the model's raw maximum `predict_proba` value, not a
calibrated certainty.

A model output is a statistical prediction about a voice sample, not a
statement about anyone's identity.

**3D assets** — both used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/):

- [“Femal-plaster-head v2”](https://sketchfab.com/3d-models/femal-plaster-head-v2-8da05cf72c3f41ea85be0e2bbbd427ce) by mjk123.
- [“Somewhat Recognizable”](https://sketchfab.com/3d-models/somewhat-recognizable-6c52de7450864a699174cd0e77e62a60) by re1monsen.

The GLB files are loaded from the locally bundled frontend assets; no runtime
CDN is required for the gallery.
"""
    )

st.html(
    """
<footer class="vr-page-footer">
  <p>VoxSense · a quiet gallery for a single voice sample.</p>
</footer>
"""
)
