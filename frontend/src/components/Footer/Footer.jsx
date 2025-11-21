import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = () => {
    // Scroll to top when any link is clicked
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="footer-section footer-about">
          <div className="footer-logo">
            <img src={assets.logo1} alt="Hungry Heaven" />
            <h3>Hungry Heaven</h3>
          </div>
          <p className="footer-description">
            Indulge in a delightful selection of dishes, meticulously prepared with premium ingredients and culinary finesse. Our goal is to delight your taste buds and enhance your dining experience, one exquisite meal at a time!
          </p>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="footer-social-icons">
              <a href="#" className="social-icon facebook">
                <img src={assets.facebook_icon} alt="Facebook" />
              </a>
              <a href="#" className="social-icon twitter">
                <img src={assets.twitter_icon} alt="Twitter" />
              </a>
              <a href="#" className="social-icon linkedin">
                <img src={assets.linkedin_icon} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/menu" onClick={handleLinkClick}>Menu</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
            <li><Link to="/delivery" onClick={handleLinkClick}>Delivery</Link></li>
            <li><Link to="/privacy" onClick={handleLinkClick}>Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h3>Get In Touch</h3>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <span>Phone</span>
                <a href="tel:+9779840838944">+977-9840838944</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-details">
                <span>Email</span>
                <a href="mailto:info@hungryheaven.com">info@hungryheaven.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <span>Location</span>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-section footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for special offers and updates!</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </div>
          <div className="footer-hours">
            <h4>Opening Hours</h4>
            <div className="hours-info">
              <div>Mon - Fri: 9:00 AM - 10:00 PM</div>
              <div>Sat - Sun: 10:00 AM - 11:00 PM</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            © {currentYear} Hungry Heaven. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/terms" onClick={handleLinkClick}>Terms of Service</Link>
            <Link to="/privacy" onClick={handleLinkClick}>Privacy Policy</Link>
            <Link to="/cookies" onClick={handleLinkClick}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
