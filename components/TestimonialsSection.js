"use client";

import { useEffect, useState } from "react";

const testimonials = [
  { name: "Neha Verma", location: "Sailok, Dehradun–Saharanpur Highway", review: "Peaceful surroundings aur clear documentation ne decision easy bana diya.", stars: 5 },
  { name: "Rohit Gupta", location: "Shiv Shakti Enclave, Noida Sector 79", review: "Sector 79 is growing fast. Investment ke point of view se kaafi promising project hai.", stars: 5 },
  { name: "Pooja Singh", location: "Shiv Shakti Enclave, Noida Sector 79", review: "Noida location + reasonable pricing = perfect combination for long term.", stars: 5 },
  { name: "Ankit Jain", location: "Manokamna Regent, Near Subharti University, Meerut", review: "University ke paas hone ki wajah se rental aur resale dono ka scope achha hai.", stars: 5 },
  { name: "Sunita Rawat", location: "Neelkanth Pinnacle, Dehradun", review: "Bahut hi sundar project hai. Delivery on time thi aur quality se koi compromise nahi.", stars: 5 },
  { name: "Vikram Chauhan", location: "East Avenue Society, Noida Sector 72", review: "3 BHK apartment mila, sab kuch transparent tha. Team ne har step pe guide kiya.", stars: 5 },
  { name: "Priya Sharma", location: "Signature Homes, Govindpuram, Ghaziabad", review: "Very happy with the flat quality. Neighbourhood bhi achha hai aur infrastructure solid hai.", stars: 5 },
  { name: "Deepak Tyagi", location: "Expressway Residency, Ghaziabad", review: "Location is unbeatable — 20 minutes from Akshardham. Future growth pakki lagti hai.", stars: 5 },
];

const HOLD_MS = 3000;

function mod(n, m) {
  return ((n % m) + m) % m;
}

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((i) => mod(i + 1, testimonials.length));
    }, HOLD_MS);
    return () => clearTimeout(timer);
  }, [index]);

  const goPrev = () => setIndex((i) => mod(i - 1, testimonials.length));
  const goNext = () => setIndex((i) => mod(i + 1, testimonials.length));

  // 5 visible slots: -2 -1 0(center) +1 +2
  const positions = [-2, -1, 0, 1, 2];
  const visible = positions.map((offset) => ({
    offset,
    t: testimonials[mod(index + offset, testimonials.length)],
  }));

  return (
    <section className="testimonials-section">
      <div className="testimonials-bg-pattern" aria-hidden="true" />

      <div className="container">
        <div className="testimonials-header">
          <span className="section-label" style={{ color: "var(--gold)", justifyContent: "center" }}>
            Client Stories
          </span>
          <h2>What Our Residents Say</h2>
          <div className="divider" style={{ margin: "1rem auto" }} />
          <p className="testimonials-subtitle">
            Real experiences from families who chose to invest and live with Haute World Developers.
          </p>
        </div>

        <div className="testi-row-viewport">
          {visible.map(({ offset, t }) => (
            <div
              key={`${index}-${offset}`}
              className={`testi-row-card testi-pos-${offset}`.trim()}
            >
              <div className="testi-stars">{"★".repeat(t.stars)}</div>
              <p className="testi-review">{t.review}</p>
              <div className="testi-footer">
                <div className="testi-avatar" aria-hidden="true">{t.name.charAt(0)}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-location">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testi-controls">
          <button className="testi-nav-btn" onClick={goPrev} aria-label="Previous testimonial">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="testi-nav-btn" onClick={goNext} aria-label="Next testimonial">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="testi-dots" role="tablist" aria-label="Testimonial progress">
          {testimonials.map((_, i) => (
            <span key={i} className={`testi-dot ${i === index ? "testi-dot--active" : ""}`} aria-hidden="true" />
          ))}
        </div>
      </div>

      <style>{`
        .testi-row-viewport {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem 0 1rem;
          min-height: 340px;
        }

        .testi-row-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(201,144,26,0.25);
          border-radius: 18px;
          padding: 1.8rem 1.6rem 1.5rem;
          box-shadow: 0 12px 40px rgba(0,0,0,0.35);
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1),
                      opacity 0.6s cubic-bezier(0.22,1,0.36,1),
                      filter 0.6s cubic-bezier(0.22,1,0.36,1);
        }

        .testi-row-card .testi-stars { font-size: 0.82rem; color: var(--gold); letter-spacing: 0.1em; margin-bottom: 0.9rem; }
        .testi-row-card .testi-review {
          font-size: 0.88rem; line-height: 1.75; color: rgba(255,255,255,0.75); margin: 0 0 1.3rem;
          display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;
        }
        .testi-row-card .testi-footer { display: flex; align-items: center; gap: 0.75rem; }
        .testi-row-card .testi-avatar {
          width: 38px; height: 38px; border-radius: 50%;
          background: linear-gradient(135deg,var(--gold),var(--gold-light));
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: #fff; flex-shrink: 0;
        }
        .testi-row-card .testi-name { font-family: var(--font-body); font-size: 0.86rem; font-weight: 700; color: #fff; line-height: 1.2; }
        .testi-row-card .testi-location { font-size: 0.72rem; color: var(--gold); opacity: 0.85; margin-top: 0.1rem; }

        /* Center card: zoomed in / featured */
        .testi-pos-0 {
          width: 320px;
          transform: scale(1.14);
          opacity: 1;
          filter: blur(0);
          z-index: 5;
          border-color: rgba(201,144,26,0.55);
          box-shadow: 0 0 0 1px rgba(201,144,26,0.2), 0 24px 70px rgba(0,0,0,0.5);
        }

        /* Immediate neighbors */
        .testi-pos--1, .testi-pos-1 {
          width: 240px;
          transform: scale(0.88);
          opacity: 0.55;
          filter: blur(0.5px);
          z-index: 3;
        }

        /* Outer edge cards, partially cut like reference image */
        .testi-pos--2, .testi-pos-2 {
          width: 200px;
          transform: scale(0.72);
          opacity: 0.28;
          filter: blur(1px);
          z-index: 1;
        }

        .testi-controls { display: flex; justify-content: center; gap: 0.7rem; margin-top: 0.5rem; }
        .testi-nav-btn {
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
          color: #fff; display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background 0.2s ease, border-color 0.2s ease;
        }
        .testi-nav-btn:hover { background: var(--gold); border-color: var(--gold); }

        .testi-dots { display: flex; justify-content: center; gap: 0.5rem; padding: 1.2rem 0 3rem; }
        .testi-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.2); transition: all 0.4s ease; }
        .testi-dot--active { width: 22px; background: var(--gold); border-radius: 4px; }

        @media (prefers-reduced-motion: reduce) {
          .testi-row-card { transition: none !important; }
        }

        @media (max-width: 900px) {
          .testi-pos--2, .testi-pos-2 { display: none; }
          .testi-pos--1, .testi-pos-1 { width: 160px; }
          .testi-pos-0 { width: 280px; }
        }

        @media (max-width: 640px) {
          .testi-pos--1, .testi-pos-1 { display: none; }
          .testi-pos-0 { width: min(100%, 340px); transform: scale(1); }
          .testi-row-viewport { min-height: 300px; padding: 1rem 0 0.5rem; }
        }
      `}</style>
    </section>
  );
}