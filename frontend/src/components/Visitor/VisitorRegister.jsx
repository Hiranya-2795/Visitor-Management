import React, { useState } from 'react';
import './VisitorRegister.css';

function VisitorRegister() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    purpose: '',
    department: '',
  });

  const [registeredVisitor, setRegisteredVisitor] = useState(null);

  const departments = [
    'HR Department',
    'IT Department',
    'Admin',
    'Facility Manager',
    'Security Office',
    'Accounts',
    'Other',
  ];

  const purposes = [
    'Meeting',
    'Interview',
    'Maintenance',
    'Client Visit',
    'Vendor Delivery',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData); // Later replace with API POST

    setRegisteredVisitor(formData); // Display badge

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      purpose: '',
      department: '',
    });
  };

  return (
    <div className="visitor-register">
      <div className="register-card">
        {registeredVisitor ? (
          <>
          <p className="success-message"><h1> Registration is a success</h1></p>
          <div className="badge">
            <h2>Visitor Badge</h2>
            <p><strong>Name:</strong> {registeredVisitor.fullName}</p>
            <p><strong>Email:</strong> {registeredVisitor.email}</p>
            <p><strong>Phone:</strong> {registeredVisitor.phone}</p>
            <p><strong>Purpose:</strong> {registeredVisitor.purpose}</p>
            <p><strong>Visiting:</strong> {registeredVisitor.department}</p>
          
            
          </div>

          </>
        ) : (
          <>
            <h2>Register Visitor</h2>
            <p>Please fill in the details</p>
            <form className="visitor-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Purpose of Visit
                </option>
                {purposes.map((purpose) => (
                  <option key={purpose} value={purpose}>
                    {purpose}
                  </option>
                ))}
              </select>

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Person/Department to Visit
                </option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>

              <button type="submit">Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default VisitorRegister;
