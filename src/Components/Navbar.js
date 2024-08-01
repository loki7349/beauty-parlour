import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Beauty Parlour</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/stylists">Stylists</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
