import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function AffectedCustomers() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const event = queryParams.get("event");

  // Sample affected users data (Replace with API fetch)
  const [users, setUsers] = useState([
    { name: "John Doe", location: "Florida", risk: "High", policySummary: "Auto - Full Coverage" },
    { name: "Janet Smith", location: "Florida", risk: "Medium", policySummary: "Auto - Basic Coverage" },
    { name: "Alice Brown", location: "Florida", risk: "Low", policySummary: "Auto - Liability Only" },
  ]);

  return (
    <div className="p-6">
      <button onClick={() => navigate(-1)} className="mb-4 px-4 py-2 bg-gray-500 text-white rounded">
        ← Back
      </button>
      <h2 className="text-2xl font-bold mb-4">{event} - Affected Customers</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Risk Level</th>
            <th className="border p-2">Policy Summary</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border">
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.location}</td>
              <td className={`border p-2 ${user.risk === "High" ? "text-red-500" : user.risk === "Medium" ? "text-yellow-500" : "text-green-500"}`}>
                {user.risk}
              </td>
              <td className="border p-2">{user.policySummary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AffectedCustomers;
