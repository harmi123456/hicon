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
                In our journey of innovation and comfort, we proudly introduced our premium venture,
                <strong> Comfura</strong>, under the Hicon umbrella. Comfura specializes in ergonomic and luxurious
                seating solutions that redefine comfort in modern living and workspaces.
              </p>
              <p>
                Our manufacturing unit is located <strong> Gondal Road, Rajkot - 360003</strong>. We take pride in crafting durable and stylish seating solutions for homes,
                offices, and commercial spaces.
              </p>
              <p>
                For any inquiries or business collaborations, feel free to contact our founder and CEO,
                <strong> Mr. Bhavik Patel</strong>. We look forward to working with you and delivering seating solutions
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
                <strong>Hicon Chair Manufacturer</strong> continues to set new benchmarks in the seating industry with its unwavering dedication to craftsmanship and design excellence. Since <strong>2017</strong>, the company has expanded its reach and product offerings across India.
              </p>
              <p>
                Our premium brand <strong>Comfura</strong> is designed to deliver not just comfort but a complete
                lifestyle upgrade. With Comfura, we focus on smart ergonomics, elegant aesthetics, and sustainable
                materials.
              </p>
              <p>
                Comfura, the flagship eCommerce venture by Hicon, brings premium seating solutions directly to customers
                across India.
              </p>
              <p>
                For collaborations, bulk orders, or custom design solutions, get in touch with our founder,
                <strong> Mr. Hitarth Patel</strong>.
              </p>
            </div>
          </div>

        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29544.711153521257!2d70.76439343557352!3d22.236705750036204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbe4bc3fe2af%3A0x2e35756e309f071f!2sComfura%20Chairs!5e0!3m2!1sen!2din!4v1746726553528!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Comfura Map"
          ></iframe>
        </div>

        <div className="comfura-section">
          <div className="comfura-glass-wrapper">
            <div className="comfura-glass-card">
              <h1 className="glass-title">Comfura</h1>
              <p className="glass-subtitle">
                Comfort Meets Aura. <span>That's Comfura</span>
              </p>
              <p className="glass-text">
                Comfura is one of India’s <span className="glow">fastest-growing</span> and
                <span className="glow"> most trusted</span> names in ergonomic seating.
              </p>
              <p className="glass-text">
                We’re here to make long work hours feel lighter—with thoughtfully designed
                <span className="glow"> chairs</span> built to last.
              </p>
              <p className="glass-text">
                Serving over <strong>2 lakh happy customers</strong> and <strong>1 lakh corporate users</strong>.
              </p>
              <p className="glass-text mission">
                Our mission: Bring ease to your body and calm to your space.
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
