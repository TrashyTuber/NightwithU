import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Person from './Person';

function Profiles() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_url = "https://disc-assignment-5-users-api-iyct.onrender.com/api/users";

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

        {isLoading && <p>Loading profiles...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!isLoading && !error && (
          <div className="grid-container">
            {people.map((user) => (
              <Person
                key={user.id}
                name={`${user.firstName} ${user.lastName}`}

                tags={[
                  /* Leaving tags empty for now since user object doesn't match with the tags I want */
                ]}
              />
            ))}
          </div>
        )}

      </main>
    </>
  );
}

export default Profiles;