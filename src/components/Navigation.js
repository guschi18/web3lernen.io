import React from 'react';
import './Navigation.css';
import klogo from '../images/Klogo.png';

function Navbar() {
  return (
    <div className="navbar">
      <a  className="navbar-logo"><img src={klogo} alt="" /></a>
      <a  className="navbar-button">Login</a>
    </div>
  );
};

export default Navbar;