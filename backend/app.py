from flask import Flask, request, jsonify
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, firestore

app = Flask(__name__)
CORS(app)

cred = credentials.Certificate("syrusenv-firebase-adminsdk-fbsvc-d98bde0842.json")
if not firebase_admin._apps:
    firebase_admin.initialize_app(cred)

db = firestore.client()

@app.route("/affected-customers", methods=["GET"])
def get_affected_customers():
    try:
        location = request.args.get("location", "Pune")

        customers_ref = db.collection("property_insurance_policies2").where("city", "==", location)
        customers_docs = customers_ref.stream()

        customers = []
        for doc in customers_docs:
            data = doc.to_dict()
            customers.append({
                "id": data.get("policy_id"),  # Ensure policy_id exists in Firestore
                "name": data.get("owner_name", "Unknown"),
                "location": data.get("city", "Unknown"),
            })

        return jsonify({"success": True, "data": customers}), 200

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
