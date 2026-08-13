// Place this file at: src/app/expressway-residency/page.jsx

import Navbar from "../../components/Navbar";
import PopupLeadModal from "../../components/PopupLeadModal";
import SitePlanLightbox from "../../components/SitePlanLightbox";
import GallerySlider from "../../components/GallerySlider";
import ExpresswayAmenities from "../../components/ExpresswayAmenities";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import ContactForm from "../../components/ContactForm";
import ExpresswayFAQ from "../../components/ExpresswayFAQ";
import ExpresswayBlog from "../../components/ExpresswayBlog";
import ExpresswayHighlightItem from "../../components/ExpresswayHighlightItem";

export const metadata = {
  title: "Expressway Residency – Residential Plots on Delhi–Meerut Expressway | Haute World Developers",
  description:
    "Government-approved residential plots (100–300 sq. yd.) at Expressway Residency on NH-24 Delhi–Meerut Expressway, Ghaziabad. Freehold titles, transparent pricing & 24×7 security. Developed by Haute World Developers since 2011.",
  keywords:
    "Expressway Residency plots, Delhi Meerut Expressway plots, NH-24 Ghaziabad plots, residential plots Ghaziabad, Haute World Developers, freehold plots NCR, investment plots expressway, plots near Bhojpur Industrial Area, Ghaziabad Masterplan 2041, New Ghaziabad plots, DME corridor plots, Delhi Meerut Expressway DME",
  alternates: { canonical: "https://www.hautedevelopers.com/expressway-residency" },
  openGraph: {
    title: "Expressway Residency – Residential Plots on Delhi–Meerut Expressway",
    description:
      "Government-approved freehold residential plots along the 14-lane Delhi–Meerut Expressway. Developed by Haute World Developers. Book your site visit today.",
    url: "https://www.hautedevelopers.com/expressway-residency",
    siteName: "Haute World Developers",
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



const advantages = [
  "Clear-title plots with complete due diligence support",
  "Transparent pricing aligned with expressway corridor benchmarks",
  "End-to-end guidance from site visit to registration",
  "Low rise township living",
  "Plots offer customisable home solutions",
  "Lifestyle living",
  "Strong appreciation and growth potential",
  "Superior and comfortable connectivity",
];

const projectDetails = [
  { label: "Project Type", value: "Residential township" },
  { label: "Developer",    value: "Haute World Developers Pvt Ltd" },
  { label: "Location",     value: "Near Hawa Hawai Restaurant, Delhi–Meerut Expressway, Ghaziabad" },
  { label: "Plot Sizes",   value: "100 sq. yd. & above" },
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
  "7 Minutes from Lalkuan Ghaziabad",
  "15 Minutes from Sector 62 Noida",
  "25 Minutes from Akshardham Metro Station",
  "15 Minutes from Ghaziabad Railway Station",
  "7 Minutes from Bhojpur Industrial Area",
  "15 Minutes from Indirapuram, Ghaziabad",
  "30 Minutes from Hindon Airport"
];

// ── Project Highlights ── shown right after About
const projectHighlights = [
  { title: "100-Acre Integrated Township", body: "A single, master-planned 100-acre development on the Delhi–Meerut Expressway, not scattered parcels." },
  { title: "14-Lane Expressway Frontage", body: "Direct access from the operational Delhi–Meerut Expressway (NH-24), connecting Delhi, Ghaziabad, Noida and Meerut today." },
  { title: "100 Sq. Yd. & Above Residential Plots", body: "Clear-title, Residential plots with complete due diligence support at every stage." },
  { title: "50+ Modern Amenities", body: "A complete lifestyle ecosystem — from clubhouse and pool to retail, food court, and dedicated wellness zones." },
  { title: "Vastu-Compliant Layout", body: "Plot orientation planned in line with Vastu principles across the township." },
  { title: "Wide Internal Roads", body: "30 ft. and 40 ft. wide internal roads for smooth, comfortable connectivity within the community." },
  { title: "Low-Rise Township Living", body: "A low-density township designed for space, privacy, and a comfortable pace of life." },
  { title: "Customisable Home Solutions", body: "Plots that give owners the freedom to design and build a home suited to their needs." },
];

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function ExpresswayResidencyPage() {
  return (
    <>
      <Navbar />
      <PopupLeadModal pageName="Expressway Residency" projectName="Expressway Residency, Ghaziabad" />

      {/* ══════════════════════════════════════════
          RESPONSIVE STYLES
          Scoped to .er-* classes so nothing bleeds
          into global styles.
      ══════════════════════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700&display=swap');

        /* ── Shared helpers ── */
        .er-section   { padding: 4.5rem 0; }
        .er-container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; box-sizing: border-box; }
        .er-center    { text-align: center; max-width: 580px; margin: 0 auto 3rem; }

        /* ── Two-col grids ── */
        .er-2col      { display: grid; grid-template-columns: 1fr 1fr;      gap: 4rem; align-items: start; }
        .er-2col-map  { display: grid; grid-template-columns: 1fr 1.15fr;   gap: 4rem; align-items: center; }
        .er-2col-dev  { display: grid; grid-template-columns: 1fr 1fr;      gap: 4rem; align-items: center; }

        /* ── About image ── */
        .er-about-img-wrap { border-radius: 20px; overflow: hidden; height: 420px; box-shadow: 0 8px 40px rgba(26,74,58,0.08); }
        .er-about-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
        @media (max-width: 900px) { .er-about-img-wrap { height: 300px; } }

        /* ── Location/route image (fits without cropping) ── */
        .er-route-img-wrap { border-radius: 20px; overflow: hidden; height: auto; background: var(--white); box-shadow: 0 8px 40px rgba(0,0,0,0.25); }
        .er-route-img-wrap img { width: 100%; height: auto; object-fit: contain; display: block; }

        /* ── At-a-Glance table ── */
        .er-glance       { max-width: 860px; margin: 2.5rem auto 0; border: 1px solid rgba(201,144,26,0.2); border-radius: 20px; overflow: hidden; box-shadow: 0 8px 40px rgba(26,74,58,0.06); }
        .er-glance-row   { display: grid; grid-template-columns: 200px 1fr; border-bottom: 1px solid rgba(201,144,26,0.1); }
        .er-glance-row:last-child { border-bottom: none; }
        .er-glance-lbl   { padding: 1.1rem 1.5rem; background: var(--cream); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); display: flex; align-items: center; border-right: 1px solid rgba(201,144,26,0.1); }
        .er-glance-val   { padding: 1.1rem 1.5rem; font-size: 0.92rem; color: var(--charcoal); font-weight: 500; line-height: 1.6; }

        /* ── Project Highlights ── */
        .er-highlight-grid { display: grid; grid-template-columns: 1fr; gap: 1px; background: rgba(13,47,36,0.08); border: 1px solid rgba(13,47,36,0.08); margin-top: 2.5rem; }
        .er-highlight-item { background: var(--white); padding: 1.5rem 1.6rem; display: flex; gap: 1rem; align-items: flex-start; }
        .er-highlight-mark { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--forest); color: #fff; display: flex; align-items: center; justify-content: center; }
        .er-highlight-item h3 { font-family: 'Playfair Display', Georgia, serif; font-weight: 500; font-size: 1.08rem; margin: 0 0 0.4rem; color: var(--charcoal); -webkit-text-stroke: 0.4px currentColor; }
        .er-highlight-item p { margin: 0; font-size: 0.85rem; color: var(--gray); line-height: 1.6; }
        @media (min-width: 768px) { .er-highlight-grid { grid-template-columns: 1fr 1fr; } }

        /* ── Key Advantages card ── */
        .er-adv-card {
          position: relative;
          background: linear-gradient(155deg, var(--forest-dark) 0%, var(--forest) 100%);
          border-radius: 24px;
          padding: 2.6rem 2.2rem;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(13,47,36,0.35), inset 0 1px 0 rgba(255,255,255,0.06);
          border: 1px solid rgba(201,144,26,0.25);
        }
        .er-adv-card::before {
          content: '';
          position: absolute; top: -40%; right: -30%;
          width: 70%; height: 70%;
          background: radial-gradient(circle, rgba(201,144,26,0.22) 0%, transparent 70%);
          pointer-events: none;
        }
        .er-adv-card::after {
          content: '';
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0, rgba(255,255,255,0.025) 1px, transparent 0, transparent 50%);
          background-size: 34px 34px;
          pointer-events: none;
        }
        .er-adv-eyebrow {
          position: relative; z-index: 1;
          font-family: var(--font-body); font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold-pale);
          opacity: 0.85; margin-bottom: 0.6rem; display: block;
        }
        .er-adv-title {
          position: relative; z-index: 1;
          font-family: 'Playfair Display', Georgia, serif; font-style: italic; font-weight: 600;
          font-size: 1.65rem; color: #fff; margin-bottom: 1.6rem;
        }
        .er-adv-list { position: relative; z-index: 1; display: flex; flex-direction: column; }
        .er-adv-row {
          display: flex; align-items: flex-start; gap: 1.1rem;
          padding: 0.95rem 0; border-bottom: 1px solid rgba(255,255,255,0.09);
          transition: padding-left 0.3s ease;
        }
        .er-adv-row:last-child { border-bottom: none; }
        .er-adv-row:hover { padding-left: 0.4rem; }
        .er-adv-num {
          flex-shrink: 0; font-family: var(--font-display); font-weight: 700;
          font-size: 1rem; color: var(--gold); min-width: 26px;
          opacity: 0.9;
        }
        .er-adv-row p {
          margin: 0; font-size: 0.92rem; color: rgba(255,255,255,0.88);
          line-height: 1.6; font-weight: 500;
        }

        /* ── Amenities — photo cards (3:2) ── */
        .er-amenity-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-top: 3rem; }
        .er-amenity-card { background: var(--forest-dark); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; overflow: hidden; display: flex; flex-direction: column; }
        .er-amenity-image { position: relative; aspect-ratio: 3 / 2; overflow: hidden; }
        .er-amenity-image img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.6s ease; }
        .er-amenity-card:hover .er-amenity-image img { transform: scale(1.06); }
        .er-amenity-body { padding: 1.4rem 1.4rem 1.6rem; display: flex; align-items: flex-start; gap: 1rem; }
        .er-amenity-icon { flex-shrink: 0; width: 72px; height: 72px; border-radius: 14px; background: rgba(201,144,26,0.15); border: 1px solid rgba(201,144,26,0.3); display: flex; align-items: center; justify-content: center; }
        .er-amenity-text { display: flex; flex-direction: column; gap: 0.4rem; min-width: 0; }
        .er-amenity-card h4 { font-family: var(--font-body); font-size: 0.92rem; font-weight: 700; color: #fff; margin: 0; }
        .er-amenity-card p { font-size: 0.82rem; color: rgba(255,255,255,0.6); line-height: 1.6; margin: 0; }
        @media (min-width: 640px) { .er-amenity-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 992px) { .er-amenity-grid { grid-template-columns: repeat(3, 1fr); } }

        /* ── Scroll reveal (matches Eden Valley) ── */
        .er-block-anim { opacity: 0; transform: translateY(20px); transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1); }
        .er-block-anim.er-inview-item { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) {
          .er-block-anim { opacity: 1 !important; transform: none !important; transition: none !important; }
        }

        /* ── Layout highlights (site plan) ── */
        .er-highlights { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 2rem; }

        /* ── Stats (developer) ── */
        .er-stats      { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

        /* ── FAQ — full-bleed photo background, card floats on top ── */
        .er-faq-section { position: relative; overflow: hidden; padding: clamp(4rem, 8vw, 6rem) 0; }
        .er-faq-bg      { position: absolute; inset: 0; background-size: cover; background-position: center; }
        .er-faq-video   { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .er-faq-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(13,47,36,0.55) 0%, rgba(13,47,36,0.35) 40%, rgba(13,47,36,0.12) 70%, rgba(13,47,36,0) 100%); }
        .er-faq-inner   { position: relative; z-index: 1; }
        .er-faq-heading { color: #fff; font-size: clamp(1.9rem, 4vw, 2.8rem); margin: 0.6rem 0 2.2rem; line-height: 1.15; }

        .er-faq-box  { max-width: 620px; border-radius: 18px; overflow: hidden; background: var(--white); box-shadow: 0 20px 60px rgba(0,0,0,0.35); }
        .er-faq-row  { border-bottom: 1px solid rgba(201,144,26,0.14); }
        .er-faq-row:last-child { border-bottom: none; }
        .er-faq-btn  { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.15rem 1.5rem; background: none; border: none; cursor: pointer; text-align: left; }
        .er-faq-q    { font-family: var(--font-body); font-weight: 600; font-size: 0.95rem; color: var(--charcoal); }
        .er-faq-a    { padding: 0 1.5rem 1.35rem; font-size: 0.87rem; color: var(--gray); line-height: 1.75; }

        @media (max-width: 640px) {
          .er-faq-overlay { background: linear-gradient(to bottom, rgba(13,47,36,0.55) 0%, rgba(13,47,36,0.72) 100%); }
        }

        /* ── Blog ── */
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

        /* ── Contact + Map ── */
        .er-contact-wrap { border: 1px solid rgba(201,144,26,0.2); border-radius: 20px; overflow: hidden; display: grid; grid-template-columns: 1fr; box-shadow: 0 8px 40px rgba(26,74,58,0.08); }
        .er-contact-map  { position: relative; min-height: 340px; background: var(--cream); }
        .er-contact-map iframe { width: 100%; height: 100%; min-height: 340px; border: 0; display: block; filter: saturate(0.85) contrast(1.05); }
        .er-contact-form-panel { background: var(--white); padding: 2.2rem 1.5rem; }
        .er-contact-form-panel .contact-form-card {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
          border-radius: 0 !important;
        }
        @media (min-width: 992px) {
          .er-contact-wrap { grid-template-columns: 1fr 1fr; }
          .er-contact-map { min-height: 100%; }
          .er-contact-form-panel { padding: 3rem; }
        }

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
          .er-highlights{ grid-template-columns: repeat(2, 1fr); }
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

          .er-highlights { grid-template-columns: 1fr 1fr; gap: 0.7rem; }

          /* CTA: full-width stack */
          .er-cta-wrap   { padding: 2rem 1rem; flex-direction: column; }
          .er-cta-btns   { align-items: stretch; width: 100%; }
          .er-cta-btns a { text-align: center; justify-content: center; }

          /* Why invest box padding */
          .er-adv-card   { padding: 1.8rem !important; }

          /* Prevent buttons from overflowing on mobile */
          .btn-primary, .btn-dark, .btn-outline {
            max-width: 100%;
            white-space: normal;
            word-break: break-word;
            box-sizing: border-box;
          }
        }

        /* ══════════════════════════
           TINY  ≤ 380px
        ══════════════════════════ */
        @media (max-width: 380px) {
          .er-highlights { grid-template-columns: 1fr; }
        }

        /* ── Hero: swap to mobile-specific image, fit fully without side-cropping ── */
        @media (max-width: 768px) {
          .hero-slide {
            background-image: url('https://res.cloudinary.com/dpbitfczf/image/upload/v1786341641/ER-Elev-Mobile-Night_osb3pb.webp') !important;
            background-size: contain !important;
            background-position: top center !important;
            background-repeat: no-repeat !important;
            background-color: var(--forest-dark);
          }

          .hero {
            height: auto !important;
            min-height: 0 !important;
            aspect-ratio: 1 / 1.15;
            align-items: flex-start !important;
            padding-top: 78px !important;
            padding-bottom: 1.2rem !important;
          }

          .hero-content--new {
            padding-top: 0.3rem !important;
            padding-bottom: 0 !important;
          }

          .hero-eyebrow {
            font-size: 0.62rem !important;
            margin-bottom: 0.4rem !important;
          }

          .hero-title {
            font-size: 1.7rem !important;
            line-height: 1.1 !important;
          }

          .hero-desc--stacked {
            font-size: 12.5px !important;
            line-height: 1.55 !important;
            margin-top: 0.6rem !important;
          }

          .hero-col-btns {
            width: 100% !important;
            align-items: center !important;
          }

          .hero-col-btns .hero-actions {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            margin-top: -1.2rem !important;
          }

          .hero-btns button,
          .hero-btns a,
          .hero-col-btns .btn-primary {
            padding: 12px 22px !important;
            font-size: 13px !important;
          }
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
              "Government-approved freehold residential plots on the Delhi–Meerut Expressway (NH-24), Ghaziabad. Developed by Haute World Developers.",
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
              name: "Haute World Developers",
              url: "https://www.hautedevelopers.com",
            },
          }),
        }}
      />

      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Where is Expressway Residency located?",
                acceptedAnswer: { "@type": "Answer", text: "Expressway Residency is located near Hawa Hawai Restaurant on the Delhi–Meerut Expressway (NH-24), Ghaziabad, Uttar Pradesh." },
              },
              {
                "@type": "Question",
                name: "What plot sizes are available?",
                acceptedAnswer: { "@type": "Answer", text: "Freehold residential plots starting at 100 sq. yd. and above are available." },
              },
            ],
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
            <p
              style={{
                fontSize: "0.76rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#ffffff",
                marginBottom: "0.6rem",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}
            >
              Upcoming Integrated Township on NE&nbsp;3
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
              Expressway Residency is an upcoming 100 acres township with 50+
              modern amenities and a perfect blend of luxury, lifestyle and
              comfort offering investors with a choice to book plots and luxury
              villas
            </p>
          </div>
          <div className="hero-col-btns">
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Book a Site Visit →
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
          ABOUT
      ══════════════════════════════════════════ */}
      <section
        id="about"
        className="er-section"
        aria-labelledby="about-heading"
        style={{ background: "var(--white)" }}
      >
        <div className="er-container">
          <div className="er-2col">
            <div>
              <span className="section-label">About The Project</span>
              <h2
                id="about-heading"
                style={{
                  fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)",
                  lineHeight: 1.15,
                  marginBottom: "0.5rem",
                }}
              >
                A 100-Acre Township on the Delhi–Meerut Expressway
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
                Expressway Residency is an upcoming integrated township spread
                across 100 acres, directly fronting the operational 14-lane
                Delhi–Meerut Expressway (NE-3) in Ghaziabad. Designed as a
                complete residential destination, it brings Plotted Development with 50+ modern amenities within one
                master-planned Community.
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--gray)",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                }}
              >
                Every plot is backed by clear-title documentation and complete
                due diligence support, giving buyers a transparent, low-rise
                township built for comfortable, long-term living — with strong
                connectivity to Delhi, Noida, and Meerut.
              </p>
              <a href="#contact" className="btn-primary">
                Register Interest &amp; Get a Callback →
              </a>
            </div>

            <div className="er-about-img-wrap">
              <img
                src="/assets/expressway-front.png"
                alt="Expressway Residency — aerial view of the township on the Delhi–Meerut Expressway"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROJECT HIGHLIGHTS
      ══════════════════════════════════════════ */}
      <section
        id="highlights"
        className="er-section"
        aria-labelledby="project-highlights-heading"
        style={{ background: "var(--cream)" }}
      >
        <div className="er-container">
          <div className="er-center">
            <span className="section-label">Project Highlights</span>
            <h2
              id="project-highlights-heading"
              style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)", marginBottom: "0.5rem" }}
            >
              What Sets Expressway Residency Apart
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
          </div>

          <div className="er-highlight-grid">
            {projectHighlights.map((h) => (
              <ExpresswayHighlightItem key={h.title}>
                <span className="er-highlight-mark"><IconCheck size={13} /></span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.body}</p>
                </div>
              </ExpresswayHighlightItem>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LOCATION CONNECTIVITY
      ══════════════════════════════════════════ */}
      <section
        id="location"
        className="er-section"
        aria-labelledby="location-heading"
        style={{ background: "var(--forest-dark)" }}
      >
        <div className="er-container">
          <div className="er-2col-map">
            <div>
              <div
                style={{
                  display: "inline-block",
                  borderLeft: "3px solid var(--gold)",
                  paddingLeft: "1rem",
                  marginBottom: "1.4rem",
                  textAlign: "left",
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
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: "1.6rem",
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
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem 2rem",
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
                      color: "rgba(255,255,255,0.85)",
                      fontWeight: 500,
                      lineHeight: 1.5,
                    }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--gold)"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0 }}
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="er-route-img-wrap">
              <img
                src="https://res.cloudinary.com/dpbitfczf/image/upload/v1786281082/ER_Route_z38mpy.webp"
                alt="Expressway Residency — location and connectivity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AMENITIES
      ══════════════════════════════════════════ */}
      <section
        id="amenities"
        className="er-section"
        aria-labelledby="amenities-heading"
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
          <div className="er-center" style={{ maxWidth: 720 }}>
            <span className="section-label" style={{ color: "var(--gold)" }}>
              Expressway Residency Amenities
            </span>
            <h2 id="amenities-heading" style={{ color: "var(--charcoal)" }}>
              Future-Ready Infrastructure
              <br />
              Designed for Modern Living
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p
              style={{
                color: "var(--gray)",
                fontSize: "0.92rem",
                lineHeight: 1.8,
              }}
            >
              Every amenity is planned to support a complete, comfortable
              lifestyle — from daily wellness to community recreation.
            </p>
          </div>

          <ExpresswayAmenities />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MASTER PLAN
      ══════════════════════════════════════════ */}
      <section
        id="masterplan"
        className="er-section"
        aria-labelledby="masterplan-heading"
        style={{ background: "var(--white)" }}
      >
        <div className="er-container">
          <div className="er-center">
            <span className="section-label">Project Layout</span>
            <h2 id="masterplan-heading">Expressway Residency Layout</h2>
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

          <div>
            <SitePlanLightbox
              src="https://i.postimg.cc/d39kzcXF/expressway-layout.webp"
              alt="Expressway Residency master plan and site layout — Delhi Meerut Expressway Ghaziabad"
            />
          </div>

          <div style={{ marginTop: "1.8rem" }}>
            <a
              href="#contact"
              className="btn-primary"
              style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                padding: "1.2rem 2rem",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            >
              Receive a Return Call →
            </a>
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
          WHY INVEST
      ══════════════════════════════════════════ */}
      <section
        id="why-invest"
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
                Investing in plots at Expressway Residency is fundamentally different from speculative real estate buying. The township sits next to the Bhojpur Industrial Area and falls within the Ghaziabad Masterplan 2041, which is set to bring the region into the fold of New Ghaziabad — placing early investors ahead of a wave of verified infrastructure growth and planned urban expansion along the Delhi–Meerut Expressway (DME) corridor.
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--gray)",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                }}
              >
               With the 14-lane Delhi–Meerut Expressway (DME) already operational, connectivity to Delhi, Ghaziabad, Noida, and Meerut is a reality today. As part of an integrated township offering 50+ luxury amenities, Expressway Residency is positioned at the center of a corridor that upcoming metro extensions, logistics hubs, and industrial zones are steadily transforming into a future-ready urban destination.
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
              <a href="#contact" className="btn-dark">
                Talk to Our Investment Team →
              </a>
            </div>

            <div>
              <div className="er-adv-card">
                <span className="er-adv-eyebrow">Why Choose Us</span>
                <h3 className="er-adv-title">Key Advantages</h3>
                <div className="er-adv-list">
                  {advantages.map((a, i) => (
                    <div key={a} className="er-adv-row">
                      <span className="er-adv-num">{String(i + 1).padStart(2, "0")}</span>
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
          IMAGE GALLERY
      ══════════════════════════════════════════ */}
      <section id="gallery" className="er-section" aria-labelledby="gallery-heading" style={{ background: '#f0ece3' }}>
        <div className="er-container">
          <div className="er-center">
            <span className="section-label">Project Visuals</span>
            <h2 id="gallery-heading" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 400, letterSpacing: '0.01em' }}>Image Gallery</h2>
            <div className="divider" style={{ margin: '1rem auto' }} />
          </div>
          <GallerySlider />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section id="faq" className="er-faq-section" aria-labelledby="faq-heading">
        <video
          className="er-faq-video"
          src="https://res.cloudinary.com/dpbitfczf/video/upload/v1786351870/DME-_Drone_View_rgbp0s.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="er-faq-overlay" aria-hidden="true" />
        <div className="er-container er-faq-inner">
          <span className="section-label" style={{ color: "var(--gold)" }}>Got Questions?</span>
          <h2 id="faq-heading" className="er-faq-heading">
            Frequently Asked{" "}
            <em style={{ color: "#fff", fontStyle: "italic" }}>Questions</em>
          </h2>

          <ExpresswayFAQ />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BLOG
      ══════════════════════════════════════════ */}
      <section id="blogs" className="er-section" aria-labelledby="blogs-heading" style={{ background: "var(--cream)" }}>
        <div className="er-container">
          <ExpresswayBlog />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT + GOOGLE MAP
      ══════════════════════════════════════════ */}
      <section
        id="contact"
        className="er-section"
        aria-labelledby="contact-heading"
        style={{ background: "var(--white)" }}
      >
        <div className="er-container">
          <div className="er-center" style={{ maxWidth: 640 }}>
            <span className="section-label" style={{ color: "var(--gold)" }}>
              Limited Inventory — Register Now
            </span>
            <h2 id="contact-heading" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)" }}>
              Ready to Invest in{" "}
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
                Expressway Residency?
              </em>
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.8 }}>
              Speak to our team for pricing details, payment plans, and to
              schedule your complimentary site visit. Or call us directly at{" "}
              <a
                href="tel:+919911807193"
                style={{ color: "var(--gold)", fontWeight: 700, textDecoration: "none" }}
              >
                +91 99118 07193
              </a>
              .
            </p>
          </div>

          <div className="er-contact-wrap" style={{ marginTop: "3rem" }}>
            <div className="er-contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.123456789!2d77.4850!3d28.7050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf33ebb2a7351%3A0x4e08c11e7abf3002!2sExpressway%20Residency!5e0!3m2!1sen!2sin!4v1775802565878!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Expressway Residency Location Map — NH-24 Delhi Meerut Expressway, Ghaziabad, Uttar Pradesh"
              />
            </div>
            <div className="er-contact-form-panel">
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