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
   
