import React from 'react';
import './First-aid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBandAid, faSoap, faBandage, faScissors, faTachometerAlt, faHandHoldingMedical, faThermometer, faGlobe } from '@fortawesome/free-solid-svg-icons';

const FirstAid = () => {
  const firstAidKits = [
    {
      name: 'Bandages',
      info: 'Used to cover and protect wounds. Essential for preventing infection and stopping bleeding.',
      icon: faBandAid
    },
    {
      name: 'Antiseptic Wipes',
      info: 'Clean wounds before applying bandages. Prevents bacteria and infections from spreading.',
      icon: faSoap
    },
    {
      name: 'Gauze Pads',
      info: 'Helps absorb blood and fluids from a wound. Ideal for large cuts or abrasions.',
      icon: faBandage
    },
    {
      name: 'Adhesive Tape',
      info: 'Secures bandages or gauze pads in place. Comes in handy for securing dressings over wounds.',
      icon: faTachometerAlt
    },
    {
      name: 'Scissors',
      info: 'Used to cut bandages, tape, or clothing in case of an emergency. Ensure they are sterilized.',
      icon: faScissors
    },
    {
      name: 'Tweezers',
      info: 'Helps remove debris such as splinters, glass, or other foreign objects from wounds.',
      icon: faHandHoldingMedical
    },
    {
      name: 'Instant Cold Pack',
      info: 'Used for reducing swelling or relieving pain from injuries like sprains or bruises.',
      icon: faThermometer
    },
    {
      name: 'Gloves (Non-Latex)',
      info: 'Protects both the responder and the injured person from infection during wound care.',
      icon: faGlobe
    }
  ];

  return (
    <div className="grid-container">
      {firstAidKits.map((item, index) => (
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

export default FirstAid;
