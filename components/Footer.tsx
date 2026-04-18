import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: '#0A0A0A',
      borderTop: '1px solid rgba(201,168,76,0.15)',
      padding: '60px 40px 30px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '50px' }}>
          
          <div>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: 600, color: '#C9A84C' }}>AMAN MEDIA</div>
              <div style={{ fontSize: '10px', letterSpacing: '0.25em', color: '#666660' }}>WORKS</div>
            </div>
            <p style={{ fontSize: '13px', color: '#666660', lineHeight: 1.8, maxWidth: '220px' }}>
              Your brand. Every platform. Maximum growth.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#C9A84C', marginBottom: '20px', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}>SERVICES</h4>
            {['Account Management', 'PPC & Advertising', 'Catalog Listing', 'Brand Store Setup', 'Account Health', 'SEO Optimization'].map(s => (
              <Link key={s} href="/services" style={{ display: 'block', fontSize: '13px', color: '#666660', marginBottom: '10px', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.color = '#666660')}>
                {s}
              </Link>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#C9A84C', marginBottom: '20px', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}>PLATFORMS</h4>
            {['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'Ajio', 'JioMart & More'].map(p => (
              <div key={p} style={{ fontSize: '13px', color: '#666660', marginBottom: '10px' }}>{p}</div>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#C9A84C', marginBottom: '20px', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}>CONTACT</h4>
            <div style={{ fontSize: '13px', color: '#666660', marginBottom: '10px' }}>Greater Noida, NCR</div>
            <div style={{ fontSize: '13px', color: '#666660', marginBottom: '10px' }}>Uttar Pradesh, India</div>
            <Link href="mailto:hello@amanmediaworks.com" style={{ fontSize: '13px', color: '#C9A84C', display: 'block', marginTop: '16px' }}>
              hello@amanmediaworks.com
            </Link>
            <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
              {['LinkedIn', 'Instagram', 'YouTube'].map(s => (
                <span key={s} style={{ fontSize: '12px', color: '#444', cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = '#C9A84C')}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = '#444')}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '12px', color: '#444' }}>© 2025 Aman Media Works. All rights reserved.</span>
          <span style={{ fontSize: '12px', color: '#444' }}>Greater Noida, India</span>
        </div>
      </div>
    </footer>
  )
}
