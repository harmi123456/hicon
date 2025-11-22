// src/pages/Sofadetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/product';

export default function Sofadetails() {
  const { sofaId } = useParams();
  const navigate = useNavigate();
  const [sofa, setSofa] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Extract sofa ID from URL (format: "16-3-seater-fabric-sofa")
  const extractSofaId = (paramId) => {
    return parseInt(paramId.split('-')[0]);
  };

  // Load sofa data from URL parameter
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const id = extractSofaId(sofaId);
    const foundSofa = products.find(p => p.id === id && p.type === 'sofa');
    
    if (foundSofa) {
      setSofa(foundSofa);
    } else {
      // If sofa not found, redirect to sofas list
      navigate('/sofas');
    }
  }, [sofaId, navigate]);

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleBackClick = () => {
    navigate('/sofas');
  };

  // Show loading state while sofa data is being fetched
  if (!sofa) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }


  return (
    <div className="sofa-details-container">
    
      {/* Detail Content */}
      <div className="detail-wrapper">
        {/* Left Side - Image */}
        <div className="detail-image-section">
          <div className="main-image">
            <img src={sofa.image} alt={sofa.name} />
          </div>
        </div>

        {/* Right Side - Information */}
        <div className="detail-info-section">
          {/* Category Badge */}
          <span className="category-badge">
            {sofa.category.split('-').map(word => word.toUpperCase()).join(' ')}
          </span>

          {/* Product Name */}
          <h1 className="product-name">{sofa.name}</h1>

          {/* Price */}
          {/* <div className="price-section">
            <span className="current-price">₹{sofa.price.toLocaleString()}</span>
            <span className="original-price">₹{(sofa.price * 1.3).toLocaleString()}</span>
            <span className="discount">30% OFF</span>
          </div> */}

          {/* Rating */}
          <div className="rating-section">
            <div className="stars">
              {'★'.repeat(4)}{'☆'.repeat(1)}
            </div>
            <span className="rating-text">(4.5) 512 Reviews</span>
          </div>

          {/* Description */}
          <div className="description-section">
            <h3>Product Description</h3>
            <p>{sofa.description}</p>
          </div>

          {/* Features */}
          <div className="features-section">
            <h3>Key Features</h3>
            <ul>
              <li>✓ Premium quality upholstery</li>
              <li>✓ Comfortable seating experience</li>
              <li>✓ Sturdy wooden frame</li>
              <li>✓ Easy maintenance</li>
              <li>✓ 2 Year warranty</li>
              <li>✓ Free installation included</li>
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
          {/* <div className="total-price-section">
            <span>Total Price:</span>
            <span className="total-price">₹{totalPrice.toLocaleString()}</span>
          </div> */}

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
              <span>Free Delivery on orders above ₹1000</span>
            </div>
            <div className="info-item">
              <span className="icon">↩️</span>
              <span>15 Days Easy Return Policy</span>
            </div>
            <div className="info-item">
              <span className="icon">💳</span>
              <span>Cash on Delivery Available</span>
            </div>
            <div className="info-item">
              <span className="icon">🔧</span>
              <span>Free Assembly Service</span>
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
                  <td>{sofa.id}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{sofa.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>{sofa.type.toUpperCase()}</td>
                </tr>
                <tr>
                  <td>Material</td>
                  <td>Premium Fabric / Leather</td>
                </tr>
                <tr>
                  <td>Frame</td>
                  <td>Solid Wood</td>
                </tr>
                <tr>
                  <td>Warranty</td>
                  <td>2 Years</td>
                </tr>
                <tr>
                  <td>Assembly</td>
                  <td>Required (Free Service)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}