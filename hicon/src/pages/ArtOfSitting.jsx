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


  return (
    <div className="art-of-sitting-white" ref={containerRef}>

      <section className="aos-banner-wrapper">
        <div className="aos-main-container">
          <div className="aos-text-block">
            <span className="aos-badge-label">Premium Chairs</span>
            <h1 className="aos-main-heading">
              Master The <span className="aos-accent-text">Art of Sitting</span> in Style & Comfort
            </h1>
            <p className="aos-intro-text">
              Discover our curated collection of ergonomic chairs and furniture designed to elevate your workspace and living spaces. Where comfort meets sophistication.
            </p>
            <div className="aos-cta-group">
              <button className="aos-action-btn aos-action-btn--filled" onClick={() => navigate("/chair")}>Explore Collection</button>
              <button className="aos-action-btn aos-action-btn--outlined" onClick={() => navigate("/about")}>Learn More</button>
            </div>
            <div className="aos-metrics-grid">
              <div className="aos-metric-box">
                <div className="aos-metric-value">500+</div>
                <div className="aos-metric-title">Premium Designs</div>
              </div>
              <div className="aos-metric-box">
                <div className="aos-metric-value">10K+</div>
                <div className="aos-metric-title">Happy Customers</div>
              </div>
              <div className="aos-metric-box">
                <div className="aos-metric-value">10+</div>
                <div className="aos-metric-title">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="aos-visual-block">
            <div className="aos-image-frame">
              <img src="/img/chair1.png" alt="Premium Chair Collection" />
            </div>
          </div>
        </div>
      </section>


      {/* Posture Steps */}
      <section className="posture-section sitting-padding">
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
      <section className="mistakes-section sitting-padding">
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
      <section className="tips-section sitting-padding">
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
      <section className="benefits-section sitting-padding">
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
      <section className="stats-section sitting-padding">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">80</h3>
              <p> People Have Back Pain</p>
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
      <section className="cta-section sitting-padding">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Pain-Free Sitting?</h2>
            <p>Explore our collection of ergonomic chairs designed for ultimate comfort</p>
            <button className="cta-button" onClick={() => navigate("/chair")}>
              Explore our Ergonomic Chairs
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}