import Link from 'next/link'

const platforms = ['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'Ajio', 'JioMart', 'Nykaa', 'Snapdeal']

const services = [
  { title: 'Account Management', desc: 'End-to-end seller account handling across all major Indian e-commerce platforms.', icon: '◈' },
  { title: 'PPC & Advertising', desc: 'Data-driven ad campaigns that maximize ROAS and minimize wasted spend.', icon: '◇' },
  { title: 'Catalog & Listings', desc: 'SEO-optimized product listings with compelling copy and professional images.', icon: '◉' },
  { title: 'Brand Store Setup', desc: 'Beautiful brand storefronts and A+ content that convert browsers to buyers.', icon: '◆' },
  { title: 'Account Health', desc: 'Proactive monitoring and rapid resolution of policy issues and suspensions.', icon: '◎' },
  { title: 'Analytics & Reports', desc: 'Monthly performance reports with actionable insights and growth strategies.', icon: '◐' },
]

const stats = [
  { number: '50+', label: 'Brands Managed' },
  { number: '6+', label: 'Platforms' },
  { number: '3X', label: 'Avg. Revenue Growth' },
  { number: '98%', label: 'Client Retention' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'radial-gradient(ellipse at 60% 50%, #1a1508 0%, #0A0A0A 65%)',
        padding: '120px 40px 80px', position: 'relative', overflow: 'hidden',
        textAlign: 'center',
      }}>
        {/* Decorative lines */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', border: '1px solid rgba(201,168,76,0.06)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', border: '1px solid rgba(201,168,76,0.04)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '860px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', border: '1px solid rgba(201,168,76,0.3)', padding: '6px 20px', marginBottom: '32px', fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C' }}>
            E-COMMERCE GROWTH PARTNER
          </div>

          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(48px, 8vw, 88px)', fontWeight: 300, lineHeight: 1.05, marginBottom: '28px', color: '#FAFAF8' }}>
            Your Brand.<br />
            <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Every Platform.</em><br />
            Maximum Growth.
          </h1>

          <p style={{ fontSize: '17px', color: '#888882', maxWidth: '560px', margin: '0 auto 44px', lineHeight: 1.8, fontWeight: 300 }}>
            Aman Media Works manages your seller accounts across Amazon, Flipkart, Meesho, Myntra, Ajio and more — so you can focus on building your brand.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              padding: '16px 40px', background: '#C9A84C', color: '#0A0A0A',
              fontSize: '13px', letterSpacing: '0.15em', fontWeight: 600, display: 'inline-block',
              transition: 'all 0.3s',
            }}>
              GET FREE AUDIT
            </Link>
            <Link href="/services" style={{
              padding: '16px 40px', border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C',
              fontSize: '13px', letterSpacing: '0.15em', fontWeight: 400, display: 'inline-block',
              transition: 'all 0.3s',
            }}>
              OUR SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Platforms Ticker */}
      <section style={{ borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)', padding: '20px 40px', background: '#111111', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '60px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {platforms.map(p => (
            <span key={p} style={{ fontSize: '12px', letterSpacing: '0.2em', color: '#444', fontWeight: 500 }}>{p.toUpperCase()}</span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 40px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2px' }}>
          {stats.map(s => (
            <div key={s.label} style={{ padding: '44px 32px', background: '#111111', textAlign: 'center', border: '1px solid rgba(201,168,76,0.08)' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '52px', fontWeight: 300, color: '#C9A84C', lineHeight: 1 }}>{s.number}</div>
              <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#666660', marginTop: '12px', fontWeight: 500 }}>{s.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '100px 40px', background: '#0D0D0D' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '16px' }}>WHAT WE DO</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 300, color: '#FAFAF8' }}>
              Full-Service Platform Management
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'rgba(201,168,76,0.08)' }}>
            {services.map(s => (
              <div key={s.title} style={{ padding: '44px 36px', background: '#0D0D0D', transition: 'background 0.3s', cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#131208')}
                onMouseLeave={e => (e.currentTarget.style.background = '#0D0D0D')}>
                <div style={{ fontSize: '24px', color: '#C9A84C', marginBottom: '20px' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400, color: '#FAFAF8', marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: '#666660', lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/services" style={{ fontSize: '13px', letterSpacing: '0.15em', color: '#C9A84C', borderBottom: '1px solid rgba(201,168,76,0.3)', paddingBottom: '4px' }}>
              VIEW ALL SERVICES →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ padding: '100px 40px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '20px' }}>WHY AMAN MEDIA WORKS</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, color: '#FAFAF8', marginBottom: '28px', lineHeight: 1.2 }}>
              We're not just managers.<br />We're growth partners.
            </h2>
            <p style={{ fontSize: '15px', color: '#666660', lineHeight: 1.9, marginBottom: '24px' }}>
              Based in Greater Noida, our team combines deep platform expertise with in-house technology to deliver results that generic agencies simply can't match.
            </p>
            <p style={{ fontSize: '15px', color: '#666660', lineHeight: 1.9 }}>
              We built our own tools — unified dashboards, automated reporting, PPC scripts — so your account gets data-driven decisions, not guesswork.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            {[
              'In-house IT team & custom tools',
              'Platform-certified specialists',
              'Transparent monthly reporting',
              'Dedicated account manager',
              'No long-term lock-in contracts',
              'NCR-based, IST timezone support',
            ].map((item, i) => (
              <div key={i} style={{ padding: '18px 24px', background: '#111111', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid rgba(201,168,76,0.06)' }}>
                <div style={{ width: '6px', height: '6px', background: '#C9A84C', flexShrink: 0 }} />
                <span style={{ fontSize: '14px', color: '#C8C8C0' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '100px 40px', textAlign: 'center',
        background: 'linear-gradient(135deg, #0f0c02 0%, #0A0A0A 50%, #0f0c02 100%)',
        borderTop: '1px solid rgba(201,168,76,0.1)',
      }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '20px' }}>GET STARTED TODAY</div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 300, color: '#FAFAF8', marginBottom: '20px' }}>
          Ready to grow your brand?
        </h2>
        <p style={{ fontSize: '16px', color: '#666660', marginBottom: '44px', maxWidth: '480px', margin: '0 auto 44px' }}>
          Get a free account audit and see exactly where your revenue is being left on the table.
        </p>
        <Link href="/contact" style={{
          padding: '18px 52px', background: '#C9A84C', color: '#0A0A0A',
          fontSize: '13px', letterSpacing: '0.2em', fontWeight: 700, display: 'inline-block',
        }}>
          CLAIM FREE AUDIT
        </Link>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section { padding-left: 20px !important; padding-right: 20px !important; }
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  )
}
