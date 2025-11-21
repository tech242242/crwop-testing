import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <style jsx>{`
        .footer {
          background: #2d5016;
          color: white;
          padding: 3rem 0 1rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .footer-section p {
          opacity: 0.8;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.5rem;
        }

        .footer-links a {
          color: white;
          text-decoration: none;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .footer-links a:hover {
          opacity: 1;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          text-align: center;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Prime Crop Straw</h3>
            <p>
              Your trusted supplier of high-quality wheat straw bales for farms, 
              industries, and exporters. We deliver consistency, purity, and reliable 
              supply to meet all your agricultural needs.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="footer-links">
              <li>📍 Add your location</li>
              <li>📞 Add your phone</li>
              <li>📧 Add your email</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Prime Crop Straw. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
