// Header.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(prev => {
        if (prev !== scrolled) return scrolled;
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="header-container">
        <div className="logo">
          <img src="/img/logo.png" alt="Logo" />
        </div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMobileMenu}>
            <span>Home</span>
          </Link>
          <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
            <span>About</span>
          </Link>
          <Link to="/shop" className="nav-link" onClick={closeMobileMenu}>
            <span>Shop</span>
          </Link>
          <Link to="/art-of-sitting" className="nav-link" onClick={closeMobileMenu}>
            <span>Art of Sitting</span>
          </Link>
          <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>
            <span>Contact</span>
          </Link>
          <Link to="/splind" className="nav-link" onClick={closeMobileMenu}>
            <span>Splind</span>
          </Link>

          <Link to='/contact' className="button-container">
            <button className="signup-btn">
              <span className="btn-text">Get A Quote</span>
              <span className="arrow">→</span>
            </button>
          </Link>

        </nav>
      </div>

      {/* Overlay for mobile menu */}
      <div
        className={`overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>
    </header>
  )
}