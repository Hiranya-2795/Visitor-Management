import React from 'react';
import Sidebar from './Sidebar';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard-wrapper">
      <Sidebar />
      <div className="admin-main-content">
        <h1>Welcome, Admin!</h1>
        <p>Select an option from the sidebar to get started.</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
