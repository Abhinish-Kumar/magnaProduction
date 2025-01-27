import { useState, useEffect } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../Images/logo-magna.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  // Navigate to home and scroll to form
  function navigateHome() {
    navigate("/"); // Navigate to the home page
  }

  useEffect(() => {
    // Check if the current hash is '#form-container' and scroll into view if so
    if (window.location.hash === '#form-container') {
      setTimeout(() => {
        document.getElementById('form-container')?.scrollIntoView({ behavior: 'smooth' });
      }, 300); // Delay to ensure navigation completes
    }
  }, []); // Empty dependency array ensures this only runs once on component mount

  return (
    <div id='header'>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleSidebar}>HOME</Link></li>
          <li><a onClick={() => { navigateHome(); setTimeout(() => document.getElementById('form-container')?.scrollIntoView({ behavior: 'smooth' }), 300); }}>CONTACT US</a></li>
          <li><Link to="/about" onClick={toggleSidebar}>ABOUT</Link></li>
          <li><Link to="/services" onClick={toggleSidebar}>SERVICES</Link></li>
          <li><Link to="/djPackages" onClick={toggleSidebar}>DJ PACKAGES</Link></li>
          <li><Link to="/reviews" onClick={toggleSidebar}>REVIEWS</Link></li>
        </ul>
      </div>

      {/* Content Overlay */}
      <div className={`overlay ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>

      {/* Main Navbar */}
      <nav>
        <div className="logo"><img src={Logo} alt="Logo" /></div>

        {/* Sidebar Toggle Button (Hamburger icon) */}
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          &#9776; {/* Hamburger icon */}
        </div>

        {/* Navbar links for larger screens */}
        <ul id='links'>
          <li><Link to="/">HOME</Link></li>
          <li><a onClick={() => { navigateHome(); setTimeout(() => document.getElementById('form-container')?.scrollIntoView({ behavior: 'smooth' }), 300); }}>CONTACT US</a></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/djPackages">DJ PACKAGES</Link></li>
          <li><Link to="/rental">RENTAL</Link></li>
          <li><Link to="/reviews">REVIEWS</Link></li>
        </ul>

        {/* Social Media Links */}
        <ul>
          <li> 
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookSquare} className="icon" id="fb" style={{ color: "rgb(9 20 5)", marginRight: "-1rem" }} />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="icon" id="gram" style={{ color: "rgb(9 20 5)" }} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
