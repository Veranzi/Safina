'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: 'user', content: text }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated }),
      })
      const data = await res.json()
      setMessages([...updated, { role: 'assistant', content: data.reply || data.error || 'Sorry, I could not respond.' }])
    } catch {
      setMessages([...updated, { role: 'assistant', content: 'Connection error. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999, fontFamily: 'Inter, sans-serif' }}>
      {open && (
        <div style={{
          width: '340px',
          height: '480px',
          background: '#fff',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          marginBottom: '12px',
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #6a0000 0%, #a30000 100%)',
            color: '#fff',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <img src="/img/logo.png" alt="JCC" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', background: '#fff' }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px' }}>JCC SAFINA Assistant</div>
              <div style={{ fontSize: '11px', opacity: 0.8 }}>Ask me anything about our church</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#fff', fontSize: '18px', cursor: 'pointer', lineHeight: 1 }}
              aria-label="Close chat"
            >×</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {messages.length === 0 && (
              <div style={{ textAlign: 'center', color: '#888', fontSize: '13px', marginTop: '40px' }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>✝️</div>
                <div>Hello! I&apos;m here to answer your questions about Jerusalem Church of Christ.</div>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              }}>
                <div style={{
                  maxWidth: '80%',
                  padding: '8px 12px',
                  borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                  background: msg.role === 'user' ? '#a30000' : '#f0f0f0',
                  color: msg.role === 'user' ? '#fff' : '#222',
                  fontSize: '13px',
                  lineHeight: 1.5,
                  whiteSpace: 'pre-wrap',
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ background: '#f0f0f0', borderRadius: '14px 14px 14px 4px', padding: '8px 14px', fontSize: '18px', letterSpacing: '2px' }}>
                  <span style={{ animation: 'pulse 1s infinite' }}>...</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} style={{ padding: '10px', borderTop: '1px solid #eee', display: 'flex', gap: '8px' }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={loading}
              style={{
                flex: 1,
                border: '1px solid #ddd',
                borderRadius: '20px',
                padding: '8px 14px',
                fontSize: '13px',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              style={{
                background: '#a30000',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: loading || !input.trim() ? 'default' : 'pointer',
                opacity: loading || !input.trim() ? 0.5 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
              aria-label="Send"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6a0000 0%, #a30000 100%)',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(163,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
          transition: 'transform 0.2s',
        }}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? '×' : '✝'}
      </button>
    </div>
  )
}
