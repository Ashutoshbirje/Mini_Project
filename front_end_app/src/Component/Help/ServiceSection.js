import React from 'react';
import './ServiceSection.css'; // Assuming you will use an external CSS file

const ServiceSection = () => {
    const services = [
        {
            icon: "fa-kit-medical", // Font Awesome icon class for a first aid kit
            title: "First Aid",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris"
        },
        {
            icon: "fa-phone", // Font Awesome icon class for a phone
            title: "Contact",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris"
        },
        {
            icon: "fa-shopping-cart", // Font Awesome icon class for a shopping cart
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