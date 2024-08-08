// src/components/Form.jsx
import React, { useState } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function DoubtsForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    query1: '',
    query2: '',
    query3: '',
    query4: '',
    query5: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.endsWith('@navgurukul.org')) {
      alert('Email must be from the domain @navgurukul.org');
      return;
    }

    if (!formData.query1 && !formData.query2 && !formData.query3 && !formData.query4 && !formData.query5) {
      alert('At least one query must be filled out.');
      return;
    }

    const Sheet_Url = 'https://script.google.com/macros/s/AKfycbx_lNrICe3c6QXGiz_nRD2WboXEYuYIigHL9HCIxWZSCs6JtuDOnLHdfTtPcYPeo2VWrw/exec';
    try {
      const response = await fetch(Sheet_Url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok || response.type === 'opaque') {
        console.log('Data sent successfully, but response not readable due to no-cors');
        alert('Form submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          query1: '',
          query2: '',
          query3: '',
          query4: '',
          query5: '',
        });
      } else {
        console.log('Data sent but response not readable');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center title">Submit Your Academic Queries</h1>
      <form onSubmit={handleSubmit} id="myform" className="mx-auto" style={{ maxWidth: '500px' }}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="custom-label">First Name</label>
              <input type="text" className="form-control shadow-sm" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="custom-label">Last Name</label>
              <input type="text" className="form-control shadow-sm" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="custom-label">Email</label>
          <input type="email" className="form-control shadow-sm" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="custom-label">Query 1</label>
          <textarea className="form-control shadow-sm" name="query1" value={formData.query1} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label className="custom-label">Query 2</label>
          <textarea className="form-control shadow-sm" name="query2" value={formData.query2} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label className="custom-label">Query 3</label>
          <textarea className="form-control shadow-sm" name="query3" value={formData.query3} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label className="custom-label">Query 4</label>
          <textarea className="form-control shadow-sm" name="query4" value={formData.query4} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label className="custom-label">Query 5</label>
          <textarea className="form-control shadow-sm" name="query5" value={formData.query5} onChange={handleChange}></textarea>
        </div>
        <button type="submit" id="mybtn" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
}

export default DoubtsForm;
