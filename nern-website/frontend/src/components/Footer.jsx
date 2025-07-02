import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src="/src/assets/logo.png" alt="Satis-Fact Logo" className="footer-logo" />
          <p className="footer-company-name">Satis-Fact Engineering & Maintains Service</p>
        </div>
        
        <div className="footer-links-grid">
          <div className="footer-column">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-list">
              <li><Link to="/services/masonry">Masonry Work</Link></li>
              <li><Link to="/services/plumbing">Plumbing & Water Proofing</Link></li>
              <li><Link to="/services/carpentry">Carpentry & Roofing</Link></li>
              <li><Link to="/services/painting">Painting Services</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Maintenance</h4>
            <ul className="footer-list">
              <li><Link to="/services/electrical">Electrical Work</Link></li>
              <li><Link to="/services/ac">Air Conditioning</Link></li>
              <li><Link to="/services/repairs">Home Repairs</Link></li>
              <li><Link to="/services/handyman">Handyman Services</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-list contact-list">
              <li><i className="fas fa-map-marker-alt"></i><span>Colombo, Sri Lanka</span></li>
              <li><i className="fas fa-phone"></i><span>+94 763 115 305</span></li>
              <li><i className="fas fa-phone"></i><span>+94 712 912 196</span></li>
              <li><i className="fas fa-envelope"></i><span>asankaabeynayake@gmail.com</span></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Satis-Fact Engineering. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;