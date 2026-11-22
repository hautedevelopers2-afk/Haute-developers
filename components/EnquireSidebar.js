'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { sendLeadToCrm } from '../lib/crm'

const WEB3FORMS_ACCESS_KEY = 'b8b6f2a1-68cd-4728-b1f9-b03aaf615900'

export default function EnquireSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit mobile number'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    return e
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    setServerError('')
    const project = `Side Enquiry (${pathname || '/'})`

    try {
      const [w3, crm] = await Promise.allSettled([
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: form.name,
            phone: form.phone,
            email: form.email,
            message: form.message,
            project,
          }),
        }).then((r) => r.json()),
        sendLeadToCrm({
          name: form.name,
          mobile: form.phone,
          email: form.email,
          message: form.message,
          project,
        }),
      ])

      const ok = (w3.status === 'fulfilled' && w3.value?.success) || (crm.status === 'fulfilled' && crm.value)
      if (ok) {
        setSubmitted(true)
        setForm({ name: '', email: '', phone: '', message: '' })
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-18216224281/Q6hPCK3QvMocEJmMlu5D',
            value: 1.0,
            currency: 'INR',
          })
        }
      } else {
        setServerError('Something went wrong. Please try again.')
      }
    } catch {
      setServerError('Network error. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className={`es-wrap${open ? ' es-open' : ''}`}>
      <button
        type="button"
        className="es-tab"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="es-panel"
      >
        <span className="es-tab-text">{open ? 'Close' : 'Enquire Now'}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {open ? (
            <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
          ) : (
            <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 6l10 7 10-7" /></>
          )}
        </svg>
      </button>

      <div className="es-panel" id="es-panel" role="dialog" aria-label="Enquire now">
        <div className="es-head">Enquire Now</div>

        {submitted ? (
          <div className="es-success">
            <div className="es-check">✓</div>
            <h4>Thank you!</h4>
            <p>Our team will contact you within 24 hours.</p>
            <button type="button" className="es-btn" onClick={() => { setSubmitted(false); setOpen(false) }}>Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="es-form">
            <div className="es-field">
              <input name="name" type="text" placeholder="Your Name*" value={form.name} onChange={handleChange} />
              {errors.name && <span className="es-err">{errors.name}</span>}
            </div>
            <div className="es-field">
              <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
              {errors.email && <span className="es-err">{errors.email}</span>}
            </div>
            <div className="es-field">
              <input name="phone" type="tel" placeholder="Mobile Number*" value={form.phone} onChange={handleChange} />
              {errors.phone && <span className="es-err">{errors.phone}</span>}
            </div>
            <div className="es-field">
              <textarea name="message" rows={2} placeholder="Message" value={form.message} onChange={handleChange} />
            </div>
            {serverError && <div className="es-server-err">{serverError}</div>}
            <button type="submit" className="es-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        )}
      </div>

      <style>{`
        .es-wrap {
          --es-w: 340px;
          position: fixed; right: 0; top: 50%; z-index: 1500;
          display: flex; align-items: flex-start;
          transform: translate(var(--es-w), -50%);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .es-wrap.es-open { transform: translate(0, -50%); }

        .es-tab {
          display: flex; flex-direction: column; align-items: center; gap: 0.7rem;
          padding: 1.1rem 0.7rem; border: none; cursor: pointer;
          background: var(--gold); color: #fff;
          border-radius: 10px 0 0 10px;
          box-shadow: -4px 4px 18px rgba(0,0,0,0.25);
          transition: background 0.25s ease;
        }
        .es-tab:hover { background: var(--gold-light); }
        .es-tab-text {
          writing-mode: vertical-rl; transform: rotate(180deg);
          font-size: 0.92rem; font-weight: 700; letter-spacing: 0.08em;
        }

        .es-panel {
          width: var(--es-w); background: rgba(255,255,255,0.98);
          box-shadow: -8px 8px 40px rgba(0,0,0,0.3);
          border-radius: 0 0 0 10px; overflow: hidden;
        }
        .es-head { background: var(--forest-dark); color: #fff; padding: 1rem 1.4rem; font-size: 1.05rem; font-weight: 700; }

        .es-form { padding: 1.2rem 1.4rem 1.5rem; display: flex; flex-direction: column; gap: 0.9rem; }
        .es-field input, .es-field textarea {
          width: 100%; border: none; border-bottom: 1px solid rgba(0,0,0,0.25);
          background: transparent; padding: 0.7rem 0.1rem; font-size: 0.92rem;
          color: var(--charcoal); outline: none; resize: none;
          transition: border-color 0.2s ease;
        }
        .es-field input:focus, .es-field textarea:focus { border-bottom-color: var(--gold); }
        .es-err { display: block; color: #dc2626; font-size: 0.72rem; margin-top: 0.25rem; }
        .es-server-err { color: #dc2626; font-size: 0.8rem; }

        .es-btn {
          align-self: center; margin-top: 0.4rem; padding: 0.7rem 2.2rem;
          background: transparent; color: var(--gold); border: 1.5px solid var(--gold);
          border-radius: 999px; font-size: 0.88rem; font-weight: 700; cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .es-btn:hover:not(:disabled) { background: var(--gold); color: #fff; }
        .es-btn:disabled { opacity: 0.6; cursor: not-allowed; }

        .es-success { padding: 2rem 1.4rem; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
        .es-check { width: 48px; height: 48px; border-radius: 50%; background: var(--gold); color: #fff; font-size: 1.5rem; display: flex; align-items: center; justify-content: center; }
        .es-success h4 { margin: 0.4rem 0 0; }
        .es-success p { font-size: 0.88rem; margin: 0 0 0.6rem; }

        @media (max-width: 480px) {
          .es-wrap { --es-w: min(320px, calc(100vw - 52px)); }
          .es-tab { padding: 0.9rem 0.55rem; }
          .es-tab-text { font-size: 0.82rem; }
        }
      `}</style>
    </div>
  )
}