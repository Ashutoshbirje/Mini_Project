import React from 'react';
import { poseImages } from '../../utils/pose_images';
import './DropDown.css';

export default function DropDown({ poseList, currentPose, setCurrentPose }) {
    const toggleDropdown = () => {
        const menu = document.getElementById("pose-dropdown-menu");
        menu.classList.toggle("show");
    };

    return (
        <div className='dropdown-container'>
            <button 
                className="dropdown-btn" 
                onClick={toggleDropdown}
                id="pose-dropdown-btn"
            >
                {currentPose}
            </button>
            <ul id="pose-dropdown-menu" className="dropdown-custom-menu">
                {poseList.map((pose) => (
                    <li key={pose} onClick={() => { setCurrentPose(pose); toggleDropdown(); }}>
                        <div className="dropdown-item-container">
                            <p className="dropdown-item-1">{pose}</p>
                            <img 
                                src={poseImages[pose]}
                                alt={pose}
                                className="dropdown-img"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
