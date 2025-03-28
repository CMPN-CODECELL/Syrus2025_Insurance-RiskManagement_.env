import { useEffect, useState } from "react";

const AffectedCustomers = () => {
  const [users, setUsers] = useState<any[]>([]);  // Ensure it's always an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/affected-customers")
      .then((response) => response.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setUsers(data.data);
        } else {
          setUsers([]); // Ensure fallback to empty array
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Affected Customers</h1>
      {users.length === 0 ? (
        <p>No affected customers found.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <strong>Name:</strong> {user.name} - <strong>Location:</strong> {user.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AffectedCustomers;
