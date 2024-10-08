import React from 'react';
import './GetStarted.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKitMedical, faPhone, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 

const GetStarted = () => {
    const services = [
        {
            icon: faKitMedical, 
            title: "First Aid",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris"
        },
        {
            icon: faPhone, 
            title: "Contact",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris"
        },
        {
            icon: faShoppingCart, 
            title: "Medical",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris"
        }
    ];

    return (
        <div className='Container'>
            <div className="service-section">
                {services.map((service, index) => (
                    <div key={index} className="service-item">
                        <div className="icon-circle">
                            <FontAwesomeIcon icon={service.icon} size="2x" />
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GetStarted ;
