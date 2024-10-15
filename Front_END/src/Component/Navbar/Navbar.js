// Component/Navbar/Navbar.js
import React from "react";
import { Link , useNavigate }  from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";
import logo from '../../images/Logo192.png'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = ({ user, setUser }) => { // Receive user and setUser as props

  const navigate = useNavigate(); // Initialize useNavigate

  const handleProfileClick = () => {
    navigate('/profile'); // Redirect to the Profile section on click
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar1">
          <div className="navbar-left">
            <div className="logo">
              <img src={logo} alt="ArogyaSathi Logo" />
              <h1>ArogyaSathi</h1>
            </div>
            <ul className="navbar-menu">
              <li className="navbar-item">
                <Link to="/">Home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/About">About</Link>
              </li>
              <li className="navbar-item dropdown">
                <Link to="/#">Services</Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/services/symptom-checker" style={{ color: '#857b7b' }}>Symptom Checker</Link>
                  </li>
                  <li>
                    <Link to="/services/virtual-assistant" style={{ color: '#857b7b' }}>
                      Virtual Assistant
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="navbar-item dropdown">
                <Link to="/exercise">Exercise</Link>
              </li>
              <li className="navbar-item">
                <Link to="/Help">Help</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-right">
            {user ? (
              <>
      <div className="noticeContainer">
      <div className="userIcon" onClick={handleProfileClick}>
        <i className="fas fa-user"></i>
      </div>
      </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="login-btn">Login</button>
                </Link>
                <Link to="/signup">
                  <button className="signup-btn">Sign Up</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
