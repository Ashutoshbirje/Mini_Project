import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from react-router-dom
import './SignUp.css';

const SignUp = ({ setUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Details:', { firstName, lastName, email, password });
    // Simulate successful sign-up (for example purposes)
    setUser({ firstName, email });
    navigate('/login'); // Redirect to login after signup
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
          Already have an account? <Link to="/login">Login</Link> {/* Navigate to login page */}
        </p>
      </form>
    </div>
  );
};

export default SignUp;
