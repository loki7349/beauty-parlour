import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment request submitted');
  };

  return (
    <div className="appointment">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
        <select name="service" value={form.service} onChange={handleChange} required>
          <option value="">Select Service</option>
          <option value="haircut">Haircut</option>
          <option value="facial">Facial</option>
          <option value="manicure">Manicure</option>
          <option value="makeup">Makeup</option>
        </select>
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <input type="time" name="time" value={form.time} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Appointment;
