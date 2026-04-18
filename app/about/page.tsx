import Link from 'next/link'

const team = [
  { name: 'Aman', role: 'Founder & CEO', desc: 'E-commerce strategist with deep expertise across all major Indian marketplaces.' },
  { name: 'IT Team', role: 'Technology', desc: 'In-house developers building custom tools that give our clients a competitive edge.' },
  { name: 'Account Team', role: 'Platform Specialists', desc: 'Certified experts managing Amazon, Flipkart, Meesho, Myntra and more.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '160px 40px 100px', background: 'radial-gradient(ellipse at 30% 50%, #1a1508 0%, #0A0A0A 60%)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '20px' }}>OUR STORY</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: 300, color: '#FAFAF8', lineHeight: 1.1, marginBottom: '28px' }}>
            Built by Sellers,<br /><em style={{ color: '#C9A84C', fontStyle: 'italic' }}>For Brands</em>
          </h1>
          <p style={{ fontSize: '17px', color: '#666660', lineHeight: 1.9, maxWidth: '600px', margin: '0 auto' }}>
            Aman Media Works was founded in Greater Noida with one mission — help Indian brands sell more on every major e-commerce platform, without the headaches.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '100px 40px', background: '#0D0D0D' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '38px', fontWeight: 300, color: '#FAFAF8', marginBottom: '24px' }}>
              Why we exist
            </h2>
            <p style={{ fontSize: '15px', color: '#666660', lineHeight: 1.9, marginBottom: '20px' }}>
              Most brands struggle on e-commerce not because their products are bad — but because managing multiple platform accounts is a full-time job that requires specialised skills.
            </p>
            <p style={{ fontSize: '15px', color: '#666660', lineHeight: 1.9 }}>
              We handle everything — listings, ads, account health, brand stores, analytics — so brand owners can focus on what they do best: building great products.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '38px', fontWeight: 300, color: '#FAFAF8', marginBottom: '24px' }}>
              Our edge
            </h2>
            <p style={{ fontSize: '15px', color: '#666660', lineHeight: 1.9, marginBottom: '20px' }}>
              Unlike other agencies, we have an in-house IT and software development team. This means we build custom tools — dashboards, automation scripts, reporting systems — that most agencies don't have.
            </p>
            <p style={{ fontSize: '15px', color: '#666660', lineHeight: 1.9 }}>
              Better data. Faster decisions. Better results.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '100px 40px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '16px' }}>THE TEAM</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, color: '#FAFAF8' }}>
              People behind your growth
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'rgba(201,168,76,0.08)' }}>
            {team.map(t => (
              <div key={t.name} style={{ padding: '48px 36px', background: '#0A0A0A' }}>
                <div style={{ width: '56px', height: '56px', border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', color: '#C9A84C' }}>
                  {t.name[0]}
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400, color: '#FAFAF8', marginBottom: '6px' }}>{t.name}</h3>
                <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#C9A84C', marginBottom: '16px' }}>{t.role.toUpperCase()}</div>
                <p style={{ fontSize: '14px', color: '#666660', lineHeight: 1.8 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 40px', textAlign: 'center', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '42px', fontWeight: 300, color: '#FAFAF8', marginBottom: '20px' }}>Let's grow together</h2>
        <Link href="/contact" style={{ display: 'inline-block', padding: '16px 44px', background: '#C9A84C', color: '#0A0A0A', fontSize: '13px', letterSpacing: '0.15em', fontWeight: 700 }}>
          CONTACT US
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
