// src/pages/Chair.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products, categories } from '../data/product';

function Chair() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  // Filter only chairs
  const chairs = products.filter(product => product.type === 'chair');

  // Further filter by category if selected
  const filteredChairs = selectedCategory === 'all'
    ? chairs
    : chairs.filter(chair => chair.category === selectedCategory);

  // Handle chair card click - Navigate to detail page
 const handleChairClick = (chair) => {
  const chairSlug = chair.name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');  

  navigate(`/chairs/${chairSlug}`);
  window.scrollTo(0, 0);
};


  return (
    <div className="chair-page">
      <h1>Our Chair Collection</h1>

      {/* Category Filter */}
      <div className="category-filter">
        <button
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => setSelectedCategory('all')}
        >
          All Chairs
        </button>
        {categories.chairs.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredChairs.map(chair => (
          <div
            key={chair.id}
            className="product-card"
            onClick={() => handleChairClick(chair)}
          >
            <div className="product-image">
              <img src={chair.image} alt={chair.name} />
            </div>
            <h3>{chair.name}</h3>
            <p className="description">{chair.category}</p>
            <p className="description">{chair.description}</p>
            <button className="buy-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chair;