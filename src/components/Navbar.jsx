import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MOVE IT</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/workout">Workout Tracker</Link></li>
        <li><Link to="/goals">Goals & Progress</Link></li>
        <li><Link to="/plans">Workout Plans</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
