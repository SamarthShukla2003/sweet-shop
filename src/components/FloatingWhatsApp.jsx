import React from 'react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919695614411?text=Hi,%20I%20want%20to%20order%20sweets%20from%20New%20Pindi%20Sweets" 
      className="floating-whatsapp"
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        width="40" 
        height="40" 
      />
    </a>
  );
};

export default FloatingWhatsApp;
