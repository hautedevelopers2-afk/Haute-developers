'use client'
import { useState, useEffect } from 'react'

const slides = [
  { src: 'https://i.postimg.cc/m2JQxV0K/Screenshot-2026-06-04-151930.webp', label: 'Township Entry' },
  { src: 'https://i.postimg.cc/MKNykthC/Screenshot-2026-06-04-152029.webp', label: 'Villa Exterior' },
  { src: 'https://i.postimg.cc/W1Z0sgvK/Screenshot-2026-06-04-152104.webp', label: 'Green Landscape' },
  { src: 'https://i.postimg.cc/kXzxrwkk/Screenshot-2026-06-04-152124.webp', label: 'Amenity Zone' },
  { src: 'https://i.postimg.cc/Fs8jtG26/Screenshot-2026-06-04-152219.webp', label: 'Club House View' },
  { src: 'https://i.postimg.cc/7YdgvXpB/Screenshot-2026-06-04-152231.webp', label: 'Swimming Pool Area' },
  { src: 'https://i.postimg.cc/NjXRQmtG/Screenshot-2026-06-04-152306.webp', label: 'Plot Layout' },
  { src: 'https://i.postimg.cc/Lsc92gHp/Screenshot-2026-06-04-152231.png', label: 'Street View' },
  { src: 'https://i.postimg.cc/N09s3kvV/Screenshot-2026-06-04-152306.png', label: 'Master Plan' },
  { src: 'https://i.postimg.cc/vmJYbxQd/Screenshot-2026-06-04-152334.png', label: 'Community Zone' },
  { src: '/assets/expressway-front.png', label: 'Expressway Front' },
]

export default function GallerySlider() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(s => (s === slides.length - 1 ? 0 : s + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const prev = () => setActiveSlide(s => (s === 0 ? slides.length - 1 : s - 1))
  const next = () => setActiveSlide(s => (s === slides.length - 1 ? 0 : s + 1))

  return (
    <div>
      <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', marginBottom: 12, boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
        <img src={slides[activeSlide].src} alt={slides[activeSlide].label} style={{ width: '100%', height: 'clamp(220px,45vw,480px)', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 50%, rgba(0,0,0,0.65) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 20, left: 20, color: '#fff', fontSize: 14, fontWeight: 600, letterSpacing: 0.5 }}>
          {slides[activeSlide].label}
        </div>
        <button onClick={prev} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
        <button onClick={next} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
      </div>
      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 4 }}>
        {slides.map((slide, i) => (
          <div key={i} onClick={() => setActiveSlide(i)} style={{ flexShrink: 0, width: 72, height: 48, borderRadius: 6, overflow: 'hidden', cursor: 'pointer', border: `2px solid ${activeSlide === i ? '#f59e0b' : 'transparent'}`, opacity: activeSlide === i ? 1 : 0.5, transition: 'all 0.2s' }}>
            <img src={slide.src} alt={slide.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        ))}
      </div>
    </div>
  )
}