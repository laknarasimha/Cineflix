import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Demarcating Line */}
      <div className="footer-line"></div>

      {/* Search Bar with Get Started Button */}
      <div className="footer-search">
        <input type="text" placeholder="Search here..." className="footer-input" />
        <button className="footer-button">Get Started</button>
      </div>

      {/* Footer Links */}
      <div className="footer-content">
        <div className="links">
          <h4>FAQ</h4>
          <p>Contact Us</p>
          <p>About Cineflicks</p>
        </div>
        <div className="links">
          <h4>My Account</h4>
          <p>Premium Upgrades</p>
          <p>Plans & Pricing</p>
        </div>
        <div className="links">
          <h4>Supported Devices</h4>
          <p>Press</p>
          <p>Investor Relations</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        © 2024 Cineflicks All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
