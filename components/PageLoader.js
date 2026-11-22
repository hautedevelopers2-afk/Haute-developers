'use client'

import { useEffect, useRef, useState } from 'react'

/* ════════════════════════════════════════════════════════════════
   TIMING (ms) — tweak these to taste
════════════════════════════════════════════════════════════════ */
const MIN_SHOW_MS = 4400      // loader always stays at least this long (building finishes drawing)
const MAX_WAIT_MS = 8000      // hard cap if the page is slow to finish loading
const HOLD_AT_100_MS = 650    // calm pause on the finished tower before leaving
const EXIT_MS = 1300          // total fade-out time (matches CSS)
const LOTTIE_URL = '/assets/skyscraper-construction.json'
const LOTTIE_DURATION_MS = 6000 // native length of the animation (361 frames @ 60fps)

export default function PageLoader() {
  const [stage, setStage] = useState('loading') // loading → leaving → gone
  const numRef = useRef(null)
  const barRef = useRef(null)
  const lottieRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const minShow = reduceMotion ? 900 : MIN_SHOW_MS
    const start = performance.now()
    const timers = []
    let raf = 0
    let anim = null
    let cancelled = false
    let loaded = document.readyState === 'complete'
    let finished = false

    /* ── Lottie: loaded lazily so it never blocks the first paint ── */
    ;(async () => {
      try {
        const [{ default: lottie }, data] = await Promise.all([
          import('lottie-web/build/player/lottie_light'),
          fetch(LOTTIE_URL).then((r) => r.json()),
        ])
        if (cancelled || !lottieRef.current) return
        anim = lottie.loadAnimation({
          container: lottieRef.current,
          renderer: 'svg',
          loop: false,
          autoplay: true,
          animationData: data,
          rendererSettings: { preserveAspectRatio: 'xMidYMid meet', progressiveLoad: true },
        })
        // stretch/squeeze playback so the tower finishes right as the loader is ready
        anim.setSpeed(LOTTIE_DURATION_MS / minShow)
        if (reduceMotion) anim.goToAndStop(anim.totalFrames - 1, true)
      } catch {
        /* animation is decorative — logo + progress still work without it */
      }
    })()

    const paint = (p) => {
      if (numRef.current) numRef.current.textContent = String(Math.round(p * 100)).padStart(2, '0')
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`
    }

    const finish = () => {
      if (finished) return
      finished = true
      paint(1)
      timers.push(
        setTimeout(() => {
          setStage('leaving')
          timers.push(
            setTimeout(() => {
              setStage('gone')
              document.body.style.overflow = ''
            }, EXIT_MS)
          )
        }, HOLD_AT_100_MS)
      )
    }

    const onLoad = () => { loaded = true }
    if (!loaded) window.addEventListener('load', onLoad)

    const tick = (now) => {
      const elapsed = now - start
      const linear = Math.min(elapsed / minShow, 1)
      // gentle ease-in-out so the counter feels unhurried
      const eased = linear < 0.5 ? 4 * linear ** 3 : 1 - Math.pow(-2 * linear + 2, 3) / 2

      const ready = loaded || elapsed >= MAX_WAIT_MS
      if (linear >= 1 && ready) {
        finish()
        return
      }
      paint(Math.min(eased, linear >= 1 ? 0.99 : 1))
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      timers.forEach(clearTimeout)
      window.removeEventListener('load', onLoad)
      if (anim) anim.destroy()
      document.body.style.overflow = ''
    }
  }, [])

  if (stage === 'gone') return null

  return (
    <div className={`hl-root${stage === 'leaving' ? ' hl-leave' : ''}`} aria-hidden="true">
      {/* ambient backdrop */}
      <div className="hl-bg" />
      <div className="hl-glow" />
      <div className="hl-pattern" />
      <div className="hl-vignette" />

      <div className="hl-stage">
        {/* Logo */}
        <div className="hl-logo-wrap">
          <img className="hl-logo" src="/assets/fotter-logo.webp" alt="" />
          <span className="hl-rule" />
        </div>

        {/* Skyscraper animation inside a thin gold frame */}
        <div className="hl-frame">
          <i className="hl-corner hl-c-tl" />
          <i className="hl-corner hl-c-tr" />
          <i className="hl-corner hl-c-bl" />
          <i className="hl-corner hl-c-br" />
          <div className="hl-lottie" ref={lottieRef} />
          <span className="hl-ground" />
        </div>

        {/* Tagline + progress */}
        <div className="hl-tag">Inspired Zen Living</div>

        <div className="hl-meter">
          <div className="hl-bar"><span ref={barRef} /></div>
          <div className="hl-count-row">
            <span className="hl-count" ref={numRef}>00</span>
            <span className="hl-pct">%</span>
          </div>
        </div>
      </div>

      <style>{`
        .hl-root {
          position: fixed; inset: 0; z-index: 3000;
          overflow: hidden;
          background: #06140f;
          opacity: 1;
          will-change: opacity, transform, filter;
        }

        /* ═══════════ BACKDROP ═══════════ */
        .hl-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% 38%, #123d2f 0%, #0b2a20 45%, #06140f 100%);
        }
        .hl-glow {
          position: absolute; left: 50%; top: 42%;
          width: min(900px, 140vw); height: min(900px, 140vw);
          transform: translate(-50%, -50%) scale(0.85);
          background: radial-gradient(circle closest-side, rgba(201,144,26,0.22) 0%, rgba(201,144,26,0.06) 50%, transparent 100%);
          opacity: 0;
          animation: hl-glow-in 2.2s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards, hl-breathe 5s ease-in-out 2.3s infinite;
          pointer-events: none;
        }
        .hl-pattern {
          position: absolute; inset: 0; opacity: 0.045; pointer-events: none;
          background-image: repeating-linear-gradient(45deg, #c9901a 0, #c9901a 1px, transparent 0, transparent 50%);
          background-size: 38px 38px;
        }
        .hl-vignette {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%);
        }
        @keyframes hl-glow-in { to { opacity: 1; transform: translate(-50%, -50%) scale(1); } }
        @keyframes hl-breathe { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }

        /* ═══════════ STAGE ═══════════ */
        .hl-stage {
          position: absolute; inset: 0; z-index: 2;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: clamp(0.9rem, 2.4vh, 1.5rem);
          padding: 1.5rem;
          transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.9s cubic-bezier(0.4, 0, 0.2, 1), filter 0.7s ease;
        }

        /* ── logo ── */
        .hl-logo-wrap {
          display: flex; flex-direction: column; align-items: center; gap: 0.9rem;
          opacity: 0; transform: translateY(14px);
          animation: hl-rise 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
        }
        .hl-logo {
          height: clamp(64px, 11vh, 96px); width: auto; display: block;
          filter: drop-shadow(0 4px 22px rgba(201,144,26,0.3));
        }
        .hl-rule {
          width: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #e8c776, transparent);
          animation: hl-rule 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards;
        }
        @keyframes hl-rule { to { width: clamp(120px, 22vw, 190px); } }

        /* ── lottie frame ── */
        .hl-frame {
          position: relative;
          height: min(44vh, 400px);
          aspect-ratio: 9 / 16;
          max-width: 70vw;
          opacity: 0; transform: translateY(18px) scale(0.98);
          animation: hl-rise 1.3s cubic-bezier(0.22, 1, 0.36, 1) 0.55s forwards;
          background: linear-gradient(180deg, rgba(255,255,255,0.025), rgba(201,144,26,0.04));
          border-radius: 4px;
        }
        .hl-lottie { position: absolute; inset: 4% 4% 6%; }
        .hl-lottie svg { width: 100% !important; height: 100% !important; display: block; }

        .hl-corner { position: absolute; width: 16px; height: 16px; border: 0 solid rgba(232,199,118,0.85); opacity: 0; animation: hl-fade 1s ease 1.2s forwards; }
        .hl-c-tl { top: 0;    left: 0;  border-width: 1px 0 0 1px; }
        .hl-c-tr { top: 0;    right: 0; border-width: 1px 1px 0 0; }
        .hl-c-bl { bottom: 0; left: 0;  border-width: 0 0 1px 1px; }
        .hl-c-br { bottom: 0; right: 0; border-width: 0 1px 1px 0; }

        .hl-ground {
          position: absolute; left: 8%; right: 8%; bottom: 5%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,199,118,0.7), transparent);
          box-shadow: 0 0 16px 2px rgba(201,144,26,0.35);
        }

        /* ── tagline ── */
        .hl-tag {
          font-size: clamp(0.72rem, 1.4vw, 0.85rem);
          font-weight: 300; letter-spacing: 0.5em; text-transform: uppercase;
          padding-left: 0.5em;
          color: rgba(245,226,170,0.85);
          opacity: 0; transform: translateY(8px);
          animation: hl-rise 1.1s cubic-bezier(0.22, 1, 0.36, 1) 1.5s forwards;
        }

        /* ── meter ── */
        .hl-meter {
          display: flex; flex-direction: column; align-items: center; gap: 0.65rem;
          width: min(220px, 56vw);
          opacity: 0; animation: hl-fade 1s ease 1.1s forwards;
        }
        .hl-bar { width: 100%; height: 1px; background: rgba(255,255,255,0.14); overflow: hidden; }
        .hl-bar span {
          display: block; width: 100%; height: 100%;
          background: linear-gradient(90deg, #c9901a, #f5e2aa);
          transform-origin: left; transform: scaleX(0);
          box-shadow: 0 0 10px rgba(245,226,170,0.7);
        }
        .hl-count-row { display: flex; align-items: baseline; gap: 2px; color: rgba(245,226,170,0.9); font-variant-numeric: tabular-nums; }
        .hl-count { font-size: 0.95rem; font-weight: 300; letter-spacing: 0.2em; }
        .hl-pct { font-size: 0.65rem; font-weight: 300; opacity: 0.7; }

        @keyframes hl-rise { to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes hl-fade { to { opacity: 1; } }

        /* ═══════════ EXIT — content floats up and softens, then the whole screen dissolves ═══════════ */
        .hl-leave .hl-stage { opacity: 0; transform: translateY(-18px) scale(1.02); filter: blur(6px); }
        .hl-leave.hl-root {
          animation: hl-dissolve 0.95s cubic-bezier(0.65, 0, 0.35, 1) 0.4s forwards;
          pointer-events: none;
        }
        .hl-leave .hl-glow, .hl-leave .hl-corner { animation-play-state: paused; }
        @keyframes hl-dissolve {
          0%   { opacity: 1; transform: scale(1);    filter: blur(0); }
          100% { opacity: 0; transform: scale(1.04); filter: blur(8px); }
        }

        /* ═══════════ SMALL SCREENS ═══════════ */
        @media (max-height: 640px) {
          .hl-frame { height: 36vh; }
          .hl-logo { height: 54px; }
        }

        /* ═══════════ REDUCED MOTION ═══════════ */
        @media (prefers-reduced-motion: reduce) {
          .hl-glow, .hl-logo-wrap, .hl-frame, .hl-tag, .hl-meter, .hl-corner, .hl-rule {
            animation-duration: 0.01s; animation-delay: 0s;
          }
          .hl-leave.hl-root { animation: hl-dissolve-simple 0.4s ease forwards; }
          .hl-leave .hl-stage { transform: none; filter: none; }
          @keyframes hl-dissolve-simple { to { opacity: 0; } }
        }
      `}</style>
    </div>
  )
}