'use client'

import { useState } from 'react'
import { DonateFormData } from '@/types'

const PRESETS = ['100', '200', '300', '500']

export default function DonateSection() {
  const [form, setForm] = useState<DonateFormData>({ name: '', email: '', phone: '', amount: '100' })
  const [customAmount, setCustomAmount] = useState('')
  const [success, setSuccess] = useState(false)

  const selectPreset = (amt: string) => {
    setForm({ ...form, amount: amt })
    setCustomAmount('')
  }

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setCustomAmount(val)
    setForm({ ...form, amount: val })
  }

  const TILL_NUMBER = 'XXXXXXX' // ← replace with actual till number

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSuccess(true)
  }

  const handleReset = () => {
    setSuccess(false)
    setForm({ name: '', email: '', phone: '', amount: '100' })
    setCustomAmount('')
  }

  const isPresetActive = (amt: string) => form.amount === amt && !customAmount

  return (
    <div
      className="donate"
      style={{
        backgroundImage: 'url(/img/donate.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="donate-content">
              <div className="section-header">
                <p>Give Now</p>
                <h2>Psalms 37:21 : &ldquo;The wicked borrow and do not repay,</h2>
              </div>
              <div className="donate-text">
                <p>but the righteous give generously&rdquo;.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="donate-form">
              {success ? (
                <div className="donate-instructions">
                  <div className="donate-inst-icon"><i className="fas fa-mobile-alt"></i></div>
                  <h3>Complete Your Donation</h3>
                  <p>Send <strong>Ksh {form.amount}</strong> via M-Pesa to:</p>
                  <div className="donate-till">
                    <span className="donate-till-label">Till Number</span>
                    <span className="donate-till-number">{TILL_NUMBER}</span>
                  </div>
                  <ol className="donate-steps">
                    <li>Go to <strong>M-Pesa</strong> on your phone</li>
                    <li>Select <strong>Lipa na M-Pesa</strong></li>
                    <li>Select <strong>Buy Goods &amp; Services</strong></li>
                    <li>Enter Till No. <strong>{TILL_NUMBER}</strong></li>
                    <li>Enter amount <strong>Ksh {form.amount}</strong></li>
                    <li>Enter your M-Pesa PIN and confirm</li>
                  </ol>
                  <button className="btn-submit" style={{marginTop:'16px'}} onClick={handleReset}>
                    <i className="fas fa-arrow-left"></i> Make Another Donation
                  </button>
                </div>
              ) : (
              <form id="donateForm" onSubmit={handleSubmit}>
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
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                {/* Preset amounts */}
                <div className="donate-amounts">
                  {PRESETS.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      className={`donate-amt-btn${isPresetActive(amt) ? ' active' : ''}`}
                      onClick={() => selectPreset(amt)}
                    >
                      Ksh {amt}
                    </button>
                  ))}
                </div>

                {/* Custom amount */}
                <div className="control-group donate-custom">
                  <span className="donate-currency">Ksh</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter your own amount"
                    min="1"
                    value={customAmount}
                    onChange={handleCustomChange}
                  />
                </div>

                <button className="btn-submit" type="submit">
                  <i className="fas fa-heart"></i> Give Now
                  {form.amount ? ` — Ksh ${form.amount}` : ''}
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
