import React, { useState } from 'react';
import './medical.css'; // Import the CSS file

// Sample data for medical stores and services
const serviceData = [
  {
    id: 1,
    name: 'City Pharmacy',
    type: 'Medical Store',
    address: '123, Main Street, City Center',
    contact: '+1-234-567-890',
    openHours: '9:00 AM - 9:00 PM',
  },
  {
    id: 2,
    name: 'Life Care Hospital',
    type: 'Hospital',
    address: '45, Oakwood Road, Downtown',
    contact: '+1-987-654-321',
    openHours: '24/7',
  },
  {
    id: 3,
    name: 'HealthLab Diagnostic Center',
    type: 'Diagnostic Lab',
    address: '78, Maple Lane, Suburbs',
    contact: '+1-567-890-123',
    openHours: '8:00 AM - 8:00 PM',
  },
];

const Medical = () => {
  const [filter, setFilter] = useState('Medical Store'); // Default filter

  // Filter services based on the selected type
  const filteredServices = serviceData.filter(
    (service) => service.type === filter
  );

  return (
    <div className="a">
      <h2>Nearby Medical Services</h2>

      {/* Filter buttons */}
      <div className="filters">
        <button
          className="filter-button"
          onClick={() => setFilter('Medical Store')}
        >
          Medical Store
        </button>
        <button
          className="filter-button"
          onClick={() => setFilter('Hospital')}
        >
          Hospital
        </button>
        <button
          className="filter-button"
          onClick={() => setFilter('Diagnostic Lab')}
        >
          Diagnostic Lab
        </button>
      </div>

      {/* Display the filtered service */}
      <div className="card-container">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div key={service.id} className="card" id={`service-${service.id}`}>
              <h3>{service.name}</h3>
              <p>Type: {service.type}</p>
              <p>Address: {service.address}</p>
              <p>Contact: {service.contact}</p>
              <p>Hours: {service.openHours}</p>
            </div>
          ))
        ) : (
          <p>No service found.</p>
        )}
      </div>
    </div>
  );
};

export default Medical;
