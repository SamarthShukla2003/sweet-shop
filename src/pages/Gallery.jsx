import React from 'react';
import './Gallery.css';

const images = [
  { src: '/images/hero.png', alt: 'Sweets Spread', span: 'col-span-2 row-span-2' },
  { src: '/images/kaju_katli.png', alt: 'Kaju Katli', span: '' },
  { src: '/images/gulab_jamun.png', alt: 'Gulab Jamun', span: '' },
  { src: '/images/jalebi.png', alt: 'Jalebi', span: 'col-span-2' },
  { src: '/images/laddoo.png', alt: 'Motichoor Laddoo', span: '' }
];

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1>Gallery</h1>
        <p>A glimpse into our sweet world</p>
      </div>

      <div className="container gallery-container fade-in">
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className={`gallery-item ${img.span}`}>
              <img src={img.src} alt={img.alt} className="gallery-img" />
              <div className="gallery-overlay">
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
