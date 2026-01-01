import './Footer.css'

// If you installed npm install react-icons, keep these. 
// If not, delete this import and replace the icons with text.
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        
        <div className="footer-left">
          <h2>NightwithU</h2>
        </div>

        <div className="footer-right">
          <div className="footer-icons">
            <a href="https://instagram.com">
              <FaInstagram /> 
            </a>
            <a href="https://youtube.com">
              <FaYoutube />
            </a>
            <a href="https://facebook.com">
              <FaFacebookF />
            </a>
          </div>
          <div className="footer-email">
            example@email.com
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer