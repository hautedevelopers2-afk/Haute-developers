import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Haute Developers",
  description:
    "Learn how Haute Developers collects, uses, and protects your personal information. Our Privacy Policy outlines your rights and our data practices.",
  alternates: { canonical: "https://www.hautedevelopers.com/privacy-policy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: [
      {
        type: "paragraph",
        text: "When you interact with Haute Developers — through our website, inquiry forms, site visits, or communications — we may collect the following categories of personal information:",
      },
      {
        type: "list",
        items: [
          "Identity information: full name, date of birth (where required for property bookings).",
          "Contact information: phone number, email address, residential or mailing address.",
          "Financial information: income range or budget preferences shared voluntarily during consultations.",
          "Device & usage data: IP address, browser type, pages visited, and time spent on our website (collected via cookies and analytics tools).",
          "Communication records: emails, WhatsApp messages, or phone call logs when you contact us.",
          "Government-issued identifiers: PAN, Aadhaar, or passport details, collected only when required for property registration or KYC compliance under applicable Indian laws.",
        ],
      },
      {
        type: "paragraph",
        text: "We collect information only to the extent necessary for the purposes described in this policy. You are not obligated to provide personal information, but certain services may not be available if you choose not to.",
      },
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: [
      {
        type: "paragraph",
        text: "Haute Developers uses your information for the following purposes:",
      },
      {
        type: "list",
        items: [
          "To respond to inquiries and schedule site visits or consultations.",
          "To process bookings, registrations, and payments for our projects.",
          "To send you relevant project updates, offers, and marketing communications (with your consent).",
          "To comply with legal obligations under the Real Estate (Regulation and Development) Act, 2016 (RERA), the Income Tax Act, Prevention of Money Laundering Act (PMLA), and other applicable Indian laws.",
          "To improve our website, services, and customer experience through analytics.",
          "To prevent fraud and ensure the security of our systems.",
        ],
      },
    ],
  },
  {
    id: "sharing",
    title: "3. Sharing of Information",
    content: [
      {
        type: "paragraph",
        text: "We do not sell or rent your personal information to third parties. We may share your data only in the following circumstances:",
      },
      {
        type: "list",
        items: [
          "Service providers: third-party vendors (such as CRM platforms, email services, or analytics providers) who assist us in operating our business, under strict confidentiality agreements.",
          "Legal authorities: when required by law, court order, or government authorities including RERA authorities, income tax departments, or law enforcement agencies.",
          "Business partners: channel partners or co-developers involved in a specific project, only to the extent necessary for completing a transaction.",
          "Corporate transactions: in the event of a merger, acquisition, or restructuring of Haute Developers, your information may be transferred to the successor entity.",
        ],
      },
      {
        type: "paragraph",
        text: "We require all third parties to handle your information with appropriate security measures and in accordance with applicable data protection laws.",
      },
    ],
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking Technologies",
    content: [
      {
        type: "paragraph",
        text: "Our website uses cookies and similar tracking technologies to enhance your browsing experience and gather analytics. These include:",
      },
      {
        type: "list",
        items: [
          "Essential cookies: required for the website to function correctly.",
          "Analytics cookies: used to understand how visitors interact with our site (e.g., Google Analytics).",
          "Marketing cookies: used to serve relevant advertisements if you have consented.",
        ],
      },
      {
        type: "paragraph",
        text: "You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    content: [
      {
        type: "paragraph",
        text: "We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. In general:",
      },
      {
        type: "list",
        items: [
          "Inquiry and contact data: retained for up to 3 years from the date of last interaction.",
          "Transaction and booking records: retained for a minimum of 8 years in compliance with Indian financial and property regulations.",
          "KYC documents: retained in accordance with PMLA requirements.",
        ],
      },
      {
        type: "paragraph",
        text: "Upon expiry of the retention period, we securely delete or anonymise your personal data.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    content: [
      {
        type: "paragraph",
        text: "Subject to applicable Indian law, including the Digital Personal Data Protection Act, 2023 (DPDPA), you have the right to:",
      },
      {
        type: "list",
        items: [
          "Access the personal data we hold about you.",
          "Correct inaccurate or incomplete personal data.",
          "Request erasure of your personal data, where legally permissible.",
          "Withdraw consent for marketing communications at any time.",
          "Nominate a representative for the processing of your data in specific circumstances.",
        ],
      },
      {
        type: "paragraph",
        text: "To exercise any of these rights, please contact us at the details provided in Section 9. We will respond to verified requests within 30 days.",
      },
    ],
  },
  {
    id: "security",
    title: "7. Data Security",
    content: [
      {
        type: "paragraph",
        text: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, misuse, or alteration. These include secure HTTPS connections, access controls, and periodic security reviews. However, no method of electronic transmission or storage is entirely secure, and we cannot guarantee absolute security.",
      },
    ],
  },
  {
    id: "third-party",
    title: "8. Third-Party Links",
    content: [
      {
        type: "paragraph",
        text: "Our website may contain links to third-party websites, including government portals (such as RERA websites) or social media platforms. We are not responsible for the privacy practices of such websites. We encourage you to review the privacy policies of any third-party sites you visit.",
      },
    ],
  },
  {
    id: "contact",
    title: "9. Contact Us",
    content: [
      {
        type: "paragraph",
        text: "If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data, please contact our Data Protection Officer:",
      },
      {
        type: "contact",
        lines: [
          "Haute Developers",
          "Ground Floor, H-214, Sector 63, Noida, Uttar Pradesh 201301",
          "Email: support@hautedevelopers.com",
          "Phone: +91 83830 73291",
        ],
      },
    ],
  },
  {
    id: "updates",
    title: "10. Updates to This Policy",
    content: [
      {
        type: "paragraph",
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The revised policy will be posted on this page with an updated effective date. We encourage you to review this page periodically. Continued use of our website or services after any changes constitutes your acceptance of the updated policy.",
      },
    ],
  },
];

export default function PrivacyPolicy() {
  const lastUpdated = "June 2025";

  return (
    <>
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--forest-dark) 0%, var(--forest) 100%)",
          paddingTop: "calc(72px + 4rem)",
          paddingBottom: "4rem",
          position: "relative",
          overflow: "hidden",
        }}
        aria-label="Privacy Policy header"
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(201,144,26,0.04) 0, rgba(201,144,26,0.04) 1px, transparent 0, transparent 50%)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.2rem",
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            <Link href="/" style={{ color: "rgba(255,255,255,0.45)", transition: "color 0.2s" }}>
              Home
            </Link>
            <span>/</span>
            <span style={{ color: "var(--gold)" }}>Privacy Policy</span>
          </div>
          <span className="section-label" style={{ color: "var(--gold)" }}>
            Legal
          </span>
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              marginTop: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", margin: 0 }}>
            Effective Date: {lastUpdated} &nbsp;·&nbsp; Haute Developers
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section
        style={{ background: "var(--cream)", padding: "5rem 0 6rem" }}
        aria-labelledby="privacy-content"
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "260px 1fr",
              gap: "3.5rem",
              alignItems: "start",
            }}
          >
            {/* Sidebar — Table of Contents */}
            <aside
              style={{
                position: "sticky",
                top: "88px",
                background: "var(--white)",
                border: "1px solid rgba(201,144,26,0.15)",
                borderRadius: "16px",
                padding: "1.6rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
              aria-label="Table of contents"
            >
              <p
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "0.8rem",
                }}
              >
                Contents
              </p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--gray)",
                    padding: "0.35rem 0.6rem",
                    borderRadius: "6px",
                    transition: "all 0.2s",
                    textDecoration: "none",
                    lineHeight: 1.4,
                  }}
                  className="toc-link"
                >
                  {s.title}
                </a>
              ))}
            </aside>

            {/* Main Content */}
            <main id="privacy-content">
              {/* Intro box */}
              <div
                style={{
                  background: "var(--white)",
                  border: "1px solid rgba(201,144,26,0.2)",
                  borderLeft: "4px solid var(--gold)",
                  borderRadius: "0 12px 12px 0",
                  padding: "1.4rem 1.6rem",
                  marginBottom: "3rem",
                }}
              >
                <p style={{ fontSize: "0.9rem", color: "var(--charcoal)", lineHeight: 1.75, margin: 0 }}>
                  At Haute Developers, we respect your privacy and are committed to protecting your personal
                  information. This Privacy Policy explains how we collect, use, share, and safeguard data
                  when you visit our website or engage with our services. Please read it carefully.
                </p>
              </div>

              {/* Sections */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2.8rem" }}>
                {sections.map((section) => (
                  <div key={section.id} id={section.id}>
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                        fontWeight: 500,
                        color: "var(--charcoal)",
                        marginBottom: "1rem",
                        paddingBottom: "0.6rem",
                        borderBottom: "1px solid rgba(201,144,26,0.12)",
                      }}
                    >
                      {section.title}
                    </h2>
                    {section.content.map((block, i) => {
                      if (block.type === "paragraph") {
                        return (
                          <p
                            key={i}
                            style={{
                              fontSize: "0.92rem",
                              color: "var(--gray)",
                              lineHeight: 1.8,
                              marginBottom: "0.8rem",
                            }}
                          >
                            {block.text}
                          </p>
                        );
                      }
                      if (block.type === "list") {
                        return (
                          <ul
                            key={i}
                            style={{
                              margin: "0 0 0.8rem",
                              paddingLeft: "0",
                              listStyle: "none",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.5rem",
                            }}
                          >
                            {block.items.map((item, j) => (
                              <li
                                key={j}
                                style={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: "0.75rem",
                                  fontSize: "0.9rem",
                                  color: "var(--gray)",
                                  lineHeight: 1.7,
                                }}
                              >
                                <span
                                  style={{
                                    display: "inline-block",
                                    width: "6px",
                                    height: "6px",
                                    borderRadius: "50%",
                                    background: "var(--gold)",
                                    flexShrink: 0,
                                    marginTop: "0.55rem",
                                  }}
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      if (block.type === "contact") {
                        return (
                          <div
                            key={i}
                            style={{
                              background: "var(--cream)",
                              border: "1px solid rgba(201,144,26,0.15)",
                              borderRadius: "12px",
                              padding: "1.2rem 1.4rem",
                              marginTop: "0.5rem",
                            }}
                          >
                            {block.lines.map((line, j) => (
                              <p
                                key={j}
                                style={{
                                  fontSize: "0.88rem",
                                  color: j === 0 ? "var(--charcoal)" : "var(--gray)",
                                  fontWeight: j === 0 ? 600 : 400,
                                  lineHeight: 1.65,
                                  margin: 0,
                                }}
                              >
                                {line}
                              </p>
                            ))}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div
                style={{
                  marginTop: "3rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid rgba(201,144,26,0.15)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <p style={{ fontSize: "0.8rem", color: "var(--gray)", margin: 0 }}>
                  Last updated: {lastUpdated}
                </p>
                <Link href="/terms-of-use" className="btn-dark" style={{ fontSize: "0.82rem" }}>
                  View Terms & Conditions →
                </Link>
              </div>
            </main>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .legal-grid { grid-template-columns: 1fr !important; }
          aside { position: static !important; display: none !important; }
        }
        .toc-link:hover { color: var(--gold) !important; background: rgba(201,144,26,0.06) !important; }
      `}</style>

      <Footer />
    </>
  );
}