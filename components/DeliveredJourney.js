'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

/* How much scroll each project gets (in viewport heights). Raise = slower, lower = faster. */
const VH_PER_PROJECT = 0.9

const yearOf = (p) => {
  const m = p.desc.match(/(?:delivered in|since)\s+(\d{4})/i)
  return m ? m[1] : null
}

export default function DeliveredJourney({ projects }) {
  const N = projects.length
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)
  const ringRef = useRef(null)
  const rootRef = useRef(null)
  const activeRef = useRef(0)

  useEffect(() => {
    let raf = 0

    const update = () => {
      raf = 0
      const sec = sectionRef.current
      if (!sec) return
      const rect = sec.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      if (scrollable <= 0) return
      const p = Math.min(Math.max(-rect.top / scrollable, 0), 1)
      const raw = p * N
      const idx = Math.min(N - 1, Math.floor(raw))
      const seg = Math.min(raw - idx, 1)

      if (rootRef.current) rootRef.current.style.setProperty('--seg', seg.toFixed(3))
      if (ringRef.current) ringRef.current.style.strokeDashoffset = String(308 * (1 - p))
      if (idx !== activeRef.current) {
        activeRef.current = idx
        setActive(idx)
      }
    }

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [N])

  const scrollToIndex = (i) => {
    const sec = sectionRef.current
    if (!sec) return
    const top = sec.getBoundingClientRect().top + window.scrollY
    const scrollable = sec.offsetHeight - window.innerHeight
    window.scrollTo({ top: top + ((i + 0.5) / N) * scrollable, behavior: 'smooth' })
  }

  const skip = () => {
    const sec = sectionRef.current
    if (!sec) return
    const bottom = sec.getBoundingClientRect().bottom + window.scrollY
    window.scrollTo({ top: bottom, behavior: 'smooth' })
  }

  const state = (i) => (i === active ? 'is-active' : i < active ? 'is-past' : 'is-next')
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <section
      id="projects"
      className="dj-section"
      ref={sectionRef}
      aria-labelledby="dj-heading"
      style={{ height: `${(N * VH_PER_PROJECT + 1) * 100}vh` }}
    >
      <div className="dj-sticky" ref={rootRef}>
        <div className="dj-bg" aria-hidden="true" />

        {/* heading */}
        <div className="dj-head">
          <span className="section-label" style={{ justifyContent: 'center' }}>Project Portfolio</span>
          <h2 id="dj-heading">Our Delivered Masterpieces</h2>
        </div>

        <div className="dj-stage">
          {/* ── LEFT: years ── */}
          <div className="dj-years" aria-hidden="true">
            {projects.map((p, i) => {
              const o = i - active
              const label = yearOf(p) || 'Ongoing'
              return (
                <div
                  key={p.name}
                  className={`dj-year ${state(i)}`}
                  style={{
                    transform: `translateY(${o * 112}px) scale(${o === 0 ? 1 : 0.58})`,
                    opacity: o < 0 ? 0 : o === 0 ? 1 : o === 1 ? 0.2 : o === 2 ? 0.1 : 0,
                  }}
                >
                  {label}
                </div>
              )
            })}
          </div>

          {/* ── CENTER: circular image ── */}
          <div className="dj-circle-wrap">
            <svg className="dj-ring" viewBox="0 0 100 100" aria-hidden="true">
              <circle className="dj-ring-track" cx="50" cy="50" r="49" />
              <circle className="dj-ring-bar" ref={ringRef} cx="50" cy="50" r="49" />
            </svg>
            <div className="dj-circle">
              {projects.map((p, i) => (
                <img
                  key={p.name}
                  className={`dj-img ${state(i)}`}
                  src={p.image}
                  alt={`${p.name} — ${p.location}`}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  draggable={false}
                />
              ))}
              <div className="dj-circle-shade" />
            </div>
          </div>

          {/* ── RIGHT: description ── */}
          <div className="dj-copy">
            {projects.map((p, i) => (
              <article key={p.name} className={`dj-card ${state(i)}`} aria-hidden={i !== active}>
                <div className="dj-year-mobile">{yearOf(p) || 'Ongoing'}</div>
                <span className={`dj-chip ${p.status === 'Ongoing' ? 'dj-chip--ongoing' : ''}`}>
                  <i /> {p.status}
                </span>
                <h3>{p.name}</h3>
                <div className="dj-loc">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  {p.location}
                </div>
                <p>{p.desc}</p>
                <Link href="/#contact" className="dj-link">
                  Talk to our team
                  <svg width="26" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="1" y1="6" x2="22" y2="6" /><polyline points="17 1 22 6 17 11" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* footer: counter, dots, skip */}
        <div className="dj-foot">
          <div className="dj-counter"><b>{pad(active + 1)}</b> / {pad(N)}</div>
          <div className="dj-dots" role="tablist" aria-label="Delivered projects">
            {projects.map((p, i) => (
              <button
                key={p.name}
                type="button"
                className={`dj-dot${i === active ? ' on' : ''}`}
                onClick={() => scrollToIndex(i)}
                aria-label={`Show ${p.name}`}
              />
            ))}
          </div>
          <button type="button" className="dj-skip" onClick={skip}>Skip</button>
        </div>
      </div>

      <style>{`
        .dj-section { position: relative; padding: 0 !important; background: var(--white); }
        .dj-sticky {
          --seg: 0;
          position: sticky; top: 0;
          height: 100vh; height: 100svh;
          padding-top: 72px;
          display: flex; flex-direction: column;
          overflow: hidden;
        }
        .dj-bg {
          position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 60% 50% at 50% 55%, rgba(201,144,26,0.09), transparent 70%),
            linear-gradient(180deg, #fffefb 0%, #f7f4ee 100%);
        }

        /* heading */
        .dj-head { position: relative; z-index: 2; text-align: center; padding: clamp(0.8rem, 2.2vh, 1.6rem) 1rem 0; }
        .dj-head .section-label { margin-bottom: 0.4rem; }
        .dj-head h2 { font-size: clamp(1.4rem, 2.4vw, 2.1rem); margin: 0; }

        /* stage */
        .dj-stage {
          position: relative; z-index: 2; flex: 1; min-height: 0;
          width: 100%; max-width: 1320px; margin: 0 auto; padding: 0 2rem;
          display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;
          gap: clamp(1.5rem, 4vw, 4rem);
        }

        /* years */
        .dj-years { position: relative; height: 100%; max-height: 360px; align-self: center; }
        .dj-year {
          position: absolute; left: 0; top: 50%; margin-top: -48px;
          font-size: clamp(3.4rem, 7vw, 6rem); line-height: 1; font-weight: 500;
          letter-spacing: -0.03em; color: var(--forest-dark);
          transform-origin: left center; white-space: nowrap;
          transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.7s ease;
          will-change: transform, opacity;
        }
        .dj-year:not(.is-active) { color: #9aa39d; }

        /* circle */
        .dj-circle-wrap {
          position: relative;
          width: min(46vh, 32vw, 470px); aspect-ratio: 1;
        }
        /* GOLD ring around the circle (was a pale track before) */
        .dj-ring { position: absolute; inset: -3%; width: 106%; height: 106%; transform: rotate(-90deg); overflow: visible; }
        .dj-ring circle { fill: none; }
        .dj-ring-track { stroke: rgba(201,144,26,0.5); stroke-width: 0.6; }
        .dj-ring-bar { stroke: var(--gold); stroke-width: 1.1; stroke-linecap: round; stroke-dasharray: 308; stroke-dashoffset: 308; transition: stroke-dashoffset 0.25s linear; }
        .dj-circle {
          position: absolute; inset: 0; border-radius: 50%; overflow: hidden;
          background: #e8e3d8;
          box-shadow: 0 30px 80px rgba(26,74,58,0.22), 0 0 0 8px rgba(255,255,255,0.9);
        }
        .dj-img {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block;
          transition: opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.22, 1, 0.36, 1), filter 0.9s ease;
          will-change: transform, opacity;
        }
        .dj-img.is-active { opacity: 1; transform: scale(calc(1.02 + var(--seg) * 0.06)); filter: blur(0); }
        .dj-img.is-past   { opacity: 0; transform: scale(1.22) translateY(-6%); filter: blur(6px); }
        .dj-img.is-next   { opacity: 0; transform: scale(0.86) translateY(6%);   filter: blur(6px); }
        .dj-circle-shade { position: absolute; inset: 0; border-radius: 50%; box-shadow: inset 0 0 60px rgba(0,0,0,0.18); pointer-events: none; }

        /* copy */
        .dj-copy { position: relative; height: 100%; max-height: 380px; align-self: center; }
        .dj-card {
          position: absolute; left: 0; right: 0; top: 50%;
          max-width: 440px;
          transition: opacity 0.7s ease, transform 1s cubic-bezier(0.22, 1, 0.36, 1), filter 0.7s ease;
          will-change: transform, opacity;
        }
        .dj-card.is-active { opacity: 1; transform: translateY(-50%); filter: blur(0); transition-delay: 0.12s; }
        .dj-card.is-past   { opacity: 0; transform: translateY(calc(-50% - 70px)); filter: blur(4px); pointer-events: none; }
        .dj-card.is-next   { opacity: 0; transform: translateY(calc(-50% + 70px)); filter: blur(4px); pointer-events: none; }

        .dj-chip { display: inline-flex; align-items: center; gap: 0.45rem; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #1c7a47; background: rgba(34,197,94,0.12); border: 1px solid rgba(34,197,94,0.3); padding: 0.28rem 0.8rem; border-radius: 999px; margin-bottom: 1rem; }
        .dj-chip i { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
        .dj-chip--ongoing { color: #a9720f; background: rgba(201,144,26,0.12); border-color: rgba(201,144,26,0.35); }
        .dj-card h3 { font-size: clamp(1.5rem, 2.4vw, 2.1rem); font-weight: 500; line-height: 1.2; color: var(--charcoal); margin: 0 0 0.6rem; }
        .dj-loc { display: flex; align-items: center; gap: 0.4rem; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.1rem; }
        .dj-card p { font-size: 0.95rem; line-height: 1.8; color: var(--gray); margin: 0 0 1.6rem; }
        .dj-link { display: inline-flex; align-items: center; gap: 0.8rem; font-size: 0.85rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--forest-dark); padding-bottom: 0.7rem; border-bottom: 1.5px solid var(--forest-dark); transition: gap 0.3s ease, color 0.3s ease, border-color 0.3s ease; }
        .dj-link:hover { gap: 1.2rem; color: var(--gold); border-color: var(--gold); }
        .dj-year-mobile { display: none; }

        /* footer */
        .dj-foot {
          position: relative; z-index: 3;
          display: flex; align-items: center; justify-content: space-between; gap: 1rem;
          width: 100%; max-width: 1320px; margin: 0 auto; padding: 0 2rem clamp(1rem, 3vh, 2rem);
        }
        .dj-counter { font-size: 0.8rem; letter-spacing: 0.18em; color: var(--gray); }
        .dj-counter b { color: var(--forest-dark); font-weight: 600; font-size: 1rem; }
        .dj-dots { display: flex; gap: 0.5rem; align-items: center; }
        .dj-dot { width: 7px; height: 7px; padding: 0; border: none; border-radius: 999px; background: rgba(26,74,58,0.22); cursor: pointer; transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease; }
        .dj-dot.on { width: 26px; background: var(--gold); }
        .dj-skip { font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600; color: var(--forest-dark); background: transparent; border: 1px solid rgba(26,74,58,0.35); border-radius: 999px; padding: 0.45rem 1.3rem; cursor: pointer; transition: background 0.3s ease, color 0.3s ease; }
        .dj-skip:hover { background: var(--forest-dark); color: #fff; }

        /* tablet */
        @media (max-width: 1024px) {
          .dj-stage { gap: 1.5rem; padding: 0 1.25rem; }
          .dj-circle-wrap { width: min(40vh, 34vw, 380px); }
          .dj-card p { font-size: 0.88rem; line-height: 1.7; }
        }

        /* ═══════════ MOBILE — big title, circle, left-aligned text, skip pill ═══════════ */
        @media (max-width: 768px) {
          .dj-sticky { padding-top: 76px; }

          /* big thin centred "JOURNEY"-style heading */
          .dj-head { padding: clamp(1.2rem, 4vh, 2.4rem) 1rem 0; }
          .dj-head .section-label { display: none; }
          .dj-head h2 {
            font-size: clamp(1.9rem, 8.4vw, 2.7rem);
            font-weight: 300;
            line-height: 1.1;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            color: var(--forest-dark);
            max-width: 420px;
            margin: 0 auto;
          }

          .dj-stage {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            justify-items: center;
            align-content: start;
            align-items: start;
            gap: 1.3rem;
            padding: 1.4rem 1.5rem 0;
          }
          .dj-years { display: none; }
          .dj-circle-wrap { width: min(34vh, 62vw, 270px); }

          /* text block: left aligned, starts at the top of its box */
          .dj-copy { width: 100%; max-width: 420px; max-height: none; height: 205px; align-self: start; }
          .dj-card { max-width: 100%; text-align: left; top: 0; }
          .dj-card.is-active { transform: translateY(0); }
          .dj-card.is-past   { transform: translateY(-40px); }
          .dj-card.is-next   { transform: translateY(40px); }

          .dj-year-mobile, .dj-chip, .dj-loc { display: none; }

          .dj-card h3 {
            font-size: 1.15rem;
            font-weight: 400;
            line-height: 1.3;
            color: #111;
            margin: 0 0 0.8rem;
          }
          .dj-card p {
            font-size: 0.85rem;
            line-height: 1.65;
            color: #7a7a7a;
            margin: 0 0 1.3rem;
            display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;
          }
          .dj-link {
            display: inline-flex;
            font-size: 0.72rem;
            letter-spacing: 0.14em;
            gap: 1.4rem;
            padding-bottom: 0.65rem;
            color: #111;
            border-bottom: 1px solid #111;
          }

          /* footer: only the SKIP pill, sitting just right of centre */
          .dj-counter, .dj-dots { display: none; }
          .dj-foot { justify-content: flex-end; padding: 0 26% 1rem 1.25rem; }
          .dj-skip {
            font-size: 0.7rem;
            letter-spacing: 0.1em;
            padding: 0.5rem 1.4rem;
            color: #6b6b6b;
            border: 1px solid rgba(0,0,0,0.3);
            background: #fff;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dj-year, .dj-img, .dj-card, .dj-dot, .dj-ring-bar { transition-duration: 0.01s !important; transition-delay: 0s !important; }
        }
      `}</style>
    </section>
  )
}