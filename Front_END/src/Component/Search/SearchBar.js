import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className='container'>
      <div className="search-container">
      <input type="text" className="search-input" placeholder="Search" />
      <button className="search-button">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </button>
      </div>    
      <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.946907669356!2d73.82553931483278!3d15.849695189033263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf63f10b85df81%3A0x8b18c7f6a57a65b5!2sBelagavi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1598008706457!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>
      </div>
    </div>
  );
};

export default SearchBar;
