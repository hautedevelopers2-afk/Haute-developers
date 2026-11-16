"use client";

// Place this file at: components/BungalowFAQ.jsx
// Uses the same .er-faq-* classes defined in the page's <style> block.
// Pass the FAQ list from the page via the `items` prop so the visible accordion
// and the FAQPage JSON-LD always stay identical. Falls back to the list in
// lib/haute-bungalow-estate.js if no `items` are passed.

import { useState } from "react";
import { faqs as defaultFaqs } from "../lib/haute-bungalow-estate";

const IconPlusMinus = ({ size = 18, color = "currentColor", isOpen = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    {!isOpen && <line x1="12" y1="5" x2="12" y2="19" />}
  </svg>
);

function FaqRow({ q, a, isOpen, onToggle }) {
  return (
    <div
      className="er-faq-row"
      style={{ background: isOpen ? "var(--cream)" : "var(--white)", transition: "background 0.2s ease" }}
    >
      <button className="er-faq-btn" onClick={onToggle} aria-expanded={isOpen}>
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

export default function BungalowFAQ({ items }) {
  const list = items && items.length ? items : defaultFaqs;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="er-faq-box">
      {list.map((f, i) => (
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