"use client";

import { useState, useEffect, useRef } from "react";

export default function ExpresswayHighlightItem({ children }) {
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
    <div
      ref={ref}
      className={`er-highlight-item er-block-anim${inView ? " er-inview-item" : ""}`}
    >
      {children}
    </div>
  );
}