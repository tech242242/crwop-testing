import React, { useEffect, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      observer.observe(aboutSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about">
      <style jsx>{`
        .about {
          padding: 100px 0;
          background: #f8f9fa;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-text {
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateX(0)' : 'translateX(-50px)'};
          transition: all 0.8s ease;
        }

        .about-text h2 {
          font-size: 2.5rem;
          color: #2d5016;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .about-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          margin-bottom: 1.5rem;
        }

        .about-features {
          list-style: none;
          margin-top: 2rem;
        }

        .about-features li {
          padding: 0.5rem 0;
          font-size: 1.1rem;
          color: #555;
          position: relative;
          padding-left: 2rem;
        }

        .about-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #4a7c1f;
          font-weight: bold;
        }

        .about-image {
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateX(0)' : 'translateX(50px)'};
          transition: all 0.8s ease 0.2s;
          background: linear-gradient(45deg, #4a7c1f, #2d5016);
          height: 400px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-text h2 {
            font-size: 2rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="about-content">
          <div className="about-text fade-in-left">
            <h2>About Prime Crop Straw</h2>
            <p>
              Prime Crop Straw is a trusted supplier of high-quality wheat straw bales for farms, 
              industries, and exporters. We specialize in providing clean, sun-dried, tightly-packed 
              bales sourced from fertile crop fields.
            </p>
            <p>
              Our focus is delivering consistency, purity, and reliable supply to our customers 
              across various industries. With years of experience in agricultural supply chain 
              management, we ensure that every bale meets our stringent quality standards.
            </p>
            <ul className="about-features">
              <li>Clean, dust-controlled, and sun-dried straw</li>
              <li>Uniform bale size and weight</li>
              <li>Reliable bulk supply and long-term contracts</li>
              <li>Competitive pricing and professional service</li>
            </ul>
          </div>
          <div className="about-image fade-in-right">
            Premium Quality Wheat Straw
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
