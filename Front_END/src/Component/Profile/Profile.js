import React from 'react';
import './Profile.css'; // Add CSS styling
import axios from 'axios';
// import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom';

const Profile = ({user, setUser}) => {
  const userData = {
    // use login sign up data instead of hard code
    name: 'John Doe',
    email: 'johndoe@example.com',
  };
  const navigate = useNavigate()


const handleLogout = async () => {
  console.log("Logging out user...");
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user.refreshToken}`, // Optional if stored in state
        withCredentials: true, // Ensures cookies are sent with the request
      },
    };

    // Call the logout API
    const result = await axios.post("http://localhost:5000/api/v1/user/logout", config);
    console.log(result)
    // http://localhost:5000/api/v1/users/logout
    sessionStorage.clear()
    localStorage.clear()

    // Optional: Remove cookies manually if required
    // Cookies.remove('refreshToken');
    // Cookies.remove('accessToken');

    setUser(null); // Clear user state
    navigate("/"); // Redirect to home or login page
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

  return (
    <div className="section1">
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile</h1>
        <div className="profile-actions">
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
      </div>
    </div>
    </div>
  );
};

export default Profile;
