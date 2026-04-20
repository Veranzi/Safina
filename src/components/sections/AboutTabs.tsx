'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface AboutTabsProps {
  subtitle: string
  heading: string
  image: string
  tabs: Tab[]
  learnMoreLink?: string
}

export default function AboutTabs({ subtitle, heading, image, tabs, learnMoreLink }: AboutTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id)

  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="about-img"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'scroll',
              }}
            />
          </div>
          <div className="col-lg-6">
            <div className="section-header">
              <p>{subtitle}</p>
              <h2>{heading}</h2>
            </div>
            <div className="about-tab">
              <ul className="nav nav-pills nav-justified">
                {tabs.map((tab) => (
                  <li key={tab.id} className="nav-item">
                    <button
                      className={`nav-link${activeTab === tab.id ? ' active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                      style={{ background: 'none', border: 'none', width: '100%' }}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    id={tab.id}
                    className={`container tab-pane${activeTab === tab.id ? ' active' : ' fade'}`}
                    style={{ display: activeTab === tab.id ? 'block' : 'none' }}
                  >
                    {tab.content}
                    {learnMoreLink && activeTab === tab.id && tab.id === tabs[0].id && (
                      <div className="history-buttons mt-4">
                        <a href={learnMoreLink} target="_blank" rel="noreferrer" className="btn-custom">
                          <i className="fas fa-arrow-right"></i> Learn More
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
