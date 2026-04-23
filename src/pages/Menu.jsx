import React, { useState } from 'react';
import SweetCard from '../components/SweetCard';
import './Menu.css';

const menuItems = [
  {
    id: 'm1',
    category: 'Mithai',
    name: 'Kaju Katli',
    description: 'Premium cashew fudge garnished with edible silver leaf.',
    price: 600,
    unit: 'kg',
    image: '/images/kaju_katli.png'
  },
  {
    id: 'm2',
    category: 'Mithai',
    name: 'Gulab Jamun',
    description: 'Soft milk dumplings soaked in rose-scented sugar syrup.',
    price: 300,
    unit: 'kg',
    image: '/images/gulab_jamun.png'
  },
  {
    id: 'm3',
    category: 'Mithai',
    name: 'Motichoor Laddoo',
    description: 'Tiny gram flour pearls fried in ghee and shaped into balls.',
    price: 400,
    unit: 'kg',
    image: '/images/laddoo.png'
  },
  {
    id: 's1',
    category: 'Snacks',
    name: 'Crispy Jalebi',
    description: 'Hot, crispy spirals of fried dough coated in saffron syrup.',
    price: 250,
    unit: 'kg',
    image: '/images/jalebi.png'
  },
  {
    id: 's2',
    category: 'Snacks',
    name: 'Samosa',
    description: 'Crispy pastry filled with spiced potatoes and peas.',
    price: 20,
    unit: 'pc',
    image: '/images/hero.png'
  },
  {
    id: 'n1',
    category: 'Namkeen',
    name: 'Navratan Mixture',
    description: 'Spicy and tangy mix of lentils, peanuts, and sev.',
    price: 280,
    unit: 'kg',
    image: '/images/hero.png'
  },
  {
    id: 'b1',
    category: 'Beverages',
    name: 'Kesar Badam Milk',
    description: 'Rich milk flavored with saffron and crushed almonds.',
    price: 80,
    unit: 'glass',
    image: '/images/hero.png'
  }
];

const categories = ['All', 'Mithai', 'Snacks', 'Namkeen', 'Beverages'];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMenu = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      <div className="page-header">
        <h1>Our Menu</h1>
        <p>Explore our wide range of delicacies</p>
      </div>

      <div className="container menu-container fade-in">
        <div className="category-filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredMenu.map(item => (
            <SweetCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
