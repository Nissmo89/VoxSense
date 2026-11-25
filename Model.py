import pandas as pd
import numpy as np
import joblib
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
import Convertor


def build_dataset():
    df = pd.read_parquet("./data/test-00000-of-00001.parquet")
    X = np.array([Convertor.convert_wav(a["bytes"]) for a in df["audio"]])
    y = df["gender"].to_numpy()
    pd.DataFrame(X, columns=[f"f{i}" for i in range(X.shape[1])]).assign(gender=y).to_parquet("./data/processed_data.parquet")
    return X, y


def evaluate(name, model, X_test, y_test):
    pred = model.predict(X_test)
    print(name, "accuracy:", accuracy_score(y_test, pred))
    print(classification_report(y_test, pred))


X, y = build_dataset()
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

model1 = make_pipeline(StandardScaler(), LogisticRegression(max_iter=1000))
model2 = make_pipeline(StandardScaler(), LogisticRegression(C=0.01, max_iter=1000))

model1.fit(X_train, y_train)
model2.fit(X_train, y_train)

evaluate("LR C=1", model1, X_test, y_test)
evaluate("LR C=0.01", model2, X_test, y_test)

joblib.dump(model2, "gender_model.joblib")
