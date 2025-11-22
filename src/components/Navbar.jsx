// Navbar.jsx
import React from 'react';
import '../css/Navbar.css'; // optional CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Jake Jerry</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
