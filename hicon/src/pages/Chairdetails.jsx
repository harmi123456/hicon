// src/pages/Chairdetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/product';

export default function Chairdetails() {
  const { slug } = useParams();
const navigate = useNavigate();
const [chair, setChair] = useState(null);
const [quantity, setQuantity] = useState(1);

// Convert name → slug
const toSlug = (name) =>
  name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

// Load chair data using slug
useEffect(() => {
  window.scrollTo(0, 0);

  const foundChair = products.find(
    (p) => p.type === "chair" && toSlug(p.name) === slug
  );

  if (foundChair) {
    setChair(foundChair);
  } else {
    navigate("/chairs");
  }
}, [slug, navigate]);

const handleQuantityChange = (type) => {
  if (type === "increase") {
    setQuantity((prev) => prev + 1);
  } else if (type === "decrease" && quantity > 1) {
    setQuantity((prev) => prev - 1);
  }
};

// Loading UI
if (!chair) {
  return (
    <div className="loading-container">
      <div className="loading-spinner">Loading...</div>
    </div>
  );
}


  const totalPrice = chair.price * quantity;

  return (
    <div className="chair-details-container">
    
      {/* Detail Content */}
      <div className="detail-wrapper">
        {/* Left Side - Image */}
        <div className="detail-image-section">
          <div className="main-image">
            <img src={chair.image} alt={chair.name} />
          </div>
        </div>

        {/* Right Side - Information */}
        <div className="detail-info-section">
          {/* Category Badge */}
          <span className="category-badge">
            {chair.category.toUpperCase()}
          </span>

          {/* Product Name */}
          <h1 className="product-name">{chair.name}</h1>

          {/* Price */}
          {/* <div className="price-section">
            <span className="current-price">₹{chair.price.toLocaleString()}</span>
            <span className="original-price">₹{(chair.price * 1.3).toLocaleString()}</span>
            <span className="discount">30% OFF</span>
          </div> */}

          {/* Rating */}
          <div className="rating-section">
            <div className="stars">
              {'★'.repeat(4)}{'☆'.repeat(1)}
            </div>
            <span className="rating-text">(4.0) 256 Reviews</span>
          </div>

          {/* Description */}
          <div className="description-section">
            <h3>Product Description</h3>
            <p>{chair.description}</p>
          </div>

          {/* Features */}
          <div className="features-section">
            <h3>Key Features</h3>
            <ul>
              <li>✓ High-quality materials</li>
              <li>✓ Ergonomic design</li>
              <li>✓ Durable construction</li>
              <li>✓ Easy to clean</li>
              <li>✓ 1 Year warranty</li>
            </ul>
          </div>

          {/* Quantity Selector */}
          <div className="quantity-section">
            <h3>Quantity</h3>
            <div className="quantity-controls">
              <button
                className="qty-btn"
                onClick={() => handleQuantityChange('decrease')}
                disabled={quantity === 1}
              >
                -
              </button>
              <span className="qty-display">{quantity}</span>
              <button
                className="qty-btn"
                onClick={() => handleQuantityChange('increase')}
              >
                +
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="total-price-section">
            <span>Total Price:</span>
            <span className="total-price">₹{totalPrice.toLocaleString()}</span>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="add-to-cart-btn">
              🛒 Add to Cart
            </button>
            <button className="buy-now-btn">
              ⚡ Buy Now
            </button>
          </div>

          {/* Delivery Info */}
          <div className="delivery-info">
            <div className="info-item">
              <span className="icon">🚚</span>
              <span>Free Delivery on orders above ₹500</span>
            </div>
            <div className="info-item">
              <span className="icon">↩️</span>
              <span>7 Days Easy Return Policy</span>
            </div>
            <div className="info-item">
              <span className="icon">💳</span>
              <span>Cash on Delivery Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Tabs */}
      <div className="additional-info">
        <div className="info-tabs">
          <div className="tab-content">
            <h2>Specifications</h2>
            <table className="specs-table">
              <tbody>
                <tr>
                  <td>Product ID</td>
                  <td>{chair.id}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{chair.category}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>{chair.type}</td>
                </tr>
                <tr>
                  <td>Material</td>
                  <td>Premium Quality</td>
                </tr>
                <tr>
                  <td>Warranty</td>
                  <td>1 Year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}