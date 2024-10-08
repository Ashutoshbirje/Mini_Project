import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Profile from "../Profile/Profile"; // Import Profile component
import Login from "../Login/Login";
import Signup from "../SignUp/SignUp";
import "./Navbar.css";
import logo from '../../images/Logo192.png'; 

const Navbar = () => {
  const [user, setUser] = useState(null); // State to hold user info
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for login modal
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false); // State for signup modal

  const closeModal = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
  };

  useEffect(() => {
    // Add or remove blur class on body
    if (isLoginModalOpen || isSignupModalOpen) {
      document.body.classList.add("blur");
    } else {
      document.body.classList.remove("blur");
    }
    // Cleanup function to remove the class on unmount
    return () => document.body.classList.remove("blur");
  }, [isLoginModalOpen, isSignupModalOpen]);

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
                    <Link to="/services/symptom-checker">Symptom Checker</Link>
                  </li>
                  <li>
                    <Link to="/services/virtual-assistant">
                      Virtual Assistant
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/personalized-advice">
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
                <button className="login-btn" onClick={() => setIsLoginModalOpen(true)}>
                  Login
                </button>
                <button className="signup-btn" onClick={() => setIsSignupModalOpen(true)}>
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <Login setUser={setUser} />
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <Signup setUser={setUser} />
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar;