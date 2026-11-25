import streamlit as st
import joblib
import Convertor

st.set_page_config(
    page_title="Voice gender detector",
    page_icon=":material/record_voice_over:",
    layout="centered",
)


@st.cache_resource
def load_model():
    return joblib.load("gender_model.joblib")


model = load_model()

st.title("Voice gender detector")
st.caption("Record a clip or upload an audio file, and the model will predict whether the voice is male or female.")

left, right = st.columns(2)
with left:
    recorded = st.audio_input("Record your voice", sample_rate=16000)
with right:
    uploaded = st.file_uploader("Or upload an audio file", type="audio")

audio = recorded or uploaded

if audio:
    st.audio(audio, alt="Voice clip to analyze")

    with st.spinner("Analyzing voice..."):
        features = Convertor.convert_wav(audio.getvalue()).reshape(1, -1)
        prediction = model.predict(features)[0]
        confidence = model.predict_proba(features).max()

    label = "Male" if prediction == "M" else "Female"

    with st.container(border=True):
        st.metric("Predicted gender", label)
        st.progress(float(confidence), text=f"Confidence: {confidence:.1%}")

    st.caption("Model: logistic regression on openSMILE eGeMAPS features.")
else:
    st.info("Record or upload a voice clip to get a prediction.", icon=":material/mic:")
