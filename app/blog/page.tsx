import Link from 'next/link'

const posts = [
  {
    title: 'How to Rank on Amazon India in 2025',
    excerpt: 'A complete guide to Amazon SEO — keywords, listings, reviews and the algorithm changes you need to know this year.',
    category: 'Amazon', date: 'Dec 2024', readTime: '8 min read',
  },
  {
    title: 'Flipkart vs Amazon: Which Platform Should You Prioritise?',
    excerpt: 'A data-driven comparison of fees, traffic, and conversion rates to help you decide where to focus your budget.',
    category: 'Strategy', date: 'Nov 2024', readTime: '6 min read',
  },
  {
    title: 'Meesho for D2C Brands: Is It Worth It?',
    excerpt: 'Meesho\'s zero commission model sounds too good to be true. Here\'s the reality for D2C brands in 2024.',
    category: 'Meesho', date: 'Nov 2024', readTime: '5 min read',
  },
  {
    title: 'How to Fix a Suspended Amazon Seller Account',
    excerpt: 'Step-by-step guide to writing a successful Plan of Action and getting your account reinstated fast.',
    category: 'Account Health', date: 'Oct 2024', readTime: '10 min read',
  },
  {
    title: 'PPC for Beginners: Amazon Sponsored Products Explained',
    excerpt: 'Everything you need to know about Amazon Sponsored Products — from campaign structure to bidding strategy.',
    category: 'Advertising', date: 'Oct 2024', readTime: '7 min read',
  },
  {
    title: 'A+ Content That Actually Converts: A Visual Guide',
    excerpt: 'See real before/after examples of A+ content that increased conversion rates by 20-40% for our clients.',
    category: 'Listings', date: 'Sep 2024', readTime: '6 min read',
  },
]

const categories = ['All', 'Amazon', 'Flipkart', 'Meesho', 'Strategy', 'Advertising', 'Account Health', 'Listings']

export default function BlogPage() {
  return (
    <>
      <section style={{ padding: '160px 40px 80px', textAlign: 'center', background: 'radial-gradient(ellipse at 50% 40%, #1a1508 0%, #0A0A0A 60%)' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '20px' }}>KNOWLEDGE BASE</div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(42px, 6vw, 68px)', fontWeight: 300, color: '#FAFAF8', lineHeight: 1.1, marginBottom: '20px' }}>
          E-Commerce<br /><em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Insights & Guides</em>
        </h1>
        <p style={{ fontSize: '16px', color: '#666660', maxWidth: '460px', margin: '0 auto' }}>
          Platform updates, seller strategies, and growth tips from our team.
        </p>
      </section>

      {/* Categories */}
      <section style={{ padding: '0 40px 40px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {categories.map((c, i) => (
            <div key={c} style={{
              padding: '8px 20px', border: '1px solid',
              borderColor: i === 0 ? '#C9A84C' : 'rgba(201,168,76,0.2)',
              color: i === 0 ? '#C9A84C' : '#666660',
              fontSize: '12px', letterSpacing: '0.1em', cursor: 'pointer',
            }}>
              {c.toUpperCase()}
            </div>
          ))}
        </div>
      </section>

      {/* Posts */}
      <section style={{ padding: '40px 40px 100px', background: '#0A0A0A' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1px', background: 'rgba(201,168,76,0.08)' }}>
          {posts.map(post => (
            <article key={post.title} style={{ padding: '44px 36px', background: '#0A0A0A', cursor: 'pointer', transition: 'background 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#0f0d02')}
              onMouseLeave={e => (e.currentTarget.style.background = '#0A0A0A')}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)', padding: '3px 10px' }}>{post.category.toUpperCase()}</span>
                <span style={{ fontSize: '12px', color: '#444' }}>{post.date}</span>
                <span style={{ fontSize: '12px', color: '#444' }}>· {post.readTime}</span>
              </div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400, color: '#FAFAF8', marginBottom: '14px', lineHeight: 1.3 }}>{post.title}</h3>
              <p style={{ fontSize: '14px', color: '#666660', lineHeight: 1.8, marginBottom: '24px' }}>{post.excerpt}</p>
              <span style={{ fontSize: '12px', color: '#C9A84C', letterSpacing: '0.1em', borderBottom: '1px solid rgba(201,168,76,0.3)', paddingBottom: '2px' }}>READ MORE →</span>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ padding: '80px 40px', textAlign: 'center', borderTop: '1px solid rgba(201,168,76,0.1)', background: '#0D0D0D' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '16px' }}>STAY UPDATED</div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '38px', fontWeight: 300, color: '#FAFAF8', marginBottom: '16px' }}>
          Get platform updates in your inbox
        </h2>
        <p style={{ color: '#666660', fontSize: '15px', marginBottom: '32px' }}>Weekly insights on Amazon, Flipkart, Meesho policy changes and seller tips.</p>
        <div style={{ display: 'flex', gap: '0', maxWidth: '440px', margin: '0 auto' }}>
          <input type="email" placeholder="your@email.com" style={{ flex: 1, padding: '14px 18px', background: '#111', border: '1px solid rgba(201,168,76,0.2)', borderRight: 'none', color: '#FAFAF8', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif' }} />
          <button style={{ padding: '14px 28px', background: '#C9A84C', color: '#0A0A0A', fontSize: '12px', letterSpacing: '0.15em', fontWeight: 700, border: 'none', cursor: 'pointer' }}>SUBSCRIBE</button>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { section { padding-left: 20px !important; padding-right: 20px !important; } }
      `}</style>
    </>
  )
}
