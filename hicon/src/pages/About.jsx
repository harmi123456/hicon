import React, { useEffect } from "react";
import SmoothScroll from "../components/Smoothscroll";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SmoothScroll>
      <div className="about-wrapper">

        <div className="about-section">
          <div className="company-details">
            <h2>About Us</h2>
            <p>
              <strong>Hicon Chair Manufacturer</strong>, founded in <strong>2017</strong>, is a reputed name in the
              chair and sofa manufacturing industry. With a strong focus on quality and customer satisfaction, we
              have steadily grown into a trusted brand serving clients across India.
            </p>
            <p>
              Our manufacturing unit is located at <strong>Gondal HighWay,Opposite Premvati, Rajkot - 360004</strong>. We take pride in crafting durable and stylish seating solutions for homes,
              offices, and commercial spaces.
            </p>
            <p>
              For any inquiries or business collaborations, feel free to contact our founder and CEO,
              <strong>Mr. Bhavik Patel</strong>. We look forward to working with you and delivering seating solutions
              that blend style, comfort, and reliability.
            </p>

          </div>

          <div className="owner-image">
            <img src="img/owner.png" alt="Owner - Bhavik Patel" />
            <h3>Bhavik Patel</h3>
            <span>Founder & CEO</span>
          </div>
        </div>

        <br />

        <div className="about-section reverse">
          <div className="owner-image2">
            <img src="img/owner2.jpg" alt="Owner - Hitarth Patel" />
            <h3>Hitarth Patel</h3>
            <p>Founder & CEO</p>
          </div>

          <div className="company-details">

            <p>
              At Hicon, we believe that great design starts with great craftsmanship. Every product we create reflects our commitment to superior materials, precision manufacturing, and customer satisfaction. Our wide range of seating solutions caters to homes, offices, and commercial spaces, ensuring that every environment feels both functional and elegant.
            </p>
            <p>
              With a focus on continuous improvement and modern aesthetics, Hicon continues to set new standards in comfort and design, making us a trusted choice among customers and partners nationwide.
            </p>
            <p>
              For collaborations, bulk orders, or custom design solutions, get in touch with our founder,
              <strong>Mr. Hitarth Patel</strong>. We look forward to crafting seating solutions that inspire comfort and confidence.
            </p>

          </div>
        </div>

      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8237.847979816783!2d70.79093021597099!3d22.242574559614887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca132efcf311%3A0xf1cb91bf6086404b!2sHicon%20Chair%20Manufacturer!5e0!3m2!1sen!2sus!4v1769945531175!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hicon Chair Location"
        />
      </div>

      <div className="comfura-section">
        <div className="comfura-glass-wrapper">
          <div className="comfura-glass-card">
            <h1 className="glass-title">Hicon</h1>
            <p className="glass-subtitle">
              Crafting Comfort. <span>Creating Excellence.</span>
            </p>
            <p className="glass-text">
              <strong>Hicon</strong> is one of India’s <span className="glow">leading</span> and
              <span className="glow"> most trusted</span> manufacturers of premium chairs and sofas.
            </p>
            <p className="glass-text">
              We design and build <span className="glow">ergonomic</span> and <span className="glow">aesthetic</span> seating solutions
              that redefine comfort for offices, and commercial spaces across India.
            </p>
            <p className="glass-text">
              Serving thousands of <strong>happy customers</strong> and <strong>renowned corporate clients</strong> nationwide.
            </p>
            <p className="glass-text mission">
              Our mission: To blend <strong>comfort, style, and durability</strong> in every seat we create.
            </p>
          </div>
        </div>
      </div>

      <div className="video-sections">

        {/* Section 1 */}
        <div className="video-block">
          <video autoPlay muted loop className="bg-video">
            <source src="img/vid10.mp4" type="video/mp4" />
          </video>
          <div className="overlay">
            <h2>2017 - 2019</h2>
            <p>Foundation phase. Research & development.</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="video-block">
          <video autoPlay muted loop className="bg-video">
            <source src="img/vid11.mp4" type="video/mp4" />
          </video>
          <div className="overlay">
            <h2>2020 - 2022</h2>
            <p>Production expansion & global outreach.</p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="video-block">
          <video autoPlay muted loop className="bg-video">
            <source src="img/vid9.mp4" type="video/mp4" />
          </video>
          <div className="overlay">
            <h2>2023 - 2025</h2>
            <p>Innovation & digital chair experience launched.</p>
          </div>
        </div>

      </div>

      <div className="home-video">
        <video src="img/vid3.mp4" autoPlay loop muted playsInline></video>
      </div>

    </SmoothScroll>
  );
}
