// src/components/Header.js
import React from 'react';
import './Header.css';  // Import CSS cho Header

const Header = () => {
    return (
      <header className="header">
        <div className="logo">
          <h1>MAILMate</h1>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="#">Product</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
          <button className="get-started-btn">Get Started</button>
        </nav>
      </header>
    );
  };
  

export default Header;
