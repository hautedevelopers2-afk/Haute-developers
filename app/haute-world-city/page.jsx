// Place this file at: app/haute-world-city/page.jsx

"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import PopupLeadModal from "../../components/PopupLeadModal";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import ContactForm from "../../components/ContactForm";
import ExpresswayBlog from "../../components/ExpresswayBlog";

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
const IconArrowRight = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const IconPlusMinus = ({ size = 18, color = "currentColor", isOpen = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    {!isOpen && <line x1="12" y1="5" x2="12" y2="19"/>}
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
        position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.88)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", cursor: "zoom-out",
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen image view"
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute", top: "1.2rem", right: "1.2rem", background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.25)", borderRadius: "50%", width: "44px", height: "44px",
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff",
          fontSize: "1.3rem", lineHeight: 1,
        }}
        aria-label="Close fullscreen view"
      >
        ✕
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", borderRadius: "12px",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)", cursor: "default",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   REVEAL-ON-SCROLL WRAPPER
───────────────────────────────────────── */
function RevealItem({ className = "", style = {}, children }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} hwc-block-anim${inView ? " hwc-inview-item" : ""}`} style={style}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────
   FAQ ROW
───────────────────────────────────────── */
function FaqRow({ q, a, isOpen, onToggle }) {
  return (
    <div className="hwc-faq-row">
      <button onClick={onToggle} className="hwc-faq-btn" aria-expanded={isOpen}>
        <span className="hwc-faq-q">{q}</span>
        <span style={{ flexShrink: 0, color: "var(--gold)" }}>
          <IconPlusMinus size={17} isOpen={isOpen} />
        </span>
      </button>
      {isOpen && (
        <div className="hwc-faq-a">
          <p style={{ margin: 0 }}>{a}</p>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const amenities = [
  { Icon: IconBuilding, label: "Grand Club House", body: "A central clubhouse for community events, celebrations, and everyday gathering." },
  { Icon: IconTree, label: "Landscaped Gardens & Parks", body: "Curated green spaces and walking gardens woven through the township." },
  { Icon: IconPool, label: "Swimming Pool", body: "A dedicated pool zone for residents to unwind and stay active." },
  { Icon: IconCamera, label: "AI-Enabled Smart Surveillance", body: "Intelligent camera coverage across common areas for round-the-clock monitoring." },
  { Icon: IconGate, label: "Secured Gated Entry & Exit", body: "Controlled, single-point entry and exit for a safer, quieter community." },
  { Icon: IconShield, label: "24×7 Security", body: "On-ground security personnel supported by surveillance infrastructure." },
  { Icon: IconRun, label: "Jogging & Cycling Track", body: "A dedicated track for morning runs, walks, and cycling within the township." },
  { Icon: IconKids, label: "Kids Play Zone", body: "A safe, dedicated play area designed for younger residents." },
  { Icon: IconShop, label: "Retail & Commercial Zone", body: "Everyday retail and services planned within easy walking distance." },
  { Icon: IconWifi, label: "Fibre-Optic Connectivity", body: "High-speed digital infrastructure built in from day one, in step with Dholera's smart-city backbone." },
  { Icon: IconYoga, label: "Yoga & Wellness Centre", body: "A calm, dedicated space for yoga, meditation, and wellness routines." },
  { Icon: IconSun, label: "Solar-Powered Infrastructure", body: "Renewable-energy-backed common infrastructure, aligned with the region's solar push." },
];

const projectHighlights = [
  { title: "Freehold Plots, Clear Title", body: "Every plot at Haute World City is freehold, with complete title documentation and due-diligence support." },
  { title: "Inside India's First Greenfield Smart City", body: "Located within Dholera SIR — a smart city planned from the ground up, not retrofitted onto an existing town." },
  { title: "Backed by the DMIC", body: "Part of the central and state government-backed Delhi–Mumbai Industrial Corridor initiative." },
  { title: "Near the Upcoming International Airport", body: "Positioned to benefit from Dholera International Airport as passenger and cargo operations come online." },
  { title: "Direct Expressway & Highway Access", speed: true, body: "High-speed road connectivity via the Ahmedabad–Dholera corridor, cutting travel time to Ahmedabad." },
  { title: "Semiconductor & Industrial Investment Influx", body: "Large-scale manufacturing and semiconductor investment in DSIR is expected to drive long-term demand for land." },
  { title: "Smart City ICT Infrastructure", body: "Underground utilities, fibre connectivity, and intelligent traffic and utility management built into the region's design." },
  { title: "Plots From 200 Sq. Yd.", body: "Flexible plot sizes to suit first-time buyers, long-term investors, and end users planning a future home." },
];

const advantages = [
  "Freehold plots with clear title and complete documentation",
  "Located inside India's first Greenfield smart city",
  "Backed by central & state government DMIC project",
  "Proximity to upcoming Dholera International Airport",
  "High-speed national highway & expressway access",
  "Growing industrial & semiconductor investment influx",
  "Future-proof smart city ICT infrastructure",
  "Long-term appreciation potential in a planned SIR",
];

const projectDetails = [
  { label: "Project Type", value: "Residential Township — Plotted Development" },
  { label: "Developer", value: "Haute World Developers World Pvt Ltd" },
  { label: "Location", value: "Dholera Special Investment Region (SIR), Ahmedabad District, Gujarat" },
  { label: "Plot Sizes", value: "200 sq. yd. & above" },
  { label: "Ownership", value: "Freehold Property" },
  { label: "Registry", value: "As per applicable process" },
  { label: "Approvals", value: "NA / NOC / Title Clear" },
];

const layoutHighlights = [
  { Icon: IconRoad, label: "30 ft & 40 ft Wide Internal Roads" },
  { Icon: IconTree, label: "Landscaped Green Buffers" },
  { Icon: IconBolt, label: "Underground Utility Ducting" },
  { Icon: IconCompass, label: "Vastu-Compliant Plot Orientation" },
];

const dholeraMilestones = [
  { Icon: IconPlane, title: "International Airport", desc: "Dholera International Airport — under construction — is set to become one of India's largest Greenfield airports, connecting the region to global markets." },
  { Icon: IconFactory, title: "Semiconductor Hub", desc: "Major semiconductor and electronics manufacturers are establishing fabrication plants within Dholera SIR, anchoring the region's industrial identity." },
  { Icon: IconRoad, title: "DMIC Expressway", desc: "The dedicated Delhi–Mumbai Industrial Corridor freight and expressway network provides direct, high-speed access to two of India's biggest economic centres." },
  { Icon: IconWifi, title: "Smart ICT Infrastructure", desc: "Underground utilities, city-wide fibre, intelligent traffic management, and smart metering are built into Dholera's design from day one." },
  { Icon: IconSun, title: "Renewable Energy Zone", desc: "A large-scale solar park powers Dholera with clean energy, positioning it among the first smart cities built around renewables from the ground up." },
  { Icon: IconDroplet, title: "World-Class Utilities", desc: "Planned water supply, sewage treatment, and drainage systems designed for a city of two million residents." },
  { Icon: IconBriefcase, title: "Large-Scale Employment Hub", desc: "Dholera SIR is projected to generate hundreds of thousands of direct and indirect jobs across manufacturing, electronics, logistics, and services." },
];

const proximityBullets = [
  "Located in Dholera Special Investment Region (SIR), Gujarat",
  "~100 km from Ahmedabad City Centre",
  "Direct access via the Ahmedabad–Dholera corridor",
  "On the Delhi–Mumbai Industrial Corridor (DMIC)",
  "Positioned near the upcoming Dholera International Airport",
  "Near the Bhavnagar–Ahmedabad rail corridor",
];

const faqs = [
  {
    q: "Where exactly is Haute World City located?",
    a: "Haute World City is located inside the Dholera Special Investment Region (SIR) in Ahmedabad District, Gujarat — roughly 100 km from Ahmedabad, on India's Delhi–Mumbai Industrial Corridor.",
  },
  {
    q: "Are the plots at Haute World City freehold?",
    a: "Yes. Every plot is freehold property, backed by clear-title documentation and due-diligence support at every stage of the booking process.",
  },
  {
    q: "What plot sizes are available?",
    a: "Plots start at 200 sq. yd. and above, giving buyers flexibility whether they're investing, planning a future home, or looking for a larger parcel.",
  },
  {
    q: "Why is Dholera considered a strong long-term investment location?",
    a: "Dholera is India's first planned Greenfield smart city, backed by the central and state governments under the DMIC. It combines an upcoming international airport, expressway connectivity, and a growing wave of industrial and semiconductor investment — factors that typically support land value appreciation over the long term.",
  },
  {
    q: "Is Haute World City a gated, secured community?",
    a: "Yes. The township is planned with secured gated entry and exit, 24×7 security personnel, and AI-enabled smart surveillance across common areas.",
  },
  {
    q: "Who is developing Haute World City?",
    a: "Haute World City is developed by Haute World Developers, extending their track record of residential communities into Dholera Smart City.",
  },
];

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function HauteWorldCityPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <>
      <Navbar />
      <PopupLeadModal pageName="Haute World City" projectName="Haute World City, Dholera" />

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
        .hwc-center    { text-align: center; max-width: 620px; margin: 0 auto 3rem; }

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
        .hwc-map-card { border-radius: 16px; overflow: hidden; box-shadow: 0 8px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(201,144,26,0.2); height: 420px; cursor: zoom-in; position: relative; }
        .hwc-map-card img { width: 100%; height: 100%; object-fit: cover; display: block; filter: saturate(0.85) contrast(1.05); transition: transform 0.35s ease; }
        .hwc-map-card:hover img { transform: scale(1.03); }
        .hwc-map-hint { position: absolute; bottom: 1rem; right: 1rem; background: rgba(0,0,0,0.55); color: #fff; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; padding: 0.35rem 0.85rem; border-radius: 999px; pointer-events: none; display: flex; align-items: center; gap: 0.4rem; }

        /* Project Highlights */
        .hwc-highlight-grid { display: grid; grid-template-columns: 1fr; gap: 1px; background: rgba(13,47,36,0.08); border: 1px solid rgba(13,47,36,0.08); margin-top: 2.5rem; }
        .hwc-highlight-item { background: var(--white); padding: 1.5rem 1.6rem; display: flex; gap: 1rem; align-items: flex-start; }
        .hwc-highlight-mark { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--forest); color: #fff; display: flex; align-items: center; justify-content: center; }
        .hwc-highlight-item h3 { font-family: var(--font-display); font-weight: 500; font-size: 1.05rem; margin: 0 0 0.4rem; color: var(--charcoal); }
        .hwc-highlight-item p { margin: 0; font-size: 0.85rem; color: var(--gray); line-height: 1.6; }
        @media (min-width: 768px) { .hwc-highlight-grid { grid-template-columns: 1fr 1fr; } }

        /* Key Advantages card */
        .hwc-adv-card { position: relative; background: linear-gradient(155deg, var(--forest-dark) 0%, var(--forest) 100%); border-radius: 24px; padding: 2.6rem 2.2rem; overflow: hidden; box-shadow: 0 24px 64px rgba(13,47,36,0.35), inset 0 1px 0 rgba(255,255,255,0.06); border: 1px solid rgba(201,144,26,0.25); }
        .hwc-adv-card::before { content: ''; position: absolute; top: -40%; right: -30%; width: 70%; height: 70%; background: radial-gradient(circle, rgba(201,144,26,0.22) 0%, transparent 70%); pointer-events: none; }
        .hwc-adv-eyebrow { position: relative; z-index: 1; font-family: var(--font-body); font-size: 0.68rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold-pale); opacity: 0.85; margin-bottom: 0.6rem; display: block; }
        .hwc-adv-title { position: relative; z-index: 1; font-family: var(--font-display); font-style: italic; font-weight: 600; font-size: 1.65rem; color: #fff; margin-bottom: 1.6rem; }
        .hwc-adv-list { position: relative; z-index: 1; display: flex; flex-direction: column; }
        .hwc-adv-row { display: flex; align-items: flex-start; gap: 1.1rem; padding: 0.95rem 0; border-bottom: 1px solid rgba(255,255,255,0.09); }
        .hwc-adv-row:last-child { border-bottom: none; }
        .hwc-adv-num { flex-shrink: 0; font-family: var(--font-display); font-weight: 700; font-size: 1rem; color: var(--gold); min-width: 26px; opacity: 0.9; }
        .hwc-adv-row p { margin: 0; font-size: 0.92rem; color: rgba(255,255,255,0.88); line-height: 1.6; font-weight: 500; }

        /* Amenities */
        .hwc-amenities { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.2rem; }
        .hwc-amenity-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 1.5rem 1.2rem; display: flex; flex-direction: column; align-items: flex-start; gap: 0.7rem; position: relative; overflow: hidden; }
        .hwc-amenity-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, var(--gold), transparent); opacity: 0.5; }

        /* Dholera milestones */
        .hwc-milestones{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }

        /* Layout highlights */
        .hwc-highlights{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 2rem; }

        /* Stats */
        .hwc-stats     { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

        /* FAQ */
        .hwc-faq-box  { max-width: 720px; margin: 1.8rem auto 0; border-radius: 18px; overflow: hidden; background: var(--white); box-shadow: 0 20px 60px rgba(0,0,0,0.08); border: 1px solid rgba(201,144,26,0.14); }
        .hwc-faq-row  { border-bottom: 1px solid rgba(201,144,26,0.14); }
        .hwc-faq-row:last-child { border-bottom: none; }
        .hwc-faq-btn  { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.15rem 1.5rem; background: none; border: none; cursor: pointer; text-align: left; }
        .hwc-faq-q    { font-family: var(--font-body); font-weight: 600; font-size: 0.95rem; color: var(--charcoal); }
        .hwc-faq-a    { padding: 0 1.5rem 1.35rem; font-size: 0.87rem; color: var(--gray); line-height: 1.75; }

        /* Contact + Map */
        .hwc-contact-wrap { border: 1px solid rgba(201,144,26,0.2); border-radius: 20px; overflow: hidden; display: grid; grid-template-columns: 1fr; box-shadow: 0 8px 40px rgba(26,74,58,0.08); }
        .hwc-contact-map  { position: relative; min-height: 340px; background: var(--cream); }
        .hwc-contact-map iframe { width: 100%; height: 100%; min-height: 340px; border: 0; display: block; filter: saturate(0.85) contrast(1.05); }
        .hwc-contact-form-panel { background: var(--white); padding: 2.2rem 1.5rem; }
        .hwc-contact-form-panel .contact-form-card { background: transparent !important; border: none !important; box-shadow: none !important; padding: 0 !important; border-radius: 0 !important; }
        @media (min-width: 992px) {
          .hwc-contact-wrap { grid-template-columns: 1fr 1fr; }
          .hwc-contact-map { min-height: 100%; }
          .hwc-contact-form-panel { padding: 3rem; }
        }

        /* CTA */
        .hwc-cta-wrap  { background: linear-gradient(135deg, var(--forest-dark), var(--forest)); border-radius: 24px; padding: 4rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 2.5rem; position: relative; overflow: hidden; box-shadow: 0 16px 64px rgba(13,47,36,0.3); }
        .hwc-cta-btns  { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 1rem; align-items: flex-start; }

        /* Blog (styles required by the imported ExpresswayBlog component) */
        .er-blog-head  { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 1.2rem; margin-bottom: 1rem; }
        .er-blog-grid  { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-top: 2rem; }
        .er-blog-card  { background: var(--white); border: 1px solid rgba(201,144,26,0.18); border-radius: 16px; display: flex; flex-direction: column; overflow: hidden; text-decoration: none; box-shadow: 0 4px 20px rgba(26,74,58,0.06); transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .er-blog-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(26,74,58,0.12); }
        .er-blog-image { position: relative; height: 190px; overflow: hidden; background: var(--cream); }
        .er-blog-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .er-blog-card:hover .er-blog-image img { transform: scale(1.06); }
        .er-blog-body  { padding: 1.5rem 1.5rem 1.7rem; display: flex; flex-direction: column; gap: 0.6rem; }
        .er-blog-meta  { font-size: 0.68rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--gold); font-weight: 700; }
        .er-blog-card h3 { font-family: var(--font-display); font-weight: 600; font-size: 1.05rem; margin: 0; line-height: 1.35; color: var(--charcoal); }
        .er-blog-card p  { font-size: 0.85rem; color: var(--gray); line-height: 1.6; margin: 0; }
        .er-blog-read  { margin-top: 0.3rem; display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.78rem; font-weight: 700; color: var(--gold); }
        .er-blog-empty { margin-top: 2rem; padding: 2.5rem; text-align: center; border: 1px dashed rgba(201,144,26,0.25); color: var(--gray); font-size: 0.9rem; border-radius: 12px; }
        @media (min-width: 640px) { .er-blog-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 992px) { .er-blog-grid { grid-template-columns: repeat(3, 1fr); } }

        /* Scroll reveal */
        .hwc-block-anim { opacity: 0; transform: translateY(20px); transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1); }
        .hwc-block-anim.hwc-inview-item { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) {
          .hwc-block-anim { opacity: 1 !important; transform: none !important; transition: none !important; }
        }

        /* ══ TABLET ≤ 900px ══ */
        @media (max-width: 900px) {
          .hwc-2col, .hwc-2col-map, .hwc-2col-dev { grid-template-columns: 1fr; gap: 2.5rem; }
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
          .hwc-adv-card  { padding: 1.8rem !important; }
        }

        @media (max-width: 380px) {
          .hwc-amenities  { grid-template-columns: 1fr 1fr; }
          .hwc-highlights { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* JSON-LD: RealEstateListing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            name: "Haute World City – Freehold Plots in Dholera Smart City",
            description:
              "Freehold residential plots in Dholera SIR by Haute World Developers. India's first Greenfield smart city on the Delhi–Mumbai Industrial Corridor, Gujarat.",
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
              name: "Haute World Developers",
              url: "https://www.hautedevelopers.com",
            },
          }),
        }}
      />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* JSON-LD: Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hautedevelopers.com/" },
              { "@type": "ListItem", position: 2, name: "Haute World City", item: "https://www.hautedevelopers.com/haute-world-city" },
            ],
          }),
        }}
      />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        className="hero"
        aria-label="Haute World City hero"
        style={{ background: "linear-gradient(135deg, var(--forest-dark) 0%, var(--forest) 50%, #2d5a44 100%)" }}
      >
        <div className="hero-slides" aria-hidden="true">
          <div
            className="hero-slide"
            style={{ backgroundImage: "url('/assets/dholera.png')", backgroundPosition: "center 40%", opacity: 1, animation: "none" }}
          />
        </div>
        <div className="hero-img-overlay" aria-hidden="true" />
        <div className="hero-bottom-shadow" aria-hidden="true" />

        <div className="hero-content hero-content--new">
          <div className="hero-col-title">
            <h1 className="hero-title" style={{ opacity: 1, transform: "none", animation: "none" }}>
              <span className="line line-1" style={{ opacity: 1, transform: "none", animation: "none" }}>
                Haute <em>World City</em>
              </span>
            </h1>

            <p className="hero-desc--stacked" style={{ marginTop: "1.2rem", animation: "none", opacity: 1 }}>
              Haute World City is Haute World Developers' landmark investment in India's most ambitious project —
              the Dholera Special Investment Region. Freehold residential plots inside India's first planned
              Greenfield smart city, backed by the Central Government's Delhi–Mumbai Industrial Corridor initiative.
            </p>
          </div>

          <div className="hero-col-btns">
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Book a Site Visit →</a>
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
      <section id="about" className="hwc-section" aria-labelledby="project-details-heading" style={{ background: "var(--white)" }}>
        <div className="hwc-container">
          <div className="hwc-2col">
            <div>
              <span className="section-label">Project Details</span>
              <h2 id="project-details-heading" style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)", marginBottom: "1rem" }}>
                At a Glance
              </h2>
              <div className="divider" style={{ margin: "1rem 0" }} />

              <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.9, marginBottom: "1.2rem" }}>
                Haute World City is a residential township — plotted development — brought to you by
                <strong style={{ color: "var(--charcoal)" }}> Haute World Developers World Pvt Ltd</strong>, located
                inside the Dholera Special Investment Region (SIR) in Ahmedabad District, Gujarat. The project
                offers freehold plots starting at <strong style={{ color: "var(--charcoal)" }}>200 sq. yd. and above</strong>,
                giving buyers the flexibility to choose a size that fits their investment goals or future home plans.
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.9, marginBottom: "2rem" }}>
                Every plot at Haute World City is <strong style={{ color: "var(--charcoal)" }}>freehold property</strong>,
                backed by complete registry documentation as per the applicable process, and clear
                NA / NOC / Title Clear approvals — ensuring a transparent, hassle-free ownership experience from day one.
              </p>

              <a href="#contact" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Register Interest &amp; Get a Callback →
              </a>
            </div>

            <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 40px rgba(26,74,58,0.1), 0 0 0 1px rgba(201,144,26,0.2)" }}>
              <img
                src="https://res.cloudinary.com/dpbitfczf/image/upload/v1786535098/Dholera_vhnhnn.webp"
                alt="Haute World City — Project Details, Dholera Smart City, Gujarat"
                style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DHOLERA SMART CITY — WHY IT'S DIFFERENT
      ══════════════════════════════════════════ */}
      <section id="dholera" className="hwc-section" aria-labelledby="dholera-heading" style={{ background: "var(--cream)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(201,144,26,0.04) 0, rgba(201,144,26,0.04) 1px, transparent 0, transparent 50%)", backgroundSize: "40px 40px" }} />

        <div className="hwc-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hwc-center" style={{ maxWidth: 640 }}>
            <span className="section-label">About Dholera Smart City</span>
            <h2 id="dholera-heading" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)", lineHeight: 1.2 }}>
              India's Most Ambitious Urban Project — And It's Already Happening
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.85 }}>
              Dholera Special Investment Region (SIR) is a Greenfield smart city developed under India's flagship
              Delhi–Mumbai Industrial Corridor (DMIC) initiative. Planned to house millions of residents and generate
              large-scale employment, it is already attracting semiconductor investment, global manufacturers, and
              major infrastructure spending.
            </p>
          </div>

          <div className="hwc-milestones">
            {dholeraMilestones.map((m) => (
              <RevealItem key={m.title}>
                <article
                  style={{
                    background: "var(--white)", border: "1px solid rgba(201,144,26,0.2)", borderRadius: "16px",
                    padding: "1.8rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.85rem",
                    position: "relative", overflow: "hidden", height: "100%", boxSizing: "border-box",
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, var(--gold), transparent)", opacity: 0.6 }} />
                  <div style={{ width: "46px", height: "46px", background: "rgba(201,144,26,0.1)", border: "1px solid rgba(201,144,26,0.25)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <m.Icon size={22} color="var(--gold)" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 700, color: "var(--charcoal)", margin: 0, lineHeight: 1.3 }}>
                    {m.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.83rem", color: "var(--gray)", lineHeight: 1.7 }}>
                    {m.desc}
                  </p>
                </article>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROJECT HIGHLIGHTS
      ══════════════════════════════════════════ */}
      <section id="highlights" className="hwc-section" aria-labelledby="highlights-heading" style={{ background: "var(--white)" }}>
        <div className="hwc-container">
          <div className="hwc-center">
            <span className="section-label">Project Highlights</span>
            <h2 id="highlights-heading" style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)", marginBottom: "0.5rem" }}>
              What Sets Haute World City Apart
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
          </div>

          <div className="hwc-highlight-grid">
            {projectHighlights.map((h) => (
              <RevealItem key={h.title} className="hwc-highlight-item">
                <span className="hwc-highlight-mark"><IconCheck size={13} /></span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.body}</p>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY INVEST
      ══════════════════════════════════════════ */}
      <section id="why-invest" className="hwc-section" aria-labelledby="why-invest-heading" style={{ background: "var(--cream)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(201,144,26,0.04) 0, rgba(201,144,26,0.04) 1px, transparent 0, transparent 50%)", backgroundSize: "40px 40px" }} />
        <div className="hwc-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hwc-2col">
            <div>
              <span className="section-label">Why Invest</span>
              <h2 id="why-invest-heading" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)", lineHeight: 1.15, marginBottom: "0.5rem" }}>
                The Right Time to Buy in India's Greenfield Smart City of the Future
              </h2>
              <div className="divider" />
              <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.85, marginBottom: "1.2rem" }}>
                Dholera SIR represents a rare real estate opportunity: significant government infrastructure
                investment, combined with private-sector spending on semiconductor fabs, logistics parks, and
                commercial zones, is steadily shaping land demand across the region.
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.85, marginBottom: "2rem" }}>
                Plots purchased today in Haute World City are an investment in a city whose foundations, approvals,
                and government backing are already in place. As with most planned smart-city developments, early
                entrants typically have the longest runway to benefit from infrastructure completion.
              </p>
              <blockquote style={{ borderLeft: "3px solid var(--gold)", paddingLeft: "1.4rem", margin: "0 0 2rem", fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--charcoal)", lineHeight: 1.65 }}>
                "Dholera is not a future plan — it is an unfolding reality. Those who invest in its early chapters
                stand to benefit the most as infrastructure moves from construction to full-scale use."
              </blockquote>
              <a href="#contact" className="btn-dark">Talk to Our Investment Team →</a>
            </div>

            <div>
              <div className="hwc-adv-card">
                <span className="hwc-adv-eyebrow">Why Choose Us</span>
                <h3 className="hwc-adv-title">Key Advantages</h3>
                <div className="hwc-adv-list">
                  {advantages.map((a, i) => (
                    <div key={a} className="hwc-adv-row">
                      <span className="hwc-adv-num">{String(i + 1).padStart(2, "0")}</span>
                      <p>{a}</p>
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
      <section id="location" className="hwc-section" aria-labelledby="location-heading" style={{ background: "var(--forest-dark)" }}>
        <div className="hwc-container">
          <div className="hwc-2col-map">
            <div>
              <div style={{ borderLeft: "3px solid var(--gold)", paddingLeft: "1rem", marginBottom: "1.4rem" }}>
                <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--gold)", margin: 0, fontWeight: 500 }}>
                  Location Advantage
                </p>
              </div>
              <h2 id="location-heading" style={{ fontSize: "clamp(1.65rem, 3vw, 2.6rem)", fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "1.8rem" }}>
                Haute World City sits inside Dholera SIR — Gujarat's most strategically placed growth zone
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {proximityBullets.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.95rem", color: "rgba(255,255,255,0.85)", fontWeight: 500, lineHeight: 1.5 }}>
                    <span style={{ width: "7px", height: "7px", minWidth: "7px", borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="hwc-map-card"
              onClick={() => setLightboxOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="View location map in fullscreen"
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setLightboxOpen(true); }}
            >
              <img src="/assets/dholera-map.png" alt="Haute World City location map — Dholera Special Investment Region, Gujarat" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SITE PLAN / LAYOUT
      ══════════════════════════════════════════ */}
      <section id="masterplan" className="hwc-section" aria-labelledby="layout-heading" style={{ background: "var(--white)" }}>
        <div className="hwc-container">
          <div className="hwc-center">
            <span className="section-label">Layout Overview</span>
            <h2 id="layout-heading">Project Site Plan</h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ fontSize: "0.92rem", color: "var(--gray)", lineHeight: 1.8 }}>
              A thoughtfully planned residential township designed for smart city living — with wide internal roads,
              green buffers, underground utilities, and a lifestyle-focused amenity zone.
            </p>
          </div>

          <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(201,144,26,0.2)", boxShadow: "0 8px 48px rgba(26,74,58,0.1)" }}>
            <img
              src="https://res.cloudinary.com/dpbitfczf/image/upload/v1786612020/Haute-World-City-Layout_zxtpqp.webp"
              alt="Haute World City master plan and site layout — Dholera Smart City, Gujarat"
              style={{ width: "100%", display: "block", objectFit: "contain" }}
            />
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
      <section id="amenities" className="hwc-section" aria-labelledby="amenities-heading" style={{ background: "var(--forest-dark)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(201,144,26,0.04) 0, rgba(201,144,26,0.04) 1px, transparent 0, transparent 50%)", backgroundSize: "40px 40px" }} />
        <div className="hwc-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hwc-center" style={{ maxWidth: 560 }}>
            <span className="section-label" style={{ color: "var(--gold)" }}>Haute World City Amenities</span>
            <h2 id="amenities-heading" style={{ color: "#fff" }}>
              Smart Living Infrastructure for a Future-Ready Community
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.92rem", lineHeight: 1.8 }}>
              Every amenity is designed to complement Dholera's smart city vision — delivering modern comfort,
              wellness, and community living within a secure, self-sufficient township.
            </p>
          </div>

          <div className="hwc-amenities">
            {amenities.map((a) => (
              <RevealItem key={a.label} className="hwc-amenity-card">
                <div style={{ width: "44px", height: "44px", background: "rgba(201,144,26,0.15)", border: "1px solid rgba(201,144,26,0.3)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <a.Icon size={20} color="var(--gold)" />
                </div>
                <h3 style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.3 }}>
                  {a.label}
                </h3>
                <p style={{ margin: 0, fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                  {a.body}
                </p>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section id="faq" className="hwc-section" aria-labelledby="faq-heading" style={{ background: "var(--cream)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ position: "absolute", top: "50%", left: "50%", width: "100%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%) scale(1.25)" }}
          >
            <source src="https://res.cloudinary.com/dpbitfczf/video/upload/v1786616177/Dholera_video_view_xe2xlu.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hwc-container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "left", maxWidth: 620, margin: "0 0 1.5rem" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)" }}>
              <span style={{ width: "28px", height: "2px", background: "var(--gold)", display: "inline-block" }} />
              Got Questions?
            </span>
            <h2 id="faq-heading" style={{ margin: "0.5rem 0 0", color: "#fff", textShadow: "0 2px 20px rgba(0,0,0,0.35)" }}>
              Frequently Asked <em style={{ fontStyle: "italic", color: "var(--gold-pale, #f0dca8)" }}>Questions</em>
            </h2>
          </div>

          <div className="hwc-faq-box" style={{ margin: "1.8rem 0 0" }}>
            {faqs.map((f, i) => (
              <FaqRow
                key={f.q}
                q={f.q}
                a={f.a}
                isOpen={openFaqIndex === i}
                onToggle={() => setOpenFaqIndex(openFaqIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BLOG
      ══════════════════════════════════════════ */}
      <section id="blogs" className="hwc-section" aria-labelledby="blogs-heading" style={{ background: "var(--cream)", borderTop: "1px solid rgba(201,144,26,0.18)" }}>
        <div className="hwc-container">
          <ExpresswayBlog />
        </div>
      </section>
      

      {/* ══════════════════════════════════════════
          CONTACT + MAP
      ══════════════════════════════════════════ */}
      <section id="contact" className="hwc-section" aria-labelledby="contact-heading" style={{ background: "var(--white)" }}>
        <div className="hwc-container">
          <div className="hwc-center" style={{ maxWidth: 640 }}>
            <span className="section-label" style={{ color: "var(--gold)" }}>Limited Inventory — Register Now</span>
            <h2 id="contact-heading" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)" }}>
              Ready to Invest in <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Haute World City?</em>
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.8 }}>
              Speak to our team for pricing details, payment plans, and to schedule your complimentary site visit —
              or call us directly at{" "}
              <a href="tel:+919911807193" style={{ color: "var(--gold)", fontWeight: 700, textDecoration: "none" }}>
                +91 99118 07193
              </a>.
            </p>
          </div>

          <div className="hwc-contact-wrap" style={{ marginTop: "3rem" }}>
            <div className="hwc-contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.244006931797!2d72.0967483!3d22.000527599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f377700fa687f%3A0xe9521a2d868d8afb!2sHaute%20World%20City!5e1!3m2!1sen!2sin!4v1786614222376!5m2!1sen!2sin"
                title="Haute World City Location Map — Dholera Special Investment Region, Gujarat"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="hwc-contact-form-panel">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}