import React from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './GetStarted.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKitMedical, faPhone, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 

const GetStarted = () => {
    const services = [
        {
            icon: faKitMedical, 
            title: "First Aid",
            description: "Knowledge empowers, saves lives."
        },
        {
            icon: faPhone, 
            title: "Contact",
            description: "Stay connected, stay informed."
        },
        {
            icon: faShoppingCart, 
            title: "Medical",
            description: "Medicine heals, compassion comforts."
        }
    ];

    return (
        <div className='Container'>
            <div className="service-section">
                {services.map((service, index) => (
                    <div key={index} className="service-item">
                        <Link to="/get-started/Help">
                        <div className="icon-circle">
                            <FontAwesomeIcon icon={service.icon} size="2x" />
                        </div>
                       </Link>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GetStarted ;
