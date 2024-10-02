import React, { useState } from 'react';
import './Navbar.css'; // Assuming you'll add the modal styles here.
import Logo from './Logo';
import Login from '../Login/Login';
import Signup from '../SignUp/SignUp';

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);


  const handleLoginClick = () => {
    setShowLoginModal(true);
    setShowSignupModal(false); // Close signup if open
  };

  const handleSignupClick = () => {
    setShowSignupModal(true);
    setShowLoginModal(false); // Close login if open
  };

  const closeModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar1">
          <div className="navbar-left">
            <Logo />
            <ul className="navbar-menu">
              <li className="navbar-item"><a href="#home">Home</a></li>
              <li className="navbar-item"><a href="#about">About</a></li>
              <li className="navbar-item dropdown">
                <a href="#services">Services</a>
                <ul className="dropdown-menu">
                  <li><a href="#service1">Symptom Checker</a></li>
                  <li><a href="#service1">Virtual Assistant</a></li>
                  <li><a href="#service3">Personalized Advice</a></li>
                </ul>
              </li>
              <li className="navbar-item dropdown">
                <a href="#exercise">Exercise</a>
                <ul className="dropdown-menu">
                  <li><a href="#exercise1">Exercise 1</a></li>
                  <li><a href="#exercise2">Exercise 2</a></li>
                </ul>
              </li>
              <li className="navbar-item"><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="navbar-right">
            <button className="login-btn" onClick={handleLoginClick}>LOG IN</button>
            <button className="signup-btn" onClick={handleSignupClick}>SIGN UP</button>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>X</button>
            <Login />
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>X</button>
            <Signup />
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar;
