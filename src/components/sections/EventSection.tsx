'use client'

import { useState } from 'react'
import { ChurchEvent } from '@/types'

const events: ChurchEvent[] = [
  {
    title: 'Sunday Church Service',
    description: 'Rejoicing, preaching, interacting, praising, and praying.',
    time: '9:00 AM - 1:00 PM',
    location: 'Kawangware 56',
    dayOfWeek: 0,
    image: '/img/evv1.jpeg',
    link: 'https://meet.google.com/hty-deqr-peg',
    hasBibleSearch: false,
  },
  {
    title: 'Tuesday Bible Study',
    description: 'Bible study.',
    time: '9:00 PM - 10:00 PM',
    location: 'Virtual Meeting',
    dayOfWeek: 2,
    image: '/img/ev2.jpg',
    link: 'https://meet.google.com/hty-deqr-peg',
    hasBibleSearch: true,
  },
]

function getNextDayOfWeek(dayOfWeek: number): Date {
  const today = new Date()
  const daysToAdd = (dayOfWeek - today.getDay() + 7) % 7
  const next = new Date(today)
  next.setDate(today.getDate() + daysToAdd)
  return next
}

function BibleSearch() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState('')

  const search = async () => {
    if (!query.trim()) { setResult('Please enter a valid verse.'); return }
    try {
      const res = await fetch(`https://bible-api.com/${encodeURIComponent(query)}`)
      const data = await res.json()
      setResult(data.text ? `${data.text} — ${data.reference}` : 'Verse not found.')
    } catch {
      setResult('An error occurred. Please try again.')
    }
  }

  return (
    <div className="bible-search">
      <input
        type="text"
        placeholder="Enter verse (e.g., John 3:16)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && search()}
      />
      <button onClick={search}>Search</button>
      {result && <p>{result}</p>}
    </div>
  )
}

export default function EventSection() {
  return (
    <div className="event">
      <div className="container">
        <div className="section-header text-center">
          <p>Upcoming Events</p>
          <h2>Be ready for our upcoming church events</h2>
        </div>
        <div className="row g-4 align-items-stretch">
          {events.map((ev) => {
            const date = getNextDayOfWeek(ev.dayOfWeek)
            const formatted = date.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })
            return (
              <div key={ev.title} className="col-lg-6 d-flex">
                <div className="event-item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ev.image} alt={ev.title} />
                  <div className="event-content">
                    <div className="event-meta">
                      <p><i className="fa fa-calendar-alt"></i> {formatted}</p>
                      <p><i className="far fa-clock"></i> {ev.time}</p>
                      <p><i className="fa fa-map-marker-alt"></i> {ev.location}</p>
                    </div>
                    <div className="event-text">
                      <h3>{ev.title}</h3>
                      <p>{ev.description}</p>
                      {ev.hasBibleSearch && <BibleSearch />}
                      {ev.link && (
                        <a className="btn-custom" href={ev.link} target="_blank" rel="noreferrer">
                          <i className="fas fa-external-link-alt"></i> Join Now
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
