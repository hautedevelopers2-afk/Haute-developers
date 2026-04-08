import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div>
              <div className="footer-logo-text">HAUTE</div>
              <div className="footer-logo-sub">Developers ·</div>
            </div>
            <p>
              Creating landmark residential developments designed for comfort, quality, and future growth.
              Premium plots, villas & apartments across Delhi NCR and beyond.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">f</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">in</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube">▶</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">Li</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/#projects">Our Projects</Link></li>
              <li><Link href="/#upcoming">Upcoming Launches</Link></li>
              <li><Link href="/#contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div className="footer-col">
            <h5>Our Projects</h5>
            <ul className="footer-links">
              <li><Link href="/#projects">Expressway Residency</Link></li>
              <li><Link href="/#upcoming">Haute City, Dholera</Link></li>
              <li><Link href="/#upcoming">Haute Residency, Vrindavan</Link></li>
              <li><Link href="/#projects">Shiv Shakti Enclave</Link></li>
              <li><Link href="/#projects">Neelkanth Villa</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h5>Contact</h5>
            <ul className="footer-links" style={{ gap: '0.8rem' }}>
              <li style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                Ground Floor, H-214, Sector 63,<br />Noida, Uttar Pradesh 201301
              </li>
              <li>
                <a href="tel:+918383073291" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem' }}>
                  +91 83830 73291
                </a>
              </li>
              <li>
                <a href="mailto:support@hautedevelopers.com" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem' }}>
                  support@hautedevelopers.com
                </a>
              </li>
              <li>
                <a href="https://www.hautedevelopers.com" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem' }}>
                  www.hautedevelopers.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Haute Developers. All rights reserved.</p>
          <p>
            <a href="/privacy-policy">Privacy Policy</a>
            {' · '}
            <a href="/terms">Terms of Use</a>
            {' · '}
            <a href="/rera">RERA Info</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
