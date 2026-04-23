import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About Us</h1>
        <p>Our Story, Our Tradition</p>
      </div>

      <div className="container about-container">
        <section className="about-story fade-in">
          <div className="story-content">
            <h2>The Legacy of New Pindi Sweets</h2>
            <p>Founded in 1995, New Pindi Sweets began as a small family kitchen with a big dream: to share the authentic taste of traditional Indian mithai with the world.</p>
            <p>Our founder, Mr. Sharma, believed that the secret to perfect sweets lies not just in the recipe, but in the quality of ingredients and the love poured into making them. For over two decades, we have strictly adhered to this philosophy.</p>
            <p>We source the finest quality nuts from Kashmir, pure saffron from authentic growers, and use only pure desi ghee for all our preparations. Every sweet that leaves our shop is a testament to our unwavering commitment to quality and hygiene.</p>
          </div>
          <div className="story-image">
             <img src="/images/laddoo.png" alt="Making Sweets" className="rounded-img shadow-lg" />
          </div>
        </section>

        <section className="our-values fade-in">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Why Choose Us</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🥛</div>
              <h3>Pure Ingredients</h3>
              <p>We use 100% pure desi ghee, fresh milk, and premium dry fruits for unmatched taste and quality.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">👩‍🍳</div>
              <h3>Master Chefs</h3>
              <p>Our confectioners have decades of experience, passing down secret family recipes from generation to generation.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Hygiene Guaranteed</h3>
              <p>Our state-of-the-art kitchen maintains the highest standards of cleanliness and food safety.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
