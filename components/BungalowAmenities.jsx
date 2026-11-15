"use client";

// Place this file at: components/BungalowAmenities.jsx
// Uses the same .er-amenity-* and .er-block-anim classes defined in the page's <style> block.
//
// NOTE: only features that came from the project creatives are listed here.
// When you have the final estate amenity list (clubhouse, security, roads, etc.)
// just add more objects to the `features` array below, with an icon and an image key.

import { useState, useEffect, useRef } from "react";
import { PROJECT_NAME, images } from "../lib/haute-bungalow-estate";

/* ── Icons ── */
const Svg = ({ size = 30, color = "currentColor", children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);
const IconHome = (p) => (<Svg {...p}><path d="M3 11l9-8 9 8" /><path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" /></Svg>);
const IconTree = (p) => (<Svg {...p}><path d="M12 22v-7" /><path d="M9 15H5l7-7 7 7h-4" /><path d="M7 11H3l9-9 9 9h-4" /></Svg>);
const IconPool = (p) => (<Svg {...p}><path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /><path d="M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /><path d="M14 7V4" /><path d="M18 7V4" /><path d="M14 4h4" /></Svg>);
const IconLayout = (p) => (<Svg {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="12" y1="3" x2="12" y2="21" /><line x1="3" y1="12" x2="21" y2="12" /></Svg>);
const IconKey = (p) => (<Svg {...p}><circle cx="8" cy="15" r="4" /><path d="M10.8 12.2L21 2" /><path d="M16 7l3 3" /><path d="M14 9l2 2" /></Svg>);
const IconCity = (p) => (<Svg {...p}><path d="M3 21h18" /><path d="M9 8h1" /><path d="M9 12h1" /><path d="M9 16h1" /><path d="M14 8h1" /><path d="M14 12h1" /><path d="M14 16h1" /><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" /></Svg>);

const features = [
  {
    title: "8 BHK Luxury Bungalow",
    desc: "A grand 8 BHK residence on a 2,000 sq. yd. plot with 500 sq. yd. of construction area, priced at ₹6.5 Cr.",
    image: images.features.bungalow,
    Icon: IconHome,
  },
  {
    title: "Private Garden up to 1,500 Sq. Yd.",
    desc: "Every 8 BHK bungalow comes with a 1,500 sq. yd. private garden for lawns, walkways and outdoor living.",
    image: images.features.garden,
    Icon: IconTree,
  },
  {
    title: "Pool & Alfresco Lounge",
    desc: "The artist's impression shows a private swimming pool with a poolside lounge bar. Final specifications are confirmed at booking.",
    image: images.features.pool,
    Icon: IconPool,
  },
  {
    title: "One-Acre Bungalow Estate",
    desc: "For buyers who want more land, a one-acre bungalow with a private garden is available at ₹16 Cr.",
    image: images.features.acre,
    Icon: IconLayout,
  },
  {
    title: "Plot-Only Option",
    desc: "Prefer to design your own bungalow? Buy the plot alone at ₹27,000 per sq. yd. effective 20 November 2026.",
    image: images.features.plotOnly,
    Icon: IconKey,
  },
  {
    title: "Low-Density Planning",
    desc: "Only 441 bungalows across 450 acres, so every home gets space, privacy and a sense of arrival.",
    image: images.features.lowDensity,
    Icon: IconCity,
  },
];

/* ── Reveals a card the moment IT scrolls into view ── */
function RevealItem({ className = "", children }) {
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
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} er-block-anim${inView ? " er-inview-item" : ""}`}>
      {children}
    </div>
  );
}

export default function BungalowAmenities() {
  return (
    <div className="er-amenity-grid">
      {features.map((f) => (
        <RevealItem key={f.title} className="er-amenity-card">
          <div className="er-amenity-image">
            <img src={f.image} alt={`${f.title} at ${PROJECT_NAME}, Delhi–Meerut Expressway, Ghaziabad`} loading="lazy" />
          </div>
          <div className="er-amenity-body">
            <span className="er-amenity-icon"><f.Icon size={30} color="var(--gold)" /></span>
            <div className="er-amenity-text">
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          </div>
        </RevealItem>
      ))}
    </div>
  );
}