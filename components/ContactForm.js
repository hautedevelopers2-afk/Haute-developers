'use client'
import { useState } from 'react'

export default function ContactForm({ darkMode = false }) {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', project: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit mobile number'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    return e
  }

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  const errs = validate()
  if (Object.keys(errs).length) {
    setErrors(errs)
    return
  }

  setLoading(true)

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "b8b6f2a1-68cd-4728-b1f9-b03aaf615900", // 🔥 PUT YOUR KEY HERE
        name: form.name,
        phone: form.phone,
        email: form.email,
        project: form.project,
        message: form.message,
      }),
    })

    const data = await res.json()

    if (data.success) {
      setSubmitted(true)
      setForm({
        name: '',
        phone: '',
        email: '',
        project: '',
        message: '',
      })
    } else {
      alert("Something went wrong!")
    }
  } catch (error) {
    alert("Network error")
  }

  setLoading(false)
}

  const cardStyle = darkMode ? {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(201,144,26,0.25)",
    borderRadius: "20px",
    padding: "2.5rem",
    backdropFilter: "blur(10px)",
  } : {}

  const labelStyle = {
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "0.4rem",
    color: darkMode ? "rgba(255,255,255,0.6)" : undefined,
  }

  const inputStyle = darkMode ? {
    background: "rgba(255,255,255,0.07)",
    border: "1.5px solid rgba(255,255,255,0.12)",
    color: "rgba(255,255,255,0.9)",
    borderRadius: "var(--radius)",
    padding: "0.8rem 1rem",
    fontFamily: "var(--font-body)",
    fontSize: "0.92rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.3s",
  } : {}

  if (submitted) {
    return (
      <div className={darkMode ? '' : 'contact-form-card'} style={darkMode ? cardStyle : {}}>
        <div className="form-success">
          <span className="success-icon">✅</span>
          <h4 style={{ color: darkMode ? "var(--gold)" : undefined }}>Thank you, {form.name}!</h4>
          <p style={{ color: darkMode ? "rgba(255,255,255,0.5)" : undefined }}>
            Your inquiry has been received. Our team will reach out within 24 hours. We're also connecting you on WhatsApp for a quicker response.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={darkMode ? '' : 'contact-form-card'} style={darkMode ? cardStyle : {}}>
      <h3 style={{ color: darkMode ? "var(--white)" : undefined, marginBottom: "0.3rem" }}>Request a Callback</h3>
      <p style={{ color: darkMode ? "rgba(255,255,255,0.5)" : undefined, fontSize: "0.88rem", marginBottom: "1.8rem" }}>
        Fill in your details and our team will get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name" style={labelStyle}>Full Name *</label>
            <input
              id="name" name="name" type="text"
              placeholder="Your full name"
              value={form.name} onChange={handleChange}
              style={darkMode ? inputStyle : undefined}
            />
            {errors.name && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone" style={labelStyle}>Mobile Number *</label>
            <input
              id="phone" name="phone" type="tel"
              placeholder="10-digit mobile number"
              value={form.phone} onChange={handleChange}
              style={darkMode ? inputStyle : undefined}
            />
            {errors.phone && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.phone}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" style={labelStyle}>Email Address</label>
          <input
            id="email" name="email" type="email"
            placeholder="your@email.com (optional)"
            value={form.email} onChange={handleChange}
            style={darkMode ? inputStyle : undefined}
          />
          {errors.email && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="project" style={labelStyle}>Project of Interest</label>
          <select
            id="project" name="project"
            value={form.project} onChange={handleChange}
            style={darkMode ? inputStyle : undefined}
          >
            <option value="" style={darkMode ? { background: "#0d2f24" } : undefined}>Select a project</option>
            <option value="Expressway Residency, Ghaziabad" style={darkMode ? { background: "#0d2f24" } : undefined}>Expressway Residency (Ghaziabad)</option>
            <option value="Haute world City, Dholera" style={darkMode ? { background: "#0d2f24" } : undefined}>Haute world City (Dholera, Gujarat)</option>
            <option value="Haute Residency, Vrindavan" style={darkMode ? { background: "#0d2f24" } : undefined}>Haute Residency (Vrindavan, UP)</option>
            <option value="Haute Grand City, Ghaziabad" style={darkMode ? { background: "#0d2f24" } : undefined}>Haute Grand City (Ghaziabad)</option>
            <option value="General Inquiry" style={darkMode ? { background: "#0d2f24" } : undefined}>General Inquiry</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message" style={labelStyle}>Message</label>
          <textarea
            id="message" name="message"
            placeholder="Tell us your requirements, budget, or any specific queries..."
            value={form.message} onChange={handleChange}
            rows={4}
            style={darkMode ? { ...inputStyle, resize: "vertical", minHeight: "100px" } : undefined}
          />
        </div>

        <button
          type="submit"
          className="btn-primary"
          disabled={loading}
          style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.75 : 1 }}
        >
          {loading ? 'Sending...' : 'Send Inquiry →'}
        </button>
      </form>
    </div>
  )
}