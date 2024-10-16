import React from 'react';
import './Profile.css'; // Add CSS styling
import axios from 'axios';
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom';

const Profile = ({user, setUser}) => {
  const userData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
    gender: 'Male',
    address: '123 Street Name, City, Country'
  };
  const navigate = useNavigate()

  const handleLogout = async ()=>{
    console.log(user);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${user.refreshToken}`,
        },
      };
      axios.get("http://localhost:4000/api/v1/user/logout", config)
      Cookies.remove('refreshToken');
      setUser(null);
      navigate("/")
    } catch (error) {
      console.log(error);
}
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile</h1>
        <div className="profile-actions">
          {/* <button className="edit-btn">Edit</button> */}
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="profile-details">
        <div className="profile-field">
          <strong>Name:</strong> <span>{userData.name}</span>
        </div>
        <div className="profile-field">
          <strong>Email:</strong> <span>{userData.email}</span>
        </div>
        <div className="profile-field">
          <strong>Phone:</strong> <span>{userData.phone}</span>
        </div>
        <div className="profile-field">
          <strong>Gender:</strong> <span>{userData.gender}</span>
        </div>
        <div className="profile-field">
          <strong>Address:</strong> <span>{userData.address}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
