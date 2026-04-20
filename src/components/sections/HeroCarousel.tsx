'use client'

import { useState, useEffect, useCallback } from 'react'
import { CarouselSlide } from '@/types'

const slides: CarouselSlide[] = [
  {
    image: '/img/wel11.jpeg',
    title: 'Welcome to Jerusalem Church of Christ',
    description: 'Where healing, compassion, and transformation meet.',
    videoSrc: 'https://www.youtube.com/embed/SPFgaHAM8CU?si=Z2CUnbQDK8Ihvch_',
  },
  {
    image: '/img/wel4.jpg',
    title: 'Matthew 11:28',
    description: '"Come to me, all you who are weary and burdened, and I will give you rest."',
    videoSrc: 'https://www.youtube.com/embed/DWRcNpR6Kdc',
  },
  {
    image: '/img/wel22.jpeg',
    title: 'Bringing Hope to the Hopeless',
    description: 'Join us in worship and service to glorify God and uplift our community.',
    videoSrc: 'https://www.youtube.com/embed/DWRcNpR6Kdc',
  },
]

interface HeroCarouselProps {
  onVideoOpen: (src: string) => void
}

export default function HeroCarousel({ onVideoOpen }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <div className="hero">
      {/* Full-bleed background image — outside any max-width container */}
      <div className="hero-bg" key={current}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={slide.image} alt={slide.title} />
      </div>

      {/* Gradient overlay */}
      <div className="hero-overlay" />

      {/* Centered text content */}
      <div className="hero-content">
        <div className="hero-text" key={`t-${current}`}>
          <span className="hero-eyebrow">Jerusalem Church of Christ</span>
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          <div className="hero-btns">
            <a
              className="hero-btn hero-btn-outline"
              href="https://maps.app.goo.gl/oYRcvc8LPfcinsgd7"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-map-marker-alt"></i> Our Location
            </a>
            {slide.videoSrc && (
              <button
                className="hero-btn hero-btn-gold"
                onClick={() => onVideoOpen(slide.videoSrc!)}
              >
                <i className="fas fa-play"></i> Watch Video
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${current === i ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button className="hero-arrow hero-arrow-prev" onClick={prev} aria-label="Previous">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="hero-arrow hero-arrow-next" onClick={next} aria-label="Next">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  )
}
