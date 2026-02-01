import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Sparkles, Coffee, Zap, Heart, Brain, Moon, Award, Shield, Star } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ModelViewer from '../components/Model';

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Wait for Lenis to initialize, then create animations
    const timer = setTimeout(() => {
      // Animation 2: Scale up
      gsap.from('.sec3', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.sec3',
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
          // markers removed
        },
      });

      // Removed sec4 pinning animation entirely

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  //sec 2 slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const products = [
    { id: 1, name: 'Premium Chair', image: '/img/chair_57.jpg' },
    { id: 2, name: 'Executive Chair', image: '/img/chair_40.jpg' },
    { id: 3, name: 'Office Chair', image: '/img/chair_16.jpg' },
    { id: 4, name: 'Bar stool', image: '/img/chair_37.jpg' },
    { id: 5, name: 'Cafeteria Chair', image: '/img/chair_29.jpg' },
  ];

  const infiniteProducts = [...products, ...products, ...products];
  const totalProducts = products.length;

  const scrollToIndex = (index, smooth = true) => {
    if (sliderRef.current) {
      const cardWidth = 304; // 18rem + 1.5rem gap
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: smooth ? 'smooth' : 'auto'
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < infiniteProducts.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      scrollToIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      scrollToIndex(prevIndex);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      // Start from middle set
      const initialIndex = totalProducts;
      setCurrentIndex(initialIndex);
      scrollToIndex(initialIndex, false);
    }
  }, []);

  // Calculate progress based on position within single set
  const displayIndex = currentIndex % totalProducts;
  const progress = (displayIndex / (totalProducts - 1)) * 100;





  //scramble text code
  const [displayText, setDisplayText] = useState('Executive Chairs');
  const frameRef = useRef(0);
  const currentPhraseRef = useRef(0);
  const animationRef = useRef(null);

  const chairCategories = [
    "Executive Chairs",
    "Premium series",
    "Cafeteria series",
    "Bar stools",
    "Office Essentials",
    "Comfort Redefined",
  ];

  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    startScrambling();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const scrambleText = (newText, onComplete) => {
    const queue = [];
    const currentText = displayText.replace(/<[^>]*>/g, '');
    const textOnly = newText.replace(/<[^>]*>/g, '');

    for (let i = 0; i < textOnly.length; i++) {
      const from = currentText[i] || "";
      const to = textOnly[i];
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      queue.push({ from, to, start, end, char: '' });
    }

    frameRef.current = 0;

    const update = () => {
      let scrambledText = "";
      let complete = 0;

      for (let i = 0; i < queue.length; i++) {
        let { from, to, start, end, char } = queue[i];

        if (frameRef.current >= end) {
          complete++;
          scrambledText += to;
        } else if (frameRef.current >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queue[i].char = char;
          }
          scrambledText += `<span style="opacity:0.5;">${char}</span>`;
        } else {
          scrambledText += from;
        }
      }

      setDisplayText(scrambledText);

      if (complete === queue.length) {
        if (onComplete) onComplete();
      } else {
        animationRef.current = requestAnimationFrame(update);
        frameRef.current++;
      }
    };

    update();
  };

  const startScrambling = (index = 0) => {
    scrambleText(chairCategories[index], () => {
      setTimeout(() => {
        currentPhraseRef.current = (index + 1) % chairCategories.length;
        startScrambling(currentPhraseRef.current);
      }, 5000);
    });
  };




  //sec 3 shop by mood
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef2 = useRef(null);

  const moods = [
    {
      id: 1,
      mood: 'Productive',
      description: 'Get things done with focused comfort',
      icon: Brain,
      color: '#ac2726',
      gradient: 'linear-gradient(135deg, #ac2726 0%, #8a1f1e 100%)',
      image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=600&fit=crop',
      chairs: ['Executive Pro', 'Office Elite', 'Work Master'],
      ambiance: '⚡ High Energy'
    },
    {
      id: 2,
      mood: 'Relaxed',
      description: 'Unwind and sink into pure comfort',
      icon: Coffee,
      color: '#8a6f47',
      gradient: 'linear-gradient(135deg, #8a6f47 0%, #6b5636 100%)',
      image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&h=600&fit=crop',
      chairs: ['Lounge Master', 'Comfort Plus', 'Relax Pro'],
      ambiance: '☕ Chill Vibes'
    },
    {
      id: 3,
      mood: 'Energetic',
      description: 'Power through with dynamic support',
      icon: Zap,
      color: '#ff6b35',
      gradient: 'linear-gradient(135deg, #ff6b35 0%, #e85d2a 100%)',
      image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=600&fit=crop',
      chairs: ['Gaming Beast', 'Sport Elite', 'Action Pro'],
      ambiance: '⚡ Peak Performance'
    },
    {
      id: 4,
      mood: 'Creative',
      description: 'Inspire innovation with ergonomic design',
      icon: Sparkles,
      color: '#9b59b6',
      gradient: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)',
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=600&fit=crop',
      chairs: ['Studio Master', 'Design Pro', 'Art Elite'],
      ambiance: '✨ Creative Flow'
    },
    {
      id: 5,
      mood: 'Focused',
      description: 'Deep work with minimal distractions',
      icon: Heart,
      color: '#2ecc71',
      gradient: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
      image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&h=600&fit=crop',
      chairs: ['Focus Elite', 'Zen Master', 'Mind Pro'],
      ambiance: '🧘 Deep Focus'
    },
    {
      id: 6,
      mood: 'Midnight',
      description: 'Late-night sessions in ultimate comfort',
      icon: Moon,
      color: '#34495e',
      gradient: 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop',
      chairs: ['Night Owl', 'Lunar Elite', 'Dark Pro'],
      ambiance: '🌙 Night Mode'
    }
  ];

  const handlePrev1 = () => {
    setActiveIndex((prev) => (prev === 0 ? moods.length - 1 : prev - 1));
  };

  const handleNext1 = () => {
    setActiveIndex((prev) => (prev === moods.length - 1 ? 0 : prev + 1));
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const MoodIcon = moods[activeIndex].icon;



  //sec4
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const chairs = [
    {
      id: 1,
      image: '/img/chair_55.jpg',
      title: 'Premium Chair',
      style: 'Luxury Comfort'
    },
    {
      id: 2,
      image: '/img/chair_58.jpg',
      title: 'Executive Chair',
      style: 'Professional Series'
    },
    {
      id: 3,
      image: '/img/chair_11.jpg',
      title: 'Air Series Chair',
      style: 'Breathable Mesh'
    },
    {
      id: 4,
      image: '/img/chair_24.jpg',
      title: 'Bar Stool',
      style: 'Modern High Seating'
    },
    {
      id: 5,
      image: '/img/chair_35.jpg',
      title: 'Cafeteria Chair',
      style: 'Commercial Comfort'
    }
  ];


  const isAnyHovered = hoveredIndex !== null;



  //sec1 slider
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();


  const slides = [
    {
      image: '/img/banner5.jpg',
      title: 'Comfort Redefined',
      subtitle: 'Premium Seating Collection',
      description: 'Experience luxury with our ergonomically designed chairs'
    },
    {
      image: '/img/banner6.jpg',
      title: 'Style Meets Function',
      subtitle: 'Modern Chair Designs',
      description: 'Transform your space with contemporary elegance'
    },
    {
      image: '/img/banner7.jpg',
      title: 'Crafted Excellence',
      subtitle: 'Handpicked Collection',
      description: 'Where comfort meets sophisticated design'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };


  //sec5 
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "⚡",
      title: "Synchro Mechanism",
      desc: "Multi-position locking arrangement for optimal comfort"
    },
    {
      icon: "🎯",
      title: "Class-4 Gas Lift",
      desc: "Premium seat height adjustment system"
    },
    {
      icon: "🛡️",
      title: "3 Year Warranty",
      desc: "Comprehensive coverage on all components"
    },
    {
      icon: "⭐",
      title: "Nylon Castors",
      desc: "Smooth & silent movement on any surface"
    }
  ];

  const specs = [
    { label: "Material", value: "Premium Quilted Leather" },
    { label: "Color", value: "Turquoise Blue" },
    { label: "Base", value: "Chrome Plated" },
    { label: "Armrest", value: "Fixed with PU Pad" },
    { label: "Warranty", value: "3 Years" },
    { label: "Capacity", value: "Up to 120 kg" }
  ];


  //sec 6
  const row1Items = [
    { id: 1, title: "Ergonomic Design", icon: "💺" },
    { id: 2, title: "Smooth 360° Rotation", icon: "🔄" },
    { id: 3, title: "Adjustable Height", img: "/img/height.png" },
    { id: 4, title: "Premium Cushion Comfort", icon: "🛋️" },
    { id: 5, title: "Breathable Mesh Back", icon: "🌬️" },
    { id: 6, title: "Durable Build Quality", icon: "🛡️" },
    { id: 7, title: "Premium Quality Mechanism", icon: "🛡️" },
  ];

  const row2Items = [
    { id: 7, title: "Back Support for Long Hours", icon: "🧍‍♂️" },
    { id: 8, title: "Easy Mobility with Wheels", icon: "🛞" },
    { id: 9, title: "Noise-Free Movement", img: "/img/mute.png" },
    { id: 10, title: "Premium Upholstery", icon: "✨" },
    { id: 11, title: "Stylish Modern Look", icon: "🎨" },
    { id: 12, title: "Tested for Stability & Balance", icon: "📌" },
  ];


  //new code
  const stickyRef = useRef(null);
  const imageLeftRef = useRef(null);
  const imageRightRef = useRef(null);
  const servicesRef = useRef(null);
  const serviceItemsRef = useRef([]);

  const services = [
    { title: "Custom Chair Design", description: "Tailor-made revolving chairs designed to match comfort and style preferences." },
    { title: "Office Chair Manufacturing", description: "High-quality ergonomic chairs built with premium materials for long-term durability." },
    { title: "Bulk Corporate Orders", description: "Special pricing and supply solutions for offices, startups, and institutions." },
    { title: "Repair & Maintenance", description: "Servicing, part replacement, and upgrades for all types of office chairs." },
    { title: "Home & Workspace Setup", description: "Consultation and delivery of chairs based on posture, space, and work needs." },
  ];


  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current || !imageLeftRef.current || !imageRightRef.current || !servicesRef.current) return;

      const stickyTop = stickyRef.current.offsetTop;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate progress (0 to 1)
      const progress = Math.max(0, Math.min(1, (scrollPosition - stickyTop) / windowHeight));

      // Image split animation
      const maxSplit = 60; // Maximum percentage to move
      const translateX = progress * maxSplit;

      if (imageLeftRef.current) {
        imageLeftRef.current.style.transform = `translateX(-${translateX}%)`;
      }
      if (imageRightRef.current) {
        imageRightRef.current.style.transform = `translateX(${translateX}%)`;
      }

      // Services fade and scale
      if (servicesRef.current) {
        const scale = 0.8 + (progress * 0.2);
        const opacity = progress;
        servicesRef.current.style.opacity = opacity;
        servicesRef.current.style.transform = `scale(${scale})`;
      }

      // Stagger service items
      serviceItemsRef.current.forEach((item, index) => {
        if (item) {
          const delay = index * 0.1;
          const itemProgress = Math.max(0, Math.min(1, progress - delay));
          item.style.opacity = itemProgress;
          item.style.transform = `translateY(${(1 - itemProgress) * 30}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div>
      <section className="sec1 hero-slider">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="overlay" />

        {/* Animated Text - Right Side */}
        <div className="content-wrapper">
          <div className="text-content">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide-text ${index === currentSlide ? 'active' : ''}`}
              >
                <h3 className="subtitle">{slide.subtitle}</h3>

                <h1 className="title">{slide.title}</h1>
                <p className="description">{slide.description}</p>

                <div className="button-container">
                  <button
                    className="signup-btn"
                    onClick={() => navigate("/chair")}
                  >
                    <span className="btn-text">Explore More</span>
                    <span className="arrow">→</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="dots-wrapper">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>
      </section>

      <section className="sec2">
        <div className="title-container">
          <div
            id="cinematic-scramble-text"
            className="main-title"
            dangerouslySetInnerHTML={{ __html: displayText }}
          />
        </div>

        <div className="slider-container">
          <div className="slider-wrapper">
            <div ref={sliderRef} className="slider-track">
              {infiniteProducts.map((product, index) => (
                <div key={`${product.id}-${index}`} className="product-card">
                  <div className="product-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                  </div>
                  <h3 className="product-title">{product.name}</h3>
                </div>
              ))}
            </div>

            <div className="navigation-container">
              <button onClick={handlePrev} className="nav-button" aria-label="Previous">
                <ChevronLeft className="nav-icon" />
              </button>

              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progress}%` }} />
              </div>

              <button onClick={handleNext} className="nav-button" aria-label="Next">
                <ChevronRight className="nav-icon" />
              </button>
            </div>
          </div>
        </div>



      </section>


      <section className="sec3">
        <div className="mood-slider-container">
          <div className="container">
            {/* Header */}
            <div className="header">
              <div className="header-content">
                <h2 className="title">Shop by Mood</h2>
                <p className="subtitle">Find your perfect chair based on how you feel</p>
              </div>
              <div className="navigation">
                <button className="nav-btn" onClick={handlePrev1}>
                  <ChevronLeft size={24} />
                </button>
                <button className="nav-btn" onClick={handleNext1}>
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Main Slider */}
            <div className="slider-wrapper">
              <div
                ref={sliderRef2}
                className="slider-track"
                onMouseDown={handleDragStart}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onMouseMove={handleDragMove}
              >
                {moods.map((mood, index) => {
                  const Icon = mood.icon;
                  const isActive = index === activeIndex;
                  const offset = index - activeIndex;

                  return (
                    <div
                      key={mood.id}
                      className={`mood-card ${isActive ? 'active' : ''}`}
                      style={{
                        transform: `translateX(${offset * 100}%) scale(${isActive ? 1 : 0.85})`,
                        opacity: isActive ? 1 : 0.5,
                        zIndex: isActive ? 10 : 1
                      }}
                      onClick={() => setActiveIndex(index)}
                    >
                      {/* Background Image */}
                      <div className="card-image">
                        <img src={mood.image} alt={mood.mood} />
                        <div className="image-overlay" style={{ background: mood.gradient }} />
                      </div>

                      {/* Content */}
                      <div className="card-content">
                        {/* Mood Badge */}
                        <div className="mood-badge" style={{ background: mood.gradient }}>
                          <Icon size={20} />
                          <span>{mood.mood}</span>
                        </div>

                        {/* Ambiance */}
                        <div className="ambiance">{mood.ambiance}</div>

                        {/* Description */}
                        <p className="mood-description">{mood.description}</p>

                        {/* Chair List */}
                        <div className="chair-list">
                          {mood.chairs.map((chair, i) => (
                            <div key={i} className="chair-tag">
                              {chair}
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <button className="explore-btn" style={{ background: mood.gradient }}>
                          Explore {mood.mood} Collection
                        </button>
                      </div>

                      {/* Floating Icon */}
                      <div className="floating-icon" style={{ color: mood.color }}>
                        <Icon size={80} strokeWidth={1} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mood Indicators */}
            <div className="indicators">
              {moods.map((mood, index) => (
                <button
                  key={mood.id}
                  className={`indicator ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    background: index === activeIndex ? mood.gradient : '#dcdcdc'
                  }}
                />
              ))}
            </div>

            {/* Current Mood Info */}
            {/* <div className="current-mood-info">
                <div className="mood-icon-display" style={{ background: moods[activeIndex].gradient }}>
                  <MoodIcon size={32} />
                </div>
                <div className="mood-text">
                  <h3>{moods[activeIndex].mood} Mode</h3>
                  <p>{moods[activeIndex].description}</p>
                </div>
              </div> */}

          </div>
        </div>
      </section>


      <section className="sec4">
        <div className="cinematic-section">
          <div className="background-gradient" />

          <div className="cinematic-container">
            {/* Left Content */}
            <div className="left-content">
              {/* Trust Badge */}
              <div className="trust-badge">
                <div className="trust-label">TRUSTED BY:</div>
                <div className="trust-number">
                  <span className="number-big">10</span>
                  <span className="number-small">k+</span>
                </div>
                <div className="trust-users">USERS</div>
              </div>

              {/* Main Heading */}
              <h1 className="scroll-progress-heading">
                REVOLVE IN STYLE
                <br />
                <span className="heading-bold">WITH HICON</span>
              </h1>

              <div className="main-heading">
                <p className="description">
                  To lead in ergonomic seating and comfort innovation - you need vision, craftsmanship, and engineering precision.
                  <span className="highlight">Hicon Seating Solutions®</span> is your trusted partner in premium revolving chairs.
                  <span className="highlight"> ComfortVault 360™</span> is your global collection of luxury ergonomic designs.
                </p>
              </div>

              <div className="button-container">
                <button className="signup-btn" onClick={() => navigate("/chair")}>
                  <span className="btn-text">Explore Collection</span>
                  <span className="arrow">→</span>
                </button>
              </div>

            </div>

            {/* Right Accordion Gallery */}
            <div className="accordion-gallery">
              {chairs.map((chair, index) => {
                const isHovered = hoveredIndex === index;
                const widthClass = isHovered ? 'expanded' : isAnyHovered ? 'shrunk' : 'default';

                return (
                  <div
                    key={chair.id}
                    className={`accordion-item ${widthClass} ${isHovered ? 'hovered' : ''} ${isAnyHovered && !isHovered ? 'dimmed' : ''}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Image */}
                    <img
                      src={chair.image}
                      alt={chair.title}
                      className="accordion-image"
                    />

                    {/* Dark Overlay */}
                    <div className="dark-overlay" />

                    {/* Content Overlay */}
                    <div className="content-overlay">
                      {/* Style Badge */}
                      <div className="style-badge">{chair.style}</div>

                      {/* Title */}
                      <div className="chair-title">{chair.title}</div>

                      {/* Extra Info - only visible on hover */}
                      {isHovered && (
                        <div className="extra-info">
                          Explore our premium collection
                        </div>
                      )}
                    </div>

                    {/* Border Glow Effect on Hover */}
                    {isHovered && <div className="border-glow" />}

                    {/* Index Number - visible when closed */}
                    {!isHovered && (
                      <div className="index-number">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <div className="sec5">
        <div className="model"><ModelViewer /></div>
        <div className="bestseller-sec">
          <div className="bestseller-content">
            <span className="badge">Bestseller Collection</span>
            <h2>Premium Ergonomic Chairs</h2>
            <p className="description">
              Experience ultimate comfort with our best-selling ergonomic chairs.
              Designed for long hours of work with superior back support and adjustable features.
            </p>

            <div className="features">
              <div className="feature-item">
                <span className="icon">✓</span>
                <span>Lumbar Support</span>
              </div>
              <div className="feature-item">
                <span className="icon">✓</span>
                <span>Height Adjustable</span>
              </div>
              <div className="feature-item">
                <span className="icon">✓</span>
                <span>360° Rotation</span>
              </div>
              <div className="feature-item">
                <span className="icon">✓</span>
                <span>Premium Material</span>
              </div>
            </div>

            {/* <div className="price-section">
        <span className="old-price">₹18,999</span>
        <span className="new-price">₹14,999</span>
        <span className="discount">21% OFF</span>
      </div> */}

            {/* <button className="shop-now-btn">
              Shop Now
              <span className="arrow">→</span>
            </button> */}


          </div>
        </div>
      </div>


      {/* Sticky Image Section with Split Effect */}
      <section ref={stickyRef} className="sticky-section">
        <div className="images-wrapper">
          {/* Left Half of Image */}
          <div ref={imageLeftRef} className="image-half image-left">
            <img
              src="/img/background.png"
              alt="Architecture"
              className="split-image"
            />
          </div>

          {/* Right Half of Image */}
          <div ref={imageRightRef} className="image-half image-right">
            <img
            src='/img/background.png'
              // src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=80"
              alt="Architecture"
              className="split-image"
            />
          </div>
        </div>

        {/* Services Content */}
        <div ref={servicesRef} className="services-overlay">
          <div className="services-container">
            <h2 className="services-title">SERVICES</h2>

            <div className="services-list">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-item"
                  ref={el => serviceItemsRef.current[index] = el}
                >
                  <div className="service-card">
                    <div className="service-left">
                      <div className="service-icon">
                        <div className="service-dot"></div>
                      </div>
                      <div className="service-content">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                      </div>
                    </div>

                    <div className="service-arrow">
                      <ArrowUpRight color="#fff" size={24} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec6">
        <div id="slider-container">
          {/* Row 1: Left to Right */}
          <div className="slider-row row-left-to-right">
            <div className="slider-track">
              {[...row1Items, ...row1Items].map((item, index) => (
                <div key={`row1-${index}`} className="slider-item">

                  <div className="item-icon">
                    {item.icon ? (
                      <span className="icon-text">{item.icon}</span>
                    ) : (
                      <img src={item.img} alt={item.title} />
                    )}
                  </div>

                  <div className="item-title">{item.title}</div>
                </div>
              ))}

            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="slider-row row-right-to-left">
            <div className="slider-track">
              {[...row2Items, ...row2Items].map((item, index) => (
                <div key={`row2-${index}`} className="slider-item">

                  <div className="item-icon">
                    {item.icon ? (
                      <span className="icon-text">{item.icon}</span>
                    ) : (
                      <img src={item.img} alt={item.title} />
                    )}
                  </div>

                  <div className="item-title">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}