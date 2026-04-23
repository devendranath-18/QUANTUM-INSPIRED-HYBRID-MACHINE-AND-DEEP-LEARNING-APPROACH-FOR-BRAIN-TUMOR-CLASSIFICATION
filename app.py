from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
import cv2
from PIL import Image
import base64

app = Flask(__name__)
CORS(app)

IMG_SIZE = 160

# ✅ Load SavedModel correctly
model = tf.saved_model.load("final_model_major")
infer = model.signatures["serving_default"]   # 🔥 important

CLASS_NAMES = ['glioma', 'meningioma', 'pituitary', 'no_tumor']

# ---------------- PREPROCESS ----------------
def preprocess(image):
    image = image.resize((IMG_SIZE, IMG_SIZE))
    image = np.array(image) / 255.0
    image = np.expand_dims(image, axis=0).astype(np.float32)
    return image

# ---------------- API ----------------
@app.route('/predict', methods=['POST'])
def predict():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file uploaded"})

        file = request.files['file']
        image = Image.open(file).convert("RGB")

        img = preprocess(image)

        # ✅ Correct inference
        output = infer(tf.constant(img))

        # 🔥 Get output key dynamically
        key = list(output.keys())[0]
        pred = output[key].numpy()

        class_index = int(np.argmax(pred))
        confidence = float(np.max(pred))
        prediction = CLASS_NAMES[class_index]

        return jsonify({
            "prediction": prediction,
            "confidence": round(confidence * 100, 2)
        })

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)