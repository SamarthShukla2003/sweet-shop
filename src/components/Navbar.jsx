import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <div className="top-banner">
        <div className="container top-banner-content">
          <span className="banner-text">✨ Order Online Available! We deliver fresh to your door.</span>
          <a href="tel:+919695614411" className="banner-phone">
            <Phone size={14} /> +91 96956 14411
          </a>
        </div>
      </div>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="logo">
            <span className="logo-icon">✨</span>
            <div className="logo-text">
              <h1>New Pindi</h1>
              <span>Sweets</span>
            </div>
          </Link>

          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
            <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>Menu</Link>
            <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
            <a href="tel:+919695614411" className="mobile-only-phone">Call: +91 96956 14411</a>
          </div>

          <div className="nav-actions">
            <button className="cart-icon-btn" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart size={24} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            
            <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
