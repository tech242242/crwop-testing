import React, { useEffect, useState } from 'react'

const Industries = () => {
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

    const section = document.getElementById('industries')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const industries = [
    {
      name: 'Dairy & Livestock Farms',
      description: 'High-quality feed and bedding solutions'
    },
    {
      name: 'Poultry Bedding',
      description: 'Clean and absorbent bedding material'
    },
    {
      name: 'Mushroom Cultivation',
      description: 'Perfect substrate for mushroom growth'
    },
    {
      name: 'Biomass & Energy Plants',
      description: 'Sustainable biomass fuel source'
    },
    {
      name: 'Straw Boards & Packaging',
      description: 'Raw material for eco-friendly packaging'
    },
    {
      name: 'Exporters & Traders',
      description: 'Bulk supply for international markets'
    }
  ]

  return (
    <section id="industries" className="industries">
      <style jsx>{`
        .industries {
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

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .industry-card {
          background: #f8f9fa;
          padding: 2.5rem 2rem;
          border-radius: 15px;
          text-align: center;
          transition: all 0.3s ease;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(30px)'};
          border-left: 4px solid #4a7c1f;
        }

        .industry-card:hover {
          transform: translateY(-5px);
          background: linear-gradient(135deg, #4a7c1f 0%, #2d5016 100%);
          color: white;
        }

        .industry-card:hover h3,
        .industry-card:hover p {
          color: white;
        }

        .industry-card h3 {
          font-size: 1.3rem;
          color: #2d5016;
          margin-bottom: 1rem;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .industry-card p {
          color: #666;
          line-height: 1.6;
          transition: color 0.3s ease;
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }

          .industries-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <div className="section-header fade-in-up">
          <h2>Industries We Serve</h2>
          <p>Providing premium wheat straw solutions across multiple sectors</p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="industry-card fade-in-up"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3>{industry.name}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
