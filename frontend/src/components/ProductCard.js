import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  // A safeguard in case of missing product data
  if (!product) {
    return null;
  }

  return (
    <div className="product-card">
      <div className="product-card-image-container">
        <img src={product.imageUrl} alt={product.name} className="product-card-image" />
        <div className="product-card-image-overlay">
          <button className="product-card-quick-view">Quick View</button>
        </div>
      </div>
      <div className="product-card-details">
        <p className="product-card-vendor">{product.vendor}</p>
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
      </div>
      <button className="product-card-add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
