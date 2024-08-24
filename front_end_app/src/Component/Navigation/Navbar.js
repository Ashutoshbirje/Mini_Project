import React from 'react';
import './Navbar.css';
import Logo from './Logo';

const Navbar = () => {
  return (
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
              <li><a href="#service1">Service 1</a></li>
              <li><a href="#service2">Service 2</a></li>
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
        <button className="login-btn">LOG IN</button>
        <button className="signup-btn">SIGN UP</button>
      </div>        
      </div>
    </nav>
  );
};

export default Navbar;