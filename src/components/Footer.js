import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-section">
          <h3>Customer Support</h3>
          <p>Email: support@campusstore.com</p>
          <p>Phone: +251 912 345 678</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" target="_blank">📷 Instagram</a>
            <a href="#" target="_blank">📢 Telegram</a>
            <a href="#" target="_blank">📘 Facebook</a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CampusStore. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
