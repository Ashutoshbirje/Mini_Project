import React from "react";
import "./Home.css";
import doctorImage from '../../images/Docter.png';
import { Link } from "react-router-dom"; 

  const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-section1">
          <div className="hero-content">
            <div className='hero-part_A'>
              <h1>
                <div>We provide <span className="highlight typing-effect blink">medical</span></div>
                services that you can<div><span className="highlight typing-effect blink">trust </span>!</div>
              </h1>
            </div>
            <div className='hero-part_B'>
              <p>
                Join ArogyaSathi today and take control of your health with the support of a secure, innovative, and personalized digital healthcare experience.
              </p>
            </div> 
            <div className="hero-buttons">
              <Link to="/get-started">
                <button className="get-started-btn">GET STARTED</button>
              </Link>
              <Link to="/get-appoint">
                <button className="get-appoint-btn">GET APPOINT</button>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={doctorImage} alt="Doctor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
