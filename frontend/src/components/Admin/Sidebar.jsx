import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🛡️ Admin Panel</h2>
      <nav>
        <NavLink to="/admin/dashboard" activeclassname="active">🏠 Dashboard Overview</NavLink>
        <NavLink to="/admin/visitors" activeclassname="active">📋 Visitor List</NavLink>
        <NavLink to="/admin/statistics" activeclassname="active">📊 Visitor Statistics</NavLink>
        <NavLink to="/admin/blocked" activeclassname="active">🚫 Blocked Visitors</NavLink>
        <NavLink to="/admin/history" activeclassname="active">📁 Visit History</NavLink>
        <NavLink to="/admin/profile" activeclassname="active">👤 Admin Profile</NavLink>
        <NavLink to="/" activeclassname="active">🔓 Logout</NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
