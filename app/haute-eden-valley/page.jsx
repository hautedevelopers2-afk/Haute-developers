"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Adjust this import path to match where Navbar.jsx actually lives relative
// to this file (e.g. if this page is at src/app/page.jsx, "../components/Navbar"
// is correct; if it's nested one level deeper, use "../../components/Navbar").
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

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
const IconLeaf = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 20A7 7 0 0 1 4 13c0-5 4-10 10-11 1 6-1 10-3 13" />
    <path d="M11 20a7 7 0 0 0 7-7c0-2 0-4-1-6" />
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
const IconStars = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l1.6 3.9L18 8l-3.9 1.6L12 14l-1.6-4.4L6 8l4.4-1.1z" />
    <circle cx="19" cy="17" r="1" fill={color} /><circle cx="4" cy="15" r="1" fill={color} />
  </svg>
);
const IconBook = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 3H12v18H6.5A2.5 2.5 0 0 1 4 18.5z" />
    <path d="M20 4.5A2.5 2.5 0 0 0 17.5 3H12v18h5.5a2.5 2.5 0 0 0 2.5-2.5z" />
  </svg>
);
const IconTrail = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 20c4-6 2-8 6-10s2-6 6-8" strokeDasharray="1 4" />
    <circle cx="4" cy="20" r="1.4" fill={color} /><circle cx="16" cy="2" r="1.4" fill={color} />
  </svg>
);
const IconWaves = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 10c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0" />
    <path d="M2 16c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0" />
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
const IconCheck = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconChevron = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const IconPlusMinus = ({ size = 18, color = "currentColor", isOpen = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    {!isOpen && <line x1="12" y1="5" x2="12" y2="19" />}
  </svg>
);

/* ─────────────────────────────────────────
   MOCK IMAGES (swap for real photography later)
───────────────────────────────────────── */
const img = {
  locationMap: "https://i.postimg.cc/tC5zqnBK/Whats-App-Image-2026-08-01-at-6-07-54-PM.webp",
  faqBg: "https://i.postimg.cc/G28ZnWZF/real-(3)-a96ff1469ef1488e81be.webp",
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

/* Single showcase image kept for the About section */
const aboutImage = heroImages[2];

/* ─────────────────────────────────────────
   BLOG HELPERS
───────────────────────────────────────── */
function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}
function formatBlogDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
}
function blogReadTime(content) {
  return Math.max(1, Math.ceil(stripHtml(content).split(" ").length / 200));
}

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Master Plan", href: "#project" },
  { label: "Amenities", href: "#amenities" },
  { label: "Blog", href: "#blogs" },
  { label: "FAQ", href: "#faq" },
  { label: "Enquire", href: "/#contact" },
];

// ── Why Choose Us ── image set
const whyChoseImages = [
  "https://res.cloudinary.com/dpbitfczf/image/upload/v1786193185/Landscape_imenwo.webp",
  "https://res.cloudinary.com/dpbitfczf/image/upload/v1786191424/SM1123755_1_-compressed_1_1_xkfkiu.webp",
  "https://res.cloudinary.com/dpbitfczf/image/upload/v1786191423/Gatted_comunity_ppspaw.webp",
  "https://res.cloudinary.com/dpbitfczf/image/upload/v1786191423/Treee_wkuqv2.webp",
  "https://res.cloudinary.com/dpbitfczf/image/upload/v1786194684/WhatsApp_Image_2026-08-08_at_6.39.02_PM_xjvqdv.webp",
  "https://res.cloudinary.com/dpbitfczf/image/upload/v1786191423/Expressway_road_bretn9.webp",
  "https://res.cloudinary.com/dpbitfczf/image/upload/v1786191423/Water-bodies_opnpul.webp",
  "https://res.cloudinary.com/dpbitfczf/image/upload/v1786191423/Road_2_r3ufu0.webp"
];

// ── Why Choose Us ── 8-card feature grid with image + overlay
const whyChooseUs = [
  { title: "Nestled In Between The Aravallis", desc: "Premium location at Shahpura, nestled amid the Aravalli hills with natural forest cover surrounding the estate.", image: whyChoseImages[0] },
  { title: "Seamless Entry To Ownership", desc: "Affordable entry into a gated luxury farm estate, without the premium price tags seen elsewhere.", image: whyChoseImages[1] },
  { title: "20 Acre Gated Community", desc: "A single, 20-acre integrated farm estate, not scattered parcels — planned as one cohesive community.", image: whyChoseImages[2] },
  { title: "Breathing Life With 1,00,000 Trees", desc: "A dense tree-planting initiative creating a forest-like, breathing environment across the estate.", image: whyChoseImages[3] },
  { title: "Part Of Delhi-Jaipur Corridor", desc: "Located directly on the Delhi–Jaipur Highway (NH-48), placing the estate on one of North India's key growth corridors.", image: whyChoseImages[4] },
  { title: "Easy Delhi-NCR Access", desc: "A convenient drive from Delhi and Gurugram via Neemrana and Kotputli, yet far from the noise and chaos.", image: whyChoseImages[5] },
  { title: "Landscape With Water Bodies", desc: "A natural lake and cascading waterfall at the heart of the estate, creating a calming landscaped environment.", image: whyChoseImages[6] },
  { title: "30 Ft. Wide Internal Roads", desc: "30 ft. wide internal roads for easy accessibility and smooth connectivity across the estate.", image: whyChoseImages[7] },
];

// ── Project Highlights ── replaces the old themed-zones grid, now sits right after About
const highlights = [
  { title: "20-Acre Luxury Farm Estate", body: "A thoughtfully planned farm estate designed for spacious, private and nature-inspired living." },
  { title: "Prime Location Near Jaipur", body: "Strategically located at Shahpura, offering convenient connectivity to Jaipur and the Delhi-NCR region." },
  { title: "On the Delhi–Jaipur Highway (NH-48)", body: "Excellent road connectivity through one of North India's key highway corridors." },
  { title: "500 Sq. Yd. Farmhouse Plots", body: "Spacious plots planned for creating your own private farmhouse and weekend retreat." },
  { title: "Aravalli-Inspired Setting", body: "Surrounded by the natural character of the Aravalli landscape, offering a peaceful escape from urban surroundings." },
  { title: "Gated Farm Estate", body: "A planned and secure community offering a defined environment for private farm living." },
  { title: "Nature-Led Planning", body: "Designed around open spaces, greenery and a low-density farm estate concept." },
  { title: "Ideal for Weekend Living", body: "A convenient destination for weekend getaways, family retreats and private celebrations." },
  { title: "Well Connected to Jaipur & NCR", body: "Positioned to provide accessibility for both Jaipur and Delhi-NCR residents." },
  { title: "A Lifestyle & Land Ownership Opportunity", body: "Combining spacious land ownership with the experience of a premium nature-oriented retreat." },
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
    image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786195963/Whats-App-Image-2026-08-02-at-12-11-00-PM_zu0ilp.webp",
  },
  {
    icon: IconTrail,
    title: "Nature Walking & Cycling Track",
    body: "A 15 ft. landscaped track winding through the valley for morning walks, cycling, and evening strolls.",
    image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786195963/Chat-GPT-Image-Aug-2-2026-12-18-12-PM_mhwngi.webp",
  },
  {
    icon: IconSteam,
    title: "Yoga & Spa",
    body: "An open-air yoga and meditation deck paired with a wellness spa for massages and steam therapy — sunrise stretches and a slow reset, all in one zone.",
    image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786195962/Chat-GPT-Image-Aug-2-2026-12-22-24-PM_hbjklr.webp",
  },
  {
    icon: IconFork,
    title: "Open-Air Café & Fine Dining Deck",
    body: "A café and dining deck overlooking the valley, serving fresh, seasonal food through the day.",
    image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786195962/Chat-GPT-Image-Aug-2-2026-12-32-15-PM_jzrawi.webp",
  },
  {
    icon: IconStars,
    title: "Bonfire, BBQ & Movie Nights",
    body: "A courtyard for bonfire evenings, BBQ dinners, and open-air movie screenings under a clear hill sky.",
    image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786195962/Chat-GPT-Image-Aug-2-2026-12-44-12-PM_smuy6k.webp",
  },
  {
    icon: IconBook,
    title: "Amphitheatre & Cultural Plaza",
    body: "An open-air amphitheatre for community gatherings, live music, and cultural evenings.",
    image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786195962/Chat-GPT-Image-Aug-2-2026-12-48-15-PM_ssvjd4.webp",
  },
  {
    icon: IconWaves,
    title: "Waterfall",
    body: "A cascading man-made waterfall feeding the natural lake — a calming visual anchor at the heart of the estate.",
    image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786195962/Chat-GPT-Image-Aug-2-2026-01-06-21-PM_vrua4m.webp",
  },
  {
    icon: IconShield,
    title: "24×7 Camera Security",
    body: "Round-the-clock CCTV surveillance across the estate for a safe, well-monitored living environment.",
    image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786195961/Security-1_1_wxunrm.webp",
  },
  {
    icon: IconTree,
    title: "Gated Community",
    body: "A fully gated layout with controlled entry and exit points for a secure, low-maintenance estate.",
    image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786196163/Whats-App-Image-2026-08-02-at-1-25-04-PM_mlnwtm.webp",
  },
];

// ── FAQ ── common questions buyers search around Haute Eden Valley
const faqs = [
  {
    q: "Where is Haute Eden Valley located?",
    a: "Haute Eden Valley is located at Shahpura on the Delhi–Jaipur Highway (NH-48) — about 5 minutes from the highway, 1 hour from Jaipur, and 3 hours from Delhi via Gurugram, Neemrana, and Kotputli.",
  },
  {
    q: "Is Haute Eden Valley a good option for Delhi NCR buyers?",
    a: "Yes. Sitting directly on the Delhi–Jaipur Highway (NH-48), Haute Eden Valley is designed as a weekend-home and long-term land-ownership option for Delhi NCR families — an easy drive via Gurugram, Neemrana and Kotputli, with the peace of a gated farmhouse community near Jaipur.",
  },
  {
    q: "How big is the estate and how many farmhouses are there?",
    a: "Haute Eden Valley is spread across 20 acres, with 75 premium farmhouse plots planned across the estate.",
  },
  {
    q: "What is the plot size and starting price?",
    a: "Premium farmhouse plots near Jaipur start at 500 sq. yd., with pre-launch pricing starting from ₹40 Lakhs*.",
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

/* ── FAQ accordion row (same interaction pattern used across our other project sites) ── */
function FaqRow({ q, a, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: "1px solid rgba(22,35,28,0.1)", background: isOpen ? "var(--wc-mist)" : "var(--wc-canvas)", transition: "background 0.2s ease" }}>
      <button
        onClick={onToggle}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "1.1rem 1.4rem", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
      >
        <span style={{ fontFamily: "var(--wc-font-body)", fontWeight: 600, fontSize: "0.95rem", color: "var(--wc-ink)", lineHeight: 1.5 }}>{q}</span>
        <span style={{ flexShrink: 0, color: "var(--wc-clay)" }}>
          <IconPlusMinus size={17} isOpen={isOpen} />
        </span>
      </button>
      {isOpen && (
        <div style={{ padding: "0 1.4rem 1.3rem" }}>
          <p style={{ margin: 0, fontFamily: "var(--wc-font-body)", fontSize: "0.87rem", color: "var(--wc-stone)", lineHeight: 1.75 }}>{a}</p>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function Home() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);

  const whyUsRef = useRef(null);
  const highlightsRef = useRef(null);
  const amenitiesRef = useRef(null);
  const [whyUsInView, setWhyUsInView] = useState(false);
  const [highlightsInView, setHighlightsInView] = useState(false);
  const [amenitiesInView, setAmenitiesInView] = useState(false);

  useEffect(() => {
    const setup = (ref, setInView) => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.05, rootMargin: "0px 0px -15% 0px" }
      );
      observer.observe(ref.current);
      return observer;
    };
    const o0 = setup(whyUsRef, setWhyUsInView);
    const o1 = setup(highlightsRef, setHighlightsInView);
    const o2 = setup(amenitiesRef, setAmenitiesInView);
    return () => {
      o0 && o0.disconnect();
      o1 && o1.disconnect();
      o2 && o2.disconnect();
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch("/api/blogs")
      .then((r) => r.json())
      .then((data) => {
        setBlogs(data.posts || []);
        setBlogsLoading(false);
      })
      .catch(() => setBlogsLoading(false));
  }, []);

  const latestBlogs = [...blogs]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  return (
    <>
      {/* ══════════════════════════════════════════
          SCOPED STYLES — .wc-* prefix (retained from base template; safe to rename project-wide to hev-* later)
      ══════════════════════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Mulish:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

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
          --wc-font-display: 'Playfair Display', Georgia, serif;
          --wc-font-body: 'Mulish', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          --wc-font-mono: 'JetBrains Mono', 'Courier New', monospace;
        }

        html, body { margin: 0; padding: 0; background: var(--wc-ink); }
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
        .wc-btn-gold:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }
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
        @media (max-width: 640px) {
          .wc-hero-inner.wc-container { padding: 0 1.4rem; }
        }
        .wc-hero-kicker { color: var(--wc-brass-light); justify-content: center; }
        .wc-hero-title { font-family: var(--wc-font-display); font-weight: 500; font-size: clamp(2.3rem, 5.4vw, 4rem); line-height: 1.1; color: #f7f2e6; max-width: 760px; margin: 0.8rem 0 2rem; -webkit-text-stroke: 1px #f7f2e6; }

        /* Section basics */
        .wc-section { padding: 6rem 0; }
        .wc-section-head { max-width: 660px; }
        .wc-project .wc-section-head { max-width: 100%; }
        section#about .wc-about-text { max-width: 100%; }
        section#highlights .wc-section-head { max-width: 100%; }
        section#contact .wc-section-head { max-width: 100%; }
        .wc-h2 { font-family: var(--wc-font-display); font-weight: 500; font-size: clamp(1.9rem, 3.2vw, 2.7rem); line-height: 1.2; margin: 0.7rem 0 0; -webkit-text-stroke: 1px currentColor; }

        /* About */
        .wc-about-flex { display: grid; grid-template-columns: 1fr; gap: 2.6rem; align-items: center; margin-top: 1rem; }
        .wc-about-single-image { width: 100%; height: 360px; overflow: hidden; flex-shrink: 0; }
        .wc-about-single-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        @media (min-width: 992px) {
          .wc-about-flex { grid-template-columns: 1.05fr 0.95fr; gap: 3.5rem; }
          .wc-about-single-image { height: 520px; }
        }
        @media (max-width: 640px) {
          .wc-about-single-image { height: 260px; }
        }

        /* Why Choose Us */
        .wc-why-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-top: 3.2rem; }
        .wc-why-card { position: relative; border-radius: 16px; overflow: hidden; aspect-ratio: 1 / 1; background: var(--wc-ink); }
        .wc-why-card img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.6s ease; }
        .wc-why-card:hover img { transform: scale(1.06); }
        .wc-why-overlay { position: absolute; left: 0; right: 0; bottom: 0; padding: 1.5rem 1.3rem 1.3rem; background: linear-gradient(180deg, transparent 0%, rgba(22,35,28,0.68) 32%, rgba(22,35,28,0.96) 100%); }
        .wc-why-card h3 { font-family: var(--wc-font-display); font-weight: 600; font-size: 1.05rem; color: #f7f2e6; margin: 0 0 0.5rem; line-height: 1.3; }
        .wc-why-card p { font-family: var(--wc-font-body); font-size: 0.82rem; color: rgba(247,242,230,0.82); line-height: 1.55; margin: 0; }
        @media (min-width: 640px) {
          .wc-why-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 992px) {
          .wc-why-grid { grid-template-columns: repeat(4, 1fr); }
        }

        /* Project Highlights */
        .wc-highlight-grid { display: grid; grid-template-columns: 1fr; gap: 1px; background: rgba(22,35,28,0.1); border: 1px solid rgba(22,35,28,0.1); margin-top: 3rem; }
        .wc-highlight-item { background: var(--wc-canvas); padding: 1.6rem 1.7rem; display: flex; gap: 1rem; align-items: flex-start; }
        .wc-highlight-mark { flex-shrink: 0; width: 30px; height: 30px; border-radius: 50%; background: var(--wc-ink); color: var(--wc-brass-light); display: flex; align-items: center; justify-content: center; }
        .wc-highlight-item h3 { font-family: var(--wc-font-display); font-weight: 500; font-size: 1.08rem; margin: 0 0 0.4rem; color: var(--wc-ink); -webkit-text-stroke: 0.4px currentColor; }
        .wc-highlight-item p { margin: 0; font-size: 0.86rem; color: var(--wc-stone); line-height: 1.65; }
        @media (min-width: 768px) {
          .wc-highlight-grid { grid-template-columns: 1fr 1fr; }
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

        /* Blog preview cards */
        .wc-blog-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-top: 3.2rem; }
        .wc-blog-card { background: var(--wc-canvas); border: 1px solid rgba(22,35,28,0.12); display: flex; flex-direction: column; overflow: hidden; }
        .wc-blog-image { position: relative; height: 190px; overflow: hidden; background: var(--wc-canvas-2); }
        .wc-blog-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .wc-blog-card:hover .wc-blog-image img { transform: scale(1.06); }
        .wc-blog-body { padding: 1.5rem 1.5rem 1.7rem; display: flex; flex-direction: column; gap: 0.6rem; }
        .wc-blog-meta { font-family: var(--wc-font-mono); font-size: 0.66rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--wc-clay); }
        .wc-blog-card h3 { font-family: var(--wc-font-display); font-weight: 500; font-size: 1.08rem; margin: 0; line-height: 1.35; -webkit-text-stroke: 0.4px currentColor; }
        .wc-blog-card p { font-size: 0.85rem; color: var(--wc-stone); line-height: 1.6; margin: 0; }
        .wc-blog-read { margin-top: 0.3rem; display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.78rem; font-weight: 600; color: var(--wc-clay); }
        .wc-blog-empty { margin-top: 3.2rem; padding: 2.5rem; text-align: center; border: 1px dashed rgba(22,35,28,0.2); color: var(--wc-stone); font-size: 0.9rem; }
        @media (min-width: 640px) {
          .wc-blog-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 992px) {
          .wc-blog-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* FAQ */
        .wc-faq-section { position: relative; overflow: hidden; }
        .wc-faq-bg-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .wc-faq-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(22,35,28,0.62) 0%, rgba(22,35,28,0.58) 55%, rgba(22,35,28,0.3) 100%); }
        .wc-faq-inner { position: relative; z-index: 1; }
        .wc-faq-box { max-width: 620px; background: var(--wc-canvas); border: 1px solid rgba(0,0,0,0.06); overflow: hidden; margin-top: 1.8rem; }
        @media (max-width: 640px) {
          .wc-faq-overlay { background: rgba(22,35,28,0.6); }
        }

        /* Visit / Location + Enquire (merged) */
        .wc-visit-wrap { border: 1px solid rgba(22,35,28,0.14); overflow: hidden; display: grid; grid-template-columns: 1fr; }
        .wc-visit-map { position: relative; min-height: 340px; background: var(--wc-canvas-2); }
        .wc-visit-map iframe { width: 100%; height: 100%; min-height: 340px; border: 0; display: block; filter: sepia(8%) saturate(92%) contrast(96%); }
        .wc-visit-form-panel { background: var(--wc-canvas); color: var(--wc-ink); padding: 2.2rem 1.5rem; }
        .wc-visit-form-panel .contact-form-card {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
          border-radius: 0 !important;
        }
        @media (max-width: 640px) {
          .wc-visit-form-panel { padding: 1.6rem 1rem; }
        }
        
        @media (min-width: 992px) {
          .wc-visit-wrap { grid-template-columns: 1fr 1fr; }
          .wc-visit-map { min-height: 100%; }
          .wc-visit-form-panel { padding: 3rem; }
        }

        .wc-booking-form { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr; gap: 1rem; }
        .wc-field label { display: block; font-family: var(--wc-font-mono); font-size: 0.68rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--wc-stone); margin-bottom: 0.5rem; }
        .wc-field input, .wc-field select, .wc-field textarea {
          width: 100%; border: 1px solid rgba(22,35,28,0.2); border-radius: 2px; padding: 0.85rem 1rem;
          font-size: 0.9rem; background: var(--wc-canvas); color: var(--wc-ink); font-family: inherit;
        }
        .wc-field input:focus, .wc-field select:focus, .wc-field textarea:focus {
          outline: none; border-color: var(--wc-clay); box-shadow: 0 0 0 3px rgba(156,74,47,0.15);
        }
        @media (min-width: 640px) {
          .wc-booking-form { grid-template-columns: 1fr 1fr; }
          .wc-field-full { grid-column: 1 / -1; }
        }

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

        /* Scroll-triggered entrance animations */
        .wc-anim-left, .wc-anim-right {
          opacity: 0;
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wc-anim-left { transform: translateX(-40px); }
        .wc-anim-right { transform: translateX(40px); }
        .wc-inview .wc-anim-left,
        .wc-inview .wc-anim-right { opacity: 1; transform: translateX(0); }

        .wc-block-anim {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .wc-inview .wc-block-anim { opacity: 1; transform: translateY(0); }

        @media (max-width: 640px) {
          .wc-anim-left { transform: translateX(-24px); }
          .wc-anim-right { transform: translateX(24px); }
          .wc-block-anim { transform: translateY(14px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .wc-anim-left, .wc-anim-right, .wc-block-anim {
            opacity: 1 !important; transform: none !important; transition: none !important;
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
            name: "Haute Eden Valley",
            description:
              "Haute Eden Valley offers premium farmhouse plots near Jaipur on the Delhi–Jaipur Highway (NH-48) at Shahpura — a gated luxury farm estate designed for Delhi NCR families seeking a weekend home. Spread across 20 acres with 75 premium 500 sq. yd. farmhouse plots starting ₹40 Lakhs*, by Haute World Developers.",
            keywords: "farmhouse plots near Jaipur, farmhouse plots in Jaipur, farm land near Jaipur, farmhouse plots near Delhi Jaipur highway, NH-48 farmhouse plots, weekend home near Delhi NCR, gated farmhouse community near Jaipur, luxury farm estate near Jaipur, farmhouse plots Shahpura, investment in Aravalli hills property",
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

      {/* FAQ structured data — eligible for Google rich results */}
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
            <p className="wc-eyebrow wc-hero-kicker">Farmhouse Plots Near Jaipur • On NH-48, 5 Minutes From The Highway</p>
            <h1 className="wc-hero-title">
              Haute Eden Valley — A Nature Inspired{" "}
              <span className="wc-italic" style={{ color: "var(--wc-brass-light)" }}>Luxury Farm Estate</span>
            </h1>
            <p style={{ maxWidth: "640px", margin: "-1rem auto 2rem", color: "rgba(247,242,230,0.85)", fontSize: "1rem", lineHeight: 1.7 }}>
              20 acres, 75 premium farmhouse plots near Jaipur at Shahpura, right on the Delhi–Jaipur Highway
              (NH-48) — a gated weekend-home destination built for Delhi NCR families, starting ₹40 Lakhs*.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href="#highlights" className="wc-btn-gold">
                Explore The Estate <IconArrowRight size={14} />
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
            <div className="wc-about-flex">
              <div className="wc-about-text">
                <p className="wc-eyebrow" style={{ color: "var(--wc-moss)" }}>Farmhouse Plots Near Jaipur</p>
                <h2 className="wc-h2">
                  A Theme-Based Luxury Hill Farm{" "}
                  <span className="wc-italic" style={{ color: "var(--wc-clay)" }}>Community, Built For Legacy</span>
                </h2>
                <p style={{ marginTop: "1.2rem", color: "var(--wc-stone)", lineHeight: 1.75 }}>
                  Haute Eden Valley is a nature-inspired luxury farm estate offering premium farmhouse plots near
                  Jaipur, located at Shahpura on the Delhi–Jaipur Highway (NH-48) — an easy weekend drive for Delhi
                  NCR families. Designed for those seeking a peaceful escape from city life, the development brings
                  together spacious farm plots, landscaped surroundings and thoughtfully planned lifestyle amenities.
                </p>
                <p style={{ marginTop: "1rem", color: "var(--wc-stone)", lineHeight: 1.75 }}>
                  Set against the natural beauty of the Aravalli landscape, Haute Eden Valley offers an opportunity to
                  experience luxury living close to nature while remaining well connected to Jaipur and the Delhi-NCR
                  region. The project is designed for weekend retreats, private farmhouse living and long-term land
                  ownership.
                </p>
                <p style={{ marginTop: "1rem", color: "var(--wc-stone)", lineHeight: 1.75 }}>
                  With its strategic location, spacious plots and nature-focused environment, Haute Eden Valley
                  brings together the idea of a modern farm estate with the tranquillity of countryside living —
                  creating a distinctive destination for those looking for farmhouse plots near Jaipur.
                </p>
              </div>

              <div className="wc-about-single-image">
                <img src={aboutImage} alt="Farmhouse plots near Jaipur — aerial view of Haute Eden Valley on the Delhi–Jaipur Highway (NH-48), Shahpura" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ PROJECT HIGHLIGHTS ══════════════ */}
        <section id="highlights" ref={highlightsRef} className={`wc-section${highlightsInView ? " wc-inview" : ""}`} style={{ background: "var(--wc-canvas-2)" }}>
          <div className="wc-container">
            <div className="wc-section-head wc-anim-left">
              <p className="wc-eyebrow" style={{ color: "var(--wc-moss)" }}>Project Highlights</p>
              <h2 className="wc-h2">
                What Sets{" "}
                <span className="wc-italic" style={{ color: "var(--wc-clay)" }}>Haute Eden Valley Apart</span>
              </h2>
              <p style={{ marginTop: "1.2rem", color: "var(--wc-stone)", lineHeight: 1.75 }}>
                A quick look at what makes this 20-acre gated farmhouse community on NH-48 a standout choice for
                Delhi NCR families searching for farmhouse plots near Jaipur.
              </p>
            </div>

            <div className="wc-highlight-grid">
              {highlights.map((h, i) => (
                <div key={h.title} className="wc-highlight-item wc-block-anim" style={{ transitionDelay: `${i * 60}ms` }}>
                  <span className="wc-highlight-mark"><IconCheck size={13} /></span>
                  <div>
                    <h3>{h.title}</h3>
                    <p>{h.body}</p>
                  </div>
                </div>
              ))}
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
        <section id="amenities" ref={amenitiesRef} className={`wc-section${amenitiesInView ? " wc-inview" : ""}`} style={{ background: "var(--wc-canvas)" }}>
          <div className="wc-container">
            <div className="wc-section-head wc-anim-right">
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
              {amenities.map((a, i) => (
                <div key={a.title} className="wc-amenity-card wc-block-anim" style={{ transitionDelay: `${i * 60}ms` }}>
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

        {/* ══════════════ WHY CHOOSE US ══════════════ */}
        <section id="why-us" ref={whyUsRef} className={`wc-section${whyUsInView ? " wc-inview" : ""}`} style={{ background: "var(--wc-canvas)" }}>
          <div className="wc-container">
            <div className="wc-section-head wc-anim-left" style={{ maxWidth: "100%", textAlign: "center", margin: "0 auto" }}>
              <p className="wc-eyebrow" style={{ color: "var(--wc-moss)", justifyContent: "center" }}>Why Choose Us</p>
              <h2 className="wc-h2">
                Why Choose{" "}
                <span className="wc-italic" style={{ color: "var(--wc-clay)" }}>Haute Eden Valley</span>
              </h2>
            </div>

            <div className="wc-why-grid">
              {whyChooseUs.map((w, i) => (
                <div key={w.title} className="wc-why-card wc-block-anim" style={{ transitionDelay: `${i * 60}ms` }}>
                  <img src={w.image} alt={`${w.title} — Haute Eden Valley`} loading="lazy" />
                  <div className="wc-why-overlay">
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ FAQ ══════════════ */}
        <section id="faq" className="wc-faq-section">
          <video
            className="wc-faq-bg-video"
            src="https://res.cloudinary.com/dpbitfczf/video/upload/v1786172304/new.b958fedfa9c540383d09_aqya78.mp4"
            poster={img.faqBg}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="wc-faq-overlay" />
          <div className="wc-container wc-faq-inner" style={{ padding: "2.5rem 1.5rem 1.75rem" }}>
            <p className="wc-eyebrow" style={{ color: "var(--wc-brass-light)" }}>FAQ</p>
            <h2 className="wc-h2" style={{ color: "#f7f2e6" }}>
              Frequently Asked{" "}
              <span className="wc-italic" style={{ color: "var(--wc-brass-light)" }}>Questions</span>
            </h2>

            <div className="wc-faq-box">
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

        {/* ══════════════ BLOG ══════════════ */}
        <section id="blogs" className="wc-section" style={{ background: "var(--wc-canvas-2)" }}>
          <div className="wc-container">
            <div className="wc-section-head" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "1.2rem", maxWidth: "100%" }}>
              <div>
                <h2 className="wc-h2">
                  Our Recent{" "}
                  <span className="wc-italic" style={{ color: "var(--wc-clay)" }}>Blogs</span>
                </h2>
              </div>
              <Link href="/blogs" className="wc-btn-outline" style={{ color: "var(--wc-ink)", borderColor: "rgba(22,35,28,0.3)" }}>
                View All Articles <IconArrowRight size={14} />
              </Link>
            </div>

            {blogsLoading ? (
              <div className="wc-blog-empty">Loading the latest articles…</div>
            ) : latestBlogs.length === 0 ? (
              <div className="wc-blog-empty">New stories are on their way — check back soon.</div>
            ) : (
              <div className="wc-blog-grid">
                {latestBlogs.map((b) => (
                  <Link key={b._id} href={`/blogs/${b._id}`} className="wc-blog-card">
                    <div className="wc-blog-image">
                      {b.coverImage ? (
                        <img src={b.coverImage} alt={b.title} loading="lazy" />
                      ) : (
                        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span style={{ fontFamily: "var(--wc-font-display)", fontSize: "3rem", color: "rgba(22,35,28,0.15)" }}>{b.title?.[0]}</span>
                        </div>
                      )}
                    </div>
                    <div className="wc-blog-body">
                      <span className="wc-blog-meta">{b.category} · {formatBlogDate(b.createdAt)} · {blogReadTime(b.content)} Min Read</span>
                      <h3>{b.title}</h3>
                      <p>{stripHtml(b.content).slice(0, 110)}...</p>
                      <span className="wc-blog-read">Read More <IconArrowRight size={12} /></span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ══════════════ VISIT — LOCATION MAP + ENQUIRE FORM (merged) ══════════════ */}
        <section id="contact" className="wc-section" style={{ background: "var(--wc-canvas)" }}>
          <div className="wc-container">
            <div className="wc-section-head">
              <p className="wc-eyebrow" style={{ color: "var(--wc-moss)" }}>Visit The Valley</p>
              <h2 className="wc-h2">
                Book A Site Visit Or{" "}
                <span className="wc-italic" style={{ color: "var(--wc-clay)" }}>Request The Brochure</span>
              </h2>
              <p style={{ marginTop: "1.2rem", color: "var(--wc-stone)", lineHeight: 1.75 }}>
                Shahpura, Delhi–Jaipur Highway (NH-48), Rajasthan — 5 minutes from the highway, 1 hour from
                Jaipur, 3 hours from Delhi. Leave your details and our team will call you within 24 hours.
              </p>
            </div>

            <div className="wc-visit-wrap" style={{ marginTop: "3.2rem" }}>
              <div className="wc-visit-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4022.486831479149!2d76.04056250000001!3d27.3838125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d0d5c84b9ee27%3A0x8dfd8d445324c0b2!2sHaute%20Eden%20Valley!5e1!3m2!1sen!2sin!4v1786021347950!5m2!1sen!2sin"
                  title="Haute Eden Valley location on Google Maps"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="wc-visit-form-panel">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}