import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Haute Developers",
  description:
    "Read the Terms and Conditions governing your use of the Haute Developers website and services. Understand your rights and responsibilities before engaging with us.",
  alternates: { canonical: "https://www.hautedevelopers.com/terms-and-conditions" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      {
        type: "paragraph",
        text: "By accessing or using the Haute Developers website (www.hautedevelopers.com) and any related services, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please discontinue use of our website immediately.",
      },
      {
        type: "paragraph",
        text: "These terms constitute a legally binding agreement between you and Haute Developers (referred to as 'we', 'us', or 'the Company'). We reserve the right to update these terms at any time. Continued use of our website following such updates constitutes your acceptance of the revised terms.",
      },
    ],
  },
  {
    id: "website-use",
    title: "2. Use of the Website",
    content: [
      {
        type: "paragraph",
        text: "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:",
      },
      {
        type: "list",
        items: [
          "Use this website for any unlawful, fraudulent, or harmful purpose.",
          "Attempt to gain unauthorised access to any part of the website or its related systems.",
          "Transmit any unsolicited or unauthorised advertising, spam, or promotional material.",
          "Reproduce, distribute, or create derivative works from any content on this website without our prior written consent.",
          "Misrepresent your identity or impersonate any person or entity.",
        ],
      },
      {
        type: "paragraph",
        text: "We reserve the right to suspend or terminate access to the website for any user who violates these conditions, without prior notice.",
      },
    ],
  },
  {
    id: "information-accuracy",
    title: "3. Accuracy of Information",
    content: [
      {
        type: "paragraph",
        text: "The content on this website is provided for general informational purposes only. While we strive to ensure accuracy, all information including project details, pricing, specifications, renders, and availability is subject to change without notice and should not be relied upon as a definitive representation.",
      },
      {
        type: "paragraph",
        text: "Computer-generated images (CGIs), brochures, and marketing materials are artistic impressions only and may differ from the actual project. All dimensions, areas, and specifications mentioned are approximate. Buyers are advised to verify all details independently before making any investment or purchase decision.",
      },
      {
        type: "important",
        text: "Nothing on this website constitutes an offer, invitation to offer, or commitment to sell. All sales are subject to a formal agreement to sell / sale deed executed between the buyer and Haute Developers.",
      },
    ],
  },
  {
    id: "property-transactions",
    title: "4. Property Transactions",
    content: [
      {
        type: "paragraph",
        text: "Any property booking or transaction with Haute Developers is governed exclusively by the allotment letter, agreement to sell, or sale deed executed between the parties and applicable law, including the Real Estate (Regulation and Development) Act, 2016 (RERA). In the event of any conflict between these Terms and such formal agreements, the formal agreements shall prevail.",
      },
      {
        type: "list",
        items: [
          "Site visits are offered at our discretion and do not constitute a guarantee of availability.",
          "Booking amounts or expressions of interest made online or verbally are not binding until confirmed in writing.",
          "All prices listed are indicative and subject to revision. Final pricing will be specified in the formal sale documents.",
          "Buyers are advised to conduct independent due diligence, including legal and financial verification, before completing any transaction.",
        ],
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "5. Intellectual Property",
    content: [
      {
        type: "paragraph",
        text: "All content on this website — including but not limited to text, graphics, logos, images, project renders, videos, and software — is the exclusive property of Haute Developers or its licensors and is protected under Indian and international copyright, trademark, and intellectual property laws.",
      },
      {
        type: "paragraph",
        text: "You may not copy, reproduce, modify, publish, transmit, or distribute any content from this website without our prior written permission. Limited personal, non-commercial use is permitted solely for the purpose of evaluating our projects.",
      },
    ],
  },
  {
    id: "third-party",
    title: "6. Third-Party Links & Services",
    content: [
      {
        type: "paragraph",
        text: "Our website may contain links to third-party websites, including government portals (such as RERA), mapping services, or social media platforms. These links are provided for your convenience only. We do not endorse, control, or assume responsibility for the content, privacy practices, or services of any third-party sites. Your use of such sites is at your own risk.",
      },
    ],
  },
  {
    id: "limitation",
    title: "7. Limitation of Liability",
    content: [
      {
        type: "paragraph",
        text: "To the fullest extent permitted by applicable law, Haute Developers shall not be liable for:",
      },
      {
        type: "list",
        items: [
          "Any loss or damage arising from your reliance on information published on this website.",
          "Any indirect, incidental, consequential, or special damages, including loss of profit or data, arising from use of or inability to use this website.",
          "Any interruption, suspension, or termination of the website or its services.",
          "Any unauthorised access to or alteration of your data by third parties.",
        ],
      },
      {
        type: "paragraph",
        text: "Our total aggregate liability to you for any claim arising out of your use of this website shall not exceed ₹10,000 (Indian Rupees Ten Thousand Only), unless otherwise required by applicable law.",
      },
    ],
  },
  {
    id: "indemnity",
    title: "8. Indemnity",
    content: [
      {
        type: "paragraph",
        text: "You agree to indemnify, defend, and hold harmless Haute Developers, its directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising from: (a) your use of the website or services; (b) your violation of these Terms; or (c) your infringement of any third-party rights.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "9. Governing Law & Jurisdiction",
    content: [
      {
        type: "paragraph",
        text: "These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Gautam Buddha Nagar (Noida), Uttar Pradesh, India.",
      },
      {
        type: "paragraph",
        text: "Where applicable, any disputes related to real estate transactions will be subject to the provisions of the Real Estate (Regulation and Development) Act, 2016, and the relevant state RERA authority.",
      },
    ],
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content: [
      {
        type: "paragraph",
        text: "For any queries, complaints, or legal notices related to these Terms, please contact us at:",
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
];

export default function TermsAndConditions() {
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
        aria-label="Terms and Conditions header"
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
            <Link href="/" style={{ color: "rgba(255,255,255,0.45)" }}>
              Home
            </Link>
            <span>/</span>
            <span style={{ color: "var(--gold)" }}>Terms & Conditions</span>
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
            Terms & Conditions
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", margin: 0 }}>
            Effective Date: {lastUpdated} &nbsp;·&nbsp; Haute Developers
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section
        style={{ background: "var(--cream)", padding: "5rem 0 6rem" }}
        aria-labelledby="terms-content"
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
            <main id="terms-content">
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
                  Please read these Terms and Conditions carefully before using our website or services.
                  By accessing this website, you agree to these terms. These terms apply to all visitors,
                  users, and prospective buyers who access or use our website and services.
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
                      if (block.type === "important") {
                        return (
                          <div
                            key={i}
                            style={{
                              background: "rgba(201,144,26,0.06)",
                              border: "1px solid rgba(201,144,26,0.25)",
                              borderRadius: "10px",
                              padding: "1.1rem 1.3rem",
                              marginTop: "0.5rem",
                              marginBottom: "0.5rem",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "0.88rem",
                                color: "var(--charcoal)",
                                fontWeight: 500,
                                lineHeight: 1.7,
                                margin: 0,
                              }}
                            >
                              ⚠ {block.text}
                            </p>
                          </div>
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
                <Link href="/privacy-policy" className="btn-dark" style={{ fontSize: "0.82rem" }}>
                  View Privacy Policy →
                </Link>
              </div>
            </main>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          aside { position: static !important; display: none !important; }
          main { grid-column: 1 !important; }
        }
        .toc-link:hover { color: var(--gold) !important; background: rgba(201,144,26,0.06) !important; }
      `}</style>

      <Footer />
    </>
  );
}