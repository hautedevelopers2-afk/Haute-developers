import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import Link from "next/link";

export const metadata = {
  title: "Haute Grand City | Premium Township Near Duhai Metro, Ghaziabad — Coming Soon",
  description:
    "Haute Grand City is an upcoming premium township near Duhai Metro, Ghaziabad offering spacious plots and luxury living. Register your interest today with Haute Developers.",
  alternates: { canonical: "https://www.hautedevelopers.com/haute-grand-city" },
  openGraph: {
    title: "Haute Grand City | Coming Soon — Haute Developers",
    description:
      "A landmark township near Duhai Metro, Ghaziabad. Premium plots, world-class amenities, and unmatched connectivity. Register your interest now.",
    url: "https://www.hautedevelopers.com/haute-grand-city",
    siteName: "Haute Developers",
    images: [
      {
        url: "/assets/hgc-front.png",
        width: 1200,
        height: 630,
        alt: "Haute Grand City — Premium Township Ghaziabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haute Grand City | Coming Soon",
    description:
      "Premium township near Duhai Metro, Ghaziabad. Launching soon by Haute Developers.",
    images: ["/assets/hgc-front.png"],
  },
};

const IconMapPin = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);

const IconStar = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const highlights = [
  { label: "Location", value: "Near Duhai Metro, Ghaziabad" },
  { label: "Project Type", value: "Premium Township" },
  { label: "Offerings", value: "Spacious Plots" },
  { label: "Status", value: "Launching Soon" },
];

const features = [
  "Strategically located near Duhai Metro, Ghaziabad",
  "Premium gated township with world-class infrastructure",
  "Spacious residential plots for custom dream homes",
  "24×7 security with smart surveillance systems",
  "Wide internal roads & landscaped green spaces",
  "Excellent connectivity to Delhi NCR & expressways",
];

export default function HauteGrandCity() {
  return (
    <>
      <Navbar />

      <style suppressHydrationWarning>{`
        .hgc-about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .hgc-img-accent {
          position: absolute;
          bottom: -1.2rem;
          right: -1.2rem;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: var(--forest-dark);
          padding: 1.2rem 1.6rem;
          border-radius: 14px;
          box-shadow: 0 8px 28px rgba(201,144,26,0.4);
          z-index: 2;
        }
        .hgc-notify-inner {
          padding: 4rem;
        }
        .hgc-cta-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .hgc-hero-pills {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .hgc-about-img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
          filter: brightness(0.9);
        }

        @media (max-width: 900px) {
          .hgc-about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .hgc-notify-inner {
            padding: 2.5rem 1.5rem;
          }
          .hgc-about-img {
            height: 260px;
          }
          .hgc-img-accent {
            bottom: -0.8rem;
            right: 0.5rem;
            padding: 0.9rem 1.2rem;
          }
          .hgc-img-accent strong {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .hgc-cta-row {
            flex-direction: column;
            align-items: stretch;
          }
          .hgc-cta-row > * {
            text-align: center;
            justify-content: center;
          }
          .hgc-hero-pills {
            gap: 0.4rem;
          }
          .hgc-hero-pills > div {
            padding: 0.35rem 0.75rem !important;
          }
          .hgc-notify-inner {
            padding: 2rem 1rem;
          }
        }
      `}</style>

      {/* ── HERO / COMING SOON ── */}
      <section
        aria-label="Haute Grand City Coming Soon"
        style={{
          height: "100vh",
          minHeight: "600px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          overflow: "hidden",
          paddingTop: "72px",
        }}
      >
        {/* Background Image */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "url('/assets/hgc-front.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", zIndex: 0 }} />

        {/* Dark overlay */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(8,24,16,0.55)", zIndex: 1 }} />

        {/* Bottom gradient */}
        <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "260px", background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 100%)", zIndex: 2, pointerEvents: "none" }} />

        {/* Pattern */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(201,144,26,0.04) 0, rgba(201,144,26,0.04) 1px, transparent 0, transparent 50%)", backgroundSize: "40px 40px", zIndex: 2, pointerEvents: "none" }} />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            textAlign: "center",
            maxWidth: "860px",
            width: "100%",
            padding: "0 1.5rem 3rem",
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.2rem",
          }}
        >
          {/* COMING SOON */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
              fontWeight: 700,
              color: "transparent",
              backgroundImage: "linear-gradient(135deg, var(--gold-pale) 0%, var(--gold) 40%, rgba(201,144,26,0.6) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Coming
            <br />
            Soon
          </h1>

          {/* Project name */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.3rem, 3.5vw, 2.6rem)",
                fontWeight: 500,
                color: "#fff",
                letterSpacing: "0.06em",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Haute Grand City
            </h2>
            <div style={{ width: "64px", height: "2px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)", margin: "0.8rem auto 0", borderRadius: "2px" }} />
          </div>

          {/* CTA Buttons */}
          <div className="hgc-cta-row" style={{ marginTop: "0.5rem" }}>
            <Link href="/#contact" className="btn-primary">Register Your Interest →</Link>
            <a href="tel:+918383073291" className="btn-outline">Call Us Now</a>
          </div>

          {/* Stat pills */}
          <div className="hgc-hero-pills">
            {highlights.map((h) => (
              <div
                key={h.label}
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(201,144,26,0.3)",
                  borderRadius: "999px",
                  padding: "0.45rem 1.1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 700 }}>{h.label}:</span>
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{h.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator" aria-hidden="true" style={{ zIndex: 4 }}>
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── ABOUT THE PROJECT ── */}
      <section
        style={{ background: "var(--forest-dark)", padding: "6rem 0", position: "relative", overflow: "hidden" }}
        aria-labelledby="hgc-about-heading"
      >
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.035, backgroundImage: "repeating-linear-gradient(45deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 50%)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-100px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(201,144,26,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hgc-about-grid">

            {/* Left: image */}
            <div style={{ position: "relative", paddingBottom: "1.5rem" }}>
              <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(201,144,26,0.25)", boxShadow: "0 24px 64px rgba(0,0,0,0.5)", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--gold), rgba(201,144,26,0.3), transparent)", zIndex: 2 }} />
                <img
                  src="/assets/hgc-right.png"
                  alt="Haute Grand City township view"
                  className="hgc-about-img"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,47,36,0.6) 0%, transparent 60%)" }} />
              </div>
              <div className="hgc-img-accent">
                <strong style={{ display: "block", fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, lineHeight: 1 }}>Upcoming</strong>
                <span style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.85 }}>Project Status</span>
              </div>
            </div>

            {/* Right: text */}
            <div>
              <span className="section-label" style={{ color: "var(--gold)" }}>About The Project</span>
              <h2 id="hgc-about-heading" style={{ color: "#fff", fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", lineHeight: 1.15, marginBottom: "0.5rem" }}>
                A New Benchmark in{" "}
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>NCR Living</em>
              </h2>
              <div className="divider" />
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.4rem" }}>
                Haute Grand City is a premium township being developed near the Duhai Metro
                corridor in Ghaziabad — one of NCR's fastest-growing real estate destinations.
                Designed for discerning investors and homeowners, this project promises spacious
                plots, lush green surroundings, and world-class infrastructure.
              </p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                With excellent connectivity to Delhi, Noida, and major expressways, Haute Grand
                City offers the perfect blend of serene living and urban accessibility — an
                unmatched investment opportunity in 2025.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{ flexShrink: 0, marginTop: "2px" }}><IconStar size={13} color="var(--gold)" /></span>
                    <span style={{ fontSize: "0.87rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "2rem" }}>
                <Link href="/#contact" className="btn-primary">Express Interest →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOTIFY / CTA STRIP ── */}
      <section style={{ background: "var(--cream)", padding: "5rem 0", position: "relative", overflow: "hidden" }} aria-labelledby="hgc-notify-heading">
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(201,144,26,0.04) 0, rgba(201,144,26,0.04) 1px, transparent 0, transparent 50%)", backgroundSize: "40px 40px" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            className="hgc-notify-inner"
            style={{
              background: "linear-gradient(135deg, var(--forest-dark) 0%, var(--forest) 100%)",
              borderRadius: "20px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(201,144,26,0.2)",
            }}
          >
            <div aria-hidden="true" style={{ position: "absolute", top: "1.5rem", left: "1.5rem", width: "40px", height: "40px", borderTop: "2px solid var(--gold)", borderLeft: "2px solid var(--gold)", opacity: 0.5 }} />
            <div aria-hidden="true" style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", width: "40px", height: "40px", borderBottom: "2px solid var(--gold)", borderRight: "2px solid var(--gold)", opacity: 0.5 }} />

            <span className="section-label" style={{ color: "var(--gold)" }}>Be The First To Know</span>
            <h2 id="hgc-notify-heading" style={{ color: "#fff", fontSize: "clamp(1.6rem, 3vw, 2.6rem)", lineHeight: 1.2, margin: "0.5rem 0 1rem" }}>
              Don't Miss the{" "}
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Grand Launch</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: "520px", margin: "0 auto 2.5rem" }}>
              Register your interest now to receive exclusive pre-launch pricing,
              priority plot selection, and early-bird offers for Haute Grand City.
            </p>

            <div className="hgc-cta-row">
              <Link href="/#contact" className="btn-primary">Register Interest →</Link>
              <a href="tel:+918383073291" className="btn-outline">+91 83830 73291</a>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
              {["✦ Government Approved", "✦ Transparent Pricing", "✦ Trusted Since 2010", "✦ 15+ Years of Trust"].map((b) => (
                <span key={b} style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em", fontWeight: 500 }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}