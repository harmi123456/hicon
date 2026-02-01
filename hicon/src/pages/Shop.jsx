import React, { useEffect } from 'react'
import {  ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Shop() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Navigate = useNavigate();

  return (
    <div className="shop-wrapper">
      
      <div className="container">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-overlay" />
        
        <div className="hero-content">
          <p className="hero-subtitle">Exclusive Collection</p>
          <h1 className="hero-title">Elevate Your Living Space</h1>
          <p className="hero-description">
            Discover our curated collection of premium furniture designed to bring elegance and comfort to your home.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Chairs Section */}
        <div className="section-card">
          <div className="section-text">
            <span className="section-label">Chairs Collection</span>
            <h2 className="section-title">Comfort Meets Style</h2>
            <p className="section-description">
              Explore our exquisite range of chairs crafted with precision and designed for ultimate comfort. From modern minimalist to classic elegance, find the perfect piece for your space.
            </p>
            <button className="cta-button" onClick={() => Navigate("/chair")}>
              View Chairs
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="section-image chairs-image" />
        </div>

        {/* Sofas Section */}
        <div className="section-card reverse">
          <div className="section-text">
            <span className="section-label">Sofas Collection</span>
            <h2 className="section-title">Luxury Redefined</h2>
            <p className="section-description">
              Discover our premium sofa collection where luxury meets functionality. Each piece is thoughtfully designed to be the centerpiece of your living room, offering unmatched comfort and timeless appeal.
            </p>
            <button className="cta-button" onClick={() => Navigate("/sofa")}>
              View Sofas
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="section-image sofas-image" />
        </div>
      </div>
      </div>

    </div>
  )
}
