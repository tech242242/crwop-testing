import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-content fade-in-up">
        <h1>Premium Wheat Straw Bales Supplier</h1>
        <p>High-quality, clean, and sun-dried wheat straw bales for farms, industries, and exporters. Delivering consistency, purity, and reliable supply.</p>
        <a href="#contact" className="cta-button">Get In Touch</a>
      </div>
    </section>
  )
}

export default Hero
