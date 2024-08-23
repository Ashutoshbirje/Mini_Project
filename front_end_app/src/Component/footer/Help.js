import React from 'react';
import './Help.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Help = () => {
  return (
    <div className="footer-section">
      <h3>HELP</h3>
      <ul className='list-item'>
        <FontAwesomeIcon icon={faComments} size="lg" style={{ color: "#fafcff", marginRight: "10px" }} />
        <li>
          <a href="#">Chat with us</a>
          <p>Chat live with one of our support specialists.</p>
        </li>
        <FontAwesomeIcon icon={faPhone} size="lg" style={{ color: "#fafcff", marginRight: "10px" }} />
        <li>
       
          <a href="#">Call us</a>
          <p>Call one of our support specialists.</p>
        </li>
        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" style={{ color: "#fafcff", marginRight: "10px" }} />
        <li>
          <a href="#">Location</a>
          <p>At post Vijaydurg</p>
        </li>
      </ul>
    </div>
  );
};

export default Help;