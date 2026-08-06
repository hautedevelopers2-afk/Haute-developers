"use client";

import { useState, useEffect } from "react";

// Adjust this import path to match where Navbar.jsx actually lives relative
// to this file (e.g. if this page is at src/app/page.jsx, "../components/Navbar"
// is correct; if it's nested one level deeper, use "../../components/Navbar").
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

/* ─────────────────────────────────────────
   SVG ICON COMPONENTS
───────────────────────────────────────── */
const IconTree = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22v-7" /><path d="M9 15H5l7-7 7 7h-4" /><path d="M7 11H3l9-9 9 9h-4" />
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
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 4 13c0-5 4-10 10-11 1 6-1 10-3 13" />
    <path d="M11 20a7 7 0 0 0 7-7c0-2 0-4-1-6" />
  </svg>
);
const IconTicket = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z" />
  </svg>
);
const IconCrown = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 8l4 4 6-8 6 8 4-4-2 12H4L2 8z" />
  </svg>
);
const IconMapPin = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
const IconMail = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 6l10 7 10-7" />
  </svg>
);
const IconPhone = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconFacebook = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IconInstagram = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);
const IconYoutube = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="5" width="20" height="14" rx="3" /><polygon points="10 9 15 12 10 15 10 9" />
  </svg>
);
const IconTwitter = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9 9 0 0 1-2.83 1.08 4.52 4.52 0 0 0-7.7 4.13A12.8 12.8 0 0 1 2.7 1.15a4.52 4.52 0 0 0 1.4 6.03A4.48 4.48 0 0 1 2 6.6v.06a4.52 4.52 0 0 0 3.63 4.43 4.5 4.5 0 0 1-2.04.08 4.52 4.52 0 0 0 4.22 3.14A9.06 9.06 0 0 1 1 16.4a12.78 12.78 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.02-.58A9.2 9.2 0 0 0 23 3z" />
  </svg>
);

/* Amenity + signature icons */
const IconSteam = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 20c-1-2 1-3 0-5" /><path d="M12 20c-1-2 1-3 0-5" /><path d="M18 20c-1-2 1-3 0-5" />
    <rect x="4" y="10" width="16" height="8" rx="1.5" />
  </svg>
);
const IconFork = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2v8a2 2 0 0 0 4 0V2" /><path d="M8 10v12" /><path d="M17 2c-1.5 0-3 1.5-3 4v4h3v10" />
  </svg>
);
const IconWaves = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 10c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0" />
    <path d="M2 16c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0" />
  </svg>
);
const IconTrail = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 20c4-6 2-8 6-10s2-6 6-8" strokeDasharray="1 4" />
    <circle cx="4" cy="20" r="1.4" fill={color} /><circle cx="16" cy="2" r="1.4" fill={color} />
  </svg>
);
const IconStars = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l1.6 3.9L18 8l-3.9 1.6L12 14l-1.6-4.4L6 8l4.4-1.1z" />
    <circle cx="19" cy="17" r="1" fill={color} /><circle cx="4" cy="15" r="1" fill={color} />
  </svg>
);
const IconSun = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
  </svg>
);
const IconBook = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 3H12v18H6.5A2.5 2.5 0 0 1 4 18.5z" />
    <path d="M20 4.5A2.5 2.5 0 0 0 17.5 3H12v18h5.5a2.5 2.5 0 0 0 2.5-2.5z" />
  </svg>
);
const IconBell = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 8a6 6 0 1 0-12 0c0 6-2 8-2 8h16s-2-2-2-8" /><path d="M10 20a2 2 0 0 0 4 0" />
  </svg>
);
const IconBolt = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 4 14 12 14 11 22 20 10 12 10" />
  </svg>
);
const IconCompass = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" />
    <polygon points="14.5 9.5 12 16 9.5 14.5 11 8" fill={color} stroke="none" />
  </svg>
);
const IconShield = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const IconTrophy = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 21h8" /><path d="M12 17v4" />
    <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
    <path d="M7 5H4a3 3 0 0 0 3 5" /><path d="M17 5h3a3 3 0 0 1-3 5" />
  </svg>
);

/* ─────────────────────────────────────────
   MOCK IMAGES (swap for real photography later)
───────────────────────────────────────── */
/* Real Haute Eden Valley renders, reused across the sections below.
   Swap for on-site drone/render photography as it becomes available. */
const img = {
  promoBg: "https://i.postimg.cc/G28ZnWZF/real-(3)-a96ff1469ef1488e81be.webp",
  locationMap: "https://i.postimg.cc/tC5zqnBK/Whats-App-Image-2026-08-01-at-6-07-54-PM.webp",
};

/* Hero slideshow images — Haute Eden Valley renders, rotate every 3 seconds */
const heroImages = [
  "https://i.postimg.cc/sXQtCktQ/real-(1)-0030f6b8e1aa5b985fb2.webp",
  "https://i.postimg.cc/hjzHRkHf/real-(1)-2141e3810cd37cb27f17.webp",
  "https://i.postimg.cc/fLt6QG6x/real-(2)-5cf3439d25625a72cd43.webp",
  "https://i.postimg.cc/Ss2wbBwY/real-(2)-bffd6849d5db0796a25a.webp",
  "https://i.postimg.cc/G28ZnWZF/real-(3)-a96ff1469ef1488e81be.webp",
  "https://i.postimg.cc/3R4PQsPB/real-(3)-fb6617a7896a2b560189.webp",
  "https://i.postimg.cc/1tnL1kL0/real-(4)-6e9cd6c9b9da4e57f386.webp",
  "https://i.postimg.cc/50YZWhZn/real-(4)-f7e867323f7ede6ea0ab.webp",
  "https://i.postimg.cc/Ss2wbBwn/real-(5)-095bdfb70062af6af695.webp",
  "https://i.postimg.cc/yNrw51rR/real-(5)-e1596fc47a39144fb195.webp",
];

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Master Plan", href: "#project" },
  { label: "Amenities", href: "#amenities" },
  { label: "Themed Zones", href: "#zones" },
  { label: "Location", href: "#location" },
  { label: "Enquire", href: "/#contact" },
];

const aboutBlocks = [
  { type: "image", src: heroImages[2], alt: "Aerial view of Haute Eden Valley luxury farm plots in the Aravalli hills, Shahpura" },
  {
    type: "card",
    dark: true,
    title: "Delivering Since 2011",
    body: "Haute World Developers has spent over a decade building well-documented, community-first developments. Haute Eden Valley brings that same discipline to a theme-based luxury farm estate on the Delhi–Jaipur Highway.",
  },
  { type: "image", src: heroImages[7], alt: "Landscaped pathway through farm plots at Haute Eden Valley, a gated hill farm community near Shahpura" },
  {
    type: "card",
    dark: false,
    title: "Own Your Nature. Own Your Legacy.",
    body: "Spread across 20 acres with 75 premium farmhouse plots, a fully gated community, and resort-style amenities — designed as a private estate, a weekend villa destination, and an asset for the next generation.",
  },
];

// ── Project Details ── the factual spec sheet for the estate itself
const projectFacts = [
  { n: "01", label: "Location", value: "Shahpura, NH-48" },
  { n: "02", label: "Total Land Area", value: "20 Acres" },
  { n: "03", label: "Total Farmhouses", value: "75 Units" },
  { n: "04", label: "Plot Size", value: "500 Sq. Yards" },
  { n: "05", label: "Starting Price", value: "₹40 Lakhs*" },
  { n: "06", label: "Grand Entrance Road", value: "40 Ft. Boulevard" },
  { n: "07", label: "Internal Roads", value: "30 Ft. Black Top" },
  { n: "08", label: "Developer", value: "Haute World Developers" },
];

const sitePlanPoints = [
  { id: "01", label: "Grand Entrance Gate", x: 90, y: 360 },
  { id: "02", label: "Premium Hill Farm Plots", x: 230, y: 210 },
  { id: "03", label: "Club House & Sports Plaza", x: 400, y: 120 },
  { id: "04", label: "Natural Lake & Waterfall", x: 540, y: 230 },
  { id: "05", label: "Sports Arena & Kids Park", x: 660, y: 340 },
  { id: "06", label: "Valley View & Yoga Deck", x: 470, y: 380 },
];

// ── Amenities ── every card now has a real render/photo
const amenities = [
  {
    icon: IconTrophy,
    title: "Sports Plaza",
    body: "A dedicated sports plaza with a tennis court, badminton court, and cricket practice pitch for residents of all ages.",
    image: "https://i.postimg.cc/W4fZPS3X/Whats-App-Image-2026-08-02-at-12-11-00-PM.webp",
  },
  {
    icon: IconTrail,
    title: "Nature Walking & Cycling Track",
    body: "A 15 ft. landscaped track winding through the valley for morning walks, cycling, and evening strolls.",
    image: "https://i.postimg.cc/DZZSjGPv/Chat-GPT-Image-Aug-2-2026-12-18-12-PM.webp",
  },
  {
    icon: IconSteam,
    title: "Yoga & Spa",
    body: "An open-air yoga and meditation deck paired with a wellness spa for massages and steam therapy — sunrise stretches and a slow reset, all in one zone.",
    image: "https://i.postimg.cc/SssnT9fN/Chat-GPT-Image-Aug-2-2026-12-22-24-PM.webp",
  },
  {
    icon: IconFork,
    title: "Open-Air Café & Fine Dining Deck",
    body: "A café and dining deck overlooking the valley, serving fresh, seasonal food through the day.",
    image: "https://i.postimg.cc/R0G3LdKF/Chat-GPT-Image-Aug-2-2026-12-32-15-PM.webp",
  },
  {
    icon: IconStars,
    title: "Bonfire, BBQ & Movie Nights",
    body: "A courtyard for bonfire evenings, BBQ dinners, and open-air movie screenings under a clear hill sky.",
    image: "https://i.postimg.cc/yddDQRyK/Chat-GPT-Image-Aug-2-2026-12-44-12-PM.webp",
  },
  {
    icon: IconBook,
    title: "Amphitheatre & Cultural Plaza",
    body: "An open-air amphitheatre for community gatherings, live music, and cultural evenings.",
    image: "https://i.postimg.cc/cHHv93Bs/Chat-GPT-Image-Aug-2-2026-12-48-15-PM.webp",
  },
  {
    icon: IconWaves,
    title: "Waterfall",
    body: "A cascading man-made waterfall feeding the natural lake — a calming visual anchor at the heart of the estate.",
    image: "https://i.postimg.cc/d11hHCjJ/Chat-GPT-Image-Aug-2-2026-01-06-21-PM.webp",
  },
  {
    icon: IconShield,
    title: "24×7 Camera Security",
    body: "Round-the-clock CCTV surveillance across the estate for a safe, well-monitored living environment.",
    image: "https://i.postimg.cc/NMMKJXkY/Security-1.webp",
  },
  {
    icon: IconTree,
    title: "Gated Community",
    body: "A fully gated layout with controlled entry and exit points for a secure, low-maintenance estate.",
    image: "https://i.postimg.cc/gjMFMw43/Whats-App-Image-2026-08-02-at-1-25-04-PM.webp",
  },
];

// ── Themed Living Zones ── the signature micro-landscapes planned across the estate
const zones = [
  { name: "Bali Inspired Landscape", excerpt: "Lush tropical planting, thatched pavilions, and stone pathways inspired by the gardens of Bali.", image: heroImages[0] },
  { name: "European Style Boulevard", excerpt: "A grand, tree-lined boulevard entry modelled on classic European estate driveways.", image: heroImages[1] },
  { name: "Tuscany Inspired Vineyard Corner*", excerpt: "A vineyard-style corner plot echoing the rolling greens of the Tuscan countryside.", image: heroImages[3] },
  { name: "Eco Luxury Farm Villas Zone*", excerpt: "A cluster of eco-conscious luxury villa plots set among working farmland.", image: heroImages[4] },
  { name: "Forest Meditation Trail", excerpt: "A shaded trail through planted forest cover, designed for slow walks and quiet reflection.", image: heroImages[5] },
  { name: "Private Orchard Plantation", excerpt: "Individually plotted orchard sections for residents who want fruit trees of their own.", image: heroImages[6] },
];

const activities = [
  { title: "Horse Riding Trail*", image: heroImages[8] },
  { title: "Luxury Glamping Under The Stars", image: heroImages[9] },
  { title: "Bonfire & BBQ Evenings", image: heroImages[2] },
  { title: "Open Air Movie Nights", image: heroImages[0] },
];

const promoPerks = [
  { icon: IconTicket, label: "Pre-Launch Pricing" },
  { icon: IconCrown, label: "Limited Signature Plots" },
  { icon: IconLeaf, label: "High Appreciation Potential" },
];

// ── Location & Connectivity ── straight drive-time context from the estate
const connectivityRoutes = [
  {
    title: "From Delhi & Gurugram",
    excerpt: "A straight run down NH-48 via Neemrana and Kotputli — roughly 3 hours from Delhi and 2 hours from Gurugram.",
  },
  {
    title: "From Jaipur & Shahpura",
    excerpt: "The closest weekend escape from Jaipur — about 1 hour away, with Shahpura town just 15 minutes from the gate.",
  },
];

const distances = [
  { title: "Delhi–Jaipur Highway (NH-48)", date: "5 Minutes", image: heroImages[1] },
  { title: "Shahpura", date: "15 Minutes", image: heroImages[4] },
  { title: "Kotputli", date: "Approx. 30 Minutes", image: heroImages[5] },
  { title: "Jaipur", date: "Approx. 1 Hour", image: heroImages[9] },
  { title: "Neemrana", date: "Approx. 1 Hour", image: heroImages[7] },
  { title: "Alwar", date: "Approx. 1.5 Hours", image: heroImages[3] },
  { title: "Gurugram", date: "Approx. 2 Hours", image: heroImages[6] },
  { title: "Delhi", date: "Approx. 3 Hours", image: heroImages[0] },
];

// ── FAQ ── common questions buyers search around Haute Eden Valley
const faqs = [
  {
    q: "Where is Haute Eden Valley located?",
    a: "Haute Eden Valley is located at Shahpura on the Delhi–Jaipur Highway (NH-48) — about 5 minutes from the highway, 1 hour from Jaipur, and 3 hours from Delhi via Gurugram, Neemrana, and Kotputli.",
  },
  {
    q: "How big is the estate and how many farmhouses are there?",
    a: "Haute Eden Valley is spread across 20 acres, with 75 premium farmhouse plots planned across the estate.",
  },
  {
    q: "What is the plot size and starting price?",
    a: "Premium farm plots start at 500 sq. yd., with pre-launch pricing starting from ₹40 Lakhs*.",
  },
  {
    q: "Is Haute Eden Valley a gated community?",
    a: "Yes. The estate has a grand entrance gate and security plaza, 24×7 camera surveillance, and a 40 ft. entrance boulevard leading into a fully gated layout.",
  },
  {
    q: "What amenities are planned at the estate?",
    a: "A luxury club house, a sports plaza with tennis, badminton and cricket, a yoga and spa zone, an amphitheatre, kids adventure park, and themed landscaped micro-zones across the property.",
  },
  {
    q: "Who is developing Haute Eden Valley?",
    a: "Haute Eden Valley is developed by Haute World Developers, delivering premium, well-documented community projects since 2011.",
  },
];

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function Home() {
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════════
          SCOPED STYLES — .wc-* prefix (retained from base template; safe to rename project-wide to hev-* later)
      ══════════════════════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Poppins:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        :root {
          --wc-ink: #16231c;
          --wc-ink-2: #1d2c22;
          --wc-canvas: #f7f2e6;
          --wc-canvas-2: #efe7d6;
          --wc-moss: #47573c;
          --wc-clay: #9c4a2f;
          --wc-clay-light: #b8664a;
          --wc-brass: #c9a24a;
          --wc-brass-light: #ddbd77;
          --wc-mist: #e4e8dc;
          --wc-stone: #5c6459;
          --wc-font-display: 'Italiana', Georgia, serif;
          --wc-font-body: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          --wc-font-mono: 'JetBrains Mono', 'Courier New', monospace;
        }

        html, body { margin: 0; padding: 0; }
        .wc-page { font-family: var(--wc-font-body); background: var(--wc-canvas); color: var(--wc-ink); }
        .wc-page a { text-decoration: none; color: inherit; }
        .wc-page * { box-sizing: border-box; }
        .wc-container { width: 100%; max-width: 1220px; margin: 0 auto; padding: 0 1.5rem; }
        .wc-eyebrow { font-family: var(--wc-font-mono); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; display: flex; align-items: center; gap: 0.6rem; }
        .wc-eyebrow::before { content: ""; width: 22px; height: 1px; background: currentColor; opacity: 0.6; display: inline-block; }
        .wc-italic { font-family: var(--wc-font-display); font-style: italic; font-weight: 500; }
        .wc-btn-gold {
          display: inline-flex; align-items: center; gap: 0.6rem; background: var(--wc-clay); color: #fff;
          padding: 1rem 2.1rem; border-radius: 999px; font-weight: 600; font-size: 0.85rem; letter-spacing: 0.02em;
          border: 1px solid var(--wc-clay); cursor: pointer; box-shadow: 0 8px 24px -8px rgba(0,0,0,0.45);
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .wc-btn-gold svg { transition: transform 0.25s ease; }
        .wc-btn-gold:hover { background: var(--wc-clay-light); border-color: var(--wc-clay-light); transform: translateY(-2px); box-shadow: 0 12px 28px -8px rgba(0,0,0,0.5); }
        .wc-btn-gold:hover svg { transform: translateX(3px); }
        .wc-page a.wc-btn-outline {
          display: inline-flex; align-items: center; gap: 0.6rem; background: rgba(22,35,28,0.55); color: #f7f2e6 !important;
          padding: 1rem 2.1rem; border-radius: 999px; font-weight: 600; font-size: 0.85rem; letter-spacing: 0.02em;
          border: 1px solid rgba(247,242,230,0.5); backdrop-filter: blur(4px);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }
        .wc-btn-outline:hover { background: rgba(22,35,28,0.75); border-color: rgba(247,242,230,0.85); transform: translateY(-2px); }

        /* Hero */
        .wc-hero { position: relative; height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; background: var(--wc-ink); }
        .wc-hero-slide { position: absolute; inset: 0; background-size: cover; background-position: center; filter: saturate(0.92) contrast(1.02); opacity: 0; transition: opacity 1.4s ease; }
        .wc-hero-slide.wc-hero-slide-active { opacity: 1; }
        .wc-hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(22,35,28,0.55) 0%, rgba(22,35,28,0.35) 35%, rgba(22,35,28,0.92) 100%); z-index: 1; }
        .wc-hero-inner { position: relative; z-index: 2; width: 100%; padding: 8rem 0 4rem; display: flex; flex-direction: column; align-items: center; text-align: center; }
        .wc-hero-kicker { color: var(--wc-brass-light); justify-content: center; }
        .wc-hero-title { font-family: var(--wc-font-display); font-weight: 500; font-size: clamp(2.3rem, 5.4vw, 4rem); line-height: 1.1; color: #f7f2e6; max-width: 760px; margin: 0.8rem 0 2rem; -webkit-text-stroke: 1px #f7f2e6; }

        /* Section basics */
        .wc-section { padding: 6rem 0; }
        .wc-section-head { max-width: 660px; }
        .wc-project .wc-section-head { max-width: 100%; }
        section#about .wc-section-head { max-width: 100%; }
        section#zones .wc-section-head { max-width: 100%; }
        .wc-h2 { font-family: var(--wc-font-display); font-weight: 500; font-size: clamp(1.9rem, 3.2vw, 2.7rem); line-height: 1.2; margin: 0.7rem 0 0; -webkit-text-stroke: 1px currentColor; }

        /* About */
        .wc-about-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-top: 3.2rem; }
        .wc-about-image { position: relative; height: 280px; overflow: hidden; }
        .wc-about-image img { width: 100%; height: 100%; object-fit: cover; }
        .wc-about-card { height: 280px; padding: 2rem; display: flex; flex-direction: column; justify-content: center; }
        .wc-about-card h3 { font-family: var(--wc-font-display); font-weight: 500; font-size: 1.3rem; margin: 0; line-height: 1.35; color: #f7f2e6 !important; }
        .wc-about-card p { margin: 1rem 0 0; font-size: 0.9rem; line-height: 1.65; color: #f7f2e6 !important; opacity: 0.85; }

        @media (min-width: 640px) {
          .wc-about-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 992px) {
          .wc-about-grid { grid-template-columns: repeat(4, 1fr); }
          .wc-about-image, .wc-about-card { height: 380px; }
        }

        /* Project details / site plan */
        .wc-project { background: var(--wc-ink); color: #f7f2e6; }
        .wc-project-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; margin-top: 5rem; }
        @media (min-width: 992px) {
          .wc-project-grid { gap: 12rem; }
        }
        .wc-facts { border-top: 1px solid rgba(247,242,230,0.16); }
        .wc-fact-row { display: grid; grid-template-columns: 2.4rem 1fr auto; align-items: baseline; gap: 1rem; padding: 1.05rem 0; border-bottom: 1px solid rgba(247,242,230,0.16); }
        .wc-fact-n { font-family: var(--wc-font-mono); font-size: 0.78rem; color: var(--wc-brass-light); }
        .wc-fact-label { font-size: 0.92rem; color: rgba(247,242,230,0.72); margin-right: 4rem; }
        .wc-fact-value { font-family: var(--wc-font-mono); font-weight: 600; font-size: 0.95rem; letter-spacing: 0.02em; color: var(--wc-brass-light); text-align: right; }
        .wc-siteplan { position: relative; border: 1px solid rgba(247,242,230,0.18); background: radial-gradient(circle at 30% 20%, rgba(201,162,74,0.06), transparent 60%); }
        .wc-siteplan svg { width: 100%; height: auto; display: block; }
        .wc-siteplan-caption { display: flex; align-items: center; justify-content: space-between; padding: 0.9rem 1.1rem; border-top: 1px solid rgba(247,242,230,0.18); font-family: var(--wc-font-mono); font-size: 0.7rem; letter-spacing: 0.06em; color: rgba(247,242,230,0.55); text-transform: uppercase; }

        @media (min-width: 992px) {
          .wc-project-grid { grid-template-columns: 0.85fr 1.15fr; align-items: stretch; }
          .wc-facts { display: flex; flex-direction: column; justify-content: space-between; height: auto; }
          .wc-siteplan { display: flex; flex-direction: column; height: auto; }
          .wc-siteplan img { width: 100%; height: auto; display: block; }
        }

        /* Amenities — full image cards */
        .wc-amenity-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-top: 3.2rem; }
        .wc-amenity-card { background: var(--wc-canvas); border: 1px solid rgba(22,35,28,0.12); display: flex; flex-direction: column; overflow: hidden; }
        .wc-amenity-image { position: relative; height: 190px; overflow: hidden; }
        .wc-amenity-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .wc-amenity-card:hover .wc-amenity-image img { transform: scale(1.06); }
        .wc-amenity-body { padding: 1.6rem 1.6rem 1.8rem; display: flex; flex-direction: column; gap: 0.7rem; }
        .wc-amenity-head { display: flex; align-items: center; gap: 0.8rem; }
        .wc-amenity-icon { flex-shrink: 0; width: 42px; height: 42px; border: 1px solid var(--wc-clay); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--wc-clay); }
        .wc-amenity-card h3 { font-family: var(--wc-font-display); font-weight: 500; font-size: 1.08rem; margin: 0; -webkit-text-stroke: 1px currentColor; }
        .wc-amenity-card p { font-size: 0.87rem; color: var(--wc-stone); line-height: 1.6; margin: 0; }

        @media (min-width: 640px) {
          .wc-amenity-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 992px) {
          .wc-amenity-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* Cottages */
        .wc-cottage-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-top: 3.2rem; }
        .wc-cottage-card { position: relative; display: block; height: 340px; overflow: hidden; }
        .wc-cottage-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .wc-cottage-card:hover img { transform: scale(1.05); }
        .wc-cottage-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(22,35,28,0.94), rgba(22,35,28,0.08) 55%, transparent); }
        .wc-cottage-tag { position: absolute; top: 1rem; left: 1rem; font-family: var(--wc-font-mono); font-size: 0.68rem; letter-spacing: 0.08em; color: rgba(247,242,230,0.8); border: 1px solid rgba(247,242,230,0.4); padding: 0.3rem 0.6rem; text-transform: uppercase; }
        .wc-cottage-info { position: absolute; left: 1.2rem; right: 1.2rem; bottom: 1.2rem; display: flex; align-items: flex-end; justify-content: space-between; gap: 0.8rem; }
        .wc-cottage-info h3 { font-family: var(--wc-font-display); font-weight: 500; font-size: 1.2rem; color: #f7f2e6; margin: 0; }
        .wc-cottage-info p { font-size: 0.78rem; color: rgba(247,242,230,0.78); margin: 0.35rem 0 0; line-height: 1.45; max-width: 260px; }
        .wc-cottage-arrow { flex-shrink: 0; width: 38px; height: 38px; border-radius: 50%; border: 1px solid var(--wc-brass); display: flex; align-items: center; justify-content: center; color: var(--wc-brass-light); }

        @media (min-width: 640px) {
          .wc-cottage-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 992px) {
          .wc-cottage-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* Booking */
        .wc-booking-wrap { border: 1px solid rgba(22,35,28,0.14); overflow: hidden; display: grid; grid-template-columns: 1fr; }
        .wc-booking-form-panel { position: relative; padding: 2.2rem 1.5rem; background: var(--wc-canvas-2); }
        .wc-booking-form { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr; gap: 1rem; }
        .wc-field label { display: block; font-family: var(--wc-font-mono); font-size: 0.68rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--wc-stone); margin-bottom: 0.5rem; }
        .wc-field input, .wc-field select, .wc-field textarea {
          width: 100%; border: 1px solid rgba(22,35,28,0.2); border-radius: 2px; padding: 0.85rem 1rem;
          font-size: 0.9rem; background: var(--wc-canvas); color: var(--wc-ink); font-family: inherit;
        }
        .wc-field input:focus, .wc-field select:focus, .wc-field textarea:focus {
          outline: none; border-color: var(--wc-clay); box-shadow: 0 0 0 3px rgba(156,74,47,0.15);
        }
        .wc-booking-info-panel { background: var(--wc-ink); color: #f7f2e6; padding: 2.2rem 1.5rem; display: flex; flex-direction: column; justify-content: center; gap: 1.2rem; }
        .wc-booking-info-panel img { width: 100%; height: 190px; object-fit: cover; }

        @media (min-width: 640px) {
          .wc-booking-form { grid-template-columns: 1fr 1fr; }
          .wc-field-full { grid-column: 1 / -1; }
        }
        @media (min-width: 992px) {
          .wc-booking-wrap { grid-template-columns: 1fr 1fr; }
          .wc-booking-form-panel, .wc-booking-info-panel { padding: 3rem; }
        }

        /* About the developer */
        .wc-developer-grid { display: grid; grid-template-columns: 1fr; gap: 2.5rem; align-items: center; }
        .wc-dev-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .wc-dev-stat-card { position: relative; background: var(--wc-canvas); border: 1px solid rgba(22,35,28,0.14); padding: 1.6rem 1.2rem; text-align: center; overflow: hidden; }
        .wc-dev-stat-card::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, var(--wc-clay), var(--wc-brass), transparent); }
        .wc-dev-stat-num { font-family: var(--wc-font-display); font-weight: 500; font-size: 2.1rem; color: var(--wc-ink); margin: 0; line-height: 1; }
        .wc-dev-stat-label { font-family: var(--wc-font-mono); font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--wc-stone); margin: 0.6rem 0 0; }

        @media (min-width: 992px) {
          .wc-developer-grid { grid-template-columns: 1.2fr 1fr; gap: 3.5rem; }
        }

        /* Activities */
        .wc-activity-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin-top: 3.2rem; }
        .wc-activity-card { position: relative; display: block; height: 230px; overflow: hidden; }
        .wc-activity-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .wc-activity-card:hover img { transform: scale(1.05); }
        .wc-activity-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(22,35,28,0.9), transparent 60%); }
        .wc-activity-icon { position: absolute; top: 0.7rem; right: 0.7rem; width: 34px; height: 34px; border-radius: 50%; border: 1px solid var(--wc-brass); display: flex; align-items: center; justify-content: center; color: var(--wc-brass-light); }
        .wc-activity-label { position: absolute; left: 0.7rem; right: 0.7rem; bottom: 0.7rem; font-family: var(--wc-font-display); font-size: 0.95rem; font-weight: 500; color: #f7f2e6; }

        @media (min-width: 768px) {
          .wc-activity-grid { grid-template-columns: repeat(4, 1fr); }
        }

        /* Promo */
        .wc-promo-card { position: relative; overflow: hidden; }
        .wc-promo-bg { position: absolute; inset: 0; background-size: cover; background-position: center; }
        .wc-promo-tint { position: absolute; inset: 0; background: linear-gradient(120deg, rgba(22,35,28,0.94), rgba(22,35,28,0.6) 60%, rgba(22,35,28,0.2)); }
        .wc-promo-inner { position: relative; z-index: 1; padding: 2.8rem 1.5rem; display: grid; grid-template-columns: 1fr; gap: 2rem; }
        .wc-promo-title { font-family: var(--wc-font-display); font-weight: 500; font-size: clamp(1.8rem, 3vw, 2.4rem); color: #f7f2e6; margin: 0.7rem 0 1.6rem; max-width: 420px; line-height: 1.25; }
        .wc-promo-actions { display: flex; flex-wrap: wrap; gap: 1rem; }
        .wc-promo-perks { display: flex; flex-direction: column; gap: 0.7rem; border: 1px solid rgba(247,242,230,0.18); padding: 1.1rem; }
        .wc-perk { display: flex; align-items: center; gap: 0.8rem; background: rgba(247,242,230,0.06); padding: 0.75rem 1rem; }
        .wc-perk-icon { width: 32px; height: 32px; border-radius: 50%; border: 1px solid var(--wc-brass); display: flex; align-items: center; justify-content: center; color: var(--wc-brass-light); flex-shrink: 0; }
        .wc-perk span { font-size: 0.85rem; font-weight: 600; color: #f7f2e6; }

        @media (min-width: 992px) {
          .wc-promo-inner { grid-template-columns: 1.3fr 1fr; align-items: center; padding: 4rem; }
        }

        /* Location & Connectivity */
        .wc-location-head { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 1.2rem; }
        .wc-location-grid { display: grid; grid-template-columns: 1fr; gap: 1.6rem; margin-top: 2.2rem; }
        .wc-location-routes { display: grid; grid-template-columns: 1fr; gap: 1.2rem; margin: 1.6rem 0 0; }
        .wc-location-routes h4 { font-family: var(--wc-font-display); font-weight: 500; font-size: 1rem; margin: 0; }
        .wc-location-routes p { font-size: 0.86rem; color: var(--wc-stone); line-height: 1.65; margin: 0.35rem 0 0; }
        .wc-location-map { position: relative; border: 1px solid rgba(22,35,28,0.14); background: var(--wc-canvas-2); overflow: hidden; }
        .wc-location-map img { width: 100%; height: auto; display: block; }
        .wc-location-map-caption { display: flex; align-items: center; justify-content: space-between; padding: 0.9rem 1.1rem; border-top: 1px solid rgba(22,35,28,0.14); font-family: var(--wc-font-mono); font-size: 0.7rem; letter-spacing: 0.06em; color: var(--wc-stone); text-transform: uppercase; }
        .wc-popular { background: var(--wc-ink); color: #f7f2e6; padding: 1.7rem; }
        .wc-popular h3 { font-family: var(--wc-font-display); font-weight: 500; font-size: 1.1rem; margin: 0 0 1.2rem; }
        .wc-popular-item { display: flex; gap: 0.8rem; align-items: flex-start; margin-bottom: 1.1rem; padding-bottom: 1.1rem; border-bottom: 1px solid rgba(247,242,230,0.12); }
        .wc-popular-item:last-child { margin-bottom: 0; border-bottom: none; padding-bottom: 0; }
        .wc-popular-item img { width: 44px; height: 44px; object-fit: cover; flex-shrink: 0; border-radius: 2px; }
        .wc-popular-item p { font-size: 0.82rem; font-weight: 600; margin: 0; line-height: 1.4; }
        .wc-popular-item span { display: block; font-family: var(--wc-font-mono); font-size: 0.68rem; color: rgba(247,242,230,0.5); margin-top: 0.3rem; }

        @media (min-width: 992px) {
          .wc-location-grid { grid-template-columns: 1.35fr 1fr; align-items: start; }
        }

        /* FAQ (uses inline styles for the accordion rows) */

        /* Footer */
        .wc-footer { background: var(--wc-ink); color: #f7f2e6; padding-top: 4rem; }
        .wc-footer-grid { display: grid; grid-template-columns: 1fr; gap: 2.5rem; }
        .wc-footer-col h4 { font-family: var(--wc-font-mono); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(247,242,230,0.5); margin: 0 0 1.1rem; }
        .wc-footer-col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.7rem; }
        .wc-footer-col ul a { font-size: 0.88rem; color: rgba(247,242,230,0.8); }
        .wc-footer-col ul a:hover { color: var(--wc-brass-light); }
        .wc-footer-desc { font-size: 0.88rem; color: rgba(247,242,230,0.65); max-width: 300px; margin: 1rem 0 1.4rem; line-height: 1.6; }
        .wc-social { display: flex; gap: 0.6rem; }
        .wc-social a { width: 34px; height: 34px; border-radius: 50%; border: 1px solid rgba(247,242,230,0.2); display: flex; align-items: center; justify-content: center; }
        .wc-social a:hover { border-color: var(--wc-brass); color: var(--wc-brass-light); }
        .wc-contact-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.9rem; font-size: 0.86rem; color: rgba(247,242,230,0.78); }
        .wc-contact-list li { display: flex; align-items: flex-start; gap: 0.6rem; }
        .wc-footer-bottom { margin-top: 3.4rem; border-top: 1px solid rgba(247,242,230,0.1); padding: 1.4rem 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.8rem; font-family: var(--wc-font-mono); font-size: 0.72rem; color: rgba(247,242,230,0.5); }
        .wc-footer-bottom a { color: rgba(247,242,230,0.5); }
        .wc-footer-bottom a:hover { color: var(--wc-brass-light); }

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
            "@type": "RealEstateListing",
            name: "Haute Eden Valley",
            description:
              "Haute Eden Valley is a theme-based luxury hill farm community at Shahpura, 5 minutes off the Delhi–Jaipur Highway (NH-48). Spread across 20 acres with 75 premium 500 sq. yd. farmhouse plots starting ₹40 Lakhs*, by Haute World Developers.",
            // TODO: replace with the live production domain before launch
            url: "https://www.hauteedenvalley.com",
            image: heroImages[0],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Shahpura",
              addressRegion: "Rajasthan",
              addressCountry: "IN",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: "4000000",
              availability: "https://schema.org/PreOrder",
            },
          }),
        }}
      />

      <Navbar />

      <div className="wc-page">
        {/* ══════════════ HERO ══════════════ */}
        <section id="home" className="wc-hero" aria-label="Haute Eden Valley hero">
          {heroImages.map((src, i) => (
            <div
              key={src}
              className={`wc-hero-slide${i === heroSlide ? " wc-hero-slide-active" : ""}`}
              style={{ backgroundImage: `url("${src}")` }}
              aria-hidden={i === heroSlide ? "false" : "true"}
            />
          ))}
          <div className="wc-hero-overlay" />
          <div className="wc-container wc-hero-inner">
            <p className="wc-eyebrow wc-hero-kicker">Pre-Launch • Delhi–Jaipur Highway, 5 Minutes</p>
            <h1 className="wc-hero-title">
              Haute Eden Valley — A Nature Inspired{" "}
              <span className="wc-italic" style={{ color: "var(--wc-brass-light)" }}>Luxury Farm Estate</span>
            </h1>
            <p style={{ maxWidth: "640px", margin: "-1rem auto 2rem", color: "rgba(247,242,230,0.85)", fontSize: "1rem", lineHeight: 1.7 }}>
              20 acres, 75 premium hill-view farmhouse plots at Shahpura, on the Delhi–Jaipur Highway (NH-48) — starting ₹40 Lakhs*.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href="#zones" className="wc-btn-gold">
                Explore Farm Plots <IconArrowRight size={14} />
              </a>
              <a href="#project" className="wc-btn-outline">
                View Master Plan <IconArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════ ABOUT ══════════════ */}
        <section id="about" className="wc-section" style={{ background: "var(--wc-canvas)" }}>
          <div className="wc-container">
            <div className="wc-section-head">
              <p className="wc-eyebrow" style={{ color: "var(--wc-moss)" }}>About Haute Eden Valley</p>
              <h2 className="wc-h2">
                A Theme-Based Luxury Hill Farm{" "}
                <span className="wc-italic" style={{ color: "var(--wc-clay)" }}>Community, Built For Legacy</span>
              </h2>
              <p style={{ marginTop: "1.2rem", color: "var(--wc-stone)", lineHeight: 1.75 }}>
                Haute Eden Valley is a nature-inspired luxury farm estate rising in the Aravalli hills,
                just 5 minutes off the Delhi–Jaipur Highway (NH-48) at Shahpura. Spread across 20 acres
                and planned as a fully gated community of 75 premium 500 sq. yd. farmhouse plots, it
                pairs modern infrastructure with organic living and resort-style amenities — a private
                estate, a weekend villa destination, and a generational asset in one address.
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
                    style={{ background: b.dark ? "var(--wc-ink)" : "var(--wc-moss)", color: "#f7f2e6" }}
                  >
                    <h3>{b.title}</h3>
                    <p>{b.body}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ══════════════ PROJECT DETAILS / SITE PLAN ══════════════ */}
        <section id="project" className="wc-section wc-project">
          <div className="wc-container">
            <div className="wc-section-head">
              <p className="wc-eyebrow" style={{ color: "var(--wc-brass-light)" }}>The Master Plan</p>
              <h2 className="wc-h2" style={{ color: "#f7f2e6" }}>
                A Complete Estate, From Gate{" "}
                <span className="wc-italic" style={{ color: "var(--wc-brass-light)" }}>To Valley Edge</span>
              </h2>
              <p style={{ marginTop: "2.2rem", color: "rgba(247,242,230,0.7)", lineHeight: 1.75 }}>
                Haute Eden Valley is planned across 20 acres of a single hillside — a grand entrance
                boulevard, 75 premium farmhouse plots, a club house and lake at the heart of the
                estate, and shared amenities never more than a short walk away.
              </p>
            </div>

            <div className="wc-project-grid">
              <div className="wc-facts">
                {projectFacts.map((f) => (
                  <div key={f.n} className="wc-fact-row">
                    <span className="wc-fact-n">{f.n}</span>
                    <span className="wc-fact-label">{f.label}</span>
                    <span className="wc-fact-value">{f.value}</span>
                  </div>
                ))}
              </div>

              <div className="wc-siteplan">
                <img
                  src={img.locationMap}
                  alt="Haute Eden Valley master site plan map"
                  loading="lazy"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════ AMENITIES ══════════════ */}
        <section id="amenities" className="wc-section" style={{ background: "var(--wc-canvas-2)" }}>
          <div className="wc-container">
            <div className="wc-section-head">
              <p className="wc-eyebrow" style={{ color: "var(--wc-moss)" }}>Amenities</p>
              <h2 className="wc-h2">
                Everything The Estate{" "}
                <span className="wc-italic" style={{ color: "var(--wc-clay)" }}>Provides</span>
              </h2>
              <p style={{ marginTop: "1.2rem", color: "var(--wc-stone)", lineHeight: 1.75 }}>
                Resort-style amenities built into a working farm estate — shared across the valley,
                never more than a short walk from any plot.
              </p>
            </div>

            <div className="wc-amenity-grid">
              {amenities.map((a) => (
                <div key={a.title} className="wc-amenity-card">
                  <div className="wc-amenity-image">
                    <img src={a.image} alt={`${a.title} at Haute Eden Valley, Shahpura`} loading="lazy" />
                  </div>
                  <div className="wc-amenity-body">
                    <div className="wc-amenity-head">
                      <span className="wc-amenity-icon"><a.icon size={19} /></span>
                      <h3>{a.title}</h3>
                    </div>
                    <p>{a.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ THEMED ZONES ══════════════ */}
        <section id="zones" className="wc-section" style={{ background: "var(--wc-canvas)" }}>
          <div className="wc-container">
            <div className="wc-section-head">
              <p className="wc-eyebrow" style={{ color: "var(--wc-moss)" }}>Themed Living Zones</p>
              <h2 className="wc-h2">
                Choose Your Signature{" "}
                <span className="wc-italic" style={{ color: "var(--wc-clay)" }}>Corner Of The Valley</span>
              </h2>
              <p style={{ marginTop: "1.2rem", color: "var(--wc-stone)", lineHeight: 1.75 }}>
                Haute Eden Valley is planned as a series of themed micro-landscapes across the hillside
                — each with its own character, from a Bali-inspired garden to a private orchard corner.
              </p>
            </div>

            <div className="wc-cottage-grid">
              {zones.map((z, i) => (
                <a key={z.name} href="/#contact" className="wc-cottage-card">
                  <img src={z.image} alt={`${z.name} — themed zone at Haute Eden Valley luxury farm estate, Shahpura`} loading="lazy" />
                  <div className="wc-cottage-overlay" />
                  <span className="wc-cottage-tag">{String(i + 1).padStart(2, "0")}</span>
                  <div className="wc-cottage-info">
                    <div>
                      <h3>{z.name}</h3>
                      <p>{z.excerpt}</p>
                    </div>
                    <span className="wc-cottage-arrow"><IconArrowRight /></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ ACTIVITIES ══════════════ */}
        <section id="activities" className="wc-section" style={{ background: "var(--wc-canvas-2)" }}>
          <div className="wc-container" style={{ textAlign: "center" }}>
            <div className="wc-section-head" style={{ margin: "0 auto" }}>
              <p className="wc-eyebrow" style={{ color: "var(--wc-moss)", justifyContent: "center" }}>Estate Experiences</p>
              <h2 className="wc-h2">
                Ways To Spend Your{" "}
                <span className="wc-italic" style={{ color: "var(--wc-clay)" }}>Weekend Here</span>
              </h2>
              <p style={{ marginTop: "1.2rem", color: "var(--wc-stone)", lineHeight: 1.75 }}>
                From bonfire evenings to a quiet horse ride at sunset, every experience is built
                around the hills — pick what fits the mood of your stay.
              </p>
            </div>

            <div className="wc-activity-grid">
              {activities.map((a) => (
                <a key={a.title} href="/#contact" className="wc-activity-card">
                  <img src={a.image} alt={`${a.title} at Haute Eden Valley`} loading="lazy" />
                  <div className="wc-activity-overlay" />
                  <span className="wc-activity-icon"><IconArrowUpRight size={14} /></span>
                  <span className="wc-activity-label">{a.title}</span>
                </a>
              ))}
            </div>

            <a href="/#contact" className="wc-btn-gold" style={{ marginTop: "2.5rem", display: "inline-flex" }}>
              View All Activities <IconArrowRight size={14} />
            </a>
          </div>
        </section>

        {/* ══════════════ PROMO ══════════════ */}
        <section className="wc-section" style={{ background: "var(--wc-canvas)" }}>
          <div className="wc-container">
            <div className="wc-promo-card">
              <div className="wc-promo-bg" style={{ backgroundImage: `url(${img.promoBg})` }} />
              <div className="wc-promo-tint" />
              <div className="wc-promo-inner">
                <div>
                  <p className="wc-eyebrow" style={{ color: "var(--wc-brass-light)" }}>Pre-Launch Booking Open</p>
                  <h2 className="wc-promo-title">
                    Own A Signature Farm Plot{" "}
                    <span className="wc-italic" style={{ color: "var(--wc-brass-light)" }}>From ₹40 Lakhs*</span>
                  </h2>
                  <div className="wc-promo-actions">
                    <a href="/#contact" className="wc-btn-gold">Book A Site Visit</a>
                    <a href="/#contact" className="wc-btn-outline">Request Brochure & Pricing</a>
                  </div>
                </div>

                <div className="wc-promo-perks">
                  {promoPerks.map((p) => (
                    <div key={p.label} className="wc-perk">
                      <span className="wc-perk-icon"><p.icon size={15} /></span>
                      <span>{p.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ ABOUT THE DEVELOPER ══════════════ */}
        <section id="developer" className="wc-section" style={{ background: "var(--wc-canvas-2)" }}>
          <div className="wc-container">
            <div className="wc-developer-grid">
              <div>
                <p className="wc-eyebrow" style={{ color: "var(--wc-moss)" }}>About The Developer</p>
                <h2 className="wc-h2">
                  Built By <span className="wc-italic" style={{ color: "var(--wc-clay)" }}>Haute World Developers</span>
                </h2>
                <p style={{ marginTop: "1.2rem", color: "var(--wc-stone)", lineHeight: 1.85, fontSize: "0.93rem" }}>
                  Haute World Developers has been delivering premium, well-documented community
                  projects since 2011 — built on clear titles, transparent payment structures,
                  and community-first planning.
                </p>
                <p style={{ marginTop: "1rem", color: "var(--wc-stone)", lineHeight: 1.85, fontSize: "0.93rem" }}>
                  Haute Eden Valley continues that legacy — bringing the same structured, transparent
                  approach to a 20-acre, 75-farmhouse theme-based luxury estate in the Aravalli hills.
                </p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.6rem" }}>
                  <a href="/#about" className="wc-btn-outline" style={{ color: "var(--wc-ink)", borderColor: "rgba(22,35,28,0.3)" }}>
                    About Haute World Developers
                  </a>
                  <a href="/#contact" className="wc-btn-gold">Get in Touch <IconArrowRight size={14} /></a>
                </div>
              </div>

              <div className="wc-dev-stats">
                {[
                  { label: "Delivering Since", value: "2011" },
                  { label: "Total Land", value: "20 Acres" },
                  { label: "Farmhouses", value: "75 Units" },
                  { label: "To NH-48", value: "5 Min" },
                ].map((s) => (
                  <div key={s.label} className="wc-dev-stat-card">
                    <p className="wc-dev-stat-num">{s.value}</p>
                    <p className="wc-dev-stat-label">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ LOCATION & CONNECTIVITY ══════════════ */}
        <section id="location" className="wc-section" style={{ background: "var(--wc-canvas)" }}>
          <div className="wc-container">
            <div className="wc-location-head">
              <div>
                <p className="wc-eyebrow" style={{ color: "var(--wc-moss)" }}>Location & Connectivity</p>
                <h2 className="wc-h2">
                  5 Minutes Off NH-48, A World{" "}
                  <span className="wc-italic" style={{ color: "var(--wc-clay)" }}>Away From The City</span>
                </h2>
                <p style={{ marginTop: "1.2rem", color: "var(--wc-stone)", lineHeight: 1.75, maxWidth: "640px" }}>
                  Haute Eden Valley sits directly off NH-48, the main Delhi–Jaipur corridor —
                  reachable via Gurugram, Neemrana, and Kotputli from the north, or Shahpura from
                  Jaipur in the south.
                </p>
              </div>
              <a href="/#contact" className="wc-btn-gold">Get Directions</a>
            </div>

            <div className="wc-location-grid">
              <div>
                <div className="wc-location-map">
                  <img
                    src={img.locationMap}
                    alt="Haute Eden Valley location map showing the NH-48 route from Gurugram, Neemrana, Kotputli, Shahpura, Jaipur, and Alwar"
                    loading="lazy"
                  />
                  <div className="wc-location-map-caption">
                    <span>Fig. 02 — Route Map</span>
                    <span>NH-48 Corridor</span>
                  </div>
                </div>

                <div className="wc-location-routes">
                  {connectivityRoutes.map((route) => (
                    <div key={route.title}>
                      <h4>{route.title}</h4>
                      <p>{route.excerpt}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="wc-popular">
                <h3>Distances At A Glance</h3>
                {distances.map((d) => (
                  <div key={d.title} className="wc-popular-item">
                    <img src={d.image} alt={d.title} loading="lazy" />
                    <p>{d.title}<span>{d.date}</span></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ FAQ ══════════════ */}
        <section id="faq" className="wc-section" style={{ background: "var(--wc-canvas-2)" }}>
          <div className="wc-container">
            <div className="wc-section-head" style={{ margin: "0 auto", textAlign: "center", maxWidth: "700px" }}>
              <p className="wc-eyebrow" style={{ color: "var(--wc-moss)", justifyContent: "center" }}>FAQ</p>
              <h2 className="wc-h2">
                Frequently Asked{" "}
                <span className="wc-italic" style={{ color: "var(--wc-clay)" }}>Questions</span>
              </h2>
            </div>

            <div style={{ maxWidth: "820px", margin: "3rem auto 0", display: "flex", flexDirection: "column", gap: "1px", background: "rgba(22,35,28,0.1)", border: "1px solid rgba(22,35,28,0.12)" }}>
              {faqs.map((f) => (
                <div key={f.q} style={{ background: "var(--wc-canvas)", padding: "1.6rem 1.8rem" }}>
                  <p style={{ margin: 0, fontFamily: "var(--wc-font-display)", fontSize: "1.1rem", color: "var(--wc-ink)" }}>{f.q}</p>
                  <p style={{ margin: "0.6rem 0 0", fontSize: "0.9rem", color: "var(--wc-stone)", lineHeight: 1.7 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}