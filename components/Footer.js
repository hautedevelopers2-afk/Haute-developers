'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand" style={{ marginTop: "-1rem" }}>
            <img
              src="/assets/fotter-logo.webp"
              alt="Haute World Developers"
              className="footer-logo"
              style={{ height: "120px", width: "auto" }}
            />
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.9rem",
                lineHeight: "1.6",
                marginTop: "-0.5rem",
                maxWidth: "320px",
              }}
            >
              Inspired Zen Living — where every community is designed for the
              life you truly deserve. Building premium communities across
              India since 2011.
            </p>
            <div
              className="footer-social"
              style={{ gap: "1rem", marginTop: "1.2rem" }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=61584529430117#"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/haute_world_developers/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <a
                href="https://youtube.com/@hauteworlddevelopers?si=MnecxWvx2FpfFHra"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="YouTube"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon
                    points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                    fill="#0d2b20"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/haute-developers/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://in.pinterest.com/haute_world_developers/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Pinterest"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.36 2 11.7c0 4.09 2.56 7.58 6.16 8.96-.08-.76-.16-1.94.03-2.78.17-.75 1.13-4.78 1.13-4.78s-.29-.58-.29-1.44c0-1.35.79-2.36 1.77-2.36.83 0 1.24.62 1.24 1.37 0 .83-.53 2.08-.8 3.24-.23.97.49 1.76 1.45 1.76 1.74 0 3.08-1.83 3.08-4.47 0-2.34-1.68-3.97-4.08-3.97-2.78 0-4.41 2.08-4.41 4.24 0 .84.32 1.74.73 2.23.08.1.09.18.06.28-.07.29-.22.9-.25 1.03-.04.16-.13.2-.3.12-1.12-.52-1.82-2.15-1.82-3.46 0-2.82 2.05-5.41 5.9-5.41 3.1 0 5.51 2.21 5.51 5.16 0 3.08-1.94 5.56-4.64 5.56-.91 0-1.76-.47-2.05-1.03l-.56 2.13c-.2.78-.75 1.75-1.11 2.34.84.26 1.72.4 2.64.4 5.52 0 10-4.36 10-9.7C22 6.36 17.52 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#about">About Us</Link>
              </li>
              <li>
                <Link href="/#projects">Our Projects</Link>
              </li>
              <li>
                <Link href="/#upcoming">Upcoming Launches</Link>
              </li>
              <li>
                <Link href="/#contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="footer-col">
            <h5>Our Projects</h5>
            <ul className="footer-links">
              <li>
                <Link href="/#upcoming">Expressway Residency</Link>
              </li>
              <li>
                <Link href="/#upcoming">Haute World City</Link>
              </li>
              <li>
                <Link href="/#upcoming">Haute Pearl Residency</Link>
              </li>
              <li>
                <Link href="/#projects">Delivered Projects</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h5>Get in touch</h5>
            <ul className="footer-links footer-contact-list" style={{ gap: "0.8rem" }}>
              <li
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "0.88rem",
                  lineHeight: "1.6",
                  display: "flex",
                  gap: "0.6rem",
                  alignItems: "flex-start",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0, marginTop: "3px", opacity: 1 }}
                >
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Ground Floor, H-214, Sector 63, Noida, Uttar Pradesh 201301
                </span>
              </li>
              <li>
                <a
                  href="tel:+919911807193"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.88rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, opacity: 1 }}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 5.55 5.55l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2z" />
                  </svg>
                  +91 99118 07193
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@hautedevelopers.com"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.88rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, opacity: 1 }}
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 6l10 7 10-7" />
                  </svg>
                  support@hautedevelopers.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} Haute World Developers Pvt. Ltd. All rights reserved.
          </p>
          <p>
            <a href="/privacy-policy">Privacy Policy</a>
            {" · "}
            <a href="/terms-of-use">Terms of Use</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        /* ---------- 1. Underline growing left -> right under column headings ---------- */
        .footer-col h5 {
          position: relative;
          display: inline-block;
          cursor: default;
        }

        .footer-col h5::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: #d4af37;
          transition: width 0.35s ease;
        }

        .footer-col h5:hover::after {
          width: 100%;
        }

        /* ---------- 2. Arrow-in + shift-right on list links ---------- */
        /* :global() is required here because these <li> items wrap
           next/link's <Link>, which renders its own <a> tag.
           styled-jsx only auto-scopes literal HTML tags written
           directly in this file's JSX, not custom components like
           <Link> — so plain scoped selectors silently never match it.

           Hover is triggered on the <li> (not the <a>) and everything
           shifts together via padding-left, so there's no gap between
           the arrow and the text that could cause hover to flicker. */
        :global(.footer-links li) {
          position: relative;
          padding-left: 0;
          transition: padding-left 0.3s ease;
        }

        :global(.footer-links li::before) {
          content: "›";
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
          color: #d4af37;
          transition: opacity 0.3s ease;
        }

        :global(.footer-links li:hover) {
          padding-left: 16px;
        }

        :global(.footer-links li:hover::before) {
          opacity: 1;
        }

        :global(.footer-links li:hover a) {
          color: #d4af37;
        }

        /* ---------- 2b. Disable the arrow-in hover effect on the contact list ---------- */
        :global(.footer-contact-list li) {
          padding-left: 0 !important;
        }

        :global(.footer-contact-list li::before) {
          display: none !important;
        }

        :global(.footer-contact-list li:hover) {
          padding-left: 0 !important;
        }

        :global(.footer-contact-list li:hover a) {
          color: #d4af37 !important;
        }

        /* ---------- 3. Recolor + resize social icons: white -> gold on hover ---------- */
        /* Strips any box/background your external .social-btn class
           may define, to match the flat icon-only reference style.
           Icons rest white and turn gold on hover.
           Selector is nested (.footer-social .social-btn) to win
           specificity over whatever fixed-size box rule already
           exists for .social-btn in your external stylesheet. */
        :global(.footer-social .social-btn) {
          background: transparent !important;
          background-color: transparent !important;
          border: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
          width: 26px !important;
          height: 26px !important;
          min-width: 0 !important;
          min-height: 0 !important;
          overflow: visible !important;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        /* Locks the SVG itself to a fixed square so it can't be
           stretched by any width:100%/height:100% rule already
           defined for it in your external stylesheet, and forces
           it to render as a block so it can't be clipped by an
           inline-element baseline gap or a leftover overflow:hidden
           on the button. */
        :global(.footer-social .social-btn svg) {
          display: block !important;
          width: 26px !important;
          height: 26px !important;
          overflow: visible !important;
          flex-shrink: 0;
        }

        :global(.footer-social .social-btn:hover) {
          color: #d4af37;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}