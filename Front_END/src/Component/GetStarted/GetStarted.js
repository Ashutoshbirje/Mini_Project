import React from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './GetStarted.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKitMedical, faPhone, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 

const GetStarted = () => {
    return (
        <div className='Container'>
            <div className="service-section">
                {/* First Service Item */}
                <div className="service-item">
                    <Link to="/get-started/FirstAid">
                        <div className="icon-circle">
                            <FontAwesomeIcon icon={faKitMedical} size="2x" />
                        </div>
                    </Link>
                    <h3>First Aid</h3>
                    <p>Knowledge empowers, saves lives.</p>
                </div>

                {/* Second Service Item */}
                <div className="service-item">
                    <Link to="/get-started/Contact">
                        <div className="icon-circle">
                            <FontAwesomeIcon icon={faPhone} size="2x" />
                        </div>
                    </Link>
                    <h3>Contact</h3>
                    <p>Stay connected, stay informed.</p>
                </div>

                {/* Third Service Item */}
                <div className="service-item">
                    <Link to="/get-started/Help">
                        <div className="icon-circle">
                            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                        </div>
                    </Link>
                    <h3>Medical</h3>
                    <p>Medicine heals, compassion comforts.</p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
