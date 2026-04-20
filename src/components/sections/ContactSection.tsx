'use client'

import { useState } from 'react'
import { ref, push } from 'firebase/database'
import { contactDB } from '@/lib/firebase'
import { ContactFormData } from '@/types'

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await push(ref(contactDB, 'contact'), form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact">
      <div className="container">
        <div className="section-header text-center">
          <p>Get In Touch</p>
          <h2>Contact for any query</h2>
        </div>
        <div className="contact-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/contact1.jpg" alt="Contact" />
        </div>
        <div className="contact-form">
          {status === 'success' && (
            <p className="text-success fw-bold mb-3">Your message has been sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-danger mb-3">Something went wrong. Please try again.</p>
          )}
          <form id="contactForm" onSubmit={handleSubmit} noValidate>
            <div className="control-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="control-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="control-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>
            <div className="control-group">
              <textarea
                className="form-control"
                placeholder="Message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <div>
              <button className="btn-custom" style={{width:'100%', justifyContent:'center'}} type="submit">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
