import React from 'react';
import './ImportantContacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkedAlt, faAmbulance, faHospitalAlt } from '@fortawesome/free-solid-svg-icons';

const ImportantContacts = () => {
  const contactDetails = [
    {
      name: 'Emergency Services',
      info: 'For immediate help in case of emergencies such as fire, medical, or police assistance. Dial 911.',
      icon: faAmbulance
    },
    {
      name: 'Local Hospital',
      info: 'Reach out to the nearest hospital for medical assistance. Example: City Hospital - (123) 456-7890.',
      icon: faHospitalAlt
    },
    {
      name: 'Poison Control',
      info: 'For poison-related emergencies. Dial (800) 222-1222 for immediate assistance.',
      icon: faPhoneAlt
    },
    {
      name: 'Family Doctor',
      info: 'Contact your family doctor for medical advice. Example: Dr. John Doe - (123) 456-7890.',
      icon: faEnvelope
    },
    {
      name: 'Pharmacy',
      info: 'For prescription medication or over-the-counter remedies. Example: City Pharmacy - (123) 456-7890.',
      icon: faMapMarkedAlt
    }
  ];

  return (
    <div className="grid-container">
      {contactDetails.map((item, index) => (
        <div key={index} className="grid-item">
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
