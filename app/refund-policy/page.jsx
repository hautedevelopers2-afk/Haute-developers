import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Refund Policy | Haute World Developers",
  description:
    "Read the Refund Policy of Haute World Developers. Understand the conditions, process and timelines applicable to booking cancellations and refunds.",
  alternates: { canonical: "https://www.hautedevelopers.com/refund-policy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    id: "scope",
    title: "1. Scope of This Policy",
    content: [
      {
        type: "paragraph",
        text: "This Refund Policy explains the circumstances in which payments made to Haute World Developers for the booking or purchase of plots, villas, farmhouse plots, or other real estate products may be refunded, and the process for requesting a refund.",
      },
      {
        type: "paragraph",
        text: "This policy should be read together with the booking form, allotment letter, agreement to sell, and any other documents executed between you and Haute World Developers for a specific project. In case of any conflict, the terms of those executed documents and applicable law, including the Real Estate (Regulation and Development) Act, 2016 (RERA), shall prevail.",
      },
    ],
  },
  {
    id: "enquiries",
    title: "2. Website Enquiries & Site Visits",
    content: [
      {
        type: "paragraph",
        text: "Submitting an enquiry, callback request, or registering interest through our website, and scheduling a site visit, do not involve any payment and are free of charge. No refund is applicable in respect of these.",
      },
    ],
  },
  {
    id: "booking-amount",
    title: "3. Booking Amount & Cancellation by Customer",
    content: [
      {
        type: "paragraph",
        text: "A booking is confirmed only after the booking amount is received and acknowledged in writing by Haute World Developers. If you wish to cancel a confirmed booking, the following general principles apply:",
      },
      {
        type: "list",
        items: [
          "Cancellation requests must be made in writing, as described in Section 7.",
          "On an approved customer-initiated cancellation, 10% of the amount paid will be deducted, and the remaining amount will be refunded within 90 days, as described in Sections 4 and 8.",
          "A cancellation is considered effective only upon written acknowledgement by Haute World Developers.",
          "Amounts paid under special schemes, offers, or discounted payment plans may be subject to additional conditions stated in the relevant scheme documents.",
        ],
      },
    ],
  },
  {
    id: "deductions",
    title: "4. Deductions",
    content: [
      {
        type: "paragraph",
        text: "Where a refund is approved on a customer-initiated cancellation, the following will be deducted from the amount refunded:",
      },
      {
        type: "list",
        items: [
          "Cancellation and administrative charges equal to 10% of the total amount paid by the customer.",
          "Brokerage or commission already paid to a channel partner in respect of the booking, where applicable.",
          "Any amounts owed by you to Haute World Developers under the agreement.",
          "Taxes, duties, or statutory charges that have been paid to the government and are not recoverable.",
        ],
      },
    ],
  },
  {
    id: "non-refundable",
    title: "5. Non-Refundable Amounts",
    content: [
      {
        type: "paragraph",
        text: "Unless otherwise required by law or agreed in writing, the following are generally non-refundable:",
      },
      {
        type: "list",
        items: [
          "Stamp duty, registration charges, and other government fees paid for registration of documents.",
          "Fees paid to third parties, such as banks or financial institutions, for home loan processing.",
          "Payments made for optional customisation, interior, or other services that have already been commenced or delivered.",
          "Amounts forfeited due to default by the customer as per the agreement.",
        ],
      },
    ],
  },
  {
    id: "developer-cancellation",
    title: "6. Cancellation or Delay by Haute World Developers",
    content: [
      {
        type: "paragraph",
        text: "If Haute World Developers is unable to proceed with a project or fails to deliver in accordance with the agreement, your rights to refund, interest, or compensation will be governed by the terms of your agreement and by the applicable provisions of RERA and the relevant state RERA rules.",
      },
    ],
  },
  {
    id: "how-to-request",
    title: "7. How to Request a Refund",
    content: [
      {
        type: "paragraph",
        text: "To request a cancellation or refund, please follow the steps below:",
      },
      {
        type: "list",
        items: [
          "Send a written request by email to info@hautedevelopers.co or submit it at one of our offices, mentioning your name, project name, unit or plot details, and payment details.",
          "Attach copies of the payment receipts, booking form or allotment letter, and a cancelled cheque or bank details of the account to which the refund is to be credited.",
          "Our team may contact you to verify the request and may ask for additional documents or an identity verification.",
          "You will be informed in writing about the outcome of your request, including the refundable amount and any deductions.",
        ],
      },
    ],
  },
  {
    id: "timeline",
    title: "8. Processing Time & Mode of Refund",
    content: [
      {
        type: "paragraph",
        text: "Approved refunds are processed within 90 days from the date the cancellation request is approved in writing by Haute World Developers, after completion of the required verification and documentation. Refunds are made through bank transfer, cheque, or demand draft, generally to the same account or in the same name from which the original payment was received.",
      },
      {
        type: "paragraph",
        text: "The time taken for the amount to reflect in your account may also depend on your bank or payment provider.",
      },
    ],
  },
  {
    id: "updates",
    title: "9. Changes to This Policy",
    content: [
      {
        type: "paragraph",
        text: "We may update this Refund Policy from time to time. The revised policy will be posted on this page with an updated effective date. Changes will not affect rights and obligations under agreements already executed, which remain governed by their own terms.",
      },
    ],
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content: [
      {
        type: "paragraph",
        text: "For any questions about this Refund Policy or to raise a refund request, please contact us:",
      },
      {
        type: "contact",
        lines: [
          "Haute World Developers",
          "Head Office: Ground Floor, H-214, Sector 63, Noida, Uttar Pradesh 201301",
          "Ahmedabad Office: 804, Rashmi The Prime, Near Vakil Saheb Bridge, SP Ring Road, Bopal-Ambli Road, Ahmedabad",
          "Email: info@hautedevelopers.co",
          "Phone: +91 99118 07193",
        ],
      },
    ],
  },
];

export default function RefundPolicy() {
  const lastUpdated = "October 2026";

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
        aria-label="Refund Policy header"
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
            <span style={{ color: "var(--gold)" }}>Refund Policy</span>
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
            Refund Policy
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", margin: 0 }}>
            Effective Date: {lastUpdated} &nbsp;·&nbsp; Haute World Developers
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section
        style={{ background: "var(--cream)", padding: "5rem 0 6rem" }}
        aria-labelledby="refund-content"
      >
        <div className="container">
          <div
            className="legal-grid"
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
            <main id="refund-content">
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
                  At Haute World Developers, we aim to keep every transaction clear and fair. This Refund
                  Policy sets out when and how refunds are handled for bookings made with us. Please read it
                  together with your booking documents before making any payment.
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
                                  marginTop: j > 0 ? "0.35rem" : 0,
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