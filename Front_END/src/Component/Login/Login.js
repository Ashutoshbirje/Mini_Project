// import React from 'react';
import React, { useState } from 'react';
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email, 'Password:', password);
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
        
        <button type="submit" className="btn-primary">Sign In</button>
        
        <div className="divider">OR</div>
        
        <button type="button" className="btn-secondary">Continue with Google</button>
        
        <p className="sign-up-text">
          Don’t have an account? <a href="/sign-up">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
