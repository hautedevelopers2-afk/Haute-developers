import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import Link from "next/link";

export const metadata = {
  title: "Haute World City | Smart City Plots in Dholera, Gujarat — Coming Soon",
  description:
    "Haute World City is an upcoming landmark investment opportunity in Dholera Smart City, Gujarat. Premium plots in India's first greenfield smart city. Register your interest today.",
  alternates: { canonical: "https://www.hautedevelopers.com/haute-world-city" },
  openGraph: {
    title: "Haute World City | Coming Soon — Haute Developers",
    description:
      "A landmark investment in Dholera Smart City, Gujarat. Premium plots in India's first planned smart city. Register your interest now.",
    url: "https://www.hautedevelopers.com/haute-world-city",
    siteName: "Haute Developers",
    images: [
      {
        url: "/assets/dholera.png",
        width: 1200,
        height: 630,
        alt: "Haute World City — Dholera Smart City",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haute World City | Coming Soon",
    description:
      "Premium plots in Dholera Smart City. Launching soon by Haute Developers.",
    images: ["/assets/dholera.png"],
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
  { label: "Location", value: "Dholera, Gujarat" },
  { label: "Project Type", value: "Smart City Plots" },
  { label: "Offerings", value: "Premium Plots" },
  { label: "Status", value: "Upcoming" },
];

const features = [
  "Located in Dholera — India's first planned greenfield smart city",
  "Government-backed DMIC corridor investment opportunity",
  "Premium plots with world-class infrastructure & utilities",
  "High appreciation potential in India's fastest-growing smart zone",
  "Proximity to upcoming international airport & expressway",
  "Fully planned township with parks, roads & modern amenities",
];

export default function HauteWorldCity() {
  return (
    <>
      <Navbar />

      <style suppressHydrationWarning>{`
        .hwc-about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (max-width: 900px) {
          .hwc-about-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hwc-about-grid img {
            height: 260px !important;
          }
          .hwc-img-accent {
            bottom: -0.8rem !important;
            right: 0.5rem !important;
          }
        }
      `}</style>

      {/* ── HERO / COMING SOON ── */}
      <section
        aria-label="Haute World City Coming Soon"
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
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/dholera.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        />

        {/* Dark overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(8,24,16,0.55)",
            zIndex: 1,
          }}
        />

        {/* Bottom gradient fade */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "260px",
            background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Gold diagonal pattern overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "repeating-linear-gradient(45deg, rgba(201,144,26,0.04) 0, rgba(201,144,26,0.04) 1px, transparent 0, transparent 50%)",
            backgroundSize: "40px 40px",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

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
          {/* Location badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "rgba(201,144,26,0.92)",
              color: "white",
              padding: "0.35rem 1rem",
              borderRadius: "999px",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <IconMapPin size={13} color="white" />
            Dholera, Gujarat
          </div>

          {/* COMING SOON */}
          <div style={{ lineHeight: 1 }}>
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
          </div>

          {/* Project name */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                fontWeight: 500,
                color: "#fff",
                letterSpacing: "0.06em",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Haute World City
            </h2>
            <div
              style={{
                width: "64px",
                height: "2px",
                background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
                margin: "0.8rem auto 0",
                borderRadius: "2px",
              }}
            />
          </div>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "0.5rem",
            }}
          >
            <Link href="/#contact" className="btn-primary">
              Register Your Interest →
            </Link>
            <a href="tel:+918383073291" className="btn-outline">
              Call Us Now
            </a>
          </div>

          {/* Stat pills */}
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
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
                <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 700 }}>
                  {h.label}:
                </span>
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                  {h.value}
                </span>
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
        style={{
          background: "var(--forest-dark)",
          padding: "6rem 0",
          position: "relative",
          overflow: "hidden",
        }}
        aria-labelledby="hwc-about-heading"
      >
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.035, backgroundImage: "repeating-linear-gradient(45deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 50%)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-100px", right: "-100px", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(201,144,26,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hwc-about-grid">

            {/* Left: image */}
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(201,144,26,0.25)", boxShadow: "0 24px 64px rgba(0,0,0,0.5)", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--gold), rgba(201,144,26,0.3), transparent)", zIndex: 2 }} />
                <img
                  src="/assets/dholera.png"
                  alt="Haute World City — Dholera Smart City"
                  style={{ width: "100%", height: "420px", objectFit: "cover", display: "block", filter: "brightness(0.9)" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,47,36,0.6) 0%, transparent 60%)" }} />
              </div>
              <div
                className="hwc-img-accent"
                style={{
                  position: "absolute",
                  bottom: "-1.2rem",
                  right: "-1.2rem",
                  background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
                  color: "var(--forest-dark)",
                  padding: "1.2rem 1.6rem",
                  borderRadius: "14px",
                  boxShadow: "0 8px 28px rgba(201,144,26,0.4)",
                  zIndex: 2,
                }}
              >
                <strong style={{ display: "block", fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, lineHeight: 1 }}>Upcoming</strong>
                <span style={{ fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.85 }}>Project Status</span>
              </div>
            </div>

            {/* Right: text */}
            <div>
              <span className="section-label" style={{ color: "var(--gold)" }}>About The Project</span>
              <h2 id="hwc-about-heading" style={{ color: "#fff", fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", lineHeight: 1.15, marginBottom: "0.5rem" }}>
                India's Future,{" "}
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Your Investment</em>
              </h2>
              <div className="divider" />
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.4rem" }}>
                Haute World City is a landmark investment opportunity in Dholera Smart City —
                India's first and largest planned greenfield smart city, backed by the Government
                of India under the DMIC corridor. Strategically located in Gujarat, Dholera is
                set to become a global hub for industry, commerce, and modern living.
              </p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                With an upcoming international airport, six-lane expressway, and world-class
                infrastructure already underway, investing in Haute World City today means
                securing your future in one of India's most transformational developments.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{ flexShrink: 0, marginTop: "2px" }}>
                      <IconStar size={13} color="var(--gold)" />
                    </span>
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
      <section style={{ background: "var(--cream)", padding: "5rem 0", position: "relative", overflow: "hidden" }} aria-labelledby="hwc-notify-heading">
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(201,144,26,0.04) 0, rgba(201,144,26,0.04) 1px, transparent 0, transparent 50%)", backgroundSize: "40px 40px" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ background: "linear-gradient(135deg, var(--forest-dark) 0%, var(--forest) 100%)", borderRadius: "20px", padding: "4rem", textAlign: "center", position: "relative", overflow: "hidden", border: "1px solid rgba(201,144,26,0.2)" }}>
            <div aria-hidden="true" style={{ position: "absolute", top: "1.5rem", left: "1.5rem", width: "40px", height: "40px", borderTop: "2px solid var(--gold)", borderLeft: "2px solid var(--gold)", opacity: 0.5 }} />
            <div aria-hidden="true" style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", width: "40px", height: "40px", borderBottom: "2px solid var(--gold)", borderRight: "2px solid var(--gold)", opacity: 0.5 }} />

            <span className="section-label" style={{ color: "var(--gold)" }}>Be The First To Know</span>
            <h2 id="hwc-notify-heading" style={{ color: "#fff", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.2, margin: "0.5rem 0 1rem" }}>
              Don't Miss the{" "}
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Grand Launch</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: "520px", margin: "0 auto 2.5rem" }}>
              Register your interest now to receive exclusive pre-launch pricing,
              priority plot selection, and early-bird offers for Haute World City, Dholera.
            </p>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#contact" className="btn-primary">Register Interest →</Link>
              <a href="tel:+918383073291" className="btn-outline">+91 83830 73291</a>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
              {["✦ Government Backed", "✦ Transparent Pricing", "✦ Trusted Since 2010", "✦ 15+ Years of Trust"].map((b) => (
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