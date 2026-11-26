"""Tests for the VoxSense inference wrapper.

These tests do not change the supplied model or feature pipeline. The real
prediction tests exercise the same ``Convertor.convert_wav`` path as the app.
"""

from __future__ import annotations

import sys
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest import mock

import numpy as np

PROJECT_ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(PROJECT_ROOT))

import voice_inference  # noqa: E402

AUDIO_DIR = PROJECT_ROOT / "temp_preview" / "audio"


class VoiceInferenceTests(unittest.TestCase):
    def test_real_model_predictions(self) -> None:
        expected = {
            "F_0.wav": "F",
            "F_1.wav": "F",
            "F_2.wav": "F",
            "M_0.wav": "M",
            "M_1.wav": "M",
            "M_2.wav": "M",
        }
        for filename, class_value in expected.items():
            with self.subTest(filename=filename):
                audio = (AUDIO_DIR / filename).read_bytes()
                outcome = voice_inference.analyze_audio(audio)
                self.assertEqual(outcome.status, "reveal")
                self.assertEqual(outcome.prediction, class_value)
                self.assertEqual(
                    outcome.prediction_label,
                    voice_inference.PREDICTION_LABELS[class_value],
                )
                self.assertIsNotNone(outcome.confidence)
                assert outcome.confidence is not None
                self.assertGreaterEqual(outcome.confidence, 0.0)
                self.assertLessEqual(outcome.confidence, 1.0)

    def test_empty_and_invalid_audio_return_error(self) -> None:
        empty = voice_inference.analyze_audio(b"")
        self.assertEqual(empty.status, "error")
        self.assertIsNone(empty.prediction)
        self.assertIn("No audio", empty.message or "")

        invalid = voice_inference.analyze_audio(b"this is not audio")
        self.assertEqual(invalid.status, "error")
        self.assertIsNone(invalid.prediction)
        self.assertIsNone(invalid.confidence)

    def test_unknown_model_output_is_uncertain(self) -> None:
        fake_model = SimpleNamespace(
            n_features_in_=88,
            predict=lambda matrix: ["X"],
            predict_proba=lambda matrix: np.array([[0.6, 0.4]]),
        )
        with (
            mock.patch.object(
                voice_inference, "load_model", return_value=fake_model
            ),
            mock.patch.object(
                voice_inference.Convertor,
                "convert_wav",
                return_value=np.ones(88),
            ),
        ):
            outcome = voice_inference.analyze_audio(b"dummy")

        self.assertEqual(outcome.status, "uncertain")
        self.assertIsNone(outcome.prediction)
        self.assertIsNone(outcome.prediction_label)
        self.assertIsNone(outcome.confidence)
        self.assertIn("could not be interpreted", outcome.message or "")

    def test_non_finite_features_return_error(self) -> None:
        fake_model = SimpleNamespace(n_features_in_=88)
        with (
            mock.patch.object(
                voice_inference, "load_model", return_value=fake_model
            ),
            mock.patch.object(
                voice_inference.Convertor,
                "convert_wav",
                return_value=np.full(88, np.nan),
            ),
        ):
            outcome = voice_inference.analyze_audio(b"dummy")

        self.assertEqual(outcome.status, "error")
        self.assertIsNone(outcome.prediction)
        self.assertIn("too short", outcome.message or "")

    def test_feature_count_mismatch_returns_error(self) -> None:
        fake_model = SimpleNamespace(n_features_in_=88)
        with (
            mock.patch.object(
                voice_inference, "load_model", return_value=fake_model
            ),
            mock.patch.object(
                voice_inference.Convertor,
                "convert_wav",
                return_value=np.ones(12),
            ),
        ):
            outcome = voice_inference.analyze_audio(b"dummy")

        self.assertEqual(outcome.status, "error")
        self.assertIsNone(outcome.prediction)
        self.assertIn("could not be converted", outcome.message or "")

    def test_event_freshness_rejects_duplicates_and_stale_events(self) -> None:
        self.assertTrue(
            voice_inference.is_event_fresh("new", 2000.0, ["old"], 1000.0)
        )
        self.assertFalse(
            voice_inference.is_event_fresh("old", 3000.0, ["old"], 1000.0)
        )
        self.assertFalse(
            voice_inference.is_event_fresh("late", 999.0, [], 1000.0)
        )
        self.assertTrue(
            voice_inference.is_event_fresh("same-time", 1000.0, [], 1000.0)
        )

    def test_state_payload_contract(self) -> None:
        state = voice_inference.make_state(
            event_id="evt-1",
            started_at=123.5,
            status="reveal",
            prediction="M",
            prediction_label="Male",
            confidence=0.75,
            source="microphone",
        )
        self.assertEqual(
            set(state),
            {
                "version",
                "event_id",
                "started_at",
                "status",
                "prediction",
                "prediction_label",
                "confidence",
                "message",
                "source",
            },
        )
        self.assertEqual(state["version"], voice_inference.STATE_VERSION)
        self.assertEqual(state["prediction"], "M")
        self.assertEqual(state["prediction_label"], "Male")

        idle = voice_inference.idle_state()
        self.assertEqual(idle["status"], "idle")
        self.assertIsNone(idle["prediction"])
        self.assertIsNone(idle["confidence"])


if __name__ == "__main__":
    unittest.main()
