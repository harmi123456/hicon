// Header.jsx
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const shopRef = useRef(null);

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



  const handleMouseEnter = () => {
    if (shopRef.current) {
      const rect = shopRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        left: rect.left
      });
    }
    setShopDropdown(true);
  };

  const handleMouseLeave = () => {
    setShopDropdown(false);
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
          {/* <Link to="/shop" className="nav-link" onClick={closeMobileMenu}>
            <span>Shop</span>
          </Link>
          <Link to="/chair" className="nav-link" onClick={closeMobileMenu}>
            <span>Chairs</span>
          </Link>
          <Link to="/sofa" className="nav-link" onClick={closeMobileMenu}>
            <span>Sofas</span>
          </Link> */}

          <div
            ref={shopRef}
            className="nav-item-dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/shop" className="nav-link">
              <span>Shop</span>
              <svg
                className={`dropdown-arrow ${shopDropdown ? 'rotate' : ''}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Link>
          </div>

          {/* Portal for dropdown */}
          {shopDropdown && createPortal(
            <div
              className="dropdown-menu"
              style={{
                top: `${dropdownPosition.top}px`,
                left: `${dropdownPosition.left}px`
              }}
              onMouseEnter={() => setShopDropdown(true)}
              onMouseLeave={() => setShopDropdown(false)}
            >
              <Link to="/chair" className="dropdown-item" onClick={closeMobileMenu}>
                <span>Chairs</span>
              </Link>
              <Link to="/sofa" className="dropdown-item" onClick={closeMobileMenu}>
                <span>Sofas</span>
              </Link>
            </div>,
            document.body
          )}


          <Link to="/art-of-sitting" className="nav-link" onClick={closeMobileMenu}>
            <span>Art of Sitting</span>
          </Link>
          {/* <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>
            <span>Contact</span>
          </Link> */}
          {/* <Link to="/splind" className="nav-link" onClick={closeMobileMenu}>
            <span>Splind</span>
          </Link> */}
          

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