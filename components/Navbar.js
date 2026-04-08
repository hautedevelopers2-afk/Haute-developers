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
        className={`navbar ${scrolled ? "scrolled" : ""}`}
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
      objectFit: "contain",
      width: "200px",
      height: "80px",
      maxHeight: "none",
      display: "block",
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
            <span
              style={{
                transform: mobileOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
              }}
            />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span
              style={{
                transform: mobileOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "rgba(13,47,36,0.98)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            padding: "2rem",
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "none",
              border: "none",
              color: "white",
              fontSize: "1.8rem",
              cursor: "pointer",
            }}
            aria-label="Close menu"
          >
            ✕
          </button>

          <Image
            src="/assets/web-logo.png"
            alt="Haute Developers"
            width={120}
            height={40}
            style={{ objectFit: "contain", marginBottom: "1rem" }}
          />

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                color: "white",
                fontWeight: 500,
              }}
            >
              {l.label}
            </Link>
          ))}
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
  );
}