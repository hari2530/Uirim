import React, { useState } from 'react';
import '../Components/NavBar.css';
import { Link } from 'react-router-dom';

import locationImg from '../Assets/location.png';
import centerImg from '../Assets/rim.png';
import rightImg from '../Assets/user.png';
import profileImg from '../Assets/profile.png';
import orderImg from '../Assets/order.png';
import logoutImg from '../Assets/logout.png';



const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <nav className="normal-navbar">
        <div className="navbar-left">
          <img src={locationImg} alt="Location Icon" className="nav-img" /><span>Location</span>
        </div>

        <div className="navbar-center">
          <img src={centerImg} alt="RIM Icon" className="nav-img" />
        </div>
        <div className={`navbar-right ${dropdownOpen ? 'dropdown-open' : ''}`}>
  <img
    src={rightImg}
    alt="User Dropdown"
    className="nav-img dropdown-toggle"
    onClick={toggleDropdown}
  />
  {dropdownOpen && (
    <div className="dropdown-menu">
      <ul>
        <li><img src={profileImg} alt="Profile Icon" className="drop-pro" /> Profile</li>
        <li><img src={orderImg} alt="Order Icon" className="drop-pro" /> Order</li>
        <li><img src={logoutImg} alt="Logout Icon" className="drop-pro" /> Logout</li>
      </ul>
    </div>
  )}
</div>
</nav>

      <div className="navigate">
        <ul>
          <li><Link to="/">MainPage</Link></li>
          <li><Link to="/store-details">StoreDetails</Link></li>
          <li><Link to="/Feed-views">FeedView</Link></li>
          <li><Link to="/Login-Page">Login</Link></li>
          <li><Link to="/Reg">Reg</Link></li>
          <li><Link to="/Order">Order</Link></li>
          <li><Link to="/Submitreg">Submit Reg</Link></li>
          <li><Link to="/Profile-info">Profile Info</Link></li>
          <li><Link to='/Orderhis'>Order History</Link></li>
          <li><Link to='/Cardpage'>Card Page</Link></li>
          <li><Link to='/Techlog'>Techancain Page</Link></li>
          <li><Link to='/Dashboard'>Dashboard</Link></li>
          <li><Link to='/ProductFrom'>Product From</Link></li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
