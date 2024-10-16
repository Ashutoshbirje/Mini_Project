import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css';
import axios from 'axios';

const Login = ({ setUser }) => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // useEffect( => {
    // const res = axios.get("localhost:3000/login", {
  //     {
  //       email, password
  //     }
  //   })  ;

  //   if(res.ok){
  //     navigate("/home")
  //   }else{
  //     alert("Invalid user")
  //   }
  // })

  const handleSubmit = (e) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const res = await axios.post(`http://localhost:5000/api/v1/user/login`, { email, password}, config)
      setUser(res.data.data)
    } catch (error) {
      console.log(error);
    }
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
          <a href="/#" className="forgot-password">Forgot password?</a>
        </div>
        
        <button type="submit" className="btn-primary">Login</button>
        
        <div className="divider">OR</div>
        
        <button type="button" className="btn-secondary">Continue with Google</button>
        
        <p className="sign-up-text">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
