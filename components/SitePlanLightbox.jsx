'use client'
import { useState } from 'react'

export default function SitePlanLightbox({ src, alt }) {
  const [open, setOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const close = () => { setOpen(false); setZoom(1); setPos({ x: 0, y: 0 }) }
  const handleWheel = (e) => { e.preventDefault(); const d = e.deltaY > 0 ? -0.3 : 0.3; setZoom(z => { const n = Math.min(Math.max(z + d, 1), 5); if (n === 1) setPos({ x: 0, y: 0 }); return n }) }
  const handleMouseDown = (e) => { if (zoom > 1) { setDragging(true); setDragStart({ x: e.clientX - pos.x, y: e.clientY - pos.y }) } }
  const handleMouseMove = (e) => { if (dragging) setPos({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y }) }
  const handleMouseUp = () => setDragging(false)

  return (
    <>
      {/* Thumbnail with overlay button */}
      <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(201,144,26,0.2)', boxShadow: '0 8px 48px rgba(26,74,58,0.1)' }}>
        <img
          src={src}
          alt={alt}
          onClick={() => setOpen(true)}
          style={{ width: '100%', display: 'block', objectFit: 'cover', minHeight: '220px', maxHeight: '520px', cursor: 'zoom-in' }}
        />
        {/* Click to enlarge button */}
        <button
          onClick={() => setOpen(true)}
          style={{
            position: 'absolute', bottom: 16, right: 16,
            background: 'rgba(0,0,0,0.65)', color: '#fff',
            border: 'none', borderRadius: 999,
            padding: '10px 18px', fontSize: 13, fontWeight: 600,
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
            backdropFilter: 'blur(6px)', letterSpacing: 0.3,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
          Click to enlarge
        </button>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) close() }}
          style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
          onWheel={handleWheel}
        >
          {/* Close */}
          <button onClick={close} style={{ position: 'absolute', top: 16, right: 16, width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1001 }}>×</button>

          {/* Zoom controls */}
          <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(0,0,0,0.6)', padding: '8px 20px', borderRadius: 30, zIndex: 1001, backdropFilter: 'blur(8px)' }}>
            <button onClick={() => setZoom(z => { const n = Math.max(z - 0.5, 1); if (n === 1) setPos({ x: 0, y: 0 }); return n })} disabled={zoom <= 1} style={{ width: 34, height: 34, borderRadius: '50%', background: zoom <= 1 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', fontSize: 20, cursor: zoom <= 1 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>−</button>
            <span style={{ color: '#fff', fontSize: 13, fontWeight: 600, minWidth: 44, textAlign: 'center' }}>{Math.round(zoom * 100)}%</span>
            <button onClick={() => setZoom(z => Math.min(z + 0.5, 5))} disabled={zoom >= 5} style={{ width: 34, height: 34, borderRadius: '50%', background: zoom >= 5 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', fontSize: 20, cursor: zoom >= 5 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>+</button>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, marginLeft: 4 }}>Scroll to zoom · Drag to pan</span>
          </div>

          {/* Image */}
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: zoom > 1 ? (dragging ? 'grabbing' : 'grab') : 'default', userSelect: 'none', maxWidth: '90vw', maxHeight: '85vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img
              src={src}
              alt={alt}
              draggable={false}
              style={{ transform: `scale(${zoom}) translate(${pos.x / zoom}px, ${pos.y / zoom}px)`, transformOrigin: 'center center', transition: dragging ? 'none' : 'transform 0.2s ease', maxWidth: '90vw', maxHeight: '85vh', display: 'block', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </>
  )
}