import { useEffect, useState } from "react";

const AffectedCustomers = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Static Data (No Firebase Fetching)
  const premiumAdjustments = [
    {
      id: 1616305560,
      owner_name: "Shravya Ram",
      age_of_property: 51,
      original_premium: 37036.92,
      adjusted_premium: 42592.46,
      percent_increase: 15.0,
      reason: [
        "Policy adjusted due to elevated risk from Pune hurricane.",
        "Commercial property, aged 51 years, with steel construction.",
        "Adjustment is moderate due to structural resilience.",
        "Coverage includes Water Leakage Protection."
      ]
    },
    {
      id: 1996548267,
      owner_name: "Hemal Merchant",
      age_of_property: 4,
      original_premium: 45387.29,
      adjusted_premium: 54685.27,
      percent_increase: 20.48,
      reason: [
        "Policy adjusted due to significant hurricane threat in Pune.",
        "Residential property, aged 4 years, with steel construction.",
        "Existing flood claim history necessitates a higher adjustment.",
        "Coverage includes Water Leakage Protection."
      ]
    },
    {
      id: 2092900200,
      owner_name: "Anika Mukherjee",
      age_of_property: 35,
      original_premium: 21299.71,
      adjusted_premium: 28490.99,
      percent_increase: 33.76,
      reason: [
        "Policy adjusted due to elevated risk from Pune hurricane.",
        "Commercial property, aged 35 years, with wood construction.",
        "Wood structure increases vulnerability, leading to a higher adjustment.",
        "Coverage includes Flood Damage."
      ]
    },
    {
      id: 2639382670,
      owner_name: "Idika Parekh",
      age_of_property: 77,
      original_premium: 48503.94,
      adjusted_premium: 53354.33,
      percent_increase: 10.0,
      reason: [
        "Policy adjusted due to increased hurricane risk in Pune.",
        "Residential property, aged 77 years, with concrete construction.",
        "Smaller adjustment due to strong structural integrity.",
        "No explicit flood or water damage coverage."
      ]
    },
    {
      "id": 2996930853,
      "owner_name": "Arjun Garde",
      "age_of_property": 12,
      "original_premium": 46206.65,
      "adjusted_premium": 50827.32,
      "percent_increase": 10.00,
      "reason": [
        "Dear Arjun Garde, Policy ID 2996930853 premium adjusted due to the hurricane in Pune.",
        " Your residential property, aged 12 years, with concrete construction means the adjustment is relatively lower.",
        " Your policy does not include specific flood or water damage coverage."]
    },
    {
      "id": 6401055656,
      "owner_name": "Ayush Mangat",
      "age_of_property": 39,
      "original_premium": 12840.0,
      "adjusted_premium": 14930.64,
      "percent_increase": 16.28,
      "reason": ["Dear Ayush Mangat, Policy ID 6401055656 premium adjusted due to the hurricane impacting Pune. ",
        "Your industrial property, aged 39 years, with concrete construction receives a smaller adjustment.",
        " Your policy includes Flood Damage, which is relevant to the current situation."]
    },
    {
      "id": 7541534348,
      "owner_name": "Henry Rau",
      "age_of_property": 11,
      "original_premium": 16476.96,
      "adjusted_premium": 21990.49,
      "percent_increase": 33.46,
      "reason": ["Dear Henry Rau, Policy ID 7541534348 premium adjusted due to the significant hurricane risk in Pune.",
         "Your industrial property, aged 11 years, with wood construction increases its susceptibility to damage, necessitating a higher premium adjustment.",
         " Your policy does not include specific flood or water damage coverage."]
    }
  ];

  useEffect(() => {
    setUsers(premiumAdjustments);
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      {/* Back Button */}
      <button onClick={() => window.history.back()} style={styles.backButton}>
        ← Back
      </button>

      <h1>Affected Customers</h1>

      {users.length === 0 ? (
        <p>No affected customers found.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
            border: "2px solid black"
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th style={styles.th}>Policy ID</th>
              <th style={styles.th}>Owner Name</th>
              <th style={styles.th}>Location</th>
              <th style={styles.th}>Age of Property</th>
              <th style={styles.th}>Original Premium</th>
              <th style={styles.th}>Adjusted Premium</th>
              <th style={styles.th}>Increase (%)</th>
              <th style={styles.th}>Summary</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} style={styles.tr}>
                <td style={styles.td}>{user.id}</td>
                <td style={styles.td}>{user.owner_name}</td>
                <td style={styles.td}>Pune</td>
                <td style={styles.td}>{user.age_of_property} years</td>
                <td style={styles.td}>₹{user.original_premium.toFixed(2)}</td>
                <td style={styles.td}>₹{user.adjusted_premium.toFixed(2)}</td>
                <td style={styles.td}>{user.percent_increase}%</td>
                <td style={styles.td}>
                  <ul>
                    {user.reason.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  backButton: {
    backgroundColor: "#007BFF",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "20px",
    transition: "0.3s",
  },
  th: {
    border: "2px solid black",
    padding: "8px",
    backgroundColor: "#e0e0e0",
  },
  td: {
    border: "2px solid black",
    padding: "8px",
  },
  tr: {
    backgroundColor: "#ffffff",
  },
};

export default AffectedCustomers;
