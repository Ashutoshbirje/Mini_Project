import React from 'react';
import './ImportantContacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkedAlt, faAmbulance, faHospitalAlt } from '@fortawesome/free-solid-svg-icons';

const ImportantContacts = () => {
  // Function to open Google Maps with hospitals nearby
  const openNearbyHospitals = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapsUrl = 'https://www.google.com/maps/search/hospitals+near+me/@${latitude},${longitude},15z';
          window.open(mapsUrl, '_blank');
        },
        () => alert('Location permission is required to find hospitals nearby.')
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const contactDetails = [
    {
      name: 'Emergency Services',
      info: 'For immediate help in case of emergencies. Dial 911.',
      icon: faAmbulance,
      action: () => window.open('tel:911')
    },
    {
      name: 'Local Hospital',
      info: 'Find hospitals near you.',
      icon: faHospitalAlt,
      //action: openNearbyHospitals
      action: () => window.open('https://www.google.com/maps/search/Hospitals+near+me/')
    },
    {
      name: 'Poison Control',
      info: 'For poison emergencies, dial (800) 222-1222.',
      icon: faPhoneAlt,
      action: () => window.open('tel:8002221222')
    },
    {
      name: 'Family Doctor',
      info: 'Contact Dr. Joshi at (123) 456-7890 or email.',
      icon: faEnvelope,
      action: () => window.open('mailto:doctor@example.com')
    },
    {
      name: 'Pharmacy',
      info: 'Find nearby pharmacies.',
      icon: faMapMarkedAlt,
      action: () => window.open('https://www.google.com/maps/search/pharmacies+near+me/')
    }
  ];

  return (
    <div className="grid-container">
      {contactDetails.map((item, index) => (
        <div key={index} className="grid-item" onClick={item.action}>
          <div className="icon-title">
            <FontAwesomeIcon icon={item.icon} className="icon" />
            <h3>{item.name}</h3>
          </div>
          <p>{item.info}</p>
        </div>
      ))}
    </div>
  );
};

export default ImportantContacts;