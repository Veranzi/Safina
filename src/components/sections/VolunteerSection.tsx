'use client'

import { useState } from 'react'
import { ref, push } from 'firebase/database'
import { volunteerDB } from '@/lib/firebase'
import { VolunteerFormData } from '@/types'

export default function VolunteerSection() {
  const [form, setForm] = useState<VolunteerFormData>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await push(ref(volunteerDB, 'volunteer'), form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="volunteer"
      style={{
        backgroundImage: 'url(/img/wel22.jpeg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="volunteer-form">
              {status === 'success' && (
                <p className="text-success fw-bold mb-3">Thank you for your interest in volunteering!</p>
              )}
              {status === 'error' && (
                <p className="text-danger mb-3">Something went wrong. Please try again.</p>
              )}
              <form id="volunteerForm" onSubmit={handleSubmit}>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control"
                    placeholder="Why you want to become a volunteer?"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <div>
                  <button className="btn-custom" type="submit">Become a Volunteer</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="volunteer-content">
              <div className="section-header text-center">
                <p>Become A Volunteer</p>
                <h2>Always be eager to practice hospitality.</h2>
              </div>
              <div className="volunteer-text">
                <p>Romans 12:13 : &ldquo;When God&apos;s people are in need, be ready to help them&rdquo;.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
