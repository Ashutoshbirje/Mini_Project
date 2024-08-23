import React from 'react';
import Company from './Company';
import QuickLinks from './QuickLinks';
import Help from './Help';
import './Footer.css'
import Logo from '../Logo.js';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Logo />
        <Company />
        <QuickLinks />
        <Help />
      </div>
      <div className="footer-bottom">
        <p>Copyright © Your Website 2022</p>
        <ul>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;