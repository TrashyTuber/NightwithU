import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Person from './Person';

function Profiles() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_url = "http://localhost:3000/users";

  const [error, setError] = useState(null);

  const getAllUsers = async () => {
    try {
      const response = await fetch(API_url);

      if (!response.ok) {
        throw new Error('Server response was not ok');
      }

      const data = await response.json();

      console.log("Fetched Users:", data);

      if (Array.isArray(data)) {
        setPeople(data);
      } else {
        console.error("API returned strange data:", data);
        setError("Received invalid data format from server.");
      }

    } catch (err) {
      console.error("Failed to fetch users:", err);
      setError("Failed to load profiles. The server might be waking up...");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <main>
        <h1>People</h1>

        {isLoading && <h2>Loading profiles...</h2>}
        {error && <h2 style={{ color: 'red' }}>{error}</h2>}

        {!isLoading && !error && (
          <div className="grid-container">
            {people.map((user) => (
              <Person
                key={user.id}
                name={`${user.first_name} ${user.last_name}`}
                tags={user.tags || []}
              />
            ))}
          </div>
        )}

      </main>
    </>
  );
}

export default Profiles;