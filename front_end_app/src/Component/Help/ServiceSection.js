import React from 'react';
import './ServiceSection.css'; 

const ServiceSection = () => {
    const services = [
        {
            icon: "fa-kit-medical", 
            title: "First Aid",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris"
        },
        {
            icon: "fa-phone", 
            title: "Contact",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris"
        },
        {
            icon: "fa-shopping-cart", 
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
                        <i className={`fas ${service.icon}`}></i>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default ServiceSection;