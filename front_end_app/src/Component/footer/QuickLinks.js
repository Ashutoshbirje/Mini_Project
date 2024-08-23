import React from 'react';
import './QuickLinks.css'
const QuickLinks = () => {
  return (
    <div className="footer-section">
      <h3>QUICK LINKS</h3>
      <ul className="list-item">
        <li><a href="#">Login</a></li>
        <li><a href="#">Signup</a></li>
        <li><a href="#">Forgot</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
};

export default QuickLinks;