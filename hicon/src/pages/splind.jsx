import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function SplitImageScroll() {
  const containerRef = useRef(null);
  const imageLeftRef = useRef(null);
  const imageRightRef = useRef(null);
  const servicesRef = useRef(null);
  const stickyRef = useRef(null);
  const serviceItemsRef = useRef([]);

  const services = [
    {
      title: "Modish.Ai™ (iOS App)",
      description: "AI-Powered Space Redesigns."
    },
    {
      title: "DesignVault 3D™",
      description: "License Ultra-Luxury Cinematic Spaces"
    },
    {
      title: "Event Design AI™",
      description: "Restage Venues in Cinematic 3D Before They Happen"
    },
    {
      title: "Brand Design AI™",
      description: "Create Cinematic 3D Magazines from Your Spaces"
    },
    {
      title: "Echo™",
      description: "Grow Your Audience with Cinematic Reach"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(servicesRef.current, { y: '100%' });
      gsap.set(serviceItemsRef.current, { opacity: 0, y: 50 });
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stickyRef.current,
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      // Image split થાય (80% સુધી)
      tl.to(imageLeftRef.current, {
        x: '-40%',
        duration: 1,
        ease: 'power2.inOut'
      }, 0)
      .to(imageRightRef.current, {
        x: '40%',
        duration: 1,
        ease: 'power2.inOut'
      }, 0)
      // Services નીચેથી આવે
      .to(servicesRef.current, {
        y: '0%',
        duration: 1,
        ease: 'power2.out'
      }, 0.5)
      // Services items એક એક કરીને show થાય
      .to(serviceItemsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power2.out'
      }, 1.2);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          background: #000;
          color: #fff;
        }

        .container {
          background: #000;
        }

        .blank-section {
          height: 100vh;
          background: linear-gradient(to bottom, #171717, #262626);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blank-content {
          text-align: center;
        }

        .blank-title {
          font-size: 5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }

        .blank-subtitle {
          font-size: 1.25rem;
          color: #a3a3a3;
        }

        .sticky-section {
          height: 100vh;
          position: relative;
          overflow: hidden;
          background: #000;
        }

        .images-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .image-half {
          position: absolute;
          width: 50%;
          height: 100%;
          overflow: hidden;
        }

        .image-left {
          left: 0;
        }

        .image-right {
          right: 0;
        }

        .split-image {
          width: 200%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .image-right .split-image {
          margin-left: -100%;
        }

        .services-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          z-index: 2;
          pointer-events: none;
        }

        .services-container {
          width: 100%;
          max-width: 80rem;
          pointer-events: auto;
        }

        .services-title {
          font-size: 8rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4rem;
          text-align: center;
          letter-spacing: 0.1em;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        }

        .services-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .service-item {
          position: relative;
        }

        .service-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.95);
          border: 1px solid #262626;
          border-radius: 9999px;
          padding: 1.5rem 2rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .service-card:hover {
          border-color: #525252;
          background: rgba(0, 0, 0, 0.98);
          transform: translateX(5px);
        }

        .service-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .service-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          border: 1px solid #404040;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          background: #404040;
        }

        .service-content h3 {
          color: #fff;
          font-size: 1.125rem;
          font-weight: 300;
          margin-bottom: 0.25rem;
        }

        .service-content p {
          color: #737373;
          font-size: 0.875rem;
        }

        .service-arrow {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          background: #c6f547;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .service-card:hover .service-arrow {
          background: #d4ff6b;
          transform: rotate(45deg);
        }

        .next-section {
          min-height: 100vh;
          background: #171717;
          padding: 5rem 2rem;
        }

        .next-content {
          max-width: 72rem;
          margin: 0 auto;
        }

        .next-title {
          font-size: 3.75rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 2rem;
        }

        .next-text {
          font-size: 1.25rem;
          color: #a3a3a3;
          margin-bottom: 1.5rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          padding: 2rem;
          background: #262626;
          border-radius: 1rem;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
        }

        .feature-card p {
          color: #a3a3a3;
        }

        .footer {
          background: #000;
          border-top: 1px solid #262626;
          padding: 3rem;
          text-align: center;
          color: #737373;
        }

        @media (max-width: 768px) {
          .services-title {
            font-size: 3rem;
          }

          .blank-title {
            font-size: 3rem;
          }

          .service-card {
            padding: 1rem 1.5rem;
          }

          .service-content h3 {
            font-size: 1rem;
          }

          .service-arrow {
            width: 3rem;
            height: 3rem;
          }
        }
      `}</style>

      <div ref={containerRef} className="container">
        {/* Blank Section */}
        <section className="blank-section">
          <div className="blank-content">
            <h1 className="blank-title">DESIGNVAULT</h1>
            <p className="blank-subtitle">Scroll to discover our services</p>
          </div>
        </section>

        {/* Sticky Image Section with Split Effect */}
        <section ref={stickyRef} className="sticky-section">
          <div className="images-wrapper">
            {/* Left Half of Image */}
            <div ref={imageLeftRef} className="image-half image-left">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=80" 
                alt="Architecture"
                className="split-image"
              />
            </div>

            {/* Right Half of Image */}
            <div ref={imageRightRef} className="image-half image-right">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=80" 
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
                        <ArrowUpRight color="#000" size={24} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Next Section */}
        <section className="next-section">
          <div className="next-content">
            <h2 className="next-title">Next Section</h2>
            <p className="next-text">
              This section scrolls normally after the services are revealed.
            </p>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Feature One</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="feature-card">
                <h3>Feature Two</h3>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© 2024 DesignVault. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}