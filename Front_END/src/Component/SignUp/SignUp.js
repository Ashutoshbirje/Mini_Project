import React, { useState } from "react";
import './SignUp.css';
import Login from '../Login/Login'; // Assuming you have a separate Login component

const SignUp = ({ setUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Modal state for login

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Details:', { firstName, lastName, email, password });
  };

  const openLoginModal = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsLoginModalOpen(true); // Open the login modal
  };

  const closeModal = () => {
    setIsLoginModalOpen(false); // Close the login modal
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <div className="name">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">E-Mail Address *</label>
          <input
            type="email"
            id="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn-primary">Sign Up</button>

        <div className="divider">OR</div>

        <button type="button" className="btn-secondary">Continue with Google</button>

        <p className="sign-up-text">
          Already have an account? <a href="/" onClick={openLoginModal}>Login</a> {/* Open login modal on click */}
        </p>
      </form>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <Login setUser={setUser} /> {/* Login component opens in the modal */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
