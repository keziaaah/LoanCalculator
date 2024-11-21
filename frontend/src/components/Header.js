import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/Logo.png" alt="Logo" className="logo" />
        <h1>MSU-IIT National Multi-Purpose Cooperative</h1>
      </div>
      <div className="header-right">
        <img src="/Home.png" alt="Home Icon" className="icon home-icon" />
        <img src="/Bell_pin.png" alt="Bell Icon" className="icon notification-icon" />
        <div className="user-profile">
          <img src="/User_circle.png" alt="Profile Icon" className="profile-icon" />
          <span>Charles Deo</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
 