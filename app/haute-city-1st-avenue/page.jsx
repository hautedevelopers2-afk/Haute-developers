// Place this file at: app/haute-city-1st-avenue/page.jsx

"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import PopupLeadModal from "../../components/PopupLeadModal";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import ContactForm from "../../components/ContactForm";

/* ─────────────────────────────────────────
   SVG ICON COMPONENTS
───────────────────────────────────────── */
const IconPin = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
const IconCheck = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconPool = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /><path d="M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    <path d="M14 7V4" /><path d="M18 7V4" /><path d="M14 4h4" />
  </svg>
);
const IconLift = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="6" y="2" width="12" height="20" rx="1.5" />
    <path d="M10 8l2-2 2 2" /><path d="M10 16l2 2 2-2" />
  </svg>
);
const IconTree = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22v-7" /><path d="M9 15H5l7-7 7 7h-4" /><path d="M7 11H3l9-9 9 9h-4" />
  </svg>
);
const IconShield = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7L12 2z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const IconRoad = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 17l3-10h12l3 10" /><path d="M12 7v10" /><path d="M9 17l1-3" /><path d="M15 17l-1-3" />
  </svg>
);
const IconBuilding = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6" /><path d="M9 13h6" /><path d="M9 17h6" />
  </svg>
);
const IconLayout = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="3" y1="9" x2="21" y2="9" />
  </svg>
);
const IconKitchen = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="12" x2="21" y2="12" /><circle cx="7" cy="7.5" r="0.6" fill={color} /><circle cx="10" cy="7.5" r="0.6" fill={color} />
  </svg>
);
const IconPaint = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 11H7a4 4 0 0 0-4 4v0a2 2 0 0 0 2 2h.5a2.5 2.5 0 0 1 2.5 2.5V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a2 2 0 0 1 2-2h6a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4z" />
    <path d="M7 11V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5" />
  </svg>
);
const IconSofa = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 14v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" /><path d="M2 14h20v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" /><path d="M4 19v1" /><path d="M20 19v1" />
  </svg>
);
const IconHome = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 11l9-8 9 8" /><path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
  </svg>
);
const IconCoin = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" /><path d="M9 12h6" /><path d="M12 9v6" />
  </svg>
);
const IconCalendar = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconBank = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 10l9-6 9 6" /><path d="M4 10v10h16V10" /><line x1="9" y1="14" x2="9" y2="18" /><line x1="15" y1="14" x2="15" y2="18" />
  </svg>
);
const IconCompass = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);
const IconPlusMinus = ({ size = 18, color = "currentColor", isOpen = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    {!isOpen && <line x1="12" y1="5" x2="12" y2="19" />}
  </svg>
);

/* ─────────────────────────────────────────
   DUMMY IMAGE LINKS (placeholder — swap for
   real Haute City 1st Avenue photography later)
───────────────────────────────────────── */
const heroImages = [
  "https://i.postimg.cc/sXQtCktQ/real-(1)-0030f6b8e1aa5b985fb2.webp",
  "https://i.postimg.cc/hjzHRkHf/real-(1)-2141e3810cd37cb27f17.webp",
  "https://i.postimg.cc/fLt6QG6x/real-(2)-5cf3439d25625a72cd43.webp",
  "https://i.postimg.cc/Ss2wbBwY/real-(2)-bffd6849d5db0796a25a.webp",
  "https://i.postimg.cc/G28ZnWZF/real-(3)-a96ff1469ef1488e81be.webp",
  "https://i.postimg.cc/3R4PQsPB/real-(3)-fb6617a7896a2b560189.webp",
];

const aboutImage = heroImages[2];

const customizeCards = [
  { Icon: IconLayout, title: "Your Choice Of Layout", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786873088/architectural_floor_plan_design_ydaifa.jpg" },
  { Icon: IconSofa, title: "Your Choice Of Interior", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786875742/luxury_modern_living_kitchen_dv4g0m.jpg" },
  { Icon: IconCompass, title: "Your Choice Of Vastu", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786876182/vastu_compass_direction_chart_uzpanx.jpg" },
];

const amenities = [
  { Icon: IconPool, label: "Personal Swimming Pool", body: "Every villa comes with its own private pool — no sharing, no waiting.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786694345/indoor_swimming_pool_ubdel6.jpg" },
  { Icon: IconLift, label: "Private Lift", body: "A dedicated in-home lift connecting every floor of your villa.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786694080/modern_luxury_house_exterior_eukogt.jpg" },
  { Icon: IconTree, label: "Rooftop Garden", body: "A private rooftop garden on every villa — your own green retreat above the city.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786694260/landscaped_garden_park_nhbegp.jpg" },
  { Icon: IconSofa, label: "Premium Interiors", body: "Finishes and interiors selected by you, built to a premium standard throughout.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786699535/indoor_kids_ball_pool_qg0ttm.webp" },
  { Icon: IconShield, label: "24×7 Gated Security", body: "A fully gated township with round-the-clock security personnel and surveillance.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786695024/haute_world_city_aerial_view_1_so5m3l.jpg" },
  { Icon: IconRoad, label: "Wide Roads & Landscaped Gardens", body: "Generously wide internal roads with landscaped green gardens throughout the community.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786698555/blue_cycling_track_landscaped_park_jdwnir.jpg" },
];

const villaSizes = [
  { size: "1,740", tag: "Perfect For Your Start", image: "https://i.postimg.cc/sXQtCktQ/real-(1)-0030f6b8e1aa5b985fb2.webp" },
  { size: "3,500", tag: "Perfect For Your Family", image: "https://i.postimg.cc/fLt6QG6x/real-(2)-5cf3439d25625a72cd43.webp" },
  { size: "5,500", tag: "Perfect For Your Lifestyle", image: "https://i.postimg.cc/G28ZnWZF/real-(3)-a96ff1469ef1488e81be.webp" },
];

const projectFacts = [
  { n: "01", label: "Project Type", value: "Boutique Villa Community" },
  { n: "02", label: "Developer", value: "Haute World Developers" },
  { n: "03", label: "Location", value: "NE-3, Delhi–Meerut Expressway, Near Hawa Hawai Restaurant" },
  { n: "04", label: "Total Villas", value: "33 Villas in 9 Bigha" },
  { n: "05", label: "Plot Sizes", value: "100 | 150 | 200 | 250 | 300 Sq. Yd." },
  { n: "06", label: "Villa Sizes", value: "1,740 | 3,500 | 5,500 Sq. Ft." },
  { n: "07", label: "Price", value: "₹7,150 Per Sq. Ft." },
  { n: "08", label: "Approvals", value: "Map Approved · RERA Coming Soon" },
];

const advantages = [
  "Fully customisable villas — layout, kitchen, interior & finishing, your choice",
  "Adjacent to the 100-acre Expressway Residency township",
  "Access to club house & major shared amenities",
  "Boutique offering of only 33 villas in 9 bigha",
  "Personal swimming pool, private lift & rooftop garden on every villa",
  "Strategic NE-3 Delhi–Meerut Expressway location",
  "Map approved project, with RERA approval coming soon",
  "Easy payment plan — 50% now, balance at just 1% per month, zero interest",
];

const faqs = [
  { q: "Where is Haute City 1st Avenue located?", a: "Haute City 1st Avenue is strategically located on NE-3, the Delhi–Meerut Expressway, near Hawa Hawai Restaurant — directly adjacent to the 100-acre Expressway Residency township." },
  { q: "How many villas are being offered?", a: "This is a boutique project of only 33 duplex villas spread across 9 bigha, keeping the community exclusive and low density." },
  { q: "What plot and villa sizes are available?", a: "Plots are available in 100, 150, 200, 250 and 300 sq. yd., with villa sizes of 1,740 sq. ft., 3,500 sq. ft. and 5,500 sq. ft." },
  { q: "What is the price per sq. ft.?", a: "Villas at Haute City 1st Avenue are priced at ₹7,150 per sq. ft." },
  { q: "Can I customise my villa?", a: "Yes. Haute City 1st Avenue is built around the idea that your villa should reflect your choices — you can select your own floor plan, elevation, interior, finishing, colours, marble and modular kitchen." },
  { q: "What is the payment plan?", a: "Book your villa with 50% payment upfront, with the remaining balance payable in easy monthly instalments of just 1% per month — with zero interest." },
  { q: "Is a home loan available?", a: "Yes, home loan assistance is available, including from SBI, with low interest rates, easy processing and doorstep assistance." },
  { q: "Will residents get access to the Expressway Residency amenities?", a: "Yes. As a boutique project adjacent to the 100-acre Expressway Residency township, villa owners get access to the club house and major shared amenities of that community." },
  { q: "Is the project RERA approved?", a: "The project currently has map approval in place, with RERA approval expected soon." },
];

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
    <div ref={ref} className={`${className} hca-block-anim${inView ? " hca-inview-item" : ""}`} style={style}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────
   FAQ ROW
───────────────────────────────────────── */
function FaqRow({ q, a, isOpen, onToggle }) {
  return (
    <div className="hca-faq-row">
      <button onClick={onToggle} className="hca-faq-btn" aria-expanded={isOpen}>
        <span className="hca-faq-q">{q}</span>
        <span style={{ flexShrink: 0, color: "var(--gold)" }}>
          <IconPlusMinus size={17} isOpen={isOpen} />
        </span>
      </button>
      {isOpen && (
        <div className="hca-faq-a">
          <p style={{ margin: 0 }}>{a}</p>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function HauteCityFirstAvenuePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <>
      <Navbar />
      <PopupLeadModal pageName="Haute City 1st Avenue" projectName="Haute City 1st Avenue, Delhi–Meerut Expressway" />

      {/* ══════════════════════════════════════════
          SCOPED STYLES — .hca-* prefix
      ══════════════════════════════════════════ */}
      <style>{`
        .hca-section   { padding: 4.5rem 0; }
        .hca-container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; box-sizing: border-box; }
        .hca-center    { text-align: center; max-width: 640px; margin: 0 auto 3rem; }

        .hca-2col      { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }

        /* Hero slideshow */
        .hca-hero-slide { position: absolute; inset: 0; background-size: cover; background-position: center; opacity: 0; transition: opacity 1.4s ease; }
        .hca-hero-slide-active { opacity: 1; }

        /* Pricing strip */
        .hca-price-strip { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin-top: 1.6rem; }
        .hca-price-chip { background: rgba(255,255,255,0.08); border: 1px solid rgba(201,144,26,0.35); border-radius: 999px; padding: 0.55rem 1.2rem; font-size: 0.82rem; font-weight: 600; color: #fff; display: flex; align-items: center; gap: 0.5rem; }

        /* Customise cards */
        .hca-customize-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 3rem; }
        .hca-customize-card { position: relative; border-radius: 16px; overflow: hidden; aspect-ratio: 4 / 3; background: var(--forest-dark, #0d2f24); }
        .hca-customize-card img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.6s ease; }
        .hca-customize-card:hover img { transform: scale(1.06); }
        .hca-customize-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.75) 100%); display: flex; flex-direction: row; align-items: flex-end; justify-content: center; padding: 1.1rem 1.2rem; gap: 0.7rem; }
        .hca-customize-icon { width: 38px; height: 38px; border-radius: 10px; background: rgba(201,144,26,0.2); border: 1px solid rgba(201,144,26,0.45); display: flex; align-items: center; justify-content: center; }
        .hca-customize-card h4 { margin: 0; font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: #fff; text-align: center; }

        /* Villa size cards */
        .hca-size-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 3rem; }
        .hca-size-card { border-radius: 18px; overflow: hidden; background: var(--white); border: 1px solid rgba(201,144,26,0.2); box-shadow: 0 8px 30px rgba(26,74,58,0.08); }
        .hca-size-img { height: 190px; overflow: hidden; }
        .hca-size-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.6s ease; }
        .hca-size-card:hover .hca-size-img img { transform: scale(1.06); }
        .hca-size-body { padding: 1.4rem 1.4rem 1.6rem; text-align: center; }
        .hca-size-num { font-family: var(--font-display); font-weight: 700; font-size: 1.8rem; color: var(--charcoal); }
        .hca-size-unit { font-size: 0.8rem; color: var(--gray); margin-left: 0.3rem; }
        .hca-size-tag { margin-top: 0.5rem; font-size: 0.85rem; font-weight: 600; color: var(--gold); }

        /* At-a-glance facts */
        .hca-facts { border-top: 1px solid rgba(255,255,255,0.15); }
        .hca-fact-row { display: grid; grid-template-columns: 2.2rem 1fr auto; align-items: baseline; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,0.15); }
        .hca-fact-n { font-family: var(--font-mono, monospace); font-size: 0.75rem; color: var(--gold); }
        .hca-fact-label { font-size: 0.9rem; color: rgba(255,255,255,0.7); margin-right: 2rem; }
        .hca-fact-value { font-weight: 600; font-size: 0.92rem; color: var(--gold); text-align: right; }

        /* Payment plan */
        .hca-payment-wrap { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2.5rem; }
        .hca-payment-card { background: var(--white); border: 1px solid rgba(201,144,26,0.2); border-radius: 18px; padding: 2rem 1.6rem; text-align: center; box-shadow: 0 8px 30px rgba(26,74,58,0.06); }
        .hca-payment-icon { width: 54px; height: 54px; border-radius: 50%; background: rgba(201,144,26,0.12); border: 1px solid rgba(201,144,26,0.3); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: var(--gold); }
        .hca-payment-num { font-family: var(--font-display); font-weight: 700; font-size: 1.7rem; color: var(--charcoal); }
        .hca-payment-label { font-size: 0.85rem; color: var(--gray); margin-top: 0.4rem; }

        /* Amenities */
        .hca-amenity-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 3rem; }
        .hca-amenity-card { background: var(--forest-dark, #0d2f24); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; overflow: hidden; display: flex; flex-direction: column; }
        .hca-amenity-img { height: 170px; overflow: hidden; }
        .hca-amenity-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.6s ease; }
        .hca-amenity-card:hover .hca-amenity-img img { transform: scale(1.06); }
        .hca-amenity-body { padding: 1.4rem 1.4rem 1.6rem; display: flex; align-items: flex-start; gap: 0.9rem; }

        /* Key advantages */
        .hca-adv-card { position: relative; background: linear-gradient(155deg, var(--forest-dark, #0d2f24) 0%, var(--forest, #16453a) 100%); border-radius: 24px; padding: 2.6rem 2.2rem; overflow: hidden; box-shadow: 0 24px 64px rgba(13,47,36,0.35); border: 1px solid rgba(201,144,26,0.25); }
        .hca-adv-title { position: relative; z-index: 1; font-family: var(--font-display); font-style: italic; font-weight: 600; font-size: 1.6rem; color: #fff; margin-bottom: 1.6rem; }
        .hca-adv-row { display: flex; align-items: flex-start; gap: 1.1rem; padding: 0.9rem 0; border-bottom: 1px solid rgba(255,255,255,0.09); }
        .hca-adv-row:last-child { border-bottom: none; }
        .hca-adv-num { flex-shrink: 0; font-family: var(--font-display); font-weight: 700; font-size: 1rem; color: var(--gold); min-width: 26px; }
        .hca-adv-row p { margin: 0; font-size: 0.9rem; color: rgba(255,255,255,0.88); line-height: 1.6; font-weight: 500; }

        /* Highlight grid */
        .hca-highlight-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: rgba(13,47,36,0.08); border: 1px solid rgba(13,47,36,0.08); margin-top: 2.5rem; }
        .hca-highlight-item { background: var(--white); padding: 1.4rem 1.5rem; display: flex; gap: 0.9rem; align-items: flex-start; }
        .hca-highlight-mark { flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%; background: var(--forest, #16453a); color: #fff; display: flex; align-items: center; justify-content: center; }
        .hca-highlight-item p { margin: 0; font-size: 0.85rem; color: var(--charcoal); font-weight: 600; line-height: 1.5; }

        /* FAQ */
        .hca-faq-box  { max-width: 700px; margin: 1.8rem 0 0 0 !important; margin-inline: 0 !important; border-radius: 18px; overflow: hidden; background: var(--white); box-shadow: 0 20px 60px rgba(0,0,0,0.08); border: 1px solid rgba(201,144,26,0.14); }
        .hca-faq-row  { border-bottom: 1px solid rgba(201,144,26,0.14); }
        .hca-faq-row:last-child { border-bottom: none; }
        .hca-faq-btn  { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.1rem 1.4rem; background: none; border: none; cursor: pointer; text-align: left; }
        .hca-faq-q    { font-weight: 600; font-size: 0.93rem; color: var(--charcoal); }
        .hca-faq-a    { padding: 0 1.4rem 1.3rem; font-size: 0.86rem; color: var(--gray); line-height: 1.7; }

        /* Contact */
        .hca-contact-wrap { border: 1px solid rgba(201,144,26,0.2); border-radius: 20px; overflow: hidden; display: grid; grid-template-columns: 1fr; box-shadow: 0 8px 40px rgba(26,74,58,0.08); }
        .hca-contact-map  { position: relative; min-height: 340px; background: var(--cream); }
        .hca-contact-map iframe { width: 100%; height: 100%; min-height: 340px; border: 0; display: block; }
        .hca-contact-form-panel { background: var(--white); padding: 2.2rem 1.5rem; }
        .hca-contact-form-panel .contact-form-card { background: transparent !important; border: none !important; box-shadow: none !important; padding: 0 !important; border-radius: 0 !important; }
        @media (min-width: 992px) {
          .hca-contact-wrap { grid-template-columns: 1fr 1fr; }
          .hca-contact-map { min-height: 100%; }
          .hca-contact-form-panel { padding: 3rem; }
        }

        .hca-block-anim { opacity: 0; transform: translateY(20px); transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1); }
        .hca-block-anim.hca-inview-item { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) {
          .hca-block-anim { opacity: 1 !important; transform: none !important; transition: none !important; }
        }

        @media (max-width: 900px) {
          .hca-2col { grid-template-columns: 1fr; gap: 2.5rem; }
          .hca-customize-grid { grid-template-columns: 1fr 1fr; }
          .hca-size-grid { grid-template-columns: 1fr; }
          .hca-payment-wrap { grid-template-columns: 1fr; }
          .hca-amenity-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .hca-highlight-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .hca-section { padding: 3rem 0; }
          .hca-container { padding: 0 1rem; }
          .hca-customize-grid { grid-template-columns: 1fr; }
          .hca-amenity-grid { grid-template-columns: 1fr; }
          .hca-fact-row { grid-template-columns: 1fr; }
          .hca-fact-value { text-align: left; }
        }
      `}</style>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            name: "Haute City 1st Avenue",
            description:
              "Haute City 1st Avenue offers 33 fully customisable duplex villas on NE-3, the Delhi–Meerut Expressway, near Hawa Hawai Restaurant — adjacent to the 100-acre Expressway Residency township. Priced at ₹7,150 per sq. ft.",
            url: "https://www.hautedevelopers.com/haute-city-1st-avenue",
            image: heroImages[0],
            address: {
              "@type": "PostalAddress",
              streetAddress: "NE-3, Delhi–Meerut Expressway, Near Hawa Hawai Restaurant",
              addressLocality: "Ghaziabad",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              availability: "https://schema.org/PreOrder",
            },
            brand: { "@type": "Organization", name: "Haute World Developers", url: "https://www.hautedevelopers.com" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }),
        }}
      />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        className="hero"
        aria-label="Haute City 1st Avenue hero"
        style={{ position: "relative", height: "100vh", minHeight: "600px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "var(--forest-dark, #0d2f24)" }}
      >
        <div
          className="hca-hero-slide hca-hero-slide-active"
          style={{ backgroundImage: `url("https://res.cloudinary.com/dpbitfczf/image/upload/v1786515101/Haute_City_1st_Avenue_1_pqk33t.webp")`, backgroundPosition: "center 20%" }}
          aria-hidden="true"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(13,47,36,0.55) 0%, rgba(13,47,36,0.4) 35%, rgba(13,47,36,0.92) 100%)" }} />

        <div className="hca-container" style={{ position: "relative", zIndex: 2, textAlign: "center", paddingTop: "6rem" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#fff", lineHeight: 1.12, margin: "0 0 1.2rem" }}>
            Haute City <em style={{ color: "var(--gold, #c9902a)", fontStyle: "italic" }}>1st Avenue</em>
          </h1>
          <p style={{ maxWidth: "680px", margin: "0 auto 1.6rem", color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.75 }}>
            33 ultra-luxury duplex villas on NE-3, the Delhi–Meerut Expressway, near Hawa Hawai Restaurant —
            a boutique community adjacent to the 100-acre Expressway Residency township, with full freedom
            to design your villa exactly the way you want it.
          </p>

          

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginTop: "2rem" }}>
            <a href="#contact" className="btn-primary">Book A Site Visit →</a>
            <a href="#customize" className="btn-outline">Design Your Villa →</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════ */}
      <section id="about" className="hca-section" style={{ background: "var(--white)" }}>
        <div className="hca-container">
          <div className="hca-2col">
            <div>
              <span className="section-label">About The Project</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", lineHeight: 1.15, marginBottom: "0.5rem" }}>
                Your Villa, <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Your Choice</em> — Not The Builder's
              </h2>
              <div className="divider" />
              <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.85, marginBottom: "1.2rem" }}>
                Haute City 1st Avenue is a pre-launch, ultra-luxury community of just 33 duplex villas, strategically
                located on NE-3, the Delhi–Meerut Expressway, near Hawa Hawai Restaurant. It sits directly adjacent
                to the 100-acre Expressway Residency township, giving villa owners access to a full-scale club
                house and shared amenities alongside the privacy of their own boutique address.
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.85, marginBottom: "2rem" }}>
                It's your villa — so why should the floor plan, the finishing, or the interior be someone else's
                decision? Haute City 1st Avenue gives you the freedom to choose your own floor plan, elevation,
                interior, finishing, colours, marble and modular kitchen — a villa built entirely around your choices.
              </p>
              <a href="#contact" className="btn-primary">Register Interest &amp; Get A Callback →</a>
            </div>

            <div style={{ borderRadius: "20px", overflow: "hidden", height: "420px", boxShadow: "0 8px 40px rgba(26,74,58,0.1)" }}>
              <img src={aboutImage} alt="Haute City 1st Avenue villa exterior" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROJECT HIGHLIGHTS
      ══════════════════════════════════════════ */}
      <section className="hca-section" style={{ background: "var(--cream)" }}>
        <div className="hca-container">
          <div className="hca-center">
            <span className="section-label">Project Highlights</span>
            <h2 style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)", marginBottom: "0.5rem" }}>What Makes 1st Avenue Different</h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
          </div>

          <div className="hca-highlight-grid">
            {[
              "Boutique community of only 33 villas across 9 bigha",
              "Adjacent to the 100-acre Expressway Residency township",
              "Access to club house & major shared amenities",
              "Fully customisable floor plan, elevation & interior",
              "Personal swimming pool, private lift & rooftop garden",
              "Strategic NE-3 Delhi–Meerut Expressway location",
              "Map approved project — RERA approval coming soon",
              "Easy 50% + 1% per month payment plan, zero interest",
            ].map((h) => (
              <RevealItem key={h} className="hca-highlight-item">
                <span className="hca-highlight-mark"><IconCheck size={13} /></span>
                <p>{h}</p>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DESIGN YOUR OWN VILLA
      ══════════════════════════════════════════ */}
      <section id="customize" className="hca-section" style={{ background: "var(--forest-dark, #0d2f24)" }}>
        <div className="hca-container">
          <div className="hca-center">
            <span className="section-label" style={{ color: "var(--gold)" }}>Design Your Own Villa</span>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)" }}>
              Every Detail, <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Chosen By You</em>
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.92rem", lineHeight: 1.8 }}>
              Haute City 1st Avenue gives you customisable villa options, letting you decide the layout, kitchen,
              wall colour, flooring, interior and elevation of your own home.
            </p>
          </div>

          <div className="hca-customize-grid">
            {customizeCards.map((c) => (
              <RevealItem key={c.title} className="hca-customize-card">
                <img src={c.image} alt={c.title} loading="lazy" />
                <div className="hca-customize-overlay">
                  <h4>{c.title}</h4>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROJECT DETAILS / AT A GLANCE
      ══════════════════════════════════════════ */}
      <section className="hca-section" style={{ background: "var(--forest, #16453a)" }}>
        <div className="hca-container">
          <div className="hca-2col" style={{ alignItems: "start" }}>
            <div>
              <span className="section-label" style={{ color: "var(--gold)" }}>Project Details</span>
              <h2 style={{ color: "#fff", fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)", marginBottom: "1rem" }}>At A Glance</h2>
              <div className="divider" style={{ margin: "1rem 0 2rem" }} />
              <div className="hca-facts">
                {projectFacts.map((f) => (
                  <div key={f.n} className="hca-fact-row">
                    <span className="hca-fact-n">{f.n}</span>
                    <span className="hca-fact-label">{f.label}</span>
                    <span className="hca-fact-value">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.3)" }}>
              <img
                src="https://res.cloudinary.com/dpbitfczf/image/upload/v1786877691/HAUTE_1ST_AVENUE_rl4gbw.jpg"
                alt="Haute City 1st Avenue site layout plan"
                style={{ width: "100%", display: "block", objectFit: "cover" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VILLA SIZE OPTIONS
      ══════════════════════════════════════════ */}
      <section className="hca-section" style={{ background: "var(--white)" }}>
        <div className="hca-container">
          <div className="hca-center">
            <span className="section-label">Choose Your Villa</span>
            <h2 style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)" }}>Bigger Space. Better Life. Best Decision.</h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
          </div>

          <div className="hca-size-grid">
            {villaSizes.map((v) => (
              <RevealItem key={v.size} className="hca-size-card">
                <div className="hca-size-img">
                  <img src={v.image} alt={`${v.size} sq. ft. villa at Haute City 1st Avenue`} loading="lazy" />
                </div>
                <div className="hca-size-body">
                  <span className="hca-size-num">{v.size}<span className="hca-size-unit">SQ. FT.</span></span>
                  <div className="hca-size-tag">{v.tag}</div>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PAYMENT PLAN
      ══════════════════════════════════════════ */}
      <section className="hca-section" style={{ background: "var(--cream)" }}>
        <div className="hca-container">
          <div className="hca-center">
            <span className="section-label">Easy Payment Plan</span>
            <h2 style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)" }}>Book Your Villa The Easy Way</h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ fontSize: "0.92rem", color: "var(--gray)", lineHeight: 1.8 }}>
              No need to pay the full amount upfront — book today with just half, and pay the rest in small
              monthly instalments, with zero interest.
            </p>
          </div>

          <div className="hca-payment-wrap">
            <div className="hca-payment-card">
              <div className="hca-payment-icon"><IconCoin size={26} /></div>
              <div className="hca-payment-num">50%</div>
              <div className="hca-payment-label">Pay Now To Book Your Villa</div>
            </div>
            <div className="hca-payment-card">
              <div className="hca-payment-icon"><IconCalendar size={26} /></div>
              <div className="hca-payment-num">1%</div>
              <div className="hca-payment-label">Of Balance, Per Month</div>
            </div>
            <div className="hca-payment-card">
              <div className="hca-payment-icon"><IconBank size={26} /></div>
              <div className="hca-payment-num">0%</div>
              <div className="hca-payment-label">Interest — Home Loan Also Available</div>
            </div>
          </div>

          <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.85rem", color: "var(--gray)" }}>
            Home loan assistance available with low interest rates, easy processing and doorstep support.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AMENITIES
      ══════════════════════════════════════════ */}
      <section className="hca-section" style={{ background: "var(--forest-dark, #0d2f24)" }}>
        <div className="hca-container">
          <div className="hca-center">
            <span className="section-label" style={{ color: "var(--gold)" }}>Amenities</span>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)" }}>Built For Comfortable, Private Living</h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
          </div>

          <div className="hca-amenity-grid">
            {amenities.map((a) => (
              <RevealItem key={a.label} className="hca-amenity-card">
                <div className="hca-amenity-img">
                  <img src={a.image} alt={a.label} loading="lazy" />
                </div>
                <div className="hca-amenity-body">
                  <div style={{ width: "56px", height: "56px", minWidth: "56px", background: "rgba(201,144,26,0.15)", border: "1px solid rgba(201,144,26,0.3)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <a.Icon size={28} color="var(--gold)" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 700, color: "#fff", margin: "0 0 0.4rem", lineHeight: 1.3 }}>{a.label}</h3>
                    <p style={{ margin: 0, fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{a.body}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY INVEST / KEY ADVANTAGES
      ══════════════════════════════════════════ */}
      <section className="hca-section" style={{ background: "var(--cream)" }}>
        <div className="hca-container">
          <div className="hca-2col">
            <div>
              <span className="section-label">Why Invest</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", lineHeight: 1.15, marginBottom: "0.5rem" }}>
                A Boutique Address On A High-Growth Corridor
              </h2>
              <div className="divider" />
              <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.85, marginBottom: "1.2rem" }}>
                Haute City 1st Avenue sits on NE-3, the Delhi–Meerut Expressway, directly next to the 100-acre
                Expressway Residency township. This corridor has already seen strong price appreciation, and with
                only 33 villas on offer, early buyers get a rare, low-density address with full access to a
                large-scale township's amenities.
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.85, marginBottom: "2rem" }}>
                Combined with an easy payment plan, home loan assistance, and the freedom to design your own villa,
                this is a rare chance to own a fully personalised home in a location with genuine long-term growth
                potential.
              </p>
              <a href="#contact" className="btn-dark">Talk To Our Investment Team →</a>
            </div>

            <div>
              <div className="hca-adv-card">
                <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: "0.6rem" }}>Why Choose Us</span>
                <h3 className="hca-adv-title">Key Advantages</h3>
                <div>
                  {advantages.map((a, i) => (
                    <div key={a} className="hca-adv-row">
                      <span className="hca-adv-num">{String(i + 1).padStart(2, "0")}</span>
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
          FAQ
      ══════════════════════════════════════════ */}
      <section id="faq" className="hca-section" style={{ background: "var(--white)" }}>
        <div className="hca-container">
          <div className="hca-center">
            <span className="section-label">Got Questions?</span>
            <h2 style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)" }}>Frequently Asked Questions</h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
          </div>

          <div className="hca-faq-box">
            {faqs.map((f, i) => (
              <FaqRow key={f.q} q={f.q} a={f.a} isOpen={openFaqIndex === i} onToggle={() => setOpenFaqIndex(openFaqIndex === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT + MAP
      ══════════════════════════════════════════ */}
      <section id="contact" className="hca-section" style={{ background: "var(--cream)" }}>
        <div className="hca-container">
          <div className="hca-center" style={{ maxWidth: 640 }}>
            <span className="section-label" style={{ color: "var(--gold)" }}>Only 33 Villas — Register Now</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)" }}>
              Ready To Book Your Villa At <em style={{ color: "var(--gold)", fontStyle: "italic" }}>1st Avenue?</em>
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.8 }}>
              NE-3, Delhi–Meerut Expressway, near Hawa Hawai Restaurant. Leave your details and our team will
              call you within 24 hours, or call us directly at{" "}
              <a href="tel:+919911807193" style={{ color: "var(--gold)", fontWeight: 700, textDecoration: "none" }}>+91 99118 07193</a>.
            </p>
          </div>

          <div className="hca-contact-wrap" style={{ marginTop: "3rem" }}>
            <div className="hca-contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.422889579452!2d77.55326337529301!3d28.733675675609593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf38a1a6d9587%3A0xa42cb39f01afbb80!2sHaute%20City%201st%20Avenue!5e1!3m2!1sen!2sin!4v1786867279677!5m2!1sen!2sin"
                title="Haute City 1st Avenue location map"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="hca-contact-form-panel">
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