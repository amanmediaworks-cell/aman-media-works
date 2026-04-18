'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '14px 40px' : '24px 40px',
        background: scrolled ? 'rgba(10,10,10,0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.4s ease',
      }}>
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 600, color: '#C9A84C', letterSpacing: '0.05em' }}>AMAN MEDIA</span>
          <span style={{ fontSize: '10px', letterSpacing: '0.25em', color: '#666660', fontWeight: 500 }}>WORKS</span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ fontSize: '13px', letterSpacing: '0.12em', color: '#C8C8C0', fontWeight: 400, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
              onMouseLeave={e => (e.currentTarget.style.color = '#C8C8C0')}>
              {l.label.toUpperCase()}
            </Link>
          ))}
          <Link href="/contact" style={{
            padding: '10px 24px', border: '1px solid #C9A84C', color: '#C9A84C',
            fontSize: '12px', letterSpacing: '0.15em', fontWeight: 500,
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#C9A84C'; e.currentTarget.style.color = '#0A0A0A' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C9A84C' }}>
            GET STARTED
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }} className="hamburger">
          <div style={{ width: '24px', height: '2px', background: '#C9A84C', marginBottom: '6px', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <div style={{ width: '24px', height: '2px', background: '#C9A84C', marginBottom: '6px', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
          <div style={{ width: '24px', height: '2px', background: '#C9A84C', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 99,
          background: '#0A0A0A', display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center', gap: '32px',
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', color: '#C8C8C0', letterSpacing: '0.05em' }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          nav { padding: 16px 20px !important; }
        }
      `}</style>
    </>
  )
}
