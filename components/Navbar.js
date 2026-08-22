'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PROJECTS = [
  { href: '/expressway-residency', label: 'Expressway Residency' },
  { href: '/haute-eden-valley', label: 'Haute Eden Valley' },
  { href: '/haute-world-city', label: 'Haute World City' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)       // desktop dropdown
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false) // mobile accordion
  const closeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/careers', label: 'Careers' },
    { href: '/blogs', label: 'Blogs' },
  ]

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setProjectsOpen(true)
  }

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setProjectsOpen(false), 150)
  }

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
            aria-label="Haute World Developers Home"
            style={{ marginLeft: 0, flexShrink: 0 }}
          >
            <Image
              src="/assets/web-logo.webp"
              alt="Haute World Developers"
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
            {/* Home, About */}
            {links.slice(0, 2).map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}

            {/* ── Projects dropdown ── */}
            <li
              className="nav-projects-item"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              style={{ position: 'relative' }}
            >
              <a
                href="#"
                aria-haspopup="true"
                aria-expanded={projectsOpen}
                onClick={(e) => { e.preventDefault(); setProjectsOpen((o) => !o) }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
              >
                Projects
                <svg
                  width="11" height="11" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ transform: projectsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>

              <div
                className={`nav-projects-dropdown ${projectsOpen ? 'open' : ''}`}
                role="menu"
              >
                {PROJECTS.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    role="menuitem"
                    className="nav-projects-dropdown-item"
                    onClick={() => setProjectsOpen(false)}
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </li>

            {/* Careers, Blogs */}
            {links.slice(2).map((l) => (
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
            justifyContent: 'center', gap: '1.5rem', padding: '2rem',
            overflowY: 'auto',
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

          {links.slice(0, 2).map((l) => (
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

          {/* Mobile Projects accordion */}
          <div className="mobile-projects-accordion">
            <button
              type="button"
              onClick={() => setMobileProjectsOpen((o) => !o)}
              aria-expanded={mobileProjectsOpen}
              className="mobile-projects-trigger"
            >
              Projects
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ transform: mobileProjectsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease' }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div className={`mobile-projects-panel ${mobileProjectsOpen ? 'open' : ''}`}>
              <div className="mobile-projects-panel-inner">
                {PROJECTS.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => { setMobileOpen(false); setMobileProjectsOpen(false) }}
                    className="mobile-projects-link"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {links.slice(2).map((l) => (
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

      <style>{`
        .nav-projects-dropdown {
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%) translateY(-8px);
          min-width: 240px;
          background: #0d2f24;
          border: 1px solid rgba(196,144,26,0.25);
          border-radius: 8px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.35);
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s;
          z-index: 50;
        }
        .nav-projects-dropdown.open {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .navbar .nav-projects-dropdown a.nav-projects-dropdown-item {
          display: block;
          padding: 10px 14px;
          border-radius: 5px;
          color: rgba(255,255,255,0.9) !important;
          font-size: 13.5px;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.15s, color 0.15s;
        }
        .navbar .nav-projects-dropdown a.nav-projects-dropdown-item:hover {
          background: rgba(196,144,26,0.14);
          color: #e8b93a !important;
        }

        .mobile-projects-accordion {
          width: 100%;
          max-width: 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mobile-projects-trigger {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-display);
          font-size: 2rem;
          color: white;
          font-weight: 500;
          padding: 0;
        }
        .mobile-projects-panel {
          width: 100%;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.3s ease, opacity 0.25s ease, margin-top 0.3s ease;
          margin-top: 0;
        }
        .mobile-projects-panel.open {
          max-height: 400px;
          opacity: 1;
          margin-top: 1.1rem;
        }
        .mobile-projects-panel-inner {
          display: flex;
          flex-direction: column;
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(196,144,26,0.25);
          border-radius: 10px;
          padding: 6px;
        }
        .mobile-projects-panel .mobile-projects-link {
          font-family: var(--font-body) !important;
          font-size: 1rem !important;
          color: rgba(255,255,255,0.82) !important;
          font-weight: 500 !important;
          text-decoration: none;
          padding: 12px 16px;
          border-radius: 6px;
          text-align: center;
          transition: background 0.15s, color 0.15s;
        }
        .mobile-projects-panel .mobile-projects-link:active,
        .mobile-projects-panel .mobile-projects-link:hover {
          background: rgba(196,144,26,0.14);
          color: #e8b93a !important;
        }
      `}</style>
    </>
  )
}