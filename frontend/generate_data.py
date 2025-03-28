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
indian_cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", 
                 "Chennai", "Kolkata", "Pune", "Jaipur", "Lucknow"]

# List of valid coverage details
valid_coverage_options = [
    "Fire and Smoke Damage", "Flood Damage", "Earthquake Protection", 
    "Burglary and Theft", "Vandalism Coverage", "Water Leakage Protection", 
    "Personal Liability", "Temporary Housing Coverage", "Electrical Damage",
    "Falling Object Damage", "Vehicle Impact Coverage", "Terrorism Coverage",
    "Legal Expense Coverage", "Medical Payments to Others", "Glass Breakage Protection"
]

# Convert DataFrame to list of dictionaries
data = df.to_dict(orient="records")

# Upload Data to Firebase Firestore with city & valid coverage details
def upload_to_firestore():
    collection_ref = db.collection("property_insurance_policies2")  # Collection Name
    for record in data:
        # Assign a random city
        record["city"] = random.choice(indian_cities)

        # Assign 3 random valid coverage details
        record["coverage_details"] = random.sample(valid_coverage_options, 3)

        # Use ID as document name if available, else auto-generate
        doc_ref = collection_ref.document(str(record.get("id", "")) if record.get("id") else None)

        doc_ref.set(record)  # Upload Data
        print(f"Uploaded record with ID: {record.get('id', 'Auto-generated')}, City: {record['city']}, Coverages: {record['coverage_details']}")

# Run Upload Function
upload_to_firestore()
