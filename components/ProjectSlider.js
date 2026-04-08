"use client";

import { useRef, useEffect } from "react";

export default function ProjectSlider({ projects }) {
  const sliderRef = useRef(null);

  let isDown = false;
  let startX;
  let scrollLeft;

  // 🔥 CENTER ANY SLIDE
  const centerSlide = (slider, slide) => {
    const offset =
      slide.offsetLeft -
      slider.offsetWidth / 2 +
      slide.offsetWidth / 2;

    slider.scrollTo({
      left: offset,
      behavior: "smooth",
    });
  };

  // 🔥 FIND CLOSEST SLIDE TO CENTER
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

  // 🔥 ARROW NAVIGATION
  const scroll = (dir) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = slider.querySelectorAll(".project-slide");
    const current = getClosestSlide(slider);

    const currentIndex = Array.from(slides).indexOf(current);

    let newIndex =
      dir === "left" ? currentIndex - 1 : currentIndex + 1;

    newIndex = Math.max(0, Math.min(newIndex, slides.length - 1));

    centerSlide(slider, slides[newIndex]);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = slider.querySelectorAll(".project-slide");

    // 🔥 SCALE EFFECT
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
        slide.style.opacity = opacity;
        slide.style.zIndex = zIndex;
      });
    };

    // 🔥 AUTO SNAP AFTER SCROLL
    let scrollTimeout;
    const handleSnap = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const closest = getClosestSlide(slider);
        centerSlide(slider, closest);
      }, 120); // smooth delay
    };

    // 🔥 MOUSE DRAG
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
      const walk = (x - startX) * 1.5; // drag speed
      slider.scrollLeft = scrollLeft - walk;
    });

    slider.addEventListener("scroll", handleScroll);
    slider.addEventListener("scroll", handleSnap);

    // 🔥 INITIAL CENTER FIRST CARD
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
    <div className="projects-slider-wrapper">
      <button className="slider-btn left" onClick={() => scroll("left")}>
        ←
      </button>

      <div className="projects-slider" ref={sliderRef}>
        {projects.map((p) => (
          <div className="project-slide" key={p.name}>
            <img src={p.image} alt={p.name} />
            <div className="project-slide-overlay" />

            <div className="project-slide-content">
              <div className="project-slide-location">{p.location}</div>
              <div className="project-slide-title">{p.name}</div>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-btn right" onClick={() => scroll("right")}>
        →
      </button>
    </div>
  );
}