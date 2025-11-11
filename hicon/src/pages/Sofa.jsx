// src/pages/Sofa.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products, categories } from '../data/product';

function Sofa() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter only sofas
  const sofas = products.filter(product => product.type === 'sofa');

  // Further filter by category if selected
  const filteredSofas = selectedCategory === 'all'
    ? sofas
    : sofas.filter(sofa => sofa.category === selectedCategory);

  // Handle sofa card click - Navigate to detail page
  const handleSofaClick = (sofa) => {
    // Create URL-friendly name
    const sofaSlug = sofa.name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    
    // Navigate to detail page with sofa ID
    navigate(`/sofas/${sofa.id}-${sofaSlug}`);
    
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  return (
    <div className="sofa-page">
      <h1>Our Sofa Collection</h1>

      {/* Category Filter */}
      <div className="category-filter">
        <button
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => setSelectedCategory('all')}
        >
          All Sofas
        </button>
        {categories.sofas.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredSofas.map(sofa => (
          <div 
            key={sofa.id} 
            className="product-card"
            onClick={() => handleSofaClick(sofa)}
          >
            <div className="product-image">
              <img src={sofa.image} alt={sofa.name} />
            </div>
            <h3>{sofa.name}</h3>
            <p className="description">{sofa.description}</p>
            <p className="price">₹{sofa.price.toLocaleString()}</p>
            <button className="buy-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sofa;