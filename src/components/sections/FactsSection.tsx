'use client'

import { useEffect, useRef, useState } from 'react'

const facts = [
  { icon: 'fas fa-map-marker-alt', value: 35,     suffix: '+', label: 'Counties Reached',   color: '#FDBE33' },
  { icon: 'fas fa-users',          value: 10000,  suffix: '+', label: 'Disciples',           color: '#1a6fbc' },
  { icon: 'fas fa-hand-holding-heart', value: 100000, suffix: '+', label: 'Lives Touched',   color: '#FDBE33' },
  { icon: 'fas fa-church',         value: 5,      suffix: '+', label: 'Church Branches',     color: '#1a6fbc' },
]

function useCountUp(target: number, duration = 2000, triggered: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!triggered) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, triggered])
  return count
}

function FactItem({ fact }: { fact: typeof facts[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)
  const count = useCountUp(fact.value, 2000, triggered)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="col-lg-3 col-sm-6" ref={ref}>
      <div className="facts-item">
        <div className="facts-icon" style={{ background: `${fact.color}18`, borderColor: `${fact.color}30` }}>
          <i className={fact.icon} style={{ color: fact.color }}></i>
        </div>
        <div className="facts-text">
          <h3>
            {count.toLocaleString()}
            <span className="facts-suffix" style={{ color: fact.color }}>{fact.suffix}</span>
          </h3>
          <p>{fact.label}</p>
        </div>
      </div>
    </div>
  )
}

export default function FactsSection() {
  return (
    <div
      className="facts"
      style={{
        backgroundImage: 'url(/img/bl2.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <div className="row g-4 justify-content-center">
          {facts.map((f) => <FactItem key={f.label} fact={f} />)}
        </div>
      </div>
    </div>
  )
}
