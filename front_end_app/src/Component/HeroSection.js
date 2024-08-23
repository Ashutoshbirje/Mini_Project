import React from 'react';
import './HeroSection.css';
import doctorImage from '../images/Docter.png'; 

const HeroSection = () => {
  return (
    <div className="hero-section">
        <div className="hero-section1">
        <div className="hero-content">
        <div className='hero-part_A'>
          <h1>
         <div>We provide <span className="highlight">medical</span></div>
         services that you can<div><span className="highlight">trust </span> !</div>
          </h1>
        </div>
        <div className='hero-part_B'>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sed nisl pellentesque, faucibus libero eu.
          </p>
        </div>
        <div className="hero-buttons">
          <button className="get-started-btn">GET STARTED</button>
          <button className="get-appoint-btn">GET APPOINT</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={doctorImage} alt="Doctor" />
      </div>
        </div>
    </div>
  );
};

export default HeroSection;