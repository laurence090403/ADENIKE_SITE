import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="adenike-footer">
        <div className="logosi">
          <img src="/ADENIKE.png" alt="ADENIKE Logo" className="logo-images" />
        </div>

      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <h4>Products & Services</h4>
          <h4>Operations</h4>
          <h4>Investor Relations</h4>
          <h4>Sustainability</h4>

        </div>
        
        <div className="footer-section">
          <h4>Invesions</h4>
          <h4>Presentations</h4>
          <h4>How We Create Value</h4>
          <h4>Media</h4>
          <h4>Careers</h4>
        </div>
        
        <div className="footer-section">
          <h4>Distributors</h4>
          <h4>How to Become a Distributor</h4>
          <h4>Depot Locations</h4>
        </div>
        
        <div className="footer-section">
          <h4>Canada U.S.</h4>
          <h4>Contact Center</h4>
          <h4>Global Locations</h4>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>© 2023-2025 Ovalibene Gateway plc</p>
        <p>All rights reserved. The corporate information presented herein is dynamic and subject to change.</p>
      </div>
    </footer>
  );
};

export default Footer;