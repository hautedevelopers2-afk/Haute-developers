"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Neha Verma",
    location: "Sailok, Dehradun–Saharanpur Highway",
    review:
      "Peaceful surroundings aur clear documentation ne decision easy bana diya.",
    stars: 5,
  },
  {
    name: "Rohit Gupta",
    location: "Shiv Shakti Enclave, Noida Sector 79",
    review:
      "Sector 79 is growing fast. Investment ke point of view se kaafi promising project hai.",
    stars: 5,
  },
  {
    name: "Pooja Singh",
    location: "Shiv Shakti Enclave, Noida Sector 79",
    review:
      "Noida location + reasonable pricing = perfect combination for long term.",
    stars: 5,
  },
  {
    name: "Ankit Jain",
    location: "Manokamna Regent, Near Subharti University, Meerut",
    review:
      "University ke paas hone ki wajah se rental aur resale dono ka scope achha hai.",
    stars: 5,
  },
  {
    name: "Sunita Rawat",
    location: "Neelkanth Pinnacle, Dehradun",
    review:
      "Bahut hi sundar project hai. Delivery on time thi aur quality se koi compromise nahi.",
    stars: 5,
  },
  {
    name: "Vikram Chauhan",
    location: "East Avenue Society, Noida Sector 72",
    review:
      "3 BHK apartment mila, sab kuch transparent tha. Team ne har step pe guide kiya.",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    location: "Signature Homes, Govindpuram, Ghaziabad",
    review:
      "Very happy with the flat quality. Neighbourhood bhi achha hai aur infrastructure solid hai.",
    stars: 5,
  },
  {
    name: "Deepak Tyagi",
    location: "Expressway Residency, Ghaziabad",
    review:
      "Location is unbeatable — 20 minutes from Akshardham. Future growth pakki lagti hai.",
    stars: 5,
  },
];

const allCards = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  const trackRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function updateActiveCard() {
      const cards = track.querySelectorAll(".testi-card");
      if (!cards.length) return;

      const viewportCenterX = window.innerWidth / 2;

      let closestCard = null;
      let closestDist = Infinity;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const dist = Math.abs(cardCenterX - viewportCenterX);
        if (dist < closestDist) {
          closestDist = dist;
          closestCard = card;
        }
      });

      cards.forEach((card) => {
        if (card === closestCard) {
          card.classList.add("testi-card--active");
        } else {
          card.classList.remove("testi-card--active");
        }
      });

      rafRef.current = requestAnimationFrame(updateActiveCard);
    }

    rafRef.current = requestAnimationFrame(updateActiveCard);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-bg-pattern" aria-hidden="true" />

      <div className="container">
        <div className="testimonials-header">
          <span
            className="section-label"
            style={{ color: "var(--gold)", justifyContent: "center" }}
          >
            Client Stories
          </span>
          <h2>What Our Residents Say</h2>
          <div className="divider" style={{ margin: "1rem auto" }} />
          <p className="testimonials-subtitle">
            Real experiences from families who chose to invest and live with
            Haute Developers.
          </p>
        </div>
      </div>

      <div className="testimonials-viewport">
        <div
          className="testimonials-track"
          ref={trackRef}
          onMouseEnter={() => trackRef.current?.classList.add("paused")}
          onMouseLeave={() => trackRef.current?.classList.remove("paused")}
        >
          {allCards.map((t, i) => (
            <div className="testi-card" key={i}>
              <span className="testi-quote" aria-hidden="true">
                "
              </span>
              <div className="testi-stars">{"★".repeat(t.stars)}</div>
              <p className="testi-review">{t.review}</p>
              <div className="testi-footer">
                <div className="testi-avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-location">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-fade-left" aria-hidden="true" />
        <div className="testimonials-fade-right" aria-hidden="true" />
      </div>

      {/* Scoped overrides: card width (3 visible) + active scale boost */}
      <style>{`
        .testi-card {
          flex: 0 0 clamp(260px, 30vw, 420px) !important;
        }

        .testi-card:not(.testi-card--active) {
          transform: scale(0.88) !important;
          opacity: 0.55 !important;
        }

        .testi-card--active {
          transform: scale(1.18) !important;
          opacity: 1 !important;
          z-index: 10;
        }
      `}</style>
    </section>
  );
}