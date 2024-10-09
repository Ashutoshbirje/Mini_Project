import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Profile from "../Profile/Profile"; // Import Profile component
import "./Navbar.css";
import logo from '../../images/Logo192.png'; 

const Navbar = () => {
  const [user, setUser] = useState(null); // State to hold user info

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
                <a href="/#">About</a>
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
                  <li>
                    <Link to="/services/personalized-advice" style={{ color: '#857b7b' }}>
                      Personalized Advice
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="navbar-item dropdown">
                <Link to="/exercise">Exercise</Link>
              </li>
              <li className="navbar-item">
                <a href="/#">Help</a>
              </li>
            </ul>
          </div>

          <div className="navbar-right">
            {user ? (
              <Profile user={user} />
            ) : (
              <>
                <Link to="/login">
                  <button className="login-btn">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="signup-btn">
                    Sign Up
                  </button>
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
