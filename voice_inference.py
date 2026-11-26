"""Audio inference for the VoxSense voice reveal gallery.

The ML pipeline is intentionally left unchanged. This module only wraps the
existing ``Convertor.convert_wav`` feature extraction and the cached
``gender_model.joblib`` Logistic Regression pipeline, then returns a small,
validated description of the result for the frontend.

Raw audio is never logged or persisted by this module.
"""

from __future__ import annotations

import logging
import uuid
from collections.abc import Sequence
from dataclasses import dataclass
from typing import Any

import joblib
import numpy as np
import streamlit as st

import Convertor

LOGGER = logging.getLogger(__name__)

MODEL_PATH = "gender_model.joblib"
MAX_AUDIO_BYTES = 30 * 1024 * 1024
EXPECTED_FEATURE_COUNT = 88

# The exact classes produced by the existing model. These are not renamed here.
KNOWN_CLASSES = ("F", "M")
PREDICTION_LABELS = {"F": "Female", "M": "Male"}

STATE_VERSION = 1


@dataclass(frozen=True)
class InferenceOutcome:
    """A truthful description of one inference attempt."""

    status: str  # "reveal", "uncertain", or "error"
    prediction: str | None
    prediction_label: str | None
    confidence: float | None
    message: str | None


@st.cache_resource(show_spinner=False)
def load_model():
    """Load the supplied model once per Streamlit session."""
    return joblib.load(MODEL_PATH)


def make_state(
    *,
    event_id: str,
    started_at: float,
    status: str,
    prediction: str | None = None,
    prediction_label: str | None = None,
    confidence: float | None = None,
    message: str | None = None,
    source: str | None = None,
) -> dict[str, Any]:
    """Build the versioned payload consumed by the frontend."""
    return {
        "version": STATE_VERSION,
        "event_id": str(event_id),
        "started_at": float(started_at),
        "status": status,
        "prediction": prediction,
        "prediction_label": prediction_label,
        "confidence": confidence,
        "message": message,
        "source": source,
    }


def idle_state() -> dict[str, Any]:
    """The initial, result-free state."""
    return make_state(event_id="initial", started_at=0.0, status="idle")


def new_event_id() -> str:
    return uuid.uuid4().hex


def is_event_fresh(
    event_id: str,
    started_at: float,
    seen_event_ids: Sequence[str],
    latest_started_at: float,
) -> bool:
    """Return whether an event should still reach the model.

    A replayed ``event_id`` is always ignored. An event that began before the
    most recently started event is also ignored, so a delayed browser callback
    cannot overwrite a newer interaction.
    """
    if event_id in seen_event_ids:
        return False
    return float(started_at) >= float(latest_started_at)


def analyze_audio(audio_bytes: bytes) -> InferenceOutcome:
    """Run the existing preprocessing and model; never invent a result."""
    if not audio_bytes:
        return InferenceOutcome(
            status="error",
            prediction=None,
            prediction_label=None,
            confidence=None,
            message="No audio was received. Try recording or uploading a clip.",
        )

    if len(audio_bytes) > MAX_AUDIO_BYTES:
        LOGGER.warning("Rejected oversized audio payload (%d bytes)", len(audio_bytes))
        return InferenceOutcome(
            status="error",
            prediction=None,
            prediction_label=None,
            confidence=None,
            message="The audio file is too large. Use a clip under 30 MB.",
        )

    try:
        model = load_model()
        features = Convertor.convert_wav(audio_bytes)
        values = np.asarray(features, dtype=float)

        if values.ndim != 1:
            values = values.reshape(-1)

        expected = getattr(model, "n_features_in_", None)
        if expected is None:
            expected = EXPECTED_FEATURE_COUNT
        if values.size != expected:
            LOGGER.warning(
                "Feature count mismatch: expected %s, received %s",
                expected,
                values.size,
            )
            return InferenceOutcome(
                status="error",
                prediction=None,
                prediction_label=None,
                confidence=None,
                message="The audio could not be converted into model features.",
            )

        matrix = values.reshape(1, -1)
        if not np.isfinite(matrix).all():
            LOGGER.warning("Non-finite features produced from a %d byte clip", len(audio_bytes))
            return InferenceOutcome(
                status="error",
                prediction=None,
                prediction_label=None,
                confidence=None,
                message="The clip was too short or could not be decoded. Try a longer recording.",
            )

        raw_prediction = model.predict(matrix)[0]
        prediction = str(raw_prediction).strip()
        probabilities = np.asarray(model.predict_proba(matrix), dtype=float)
        confidence = (
            float(np.max(probabilities))
            if probabilities.size > 0 and np.isfinite(probabilities).all()
            else None
        )
        if confidence is not None and not 0.0 <= confidence <= 1.0:
            confidence = None

        LOGGER.info(
            "Inference complete: class=%s confidence=%s bytes=%d",
            prediction,
            confidence,
            len(audio_bytes),
        )

        if prediction not in KNOWN_CLASSES:
            LOGGER.warning("Unknown model class returned: %r", prediction)
            return InferenceOutcome(
                status="uncertain",
                prediction=None,
                prediction_label=None,
                confidence=None,
                message=(
                    "The model returned an output that could not be interpreted. "
                    "Try another recording."
                ),
            )

        return InferenceOutcome(
            status="reveal",
            prediction=prediction,
            prediction_label=PREDICTION_LABELS[prediction],
            confidence=confidence,
            message=None,
        )
    except Exception as error:  # noqa: BLE001 - keep the UI alive on pipeline failure
        LOGGER.exception("Voice analysis failed (%s)", type(error).__name__)
        return InferenceOutcome(
            status="error",
            prediction=None,
            prediction_label=None,
            confidence=None,
            message="The voice sample could not be analysed. Try another recording.",
        )
