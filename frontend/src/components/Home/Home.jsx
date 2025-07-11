import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome! Choose your role:</h1>
      <button onClick={() => navigate('/visitor')}>Visitor</button>
      <button onClick={() => navigate('/admin/login')}>Admin</button>
    </div>
  );
}

export default Home;
