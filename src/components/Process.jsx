import React, { useEffect, useState } from 'react'

const Process = () => {
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

    const section = document.getElementById('process')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      step: '01',
      title: 'Harvesting',
      description: 'Carefully harvested from selected crop fields at optimal maturity'
    },
    {
      step: '02',
      title: 'Cleaning & Drying',
      description: 'Thorough cleaning and natural sunlight drying process'
    },
    {
      step: '03',
      title: 'Baling',
      description: 'High-pressure baling for tight, uniform bales'
    },
    {
      step: '04',
      title: 'Quality Inspection',
      description: 'Rigorous quality checks to ensure premium standards'
    },
    {
      step: '05',
      title: 'Delivery',
      description: 'Timely delivery with proper logistics coordination'
    }
  ]

  return (
    <section id="process" className="process">
      <style jsx>{`
        .process {
          padding: 100px 0;
          background: linear-gradient(135deg, #4a7c1f 0%, #2d5016 100%);
          color: white;
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
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .section-header p {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        .process-steps {
          display: flex;
          justify-content: space-between;
          position: relative;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .process-steps::before {
          content: '';
          position: absolute;
          top: 60px;
          left: 10%;
          right: 10%;
          height: 3px;
          background: rgba(255, 255, 255, 0.3);
          z-index: 1;
        }

        .step-card {
          flex: 1;
          min-width: 200px;
          text-align: center;
          position: relative;
          z-index: 2;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(30px)'};
          transition: all 0.8s ease;
        }

        .step-number {
          width: 80px;
          height: 80px;
          background: white;
          color: #2d5016;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0 auto 1.5rem;
          position: relative;
          z-index: 3;
        }

        .step-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .step-card p {
          opacity: 0.9;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }

          .process-steps {
            flex-direction: column;
            align-items: center;
          }

          .process-steps::before {
            display: none;
          }

          .step-card {
            min-width: 100%;
          }
        }
      `}</style>

      <div className="container">
        <div className="section-header fade-in-up">
          <h2>Our Quality Process</h2>
          <p>Ensuring premium quality through every step of our production</p>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="step-card fade-in-up"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="step-number">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
