import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Person from './Person';

function Profiles() {
    const [allPeople, setAllPeople] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const API_url = "https://disc-assignment-5-users-api-iyct.onrender.com/users";

    useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error('Server response was not ok');
        }

        const data = await response.json();
        
        console.log("Fetched Users:", data); 

        setAllPeople(data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
        setError("Failed to load profiles. The server might be waking up...");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

    return (
        <>
            <main>
                <h1>People</h1>

                <div className="grid-container">
                    {allPeople.map((person, index) => (
                        <PersonCard 
                            key={index} 
                            name={person.name} 
                            tags={person.tags} />
                    ))}
                </div>

            </main>
        </>
    );
}

export default Profiles;