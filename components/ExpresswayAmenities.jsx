"use client";

import { useState, useEffect, useRef } from "react";

/* ── Icons ── */
const IconBuilding = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6"/><path d="M9 13h6"/><path d="M9 17h6"/>
  </svg>
);
const IconPool = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/>
    <path d="M14 7V4"/><path d="M18 7V4"/><path d="M14 4h4"/>
  </svg>
);
const IconTree = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22v-7"/><path d="M9 15H5l7-7 7 7h-4"/><path d="M7 11H3l9-9 9 9h-4"/>
  </svg>
);
const IconRun = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="13" cy="4" r="1.5"/>
    <path d="M7 21l3-8 2 2 3-5"/><path d="M17 21l-2-8-2 2"/>
    <path d="M4 13l4-2 2 3 3-6 3 2"/>
  </svg>
);
const IconYoga = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="4" r="1.5"/>
    <path d="M6 12c0-3 2-5 6-5s6 2 6 5"/>
    <path d="M4 19l4-4 4 3 4-3 4 4"/>
    <path d="M8 15v-3"/><path d="M16 15v-3"/>
  </svg>
);
const IconWaves = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 10c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0"/>
    <path d="M2 16c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0"/>
  </svg>
);
const IconCamera = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);
const IconMedical = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8"/><path d="M8 12h8"/>
  </svg>
);
const IconTemple = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2l9 6H3z"/><path d="M5 8v13"/><path d="M19 8v13"/><path d="M9 21v-6h6v6"/>
  </svg>
);
const IconSchool = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>
  </svg>
);
const IconCommercial = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21h18"/><path d="M4 21V9l3-5h10l3 5v12"/><path d="M9 21v-6h6v6"/><path d="M9 12h.01"/><path d="M15 12h.01"/>
  </svg>
);
const IconAmphitheatre = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 20c2-5 6-8 10-8s8 3 10 8"/>
    <path d="M5 20c1.5-3.5 4-5.5 7-5.5s5.5 2 7 5.5"/>
    <circle cx="12" cy="9" r="2"/>
  </svg>
);

const amenities = [
  { title: "Club House", desc: "A modern club house for community gatherings, leisure, and recreation.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786264523/Club-House_buxts6.webp", Icon: IconBuilding },
  { title: "Swimming Pool", desc: "A dedicated swimming pool for residents to relax and unwind.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786264524/Swimming-pool_sphuiz.webp", Icon: IconPool },
  { title: "Landscaped Park", desc: "Green, landscaped parks designed for morning walks and family time.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786264524/Park_qfvax4.webp", Icon: IconTree },
  { title: "Jogging Track", desc: "A dedicated jogging track winding through the township for daily fitness.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786264524/Jogging-track_rwsojt.webp", Icon: IconRun },
  { title: "Yoga & Meditation Zone", desc: "A calm, open-air space for yoga, meditation, and mindful mornings.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786264524/Meditation_df8zuf.jpg", Icon: IconYoga },
  { title: "Serene Lake", desc: "A tranquil lake at the heart of the township, adding a natural calm to everyday living.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786264524/Lake_ye1yj7.webp", Icon: IconWaves },
  { title: "CCTV with Drone Surveillance", desc: "Round-the-clock CCTV and drone surveillance for a secure, well-monitored community.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786264523/Drone-Survillance_tsaiel.webp", Icon: IconCamera },
  { title: "Mini Hospital", desc: "An on-site mini hospital for quick access to essential medical care.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786264524/Mini-Hospital_agqmbj.webp", Icon: IconMedical },
  { title: "Temple", desc: "A dedicated temple within the township for daily prayer and peace of mind.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786264525/Temple_gf9j2m.webp", Icon: IconTemple },
  { title: "School", desc: "A school within the community, keeping quality education close to home.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786264525/School_nlt2bq.webp", Icon: IconSchool },
  { title: "Commercial Complex", desc: "An in-township commercial complex bringing everyday shopping and services within walking distance.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786264523/Commercial_gmxpzh.webp", Icon: IconCommercial },
  { title: "Amphitheatre", desc: "An open-air amphitheatre for community events, performances, and celebrations.", image: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786264523/Ampitheatre_m4wcv7.webp", Icon: IconAmphitheatre },
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

export default function ExpresswayAmenities() {
  return (
    <div className="er-amenity-grid">
      {amenities.map((a) => (
        <RevealItem key={a.title} className="er-amenity-card">
          <div className="er-amenity-image">
            <img src={a.image} alt={`${a.title} at Expressway Residency`} loading="lazy" />
          </div>
          <div className="er-amenity-body">
            <span className="er-amenity-icon"><a.Icon size={30} color="var(--gold)" /></span>
            <div className="er-amenity-text">
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          </div>
        </RevealItem>
      ))}
    </div>
  );
}