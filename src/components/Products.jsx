import React, { useEffect, useState } from 'react'

const Products = () => {
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

    const section = document.getElementById('products')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const products = [
    {
      icon: '🌾',
      title: 'Wheat Straw Bales',
      features: [
        'Clean, dust-controlled, and sun-dried',
        'Uniform bale size and weight',
        'Suitable for dairy farms, cattle feed mixing',
        'Mushroom farming and biomass use',
        'Small, medium, and large compressed options'
      ]
    },
    {
      icon: '🌿',
      title: 'Rice Straw & Other Crop Residue',
      features: [
        'Custom orders available based on season',
        'Suitable for mulching and composting',
        'Industrial applications',
        'Various sizes and packaging options'
      ]
    }
  ]

  return (
    <section id="products" className="products">
      <style jsx>{`
        .products {
          padding: 100px 0;
          background: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(30px)'};
          transition: all 0.8s ease;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #2d5016;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background: #f8f9fa;
          padding: 3rem 2rem;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(30px)'};
          border: 1px solid #e9ecef;
        }

        .product-card:nth-child(1) {
          transition-delay: 0.2s;
        }

        .product-card:nth-child(2) {
          transition-delay: 0.4s;
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          background: white;
        }

        .product-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
        }

        .product-card h3 {
          font-size: 1.5rem;
          color: #2d5016;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .product-features {
          list-style: none;
          text-align: left;
        }

        .product-features li {
          padding: 0.5rem 0;
          color: #555;
          position: relative;
          padding-left: 1.5rem;
        }

        .product-features li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #4a7c1f;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <div className="section-header fade-in-up">
          <h2>Our Products</h2>
          <p>High-quality agricultural products tailored to meet your specific needs</p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card fade-in-up">
              <div className="product-icon">{product.icon}</div>
              <h3>{product.title}</h3>
              <ul className="product-features">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
