import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      
      <div className="first-section">
        <div className="first-section-text">
          <h3>Vetourio offers best trip around the world</h3>
          <p>Over 400 pages of practical digital marketing advice</p>
        </div>
        <div>
          <button className="footer-btn">Sign Up</button>
        </div>
      </div>

      <div className="second-section">

        <a href="#"><img src="/images/ventourio2.png" alt="Logo" className="footer-logo" /></a>

        <div>
          <h3>Hotels</h3>
          <ul className="footer-list">
            <li>All destinations</li>
            <li>Regions</li>
            <li>Cities</li>
            <li>Countries</li>
          </ul>
        </div>

        <div>
          <h3>Services</h3>
          <ul className="footer-list">
            <li>Visa</li>
            <li>Concierge</li>
            <li>Transfer</li>
            <li>Insurance</li>
          </ul>
        </div>

        <div>
          <h3>About Vetourio</h3>
          <ul className="footer-list">
            <li>Our company</li>
            <li>Contacts</li>
            <li>Site rules</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div className="media-icons d-lg-flex d-none">
          <img src="/images/instagram.png" alt="instagram" />
          <img src="/images/facebook.png" alt="facebook" />
        </div>
      </div>

      <div className="third-section">
        <p>Copyright &copy; 2023 Vetourio.com.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;