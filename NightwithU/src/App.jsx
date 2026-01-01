import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'
import Footer from './Footer'
import Person from './Person'
import Profiles from './Profiles'
import Explore from './Explore'

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

function App() {

  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="//fonts.googleapis.com/css?family=Quicksand"
      />

      <NavBar />

      <Routes>
        <Route path="/" element={<Explore />} />
        
        <Route path="/all-profiles" element={<Profiles />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App