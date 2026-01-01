import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import Person from './Person'

function Group({ title, description }) {
    const [isJoined, setIsJoined] = useState(false);

    return (
        <div className="group">
            <h3>{title}</h3>

            <p>{description}</p>

            <div className="button-row">
                <button
                    className={`buttonstyle join-button ${isJoined ? 'active' : ''}`}
                    onClick={() => setIsJoined(!isJoined)}
                >
                    {isJoined ? "Joined" : "Join"}
                </button>

                <button className="buttonstyle">Learn More</button>
            </div>
        </div>
    );
}

function Explore() {
    const tempPeople = [
        { name: "Bob C.", tags: ["Gaming", "Chill"] },
        { name: "Amy B.", tags: ["Club", "Party", "Music"] },
        { name: "Hogart D.", tags: ["Music"] },
        { name: "Jeffery L.", tags: ["Gaming", "Party"] }
    ];

    return (
        <>
            <main>
                <h1>Explore</h1>

                <h2>People</h2>
                <div className="grid-container">
                    {tempPeople.map((person, index) => (
                        <Person
                            key={index}
                            name={person.name}
                            tags={person.tags}
                        />
                    ))}
                </div>

                <Link to="/all-profiles">
                    <button className="buttonstyle" style={{ marginBottom: '75px' }}>See More</button>
                </Link>

                <h2>Groups</h2>
                <div className="grid-container">
                    <Group
                        title={"Cool Kids"}
                        description={"Placeholder description"} />
                    <Group
                        title={"Valorant Grinders"}
                        description={"Placeholder description"} />
                    <Group
                        title={"Some Frat Beta Beta Beta"}
                        description={"Placeholder description"} />
                    <Group
                        title={"Chess Nerds"}
                        description={"Placeholder description"} />
                </div>
                <button className="buttonstyle" style={{ marginBottom: '75px' }}>See More</button>
            </main>
        </>
    )
}

export default Explore