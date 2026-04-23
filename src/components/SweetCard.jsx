import React from 'react';
import { useCart } from '../context/CartContext';
import './SweetCard.css';

const SweetCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="sweet-card fade-in">
      <div className="sweet-img-container">
        <img src={item.image} alt={item.name} className="sweet-img" />
      </div>
      <div className="sweet-info">
        <h3>{item.name}</h3>
        <p className="sweet-desc">{item.description}</p>
        <div className="sweet-footer">
          <span className="price">₹{item.price} / {item.unit || 'kg'}</span>
          <button className="btn btn-primary btn-add" onClick={() => addToCart(item)}>
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default SweetCard;
