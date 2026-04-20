'use client'

import { useState } from 'react'
import { Ministry } from '@/types'

const ministries: Ministry[] = [
  {
    image: '/img/min1.jpg',
    percentage: 85,
    present: '1,000',
    goal: '5,000',
    title: 'Children Ministry',
    description: 'Proverbs 22:6 : "Train up a child in the way he should go and when he is old he will not depart from it".',
  },
  {
    image: '/img/min3.jpg',
    percentage: 91,
    present: '10,000',
    goal: '60,000',
    title: 'Youth Ministry',
    description: 'Ecclesiastes 11:9 : "Rejoice, O young man, in your youth, and let your heart cheer you in the days of your youth.".',
  },
  {
    image: '/img/min2.jpg',
    percentage: 75,
    present: '100,000',
    goal: '50,000',
    title: 'Adult Ministry',
    description: 'Psalms 96: 7-9 : "Praise the Lord, all people of every nation praise the LORD\'s glory and power.".',
  },
]

export default function CausesCarousel() {
  const [current, setCurrent] = useState(0)
  const visible = ministries.slice(current, current + 3)

  return (
    <div className="causes">
      <div className="container">
        <div className="section-header text-center">
          <p>Ministries</p>
          <h2>Children, youth, adult Ministries</h2>
        </div>
        <div className="row">
          {visible.map((m) => (
            <div key={m.title} className="col-lg-4 col-md-6">
              <div className="causes-item">
                <div className="causes-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.image} alt={m.title} />
                </div>
                <div className="causes-progress">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${m.percentage}%` }}
                      aria-valuenow={m.percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span>{m.percentage}%</span>
                    </div>
                  </div>
                  <div className="progress-text">
                    <p><strong>Present:</strong> {m.present}</p>
                    <p><strong>Goal:</strong> {m.goal}</p>
                  </div>
                </div>
                <div className="causes-text">
                  <h3>{m.title}</h3>
                  <p>{m.description}</p>
                </div>
                <div className="causes-btn">
                  <a className="btn-custom" href="#">Learn More</a>
                  <a className="btn-custom btn-gold" href="#">Support</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
