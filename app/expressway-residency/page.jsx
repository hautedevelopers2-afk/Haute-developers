// Place this file at: src/app/expressway-residency/page.jsx

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export const metadata = {
  title: "Expressway Residency – Residential Plots on Delhi–Meerut Expressway | Haute Developers",
  description:
    "Government-approved residential plots (100–300 sq. yd.) at Expressway Residency on NH-24 Delhi–Meerut Expressway, Ghaziabad. Freehold titles, transparent pricing & 24×7 security. Developed by Haute Developers since 2011.",
  keywords:
    "Expressway Residency plots, Delhi Meerut Expressway plots, NH-24 Ghaziabad plots, residential plots Ghaziabad, Haute Developers, freehold plots NCR, investment plots expressway",
  alternates: { canonical: "https://www.hautedevelopers.com/expressway-residency" },
  openGraph: {
    title: "Expressway Residency – Residential Plots on Delhi–Meerut Expressway",
    description:
      "Government-approved freehold residential plots along the 16-lane Delhi–Meerut Expressway. Developed by Haute Developers. Book your site visit today.",
    url: "https://www.hautedevelopers.com/expressway-residency",
    siteName: "Haute Developers",
    images: [{ url: "/assets/expressway-front.png", width: 1200, height: 630, alt: "Expressway Residency aerial view" }],
    type: "website",
  },
};

/* ─────────────────────────────────────────
   SVG ICON COMPONENTS
───────────────────────────────────────── */
const IconPin = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);
const IconCheck = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconRoad = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 17l3-10h12l3 10"/><path d="M12 7v10"/><path d="M9 17l1-3"/><path d="M15 17l-1-3"/>
  </svg>
);
const IconTree = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22v-7"/><path d="M9 15H5l7-7 7 7h-4"/><path d="M7 11H3l9-9 9 9h-4"/>
  </svg>
);
const IconBolt = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconCompass = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
);
const IconBuilding = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6"/><path d="M9 13h6"/><path d="M9 17h6"/>
  </svg>
);
const IconPool = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
    <path d="M14 7V4"/><path d="M18 7V4"/><path d="M14 4h4"/>
  </svg>
);
const IconCamera = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);
const IconGate = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="11" width="8" height="11"/><rect x="13" y="11" width="8" height="11"/>
    <path d="M3 11V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"/><path d="M12 2v9"/>
  </svg>
);
const IconShield = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7L12 2z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);
const IconRun = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="13" cy="4" r="1.5"/>
    <path d="M7 21l3-8 2 2 3-5"/><path d="M17 21l-2-8-2 2"/>
    <path d="M4 13l4-2 2 3 3-6 3 2"/>
  </svg>
);
const IconKids = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="5" r="3"/><path d="M6 21v-2a6 6 0 0 1 12 0v2"/>
    <path d="M9 14l-2 7"/><path d="M15 14l2 7"/>
  </svg>
);
const IconShop = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);
const IconFood = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
);
const IconYoga = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="4" r="1.5"/>
    <path d="M6 12c0-3 2-5 6-5s6 2 6 5"/>
    <path d="M4 19l4-4 4 3 4-3 4 4"/>
    <path d="M8 15v-3"/><path d="M16 15v-3"/>
  </svg>
);
const IconSport = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 8c-2.5 0-4 1.5-4 4s1.5 4 4 4 4-1.5 4-4-1.5-4-4-4z"/>
  </svg>
);
const IconPhone = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconTrendUp = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);
const IconCity = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/>
    <path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/>
    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
  </svg>
);

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const amenities = [
  { Icon: IconBuilding, label: "Club House" },
  { Icon: IconTree,     label: "Landscaped Park" },
  { Icon: IconPool,     label: "Swimming Pool" },
  { Icon: IconCamera,   label: "CCTV with Drone Surveillance" },
  { Icon: IconGate,     label: "Separate Entry & Exit Gate" },
  { Icon: IconShield,   label: "24×7 Secured Living" },
  { Icon: IconRun,      label: "Jogging Track" },
  { Icon: IconKids,     label: "Kids Play Area" },
  { Icon: IconShop,     label: "Retail Shops" },
  { Icon: IconFood,     label: "Food Court" },
  { Icon: IconYoga,     label: "Yoga / Meditation Area" },
  { Icon: IconSport,    label: "Badminton Court" },
];

const advantages = [
  "Clear-title plots with complete due diligence support",
  "Transparent pricing aligned with expressway corridor benchmarks",
  "End-to-end guidance from site visit to registration",
  "Low rise township Living ",
  "Plots offer customisable home solutions ",
  "Lifestyle living ",
  "Strong appreciation and growth potential ",
  "Superior and comfortable connectivity",
];

const projectDetails = [
  { label: "Project Type", value: "Residential township" },
  { label: "Developer",    value: "Haute Developers World Pvt ltd" },
  { label: "Location",     value: "Near Hawa Hawai Restaurant, Delhi–Meerut Expressway, Ghaziabad" },
  { label: "Plot Sizes",   value: "100 sq. yd. & above" },
  { label: "Ownership",    value: "Freehold Property" },
  { label: "Registry",     value: "As per applicable process" },
];

const layoutHighlights = [
  { Icon: IconRoad,    label: "30 ft & 40 ft Wide Internal Roads" },
  { Icon: IconTree,    label: "Landscaped Green Buffers" },
  { Icon: IconBolt,    label: "Underground Utility Ducting" },
  { Icon: IconCompass, label: "Vastu-Compliant Plot Orientation" },
];

const proximityBullets = [
  "Close to NH-24, Delhi-Hapur Expressway",
  "5 Minutes from Lalkuan Ghaziabad",
  "20 Minutes from Sector 62 Noida",
  "25 Minutes from Akshardham Metro Station",
  "15 Minutes from Ghaziabad Railway Station",
  "45 Minutes from Jewar International Airport",
];

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function ExpresswayResidencyPage() {
  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════
          RESPONSIVE STYLES
          Scoped to .er-* classes so nothing bleeds
          into global styles.
      ══════════════════════════════════════════ */}
      <style>{`
        /* ── Shared helpers ── */
        .er-section   { padding: 4.5rem 0; }
        .er-container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; box-sizing: border-box; }
        .er-center    { text-align: center; max-width: 580px; margin: 0 auto 3rem; }

        /* ── Two-col grids ── */
        .er-2col      { display: grid; grid-template-columns: 1fr 1fr;      gap: 4rem; align-items: start; }
        .er-2col-map  { display: grid; grid-template-columns: 1fr 1.15fr;   gap: 4rem; align-items: center; }
        .er-2col-dev  { display: grid; grid-template-columns: 1fr 1fr;      gap: 4rem; align-items: center; }

        /* ── At-a-Glance table ── */
        .er-glance       { max-width: 860px; margin: 0 auto; border: 1px solid rgba(201,144,26,0.2); border-radius: 20px; overflow: hidden; box-shadow: 0 8px 40px rgba(26,74,58,0.06); }
        .er-glance-row   { display: grid; grid-template-columns: 200px 1fr; border-bottom: 1px solid rgba(201,144,26,0.1); }
        .er-glance-row:last-child { border-bottom: none; }
        .er-glance-lbl   { padding: 1.1rem 1.5rem; background: var(--cream); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); display: flex; align-items: center; border-right: 1px solid rgba(201,144,26,0.1); }
        .er-glance-val   { padding: 1.1rem 1.5rem; font-size: 0.92rem; color: var(--charcoal); font-weight: 500; line-height: 1.6; }

        /* ── Map ── */
        .er-map-card   { border-radius: 16px; overflow: hidden; box-shadow: 0 8px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(201,144,26,0.2); position: relative; height: 420px; flex-shrink: 0; }

        /* ── Amenities ── */
        .er-amenities  { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.2rem; }

        /* ── Layout highlights ── */
        .er-highlights { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 2rem; }

        /* ── Stats (developer) ── */
        .er-stats      { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

        /* ── CTA ── */
        .er-cta-wrap   { background: linear-gradient(135deg, var(--forest-dark), var(--forest)); border-radius: 24px; padding: 4rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 2.5rem; position: relative; overflow: hidden; box-shadow: 0 16px 64px rgba(13,47,36,0.3); }
        .er-cta-btns   { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 1rem; align-items: flex-start; }

        /* ══════════════════════════
           TABLET  ≤ 900px
        ══════════════════════════ */
        @media (max-width: 900px) {
          .er-2col,
          .er-2col-map,
          .er-2col-dev  { grid-template-columns: 1fr; gap: 2.5rem; }
          .er-amenities { grid-template-columns: repeat(3, 1fr); }
          .er-highlights{ grid-template-columns: repeat(2, 1fr); }
          .er-map-card  { height: 360px; }
          .er-cta-wrap  { padding: 3rem 2rem; }
        }

        /* ══════════════════════════
           MOBILE  ≤ 600px
        ══════════════════════════ */
        @media (max-width: 600px) {
          .er-section   { padding: 3rem 0; }
          .er-container { padding: 0 1rem; }
          .er-center    { margin-bottom: 1.75rem; }

          /* glance: stack label on top of value */
          .er-glance-row { grid-template-columns: 1fr; }
          .er-glance-lbl { border-right: none; border-bottom: 1px solid rgba(201,144,26,0.1); padding: 0.65rem 1rem; }
          .er-glance-val { padding: 0.7rem 1rem; }

          .er-amenities  { grid-template-columns: repeat(2, 1fr); gap: 0.7rem; }
          .er-highlights { grid-template-columns: 1fr 1fr; gap: 0.7rem; }
          .er-map-card   { height: 270px; }

          /* CTA: full-width stack */
          .er-cta-wrap   { padding: 2rem 1rem; flex-direction: column; }
          .er-cta-btns   { align-items: stretch; width: 100%; }
          .er-cta-btns a { text-align: center; justify-content: center; }

          /* Why invest box padding */
          .er-why-box    { padding: 1.4rem !important; }
        }

        /* ══════════════════════════
           TINY  ≤ 380px
        ══════════════════════════ */
        @media (max-width: 380px) {
          .er-amenities  { grid-template-columns: 1fr 1fr; }
          .er-highlights { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            name: "Expressway Residency – Residential Plots on Delhi–Meerut Expressway",
            description:
              "Government-approved freehold residential plots on the Delhi–Meerut Expressway (NH-24), Ghaziabad. Developed by Haute Developers.",
            url: "https://www.hautedevelopers.com/expressway-residency",
            image:
              "https://www.hautedevelopers.com/assets/expressway-front.png",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Near Hawa Hawai Restaurant, Delhi–Meerut Expressway",
              addressLocality: "Ghaziabad",
              addressRegion: "Uttar Pradesh",
              postalCode: "201206",
              addressCountry: "IN",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
            brand: {
              "@type": "Organization",
              name: "Haute Developers",
              url: "https://www.hautedevelopers.com",
            },
          }),
        }}
      />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        className="hero"
        aria-label="Expressway Residency hero"
        style={{
          background:
            "linear-gradient(135deg, var(--forest-dark) 0%, var(--forest) 50%, #2d5a44 100%)",
        }}
      >
        <div className="hero-slides" aria-hidden="true">
          <div
            className="hero-slide"
            style={{
              backgroundImage: "url('/assets/expressway-front.png')",
              backgroundPosition: "center 35%",
              opacity: 1,
              animation: "none",
            }}
          />
        </div>
        <div className="hero-img-overlay" aria-hidden="true" />
        <div className="hero-bottom-shadow" aria-hidden="true" />

        <div className="hero-content hero-content--new">
          <div className="hero-col-title">
            <div
              style={{
                display: "flex",
                gap: "0.6rem",
                marginBottom: "1.1rem",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  background: "rgba(201,144,26,0.9)",
                  color: "#fff",
                  padding: "0.28rem 0.8rem",
                  borderRadius: "999px",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                <IconPin size={12} color="#fff" /> Ghaziabad, NCR
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  background: "rgba(34,197,94,0.85)",
                  color: "#fff",
                  padding: "0.28rem 0.8rem",
                  borderRadius: "999px",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                ● Pre Launch
              </span>
            </div>
            <p
              style={{
                fontSize: "0.76rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "0.6rem",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}
            >
              Upcoming Integrated Township on NE 3
            </p>
            <h1
              className="hero-title"
              style={{ opacity: 1, transform: "none", animation: "none" }}
            >
              <span
                className="line line-1"
                style={{ opacity: 1, transform: "none", animation: "none" }}
              >
                Expressway <em>Residency</em>
              </span>
            </h1>
            <p
              className="hero-desc--stacked"
              style={{ marginTop: "1.2rem", animation: "none", opacity: 1 }}
            >
              Expressway Residency is an upcoming 75 acres township with 50+
              modern amenities and a perfect blend of luxury, lifestyle and
              comfort offering investors with a choice to book plots and luxury
              villas
            </p>
          </div>
          <div className="hero-col-btns">
            <div className="hero-actions">
              <a href="/#contact" className="btn-primary">
                Book a Site Visit →
              </a>
              <a href="/#contact" className="btn-outline">
                Get Pricing Details
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROJECT DETAILS — AT A GLANCE
      ══════════════════════════════════════════ */}
      <section
        className="er-section"
        aria-labelledby="project-details-heading"
        style={{ background: "var(--white)" }}
      >
        <div className="er-container">
          <div className="er-center">
            <span className="section-label">Project Details</span>
            <h2
              id="project-details-heading"
              style={{
                fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)",
                marginBottom: "0.5rem",
              }}
            >
              At a Glance
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
          </div>

          <div className="er-glance">
            {projectDetails.map((d) => (
              <div key={d.label} className="er-glance-row">
                <div className="er-glance-lbl">{d.label}</div>
                <div className="er-glance-val">{d.value}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.4rem" }}>
            <a
              href="/#contact"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Register Interest &amp; Get a Callback →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY INVEST
      ══════════════════════════════════════════ */}
      <section
        className="er-section"
        aria-labelledby="why-invest-heading"
        style={{
          background: "var(--cream)",
          position: "relative",
          overflow: "hidden",
        }}
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
        <div
          className="er-container"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="er-2col">
            <div>
              <span className="section-label">Why Invest</span>
              <h2
                id="why-invest-heading"
                style={{
                  fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)",
                  lineHeight: 1.15,
                  marginBottom: "0.5rem",
                }}
              >
                The Right Location for Long-Term Investment
              </h2>
              <div className="divider" />
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--gray)",
                  lineHeight: 1.85,
                  marginBottom: "1.2rem",
                }}
              >
                Investing in plots at Expressway Residency is fundamentally different from speculative real estate buying. Value here is driven by verified infrastructure growth, expressway-led development, and planned urban expansion along the Delhi–Meerut corridor — a region emerging as a primary residential and commercial belt, backed by strong government focus and sustained demand.
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--gray)",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                }}
              >
               With the 16-lane Delhi–Meerut Expressway already operational, connectivity to Delhi, Ghaziabad, Noida, and Meerut is a reality today. Upcoming metro extensions, logistics hubs, and industrial zones are steadily transforming this corridor into a future-ready urban destination.
              </p>
              <blockquote
                style={{
                  borderLeft: "3px solid var(--gold)",
                  paddingLeft: "1.4rem",
                  margin: "0 0 2rem",
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                  color: "var(--charcoal)",
                  lineHeight: 1.65,
                }}
              >
                "Early investors stand to benefit the most as expressway
                infrastructure, metro connectivity, and commercial developments
                move from expansion to full-scale utilization."
              </blockquote>
              <a href="/#contact" className="btn-dark">
                Talk to Our Investment Team →
              </a>
            </div>

            <div>
              <div
                className="er-why-box"
                style={{
                  background: "var(--white)",
                  border: "1px solid rgba(201,144,26,0.2)",
                  borderRadius: "20px",
                  padding: "2.2rem",
                  boxShadow: "0 8px 40px rgba(26,74,58,0.08)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    color: "var(--charcoal)",
                    marginBottom: "1.4rem",
                  }}
                >
                  Key Advantages
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.9rem",
                  }}
                >
                  {advantages.map((a) => (
                    <div
                      key={a}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.8rem",
                      }}
                    >
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          background: "var(--forest)",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "0.05rem",
                        }}
                      >
                        <IconCheck size={14} color="white" />
                      </div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.9rem",
                          color: "var(--charcoal)",
                          lineHeight: 1.65,
                          fontWeight: 500,
                        }}
                      >
                        {a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LOCATION ADVANTAGE
          Left: italic accent label + bold heading + bullet list
          Right: Google Map card
      ══════════════════════════════════════════ */}
      <section
        className="er-section"
        aria-labelledby="location-heading"
        style={{ background: "var(--cream)" }}
      >
        <div className="er-container">
          <div className="er-2col-map">
            {/* LEFT */}
            <div>
              <div
                style={{
                  borderLeft: "3px solid var(--gold)",
                  paddingLeft: "1rem",
                  marginBottom: "1.4rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "1.1rem",
                    color: "var(--gold)",
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  Location Advantage
                </p>
              </div>
              <h2
                id="location-heading"
                style={{
                  fontSize: "clamp(1.65rem, 3vw, 2.6rem)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "var(--charcoal)",
                  lineHeight: 1.2,
                  marginBottom: "1.8rem",
                }}
              >
                Expressway Residency enjoys a prime location at NH-24,
                Ghaziabad, Uttar Pradesh
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                }}
              >
                {proximityBullets.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      fontSize: "0.95rem",
                      color: "var(--charcoal)",
                      fontWeight: 500,
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        width: "7px",
                        height: "7px",
                        minWidth: "7px",
                        borderRadius: "50%",
                        background: "var(--gold)",
                        display: "inline-block",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — Map */}
            <div className="er-map-card">
              <div/>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.123456789!2d77.4850!3d28.7050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf33ebb2a7351%3A0x4e08c11e7abf3002!2sExpressway%20Residency!5e0!3m2!1sen!2sin!4v1775802565878!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Expressway Residency Location Map — NH-24 Delhi Meerut Expressway, Ghaziabad, Uttar Pradesh"
                style={{
                  width: "100%",
                  height: "100%",
                  border: 0,
                  display: "block",
                  filter: "saturate(0.85) contrast(1.05)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SITE PLAN
      ══════════════════════════════════════════ */}
      <section
        className="er-section"
        aria-labelledby="layout-heading"
        style={{ background: "var(--white)" }}
      >
        <div className="er-container">
          <div className="er-center">
            <span className="section-label">Layout Overview</span>
            <h2 id="layout-heading">Project Site Plan</h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p
              style={{
                fontSize: "0.92rem",
                color: "var(--gray)",
                lineHeight: 1.8,
              }}
            >
              Designed for practical residential use, long-term access, and
              future utility integration — with wide internal roads, green
              buffers, and dedicated amenity zones.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(201,144,26,0.2)",
              boxShadow: "0 8px 48px rgba(26,74,58,0.1)",
            }}
          >
            <img
              src="/assets/expressway.png"
              alt="Expressway Residency master plan and site layout — Delhi Meerut Expressway Ghaziabad"
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
                minHeight: "220px",
                maxHeight: "520px",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                padding: "2rem 1.5rem 1.5rem",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
                <p
                  style={{
                    color: "var(--gold)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  Vastu-Friendly Site Plan
                </p>
                <h3
                  style={{
                    color: "#fff",
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                    margin: "0.3rem 0 0",
                  }}
                >
                  Expressway Residency Layout
                </h3>
              </div>
              <a href="/#contact" className="btn-primary">
                Receive a return call →
              </a>
            </div>
          </div>

          <div className="er-highlights">
            {layoutHighlights.map((h) => (
              <div
                key={h.label}
                style={{
                  background: "var(--white)",
                  border: "1px solid rgba(201,144,26,0.2)",
                  borderRadius: "14px",
                  padding: "1.2rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.85rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    minWidth: "40px",
                    background: "rgba(201,144,26,0.1)",
                    border: "1px solid rgba(201,144,26,0.25)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h.Icon size={20} color="var(--gold)" />
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.82rem",
                    color: "var(--charcoal)",
                    fontWeight: 600,
                    lineHeight: 1.5,
                    paddingTop: "0.2rem",
                  }}
                >
                  {h.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AMENITIES
      ══════════════════════════════════════════ */}
      <section
        className="er-section"
        aria-labelledby="amenities-heading"
        style={{
          background: "var(--forest-dark)",
          position: "relative",
          overflow: "hidden",
        }}
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
        <div
          className="er-container"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="er-center" style={{ maxWidth: 560 }}>
            <span className="section-label" style={{ color: "var(--gold)" }}>
              Expressway Residency Amenities
            </span>
            <h2 id="amenities-heading" style={{ color: "#fff" }}>
              Future-Ready Infrastructure Designed for Modern Living
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.92rem",
                lineHeight: 1.8,
              }}
            >
              Every amenity is planned to support a complete, comfortable
              lifestyle — from daily wellness to community recreation.
            </p>
          </div>

          <div className="er-amenities">
            {amenities.map((a) => (
              <article
                key={a.label}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "1.5rem 1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "0.8rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background:
                      "linear-gradient(90deg, var(--gold), transparent)",
                    opacity: 0.5,
                  }}
                />
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "rgba(201,144,26,0.15)",
                    border: "1px solid rgba(201,144,26,0.3)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <a.Icon size={20} color="var(--gold)" />
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {a.label}
                </h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT DEVELOPER
      ══════════════════════════════════════════ */}
      <section
        className="er-section"
        aria-labelledby="developer-heading"
        style={{ background: "var(--white)" }}
      >
        <div className="er-container">
          <div className="er-2col-dev">
            <div>
              <span className="section-label">About the Developer</span>
              <h2
                id="developer-heading"
                style={{
                  fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)",
                  marginBottom: "0.5rem",
                }}
              >
                Built by{" "}
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
                  Haute Developers
                </em>
              </h2>
              <div className="divider" />
              <p
                style={{
                  fontSize: "0.93rem",
                  color: "var(--gray)",
                  lineHeight: 1.85,
                  marginBottom: "1.2rem",
                }}
              >
                With over 15 years of experience developing premium residential
                communities across NCR, Dehradun, Vrindavan, and Dholera, Haute
                Developers has earned the trust of more than 5,000 families.
                Every project is backed by clear documentation, community-first
                planning, and a commitment to on-time delivery.
              </p>
              <p
                style={{
                  fontSize: "0.93rem",
                  color: "var(--gray)",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                }}
              >
                Expressway Residency continues that legacy — bringing
                structured, transparent plot development to one of NCR's
                highest-growth corridors.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="/#about" className="btn-dark">
                  About Haute Developers →
                </a>
                <a href="/#contact" className="btn-primary">
                  Get in Touch →
                </a>
              </div>
            </div>

            <div className="er-stats">
              {[
                { Icon: IconTrendUp, num: "15+", label: "Years of Experience" },
                { Icon: IconKids, num: "5000+", label: "Happy Families" },
                { Icon: IconCity, num: "500+", label: "Acres Developed" },
                { Icon: IconPin, num: "7+", label: "Cities" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "var(--cream)",
                    border: "1px solid rgba(201,144,26,0.2)",
                    borderRadius: "16px",
                    padding: "1.6rem 1.2rem",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background:
                        "linear-gradient(90deg, var(--gold), var(--gold-light), transparent)",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "0.6rem",
                    }}
                  >
                    <s.Icon size={20} color="var(--gold)" />
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.2rem",
                      fontWeight: 700,
                      color: "var(--forest)",
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--gray)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginTop: "0.4rem",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA BANNER
      ══════════════════════════════════════════ */}
      <section
        className="er-section"
        aria-label="Final call to action"
        style={{ background: "var(--cream)", paddingBottom: "5rem" }}
      >
        <div className="er-container">
          <div className="er-cta-wrap">
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
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-80px",
                right: "-80px",
                width: "400px",
                height: "400px",
                background:
                  "radial-gradient(circle, rgba(201,144,26,0.12) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 1, maxWidth: "560px" }}>
              <p
                style={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 700,
                  marginBottom: "0.8rem",
                  fontFamily: "var(--font-body)",
                }}
              >
                Limited Inventory — Register Now
              </p>
              <h2
                style={{
                  color: "#fff",
                  fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)",
                  marginBottom: "0.8rem",
                  lineHeight: 1.15,
                }}
              >
                Ready to Invest in{" "}
                <em style={{ color: "var(--gold-pale)", fontStyle: "italic" }}>
                  Expressway Residency?
                </em>
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Speak to our team for pricing details, payment plans, and to
                schedule your complimentary site visit. Our advisors guide you
                through every step — from plot selection to registration.
              </p>
            </div>

            <div className="er-cta-btns">
              <a
                href="/#contact"
                className="btn-primary"
                style={{ fontSize: "0.95rem", padding: "1rem 2.2rem" }}
              >
                Book a Site Visit →
              </a>
              <a
                href="tel:+918383073291"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <IconPhone size={15} color="rgba(255,255,255,0.65)" /> +91 83830
                73291 — Call directly
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}