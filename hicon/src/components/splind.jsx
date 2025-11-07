import React, { useEffect, useRef, useState } from 'react';

const ImageSplitServices = () => {
  const [splitProgress, setSplitProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);
        setSplitProgress(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Modish.Ai™ (iOS App) | AI-Powered Space Redesigns.",
      description: "Upload any real space or architectural rendering. Our proprietary engine delivers 192 cinematic redesigns in under 39 minutes—each one fully original, architecturally preserved, and styled across 22 globally recognized formats. No templates. No design tools. No manual work."
    },
    {
      title: "DesignVault 3D™ | License Ultra-Luxury Cinematic Spaces",
      description: "Launching February 2026. Gain instant access to over 25,000 immersive environments—from airport lounges, spas, and yacht clubs to luxury residences, rooftop lounges, and hospitality suites. Use as-is, or run through Modish.Ai™ to generate hundreds of original variations."
    },
    {
      title: "Event Design AI™ | Restage Venues in Cinematic 3D Before They Happen",
      description: "Transform any venue or floorplan into a pre-visualized cinematic experience. Choose from over a dozen event categories including weddings, conferences, 70s-themed parties, and corporate galas. Reimagine your venue layout before your guests ever arrive."
    },
    {
      title: "Brand Design AI™ | Create Cinematic 3D Magazines from Your Spaces",
      description: "Reintroduce your brand through cinematic infrastructure. From executive headshots and investor decks to brochures, books, and cinematic 3D magazines, Brand Design AI™ transforms identity into hyper-realistic, cinematic assets built to compete at the highest level."
    },
    {
      title: "Echo™ | Grow Your Audience with Cinematic Reach",
      description: "Designed for brands, creators, and firms ready to expand their visibility. Echo™ delivers real-time engagement—including likes, views, and followers—across platforms like Instagram, YouTube, and TikTok. Get to 100,000 followers instantly with AI precision."
    },
    {
      title: "DBM Elite™",
      description: "Where Cinematic Design Meets Full-Scope Execution. DBM Elite™ is our most exclusive offering—reserved for those who not only license our technology, but want every detail brought to life with concierge precision. From transforming your real space into a stunning 3D cinematic magazine, to managing your brand's social reach through Echo™."
    }
  ];

  return (
    <>
      <style>{`
    

        .image-split-wrapper {
          background-color: #000;
          color: #fff;
          position: relative;
        }

        .spacer-bottom {
          height: 100vh;
        }

        .image-split-section {
          position: relative;
          min-height: 100vh;
        }

        /* ===== Fixed Image Container ===== */
        .image-fixed-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
        }

        .split-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: clip-path 0.1s ease-out;
        }

        /* ===== Services Content ===== */
        .services-scroll-container {
          position: relative;
          z-index: 10;
          min-height: 200vh;
        }

        .services-sticky-wrap {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 4rem;
        }

        .services-content {
          margin: 0 auto;
          width: 60%;
          border: 1px solid white;
          max-width: 60%;
          padding: 2rem;
          background-color: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(12px);
          border-radius: 1rem;
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
          pointer-events: auto;
        }

        .service-inner{
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        @media (min-width: 768px) {
          .services-content {
            padding: 4rem;
          }
        }

        .services-inner {
          max-width: 48rem;
        }

        /* ===== Services Header ===== */
        .services-subtitle {
          margin-bottom: 1rem;
          font-size: 0.875rem;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .services-heading {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .services-heading {
            font-size: 3rem;
          }
        }

        /* ===== Services List ===== */
        .services-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .service-item {
          border-bottom: 1px solid #1f2937;
          padding-bottom: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .service-item:hover {
          border-bottom-color: #4b5563;
        }

        .service-content-wrap {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .service-text {
          flex: 1;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          transition: color 0.3s ease;
        }

        .service-item:hover .service-title {
          color: #d1d5db;
        }

        .service-description {
          color: #9ca3af;
          font-size: 0.875rem;
          line-height: 1.6;
        }

        .service-arrow {
          font-size: 1.5rem;
          color: #4b5563;
          transition: all 0.3s ease;
        }

        .service-item:hover .service-arrow {
          color: #fff;
          transform: translateX(0.25rem);
        }

        /* ===== Services Button ===== */
        .services-btn {
          margin-top: 3rem;
          padding: 1rem 2rem;
          background: linear-gradient(to right, #9333ea, #ec4899);
          border: none;
          border-radius: 9999px;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .services-btn:hover {
          box-shadow: 0 10px 25px rgba(147, 51, 234, 0.5);
          transform: scale(1.05);
        }

        /* Extra Divs for Testing */
        .extradiv1 {
          height: 800px;
          border: 1px solid red;
          background-color: #111;
        }

        .extradiv2 {
          height: 800px;
          border: 1px solid blue;
          background-color: #222;
          position: relative;
          z-index: 20;
        }
      `}</style>

      <div className='extradiv1'></div>

      <div className="image-split-wrapper">
        <div ref={sectionRef} className="image-split-section">
          {/* Image Container - Left Half */}
          <div className="image-fixed-container">
            <div 
              className="split-image"
              style={{
                backgroundImage: 'url(https://modish.ai/wp-content/uploads/2025/06/WhatsApp-Image-2024-06-02-at-22.46.21.jpeg)',
                clipPath: `inset(0 ${50 + splitProgress * 30}% 0 0)`
              }}
            ></div>
            
            {/* Image Container - Right Half */}
            <div 
              className="split-image"
              style={{
                backgroundImage: 'url(https://modish.ai/wp-content/uploads/2025/06/WhatsApp-Image-2024-06-02-at-22.46.21.jpeg)',
                clipPath: `inset(0 0 0 ${50 + splitProgress * 30}%)`
              }}
            ></div>
          </div>

          {/* Services Content */}
          <div className="services-scroll-container">
            <div className="services-sticky-wrap">
              <div 
                className="services-content"
                style={{
                  opacity: splitProgress,
                  transform: `translateY(${(1 - splitProgress) * 50}px) scale(${0.9 + splitProgress * 0.1})`
                }}
              >
                <div className="services-inner">
                  <div className="services-subtitle">Our Services</div>
                  <h3 className="services-heading">Services</h3>

                  <div className="services-list">
                    {services.map((service, index) => (
                      <div 
                        key={index}
                        className="service-item"
                        style={{
                          opacity: Math.min(Math.max((splitProgress - 0.2 - index * 0.1) * 3, 0), 1),
                          transform: `translateY(${Math.max(20 - (splitProgress - index * 0.1) * 100, 0)}px)`
                        }}
                      >
                        <div className="service-content-wrap">
                          <div className="service-text">
                            <h4 className="service-title">{service.title}</h4>
                            <p className="service-description">{service.description}</p>
                          </div>
                          <div className="service-arrow">→</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    className="services-btn"
                    style={{
                      opacity: Math.min(Math.max((splitProgress - 0.5) * 2, 0), 1)
                    }}
                  >
                    More Services →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="spacer-bottom"></div>
      </div>

      <div className='extradiv2'></div>
    </>
  );
};

export default ImageSplitServices;