'use client'

import { useEffect, useState } from 'react'

/* ── Skyline drawn as lines: houses, apartments and a tall tower ── */
const paths = []
let t = 0
const add = (d, gap = 0.05, dur = 0.7, ground = false) => {
  paths.push({ d, delay: t.toFixed(2), dur, ground })
  t += gap
}

// ground line
add('M5 200 H235', 0.15, 1.0, true)

// left house
add('M12 200 V160 H44 V200', 0.1, 0.8)
add('M8 160 L28 138 L48 160', 0.1, 0.6)
add('M24 200 V182 H32 V200', 0.1, 0.4)

// apartment A
add('M56 200 V115 H90 V200', 0.12, 0.9)
;[135, 155, 175].forEach((y) => add(`M56 ${y} H90`, 0.04, 0.35))
add('M73 115 V200', 0.06, 0.5)

// tall tower
add('M98 200 V40 H138 V200', 0.15, 1.1)
add('M118 40 V20', 0.06, 0.4)
;[180, 160, 140, 120, 100, 80, 60].forEach((y) => add(`M98 ${y} H138`, 0.04, 0.35))
add('M118 52 V200', 0.06, 0.6)

// apartment B
add('M146 200 V85 H190 V200', 0.12, 0.9)
;[185, 165, 145, 125, 105].forEach((y) => add(`M146 ${y} H190`, 0.04, 0.35))
add('M168 85 V200', 0.06, 0.5)

// right house
add('M200 200 V165 H228 V200', 0.1, 0.8)
add('M196 165 L214 145 L232 165', 0.1, 0.6)
add('M210 200 V185 H218 V200', 0.1, 0.4)

const SHOW_MS = 3000   // how long the loader stays before fading
const FADE_MS = 600    // fade-out duration

export default function PageLoader() {
  const [out, setOut] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const a = setTimeout(() => setOut(true), SHOW_MS)
    const b = setTimeout(() => {
      setGone(true)
      document.body.style.overflow = ''
    }, SHOW_MS + FADE_MS)
    return () => {
      clearTimeout(a)
      clearTimeout(b)
      document.body.style.overflow = ''
    }
  }, [])

  if (gone) return null

  return (
    <div className={`hl-root${out ? ' hl-out' : ''}`} aria-hidden="true">
      <svg className="hl-svg" viewBox="0 0 240 210" xmlns="http://www.w3.org/2000/svg">
        {paths.map((p, i) => (
          <path
            key={i}
            d={p.d}
            pathLength="1"
            className={`hl-line${p.ground ? ' hl-ground' : ''}`}
            style={{ '--d': `${p.delay}s`, '--dur': `${p.dur}s` }}
          />
        ))}
      </svg>

      <div className="hl-brand">HAUTE WORLD DEVELOPERS</div>
      <div className="hl-bar"><span /></div>

      <style>{`
        .hl-root {
          position: fixed; inset: 0; z-index: 3000;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 1.4rem;
          background: radial-gradient(circle at 50% 45%, #14473a 0%, #0d2f24 55%, #071c15 100%);
          transition: opacity ${FADE_MS}ms ease, visibility ${FADE_MS}ms ease;
        }
        .hl-root.hl-out { opacity: 0; visibility: hidden; pointer-events: none; }

        .hl-svg { width: min(320px, 72vw); height: auto; overflow: visible; }

        .hl-line {
          fill: none;
          stroke: #c9901a;
          stroke-width: 1.7;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 1 1;
          stroke-dashoffset: 1;
          animation: hl-draw var(--dur) cubic-bezier(0.4, 0, 0.2, 1) var(--d) forwards;
        }
        .hl-ground { stroke: #f5d483; }
        @keyframes hl-draw { to { stroke-dashoffset: 0; } }

        .hl-brand {
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.38em;
          color: #f5d483; opacity: 0;
          animation: hl-fade 0.8s ease 1.9s forwards;
        }
        @keyframes hl-fade { to { opacity: 1; } }

        .hl-bar { width: min(220px, 55vw); height: 2px; background: rgba(255,255,255,0.12); overflow: hidden; border-radius: 2px; }
        .hl-bar span {
          display: block; height: 100%; width: 100%; background: #c9901a;
          transform-origin: left; transform: scaleX(0);
          animation: hl-progress ${SHOW_MS - 200}ms ease-in-out forwards;
        }
        @keyframes hl-progress { to { transform: scaleX(1); } }

        @media (prefers-reduced-motion: reduce) {
          .hl-line { animation-duration: 0.01s; animation-delay: 0s; }
        }
      `}</style>
    </div>
  )
}