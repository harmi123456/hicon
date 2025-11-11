// src/pages/ArtOfSitting.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ArtOfSitting() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".hero-title", {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out"
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      });

      gsap.from(".hero-cta", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.6,
        ease: "back.out(1.7)"
      });

      // Floating person animation
      gsap.to(".sitting-person", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Posture cards animation
      gsap.from(".posture-card", {
        scrollTrigger: {
          trigger: ".posture-section",
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 0.3,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out"
      });

      // Animate to full opacity
      gsap.to(".posture-card", {
        scrollTrigger: {
          trigger: ".posture-section",
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out"
      });

      // Mistakes section
      gsap.from(".mistake-card", {
        scrollTrigger: {
          trigger: ".mistakes-section",
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 0.3,
        x: -30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.to(".mistake-card", {
        scrollTrigger: {
          trigger: ".mistakes-section",
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
      });

      // Tips animation
      gsap.from(".tip-item", {
        scrollTrigger: {
          trigger: ".tips-section",
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 0.3,
        x: -30,
        stagger: 0.08,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.to(".tip-item", {
        scrollTrigger: {
          trigger: ".tips-section",
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        x: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.from(".visual-reminder", {
        scrollTrigger: {
          trigger: ".tips-section",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 0.3,
        scale: 0.95,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.to(".visual-reminder", {
        scrollTrigger: {
          trigger: ".tips-section",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out"
      });

      // Benefits cards
      gsap.from(".benefit-card", {
        scrollTrigger: {
          trigger: ".benefits-section",
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 0.3,
        scale: 0.95,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.to(".benefit-card", {
        scrollTrigger: {
          trigger: ".benefits-section",
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
      });

      // Stats counter animation
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 0.3,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.to(".stat-item", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out"
      });

      // CTA section
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 0.3,
        y: 30,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.to(".cta-content", {
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const postureSteps = [
    {
      title: "Feet Position",
      description: "Keep your feet flat on the floor or use a footrest for proper support",
      icon: "👣",
      tip: "Knees should be at a 90° angle"
    },
    {
      title: "Back Support",
      description: "Keep your back fully supported against the chair backrest",
      icon: "🪑",
      tip: "Lumbar support is essential"
    },
    {
      title: "Arm Position",
      description: "Shoulders relaxed with arms resting comfortably on armrests",
      icon: "💪",
      tip: "Elbows at 90-120° angle"
    },
    {
      title: "Screen Level",
      description: "Computer screen at eye level or slightly below to avoid neck strain",
      icon: "🖥️",
      tip: "Keep screen 20-26 inches away"
    }
  ];

  const commonMistakes = [
    {
      wrong: "❌ Slouching Forward",
      right: "✅ Sit Upright with Back Support",
      pain: "Causes: Neck & Back Pain"
    },
    {
      wrong: "❌ Dangling Feet",
      right: "✅ Feet Flat on Floor",
      pain: "Causes: Lower Back Strain"
    },
    {
      wrong: "❌ Raised Shoulders",
      right: "✅ Relaxed Shoulders Down",
      pain: "Causes: Shoulder & Neck Pain"
    },
    {
      wrong: "❌ Same Position Too Long",
      right: "✅ Change Position Every 30 Min",
      pain: "Causes: Muscle Stiffness"
    }
  ];

  const expertTips = [
    {
      title: "Take Breaks Every 30 Minutes",
      desc: "Stand up and walk around to improve circulation"
    },
    {
      title: "Practice Stretching",
      desc: "Do neck, shoulder and back exercises regularly"
    },
    {
      title: "Use Ergonomic Chair",
      desc: "Adjustable with proper lumbar support"
    },
    {
      title: "Position Monitor Correctly",
      desc: "At eye level or slightly below"
    },
    {
      title: "Stay Hydrated",
      desc: "Drinking water helps remind you about posture"
    }
  ];

  const benefits = [
    {
      icon: "🎯",
      title: "Better Posture",
      description: "Correct sitting improves overall body alignment and posture",
      color: "var(--primary-color)"
    },
    {
      icon: "💪",
      title: "No Back Pain",
      description: "Reduces back pain and muscle tension significantly",
      color: "var(--secondary-color)"
    },
    {
      icon: "🧠",
      title: "Increased Focus",
      description: "Comfortable sitting enhances concentration and productivity",
      color: "var(--primary-color)"
    },
    {
      icon: "⚡",
      title: "More Energy",
      description: "Proper posture increases energy levels throughout the day",
      color: "var(--secondary-color)"
    }
  ];





  //sec1
   const [activeOption, setActiveOption] = useState(1);

  // Option 1: Modern Split with Image
  const Option1 = () => (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #ffffff 0%, #f6f6f6 100%)',
      padding: '0 50px'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              display: 'inline-block',
              padding: '8px 20px',
              background: 'rgba(172, 39, 38, 0.1)',
              borderRadius: '30px',
              color: '#ac2726',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginBottom: '30px'
            }}>
              🪑 Ergonomic Solutions
            </div>
            <h1 style={{
              fontSize: '4.5rem',
              fontWeight: '900',
              color: '#2b2b2b',
              lineHeight: '1.1',
              marginBottom: '25px',
              letterSpacing: '-2px'
            }}>
              Master the<br/>
              <span style={{ color: '#ac2726' }}>Art of Sitting</span>
            </h1>
            <p style={{
              fontSize: '1.3rem',
              color: '#666',
              lineHeight: '1.8',
              marginBottom: '40px',
              maxWidth: '500px'
            }}>
              Transform your health with proper posture. Say goodbye to back pain, neck strain, and discomfort.
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <button style={{
                padding: '18px 40px',
                background: '#ac2726',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(172, 39, 38, 0.25)'
              }}>
                Explore Chairs →
              </button>
              <button style={{
                padding: '18px 40px',
                background: 'transparent',
                color: '#2b2b2b',
                border: '2px solid #2b2b2b',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: 'pointer'
              }}>
                Learn More
              </button>
            </div>
            <div style={{ display: 'flex', gap: '40px', marginTop: '50px' }}>
              <div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ac2726', marginBottom: '5px' }}>10K+</h3>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>Happy Customers</p>
              </div>
              <div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ac2726', marginBottom: '5px' }}>4.9★</h3>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>Average Rating</p>
              </div>
              <div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ac2726', marginBottom: '5px' }}>24/7</h3>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>Support</p>
              </div>
            </div>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #ac2726 0%, #8a1f1e 100%)',
            borderRadius: '30px',
            padding: '60px',
            position: 'relative',
            boxShadow: '0 20px 60px rgba(172, 39, 38, 0.3)'
          }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: '8rem', marginBottom: '20px' }}>🪑</div>
              <h3 style={{ fontSize: '2rem', marginBottom: '15px', fontWeight: '700' }}>Perfect Posture</h3>
              <p style={{ fontSize: '1.1rem', opacity: '0.9' }}>
                Ergonomically designed for your comfort and health
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Option 2: Centered Hero with Features
  const Option2 = () => (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(180deg, #ffffff 0%, #f6f6f6 100%)',
      padding: '80px 50px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'inline-block',
          padding: '10px 25px',
          background: '#ac2726',
          color: 'white',
          borderRadius: '30px',
          fontSize: '0.9rem',
          fontWeight: '600',
          marginBottom: '30px'
        }}>
          ✨ Premium Ergonomic Solutions
        </div>
        
        <h1 style={{
          fontSize: '5.5rem',
          fontWeight: '900',
          color: '#2b2b2b',
          lineHeight: '1.1',
          marginBottom: '30px',
          letterSpacing: '-2px'
        }}>
          The Art of<br/>
          <span style={{
            background: 'linear-gradient(135deg, #ac2726, #8a1f1e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Perfect Sitting
          </span>
        </h1>
        
        <p style={{
          fontSize: '1.4rem',
          color: '#666',
          lineHeight: '1.8',
          marginBottom: '50px',
          maxWidth: '700px',
          margin: '0 auto 50px'
        }}>
          Learn professional techniques to eliminate back pain, improve posture, and boost productivity through proper sitting habits
        </p>
        
        <button style={{
          padding: '22px 55px',
          background: '#ac2726',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          fontSize: '1.2rem',
          fontWeight: '700',
          cursor: 'pointer',
          boxShadow: '0 15px 40px rgba(172, 39, 38, 0.3)',
          marginBottom: '80px'
        }}>
          Start Your Journey →
        </button>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px',
          marginTop: '60px'
        }}>
          {[
            { icon: '👣', title: 'Feet Position', desc: 'Proper foot placement' },
            { icon: '🪑', title: 'Back Support', desc: 'Lumbar alignment' },
            { icon: '💪', title: 'Arm Rest', desc: 'Shoulder relaxation' },
            { icon: '🖥️', title: 'Screen Level', desc: 'Eye comfort' }
          ].map((item, i) => (
            <div key={i} style={{
              background: 'white',
              padding: '35px 25px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              border: '2px solid #dcdcdc'
            }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>{item.icon}</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#2b2b2b', marginBottom: '8px' }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#666' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Option 3: Full Width with Background
  const Option3 = () => (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, rgba(172, 39, 38, 0.95), rgba(138, 31, 30, 0.95))',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }}></div>
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 50px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '80px',
          alignItems: 'center',
          color: 'white'
        }}>
          <div>
            <h1 style={{
              fontSize: '5.5rem',
              fontWeight: '900',
              lineHeight: '1.1',
              marginBottom: '30px',
              letterSpacing: '-2px'
            }}>
              Sit Right,<br/>
              Live Better
            </h1>
            <p style={{
              fontSize: '1.4rem',
              lineHeight: '1.8',
              marginBottom: '50px',
              opacity: '0.95',
              maxWidth: '600px'
            }}>
              Discover the science of ergonomic sitting. Eliminate pain, boost energy, and enhance your well-being with our expert guidance.
            </p>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '60px' }}>
              <button style={{
                padding: '20px 45px',
                background: 'white',
                color: '#ac2726',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.15rem',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}>
                Get Started
              </button>
              <button style={{
                padding: '20px 45px',
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                borderRadius: '50px',
                fontSize: '1.15rem',
                fontWeight: '700',
                cursor: 'pointer'
              }}>
                Watch Video ▶
              </button>
            </div>
            
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              padding: '30px',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <p style={{ fontSize: '0.95rem', marginBottom: '15px', opacity: '0.9' }}>Trusted by industry leaders:</p>
              <div style={{ display: 'flex', gap: '30px', fontSize: '1.8rem' }}>
                <span>Google</span>
                <span>Microsoft</span>
                <span>Apple</span>
                <span>Amazon</span>
              </div>
            </div>
          </div>
          
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(20px)',
            borderRadius: '30px',
            padding: '50px',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '10rem', marginBottom: '20px' }}>🎯</div>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '15px', fontWeight: '800' }}>
                Pain-Free Guarantee
              </h3>
              <p style={{ fontSize: '1.15rem', opacity: '0.9', lineHeight: '1.6' }}>
                Follow our proven methods and eliminate chronic pain within 30 days or your money back
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  return (
    <div className="art-of-sitting-white" ref={containerRef}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">The Art of Sitting</h1>
              <p className="hero-subtitle">
                Learn the correct way to sit and eliminate neck pain, back pain forever
              </p>
              <button className="hero-cta" onClick={() => navigate("/chairs")}>
                Explore Ergonomic Chairs
                <span className="arrow">→</span>
              </button>
            </div>
            
            <div className="hero-visual">
              <div className="sitting-person">
                <div className="person-illustration">
                  <div className="head">😊</div>
                  <div className="body"></div>
                  <div className="arms"></div>
                  <div className="chair-base">
                    <div className="chair-back"></div>
                    <div className="chair-seat"></div>
                    <div className="chair-wheels">
                      <span>⚙️</span>
                      <span>⚙️</span>
                    </div>
                  </div>
                </div>
                <p className="posture-label">✓ Correct Posture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     <div>
      {/* Option Selector */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        background: 'white',
        padding: '15px',
        borderRadius: '15px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
        display: 'flex',
        gap: '10px'
      }}>
        <button
          onClick={() => setActiveOption(1)}
          style={{
            padding: '10px 20px',
            background: activeOption === 1 ? '#ac2726' : '#f6f6f6',
            color: activeOption === 1 ? 'white' : '#2b2b2b',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Option 1
        </button>
        <button
          onClick={() => setActiveOption(2)}
          style={{
            padding: '10px 20px',
            background: activeOption === 2 ? '#ac2726' : '#f6f6f6',
            color: activeOption === 2 ? 'white' : '#2b2b2b',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Option 2
        </button>
        <button
          onClick={() => setActiveOption(3)}
          style={{
            padding: '10px 20px',
            background: activeOption === 3 ? '#ac2726' : '#f6f6f6',
            color: activeOption === 3 ? 'white' : '#2b2b2b',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Option 3
        </button>
      </div>

      {/* Display Selected Option */}
      {activeOption === 1 && <Option1 />}
      {activeOption === 2 && <Option2 />}
      {activeOption === 3 && <Option3 />}
    </div>

      {/* Posture Steps */}
      <section className="posture-section">
        <div className="container">
          <h2 className="section-title">How to Sit Correctly?</h2>
          <p className="section-subtitle">4 Important Steps for Perfect Sitting Posture</p>
          
          <div className="posture-grid">
            {postureSteps.map((step, i) => (
              <div key={i} className="posture-card">
                <div className="card-number">{i + 1}</div>
                <div className="card-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="card-tip">
                  <span className="tip-badge">💡 Tip</span>
                  <span>{step.tip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mistakes Section */}
      <section className="mistakes-section">
        <div className="container">
          <h2 className="section-title">Common Mistakes & Corrections</h2>
          <p className="section-subtitle">Avoid these mistakes and stay pain-free</p>
          
          <div className="mistakes-grid">
            {commonMistakes.map((mistake, i) => (
              <div key={i} className="mistake-card">
                <div className="mistake-wrong">
                  <h4>{mistake.wrong}</h4>
                </div>
                <div className="arrow-divider">→</div>
                <div className="mistake-right">
                  <h4>{mistake.right}</h4>
                </div>
                <div className="pain-indicator">{mistake.pain}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="tips-section">
        <div className="container">
          <div className="tips-grid">
            <div className="tips-left">
              <h2>💡 Expert Tips</h2>
              <div className="tips-list">
                {expertTips.map((tip, i) => (
                  <div key={i} className="tip-item">
                    <span className="tip-number">{i + 1}</span>
                    <div>
                      <h4>{tip.title}</h4>
                      <p>{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tips-right">
              <div className="visual-reminder">
                <h3>20-20-20 Rule</h3>
                <div className="rule-visual">
                  <div className="rule-item">
                    <span className="rule-icon">⏱️</span>
                    <p>Every <strong>20 minutes</strong></p>
                  </div>
                  <div className="rule-item">
                    <span className="rule-icon">👀</span>
                    <p>Look <strong>20 feet</strong> away</p>
                  </div>
                  <div className="rule-item">
                    <span className="rule-icon">⏰</span>
                    <p>For <strong>20 seconds</strong></p>
                  </div>
                </div>
                <p className="rule-benefit">Reduces eye strain and fatigue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Benefits of Proper Sitting</h2>
          <p className="section-subtitle">Transform your health with correct posture</p>
          
          <div className="benefits-grid">
            {benefits.map((benefit, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-icon" style={{ color: benefit.color }}>
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">80</h3>
              <p>% People Have Back Pain</p>
              <span className="stat-subtext">from Poor Posture</span>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">6</h3>
              <p>Hours Average Sitting Time</p>
              <span className="stat-subtext">per day for office workers</span>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">30</h3>
              <p>Minutes Break Needed</p>
              <span className="stat-subtext">for healthy posture</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Pain-Free Sitting?</h2>
            <p>Explore our collection of ergonomic chairs designed for ultimate comfort</p>
            <button className="cta-button" onClick={() => navigate("/chairs")}>
              Shop Ergonomic Chairs
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}