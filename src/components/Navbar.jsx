// Navbar.jsx
import React from 'react';
import '../css/Navbar.css'; // optional CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Jerry Xiao</div>
      <ul className="nav-links">
        <li><a href="#userinfo">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
