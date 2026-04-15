// Place this file at: app/haute-world-city/page.jsx

"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

// export const metadata = {
//   title: "Haute World City – Premium Plots in Dholera Smart City | Haute Developers",
//   description:
//     "Invest in Haute World City — Haute Developers' landmark residential township in Dholera Smart City (SIR), Gujarat. Freehold plotted units in India's first greenfield smart city on the Delhi–Mumbai Industrial Corridor. Book your plot today.",
//   keywords:
//     "Haute World City Dholera, Dholera Smart City plots, Dholera SIR investment, DMIC plots Gujarat, residential plots Dholera, Haute Developers Dholera, Dholera greenfield smart city, freehold plots Gujarat",
//   alternates: { canonical: "https://www.hautedevelopers.com/haute-world-city" },
//   openGraph: {
//     title: "Haute World City – Premium Plots in Dholera Smart City",
//     description:
//       "India's first greenfield smart city. Freehold residential plots by Haute Developers in Dholera SIR, Gujarat — on the Delhi–Mumbai Industrial Corridor.",
//     url: "https://www.hautedevelopers.com/haute-world-city",
//     siteName: "Haute Developers",
//     images: [
//       {
//         url: "/assets/dholera.png",
//         width: 1200,
//         height: 630,
//         alt: "Haute World City — Dholera Smart City aerial view",
//       },
//     ],
//     type: "website",
//   },
// };

/* ─────────────────────────────────────────
   SVG ICON COMPONENTS
───────────────────────────────────────── */
const IconPin = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);
const IconBriefcase = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line x1="12" y1="12" x2="12" y2="12"/>
    <path d="M2 12h20"/>
  </svg>
);
const IconCheck = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconBolt = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconTree = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22v-7"/><path d="M9 15H5l7-7 7 7h-4"/><path d="M7 11H3l9-9 9 9h-4"/>
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
const IconRoad = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 17l3-10h12l3 10"/><path d="M12 7v10"/><path d="M9 17l1-3"/><path d="M15 17l-1-3"/>
  </svg>
);
const IconPlane = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
  </svg>
);
const IconFactory = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 20V8l6 4V8l6 4V8l6-4v16H2z"/><path d="M6 20v-4h4v4"/>
  </svg>
);
const IconSun = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
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
const IconPool = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
    <path d="M14 7V4"/><path d="M18 7V4"/><path d="M14 4h4"/>
  </svg>
);
const IconKids = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="5" r="3"/><path d="M6 21v-2a6 6 0 0 1 12 0v2"/>
    <path d="M9 14l-2 7"/><path d="M15 14l2 7"/>
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
const IconWifi = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
  </svg>
);
const IconDroplet = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
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
const IconShop = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

/* ─────────────────────────────────────────
   LIGHTBOX COMPONENT
───────────────────────────────────────── */
function Lightbox({ src, alt, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.88)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        cursor: "zoom-out",
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Location map fullscreen view"
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "1.2rem",
          right: "1.2rem",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#fff",
          fontSize: "1.3rem",
          lineHeight: 1,
        }}
        aria-label="Close fullscreen map"
      >
        ✕
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "90vw",
          maxHeight: "85vh",
          objectFit: "contain",
          borderRadius: "12px",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
          cursor: "default",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const amenities = [
  { Icon: IconBuilding,  label: "Grand Club House" },
  { Icon: IconTree,      label: "Landscaped Gardens & Parks" },
  { Icon: IconPool,      label: "Swimming Pool" },
  { Icon: IconCamera,    label: "AI-Enabled Smart Surveillance" },
  { Icon: IconGate,      label: "Secured Gated Entry & Exit" },
  { Icon: IconShield,    label: "24×7 Security" },
  { Icon: IconRun,       label: "Jogging & Cycling Track" },
  { Icon: IconKids,      label: "Kids Play Zone" },
  { Icon: IconShop,      label: "Retail & Commercial Zone" },
  { Icon: IconWifi,      label: "Fibre-Optic Connectivity" },
  { Icon: IconYoga,      label: "Yoga & Wellness Centre" },
  { Icon: IconSun,       label: "Solar-Powered Infrastructure" },
];

const advantages = [
  "Freehold plots with clear title and complete documentation",
  "Located inside India's first greenfield smart city",
  "Backed by central & state government DMIC project",
  "Proximity to upcoming Dholera International Airport",
  "High-speed national highway & expressway access",
  "Massive industrial & semiconductor investment influx",
  "Future-proof smart city ICT infrastructure",
  "Long-term appreciation in a rapidly developing SIR",
];

const projectDetails = [
  { label: "Project Type",  value: "Residential Township — Plotted Development" },
  { label: "Developer",     value: "Haute Developers World Pvt Ltd" },
  { label: "Location",      value: "Dholera Special Investment Region (SIR), Ahmedabad District, Gujarat" },
  { label: "Plot Sizes",    value: "200 sq. yd. & above" },
  { label: "Ownership",     value: "Freehold Property" },
  { label: "Registry",      value: "As per applicable process" },
  { label: "Approvals",     value: "NA / NOC / Title Clear" },
];

const layoutHighlights = [
  { Icon: IconRoad,    label: "30 ft & 40 ft Wide Internal Roads" },
  { Icon: IconTree,    label: "Landscaped Green Buffers" },
  { Icon: IconBolt,    label: "Underground Utility Ducting" },
  { Icon: IconCompass, label: "Vastu-Compliant Plot Orientation" },
];

const dholeraMilestones = [
  {
    Icon: IconPlane,
    title: "International Airport",
    desc: "Dholera International Airport — under construction — will become one of India's largest greenfield airports, transforming the region into a global aviation hub.",
  },
  {
    Icon: IconFactory,
    title: "Semiconductor Hub",
    desc: "Tata Electronics & global giants are setting up chip fabrication plants in Dholera SIR, making it India's answer to Taiwan's semiconductor ecosystem.",
  },
  {
    Icon: IconRoad,
    title: "DMIC Expressway",
    desc: "The dedicated Delhi–Mumbai Industrial Corridor freight and expressway network provides direct, high-speed access to two of India's biggest economic centres.",
  },
  {
    Icon: IconWifi,
    title: "Smart ICT Infrastructure",
    desc: "100% underground utilities, city-wide fibre optic network, intelligent traffic management, and smart metering — all built into Dholera's DNA from day one.",
  },
  {
    Icon: IconSun,
    title: "Renewable Energy Zone",
    desc: "Gujarat's abundant solar corridor powers Dholera with clean energy, making it one of the world's first smart cities designed around renewable energy from the ground up.",
  },
  {
    Icon: IconDroplet,
    title: "World-Class Utilities",
    desc: "Planned water supply, sewage treatment, and drainage systems designed for a city of 2 million residents — future-ready and built to global standards.",
  },
  {
    Icon: IconBriefcase,
    title: "10 Lakh+ Employment Hub",
    desc: "Dholera SIR is projected to generate over 10 lakh direct and indirect jobs across manufacturing, semiconductors, logistics, IT, and services — making it one of India's largest planned employment corridors.",
  },
];

const proximityBullets = [
  "Located in Dholera Special Investment Region (SIR), Gujarat",
  "~100 km from Ahmedabad City Centre",
  "Approx. 30 Minutes from Dholera International Airport (upcoming)",
  "Direct access via Ahmedabad–Dholera Expressway (SH-70A)",
  "On the Delhi–Mumbai Industrial Corridor (DMIC)",
  "Near the Bhavnagar–Ahmedabad Rail Corridor",
];

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function HauteWorldCityPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <Navbar />

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          src="/assets/dholera-map.png"
          alt="Haute World City location map — Dholera Special Investment Region, Gujarat"
          onClose={() => setLightboxOpen(false)}
        />
      )}

      {/* ══════════════════════════════════════════
          SCOPED STYLES — .hwc-* prefix
      ══════════════════════════════════════════ */}
      <style>{`
        .hwc-section   { padding: 4.5rem 0; }
        .hwc-container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; box-sizing: border-box; }
        .hwc-center    { text-align: center; max-width: 580px; margin: 0 auto 3rem; }

        .hwc-2col      { display: grid; grid-template-columns: 1fr 1fr;     gap: 4rem; align-items: start; }
        .hwc-2col-map  { display: grid; grid-template-columns: 1fr 1.15fr;  gap: 4rem; align-items: center; }
        .hwc-2col-dev  { display: grid; grid-template-columns: 1fr 1fr;     gap: 4rem; align-items: center; }

        /* At-a-Glance */
        .hwc-glance       { max-width: 860px; margin: 0 auto; border: 1px solid rgba(201,144,26,0.2); border-radius: 20px; overflow: hidden; box-shadow: 0 8px 40px rgba(26,74,58,0.06); }
        .hwc-glance-row   { display: grid; grid-template-columns: 200px 1fr; border-bottom: 1px solid rgba(201,144,26,0.1); }
        .hwc-glance-row:last-child { border-bottom: none; }
        .hwc-glance-lbl   { padding: 1.1rem 1.5rem; background: var(--cream); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); display: flex; align-items: center; border-right: 1px solid rgba(201,144,26,0.1); }
        .hwc-glance-val   { padding: 1.1rem 1.5rem; font-size: 0.92rem; color: var(--charcoal); font-weight: 500; line-height: 1.6; }

        /* Map image card */
        .hwc-map-card {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(201,144,26,0.2);
          height: 420px;
          cursor: zoom-in;
          position: relative;
        }
        .hwc-map-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: saturate(0.85) contrast(1.05);
          transition: transform 0.35s ease;
        }
        .hwc-map-card:hover img { transform: scale(1.03); }
        .hwc-map-hint {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          background: rgba(0,0,0,0.55);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          padding: 0.35rem 0.85rem;
          border-radius: 999px;
          pointer-events: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        /* Amenities */
        .hwc-amenities { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.2rem; }

        /* Dholera milestones */
        .hwc-milestones{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }

        /* Layout highlights */
        .hwc-highlights{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 2rem; }

        /* Stats */
        .hwc-stats     { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

        /* CTA */
        .hwc-cta-wrap  { background: linear-gradient(135deg, var(--forest-dark), var(--forest)); border-radius: 24px; padding: 4rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 2.5rem; position: relative; overflow: hidden; box-shadow: 0 16px 64px rgba(13,47,36,0.3); }
        .hwc-cta-btns  { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 1rem; align-items: flex-start; }

        /* ══ TABLET ≤ 900px ══ */
        @media (max-width: 900px) {
          .hwc-2col,
          .hwc-2col-map,
          .hwc-2col-dev  { grid-template-columns: 1fr; gap: 2.5rem; }
          .hwc-amenities { grid-template-columns: repeat(3, 1fr); }
          .hwc-milestones{ grid-template-columns: repeat(2, 1fr); }
          .hwc-highlights{ grid-template-columns: repeat(2, 1fr); }
          .hwc-map-card  { height: 360px; }
          .hwc-cta-wrap  { padding: 3rem 2rem; }
        }

        /* ══ MOBILE ≤ 600px ══ */
        @media (max-width: 600px) {
          .hwc-section   { padding: 3rem 0; }
          .hwc-container { padding: 0 1rem; }
          .hwc-center    { margin-bottom: 1.75rem; }
          .hwc-glance-row{ grid-template-columns: 1fr; }
          .hwc-glance-lbl{ border-right: none; border-bottom: 1px solid rgba(201,144,26,0.1); padding: 0.65rem 1rem; }
          .hwc-glance-val{ padding: 0.7rem 1rem; }
          .hwc-amenities { grid-template-columns: repeat(2, 1fr); gap: 0.7rem; }
          .hwc-milestones{ grid-template-columns: 1fr; }
          .hwc-highlights{ grid-template-columns: 1fr 1fr; gap: 0.7rem; }
          .hwc-map-card  { height: 270px; }
          .hwc-cta-wrap  { padding: 2rem 1rem; flex-direction: column; }
          .hwc-cta-btns  { align-items: stretch; width: 100%; }
          .hwc-cta-btns a{ text-align: center; justify-content: center; }
          .hwc-why-box   { padding: 1.4rem !important; }
        }

        @media (max-width: 380px) {
          .hwc-amenities  { grid-template-columns: 1fr 1fr; }
          .hwc-highlights { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            name: "Haute World City – Premium Residential Plots in Dholera Smart City",
            description:
              "Freehold residential plots in Dholera SIR by Haute Developers. India's first greenfield smart city on the Delhi–Mumbai Industrial Corridor, Gujarat.",
            url: "https://www.hautedevelopers.com/haute-world-city",
            image: "https://www.hautedevelopers.com/assets/dholera.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Dholera Special Investment Region",
              addressLocality: "Dholera",
              addressRegion: "Gujarat",
              postalCode: "382460",
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
        aria-label="Haute World City hero"
        style={{
          background:
            "linear-gradient(135deg, var(--forest-dark) 0%, var(--forest) 50%, #2d5a44 100%)",
        }}
      >
        <div className="hero-slides" aria-hidden="true">
          <div
            className="hero-slide"
            style={{
              backgroundImage: "url('/assets/dholera.png')",
              backgroundPosition: "center 40%",
              opacity: 1,
              animation: "none",
            }}
          />
        </div>
        <div className="hero-img-overlay" aria-hidden="true" />
        <div className="hero-bottom-shadow" aria-hidden="true" />

        <div className="hero-content hero-content--new">
          <div className="hero-col-title">
            <div style={{ display: "flex", gap: "0.6rem", marginBottom: "1.1rem", flexWrap: "wrap" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", background: "rgba(201,144,26,0.9)", color: "#fff", padding: "0.28rem 0.8rem", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em" }}>
                <IconPin size={12} color="#fff" /> Dholera SIR, Gujarat
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", background: "rgba(34,197,94,0.85)", color: "#fff", padding: "0.28rem 0.8rem", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em" }}>
                ● Pre Launch
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", background: "rgba(59,130,246,0.85)", color: "#fff", padding: "0.28rem 0.8rem", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em" }}>
                ★ India's First Smart City
              </span>
            </div>

            <p style={{ fontSize: "0.76rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.6rem", fontFamily: "var(--font-body)", fontWeight: 600 }}>
              Residential Township · Dholera Smart City
            </p>

            <h1 className="hero-title" style={{ opacity: 1, transform: "none", animation: "none" }}>
              <span className="line line-1" style={{ opacity: 1, transform: "none", animation: "none" }}>
                Haute <em>World City</em>
              </span>
            </h1>

            <p className="hero-desc--stacked" style={{ marginTop: "1.2rem", animation: "none", opacity: 1 }}>
              Haute World City is Haute Developers' landmark investment in India's most ambitious project — the Dholera Special Investment Region. Freehold residential plots inside India's first planned greenfield smart city, backed by the Central Government's Delhi–Mumbai Industrial Corridor initiative.
            </p>
          </div>

          <div className="hero-col-btns">
            <div className="hero-actions">
              <a href="/#contact" className="btn-primary">Book a Site Visit →</a>
              <a href="/#contact" className="btn-outline">Get Pricing Details</a>
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
      <section className="hwc-section" aria-labelledby="project-details-heading" style={{ background: "var(--white)" }}>
        <div className="hwc-container">
          <div className="hwc-center">
            <span className="section-label">Project Details</span>
            <h2 id="project-details-heading" style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)", marginBottom: "0.5rem" }}>
              At a Glance
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
          </div>

          <div className="hwc-glance">
            {projectDetails.map((d) => (
              <div key={d.label} className="hwc-glance-row">
                <div className="hwc-glance-lbl">{d.label}</div>
                <div className="hwc-glance-val">{d.value}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.4rem" }}>
            <a href="/#contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Register Interest &amp; Get a Callback →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DHOLERA SMART CITY — WHY IT'S DIFFERENT
      ══════════════════════════════════════════ */}
      <section className="hwc-section" aria-labelledby="dholera-heading" style={{ background: "var(--cream)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(201,144,26,0.04) 0, rgba(201,144,26,0.04) 1px, transparent 0, transparent 50%)", backgroundSize: "40px 40px" }} />

        <div className="hwc-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hwc-center" style={{ maxWidth: 640 }}>
            <span className="section-label">About Dholera Smart City</span>
            <h2 id="dholera-heading" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)", lineHeight: 1.2 }}>
              India's Most Ambitious Urban Project — And It's Already Happening
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.85 }}>
              Dholera Special Investment Region (SIR) is a 920 sq. km. greenfield smart city developed under India's flagship Delhi–Mumbai Industrial Corridor (DMIC) initiative. Planned to house 2 million residents and generate over 800,000 jobs, it is already attracting semiconductor giants, global manufacturers, and billions in FDI.
            </p>
          </div>

          <div className="hwc-milestones">
            {dholeraMilestones.map((m) => (
              <article
                key={m.title}
                style={{
                  background: "var(--white)",
                  border: "1px solid rgba(201,144,26,0.2)",
                  borderRadius: "16px",
                  padding: "1.8rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, var(--gold), transparent)", opacity: 0.6 }} />
                <div style={{ width: "46px", height: "46px", background: "rgba(201,144,26,0.1)", border: "1px solid rgba(201,144,26,0.25)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <m.Icon size={22} color="var(--gold)" />
                </div>
                <h4 style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 700, color: "var(--charcoal)", margin: 0, lineHeight: 1.3 }}>
                  {m.title}
                </h4>
                <p style={{ margin: 0, fontSize: "0.83rem", color: "var(--gray)", lineHeight: 1.7 }}>
                  {m.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY INVEST
      ══════════════════════════════════════════ */}
      <section className="hwc-section" aria-labelledby="why-invest-heading" style={{ background: "var(--white)", position: "relative", overflow: "hidden" }}>
        <div className="hwc-container">
          <div className="hwc-2col">
            {/* LEFT */}
            <div>
              <span className="section-label">Why Invest</span>
              <h2 id="why-invest-heading" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)", lineHeight: 1.15, marginBottom: "0.5rem" }}>
                The Right Time to Buy in India's greenfield Smart City of the Future
              </h2>
              <div className="divider" />
              <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.85, marginBottom: "1.2rem" }}>
                Dholera SIR represents a once-in-a-generation real estate opportunity. With the Indian government committing over ₹60,000 crore in infrastructure investment, and the private sector adding tens of thousands of crores more through semiconductor fabs, logistics parks, and commercial zones, land values in Dholera are on an irreversible upward trajectory.
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.85, marginBottom: "2rem" }}>
                Plots purchased today in Haute World City are investments in a city that does not yet exist at full scale — but whose foundations, approvals, and government backing are firmly in place. Early entrants consistently capture the highest long-term returns in planned smart city developments worldwide.
              </p>
              <blockquote style={{ borderLeft: "3px solid var(--gold)", paddingLeft: "1.4rem", margin: "0 0 2rem", fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--charcoal)", lineHeight: 1.65 }}>
                "Dholera is not a future plan — it is an unfolding reality. Those who invest in its early chapters will write the most rewarding stories."
              </blockquote>
              <a href="/#contact" className="btn-dark">Talk to Our Investment Team →</a>
            </div>

            {/* RIGHT */}
            <div>
              <div
                className="hwc-why-box"
                style={{ background: "var(--cream)", border: "1px solid rgba(201,144,26,0.2)", borderRadius: "20px", padding: "2.2rem", boxShadow: "0 8px 40px rgba(26,74,58,0.08)" }}
              >
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 600, color: "var(--charcoal)", marginBottom: "1.4rem" }}>
                  Key Advantages
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                  {advantages.map((a) => (
                    <div key={a} style={{ display: "flex", alignItems: "flex-start", gap: "0.8rem" }}>
                      <div style={{ width: "28px", height: "28px", background: "var(--forest)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.05rem" }}>
                        <IconCheck size={14} color="white" />
                      </div>
                      <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--charcoal)", lineHeight: 1.65, fontWeight: 500 }}>{a}</p>
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
      ══════════════════════════════════════════ */}
      <section className="hwc-section" aria-labelledby="location-heading" style={{ background: "var(--cream)" }}>
        <div className="hwc-container">
          <div className="hwc-2col-map">
            {/* LEFT */}
            <div>
              <div style={{ borderLeft: "3px solid var(--gold)", paddingLeft: "1rem", marginBottom: "1.4rem" }}>
                <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--gold)", margin: 0, fontWeight: 500 }}>
                  Location Advantage
                </p>
              </div>
              <h2 id="location-heading" style={{ fontSize: "clamp(1.65rem, 3vw, 2.6rem)", fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--charcoal)", lineHeight: 1.2, marginBottom: "1.8rem" }}>
                Haute World City sits inside Dholera SIR — Gujarat's most strategically placed growth zone
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {proximityBullets.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.95rem", color: "var(--charcoal)", fontWeight: 500, lineHeight: 1.5 }}>
                    <span style={{ width: "7px", height: "7px", minWidth: "7px", borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
                    {item}
                  </li>
                ))}
              </ul>
              {/* "Get Exact Location Details" button removed */}
            </div>

            {/* RIGHT — Clickable map image with lightbox */}
            <div
              className="hwc-map-card"
              onClick={() => setLightboxOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="View location map in fullscreen"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setLightboxOpen(true);
              }}
            >
              <img
                src="/assets/dholera-map.png"
                alt="Haute World City location map — Dholera Special Investment Region, Gujarat"
              />
              <div className="hwc-map-hint">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="11" y1="8" x2="11" y2="14"/>
                  <line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
                Click to enlarge
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SITE PLAN / LAYOUT
      ══════════════════════════════════════════ */}
      <section className="hwc-section" aria-labelledby="layout-heading" style={{ background: "var(--white)" }}>
        <div className="hwc-container">
          <div className="hwc-center">
            <span className="section-label">Layout Overview</span>
            <h2 id="layout-heading">Project Site Plan</h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ fontSize: "0.92rem", color: "var(--gray)", lineHeight: 1.8 }}>
              A thoughtfully planned residential township designed for smart city living — with wide internal roads, green buffers, underground utilities, and a lifestyle-focused amenity zone.
            </p>
          </div>

          <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(201,144,26,0.2)", boxShadow: "0 8px 48px rgba(26,74,58,0.1)" }}>
            <img
              src="/assets/dholera.png"
              alt="Haute World City master plan and site layout — Dholera Smart City, Gujarat"
              style={{ width: "100%", display: "block", objectFit: "cover", minHeight: "220px", maxHeight: "520px" }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)", padding: "2rem 1.5rem 1.5rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <p style={{ color: "var(--gold)", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, margin: 0 }}>
                  Vastu-Friendly · Smart City Compliant
                </p>
                <h3 style={{ color: "#fff", fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 2.5vw, 1.4rem)", margin: "0.3rem 0 0" }}>
                  Haute World City Layout
                </h3>
              </div>
              <a href="/#contact" className="btn-primary">Request Detailed Layout →</a>
            </div>
          </div>

          <div className="hwc-highlights">
            {layoutHighlights.map((h) => (
              <div key={h.label} style={{ background: "var(--white)", border: "1px solid rgba(201,144,26,0.2)", borderRadius: "14px", padding: "1.2rem", display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
                <div style={{ width: "40px", height: "40px", minWidth: "40px", background: "rgba(201,144,26,0.1)", border: "1px solid rgba(201,144,26,0.25)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <h.Icon size={20} color="var(--gold)" />
                </div>
                <p style={{ margin: 0, fontSize: "0.82rem", color: "var(--charcoal)", fontWeight: 600, lineHeight: 1.5, paddingTop: "0.2rem" }}>{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AMENITIES
      ══════════════════════════════════════════ */}
      <section className="hwc-section" aria-labelledby="amenities-heading" style={{ background: "var(--forest-dark)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(201,144,26,0.04) 0, rgba(201,144,26,0.04) 1px, transparent 0, transparent 50%)", backgroundSize: "40px 40px" }} />
        <div className="hwc-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hwc-center" style={{ maxWidth: 560 }}>
            <span className="section-label" style={{ color: "var(--gold)" }}>Haute World City Amenities</span>
            <h2 id="amenities-heading" style={{ color: "#fff" }}>
              Smart Living Infrastructure for a Future-Ready Community
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.92rem", lineHeight: 1.8 }}>
              Every amenity is designed to complement Dholera's smart city vision — delivering modern comfort, wellness, and community living within a secure, self-sufficient township.
            </p>
          </div>

          <div className="hwc-amenities">
            {amenities.map((a) => (
              <article
                key={a.label}
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.5rem 1.2rem", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.8rem", position: "relative", overflow: "hidden" }}
              >
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, var(--gold), transparent)", opacity: 0.5 }} />
                <div style={{ width: "44px", height: "44px", background: "rgba(201,144,26,0.15)", border: "1px solid rgba(201,144,26,0.3)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <a.Icon size={20} color="var(--gold)" />
                </div>
                <h4 style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.3 }}>
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
      <section className="hwc-section" aria-labelledby="developer-heading" style={{ background: "var(--white)" }}>
        <div className="hwc-container">
          <div className="hwc-2col-dev">
            <div>
              <span className="section-label">About the Developer</span>
              <h2 id="developer-heading" style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)", marginBottom: "0.5rem" }}>
                Built by{" "}
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Haute Developers</em>
              </h2>
              <div className="divider" />
              <p style={{ fontSize: "0.93rem", color: "var(--gray)", lineHeight: 1.85, marginBottom: "1.2rem" }}>
                With over 15 years of experience developing premium residential communities across NCR, Dehradun, Vrindavan, and now Dholera, Haute Developers has earned the trust of more than 5,000 families. Every project is backed by clear documentation, community-first planning, and a commitment to on-time delivery.
              </p>
              <p style={{ fontSize: "0.93rem", color: "var(--gray)", lineHeight: 1.85, marginBottom: "2rem" }}>
                Haute World City marks our most ambitious step yet — taking our track record of delivering quality residential communities into India's most transformational infrastructure project: Dholera Smart City.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="/#about" className="btn-dark">About Haute Developers →</a>
                <a href="/#contact" className="btn-primary">Get in Touch →</a>
              </div>
            </div>

            <div className="hwc-stats">
              {[
                { Icon: IconTrendUp, num: "15+", label: "Years of Experience" },
                { Icon: IconKids,    num: "5000+", label: "Happy Families" },
                { Icon: IconCity,    num: "500+", label: "Acres Developed" },
                { Icon: IconPin,     num: "7+", label: "Cities" },
              ].map((s) => (
                <div key={s.label} style={{ background: "var(--cream)", border: "1px solid rgba(201,144,26,0.2)", borderRadius: "16px", padding: "1.6rem 1.2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, var(--gold), var(--gold-light), transparent)" }} />
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.6rem" }}>
                    <s.Icon size={20} color="var(--gold)" />
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 700, color: "var(--forest)", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--gray)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.4rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="hwc-section" aria-label="Final call to action" style={{ background: "var(--cream)", paddingBottom: "5rem" }}>
        <div className="hwc-container">
          <div className="hwc-cta-wrap">
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(201,144,26,0.04) 0, rgba(201,144,26,0.04) 1px, transparent 0, transparent 50%)", backgroundSize: "40px 40px" }} />
            <div aria-hidden="true" style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(201,144,26,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1, maxWidth: "560px" }}>
              <p style={{ fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: "0.8rem", fontFamily: "var(--font-body)" }}>
                Limited Pre-Launch Inventory — Register Now
              </p>
              <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)", marginBottom: "0.8rem", lineHeight: 1.15 }}>
                Ready to Own a Plot in{" "}
                <em style={{ color: "var(--gold-pale)", fontStyle: "italic" }}>India's Smart City?</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.8, margin: 0 }}>
                Speak to our Dholera investment specialists for pricing details, payment plans, and to schedule your complimentary site visit. Be among the first to secure your plot in Haute World City before prices appreciate further.
              </p>
            </div>

            <div className="hwc-cta-btns">
              <a href="/#contact" className="btn-primary" style={{ fontSize: "0.95rem", padding: "1rem 2.2rem" }}>
                Book a Site Visit →
              </a>
              <a
                href="tel:+918383073291"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}
              >
                <IconPhone size={15} color="rgba(255,255,255,0.65)" /> +91 83830 73291 — Call directly
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