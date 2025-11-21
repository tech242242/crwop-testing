import React, { useEffect, useState } from 'react'

const WhyChoose = () => {
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

    const section = document.getElementById('why-choose')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      title: 'Premium Quality Straw',
      description: 'Carefully harvested and processed to ensure the highest standards'
    },
    {
      title: 'Reliable Supply',
      description: 'Bulk orders and long-term contracts available with consistent delivery'
    },
    {
      title: 'Competitive Prices',
      description: 'Best value for money without compromising on quality'
    },
    {
      title: 'Clean & Well-Packed',
      description: 'Easy transport and storage with proper packaging'
    },
    {
      title: 'Customer-Focused Service',
      description: 'Fast delivery and professional coordination for all orders'
    },
    {
      title: 'Expert Support',
      description: 'Technical guidance and support for optimal product usage'
    }
  ]

  return (
    <section id="why-choose" className="why-choose">
      <style jsx>{`
        .why-choose {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
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

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 15px;
          text-align: center;
          transition: all 0.3s ease;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(30px)'};
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .feature-card h3 {
          font-size: 1.3rem;
          color: #2d5016;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .feature-card p {
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <div className="section-header fade-in-up">
          <h2>Why Choose Prime Crop Straw?</h2>
          <p>Experience the difference with our premium service and quality products</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card fade-in-up"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
