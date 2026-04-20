'use client'

import { useState, useEffect, useCallback } from 'react'

const testimonials = [
  {
    name: 'Asian Man',
    subtitle: 'Healed of Obesity',
    image: '/img/test11.jpg',
    text: 'This man was suffering from obesity because he ate what he acquired unjustly. After being prayed for by Mummy Mary Akatsa, he was set free and had to run along the sacred path shouting "iende".',
  },
  {
    name: 'A Baby',
    subtitle: 'Swollen Belly Healed',
    image: '/img/test2.jpg',
    text: 'The late Mary Akatsa praying for a baby allegedly bewitched by stepmother. After prayer and medical attention, the child was fully restored to health.',
  },
  {
    name: 'Mr John Makanga',
    subtitle: 'Fed on a Love Portion',
    image: '/img/test3.jpg',
    text: 'Mr John Makanga came to JCC after being fed a frog (love portion) by his wife. He was prayed for by the late Mary Akatsa and testified of his healing the very next day.',
  },
  {
    name: 'Mr John Makanga',
    subtitle: 'Two Months Later',
    image: '/img/test4.jpg',
    text: 'Celebrating his complete healing along the sacred path at JCC HQ. He testified that he was fully healed just one day after being prayed for.',
  },
  {
    name: 'Healing Session',
    subtitle: 'At JCC Headquarters',
    image: '/img/test5.jpg',
    text: 'The late Prophetess Sinaida Mary Akatsa during one of her greatest healing sessions at JCC HQ — thousands witnessed miracles that day.',
  },
  {
    name: 'Witchcraft Eradication',
    subtitle: 'Western Province',
    image: '/img/test6.jpg',
    text: 'The late Mary Akatsa conducting a witchcraft eradication in Western Province, bringing freedom to many households and communities.',
  },
]

const VISIBLE = 3

export default function TestimonialCarousel() {
  const [start, setStart] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const next = useCallback(() => {
    setStart((s) => (s + 1) % testimonials.length)
    setAnimKey((k) => k + 1)
  }, [])

  const prev = () => {
    setStart((s) => (s - 1 + testimonials.length) % testimonials.length)
    setAnimKey((k) => k + 1)
  }

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const visible = Array.from({ length: VISIBLE }, (_, i) =>
    testimonials[(start + i) % testimonials.length]
  )

  return (
    <div className="testimonial">
      <div className="container">
        <div className="section-header text-center">
          <p>Testimonials</p>
          <h2>Lives Transformed by Faith</h2>
        </div>

        <div className="testi-grid" key={animKey}>
          {visible.map((t, i) => (
            <div key={i} className={`testi-card${i === 1 ? ' testi-card-featured' : ''}`}>
              <div className="testi-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.image} alt={t.name} />
                {i === 1 && <div className="testi-badge"><i className="fas fa-star"></i> Featured</div>}
              </div>
              <div className="testi-body">
                <div className="testi-quote">&ldquo;</div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-footer">
                  <div>
                    <h4 className="testi-name">{t.name}</h4>
                    <span className="testi-subtitle">{t.subtitle}</span>
                  </div>
                  <div className="testi-stars">
                    {[...Array(5)].map((_, s) => (
                      <i key={s} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="testi-controls">
          <button className="testi-arrow" onClick={prev} aria-label="Previous">
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="testi-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testi-dot${i === start ? ' active' : ''}`}
                onClick={() => { setStart(i); setAnimKey(k => k + 1) }}
                aria-label={`Go to ${i + 1}`}
              />
            ))}
          </div>
          <button className="testi-arrow" onClick={next} aria-label="Next">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
