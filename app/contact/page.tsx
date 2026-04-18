'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', platform: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle = {
    width: '100%', padding: '14px 18px', background: '#111111',
    border: '1px solid rgba(201,168,76,0.2)', color: '#FAFAF8',
    fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif',
  }

  return (
    <>
      <section style={{ padding: '160px 40px 80px', textAlign: 'center', background: 'radial-gradient(ellipse at 50% 30%, #1a1508 0%, #0A0A0A 60%)' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '20px' }}>LET'S TALK</div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(42px, 6vw, 68px)', fontWeight: 300, color: '#FAFAF8', lineHeight: 1.1, marginBottom: '20px' }}>
          Get Your Free<br /><em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Account Audit</em>
        </h1>
        <p style={{ fontSize: '16px', color: '#666660', maxWidth: '480px', margin: '0 auto' }}>
          Fill out the form and we'll review your account within 24 hours with a free growth report.
        </p>
      </section>

      <section style={{ padding: '60px 40px 100px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '80px', alignItems: 'start' }}>

          {/* Info */}
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '30px', fontWeight: 300, color: '#FAFAF8', marginBottom: '32px' }}>Contact Info</h2>
            {[
              { label: 'Location', value: 'Greater Noida, Uttar Pradesh, India' },
              { label: 'Email', value: 'hello@amanmediaworks.com' },
              { label: 'Response Time', value: 'Within 24 hours' },
              { label: 'Working Hours', value: 'Mon–Sat, 10am–7pm IST' },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#C9A84C', marginBottom: '6px' }}>{item.label.toUpperCase()}</div>
                <div style={{ fontSize: '15px', color: '#C8C8C0' }}>{item.value}</div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div style={{ padding: '60px 40px', border: '1px solid rgba(201,168,76,0.3)', textAlign: 'center' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>✓</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', color: '#C9A84C', marginBottom: '12px' }}>Message Sent!</h3>
                <p style={{ color: '#666660', fontSize: '14px' }}>We'll get back to you within 24 hours with your free audit report.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#666660', display: 'block', marginBottom: '8px' }}>YOUR NAME</label>
                    <input style={inputStyle} placeholder="Rahul Sharma" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#666660', display: 'block', marginBottom: '8px' }}>PHONE</label>
                    <input style={inputStyle} placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#666660', display: 'block', marginBottom: '8px' }}>EMAIL</label>
                  <input type="email" style={inputStyle} placeholder="rahul@yourbrand.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>
                <div>
                  <label style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#666660', display: 'block', marginBottom: '8px' }}>PLATFORM(S) YOU SELL ON</label>
                  <input style={inputStyle} placeholder="Amazon, Flipkart, Meesho..." value={form.platform} onChange={e => setForm({ ...form, platform: e.target.value })} />
                </div>
                <div>
                  <label style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#666660', display: 'block', marginBottom: '8px' }}>MESSAGE</label>
                  <textarea style={{ ...inputStyle, height: '140px', resize: 'vertical' }} placeholder="Tell us about your brand and current challenges..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" style={{
                  padding: '16px 40px', background: '#C9A84C', color: '#0A0A0A',
                  fontSize: '13px', letterSpacing: '0.2em', fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.3s', marginTop: '8px',
                }}>
                  SEND & GET FREE AUDIT
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        input::placeholder, textarea::placeholder { color: #444; }
        input:focus, textarea:focus { border-color: rgba(201,168,76,0.5) !important; }
        @media (max-width: 768px) {
          section { padding-left: 20px !important; padding-right: 20px !important; }
          div[style*="grid-template-columns: 1fr 1.6fr"] { grid-template-columns: 1fr !important; gap: 40px !important; }
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
