import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'

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