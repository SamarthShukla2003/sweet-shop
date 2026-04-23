import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>

      <div className="container contact-container fade-in">
        <div className="contact-grid">
          <div className="contact-info-section">
            <h2>Get In Touch</h2>
            <p className="contact-desc">Have a question about our sweets, want to place a bulk order for an event, or just want to say hi? Reach out to us!</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><MapPin /></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Shop No-133/217, Ganesh Ganj, Aminabad, Naka Hindola, Lucknow, Uttar Pradesh 226018</p>
                  <a href="https://maps.app.goo.gl/u73EmWGhfbUoEEWd7" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '0.5rem', padding: '0.25rem 0.75rem', fontSize: '0.85rem' }}>Get Directions</a>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><Phone /></div>
                <div>
                  <h4>Call Us</h4>
                  <p><a href="tel:+919695614411" style={{ color: 'inherit' }}>+91 96956 14411</a></p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><Mail /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@newpindisweets.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><Clock /></div>
                <div>
                  <h4>Opening Hours</h4>
                  <p>Mon-Sun: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Leave a Feedback</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="How can we help you?"></textarea>
              </div>
              <button className="btn btn-primary w-100">Submit Feedback</button>
            </form>
          </div>
        </div>

        <div className="map-section mt-5" style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Find Us Easily on Google Maps</h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8824177708573!2d80.923835!3d26.843818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdb43424c551%3A0xd42a057a89d98e22!2sNew%20Pindi%20Sweets!5e0!3m2!1sen!2sin!4v1713800000000!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '12px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
