"use client";

import { useRef, useEffect } from "react";

export default function ProjectSlider({ projects }) {
  const sliderRef = useRef(null);

  let isDown = false;
  let startX;
  let scrollLeft;

  const centerSlide = (slider, slide) => {
    const offset =
      slide.offsetLeft - slider.offsetWidth / 2 + slide.offsetWidth / 2;
    slider.scrollTo({ left: offset, behavior: "smooth" });
  };

  const getClosestSlide = (slider) => {
    const slides = slider.querySelectorAll(".project-slide");
    const sliderRect = slider.getBoundingClientRect();
    const center = sliderRect.left + sliderRect.width / 2;
    let closest = slides[0];
    let minDistance = Infinity;
    slides.forEach((slide) => {
      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.left + rect.width / 2;
      const distance = Math.abs(center - slideCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closest = slide;
      }
    });
    return closest;
  };

  const scroll = (dir) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const slides = slider.querySelectorAll(".project-slide");
    const current = getClosestSlide(slider);
    const currentIndex = Array.from(slides).indexOf(current);
    let newIndex = dir === "left" ? currentIndex - 1 : currentIndex + 1;
    newIndex = Math.max(0, Math.min(newIndex, slides.length - 1));
    centerSlide(slider, slides[newIndex]);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const slides = slider.querySelectorAll(".project-slide");

    const handleScroll = () => {
      const sliderRect = slider.getBoundingClientRect();
      const center = sliderRect.left + sliderRect.width / 2;
      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const slideCenter = rect.left + rect.width / 2;
        const distance = Math.abs(center - slideCenter);
        const scale = Math.max(1.08 - distance / 600, 0.9);
        const opacity = Math.max(1 - distance / 500, 0.5);
        const zIndex = 1000 - distance;
        slide.style.transform = `scale(${scale})`;
        slide.style.zIndex = zIndex;
      });
    };

    let scrollTimeout;
    const handleSnap = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const closest = getClosestSlide(slider);
        centerSlide(slider, closest);
      }, 120);
    };

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("dragging");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("dragging");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("dragging");
      handleSnap();
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    });

    slider.addEventListener("scroll", handleScroll);
    slider.addEventListener("scroll", handleSnap);

    requestAnimationFrame(() => {
      const firstSlide = slider.querySelector(".project-slide");
      if (firstSlide) centerSlide(slider, firstSlide);
    });

    handleScroll();

    return () => {
      slider.removeEventListener("scroll", handleScroll);
      slider.removeEventListener("scroll", handleSnap);
    };
  }, []);

  return (
    <>
      <style>{`
        .project-slide {
          perspective: 1000px;
          position: relative;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .project-slide:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-front,
        .flip-back {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 14px;
          overflow: hidden;
        }
        .flip-back {
          transform: rotateY(180deg);
          background: linear-gradient(145deg, #0d2f24, #1a4a3a);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem 1.8rem;
          gap: 0.75rem;
          box-shadow: inset 0 12px 24px rgba(0,0,0,0.25), inset 0 -12px 24px rgba(0,0,0,0.25);
        }
        .flip-back-label {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 0.2rem;
        }
        .flip-back-title {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2vw, 1.9rem);
          font-weight: 600;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 0.3rem;
        }
        .flip-back-location {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.6);
          margin-bottom: 0.5rem;
        }
        .flip-back-divider {
          width: 40px;
          height: 2px;
          background: var(--gold);
          border-radius: 2px;
          margin: 0.3rem 0 0.8rem;
        }
        .flip-back-desc {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.72);
          line-height: 1.75;
        }
        .flip-back-status {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.8rem;
          background: rgba(201,144,26,0.18);
          border: 1px solid rgba(201,144,26,0.4);
          border-radius: 999px;
          padding: 0.3rem 0.9rem;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--gold);
          width: fit-content;
        }
        .flip-back-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold);
        }
        .project-slide-overlay {
          position: absolute !important;
          inset: 0 !important;
          background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.65) 45%, transparent 75%) !important;
          z-index: 1 !important;
          display: block !important;
        }
        .project-slide-content {
          position: absolute !important;
          bottom: 0 !important;
          left: 0 !important;
          right: 0 !important;
          padding: 1.4rem 1.2rem !important;
          z-index: 2 !important;
        }
        .project-slide-location {
          font-size: 0.7rem !important;
          letter-spacing: 0.1em !important;
          color: rgba(255,255,255,0.9) !important;
          opacity: 1 !important;
          margin-bottom: 0.3rem !important;
          text-transform: uppercase !important;
        }
        .project-slide-title {
          font-family: var(--font-display) !important;
          font-size: 1.5rem !important;
          color: #ffffff !important;
          font-weight: 700 !important;
          text-shadow: 0 2px 20px rgba(0,0,0,1), 0 0 60px rgba(0,0,0,1) !important;
          line-height: 1.2 !important;
        }
      `}</style>

      <div className="projects-slider-wrapper">
        <button className="slider-btn left" onClick={() => scroll("left")}>←</button>

        <div className="projects-slider" ref={sliderRef}>
          {projects.map((p) => (
            <div className="project-slide" key={p.name}>
              <div className="flip-card-inner">

                {/* ── FRONT ── */}
              <div className="flip-front">
                  <img src={p.image} alt={p.name} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block", position:"absolute", inset:0, transition:"opacity 0.35s ease" }} />
                  <div className="project-slide-overlay" style={{
                    position:"absolute", inset:0,
                    background:"linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 35%, transparent 60%)",
                  }} />
                  <div className="project-slide-content" style={{
                    position:"absolute", bottom:0, left:0, right:0,
                    padding:"1.5rem 1.2rem",
                  }}>
                    <div className="project-slide-location" style={{
                      color:"rgba(255,255,255,0.85)",
                      fontSize:"0.72rem",
                      letterSpacing:"0.1em",
                      textTransform:"uppercase",
                      marginBottom:"0.3rem",
                    }}>{p.location}</div>
                    <div className="project-slide-title" style={{
                      color:"#ffffff",
                      fontSize:"1.1rem",
                      fontWeight:700,
                      textShadow:"0 2px 8px rgba(0,0,0,0.8)",
                      lineHeight:1.3,
                    }}>{p.name}</div>
                  </div>
                </div>

                {/* ── BACK ── */}
                <div className="flip-back">
                  <div className="flip-back-label">Delivered Project</div>
                  <div className="flip-back-title">{p.name}</div>
                  <div className="flip-back-location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                    {p.location}
                  </div>
                  <div className="flip-back-divider" />
                  <div className="flip-back-desc">{p.desc}</div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <button className="slider-btn right" onClick={() => scroll("right")}>→</button>
      </div>
    </>
  );
}