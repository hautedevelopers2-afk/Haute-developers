"use client";

import { useState } from "react";

const IconPlusMinus = ({ size = 18, color = "currentColor", isOpen = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    {!isOpen && <line x1="12" y1="5" x2="12" y2="19" />}
  </svg>
);

const faqs = [
  {
    q: "Where is Expressway Residency located?",
    a: "Expressway Residency is located near Hawa Hawai Restaurant on the Delhi–Meerut Expressway (NE-3), Ghaziabad, Uttar Pradesh — with direct frontage on the operational 16-lane expressway.",
  },
  {
    q: "What plot sizes are available?",
    a: "Freehold residential plots starting at 100 sq. yd. and above are available, with clear-title documentation and complete due diligence support.",
  },
  {
    q: "How well connected is the project to Delhi and Noida?",
    a: "The project is close to NH-24, about 15 Minutes from Sector 62 Noida, 25 minutes from Akshardham Metro Station, 15 minutes from Ghaziabad Railway Station, and 45 minutes from Jewar International Airport.",
  },
  {
    q: "What amenities are planned at Expressway Residency?",
    a: "50+ amenities including a club house, swimming pool, landscaped parks, jogging track, kids play area, retail shops, food court, yoga zone, and 24×7 secured, CCTV-monitored living.",
  },
  {
    q: "Is the township gated and secure?",
    a: "Yes. The township has separate entry and exit gates, 24×7 secured living, and CCTV with drone surveillance across the community.",
  },
  {
    q: "Who is developing Expressway Residency?",
    a: "Expressway Residency is developed by Haute World Developers, which has delivered premium residential communities across NCR, Dehradun, Vrindavan, and Dholera since 2011, earning the trust of more than 5,000 families.",
  },
];

function FaqRow({ q, a, isOpen, onToggle }) {
  return (
    <div className="er-faq-row" style={{ background: isOpen ? "var(--cream)" : "var(--white)", transition: "background 0.2s ease" }}>
      <button className="er-faq-btn" onClick={onToggle}>
        <span className="er-faq-q">{q}</span>
        <span style={{ flexShrink: 0, color: "var(--gold)" }}>
          <IconPlusMinus size={17} isOpen={isOpen} />
        </span>
      </button>
      {isOpen && (
        <div className="er-faq-a">
          <p style={{ margin: 0 }}>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ExpresswayFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="er-faq-box">
      {faqs.map((f, i) => (
        <FaqRow
          key={f.q}
          q={f.q}
          a={f.a}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  );
}