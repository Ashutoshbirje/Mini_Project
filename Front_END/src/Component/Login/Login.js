import React, { useState } from 'react';
import './Login.css';
import SignUp from '../SignUp/SignUp'; // Importing the SignUp component

const Login = ({ setUser }) => { // setUser is passed as a prop here
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email, 'Password:', password);
  };

  const [isAltSignUpModalOpen, setIsAltSignUpModalOpen] = useState(false); // Modal state for alternative signup

  const openAltSignUpModal = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsAltSignUpModalOpen(true); // Open the alternative sign-up modal
  };

  const closeModal = () => {
    setIsAltSignUpModalOpen(false); // Close the alternative sign-up modal
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <p>Connect with the best professionals</p>
        
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
        
        <div className="form-group">
          <a href="/forgot-password" className="forgot-password">Forgot password?</a>
        </div>
        
        <button type="submit" className="btn-primary">Login</button>
        
        <div className="divider">OR</div>
        
        <button type="button" className="btn-secondary">Continue with Google</button>
        
        <p className="sign-up-text">
          Don’t have an account? <a href="/" onClick={openAltSignUpModal}>Sign Up</a> {/* Open alternative sign-up modal on click */}
        </p>
      </form>

      {/* Alternative Sign-Up Modal */}
      {isAltSignUpModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <SignUp setUser={setUser} /> {/* Passing setUser as a prop to SignUp */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
