import { useState, useEffect } from 'react';
import './NavBar.css'

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? 'scrolled-nav' : ''}>
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