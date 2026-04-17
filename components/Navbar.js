'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#upcoming', label: 'Projects' },
    { href: '/#contact', label: 'Contact' },
    { href: '/careers', label: 'Careers' },
  ]

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar-inner">
          <Link
            href="/"
            className="nav-logo"
            aria-label="Haute Developers Home"
            style={{ marginLeft: 0, flexShrink: 0 }}
          >
            <Image
              src="/assets/web-logo.png"
              alt="Haute Developers"
              width={200}
              height={80}
              style={{
                objectFit: 'contain',
                width: '200px',
                height: '80px',
                maxHeight: 'none',
                display: 'block',
              }}
              priority
            />
          </Link>

          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}

            {/* ── Channel Partner Button ── */}
            <li>
              <Link
                href="/channel-partner-registration"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 16px',
                  background: 'transparent',
                  border: '1.5px solid rgba(196,144,26,0.7)',
                  borderRadius: '6px',
                  color: 'var(--gold, #c4901a)',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(196,144,26,0.1)'
                  e.currentTarget.style.borderColor = '#c4901a'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = 'rgba(196,144,26,0.7)'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                Channel Partner
              </Link>
            </li>

            <li>
              <Link href="/#contact" className="nav-cta">
                Get a Callback
              </Link>
            </li>
          </ul>

          <button
            className="nav-mobile-toggle"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 999,
            background: 'rgba(13,47,36,0.98)', backdropFilter: 'blur(20px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: '2rem', padding: '2rem',
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              background: 'none', border: 'none', color: 'white',
              fontSize: '1.8rem', cursor: 'pointer',
            }}
            aria-label="Close menu"
          >
            ✕
          </button>

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem', color: 'white', fontWeight: 500,
              }}
            >
              {l.label}
            </Link>
          ))}

          {/* Mobile Channel Partner Link */}
          <Link
            href="/channel-partner-registration"
            onClick={() => setMobileOpen(false)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 28px',
              border: '1.5px solid rgba(196,144,26,0.7)',
              borderRadius: '8px', color: '#c4901a',
              fontFamily: 'var(--font-display)', fontSize: '1.2rem',
              fontWeight: 600, textDecoration: 'none',
            }}
          >
            Channel Partner
          </Link>

          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary"
          >
            Get a Callback
          </Link>
        </div>
      )}
    </>
  )
}