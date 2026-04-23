import React from 'react';
import { Link } from 'react-router-dom';
import SweetCard from '../components/SweetCard';
import './Home.css';

const bestSellers = [
  {
    id: 'kaju-katli',
    name: 'Kaju Katli',
    description: 'Premium cashew fudge garnished with edible silver leaf.',
    price: 600,
    unit: 'kg',
    image: '/images/kaju_katli.png'
  },
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    description: 'Soft milk dumplings soaked in rose-scented sugar syrup.',
    price: 300,
    unit: 'kg',
    image: '/images/gulab_jamun.png'
  },
  {
    id: 'jalebi',
    name: 'Crispy Jalebi',
    description: 'Hot, crispy spirals of fried dough coated in saffron syrup.',
    price: 250,
    unit: 'kg',
    image: '/images/jalebi.png'
  }
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content fade-in">
          <h2>Authentic Taste of Tradition</h2>
          <p>Handcrafted Indian sweets made with pure desi ghee, premium dry fruits, and love.</p>
          <div className="hero-btns">
            <a href="https://wa.me/919695614411?text=Hi,%20I%20want%20to%20order%20sweets%20from%20New%20Pindi%20Sweets" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#25D366', color: 'white' }}>Order via WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section container">
        <div className="intro-grid">
          <div className="intro-text fade-in">
            <h2>Welcome to New Pindi Sweets</h2>
            <p>Since 1995, we have been serving the finest traditional Indian mithai. Every piece is a celebration of authentic flavors, crafted meticulously by our master confectioners using recipes passed down through generations.</p>
            <p>Whether you're celebrating a festival, wedding, or just satisfying a sweet craving, our treats bring joy to every occasion.</p>
            <Link to="/about" className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</Link>
          </div>
          <div className="intro-image-wrapper fade-in">
             <img src="/images/laddoo.png" alt="Motichoor Laddoo" className="intro-img" />
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="best-sellers bg-light">
        <div className="container">
          <div className="section-header text-center fade-in">
            <h2>Our Best Sellers</h2>
            <p>Discover our most loved delicacies</p>
          </div>
          <div className="sweet-grid">
            {bestSellers.map(item => (
              <SweetCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/menu" className="btn btn-secondary">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials container">
        <div className="section-header text-center fade-in">
          <h2>What Our Customers Say</h2>
        </div>
        <div className="testimonial-grid fade-in">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"The Kaju Katli here is out of this world! It literally melts in your mouth. Best sweet shop in town."</p>
            <h4>- Rahul S.</h4>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Ordered boxes of Laddoos for my daughter's wedding. The packaging was beautiful and the taste was authentic!"</p>
            <h4>- Priya M.</h4>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>"Their hot Jalebis on a Sunday morning are a tradition for our family. Consistently amazing quality."</p>
            <h4>- Amit V.</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
