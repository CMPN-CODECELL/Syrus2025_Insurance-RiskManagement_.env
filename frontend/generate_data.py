import pandas as pd
import firebase_admin
from firebase_admin import credentials, firestore
import random

# Initialize Firebase
cred = credentials.Certificate("syrusenv-firebase-adminsdk-fbsvc-d98bde0842.json")  # Ensure correct path
if not firebase_admin._apps:  # Prevent re-initialization error
    firebase_admin.initialize_app(cred)

db = firestore.client()

# Load Excel file
excel_filename = "property_insurance_data.xlsx"
df = pd.read_excel(excel_filename)

# List of major Indian cities
indian_cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Pune", "Jaipur", "Lucknow"]

# Convert DataFrame to list of dictionaries
data = df.to_dict(orient="records")

# Upload Data to Firebase Firestore with a random city assigned
def upload_to_firestore():
    collection_ref = db.collection("property_insurance_policies1")  # Collection Name
    for record in data:
        # Assign a random city
        record["city"] = random.choice(indian_cities)

        # Use ID as document name if available, else auto-generate
        doc_ref = collection_ref.document(str(record.get("id", "")) if record.get("id") else None)

        doc_ref.set(record)  # Upload Data
        print(f"Uploaded record with ID: {record.get('id', 'Auto-generated')}, City: {record['city']}")

# Run Upload Function
upload_to_firestore()
