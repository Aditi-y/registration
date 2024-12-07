import React, { useState } from 'react';
import axios from 'axios';
import { Link, redirect } from 'react-router-dom';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
  

  async function logPressed() {
    try {
      const response = await axios.post(
        'https://dummyapicsi.onrender.com/api/login',
        { username: userName, password: password }
      );
      console.log('Login successful:', response);
      setMessage(response.data.message);
    } catch (err) {
      console.error('Login error', err);
      setMessage('Login failed. Please try again.');
    }
    
  }

  return (
    <div>
      <h1>QUIZ APP</h1>
      <div className="Login">
        <div className="username">
          <input
            value={userName}
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="password">
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="lbutton">
          <button onClick={logPressed} type="button">
            Login
          </button>
        </div>
        <p>
          Don’t have an account? <Link to="/questions"></Link>
        </p>
        {message && <p style={{ color: 'green' }}>{message}</p>}
      </div>
    </div>
  );
}

export default Login;