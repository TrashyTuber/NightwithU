import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import Footer from './Footer'

function Group({title, description}) {
  const [isJoined, setIsJoined] = useState(false);

  return (
    <div>
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

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="//fonts.googleapis.com/css?family=Quicksand"
      />

      <NavBar />

      <main>
        <h1>Explore</h1>

        <h2>People</h2>
        <div className="grid-container">
          <div>
            <h3>Bob C.</h3>
            <p>Things in common:</p>
            <p>"Various tags"</p>
          </div>
          <div>
            <h3>Amy B.</h3>
            <p>Things in common:</p>
            <p>"Various tags"</p>
          </div>
          <div>
            <h3>Hogart D.</h3>
            <p>Things in common:</p>
            <p>"Various tags"</p>
          </div>
          <div>
            <h3>Jeffery L.</h3>
            <p>Things in common:</p>
            <p>"Various tags"</p>
          </div>
        </div>
        <button className="buttonstyle">See More</button>

        <h2>Groups</h2>
        <div className="grid-container">
          <Group 
            title={"Cool Kids"}
            description={"Placeholder description"}/>
          <Group 
            title={"Valorant Grinders"}
            description={"Placeholder description"}/>
          <Group 
            title={"Some Frat Beta Beta Beta"}
            description={"Placeholder description"}/>
          <Group 
            title={"Chess Nerds"}
            description={"Placeholder description"}/>
        </div>
        <button className="buttonstyle">See More</button>
      </main>

      <Footer />
    </>
  )
}

export default App