import pandas as pd
import random
import uuid
import firebase_admin
from firebase_admin import credentials, firestore
from faker import Faker
from datetime import datetime, timedelta
import json

# Initialize Faker
fake = Faker('en_IN')

# Load Firebase credentials from firebase.config.js
with open("firebase.config.js", "r") as f:
    config_data = json.loads(f.read().split("export default ")[1])  # Extract JSON

# Initialize Firebase Admin SDK
cred = credentials.Certificate(config_data["serviceAccountKeyPath"])
firebase_admin.initialize_app(cred)

# Firestore Database Reference
db = firestore.client()
collection_ref = db.collection("property_insurance_policies")

# Property Types
property_types = ["Residential", "Commercial", "Industrial"]
damage_types = ["Fire", "Flood", "Earthquake", "Vandalism"]

# Function to generate a random claim history
def generate_claims():
    num_claims = random.randint(0, 5)
    claims = []
    for _ in range(num_claims):
        date = fake.date_between(start_date="-3y", end_date="today").strftime("%Y-%m-%d")
        amount = round(random.uniform(10000, 5000000), 2)
        status = random.choice(["Approved", "Rejected", "Pending"])
        damage = random.choice(damage_types)
        claims.append({"date": date, "amount": amount, "status": status, "damage_type": damage})
    return claims

# Function to generate a single property insurance policy
def generate_property_policy():
    start_date = fake.date_between(start_date="-4y", end_date="today")
    period_years = random.randint(1, 5)
    end_date = start_date + timedelta(days=365 * period_years)
    renewal_date = end_date + timedelta(days=30)

    return {
        "id": str(uuid.uuid4().int)[:10],
        "property_type": random.choice(property_types),
        "coverage_details": fake.sentence(),
        "sum_insured": round(random.uniform(1000000, 10000000), 2),
        "premium": round(random.uniform(5000, 50000), 2),
        "deductible": round(random.uniform(5000, 50000), 2),
        "location": fake.address(),
        "owner_name": fake.name(),
        "age_of_property": random.randint(1, 100),
        "construction_type": random.choice(["Concrete", "Wood", "Brick", "Steel"]),
        "claims_history": generate_claims(),
        "start_date": start_date.strftime("%Y-%m-%d"),
        "end_date": end_date.strftime("%Y-%m-%d"),
        "renewal_date": renewal_date.strftime("%Y-%m-%d")
    }

# Generate 50 property insurance policies
data = [generate_property_policy() for _ in range(50)]

# Save to Excel
excel_filename = "property_insurance_data.xlsx"
df = pd.DataFrame(data)
df.to_excel(excel_filename, index=False)
print(f"Data saved to {excel_filename}")

# Upload to Firebase Firestore
def upload_to_firebase():
    for policy in data:
        doc_ref = collection_ref.document(policy["id"])
        doc_ref.set(policy)
        print(f"Uploaded policy ID {policy['id']} to Firestore.")

upload_to_firebase()
