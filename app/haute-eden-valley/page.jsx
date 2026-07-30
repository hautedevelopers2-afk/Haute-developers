// Place this file at: app/page.jsx
//
// Self-contained single-file page — no Tailwind, no external component
// imports. Matches the pattern of the reference files you shared: inline
// SVG icons, a scoped <style> block, plain data arrays, JSON-LD.
//
// Because this is a "use client" file (needed for the mobile menu and the
// booking form), it cannot export `metadata`. Put the SEO metadata export
// below in app/layout.js instead:
//
//   export const metadata = {
//     title: "Wildroot Cottages | Luxury Nature Cottages & Wilderness Retreats",
//     description:
//       "Book a luxury nature cottage retreat at Wildroot Cottages — eco-friendly cabins, guided wilderness activities, and lakeside getaways surrounded by forest.",
//     keywords:
//       "luxury nature cottages, nature retreat, eco-friendly cottage stay, wilderness getaway, lakeside cabin rental, sustainable luxury lodging, forest cottage retreat",
//     alternates: { canonical: "https://www.wildrootcottages.com" },
//   };

"use client";

import { useEffect, useState } from "react";

/* ─────────────────────────────────────────
   SVG ICON COMPONENTS
───────────────────────────────────────── */
const IconTree = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22v-7" /><path d="M9 15H5l7-7 7 7h-4" /><path d="M7 11H3l9-9 9 9h-4" />
  </svg>
);
const IconMenu = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const IconClose = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconArrowRight = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const IconArrowUpRight = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);
const IconLeaf = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 4 13c0-5 4-10 10-11 1 6-1 10-3 13" />
    <path d="M11 20a7 7 0 0 0 7-7c0-2 0-4-1-6" />
  </svg>
);
const IconTicket = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z" />
  </svg>
);
const IconCrown = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 8l4 4 6-8 6 8 4-4-2 12H4L2 8z" />
  </svg>
);
const IconMapPin = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
const IconMail = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 6l10 7 10-7" />
  </svg>
);
const IconPhone = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconPlus = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const IconFacebook = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IconInstagram = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);
const IconYoutube = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="5" width="20" height="14" rx="3" /><polygon points="10 9 15 12 10 15 10 9" />
  </svg>
);
const IconTwitter = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9 9 0 0 1-2.83 1.08 4.52 4.52 0 0 0-7.7 4.13A12.8 12.8 0 0 1 2.7 1.15a4.52 4.52 0 0 0 1.4 6.03A4.48 4.48 0 0 1 2 6.6v.06a4.52 4.52 0 0 0 3.63 4.43 4.5 4.5 0 0 1-2.04.08 4.52 4.52 0 0 0 4.22 3.14A9.06 9.06 0 0 1 1 16.4a12.78 12.78 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.02-.58A9.2 9.2 0 0 0 23 3z" />
  </svg>
);

/* ─────────────────────────────────────────
   MOCK IMAGES (swap for real photography later)
───────────────────────────────────────── */
const img = {
  heroBg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
  aboutCottage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
  aboutInterior: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1200",
  bookingBg: "https://picsum.photos/seed/farmhouse2/1200/800",
  bookingCottage: "https://picsum.photos/seed/villa1/1200/800",
  promoBg: "https://picsum.photos/seed/alps1/1200/800",
};

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Cottages", href: "#cottages" },
  { label: "Activities", href: "#activities" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#booking" },
];

const heroStats = [
  { value: "95%", label: "Guests Who Return" },
  { value: "88%", label: "Say It Felt Restorative" },
];

const aboutBlocks = [
  { type: "image", src: img.aboutCottage, alt: "Wooden luxury nature cottage nestled in the forest" },
  {
    type: "card",
    dark: true,
    title: "Rooted In Conservation Since 2004",
    body: "Every luxury cottage stay directly funds the reforestation and wildlife programs that keep this land wild for the next generation of guests.",
  },
  { type: "image", src: img.aboutInterior, alt: "Warm, minimalist interior of a nature retreat cottage" },
  {
    type: "card",
    dark: false,
    title: "Award-Winning Retreats & Private Gatherings",
    body: "From quiet solo escapes to intimate group retreats, each stay is designed around slow mornings, open air, and genuine rest.",
  },
];

const cottages = [
  { name: "Creek-Side Cottages", excerpt: "Fall asleep to running water in a cabin built along a private forest creek.", image: "https://picsum.photos/seed/cabin1/1200/800" },
  { name: "Lake-Edge Cabins", excerpt: "A-frame cabins with floor-to-ceiling views across a still mountain lake.", image: "https://picsum.photos/seed/chalet1/1200/800" },
  { name: "Forest Floor Bungalows", excerpt: "Ground-level bungalows tucked beneath old-growth pine canopy.", image: "https://picsum.photos/seed/cottage1/1200/800" },
  { name: "Pine Grove Hideaways", excerpt: "Stone-and-timber hideaways framed by a quiet grove of pine.", image: "https://picsum.photos/seed/farmhouse1/1200/800" },
  { name: "Canopy Treehouses", excerpt: "Elevated treehouse suites with wraparound porches above the forest floor.", image: "https://picsum.photos/seed/lakehouse1/1200/800" },
  { name: "Mountain-Top Retreats", excerpt: "Ridge-line cottages with the widest sunrise views on the property.", image: "https://picsum.photos/seed/hills1/1200/800" },
];

const activities = [
  { title: "Herb Garden Tours", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200" },
  { title: "Guided Wildlife Tracking", image: "https://picsum.photos/seed/mountains1/1200/800" },
  { title: "Forest Meditation Journeys", image: "https://picsum.photos/seed/alps1/1200/800" },
  { title: "Paddle The Serene Waterways", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200" },
];

const promoPerks = [
  { icon: IconTicket, label: "Early Bird Special" },
  { icon: IconCrown, label: "Extended Stay Rewards" },
  { icon: IconLeaf, label: "Seasonal Promotions" },
];

const blogPosts = [
  {
    date: "20 Dec",
    title: "5 Everyday Mindfulness Practices Inspired By Nature",
    excerpt: "Simple, grounding rituals borrowed from the forest that you can bring home with you.",
    image: "https://picsum.photos/seed/cabin1/1200/800",
  },
  {
    date: "20 Dec",
    title: "From Forest To Table: The Story Behind Our Local Meals",
    excerpt: "How our kitchen sources from nearby growers to keep every meal seasonal and local.",
    image: "https://picsum.photos/seed/farmhouse1/1200/800",
  },
];

const popularPosts = [
  { title: "Top 10 Things To Do At Nature Cottages In Every Season", date: "20 Dec 2025", image: "https://picsum.photos/seed/hills1/1200/800" },
  { title: "The Ultimate Packing Guide For Your Cottage Retreat", date: "20 Dec 2025", image: "https://picsum.photos/seed/chalet1/1200/800" },
  { title: "Why Eco-Friendly Travel Matters: How Your Stay Helps", date: "20 Dec 2025", image: "https://picsum.photos/seed/lakehouse1/1200/800" },
];

// ---------------------------------------------------------------------------
// Where the booking / contact form should send guests once submitted.
// This form is NOT wired up to send data anywhere yet — it simply redirects
// to this URL on submit. Swap it for the real booking link, mailto, or form
// endpoint whenever you're ready and share it.
// ---------------------------------------------------------------------------
const BOOKING_REDIRECT_URL = "#";

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleBookingSubmit(e) {
    e.preventDefault();
    window.location.href = BOOKING_REDIRECT_URL;
  }

  const headerSolid = scrolled || menuOpen;

  return (
    <>
      {/* ══════════════════════════════════════════
          SCOPED STYLES — .wc-* prefix (Wildroot Cottages)
      ══════════════════════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Manrope:wght@400;500;600;700;800&display=swap');

        :root {
          --wc-forest-950: #0e2019;
          --wc-forest-900: #14291f;
          --wc-forest-800: #1b3a2c;
          --wc-olive: #5b6a3f;
          --wc-gold: #e0b054;
          --wc-gold-light: #e7c078;
          --wc-gold-dark: #a8751f;
          --wc-cream: #fdfcf7;
          --wc-cream-2: #f6f2e7;
          --wc-stone: #5b6660;
          --wc-font-display: 'Fraunces', 'Playfair Display', Georgia, serif;
          --wc-font-body: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .wc-page { font-family: var(--wc-font-body); background: var(--wc-cream); color: var(--wc-forest-950); }
        .wc-page a { text-decoration: none; color: inherit; }
        .wc-page * { box-sizing: border-box; }
        .wc-container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
        .wc-eyebrow { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
        .wc-italic { font-family: var(--wc-font-display); font-style: italic; font-weight: 500; }
        .wc-btn-gold {
          display: inline-block; background: var(--wc-gold); color: var(--wc-forest-950);
          padding: 1rem 2rem; border-radius: 999px; font-weight: 700; font-size: 0.9rem;
          border: none; cursor: pointer; transition: background 0.2s ease, transform 0.2s ease;
        }
        .wc-btn-gold:hover { background: var(--wc-gold-light); transform: translateY(-2px); }
        .wc-btn-outline {
          display: inline-block; background: transparent; color: #fff;
          padding: 1rem 2rem; border-radius: 999px; font-weight: 700; font-size: 0.9rem;
          border: 1px solid rgba(255,255,255,0.45); transition: background 0.2s ease;
        }
        .wc-btn-outline:hover { background: rgba(255,255,255,0.1); }

        /* Header */
        .wc-header { position: fixed; top: 0; left: 0; right: 0; z-index: 50; transition: background 0.3s ease, box-shadow 0.3s ease; }
        .wc-header.solid { background: rgba(20,41,31,0.97); box-shadow: 0 8px 30px rgba(14,32,25,0.25); }
        .wc-header-inner { display: flex; align-items: center; justify-content: space-between; padding: 1.1rem 0; }
        .wc-logo { display: flex; align-items: center; gap: 0.5rem; color: #fdfcf7; font-family: var(--wc-font-display); font-style: italic; font-size: 1.3rem; }
        .wc-nav { display: none; align-items: center; gap: 2rem; }
        .wc-nav a { font-size: 0.9rem; font-weight: 600; color: rgba(253,252,247,0.9); }
        .wc-nav a:hover { color: var(--wc-gold); }
        .wc-header-cta { display: none; }
        .wc-menu-btn { display: inline-flex; background: none; border: none; color: #fdfcf7; cursor: pointer; }
        .wc-mobile-nav { border-top: 1px solid rgba(253,252,247,0.1); background: var(--wc-forest-900); padding: 1.2rem 1.5rem 1.6rem; display: flex; flex-direction: column; gap: 1rem; }

        @media (min-width: 992px) {
          .wc-nav { display: flex; }
          .wc-header-cta { display: inline-block; }
          .wc-menu-btn { display: none; }
        }

        /* Hero */
        .wc-hero { position: relative; min-height: 92vh; display: flex; align-items: flex-end; overflow: hidden; background: var(--wc-forest-950); }
        .wc-hero-bg { position: absolute; inset: 0; background-size: cover; background-position: center; }
        .wc-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(14,32,25,0.85), rgba(14,32,25,0.5) 45%, rgba(14,32,25,0.85)); }
        .wc-hero-inner { position: relative; z-index: 1; width: 100%; padding: 9rem 0 4.5rem; display: grid; gap: 3rem; grid-template-columns: 1fr; }
        .wc-hero-title { font-family: var(--wc-font-display); font-weight: 600; font-size: clamp(2.2rem, 5vw, 3.6rem); line-height: 1.15; color: #fdfcf7; max-width: 640px; margin: 0.6rem 0 2rem; }
        .wc-hero-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .wc-stat-card { border: 1px solid rgba(253,252,247,0.15); background: rgba(20,41,31,0.6); backdrop-filter: blur(6px); border-radius: 16px; padding: 1.4rem; }
        .wc-stat-num { font-family: var(--wc-font-display); font-size: 2.2rem; color: #fdfcf7; margin: 0; }
        .wc-stat-num span { color: var(--wc-gold); }
        .wc-stat-label { margin: 0.4rem 0 0; font-size: 0.85rem; color: rgba(253,252,247,0.75); }
        .wc-hero-badge { display: flex; align-items: center; gap: 1rem; border: 1px solid rgba(253,252,247,0.15); background: rgba(20,41,31,0.6); backdrop-filter: blur(6px); border-radius: 16px; padding: 1.1rem; margin-top: 1rem; }
        .wc-hero-badge-icon { width: 44px; height: 44px; border-radius: 50%; background: var(--wc-gold); display: flex; align-items: center; justify-content: center; color: var(--wc-forest-950); }

        @media (min-width: 992px) {
          .wc-hero-inner { grid-template-columns: 1.3fr 1fr; align-items: end; }
        }

        /* Section basics */
        .wc-section { padding: 5.5rem 0; }
        .wc-section-head { max-width: 640px; }
        .wc-h2 { font-family: var(--wc-font-display); font-weight: 600; font-size: clamp(1.8rem, 3vw, 2.5rem); line-height: 1.2; margin: 0.6rem 0 0; }

        /* About */
        .wc-about-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-top: 3.2rem; }
        .wc-about-image { position: relative; height: 280px; border-radius: 18px; overflow: hidden; }
        .wc-about-image img { width: 100%; height: 100%; object-fit: cover; }
        .wc-about-card { height: 280px; border-radius: 18px; padding: 2rem; display: flex; flex-direction: column; justify-content: center; }
        .wc-about-card h3 { font-family: var(--wc-font-display); font-size: 1.25rem; margin: 0; line-height: 1.35; }
        .wc-about-card p { margin: 1rem 0 0; font-size: 0.9rem; line-height: 1.6; opacity: 0.85; }

        @media (min-width: 640px) {
          .wc-about-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 992px) {
          .wc-about-grid { grid-template-columns: repeat(4, 1fr); }
          .wc-about-image, .wc-about-card { height: 380px; }
        }

        /* Cottages */
        .wc-cottage-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-top: 3.2rem; }
        .wc-cottage-card { position: relative; display: block; height: 320px; border-radius: 18px; overflow: hidden; }
        .wc-cottage-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .wc-cottage-card:hover img { transform: scale(1.06); }
        .wc-cottage-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(14,32,25,0.92), rgba(14,32,25,0.1) 55%, transparent); }
        .wc-cottage-info { position: absolute; left: 1rem; right: 1rem; bottom: 1rem; display: flex; align-items: flex-end; justify-content: space-between; gap: 0.8rem; }
        .wc-cottage-info h3 { font-family: var(--wc-font-display); font-size: 1.15rem; color: #fdfcf7; margin: 0; }
        .wc-cottage-info p { font-size: 0.78rem; color: rgba(253,252,247,0.8); margin: 0.3rem 0 0; line-height: 1.4; }
        .wc-cottage-arrow { flex-shrink: 0; width: 38px; height: 38px; border-radius: 50%; background: var(--wc-gold); display: flex; align-items: center; justify-content: center; color: var(--wc-forest-950); }

        @media (min-width: 640px) {
          .wc-cottage-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 992px) {
          .wc-cottage-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* Booking */
        .wc-booking-wrap { border-radius: 24px; overflow: hidden; display: grid; grid-template-columns: 1fr; }
        .wc-booking-form-panel { position: relative; padding: 2.2rem 1.5rem; }
        .wc-booking-form-bg { position: absolute; inset: 0; background-size: cover; background-position: center; }
        .wc-booking-form-tint { position: absolute; inset: 0; background: rgba(253,252,247,0.9); }
        .wc-booking-form { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr; gap: 1rem; }
        .wc-field label { display: block; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: rgba(14,32,25,0.65); margin-bottom: 0.4rem; }
        .wc-field input, .wc-field select, .wc-field textarea {
          width: 100%; border: 1px solid rgba(14,32,25,0.12); border-radius: 12px; padding: 0.8rem 1rem;
          font-size: 0.9rem; background: #fdfcf7; color: var(--wc-forest-950); font-family: inherit;
        }
        .wc-field input:focus, .wc-field select:focus, .wc-field textarea:focus {
          outline: none; border-color: var(--wc-gold); box-shadow: 0 0 0 3px rgba(224,176,84,0.25);
        }
        .wc-booking-info-panel { background: var(--wc-forest-900); color: #fdfcf7; padding: 2.2rem 1.5rem; display: flex; flex-direction: column; justify-content: center; gap: 1.2rem; }
        .wc-booking-info-panel img { width: 100%; height: 190px; object-fit: cover; border-radius: 16px; }

        @media (min-width: 640px) {
          .wc-booking-form { grid-template-columns: 1fr 1fr; }
          .wc-field-full { grid-column: 1 / -1; }
        }
        @media (min-width: 992px) {
          .wc-booking-wrap { grid-template-columns: 1fr 1fr; }
          .wc-booking-form-panel, .wc-booking-info-panel { padding: 3rem; }
        }

        .wc-booking-cta { position: relative; border-radius: 24px; overflow: hidden; }
        .wc-booking-cta-bg { position: absolute; inset: 0; background-size: cover; background-position: center; }
        .wc-booking-cta-tint { position: absolute; inset: 0; background: linear-gradient(120deg, rgba(14,32,25,0.95), rgba(14,32,25,0.75) 70%); }
        .wc-booking-cta-inner { position: relative; z-index: 1; padding: 3rem 1.5rem; display: flex; flex-direction: column; align-items: flex-start; gap: 0.6rem; }
        @media (min-width: 768px) {
          .wc-booking-cta-inner { padding: 4rem; }
        }

        /* Activities */
        .wc-activity-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin-top: 3.2rem; }
        .wc-activity-card { position: relative; display: block; height: 220px; border-radius: 16px; overflow: hidden; }
        .wc-activity-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .wc-activity-card:hover img { transform: scale(1.06); }
        .wc-activity-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(14,32,25,0.9), transparent 60%); }
        .wc-activity-icon { position: absolute; top: 0.7rem; right: 0.7rem; width: 34px; height: 34px; border-radius: 50%; background: var(--wc-gold); display: flex; align-items: center; justify-content: center; color: var(--wc-forest-950); }
        .wc-activity-label { position: absolute; left: 0.7rem; right: 0.7rem; bottom: 0.7rem; background: rgba(14,32,25,0.45); backdrop-filter: blur(4px); border-radius: 10px; padding: 0.55rem 0.75rem; font-size: 0.85rem; font-weight: 600; color: #fdfcf7; }

        @media (min-width: 768px) {
          .wc-activity-grid { grid-template-columns: repeat(4, 1fr); }
        }

        /* Promo */
        .wc-promo-card { position: relative; border-radius: 24px; overflow: hidden; }
        .wc-promo-bg { position: absolute; inset: 0; background-size: cover; background-position: center; }
        .wc-promo-tint { position: absolute; inset: 0; background: linear-gradient(120deg, rgba(14,32,25,0.92), rgba(14,32,25,0.55) 60%, rgba(14,32,25,0.15)); }
        .wc-promo-inner { position: relative; z-index: 1; padding: 2.6rem 1.5rem; display: grid; grid-template-columns: 1fr; gap: 2rem; }
        .wc-promo-title { font-family: var(--wc-font-display); font-size: clamp(1.7rem, 3vw, 2.3rem); color: #fdfcf7; margin: 0.6rem 0 1.6rem; max-width: 420px; line-height: 1.25; }
        .wc-promo-actions { display: flex; flex-wrap: wrap; gap: 1rem; }
        .wc-promo-perks { display: flex; flex-direction: column; gap: 0.7rem; background: rgba(14,32,25,0.4); backdrop-filter: blur(6px); border-radius: 16px; padding: 1.1rem; }
        .wc-perk { display: flex; align-items: center; gap: 0.8rem; background: rgba(253,252,247,0.1); border-radius: 12px; padding: 0.7rem 1rem; }
        .wc-perk-icon { width: 34px; height: 34px; border-radius: 8px; background: var(--wc-gold); display: flex; align-items: center; justify-content: center; color: var(--wc-forest-950); flex-shrink: 0; }
        .wc-perk span { font-size: 0.85rem; font-weight: 600; color: #fdfcf7; }

        @media (min-width: 992px) {
          .wc-promo-inner { grid-template-columns: 1.3fr 1fr; align-items: center; padding: 4rem; }
        }

        /* Blog */
        .wc-blog-head { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 1.2rem; }
        .wc-blog-grid { display: grid; grid-template-columns: 1fr; gap: 1.6rem; margin-top: 3.2rem; }
        .wc-blog-posts { display: grid; grid-template-columns: 1fr; gap: 1.6rem; }
        .wc-blog-image { position: relative; height: 210px; border-radius: 16px; overflow: hidden; }
        .wc-blog-image img { width: 100%; height: 100%; object-fit: cover; }
        .wc-blog-date { position: absolute; top: 0.9rem; left: 0.9rem; background: rgba(14,32,25,0.85); color: #fdfcf7; font-size: 0.72rem; font-weight: 700; padding: 0.5rem 0.7rem; border-radius: 10px; text-align: center; line-height: 1.3; }
        .wc-blog-post h3 { font-family: var(--wc-font-display); font-size: 1.1rem; margin: 1.2rem 0 0.6rem; line-height: 1.35; }
        .wc-blog-post p { font-size: 0.88rem; color: var(--wc-stone); line-height: 1.6; margin: 0; }
        .wc-blog-post a { display: inline-flex; align-items: center; gap: 0.4rem; margin-top: 0.9rem; font-size: 0.85rem; font-weight: 700; color: var(--wc-forest-900); }
        .wc-popular { background: var(--wc-forest-900); color: #fdfcf7; border-radius: 18px; padding: 1.6rem; }
        .wc-popular h3 { font-family: var(--wc-font-display); font-size: 1.1rem; margin: 0 0 1.2rem; }
        .wc-popular-item { display: flex; gap: 0.8rem; align-items: flex-start; margin-bottom: 1.1rem; }
        .wc-popular-item:last-child { margin-bottom: 0; }
        .wc-popular-item img { width: 54px; height: 54px; border-radius: 10px; object-fit: cover; flex-shrink: 0; }
        .wc-popular-item p { font-size: 0.82rem; font-weight: 600; margin: 0; line-height: 1.4; }
        .wc-popular-item span { display: block; font-size: 0.72rem; color: rgba(253,252,247,0.55); margin-top: 0.35rem; }

        @media (min-width: 640px) {
          .wc-blog-posts { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 992px) {
          .wc-blog-grid { grid-template-columns: 2fr 1fr; }
        }

        /* Footer */
        .wc-footer { background: var(--wc-forest-900); color: #fdfcf7; padding-top: 4rem; }
        .wc-footer-grid { display: grid; grid-template-columns: 1fr; gap: 2.5rem; }
        .wc-footer-col h4 { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(253,252,247,0.55); margin: 0 0 1.1rem; }
        .wc-footer-col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.7rem; }
        .wc-footer-col ul a { font-size: 0.88rem; color: rgba(253,252,247,0.8); }
        .wc-footer-col ul a:hover { color: var(--wc-gold); }
        .wc-footer-desc { font-size: 0.88rem; color: rgba(253,252,247,0.7); max-width: 300px; margin: 1rem 0 1.4rem; line-height: 1.6; }
        .wc-social { display: flex; gap: 0.6rem; }
        .wc-social a { width: 34px; height: 34px; border-radius: 50%; background: rgba(253,252,247,0.1); display: flex; align-items: center; justify-content: center; }
        .wc-social a:hover { background: var(--wc-gold); color: var(--wc-forest-950); }
        .wc-contact-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.9rem; font-size: 0.86rem; color: rgba(253,252,247,0.8); }
        .wc-contact-list li { display: flex; align-items: flex-start; gap: 0.6rem; }
        .wc-footer-bottom { margin-top: 3.4rem; border-top: 1px solid rgba(253,252,247,0.1); padding: 1.4rem 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.8rem; font-size: 0.78rem; color: rgba(253,252,247,0.55); }
        .wc-footer-bottom a { color: rgba(253,252,247,0.55); }
        .wc-footer-bottom a:hover { color: var(--wc-gold); }

        @media (min-width: 768px) {
          .wc-footer-grid { grid-template-columns: 1.4fr 1fr 1fr 1.2fr; }
        }
      `}</style>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            name: "Wildroot Cottages",
            description:
              "Luxury nature cottages and guided wilderness activities, rooted in conservation and built for genuine rest.",
            url: "https://www.wildrootcottages.com",
            image: img.heroBg,
            telephone: "+1-201-120-360",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Thornridge Cir",
              addressLocality: "Syracuse",
              addressRegion: "Connecticut",
              postalCode: "35624",
              addressCountry: "US",
            },
          }),
        }}
      />

      <div className="wc-page">
        {/* ══════════════ HEADER ══════════════ */}
        <header className={`wc-header ${headerSolid ? "solid" : ""}`}>
          <div className="wc-container wc-header-inner">
            <a href="#home" className="wc-logo">
              <IconTree size={22} color="var(--wc-gold)" />
              Wildroot Cottages
            </a>

            <nav className="wc-nav" aria-label="Primary">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </nav>

            <a href="#booking" className="wc-btn-gold wc-header-cta">Booking Now</a>

            <button
              type="button"
              className="wc-menu-btn"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <IconClose color="#fdfcf7" /> : <IconMenu color="#fdfcf7" />}
            </button>
          </div>

          {menuOpen && (
            <nav className="wc-mobile-nav" aria-label="Mobile">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
              ))}
              <a href="#booking" className="wc-btn-gold" style={{ width: "fit-content" }} onClick={() => setMenuOpen(false)}>
                Booking Now
              </a>
            </nav>
          )}
        </header>

        {/* ══════════════ HERO ══════════════ */}
        <section id="home" className="wc-hero" aria-label="Wildroot Cottages hero">
          <div className="wc-hero-bg" style={{ backgroundImage: `url(${img.heroBg})` }} />
          <div className="wc-hero-overlay" />
          <div className="wc-container wc-hero-inner">
            <div>
              <p className="wc-eyebrow" style={{ color: "var(--wc-gold-light)" }}>Nature Cottage</p>
              <h1 className="wc-hero-title">
                Escape To Nature&rsquo;s Wild Comfort &amp; Stay In{" "}
                <span className="wc-italic" style={{ color: "var(--wc-gold-light)" }}>Warm Cottage</span>
              </h1>
              <a href="#cottages" className="wc-btn-gold">Explore Our Cottages</a>
            </div>

            <div>
              <div className="wc-hero-stats">
                {heroStats.map((s) => (
                  <div key={s.label} className="wc-stat-card">
                    <p className="wc-stat-num">{s.value}</p>
                    <p className="wc-stat-label">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="wc-hero-badge">
                <span className="wc-hero-badge-icon"><IconLeaf size={20} /></span>
                <div>
                  <p style={{ margin: 0, fontFamily: "var(--wc-font-display)", fontSize: "1.15rem", color: "var(--wc-gold-light)" }}>2000+</p>
                  <p style={{ margin: "0.2rem 0 0", fontSize: "0.85rem", color: "rgba(253,252,247,0.75)" }}>Satisfied Guests</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ ABOUT ══════════════ */}
        <section id="about" className="wc-section" style={{ background: "var(--wc-cream)" }}>
          <div className="wc-container">
            <div className="wc-section-head">
              <p className="wc-eyebrow" style={{ color: "var(--wc-olive)" }}>About Us</p>
              <h2 className="wc-h2">
                Discover Authentic Nature Experiences Through Luxury Cottage Stays That Actually{" "}
                <span className="wc-italic" style={{ color: "var(--wc-gold-dark)" }}>Protect Wild Spaces</span>
              </h2>
              <p style={{ marginTop: "1.2rem", color: "var(--wc-stone)", lineHeight: 1.75 }}>
                Wildroot Cottages pairs five-star comfort with genuine conservation practice — every
                stay is designed to leave the land, and you, better than it found them.
              </p>
            </div>

            <div className="wc-about-grid">
              {aboutBlocks.map((b, i) =>
                b.type === "image" ? (
                  <div key={i} className="wc-about-image">
                    <img src={b.src} alt={b.alt} loading="lazy" />
                  </div>
                ) : (
                  <div
                    key={i}
                    className="wc-about-card"
                    style={{ background: b.dark ? "var(--wc-forest-900)" : "var(--wc-olive)", color: "#fdfcf7" }}
                  >
                    <h3>{b.title}</h3>
                    <p>{b.body}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ══════════════ COTTAGES ══════════════ */}
        <section id="cottages" className="wc-section" style={{ background: "var(--wc-cream-2)" }}>
          <div className="wc-container">
            <div className="wc-section-head">
              <p className="wc-eyebrow" style={{ color: "var(--wc-olive)" }}>Our Cottages</p>
              <h2 className="wc-h2">
                Choose Your Perfect Peaceful Retreat{" "}
                <span className="wc-italic" style={{ color: "var(--wc-gold-dark)" }}>Experience Today!</span>
              </h2>
            </div>

            <div className="wc-cottage-grid">
              {cottages.map((c) => (
                <a key={c.name} href="#booking" className="wc-cottage-card">
                  <img src={c.image} alt={`${c.name} — luxury nature cottage at Wildroot Cottages`} loading="lazy" />
                  <div className="wc-cottage-overlay" />
                  <div className="wc-cottage-info">
                    <div>
                      <h3>{c.name}</h3>
                      <p>{c.excerpt}</p>
                    </div>
                    <span className="wc-cottage-arrow"><IconArrowRight /></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ ACTIVITIES ══════════════ */}
        <section id="activities" className="wc-section" style={{ background: "var(--wc-cream-2)" }}>
          <div className="wc-container" style={{ textAlign: "center" }}>
            <div className="wc-section-head" style={{ margin: "0 auto" }}>
              <p className="wc-eyebrow" style={{ color: "var(--wc-olive)" }}>Adventure Activities</p>
              <h2 className="wc-h2">
                Discover Peaceful Beauty Through Integrated Nature{" "}
                <span className="wc-italic" style={{ color: "var(--wc-gold-dark)" }}>Activities!</span>
              </h2>
              <p style={{ marginTop: "1.2rem", color: "var(--wc-stone)", lineHeight: 1.75 }}>
                Every activity is led by a local guide and paced for rest, not rush — pick what fits
                the mood of your stay.
              </p>
            </div>

            <div className="wc-activity-grid">
              {activities.map((a) => (
                <a key={a.title} href="#booking" className="wc-activity-card">
                  <img src={a.image} alt={`${a.title} at Wildroot Cottages`} loading="lazy" />
                  <div className="wc-activity-overlay" />
                  <span className="wc-activity-icon"><IconArrowUpRight /></span>
                  <span className="wc-activity-label">{a.title}</span>
                </a>
              ))}
            </div>

            <a href="#booking" className="wc-btn-gold" style={{ marginTop: "2.5rem", display: "inline-block" }}>
              View All Activities
            </a>
          </div>
        </section>

        {/* ══════════════ PROMO ══════════════ */}
        <section className="wc-section" style={{ background: "var(--wc-cream)" }}>
          <div className="wc-container">
            <div className="wc-promo-card">
              <div className="wc-promo-bg" style={{ backgroundImage: `url(${img.promoBg})` }} />
              <div className="wc-promo-tint" />
              <div className="wc-promo-inner">
                <div>
                  <p className="wc-eyebrow" style={{ color: "var(--wc-gold-light)" }}>Get Started</p>
                  <h2 className="wc-promo-title">
                    Early Bird Savings On Comfortable Nature{" "}
                    <span className="wc-italic" style={{ color: "var(--wc-gold-light)" }}>Adventures!</span>
                  </h2>
                  <div className="wc-promo-actions">
                    <a href="#booking" className="wc-btn-gold">Book a Cottage</a>
                    <a href="#booking" className="wc-btn-outline">Get a Quote</a>
                  </div>
                </div>

                <div className="wc-promo-perks">
                  {promoPerks.map((p) => (
                    <div key={p.label} className="wc-perk">
                      <span className="wc-perk-icon"><p.icon size={16} /></span>
                      <span>{p.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ BLOG ══════════════ */}
        <section id="blog" className="wc-section" style={{ background: "var(--wc-cream)" }}>
          <div className="wc-container">
            <div className="wc-blog-head">
              <div>
                <p className="wc-eyebrow" style={{ color: "var(--wc-olive)" }}>Blog &amp; News</p>
                <h2 className="wc-h2">
                  Our Latest <span className="wc-italic" style={{ color: "var(--wc-gold-dark)" }}>Post</span>
                </h2>
              </div>
              <a href="#" className="wc-btn-gold">See All Blog</a>
            </div>

            <div className="wc-blog-grid">
              <div className="wc-blog-posts">
                {blogPosts.map((post) => (
                  <article key={post.title} className="wc-blog-post">
                    <div className="wc-blog-image">
                      <img src={post.image} alt={post.title} loading="lazy" />
                      <span className="wc-blog-date">{post.date}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <a href="#">Discover More <IconArrowRight size={14} /></a>
                  </article>
                ))}
              </div>

              <div className="wc-popular">
                <h3>Most Popular Post</h3>
                {popularPosts.map((post) => (
                  <a key={post.title} href="#" className="wc-popular-item">
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <p>{post.title}<span>{post.date}</span></p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ FOOTER ══════════════ */}
        <footer className="wc-footer">
          <div className="wc-container">
            <div className="wc-footer-grid">
              <div className="wc-footer-col">
                <a href="#home" className="wc-logo">
                  <IconTree size={22} color="var(--wc-gold)" />
                  Wildroot Cottages
                </a>
                <p className="wc-footer-desc">
                  Luxury nature cottages and guided wilderness activities, rooted in conservation
                  and built for genuine rest.
                </p>
                <div className="wc-social">
                  <a href="#" aria-label="Facebook"><IconFacebook /></a>
                  <a href="#" aria-label="Instagram"><IconInstagram /></a>
                  <a href="#" aria-label="YouTube"><IconYoutube /></a>
                  <a href="#" aria-label="Twitter"><IconTwitter /></a>
                </div>
              </div>

              <div className="wc-footer-col">
                <h4>Support</h4>
                <ul>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Security</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>

              <div className="wc-footer-col">
                <h4>Navigation</h4>
                <ul>
                  {navLinks.map((l) => (
                    <li key={l.href}><a href={l.href}>{l.label}</a></li>
                  ))}
                </ul>
              </div>

              <div className="wc-footer-col">
                <h4>Get In Touch</h4>
                <ul className="wc-contact-list">
                  <li><IconMapPin size={16} color="var(--wc-gold)" /> Thornridge Cir, Syracuse, Connecticut 35624</li>
                  <li><IconMail size={16} color="var(--wc-gold)" /> hello@wildrootcottages.com</li>
                  <li><IconPhone size={16} color="var(--wc-gold)" /> (+1) 201 120 360</li>
                </ul>
              </div>
            </div>

            <div className="wc-footer-bottom">
              <p>Nature Cottage &ldquo;Wildroot Cottages&rdquo; &copy; {new Date().getFullYear()}. All rights reserved.</p>
              <div style={{ display: "flex", gap: "1.4rem" }}>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}