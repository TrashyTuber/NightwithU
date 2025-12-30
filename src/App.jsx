import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      {/* Ideally, fonts should go in index.html, not here, 
        but this works for now. 
      */}
      <link
        rel="stylesheet"
        type="text/css"
        href="//fonts.googleapis.com/css?family=Quicksand"
      />

      <nav>
        {/* We use a div container instead of ul for easier grouping */}
        <div className="nav-container">
          
          {/* GROUP 1: The Left Links */}
          <div className="nav-left">
            <a href="#home">Home</a>
            <a href="#explore">Explore</a>
            <a href="#groups">Groups</a>
            <a href="#chat">Chat</a>
          </div>

          {/* GROUP 2: The Center Logo */}
          <div className="nav-logo">
            <a href="#home">NightwithU</a>
          </div>

          {/* GROUP 3: The Right Profile */}
          <div className="nav-right">
            <a href="#profile">View Profile</a>
          </div>

        </div>
      </nav>

      <main>
        <h1>Explore</h1>
        
        <h2>People</h2>
        {/* Changed class to className */}
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
          <div>
            <h3>Cool Kids</h3>
            <button className="buttonstyle">Learn More</button>
          </div>
          <div>
            <h3>Valorant Grinders</h3>
            <button className="buttonstyle">Learn More</button>
          </div>
          <div>
            <h3>Some Frat</h3>
            <button className="buttonstyle">Learn More</button>
          </div>
          <div>
            <h3>Chess Nerds</h3>
            <button className="buttonstyle">Learn More</button>
          </div>
        </div>
        <button className="buttonstyle">See More</button>
      </main>
    </>
  )
}

export default App