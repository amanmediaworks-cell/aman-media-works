import Link from 'next/link'

const services = [
  {
    icon: '◈', title: 'Seller Account Management',
    desc: 'Complete end-to-end management of your seller accounts across Amazon, Flipkart, Meesho, Myntra, Ajio and more.',
    points: ['Account setup & verification', 'Dashboard monitoring', 'Policy compliance', 'Suspension appeals', 'Performance optimization'],
  },
  {
    icon: '◇', title: 'PPC & Advertising',
    desc: 'Data-driven paid campaigns that deliver maximum return on every rupee you spend on platform advertising.',
    points: ['Sponsored Products & Brands', 'Keyword research & bidding', 'Campaign restructuring', 'ACoS/ROAS optimization', 'Weekly performance reports'],
  },
  {
    icon: '◉', title: 'Catalog & Listing Optimization',
    desc: 'SEO-optimized product listings that rank higher and convert better than your competition.',
    points: ['Keyword-rich titles & bullets', 'Backend search terms', 'A+ Content / EBC pages', 'Bulk catalog uploads', 'Variation creation'],
  },
  {
    icon: '◆', title: 'Brand Store Setup',
    desc: 'Beautiful brand storefronts that tell your story and drive repeat buyers.',
    points: ['Amazon Brand Registry', 'Storefront design', 'A+ content creation', 'Brand analytics setup', 'Content updates'],
  },
  {
    icon: '◎', title: 'Account Health Management',
    desc: 'Proactive monitoring and rapid resolution before small issues become big problems.',
    points: ['ODR monitoring', 'Policy violation fixes', 'Negative review management', 'Suspension prevention', 'Escalation handling'],
  },
  {
    icon: '◐', title: 'Analytics & Reporting',
    desc: 'Clear monthly reports with actionable insights — not just numbers, but what they mean and what to do next.',
    points: ['Sales performance analysis', 'Keyword rank tracking', 'Competitor benchmarking', 'Inventory forecasting', 'Growth recommendations'],
  },
]

const platforms = [
  { name: 'Amazon', color: '#FF9900' },
  { name: 'Flipkart', color: '#2874F0' },
  { name: 'Meesho', color: '#F43397' },
  { name: 'Myntra', color: '#FF3F6C' },
  { name: 'Ajio', color: '#E4007C' },
  { name: 'JioMart', color: '#0071CE' },
  { name: 'Nykaa', color: '#FC2779' },
  { name: 'Snapdeal', color: '#E40046' },
]

export default function ServicesPage() {
  return (
    <>
      <section style={{ padding: '160px 40px 100px', textAlign: 'center', background: 'radial-gradient(ellipse at 70% 50%, #1a1508 0%, #0A0A0A 60%)' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '20px' }}>WHAT WE OFFER</div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(42px, 6vw, 72px)', fontWeight: 300, color: '#FAFAF8', lineHeight: 1.1, marginBottom: '24px' }}>
          Every service your brand<br /><em style={{ color: '#C9A84C', fontStyle: 'italic' }}>needs to win</em>
        </h1>
        <p style={{ fontSize: '17px', color: '#666660', maxWidth: '520px', margin: '0 auto' }}>
          From account setup to scaling — we handle everything so you don't have to.
        </p>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 40px', background: '#0D0D0D' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1px', background: 'rgba(201,168,76,0.08)' }}>
          {services.map(s => (
            <div key={s.title} style={{ padding: '48px 36px', background: '#0D0D0D' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#131208')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0D0D0D')}>
              <div style={{ fontSize: '28px', color: '#C9A84C', marginBottom: '20px' }}>{s.icon}</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: 400, color: '#FAFAF8', marginBottom: '14px' }}>{s.title}</h3>
              <p style={{ fontSize: '14px', color: '#666660', lineHeight: 1.8, marginBottom: '24px' }}>{s.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {s.points.map(p => (
                  <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '4px', height: '4px', background: '#C9A84C', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: '#888882' }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section style={{ padding: '80px 40px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '16px' }}>PLATFORMS WE MANAGE</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '38px', fontWeight: 300, color: '#FAFAF8', marginBottom: '48px' }}>One agency. Every platform.</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {platforms.map(p => (
              <div key={p.name} style={{ padding: '12px 28px', border: '1px solid rgba(201,168,76,0.15)', fontSize: '14px', color: '#C8C8C0', letterSpacing: '0.08em' }}>
                {p.name}
              </div>
            ))}
            <div style={{ padding: '12px 28px', border: '1px solid rgba(201,168,76,0.15)', fontSize: '14px', color: '#C9A84C', letterSpacing: '0.08em' }}>+ More</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 40px', textAlign: 'center', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '42px', fontWeight: 300, color: '#FAFAF8', marginBottom: '20px' }}>
          Ready to get started?
        </h2>
        <p style={{ fontSize: '15px', color: '#666660', marginBottom: '36px' }}>Get a free account audit — no commitment needed.</p>
        <Link href="/contact" style={{ display: 'inline-block', padding: '16px 44px', background: '#C9A84C', color: '#0A0A0A', fontSize: '13px', letterSpacing: '0.15em', fontWeight: 700 }}>
          GET FREE AUDIT
        </Link>
      </section>

      <style>{`
        @media (max-width: 768px) { section { padding-left: 20px !important; padding-right: 20px !important; } }
      `}</style>
    </>
  )
}
