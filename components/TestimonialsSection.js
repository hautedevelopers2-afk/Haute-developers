"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Neha Verma",
    location: "Sailok, Dehradun–Saharanpur Highway",
    review: "Bahut peaceful surroundings hai yahan, aur documentation bhi ekdum clear tha — isliye decision lena easy ho gaya.",
    stars: 5,
    avatar: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786365907/ALV-UjUV7aasZu8jcgAMEHNrdmMH1jV1v8bJXUI7W7OlceL0p2ZjO_Ed_w90-h90-p-rp-mo-br100_nqymqz.png",
  },
  {
    name: "Rohit Gupta",
    location: "Shiv Shakti Enclave, Noida Sector 79",
    review: "Sector 79 kaafi fast grow kar raha hai. Investment ke perspective se ye project bahut promising lagta hai.",
    stars: 5,
    avatar: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786365995/ALV-UjUBk_xMTI6evS15R05V-p-PGmHqSvICmKEvkyFdBH8fbAk5tScX_w90-h90-p-rp-mo-br100_mck4uf.png",
  },
  {
    name: "Pooja Singh",
    location: "Shiv Shakti Enclave, Noida Sector 79",
    review: "Noida ki location aur reasonable pricing — dono mil kar iss project ko long term ke liye perfect bana dete hain.",
    stars: 5,
    avatar: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786366023/ALV-UjW_js07LInTrjrb1luxDsHfagoc4zo8brKZfjV_G1Cb3dK_HDrg_w90-h90-p-rp-mo-ba12-br100_fpiv0t.png",
  },
  {
    name: "Ankit Jain",
    location: "Manokamna Regent, Near Subharti University, Meerut",
    review: "University ke paas hone ki wajah se rental aur resale, dono ka scope kaafi achha hai.",
    stars: 5,
    avatar: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786366059/ALV-UjX6rBEmR_gco9MGGOPqcSLEanoym9x6QAvU75381aZMMOudnsI9_w90-h90-p-rp-mo-br100_kfgfzk.png",
  },
  {
    name: "Sunita Rawat",
    location: "Neelkanth Pinnacle, Dehradun",
    review: "Project bahut hi sundar hai. Delivery bhi time pe hui aur quality mein koi compromise nahi kiya gaya.",
    stars: 5,
    avatar: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786366083/ALV-UjUe6ciZBNmax0j0GexfJ7bm-FMCnWPJ34MQaU2c3v53yEZYG5dc_w90-h90-p-rp-mo-br100_fhwhxa.png",
  },
  {
    name: "Vikram Chauhan",
    location: "East Avenue Society, Noida Sector 72",
    review: "3 BHK apartment liya maine, sab kuch transparent tha. Team ne har step pe achhe se guide kiya.",
    stars: 5,
    avatar: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786366104/ALV-UjXovEyTSA_oNQGKK4QPeHo9ZgiWjfTLlIwqv3HdcUZ7kuPm-0t6_w90-h90-p-rp-mo-br100_apymhs.png",
  },
  {
    name: "Priya Sharma",
    location: "Signature Homes, Govindpuram, Ghaziabad",
    review: "Flat ki quality se main bahut khush hoon. Neighbourhood bhi achha hai aur infrastructure ekdum solid hai.",
    stars: 5,
    avatar: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786366127/ALV-UjX-IM2JBQr4z1eM_n5M3coX6UpPqSnq9JI-dM836TMPxBOurvVu_w90-h90-p-rp-mo-br100_ctgljx.png",
  },
  {
    name: "Deepak Tyagi",
    location: "Expressway Residency, Ghaziabad",
    review: "Location toh bilkul unbeatable hai — Akshardham se sirf 20 minute. Future growth pakki lagti hai.",
    stars: 5,
    avatar: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786366147/ALV-UjV-6U2rW6i_xXnZlkriCAMbAHR1giGYRTZ43X-8F2UHhT9rWFfT_w90-h90-p-rp-mo-ba12-br100_xdz2ae.png",
  },
];

const HOLD_MS = 3000;
const N = testimonials.length;
const CARD_W = 300;
const GAP = 24;

// Scale applied at each distance from center (0 = middle card).
const SCALE_BY_DIST = { 0: 1.1, 1: 0.9, 2: 0.78, 3: 0.78 };

// Precompute the horizontal offset for each distance so that the
// visible EDGE-TO-EDGE gap between adjacent cards is always GAP,
// even though cards at different distances render at different
// scales (and therefore different widths).
function buildPositions() {
  const pos = { 0: 0 };
  let prevHalf = (CARD_W * SCALE_BY_DIST[0]) / 2;
  let cumulative = 0;
  for (let d = 1; d <= 3; d++) {
    const half = (CARD_W * SCALE_BY_DIST[d]) / 2;
    cumulative += prevHalf + GAP + half;
    pos[d] = cumulative;
    prevHalf = half;
  }
  return pos;
}
const POSITIONS = buildPositions();

function mod(n, m) {
  return ((n % m) + m) % m;
}

export default function TestimonialsSection() {
  // "center" is the absolute, ever-increasing index of the card
  // currently in the middle (zoomed) slot. Keeping it unwrapped
  // means slot keys stay stable across ticks, so React slides
  // existing cards instead of replacing them.
  const [center, setCenter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCenter((c) => c + 1), HOLD_MS);
    return () => clearTimeout(timer);
  }, [center]);

  const activeIndex = mod(center, N);

  // -2 and 2 are off-screen buffer slots (needed so the incoming/
  // outgoing card can animate in/out smoothly); -1, 0, 1 are the
  // three visible cards, with 0 being dead-center.
  const slots = [-3, -2, -1, 0, 1, 2, 3].map((offset) => center + offset);

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

        <div className="testi-viewport-outer">
        <div className="testi-viewport">
          <div className="testi-track">
            {slots.map((slot) => {
              const offset = slot - center; // -2, -1, 0, 1, 2
              const t = testimonials[mod(slot, N)];
              const dist = Math.abs(offset);
              const isMiddle = offset === 0;
              const isNear = dist === 1;
              const isFar = dist === 2;
              const translateX = Math.sign(offset) * POSITIONS[dist];
              const scale = SCALE_BY_DIST[dist];
              const opacity = isMiddle ? 1 : isNear ? 0.6 : isFar ? 0.32 : 0;
              const blur = isFar ? 2 : 0;

              return (
                <div
                  key={slot}
                  className={`testi-card ${isMiddle ? "testi-card--active" : ""}`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                    opacity,
                    filter: `blur(${blur}px)`,
                    zIndex: isMiddle ? 3 : isNear ? 2 : 1,
                  }}
                >
                  <div className="testi-stars">{"★".repeat(t.stars)}</div>
                  <p className="testi-review">{t.review}</p>
                  <div className="testi-footer">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="testi-avatar"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="testi-avatar testi-avatar--fallback" aria-hidden="true" style={{ display: "none" }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-location">{t.location}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>

        <div className="testi-dots" role="tablist" aria-label="Testimonial progress">
          {testimonials.map((_, i) => (
            <span key={i} className={`testi-dot ${i === activeIndex ? "testi-dot--active" : ""}`} aria-hidden="true" />
          ))}
        </div>
      </div>

      <style>{`
        .testi-viewport-outer {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          overflow: hidden;
        }

        .testi-viewport {
          position: relative;
          overflow: visible;
          padding: 2rem 0 1rem;
          height: 320px;
          max-width: 1600px;
          margin: 0 auto;
        }

        .testi-track {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .testi-card {
          position: absolute;
          top: 50%;
          left: 50%;
          width: ${CARD_W}px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(201,144,26,0.25);
          border-radius: 18px;
          padding: 1.8rem 1.6rem 1.5rem;
          box-shadow: none;
          transition: transform 0.9s cubic-bezier(0.65,0,0.35,1),
                      opacity 0.9s cubic-bezier(0.65,0,0.35,1),
                      filter 0.9s cubic-bezier(0.65,0,0.35,1),
                      border-color 0.9s ease,
                      box-shadow 0.9s ease;
        }

        .testi-card .testi-stars { font-size: 0.82rem; color: var(--gold); letter-spacing: 0.1em; margin-bottom: 0.9rem; }
        .testi-card .testi-review {
          font-size: 0.88rem; line-height: 1.75; color: rgba(255,255,255,0.75); margin: 0 0 1.3rem;
          display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;
          transition: color 0.9s ease;
        }
        .testi-card .testi-footer { display: flex; align-items: center; gap: 0.75rem; }
        .testi-card .testi-avatar {
          width: 38px; height: 38px; border-radius: 50%;
          flex-shrink: 0;
          object-fit: cover;
        }
        .testi-card .testi-avatar--fallback {
          background: linear-gradient(135deg,var(--gold),var(--gold-light));
          align-items: center; justify-content: center;
          font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: #fff;
        }
        .testi-card .testi-name { font-family: var(--font-body); font-size: 0.86rem; font-weight: 700; color: #fff; line-height: 1.2; }
        .testi-card .testi-location { font-size: 0.72rem; color: var(--gold); opacity: 0.85; margin-top: 0.1rem; }

        .testi-card--active {
          border-color: rgba(201,144,26,0.55);
          box-shadow: 0 0 0 1px rgba(201,144,26,0.2);
        }
        .testi-card--active .testi-review { color: rgba(255,255,255,0.92); }

        .testi-dots { display: flex; justify-content: center; gap: 0.5rem; padding: 1.2rem 0 3rem; }
        .testi-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.2); transition: all 0.4s ease; }
        .testi-dot--active { width: 22px; background: var(--gold); border-radius: 4px; }

        @media (prefers-reduced-motion: reduce) {
          .testi-card { transition: none !important; }
        }

        @media (max-width: 900px) {
          .testi-card { width: 240px; }
        }

        @media (max-width: 640px) {
          .testi-viewport { height: 300px; }
          .testi-viewport-outer { overflow: hidden; }
        }
      `}</style>
    </section>
  );
}