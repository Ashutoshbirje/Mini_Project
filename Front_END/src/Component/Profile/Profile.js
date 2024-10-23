import React from 'react';
import './Profile.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Profile = ({user, setUser}) => {
  const userData = {
    // use login sign up data instead of hard code
    name: user?.name || "Guest", // Fallback to 'Guest' if name is unavailable
    email: user?.email || "Not provided", // Fallback if email is missing
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
        <div className="userIcon1">
           <i className="fas fa-user"></i>
        </div>
        <div className="profile-field">
          <strong>{userData.name}</strong>
        </div>
        {/* <div className="profile-field">
          <strong>{userData.email}</strong>
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default Profile;
