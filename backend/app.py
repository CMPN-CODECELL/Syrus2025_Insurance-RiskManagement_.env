from flask import Flask, request, jsonify
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all domains

# Initialize Firebase Admin SDK with the service account key
cred = credentials.Certificate("syrusenv-firebase-adminsdk-fbsvc-d98bde0842.json")  # Ensure correct path
if not firebase_admin._apps:
    firebase_admin.initialize_app(cred)

# Initialize Firestore client
db = firestore.client()

@app.route("/affected-customers", methods=["GET"])
def get_affected_customers():
    try:
        # Get the 'location' query parameter (defaulting to 'Pune')
        location = request.args.get("location", "Pune")

        # Query Firestore for customers in Pune
        customers_ref = db.collection("property_insurance_policies1").where("location", "==", location)
        customers_docs = customers_ref.stream()

        # Convert Firestore docs to a list of dictionaries
        customers = [doc.to_dict() for doc in customers_docs]

        return jsonify({"success": True, "data": customers}), 200

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
