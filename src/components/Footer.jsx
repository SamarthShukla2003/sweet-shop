import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3>New Pindi Sweets</h3>
          <p>Authentic Taste of Tradition since 1995. We bring you the finest Indian sweets made with pure ghee and love.</p>
          <div className="social-links">
            <a href="#">FB</a>
            <a href="#">IG</a>
            <a href="#">TW</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li><MapPin size={18} /> <span>Shop No-133/217, Ganesh Ganj, Aminabad, Naka Hindola, Lucknow, UP 226018</span></li>
            <li><Phone size={18} /> <a href="tel:+919695614411" style={{ color: 'inherit' }}>+91 96956 14411</a></li>
            <li><Mail size={18} /> <span>hello@newpindisweets.com</span></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Opening Hours</h4>
          <p>Monday - Sunday<br/>8:00 AM - 10:00 PM</p>
          <div className="footer-map mt-3">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112001.32832863897!2d77.12644265000001!3d28.6811464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1689230554564!5m2!1sen!2sin" 
              width="100%" 
              height="80" 
              style={{ border: 0, borderRadius: '8px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Footer Map"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} New Pindi Sweets. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
