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
const Ic = ({ size = 22, color = "currentColor", sw = 1.6, children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);
const IconBriefcase = (p) => (<Ic {...p}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/></Ic>);
const IconCheck = ({ size = 16, color }) => (<Ic size={size} color={color} sw={2.2}><polyline points="20 6 9 17 4 12"/></Ic>);
const IconTree = (p) => (<Ic {...p}><path d="M12 22v-7"/><path d="M9 15H5l7-7 7 7h-4"/><path d="M7 11H3l9-9 9 9h-4"/></Ic>);
const IconBuilding = (p) => (<Ic {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6"/><path d="M9 13h6"/><path d="M9 17h6"/></Ic>);
const IconRoad = (p) => (<Ic {...p}><path d="M3 17l3-10h12l3 10"/><path d="M12 7v10"/><path d="M9 17l1-3"/><path d="M15 17l-1-3"/></Ic>);
const IconPlane = (p) => (<Ic {...p}><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></Ic>);
const IconFactory = (p) => (<Ic {...p}><path d="M2 20V8l6 4V8l6 4V8l6-4v16H2z"/><path d="M6 20v-4h4v4"/></Ic>);
const IconSun = (p) => (
  <Ic {...p}>
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </Ic>
);
const IconGate = (p) => (<Ic {...p}><rect x="3" y="11" width="8" height="11"/><rect x="13" y="11" width="8" height="11"/><path d="M3 11V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"/><path d="M12 2v9"/></Ic>);
const IconShield = (p) => (<Ic {...p}><path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7L12 2z"/><polyline points="9 12 11 14 15 10"/></Ic>);
const IconRun = (p) => (<Ic {...p}><circle cx="13" cy="4" r="1.5"/><path d="M7 21l3-8 2 2 3-5"/><path d="M17 21l-2-8-2 2"/><path d="M4 13l4-2 2 3 3-6 3 2"/></Ic>);
const IconPool = (p) => (<Ic {...p}><path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M14 7V4"/><path d="M18 7V4"/><path d="M14 4h4"/></Ic>);
const IconKids = (p) => (<Ic {...p}><circle cx="12" cy="5" r="3"/><path d="M6 21v-2a6 6 0 0 1 12 0v2"/><path d="M9 14l-2 7"/><path d="M15 14l2 7"/></Ic>);
const IconTrendUp = (p) => (<Ic {...p}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></Ic>);
const IconCity = (p) => (
  <Ic {...p}>
    <path d="M3 21h18"/><path d="M9 8h1"/><path d="M9 12h1"/><path d="M9 16h1"/>
    <path d="M14 8h1"/><path d="M14 12h1"/><path d="M14 16h1"/>
    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/>
  </Ic>
);
const IconWifi = (p) => (<Ic {...p}><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></Ic>);
const IconDroplet = (p) => (<Ic {...p}><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></Ic>);
const IconYoga = (p) => (<Ic {...p}><circle cx="12" cy="4" r="1.5"/><path d="M6 12c0-3 2-5 6-5s6 2 6 5"/><path d="M4 19l4-4 4 3 4-3 4 4"/><path d="M8 15v-3"/><path d="M16 15v-3"/></Ic>);
const IconShop = (p) => (<Ic {...p}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></Ic>);
const IconPlusMinus = ({ size = 18, color, isOpen = false }) => (
  <Ic size={size} color={color} sw={2.2}>
    <line x1="5" y1="12" x2="19" y2="12"/>
    {!isOpen && <line x1="12" y1="5" x2="12" y2="19"/>}
  </Ic>
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
  { Icon: IconBuilding, label: "Grand Club House", body: "A central clubhouse for community events, celebrations, and everyday gathering.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786694080/modern_luxury_house_exterior_eukogt.jpg" },
  { Icon: IconTree, label: "Landscaped Gardens & Parks", body: "Curated green spaces and walking gardens woven through the township.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786694260/landscaped_garden_park_nhbegp.jpg" },
  { Icon: IconPool, label: "Swimming Pool", body: "A dedicated pool zone for residents to unwind and stay active.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786694345/indoor_swimming_pool_ubdel6.jpg" },
  { Icon: IconGate, label: "Gated Entry & 24×7 Security", body: "Controlled, single-point entry and exit backed by round-the-clock on-ground security personnel.", image:"https://res.cloudinary.com/dpbitfczf/image/upload/v1786695024/haute_world_city_aerial_view_1_so5m3l.jpg" },
  { Icon: IconRun, label: "Jogging & Cycling Track", body: "A dedicated track for morning runs, walks, and cycling within the township.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786698555/blue_cycling_track_landscaped_park_jdwnir.jpg" },
  { Icon: IconKids, label: "Kids Play Zone", body: "A safe, dedicated play area designed for younger residents.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786699535/indoor_kids_ball_pool_qg0ttm.webp" },
  { Icon: IconShop, label: "Retail & Commercial Zone", body: "Everyday retail and services planned within easy walking distance.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786700801/premium_clothing_store_interior_kvoguj.webp" },
  { Icon: IconWifi, label: "Fibre-Optic Connectivity", body: "High-speed digital infrastructure built in from day one, in step with Dholera's smart-city backbone.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786700925/fiber_optic_network_technology_trpmeg.webp" },
  { Icon: IconYoga, label: "Yoga & Wellness Centre", body: "A calm, dedicated space for yoga, meditation, and wellness routines.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786701145/yoga_wellness_studio_bc1lkr.jpg" },
  { Icon: IconSun, label: "Solar-Powered Infrastructure", body: "Renewable-energy-backed common infrastructure, aligned with the region's solar push.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786701449/rooftop_solar_panel_installation_cpv82u.webp" },
  { Icon: IconBuilding, label: "Open Amphitheatre", body: "An open-air amphitheatre for community gatherings, performances, and cultural events.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786703030/landscaped_amphitheatre_garden_ctynam.jpg" },
  { Icon: IconTree, label: "Religious Space", body: "A dedicated space for prayer and reflection, designed for the community's everyday spiritual needs.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786702604/varanasi_temple_architecture_nkxape.webp" },
];

const projectHighlights = [
  { title: "Approved Plots, Clear Title", body: "Every plot at Haute World City is Approved, with complete title documentation and due-diligence support." },
  { title: "Along the Boundary of India's First Greenfield Smart City", body: "Located along the Dholera SIR boundary in Bhavnagar District — next to a smart city planned from the ground up, not retrofitted onto an existing town." },
  { title: "Backed by the DMIC", body: "Part of the central and state government-backed Delhi–Mumbai Industrial Corridor initiative." },
  { title: "Near the Upcoming International Airport", body: "Positioned to benefit from Dholera International Airport as passenger and cargo operations come online." },
  { title: "Direct Expressway Access", speed: true, body: "Located directly on the Dholera Expressway, offering high-speed connectivity across the region." },
  { title: "Semiconductor & Industrial Investment Influx", body: "Large-scale manufacturing and semiconductor investment in DSIR is expected to drive long-term demand for land." },
  { title: "Smart City ICT Infrastructure", body: "Underground utilities, fibre connectivity, and intelligent traffic and utility management built into the region's design." },
  { title: "Plots From 200 Sq. Yd.", body: "Flexible plot sizes to suit first-time buyers, long-term investors, and end users planning a future home." },
];

/* ── WHY INVEST DATA (replaces old `advantages`) ── */
const whyStats = [
  { value: "₹91,000 Cr", label: "Chip fabrication plant rising inside Dholera SIR" },
  { value: "920 sq. km", label: "Planned city, built from a blank canvas" },
  { value: "₹1.33 L Cr", label: "Kalpasar sea-dam project moving through clearances" },
  { value: "Mar 2026", label: "Ahmedabad–Dholera Expressway opened to traffic" },
];

const whyReasons = [
  {
    Icon: IconFactory,
    title: "Industry Is Already Moving In",
    body: "The Tata Electronics fab is more than halfway built, advanced lithography equipment has been contracted, and a specialty-gas supplier is setting up close by. Haute World City sits in the path of a city that is being filled with real employers, not promises.",
  },
  {
    Icon: IconBriefcase,
    title: "Jobs Create the Need for Homes",
    body: "Thousands of skilled engineers and technicians are expected at the fab alone, with many more roles following across suppliers and services. With the state already fast-tracking worker housing, quality residential land near the corridor is set to be in short supply.",
  },
  {
    Icon: IconShield,
    title: "Governments Hold the Foundation",
    body: "Dholera is developed by a company jointly owned by the Centre and the Gujarat government, under a statutory planning law. Our plots benefit from being next to a city with institutional accountability, not a private layout alone.",
  },
  {
    Icon: IconRoad,
    title: "Connectivity That You Can Drive Today",
    body: "A six-lane expressway now links Ahmedabad to the Dholera region, and Haute World City fronts the Dholera Expressway directly. Reaching the city, the airport belt and the wider corridor does not depend on a future build.",
  },
  {
    Icon: IconSun,
    title: "Power, Water and Ports Are Lining Up",
    body: "Large renewable-energy commitments, a planned freshwater reservoir through Kalpasar, and a modernising Bhavnagar port are all gathering around this belt. These are the basics that keep an industrial city running for decades.",
  },
  {
    Icon: IconTrendUp,
    title: "A Long Runway for Patient Owners",
    body: "India's semiconductor push is planned across many years, not a single announcement. Owners who step in while the city is still taking shape stand to hold land through every phase of its growth.",
  },
];

const whyPhases = [
  { tag: "Now", title: "Build-out", text: "Expressway open, fab under construction, worker housing underway." },
  { tag: "Next", title: "Ramp-up", text: "Production begins, suppliers arrive, and demand for homes strengthens." },
  { tag: "Later", title: "Maturity", text: "Airport, port and Kalpasar links complete a fully connected city." },
];

const layoutStats = [
  { Icon: IconCity, value: "673", label: "Total Plots" },
  { Icon: IconBuilding, value: "625", label: "Total Residential Plots" },
  { Icon: IconShop, value: "48", label: "Total Commercial Plots" },
];

const dholeraMilestones = [
  { Icon: IconPlane, title: "International Airport", desc: "Dholera International Airport — under construction — is set to become one of India's largest Greenfield airports, connecting the region to global markets.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1791278210/airport_hero_optimized_t6zvfh.webp" },
  { Icon: IconFactory, title: "Semiconductor Hub", desc: "Major semiconductor and electronics manufacturers are establishing fabrication plants within Dholera SIR, anchoring the region's industrial identity.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1791278210/Semiconductor_Wafer_Probe_Station_sqdxc7.webp" },
  { Icon: IconRoad, title: "DMIC Expressway", desc: "The dedicated Delhi–Mumbai Industrial Corridor freight and expressway network provides direct, high-speed access to two of India's biggest economic centres.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1791278213/Modern_Highway_Interchange_Over_Green_Fields_vqs3vu.webp" },
  { Icon: IconSun, title: "Renewable Energy Zone", desc: "A large-scale solar park powers Dholera with clean energy, positioning it among the first smart cities built around renewables from the ground up.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1791278210/Solar_Panels_and_Wind_Turbines_Under_Blue_Skies_e8aqs8.webp" },
  { Icon: IconDroplet, title: "World-Class Utilities", desc: "Planned water supply, sewage treatment, and drainage systems designed for a city of two million residents.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1791278210/Aerial_Panoramic_Industrial_Cityscape_w1h2qx.webp" },
  { Icon: IconBriefcase, title: "Large-Scale Employment Hub", desc: "Dholera SIR is projected to generate hundreds of thousands of direct and indirect jobs across manufacturing, electronics, logistics, and services.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1791278210/Modern_Glass_Business_Park_Campus_bki2da.webp" },
];

const proximityBullets = [
  "Located along the Dholera SIR boundary in Bhavnagar District, Gujarat",
  "Just 3.5 km from the Dholera SIR boundary",
  "0 km from the expressway — directly on the Dholera Expressway",
  "Around 20 km from the Kalpasar Dam project",
  "Approximately 35 km from Bhavnagar International Port",
  "Roughly 25 km from the Dholera Activation Area",
  "About 30 km from the ABCD Building",
  "Nearly 30 km from Dholera International Airport",
];

const faqs = [
  {
    q: "Where exactly is Haute World City located?",
    a: "Haute World City is located directly on the Dholera Expressway in Bhavnagar District, Gujarat, about 3.5 km from the Dholera SIR boundary.",
  },
  {
    q: "Is Haute World City approved?",
    a: "Yes. The project layout is approved, the NA and NOC are in place, and the title is clear. Our team also provides complete documentation and due-diligence support at every stage of the booking process.",
  },
  {
    q: "What plot sizes are available?",
    a: "Plots start at 200 sq. yd. and go upward, giving you the flexibility to invest, plan a future home, or choose a larger parcel.",
  },
  {
    q: "Why is Haute World City the best option for investing in Dholera?",
    a: "Haute World City combines a prime location with a well-documented project. It sits directly on the Dholera Expressway, close to the SIR boundary, in a region that is attracting major semiconductor and industrial investment. The layout is approved with clear title, plot sizes are flexible, and the project is developed by Haute World Developers, a team that has been delivering projects since 2011.",
  },
  {
    q: "Why is Haute World City an integrated township?",
    a: "Haute World City is planned as a complete community rather than just a layout of plots. It includes residential and commercial plots, a clubhouse, landscaped gardens, a swimming pool, a jogging and cycling track, a kids' play zone, a wellness centre, and a retail zone. Gated entry with 24×7 security, fibre-optic connectivity and solar-powered common infrastructure complete the township.",
  },
  {
    q: "Who is developing Haute World City?",
    a: "Haute World City is being developed by Haute World Developers, which has been delivering projects since 2011 across North India, including Dehradun, Meerut, Ghaziabad and Noida, and is now expanding into Dholera Smart City.",
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
          alt="Haute World City location map — Dholera Expressway, Bhavnagar District, Gujarat"
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

        /* HERO — desktop untouched */
        .hwc-hero-card { display: contents; }
        .hwc-hero-mobile-img { display: none; }

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

        /* WHY INVEST (new) */
        .hwc-wi-stats   { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 3rem; }
        .hwc-wi-stat    { background: linear-gradient(155deg, var(--forest-dark), var(--forest)); border: 1px solid rgba(201,144,26,0.25); border-radius: 16px; padding: 1.5rem 1.3rem; text-align: center; box-shadow: 0 12px 32px rgba(13,47,36,0.18); }
        .hwc-wi-stat-v  { font-family: var(--font-display); font-weight: 700; font-size: 1.7rem; color: var(--gold); line-height: 1.1; margin: 0; }
        .hwc-wi-stat-l  { margin: 0.5rem 0 0; font-size: 0.78rem; color: rgba(255,255,255,0.8); line-height: 1.5; }

        .hwc-wi-grid    { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.4rem; }
        .hwc-wi-card    { background: var(--white); border: 1px solid rgba(201,144,26,0.2); border-radius: 16px; padding: 1.8rem 1.6rem; height: 100%; box-sizing: border-box; position: relative; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .hwc-wi-card::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: linear-gradient(90deg, var(--gold), transparent); }
        .hwc-wi-card:hover { transform: translateY(-4px); box-shadow: 0 14px 36px rgba(26,74,58,0.12); }
        .hwc-wi-icon    { width: 52px; height: 52px; border-radius: 12px; background: rgba(201,144,26,0.1); border: 1px solid rgba(201,144,26,0.25); display: flex; align-items: center; justify-content: center; margin-bottom: 1.1rem; }
        .hwc-wi-card h3 { font-family: var(--font-display); font-weight: 600; font-size: 1.15rem; color: var(--charcoal); margin: 0 0 0.6rem; }
        .hwc-wi-card p  { margin: 0; font-size: 0.86rem; color: var(--gray); line-height: 1.75; }

        .hwc-wi-phases  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; margin-top: 3rem; background: rgba(201,144,26,0.25); border-radius: 16px; overflow: hidden; border: 1px solid rgba(201,144,26,0.25); }
        .hwc-wi-phase   { background: var(--white); padding: 1.5rem 1.6rem; }
        .hwc-wi-tag     { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); }
        .hwc-wi-phase h4{ font-family: var(--font-display); font-size: 1.1rem; margin: 0.35rem 0; color: var(--charcoal); }
        .hwc-wi-phase p { margin: 0; font-size: 0.84rem; color: var(--gray); line-height: 1.65; }

        .hwc-wi-note    { max-width: 760px; margin: 2.5rem auto 0; text-align: center; font-size: 0.9rem; color: var(--gray); line-height: 1.8; }

        /* Amenities */
        .hwc-amenities { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .hwc-amenity-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; display: flex; flex-direction: column; position: relative; overflow: hidden; }
        .hwc-amenity-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, var(--gold), transparent); opacity: 0.5; }
        .hwc-amenity-img { width: 100%; height: 170px; overflow: hidden; background: rgba(255,255,255,0.05); }
        .hwc-amenity-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .hwc-amenity-body { padding: 1.6rem 1.5rem 1.8rem; display: flex; align-items: flex-start; gap: 0.9rem; }

        /* Dholera milestones */
        .hwc-milestones{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }

        /* Layout highlights */
        .hwc-highlights{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 2rem; }
        .hwc-stat-box { background: var(--white); border: 1px solid rgba(201,144,26,0.2); border-radius: 14px; padding: 1.3rem 1.4rem; display: flex; align-items: center; gap: 1rem; }
        .hwc-stat-icon { width: 48px; height: 48px; min-width: 48px; background: rgba(201,144,26,0.1); border: 1px solid rgba(201,144,26,0.25); border-radius: 12px; display: flex; align-items: center; justify-content: center; }
        .hwc-stat-num { margin: 0; font-family: var(--font-number); font-size: 1.8rem; font-weight: 700; color: var(--forest); line-height: 1; }
        .hwc-stat-label { margin: 0.3rem 0 0; font-size: 0.8rem; color: var(--gray); font-weight: 600; line-height: 1.4; }

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

        .hwc-2col > *, .hwc-2col-map > *, .hwc-2col-dev > * { min-width: 0; }
        .hwc-section h2, .hwc-section h3 { overflow-wrap: break-word; }
        @media (max-width: 900px) {
          .hwc-section .btn-primary,
          .hwc-section .btn-dark {
            white-space: normal;
            max-width: 100%;
            text-align: center;
            justify-content: center;
          }
        }

        /* TABLET ≤ 900px */
        @media (max-width: 900px) {
          .hwc-2col, .hwc-2col-map, .hwc-2col-dev { grid-template-columns: minmax(0, 1fr); gap: 2.5rem; }
          .hwc-amenities { grid-template-columns: repeat(2, 1fr); }
          .hwc-milestones{ grid-template-columns: repeat(2, 1fr); }
          .hwc-highlights{ grid-template-columns: repeat(3, 1fr); }
          .hwc-map-card  { height: 360px; }
          .hwc-cta-wrap  { padding: 3rem 2rem; }
          .hwc-wi-stats  { grid-template-columns: repeat(2, 1fr); }
          .hwc-wi-grid   { grid-template-columns: repeat(2, 1fr); }
        }

        /* MOBILE ≤ 600px */
        @media (max-width: 600px) {
          .hwc-section   { padding: 3rem 0; }
          .hwc-container { padding: 0 1rem; }
          .hwc-center    { margin-bottom: 1.75rem; }
          .hwc-glance-row{ grid-template-columns: 1fr; }
          .hwc-glance-lbl{ border-right: none; border-bottom: 1px solid rgba(201,144,26,0.1); padding: 0.65rem 1rem; }
          .hwc-glance-val{ padding: 0.7rem 1rem; }
          .hwc-amenities { grid-template-columns: 1fr; gap: 1rem; }
          .hwc-milestones{ grid-template-columns: 1fr; }
          .hwc-highlights{ grid-template-columns: 1fr; gap: 0.7rem; }
          .hwc-map-card  { height: 270px; }
          .hwc-cta-wrap  { padding: 2rem 1rem; flex-direction: column; }
          .hwc-cta-btns  { align-items: stretch; width: 100%; }
          .hwc-cta-btns a{ text-align: center; justify-content: center; }
          .hwc-wi-stats, .hwc-wi-grid, .hwc-wi-phases { grid-template-columns: 1fr; }
        }

        @media (max-width: 380px) {
          .hwc-highlights { grid-template-columns: 1fr; }
        }

        /* MOBILE HERO (≤ 768px only) */
        @media (max-width: 768px) {
          .hero.hwc-hero {
            height: auto !important;
            min-height: 0 !important;
            aspect-ratio: auto !important;
            display: block !important;
            overflow: visible !important;
            padding: 72px 0 0 !important;
            background: var(--white) !important;
          }

          .hwc-hero .hero-slides,
          .hwc-hero .hero-img-overlay,
          .hwc-hero .hero-bottom-shadow,
          .hwc-hero .scroll-indicator {
            display: none !important;
          }

          .hwc-hero-card {
            display: block;
            background: none;
            border: none;
            box-shadow: none;
            border-radius: 0;
            overflow: visible;
          }

          .hwc-hero-mobile-img {
            display: block;
            width: 100%;
            height: auto;
            border: none;
            border-radius: 0;
          }

          .hwc-hero .hero-content--new {
            position: static !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.9rem !important;
            width: 100% !important;
            max-width: none !important;
            margin: 0 !important;
            padding: 1.6rem 1.2rem 2.2rem !important;
            text-align: left !important;
            background: var(--white) url('https://res.cloudinary.com/dpbitfczf/image/upload/v1791270145/Soft_Mint_Waves_Abstract_Background_knxohj.png') center / cover no-repeat !important;
          }

          .hwc-hero .hero-col-title { width: 100%; }
          .hwc-hero .hero-title { width: 100% !important; align-self: stretch !important; text-align: center !important; }
          .hwc-hero .hero-title .line { display: block !important; width: 100%; text-align: center !important; }

          .hwc-hero .hero-title {
            font-size: 1.85rem !important;
            line-height: 1.15 !important;
            margin: 0 !important;
            color: var(--charcoal) !important;
          }
          .hwc-hero .hero-title em { color: var(--gold) !important; }

          .hwc-hero .hero-desc--stacked {
            font-size: 0.92rem !important;
            line-height: 1.7 !important;
            margin: 0.8rem 0 0 !important;
            color: var(--gray) !important;
            width: 100% !important;
            text-align: center !important;
          }

          .hwc-hero .hero-col-btns {
            position: static !important;
            width: 100% !important;
            margin: 0.4rem 0 0 !important;
            align-items: stretch !important;
          }
          .hwc-hero .hero-col-btns .hero-actions {
            position: static !important;
            width: 100% !important;
            margin: 0 !important;
            display: flex !important;
            justify-content: center !important;
          }
          .hwc-hero .hero-col-btns .btn-primary {
            width: 100%;
            justify-content: center;
            padding: 14px 22px !important;
            font-size: 13px !important;
          }
        }
      `}</style>

      {/* JSON-LD: RealEstateListing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            name: "Haute World City – Approved Plots in Dholera Smart City",
            description:
              "Approved residential plots in Dholera SIR by Haute World Developers. India's first Greenfield smart city on the Delhi–Mumbai Industrial Corridor, Gujarat.",
            url: "https://www.hautedevelopers.com/haute-world-city",
            image: "https://www.hautedevelopers.com/assets/dholera.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Dholera Expressway, along the Dholera SIR boundary",
              addressLocality: "Dholera",
              addressRegion: "Gujarat",
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

      {/* ══════════════════ HERO ══════════════════ */}
      <section
        className="hero hwc-hero"
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

        <div className="hwc-hero-card">
          <img
            className="hwc-hero-mobile-img"
            src="/assets/dholera.png"
            alt="Haute World City — entrance, Dholera Smart City"
          />

          <div className="hero-content hero-content--new">
            <div className="hero-col-title">
              <h1 className="hero-title" style={{ opacity: 1, transform: "none", animation: "none" }}>
                <span className="line line-1" style={{ opacity: 1, transform: "none", animation: "none" }}>
                  Haute <em>World City</em>
                </span>
              </h1>

              <p className="hero-desc--stacked" style={{ marginTop: "1.2rem", animation: "none", opacity: 1 }}>
                Haute World City is Haute World Developers' landmark investment in India's most ambitious project —
                Dholera Smart City. Approved residential plots located along the Dholera SIR boundary in Bhavnagar
                District, backed by the Central Government's Delhi–Mumbai Industrial Corridor initiative.
              </p>
            </div>

            <div className="hero-col-btns">
              <div className="hero-actions">
                <a href="#contact" className="btn-primary">Book a Site Visit →</a>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ══════════════════ PROJECT DETAILS ══════════════════ */}
      <section id="about" className="hwc-section" aria-labelledby="project-details-heading" style={{ background: "var(--white)" }}>
        <div className="hwc-container">
          <div className="hwc-2col">
            <div>
              <span className="section-label">Project Details</span>
              <h2 id="project-details-heading" style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)", marginBottom: "1rem" }}>
                Haute World City, Residential Plots on Dholera - Bhavnagar Expressway 
              </h2>
              <div className="divider" style={{ margin: "1rem 0" }} />

              <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.9, marginBottom: "1.2rem" }}>
                Haute World City is a residential township — plotted development — brought to you by
                <strong style={{ color: "var(--charcoal)" }}> Haute World Developers World Pvt Ltd</strong>, located
                along the Dholera SIR boundary in Bhavnagar District, Gujarat. The project
                offers Approved plots starting at <strong style={{ color: "var(--charcoal)" }}>200 sq. yd. and above</strong>,
                giving buyers the flexibility to choose a size that fits their investment goals or future home plans.
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.9, marginBottom: "2rem" }}>
                Every plot at Haute World City is <strong style={{ color: "var(--charcoal)" }}>Approved property</strong>,
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

      {/* ══════════════════ DHOLERA SMART CITY ══════════════════ */}
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
                    display: "flex", flexDirection: "column",
                    position: "relative", overflow: "hidden", height: "100%", boxSizing: "border-box",
                  }}
                >
                  <div style={{ width: "100%", height: "170px", overflow: "hidden", background: "var(--cream)" }}>
                    <img
                      src={m.image}
                      alt=""
                      aria-hidden="true"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>

                  <div style={{ padding: "1.6rem 1.5rem 1.8rem", display: "flex", alignItems: "flex-start", gap: "0.9rem" }}>
                    <div style={{ width: "56px", height: "56px", background: "rgba(201,144,26,0.1)", border: "1px solid rgba(201,144,26,0.25)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <m.Icon size={28} color="var(--gold)" />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 700, color: "var(--charcoal)", margin: "0 0 0.4rem", lineHeight: 1.3 }}>
                        {m.title}
                      </h3>
                      <p style={{ margin: 0, fontSize: "0.83rem", color: "var(--gray)", lineHeight: 1.7 }}>
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </article>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ PROJECT HIGHLIGHTS ══════════════════ */}
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

      {/* ══════════════════ LOCATION ADVANTAGE ══════════════════ */}
      <section id="location" className="hwc-section" aria-labelledby="location-heading" style={{ background: "var(--cream)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(201,144,26,0.04) 0, rgba(201,144,26,0.04) 1px, transparent 0, transparent 50%)", backgroundSize: "40px 40px" }} />
        <div className="hwc-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hwc-2col-map">
            <div>
              <div style={{ borderLeft: "3px solid var(--gold)", paddingLeft: "1rem", marginBottom: "1.4rem" }}>
                <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--gold)", margin: 0, fontWeight: 500 }}>
                  Location Advantage
                </p>
              </div>
              <h2 id="location-heading" style={{ fontSize: "clamp(1.65rem, 3vw, 2.6rem)", fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--charcoal)", lineHeight: 1.2, marginBottom: "1.8rem" }}>
                Haute World City sits along the Dholera SIR boundary — directly on the Dholera Expressway
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {proximityBullets.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.95rem", color: "var(--charcoal)", fontWeight: 500, lineHeight: 1.5 }}>
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
              <img src="/assets/dholera-map.png" alt="Haute World City location map — Dholera Expressway, Bhavnagar District, Gujarat" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ AMENITIES ══════════════════ */}
      <section id="amenities" className="hwc-section" aria-labelledby="amenities-heading" style={{ background: "var(--forest-dark)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(201,144,26,0.04) 0, rgba(201,144,26,0.04) 1px, transparent 0, transparent 50%)", backgroundSize: "40px 40px" }} />
        <div className="hwc-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hwc-center" style={{ maxWidth: 560 }}>
            <span className="section-label" style={{ color: "var(--gold)" }}>Haute World City Amenities</span>
            <h2 id="amenities-heading" style={{ color: "#fff" }}>
              Zen Living Infrastructure for a Future-Ready Community
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
                {a.image && (
                  <div className="hwc-amenity-img">
                    <img src={a.image} alt="" aria-hidden="true" />
                  </div>
                )}
                <div className="hwc-amenity-body">
                  <div style={{ width: "56px", height: "56px", background: "rgba(201,144,26,0.15)", border: "1px solid rgba(201,144,26,0.3)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <a.Icon size={28} color="var(--gold)" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 700, color: "#fff", margin: "0 0 0.4rem", lineHeight: 1.3 }}>
                      {a.label}
                    </h3>
                    <p style={{ margin: 0, fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                      {a.body}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ SITE PLAN ══════════════════ */}
      <section id="masterplan" className="hwc-section" aria-labelledby="layout-heading" style={{ background: "var(--white)" }}>
        <div className="hwc-container">
          <div className="hwc-center">
            <span className="section-label">Layout Overview</span>
            <h2 id="layout-heading">Project Site Plan</h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ fontSize: "0.92rem", color: "var(--gray)", lineHeight: 1.8 }}>
              A thoughtfully planned residential township designed for Inspired zen living — with wide internal roads,
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
            {layoutStats.map((h) => (
              <div key={h.label} className="hwc-stat-box">
                <div className="hwc-stat-icon">
                  <h.Icon size={22} color="var(--gold)" />
                </div>
                <div>
                  <p className="hwc-stat-num">{h.value}</p>
                  <p className="hwc-stat-label">{h.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY INVEST (NEW) ══════════════════ */}
      <section id="why-invest" className="hwc-section" aria-labelledby="why-invest-heading" style={{ background: "var(--cream)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(201,144,26,0.04) 0, rgba(201,144,26,0.04) 1px, transparent 0, transparent 50%)", backgroundSize: "40px 40px" }} />
        <div className="hwc-container" style={{ position: "relative", zIndex: 1 }}>

          <div className="hwc-center" style={{ maxWidth: 680 }}>
            <h2 id="why-invest-heading" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)", lineHeight: 1.2 }}>
              A Smart City Is Taking Shape — and Haute World City Is Right on Its Doorstep
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.85 }}>
              Factories, expressways and housing are already on the ground. Here is what makes this
              address a thoughtful long-term choice for families and land owners.
            </p>
          </div>

          <div className="hwc-wi-stats">
            {whyStats.map((s) => (
              <RevealItem key={s.label} className="hwc-wi-stat">
                <p className="hwc-wi-stat-v">{s.value}</p>
                <p className="hwc-wi-stat-l">{s.label}</p>
              </RevealItem>
            ))}
          </div>

          <div className="hwc-wi-grid">
            {whyReasons.map((r) => (
              <RevealItem key={r.title}>
                <article className="hwc-wi-card">
                  <div className="hwc-wi-icon"><r.Icon size={26} color="var(--gold)" /></div>
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                </article>
              </RevealItem>
            ))}
          </div>

          <div className="hwc-wi-phases">
            {whyPhases.map((p) => (
              <div key={p.tag} className="hwc-wi-phase">
                <span className="hwc-wi-tag">{p.tag}</span>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>

          <p className="hwc-wi-note">
            Planned cities reward patience. Owners who come in early and hold through the build-out
            are positioned to enjoy the full journey of the city's growth.
          </p>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href="#contact" className="btn-dark">Talk to Our Investment Team →</a>
          </div>
        </div>
      </section>

      {/* ══════════════════ FAQ ══════════════════ */}
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

      {/* ══════════════════ BLOG ══════════════════ */}
      <section id="blogs" className="hwc-section" aria-labelledby="blogs-heading" style={{ background: "var(--cream)", borderTop: "1px solid rgba(201,144,26,0.18)" }}>
        <div className="hwc-container">
          <ExpresswayBlog />
        </div>
      </section>

      {/* ══════════════════ CONTACT + MAP ══════════════════ */}
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
                title="Haute World City Location Map — Dholera Expressway, Bhavnagar District, Gujarat"
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