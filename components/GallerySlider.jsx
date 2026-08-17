'use client'
import { useState, useEffect } from 'react'

const slides = [
  { src: 'https://res.cloudinary.com/dpbitfczf/image/upload/v1786353483/Senior-citizer_usxm9p.webp', label: 'Senior Citizen Park' },
  { src: 'https://res.cloudinary.com/dpbitfczf/image/upload/v1786353482/Shuttle_nztcrp.webp', label: 'Shuttle Service' },
  { src: 'https://res.cloudinary.com/dpbitfczf/image/upload/v1786353480/Aerial-ER_bjap8t.webp', label: 'Aerial View' },
  { src: 'https://res.cloudinary.com/dpbitfczf/image/upload/v1786353481/Interal_Roads_2_wh7c9n.webp', label: 'Internal Roads' },
  { src: 'https://res.cloudinary.com/dpbitfczf/image/upload/v1786353481/Internal_Roads_nd1vhu.webp', label: 'Internal Roads 2' },
  { src: 'https://res.cloudinary.com/dpbitfczf/image/upload/v1786353480/gym_cuxp5a.webp', label: 'Gymnasium' },
  { src: 'https://res.cloudinary.com/dpbitfczf/image/upload/v1786264525/Temple_gf9j2m.webp', label: 'Temple' },
  { src: 'https://res.cloudinary.com/dpbitfczf/image/upload/v1786264524/Lake_ye1yj7.webp', label: 'Artificial Lake' },
  { src: 'https://res.cloudinary.com/dpbitfczf/image/upload/v1786264524/Park_qfvax4.webp', label: 'Kids Play Area' },
  { src: 'https://res.cloudinary.com/dpbitfczf/image/upload/v1786264524/Jogging-track_rwsojt.webp', label: 'Jogging Track' },
  { src: 'https://res.cloudinary.com/dpbitfczf/image/upload/v1786264524/Mini-Hospital_agqmbj.webp', label: 'Hospital Front' },
  { src: 'https://res.cloudinary.com/dpbitfczf/image/upload/v1786353925/Digital_Library_kajs2t.webp', label:'Digital Library'} 
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