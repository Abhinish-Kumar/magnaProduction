import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";
import {Link} from "react-router-dom"

function Footer() {
  return (
    
    // <div id='back'>
<div id='footer'>


    
      <div>
        <h1>MAGNA</h1>
        <h3>PRODUCTION</h3>
      </div>
      
      <div>
        <p>Unit H, Boyne Valley Industrial Estate</p>
        <p>Boyne Valley Road, Maidenhead, SL6 4EJ</p>
        <p>Info@paragonmusic.co.uk</p>
        <p>+1 604 653 9000 or +1 778 325 1800</p>
        <Link to="/copy-of-about-3">
        <span style={{ color: "yellow", marginRight: "20px" }}>View terms & conditions</span>
        
       
        <span style={{ color: "yellow" }}>Privacy Policy</span>
        </Link>
      </div>

      <div>
        <div>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookSquare} className="icon" id="fb" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="icon" id="tube" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon" id="gram" />
          </a>
        </div>
      </div>
      
      </div>
      // </div>
  );
}

export default Footer;
