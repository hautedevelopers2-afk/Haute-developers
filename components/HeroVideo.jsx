"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_ID = "J4N0W663oV8";

export default function HeroVideo() {
  const mountRef = useRef(null);
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let revealed = false;
    let revealTimer = null;

    // YT.Player replaces its target element with an iframe, so give it a
    // node React doesn't manage.
    const target = document.createElement("div");
    mountRef.current.appendChild(target);

    const killCaptions = (p) => {
      try { p.unloadModule("captions"); } catch {}
      try { p.unloadModule("cc"); } catch {}
    };

    const create = () => {
      if (cancelled) return;
      playerRef.current = new window.YT.Player(target, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          cc_load_policy: 0,
          playsinline: 1,
          showinfo: 0,
          origin: window.location.origin,
        },
        events: {
          onReady: (e) => {
            e.target.mute();
            killCaptions(e.target);
            e.target.playVideo();
          },
          onStateChange: (e) => {
            const S = window.YT.PlayerState;
            if (e.data === S.PLAYING) {
              killCaptions(e.target);
              // wait for YouTube's own pause/UI overlay to auto-hide before showing the video
              if (!revealed) {
                revealed = true;
                revealTimer = setTimeout(() => {
                  if (!cancelled) setPlaying(true);
                }, 2500);
              }
            }
            if (e.data === S.ENDED) {
              // manual loop (avoids the `playlist` param that adds prev/next)
              e.target.seekTo(0);
              e.target.playVideo();
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      create();
    } else {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof prev === "function") prev();
        create();
      };
      if (!document.getElementById("yt-iframe-api")) {
        const s = document.createElement("script");
        s.id = "yt-iframe-api";
        s.src = "https://www.youtube.com/iframe_api";
        s.async = true;
        document.head.appendChild(s);
      }
    }

    return () => {
      cancelled = true;
      clearTimeout(revealTimer);
      try { playerRef.current && playerRef.current.destroy(); } catch {}
    };
  }, []);

  return (
    <>
      <style>{`
        .hero-yt-wrap {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          container-type: size;
          background: #0d2f24;
        }
        .hero-yt-inner {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.8s ease;
        }
        .hero-yt-inner.is-playing { opacity: 1; }
        .hero-yt-inner iframe {
          position: absolute;
          top: 0;
          left: 50%;
          /* 2.2x the "cover" size, anchored to the top, so the iframe's
             center (where YouTube draws its pause button) sits below the hero
             and gets clipped by overflow:hidden */
          width: calc(max(100vw, 177.78vh) * 2.2);
          height: calc(max(100vw, 177.78vh) * 2.2 * 0.5625);
          transform: translateX(-50%);
          border: 0;
          pointer-events: none;
        }
        @supports (width: 1cqw) {
          .hero-yt-inner iframe {
            width: calc(max(100cqw, 177.78cqh) * 2.2);
            height: calc(max(100cqw, 177.78cqh) * 2.2 * 0.5625);
          }
        }
      `}</style>
      <div className="hero-yt-wrap">
        <div ref={mountRef} className={`hero-yt-inner${playing ? " is-playing" : ""}`} />
      </div>
    </>
  );
}