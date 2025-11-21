import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('contact')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <style jsx>{`
        .contact {
          padding: 100px 0;
          background: #f8f9fa;
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

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .contact-info {
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateX(0)' : 'translateX(-50px)'};
          transition: all 0.8s ease;
        }

        .contact-form {
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateX(0)' : 'translateX(50px)'};
          transition: all 0.8s ease 0.2s;
        }

        .info-item {
          margin-bottom: 2rem;
        }

        .info-item h3 {
          color: #2d5016;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .info-item p {
          color: #666;
          font-size: 1.1rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #333;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #4a7c1f;
        }

        .submit-btn {
          background: linear-gradient(135deg, #4a7c1f 0%, #2d5016 100%);
          color: white;
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(74, 124, 31, 0.3);
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="section-header fade-in-up">
          <h2>Get In Touch</h2>
          <p>Ready to discuss your wheat straw requirements? Contact us today!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info fade-in-left">
            <div className="info-item">
              <h3>📍 Office Address</h3>
              <p>Add your location here</p>
            </div>
            <div className="info-item">
              <h3>📞 Phone Number</h3>
              <p>Add your phone number here</p>
            </div>
            <div className="info-item">
              <h3>📧 Email Address</h3>
              <p>Add your email here</p>
            </div>
            <div className="info-item">
              <h3>🕒 Business Hours</h3>
              <p>Monday - Friday: 8:00 AM - 6:00 PM<br/>
                 Saturday: 9:00 AM - 2:00 PM<br/>
                 Sunday: Closed</p>
            </div>
          </div>

          <form className="contact-form fade-in-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
