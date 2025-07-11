import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For now, simulate a successful login (no backend)
    if (email && password) {
      navigate('/admin/dashboard');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-card">
        <h2>Admin Login</h2>
        <p>Please enter your credentials to continue</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default AdminLogin;
