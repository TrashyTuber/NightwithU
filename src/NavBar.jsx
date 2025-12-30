import './NavBar.css'

function NavBar() {
  return (
    <nav>
      <div className="nav-container">
        
        <div className="nav-left">
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#groups">Groups</a>
          <a href="#chat">Chat</a>
        </div>

        <div className="nav-logo">
          <a href="#home">NightwithU</a>
        </div>

        <div className="nav-right">
          <a href="#profile">View Profile</a>
        </div>

      </div>
    </nav>
  )
}

export default NavBar