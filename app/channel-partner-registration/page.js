'use client'
import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

// ── Google Sheets submission ──────────────────────────────────────────────────
const GOOGLE_SHEET_ID = '1LxkoAF-rXxmDihOn3JluV8nV1YnwpxqIQ-5b19yUd2A'
const SERVICE_ACCOUNT_EMAIL = 'client-registration@client-registration-493410.iam.gserviceaccount.com'

// ── Channel Partner Policy Content ───────────────────────────────────────────
const POLICY_SECTIONS = [
  {
    number: '1',
    title: 'Objective',
    content: `This policy defines the terms under which channel partners are appointed to market and refer buyers for Haute Developer's projects. It is intended to ensure transparent, ethical, and compliant sales practices.`,
  },
  {
    number: '2',
    title: 'Eligibility of Channel Partner',
    content: null,
    bullets: [
      'Be a legally registered business entity or individual.',
      'Hold valid registration as a real estate agent/broker wherever required under applicable RERA rules.',
      'Submit all KYC, business registration, and tax documents before onboarding.',
      'Follow all marketing and customer communication guidelines issued by the Haute Developer.',
    ],
  },
  {
    number: '3',
    title: 'Appointment Process',
    content: null,
    bullets: [
      'Channel partner onboarding shall be subject to approval by the Haute Developer at its sole discretion.',
      'No marketing activity may begin until the partner is formally registered and approved for the relevant project.',
      'Project access, rate cards, inventory updates, and brochures will be shared only after activation.',
    ],
  },
  {
    number: '4',
    title: 'Partner Conduct',
    content: 'The channel partner shall:',
    bullets: [
      'Provide only accurate and approved information about the project.',
      'Avoid misrepresentation, false promises, or unapproved discount commitments.',
      'Use only official brochures, creatives, and brand materials approved by the Haute Developer.',
      'Not represent themselves as an employee or authorized agent of Haute Developer unless expressly permitted.',
    ],
  },
  {
    number: '5',
    title: 'Customer Mapping and Lead Registration',
    content: null,
    bullets: [
      'A lead will be considered mapped to the channel partner only after written registration through Haute Developer\'s prescribed process.',
      'The customer\'s first interaction, site visit, or lead registration proof may be used to determine partner entitlement.',
      'A lead may remain mapped for a fixed period of 90 days, unless otherwise extended in writing.',
      'In case of overlap between two partners, Haute Developer may apply a pre-defined sharing rule or allocate commission based on proof of first introduction.',
    ],
  },
  {
    number: '6',
    title: 'Commission Structure',
    content: null,
    bullets: [
      'Commission rates shall be defined in the project-specific incentive sheet issued by Haute Developer.',
      'Commission may vary by project, unit type, payment stage, or booking slab.',
      'Commission will be payable only on projects with RERA approval, receipt of due customer payment (50% of the total basic price), and completion of required documentation.',
      'Any additional bonus, slab incentive, or special campaign payout shall be governed by separate written circulars.',
    ],
  },
  {
    number: '7',
    title: 'Payout Conditions',
    content: null,
    bullets: [
      'Brokerage/commission shall be released only after the customer payment milestone specified by Haute Developer is achieved and the booking is valid.',
      'The standard payout timeline is within 10–15 days after fulfilment of all payment and documentation conditions.',
      'No commission shall be payable for cancelled bookings, fraudulent bookings, or bookings not completed as per policy.',
    ],
  },
  {
    number: '8',
    title: 'Cancellation and Clawback',
    content: null,
    bullets: [
      'If a booking is cancelled before the commission becomes payable, no commission will be paid.',
      'If commission has already been paid and the booking is later cancelled due to customer default or partner fraud/misrepresentation, Haute Developer may recover the paid commission from the partner or adjust it against future payouts.',
    ],
  },
  {
    number: '9',
    title: 'Marketing and Branding',
    content: null,
    bullets: [
      'The channel partner may use only approved branding, project images, and sales material.',
      'Any digital promotion, website listing, paid ads, SMS, WhatsApp campaign, or social media communication using Haute Developer\'s name must receive prior written approval.',
      'The partner shall not alter project specifications, pricing, offers, or possession claims without written authorization.',
    ],
  },
  {
    number: '10',
    title: 'Compliance',
    content: null,
    bullets: [
      'The channel partner must comply with RERA, tax, consumer protection, advertising, and data privacy laws applicable in the jurisdiction.',
      'Any breach of law, ethical standards, or project policy may result in immediate suspension or termination.',
      'The partner shall indemnify Haute Developer against losses arising from unauthorized representations or violations committed by the partner.',
    ],
  },
  {
    number: '11',
    title: 'Termination',
    content: 'Haute Developer may terminate the relationship immediately if the partner:',
    bullets: [
      'Gives false information to customers.',
      'Violates RERA or other laws.',
      'Engages in unethical, misleading, or damaging conduct.',
      'Uses unauthorized marketing material or brand assets.',
      'Attempts to divert customers or interfere with Haute Developer\'s sales process.',
    ],
  },
  {
    number: '12',
    title: 'Confidentiality',
    content: null,
    bullets: [
      'Pricing, inventory, launch plans, internal reports, and customer data shared by Haute Developer are confidential.',
      'The partner must not share confidential information with any third party without written approval.',
    ],
  },
  {
    number: '13',
    title: 'Dispute Resolution',
    content: null,
    bullets: [
      'Any disputes arising out of this policy shall first be resolved amicably through mutual discussion.',
      'If unresolved, the matter shall be referred to arbitration or courts as per the jurisdiction specified in the partner agreement.',
    ],
  },
  {
    number: '14',
    title: 'Amendment',
    content: `Haute Developer may revise this policy, commission structure, or campaign terms at any time with prior written notice to channel partners.`,
  },
]

// ── PDF generation via browser print ─────────────────────────────────────────
function buildContractHTML(data) {
  const today = new Date().toLocaleDateString('en-IN', {
    day: '2-digit', month: 'long', year: 'numeric',
  })

  const rows = [
    ['Channel Partner Name', data.partnerName],
    ['Status', data.status],
    ...(data.status === 'Company' ? [['Registered Office Address', data.location]] : []),
    ['RERA Licensed', data.reraLicensed],
    ...(data.reraLicensed === 'Yes' ? [['RERA Registration Number', data.reraNumber]] : []),
    ['PAN / TAN Number', data.panTan],
    ['Bank Account Number', data.bankAccount],
    ['IFSC Code', data.ifsc],
    ['GST Number', data.gst || 'Not Applicable'],
  ]

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>Channel Partner Agreement — Haute Developers</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Jost',sans-serif;color:#1a1a1a;background:#fff;padding:48px 60px;font-size:13px;line-height:1.7}
    .header{text-align:center;border-bottom:2px solid #c4901a;padding-bottom:24px;margin-bottom:32px}
    .logo-text{font-family:'Cormorant Garamond',serif;font-size:28px;font-weight:600;color:#0d2f24;letter-spacing:0.06em}
    .logo-sub{font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#c4901a;margin-top:4px}
    h1{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:600;color:#0d2f24;text-align:center;margin:20px 0 6px;letter-spacing:0.04em}
    .sub-title{text-align:center;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#c4901a;margin-bottom:28px}
    .meta{display:flex;justify-content:space-between;font-size:11px;color:#666;margin-bottom:28px;padding:10px 14px;background:#f9f5ee;border-radius:6px}
    table{width:100%;border-collapse:collapse;margin-bottom:28px}
    th{background:#0d2f24;color:#fff;text-align:left;padding:10px 14px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;font-weight:500}
    td{padding:10px 14px;border-bottom:1px solid #ede8df;vertical-align:top}
    td:first-child{font-weight:600;color:#0d2f24;width:40%}
    tr:nth-child(even) td{background:#faf7f2}
    .declaration-box{border:1.5px solid #c4901a;border-radius:8px;padding:22px 26px;margin-bottom:24px;background:#fffdf7}
    .declaration-title{font-family:'Cormorant Garamond',serif;font-size:16px;font-weight:600;color:#0d2f24;margin-bottom:12px;letter-spacing:0.02em}
    .declaration-text{font-size:13px;line-height:1.9;color:#333;font-style:italic}
    .sig-section{display:flex;justify-content:space-between;margin-top:48px;gap:40px}
    .sig-block{flex:1;border-top:1px solid #c4901a;padding-top:12px}
    .sig-label{font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#888}
    .sig-name{font-size:12px;color:#0d2f24;font-weight:600;margin-top:6px}
    .footer-note{text-align:center;font-size:10px;color:#aaa;margin-top:40px;border-top:1px solid #ede8df;padding-top:16px}
    .gold-bar{height:3px;background:linear-gradient(90deg,transparent,#c4901a,transparent);margin-bottom:28px}
    @media print{body{padding:24px 32px}@page{margin:0.5in}}
  </style>
</head>
<body>
  <div class="header">
    <div class="logo-text">HAUTE DEVELOPERS</div>
    <div class="logo-sub">Premium Real Estate — Building Homes You Love</div>
  </div>
  <h1>Channel Partner Registration Agreement</h1>
  <div class="sub-title">Official Partnership Contract</div>
  <div class="gold-bar"></div>
  <div class="meta">
    <span>Document Date: ${today}</span>
    <span>Document Type: Channel Partner Agreement</span>
    <span>Issuing Entity: Haute Developers Pvt. Ltd.</span>
  </div>
  <table>
    <thead><tr><th colspan="2">Partner Information & Details</th></tr></thead>
    <tbody>
      ${rows.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
    </tbody>
  </table>
  <div class="declaration-box">
    <div class="declaration-title">Declaration by the Channel Partner</div>
    <div class="declaration-text">
      "I / We have read and understood all terms and conditions governing the Channel Partner Programme of Haute Developers Pvt. Ltd. I / We hereby declare that I / We shall conduct all business activities pertaining to the sale, marketing, and promotion of Haute Developers' projects with complete integrity, professionalism, and in strict adherence to applicable industry standards, regulatory guidelines, and ethical business practices. I / We further undertake that all representations made to prospective clients shall be accurate, fair, and in the best interest of all parties involved."
    </div>
  </div>
  <div class="sig-section">
    <div class="sig-block">
      <div class="sig-label">Channel Partner Signature</div>
      <div class="sig-name">${data.partnerName}</div>
    </div>
    <div class="sig-block">
      <div class="sig-label">Date of Agreement</div>
      <div class="sig-name">${today}</div>
    </div>
    <div class="sig-block">
      <div class="sig-label">Authorised Signatory — Haute Developers</div>
      <div class="sig-name">Director / Authorised Representative</div>
    </div>
  </div>
  <div class="footer-note">
    This document is computer-generated and constitutes a binding agreement upon submission.<br/>
    Haute Developers Pvt. Ltd. | Ground Floor, H-214, Sector 63, Noida, UP 201301 | support@hautedevelopers.com
  </div>
</body>
</html>`
}

function downloadContract(data) {
  const html = buildContractHTML(data)
  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const win = window.open(url, '_blank')
  if (win) {
    win.addEventListener('load', () => {
      win.print()
    })
  }
}

// ── Google Sheets via Service Account JWT ────────────────────────────────────
async function submitToGoogleSheets(data) {
  const SHEET_ID = GOOGLE_SHEET_ID
  const SHEET_RANGE = 'Sheet1!A:J'

  const today = new Date().toLocaleDateString('en-IN')
  const row = [
    today,
    data.partnerName,
    data.status,
    data.status === 'Company' ? data.location : '',
    data.reraLicensed,
    data.reraLicensed === 'Yes' ? data.reraNumber : '',
    data.panTan,
    data.bankAccount,
    data.ifsc,
    data.gst || '',
  ]

  const header = { alg: 'RS256', typ: 'JWT' }
  const now = Math.floor(Date.now() / 1000)
  const payload = {
    iss: SERVICE_ACCOUNT_EMAIL,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  }

  function b64url(str) {
    return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
  }
  function b64urlObj(obj) {
    return b64url(JSON.stringify(obj))
  }

  const signingInput = `${b64urlObj(header)}.${b64urlObj(payload)}`

  const pemKey = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCzPQMHHn7pFS2E
GgEozuEwrAvf0WClgJeMIPUvbZC3GOc2hk/2VJ1aRcH06IvWWy0ZvWXM5mFqfZ26
LPk+UtzoHUIBLno60KfpbKn7BOcIqoE+erIbTmossUJZzr87xw22dQCRQnJhLOz6
nDi7kM7EnsknZHsk3W4vbTrecVlLEl0wc+H7FSYNbkS5/0iJDnhda61rfG7en0a4
lcIt0eIH+PZ29YuyOyBCUEeYnYofqERI8SmEwrgcBNFYsKxfPt2JpmdNmBLF9tqx
9q4wwYIwunse/DQ+J1yC+FVQ2l9+nHamHx5edgqzUZZxOTNgJM4INLXx6Lcx49w2
P3xvfEpRAgMBAAECggEAIlB4K6z+MXvdNKjw12Hx8UpC1LTmSpEZkll97zhL6A3T
uBfTJ67v2Ag6V3uMx/s5IXAl1Oo3NLa7U1kIV5LwGVz+lbDS9D8dol3sFfNMktdn
unEtd3ZV89v0vrJK4LQdTzTLqMOel7WM4fa2EsyolTJsAsdlHvvofBpulob/SBR4
Lj8y0OUstcsHG64X7QfhsZelG/rRrOwhe50cUwu7pwMyHufRwlvNyCkavjArTkMZ
g8ZTABGTermKFLGkvRFp6l6ep/p0VK43q2sryIRoBWfq0+WmQrgxzyl14QuEI4RT
v2SQtBf2Cmj8HJnI8b1gsp03oS3OxCrsyz5zWZPUtQKBgQDYZaUxpxJrsvjZpiVD
ygPIN9JfuhOuKceLPXkKJBziRslmsM5pOluD8ywlBIfpjgZUVHGRbxeSAmnzy7KP
dsB9CXkjxk77GDFotiBsE/FK/q8+wjYC88KtAm1okgFlrQXULY1vAM8wVeMXvzqa
161wpUH4gifeg9Zp7Kkm9aFgPQKBgQDUCnQ86awClpLCw2VRRdpU8/7jrEI7hs+S
o0+GfU2O+SvoGXuWVlF9rHmc+rTmB5AO2+j/wLyT5Cg3SVmNrh7l8fuXKUNXsU9x
jW+Sk2VN+ZVBw1GJTKtSkkNL+sfKzYYPu7ybeV3oNNaEf5bc0EKh+pHbuQttmMMx
bk3Fd1d/pQKBgCySizs1+ZJbc+yIz2YuJydHcDqtfj5CdsqUZ+kR1S06fWN8iZed
IJqGLRKW41PVIDKgjh/xrP4zJxXDYE0ynaVjnSMkRsJrkknKMdVxKiNTYE9h+3QS
N4ghVt3SLR1/TRMOKvKxTPvcxQDwL6cTQ7NPJs6EKKgpqbF5wMG4mHvVAoGATddk
orP55J1YVU2cFUD6jPNh4Dztt6Ke8ysm162KWnFY0AUC3MbldahqoNlcrZGbLglH
ORSNZhF9PgacbKm+SBYUkYKhaUD7dClDC2E28HAufgzxEuFlh5OQRwVScT4P+Bio
fb8JXWSAV/Xq8Tc3LvWotCvzaRGKnsvqmxJbuc0CgYBwR50sTEht5eYVdsQgrKEH
RouqROm1RuXp8ZSpcv8aT0O6HqL9qYAa73QJgC6TqKqTRoAVOgQH9yAhVn+60YWA
yIMcgnQc0mGcNzvtyhDbV4JwmYq343dOPmyj+5cXM5mvMJ/KhbVgnGxkHQ//0gea
joxlXpQXA/HzB3zMQFiftw==
-----END PRIVATE KEY-----`

  const pemContents = pemKey
    .replace(/-----BEGIN PRIVATE KEY-----/, '')
    .replace(/-----END PRIVATE KEY-----/, '')
    .replace(/\n/g, '')
    .trim()

  const binaryDer = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0))

  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    binaryDer.buffer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  )

  const encoder = new TextEncoder()
  const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', cryptoKey, encoder.encode(signingInput))

  const sigBytes = new Uint8Array(signature)
  let sigStr = ''
  for (let i = 0; i < sigBytes.length; i++) sigStr += String.fromCharCode(sigBytes[i])
  const sigB64 = b64url(sigStr)

  const jwt = `${signingInput}.${sigB64}`

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  })
  const tokenData = await tokenRes.json()
  const accessToken = tokenData.access_token

  if (!accessToken) throw new Error(`Failed to obtain access token: ${JSON.stringify(tokenData)}`)

  const sheetsRes = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(SHEET_RANGE)}:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ values: [row] }),
    }
  )

  if (!sheetsRes.ok) {
    const err = await sheetsRes.json()
    throw new Error(err.error?.message || 'Sheets API error')
  }

  return true
}

// ── useIsMobile hook ──────────────────────────────────────────────────────────
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

// ── Policy Modal ──────────────────────────────────────────────────────────────
function PolicyModal({ onAccept }) {
  const scrollRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false)
  const [policyAccepted, setPolicyAccepted] = useState(false)
  const isMobile = useIsMobile()

  function handleScroll() {
    const el = scrollRef.current
    if (!el) return
    const pct = el.scrollTop / (el.scrollHeight - el.clientHeight)
    setScrollProgress(Math.min(100, Math.round(pct * 100)))
    if (pct > 0.92) setHasScrolledToBottom(true)
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(13,47,36,0.85)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: isMobile ? '0' : '20px',
      backdropFilter: 'blur(4px)',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: isMobile ? '0' : '20px',
        width: '100%',
        maxWidth: isMobile ? '100%' : '720px',
        height: isMobile ? '100%' : 'auto',
        maxHeight: isMobile ? '100%' : '92vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
      }}>

        {/* Modal Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0d2f24, #1a4a3a)',
          padding: isMobile ? '20px 20px 16px' : '28px 40px',
          borderBottom: '3px solid #c4901a',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em',
                textTransform: 'uppercase', color: '#c4901a', marginBottom: '8px',
              }}>
                Step 1 of 2 — Required Reading
              </div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: isMobile ? '1.3rem' : '1.6rem', fontWeight: 600, color: '#fff',
                margin: 0, letterSpacing: '0.02em',
              }}>
                Channel Partner Policy
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', margin: '6px 0 0', letterSpacing: '0.04em' }}>
                Effective Date: April 1, 2026 · Project: Expressway Residency
              </p>
            </div>
            <div style={{
              background: 'rgba(196,144,26,0.15)',
              border: '1px solid rgba(196,144,26,0.4)',
              borderRadius: '8px',
              padding: '10px 16px',
              textAlign: 'center',
              minWidth: '70px',
              flexShrink: 0,
            }}>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#c4901a', lineHeight: 1 }}>
                {scrollProgress}%
              </div>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', marginTop: '4px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Read
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: '16px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
            <div style={{
              height: '100%',
              width: `${scrollProgress}%`,
              background: scrollProgress === 100 ? '#4ade80' : '#c4901a',
              borderRadius: '2px',
              transition: 'width 0.2s ease, background 0.4s',
            }} />
          </div>
        </div>

        {/* Scrollable Policy Body */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: isMobile ? '20px 16px' : '32px 40px',
            fontSize: '13.5px',
            lineHeight: 1.9,
            color: '#333',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <p style={{
            fontSize: '12px', color: '#888', fontStyle: 'italic',
            marginBottom: '28px', padding: '12px 16px',
            background: '#fdf5e0', borderRadius: '8px',
            borderLeft: '3px solid #c4901a',
          }}>
            Please read through the entire policy below. You must scroll to the bottom before you can proceed to the registration form.
          </p>

          {POLICY_SECTIONS.map((section) => (
            <div key={section.number} style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div style={{
                  width: '28px', height: '28px', background: '#0d2f24', borderRadius: '6px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '10px', fontWeight: 700, color: '#c4901a', flexShrink: 0,
                }}>
                  {section.number}
                </div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.1rem', fontWeight: 600, color: '#0d2f24',
                  margin: 0,
                }}>
                  {section.title}
                </h3>
              </div>
              {section.content && (
                <p style={{ margin: '0 0 8px', paddingLeft: isMobile ? '0' : '40px' }}>{section.content}</p>
              )}
              {section.bullets && (
                <ul style={{ margin: 0, paddingLeft: isMobile ? '16px' : '56px', listStyle: 'none' }}>
                  {section.bullets.map((b, i) => (
                    <li key={i} style={{ position: 'relative', marginBottom: '6px', paddingLeft: '16px' }}>
                      <span style={{
                        position: 'absolute', left: 0, top: '8px',
                        width: '5px', height: '5px', background: '#c4901a', borderRadius: '50%',
                      }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div style={{
            marginTop: '32px', padding: '20px 24px',
            background: '#f0faf5', border: '1.5px solid #0d2f24',
            borderRadius: '10px', textAlign: 'center',
          }}>
            <div style={{ fontSize: '20px', marginBottom: '8px' }}>✓</div>
            <p style={{ color: '#0d2f24', fontWeight: 600, margin: 0, fontSize: '14px' }}>
              You have reached the end of the Channel Partner Policy.
            </p>
            <p style={{ color: '#555', margin: '6px 0 0', fontSize: '13px' }}>
              Please accept the terms below to proceed to the registration form.
            </p>
          </div>
        </div>

        {/* Footer with Acceptance */}
        <div style={{
          flexShrink: 0,
          padding: isMobile ? '16px' : '24px 40px',
          background: '#faf7f2',
          borderTop: '1px solid #ede8df',
        }}>
          {!hasScrolledToBottom && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              marginBottom: '16px', justifyContent: 'center',
              fontSize: '12px', color: '#c4901a', fontWeight: 600,
              letterSpacing: '0.06em',
            }}>
              <span>↕</span>
              <span>Scroll through the entire policy to enable acceptance</span>
            </div>
          )}

          <label style={{
            display: 'flex', alignItems: 'flex-start', gap: '14px',
            cursor: hasScrolledToBottom ? 'pointer' : 'not-allowed',
            padding: isMobile ? '14px' : '16px 20px',
            background: policyAccepted ? 'rgba(13,47,36,0.05)' : '#fff',
            border: `1.5px solid ${policyAccepted ? '#0d2f24' : hasScrolledToBottom ? '#c4901a' : '#e0d5c0'}`,
            borderRadius: '10px',
            marginBottom: '16px',
            transition: 'all 0.2s',
            opacity: hasScrolledToBottom ? 1 : 0.6,
          }}>
            <input
              type="checkbox"
              disabled={!hasScrolledToBottom}
              checked={policyAccepted}
              onChange={e => setPolicyAccepted(e.target.checked)}
              style={{
                width: '20px', height: '20px',
                accentColor: '#0d2f24',
                cursor: hasScrolledToBottom ? 'pointer' : 'not-allowed',
                flexShrink: 0,
                marginTop: '2px',
              }}
            />
            <span style={{ fontSize: '13px', color: '#333', lineHeight: 1.75 }}>
              I / We have read and fully understood the Channel Partner Policy of <strong style={{ color: '#0d2f24' }}>Haute Developers Pvt. Ltd.</strong> (Effective: April 1, 2026) and agree to comply with all terms, conditions, obligations, and guidelines set forth herein.
            </span>
          </label>

          <button
            onClick={() => policyAccepted && onAccept()}
            disabled={!policyAccepted}
            style={{
              width: '100%',
              padding: '16px',
              background: policyAccepted
                ? 'linear-gradient(135deg, #0d2f24, #1a4a3a)'
                : '#d0ccc4',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              cursor: policyAccepted ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
              fontFamily: "'Jost', sans-serif",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <span>📋</span>
            {policyAccepted ? 'Proceed to Registration Form →' : 'Accept the Policy to Continue'}
          </button>

          <p style={{ textAlign: 'center', fontSize: '11px', color: '#aaa', marginTop: '12px', letterSpacing: '0.04em' }}>
            Haute Developers Pvt. Ltd. · Sector 63, Noida 201301
          </p>
        </div>
      </div>
    </div>
  )
}

// ── Field Components ──────────────────────────────────────────────────────────
function Field({ label, required, children, hint }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{
        fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em',
        textTransform: 'uppercase', color: '#0d2f24',
      }}>
        {label} {required && <span style={{ color: '#c4901a' }}>*</span>}
      </label>
      {children}
      {hint && <span style={{ fontSize: '11px', color: '#888' }}>{hint}</span>}
    </div>
  )
}

const inputStyle = {
  padding: '12px 16px',
  border: '1.5px solid #e0d5c0',
  borderRadius: '8px',
  fontSize: '14px',
  fontFamily: "'Jost', sans-serif",
  color: '#1a1a1a',
  background: '#faf7f2',
  outline: 'none',
  transition: 'border-color 0.2s',
  width: '100%',
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function ChannelPartnerRegistration() {
  const [policyAccepted, setPolicyAccepted] = useState(false)
  const isMobile = useIsMobile()

  const [form, setForm] = useState({
    partnerName: '',
    status: '',
    location: '',
    reraLicensed: '',
    reraNumber: '',
    panTan: '',
    bankAccount: '',
    ifsc: '',
    gst: '',
  })
  const [accepted, setAccepted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    if (!accepted) {
      setError('Please confirm that you have read and accepted the declaration before proceeding.')
      return
    }
    setError('')
    setSubmitting(true)
    try {
      await submitToGoogleSheets(form)
      downloadContract(form)
      setSubmitted(true)
    } catch (err) {
      setError('Submission failed: ' + err.message + '. Please try again or contact us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <div style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(135deg, #0d2f24 0%, #1a4a3a 100%)',
          flexDirection: 'column', gap: '24px', padding: '2rem', textAlign: 'center',
        }}>
          <div style={{
            width: '80px', height: '80px', background: 'rgba(196,144,26,0.15)',
            border: '2px solid #c4901a', borderRadius: '50%', display: 'flex',
            alignItems: 'center', justifyContent: 'center', fontSize: '36px',
          }}>✓</div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#fff', fontWeight: 600, letterSpacing: '0.02em',
          }}>Registration Submitted Successfully</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '520px' }}>
            Your Channel Partner Agreement has been received and recorded. Your contract document should be printing or opening now.
          </p>
          <div style={{
            background: 'rgba(196,144,26,0.12)', border: '1.5px solid rgba(196,144,26,0.5)',
            borderRadius: '12px', padding: '20px 32px', maxWidth: '480px', width: '100%',
          }}>
            <p style={{ color: '#c4901a', fontWeight: 600, fontSize: '1rem', marginBottom: '8px' }}>📋 Next Step</p>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Please print out the contract and bring it to our office at your earliest convenience to complete the onboarding process.
            </p>
          </div>
          <a href="/" style={{
            marginTop: '8px', padding: '12px 32px', background: '#c4901a', color: '#fff',
            borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem',
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>Return to Home</a>
        </div>
        <Footer />
      </>
    )
  }

  // Responsive form padding and card padding
  const formPadding = isMobile ? '20px 16px' : '36px 48px'
  const cardHeaderPadding = isMobile ? '20px 16px' : '32px 48px'
  const preamblePadding = isMobile ? '20px 16px 0' : '36px 48px 0'
  const footerBarPadding = isMobile ? '16px' : '20px 48px'

  return (
    <>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap');
          input:focus, select:focus { border-color: #c4901a !important; box-shadow: 0 0 0 3px rgba(196,144,26,0.12) !important; }
        `}</style>
      </Head>

      <Navbar />

      {/* ── Policy Gate Modal ── */}
      {!policyAccepted && (
        <PolicyModal onAccept={() => setPolicyAccepted(true)} />
      )}

      {/* ── Page Hero ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0d2f24 0%, #1a4a3a 60%, #0d2f24 100%)',
        padding: isMobile ? '100px 0 40px' : '120px 0 60px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'repeating-linear-gradient(45deg, #c4901a 0, #c4901a 1px, transparent 0, transparent 50%)',
          backgroundSize: '40px 40px',
        }} />
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(196,144,26,0.12) 0%, transparent 70%)',
        }} />
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {policyAccepted && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.4)',
              borderRadius: '20px', padding: '6px 16px',
              fontSize: '11px', color: '#4ade80', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              <span>✓</span> Policy Accepted — Step 2 of 2
            </div>
          )}
          <span style={{
            display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: '#c4901a', marginBottom: '16px',
          }}>Haute Developers Partnership Programme</span>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.8rem, 5vw, 3.6rem)', fontWeight: 600, color: '#fff',
            lineHeight: 1.15, letterSpacing: '0.02em', marginBottom: '20px',
          }}>
            Channel Partner<br /><em style={{ color: '#c4901a' }}>Registration Agreement</em>
          </h1>
          <div style={{ width: '60px', height: '2px', background: '#c4901a', margin: '0 auto 20px' }} />
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto' }}>
            Complete the following agreement to formalise your partnership with Haute Developers. All fields marked with an asterisk are mandatory.
          </p>
        </div>
      </section>

      {/* ── Contract Body ── */}
      <section style={{ background: '#f7f4ef', padding: isMobile ? '32px 0 48px' : '64px 0 80px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: isMobile ? '0 12px' : '0 24px' }}>
          <div style={{
            background: '#fff', borderRadius: isMobile ? '12px' : '20px',
            boxShadow: '0 8px 64px rgba(0,0,0,0.10), 0 0 0 1px rgba(196,144,26,0.12)',
            overflow: 'hidden',
          }}>

            {/* Contract Header Bar */}
            <div style={{
              background: 'linear-gradient(135deg, #0d2f24, #1a4a3a)',
              padding: cardHeaderPadding,
              borderBottom: '3px solid #c4901a',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: isMobile ? 'flex-start' : 'center',
                flexDirection: isMobile ? 'column' : 'row',
                flexWrap: 'wrap',
                gap: '12px',
              }}>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '1.3rem' : '1.6rem', fontWeight: 600, color: '#fff', letterSpacing: '0.04em' }}>
                    HAUTE DEVELOPERS
                  </div>
                  <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c4901a', marginTop: '4px' }}>
                    Premium Real Estate
                  </div>
                </div>
                <div style={{ textAlign: isMobile ? 'left' : 'right' }}>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Document Type</div>
                  <div style={{ fontSize: '13px', color: '#c4901a', fontWeight: 600, marginTop: '4px' }}>Channel Partner Agreement</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
                    Date: {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
                  </div>
                </div>
              </div>
            </div>

            {/* Preamble */}
            <div style={{ padding: preamblePadding, borderBottom: '1px solid #ede8df' }}>
              <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.9, marginBottom: '28px', fontStyle: 'italic' }}>
                This Channel Partner Registration Agreement ("Agreement") is entered into between <strong style={{ color: '#0d2f24' }}>Haute Developers Pvt. Ltd.</strong>, a company registered under the Companies Act with its corporate office at Ground Floor, H-214, Sector 63, Noida, Uttar Pradesh 201301, and the undersigned Channel Partner, with effect from the date of submission of this Agreement.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ padding: formPadding }}>

              {/* Section 1 */}
              <SectionHeading number="01" title="Partner Identification" />
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
                <div style={{ gridColumn: '1 / -1' }}>
                  <Field label="Full Name / Organisation Name" required>
                    <input
                      style={inputStyle} required
                      placeholder="As per PAN card / Certificate of Incorporation"
                      value={form.partnerName}
                      onChange={set('partnerName')}
                    />
                  </Field>
                </div>

                <Field label="Partner Status" required>
                  <select
                    style={{ ...inputStyle, cursor: 'pointer' }} required
                    value={form.status}
                    onChange={set('status')}
                  >
                    <option value="">Select status</option>
                    <option value="Individual">Individual</option>
                    <option value="Company">Company / Firm</option>
                  </select>
                </Field>

                {form.status === 'Company' && (
                  <Field label="Registered Office Address" required>
                    <input
                      style={inputStyle} required
                      placeholder="Complete registered address"
                      value={form.location}
                      onChange={set('location')}
                    />
                  </Field>
                )}
              </div>

              {/* Section 2 */}
              <SectionHeading number="02" title="Regulatory & Tax Information" />
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px', marginBottom: '32px' }}>

                <Field label="RERA Registered" required>
                  <select
                    style={{ ...inputStyle, cursor: 'pointer' }} required
                    value={form.reraLicensed}
                    onChange={set('reraLicensed')}
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </Field>

                {form.reraLicensed === 'Yes' && (
                  <Field label="RERA Registration Number" required>
                    <input
                      style={inputStyle} required
                      placeholder="e.g. UPRERAPRJ000000"
                      value={form.reraNumber}
                      onChange={set('reraNumber')}
                    />
                  </Field>
                )}

                <Field label="PAN / TAN Number" required hint="Permanent Account Number or Tax Deduction Account Number">
                  <input
                    style={inputStyle} required
                    placeholder="ABCDE1234F"
                    value={form.panTan}
                    onChange={set('panTan')}
                  />
                </Field>

                <Field label="GST Registration Number" hint="Leave blank if not applicable">
                  <input
                    style={inputStyle}
                    placeholder="e.g. 09ABCDE1234F1Z5"
                    value={form.gst}
                    onChange={set('gst')}
                  />
                </Field>
              </div>

              {/* Section 3 */}
              <SectionHeading number="03" title="Banking Details" />
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
                <Field label="Bank Account Number" required>
                  <input
                    style={inputStyle} required type="text"
                    placeholder="Enter account number"
                    value={form.bankAccount}
                    onChange={set('bankAccount')}
                  />
                </Field>

                <Field label="IFSC Code" required hint="11-character code on your cheque book">
                  <input
                    style={inputStyle} required
                    placeholder="e.g. SBIN0001234"
                    value={form.ifsc}
                    onChange={set('ifsc')}
                  />
                </Field>
              </div>

              {/* Section 4 */}
              <SectionHeading number="04" title="Declaration & Undertaking" />
              <div style={{
                border: '1.5px solid #c4901a', borderRadius: '12px',
                padding: isMobile ? '20px 16px' : '28px 32px', marginBottom: '28px',
                background: 'linear-gradient(135deg, #fffdf7, #fdf5e0)',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, width: '4px', height: '100%',
                  background: 'linear-gradient(to bottom, #c4901a, rgba(196,144,26,0.3))',
                }} />
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '16px', fontWeight: 600, color: '#0d2f24',
                  marginBottom: '16px', letterSpacing: '0.02em',
                }}>
                  Declaration by the Channel Partner
                </div>
                <p style={{ fontSize: '14px', lineHeight: 2, color: '#333', fontStyle: 'italic' }}>
                  "I / We have read and understood all terms and conditions governing the Channel Partner Programme of Haute Developers Pvt. Ltd. I / We hereby declare that I / We shall conduct all business activities pertaining to the sale, marketing, and promotion of Haute Developers' projects with complete integrity, professionalism, and in strict adherence to applicable industry standards, regulatory guidelines, and ethical business practices. I / We further undertake that all representations made to prospective clients shall be accurate, fair, and in the best interest of all parties involved."
                </p>
              </div>

              {/* Acceptance Checkbox */}
              <label style={{
                display: 'flex', alignItems: 'flex-start', gap: '14px', cursor: 'pointer',
                padding: isMobile ? '16px' : '20px 24px',
                background: accepted ? 'rgba(13,47,36,0.04)' : '#faf7f2',
                border: `1.5px solid ${accepted ? '#0d2f24' : '#e0d5c0'}`,
                borderRadius: '10px', marginBottom: '32px', transition: 'all 0.2s',
              }}>
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={e => setAccepted(e.target.checked)}
                  style={{
                    width: '20px', height: '20px', accentColor: '#0d2f24',
                    cursor: 'pointer', flexShrink: 0, marginTop: '2px',
                  }}
                />
                <span style={{ fontSize: '13px', color: '#333', lineHeight: 1.75 }}>
                  I / We confirm that I / We have read, understood, and agree to be bound by the terms and conditions of this Channel Partner Agreement with Haute Developers Pvt. Ltd. I / We acknowledge that this constitutes a legally binding undertaking.
                </span>
              </label>

              {error && (
                <div style={{
                  padding: '14px 18px', background: '#fff0f0', border: '1px solid #f5c0c0',
                  borderRadius: '8px', marginBottom: '24px', color: '#c0392b', fontSize: '13px',
                }}>
                  {error}
                </div>
              )}

              {/* Submit */}
              <div style={{ display: 'flex', justifyContent: isMobile ? 'stretch' : 'flex-end' }}>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    width: isMobile ? '100%' : 'auto',
                    padding: '16px 48px',
                    background: submitting ? '#aaa' : 'linear-gradient(135deg, #0d2f24, #1a4a3a)',
                    color: '#fff', border: 'none', borderRadius: '10px',
                    fontSize: '13px', fontWeight: 700, letterSpacing: '0.14em',
                    textTransform: 'uppercase', cursor: submitting ? 'not-allowed' : 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    boxShadow: '0 4px 24px rgba(13,47,36,0.3)',
                    transition: 'all 0.2s',
                    fontFamily: "'Jost', sans-serif",
                  }}
                >
                  {submitting ? (
                    <><span style={{ fontSize: '16px' }}>⏳</span> Submitting Agreement…</>
                  ) : (
                    <><span style={{ fontSize: '16px' }}>📋</span> Submit & Download Contract</>
                  )}
                </button>
              </div>

            </form>

            {/* Contract Footer Note */}
            <div style={{
              borderTop: '1px solid #ede8df', padding: footerBarPadding,
              background: '#faf7f2', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px',
              flexDirection: isMobile ? 'column' : 'row',
              textAlign: isMobile ? 'center' : 'left',
            }}>
              <span style={{ fontSize: '11px', color: '#aaa', letterSpacing: '0.06em' }}>
                Haute Developers Pvt. Ltd. | Sector 63, Noida 201301
              </span>
              <span style={{ fontSize: '11px', color: '#aaa', letterSpacing: '0.06em' }}>
                This agreement is generated electronically and is legally binding.
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

function SectionHeading({ number, title }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px',
      paddingBottom: '12px', borderBottom: '1px solid #ede8df',
    }}>
      <div style={{
        width: '36px', height: '36px', background: '#0d2f24', borderRadius: '8px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '11px', fontWeight: 700, color: '#c4901a', letterSpacing: '0.05em', flexShrink: 0,
      }}>{number}</div>
      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.25rem', fontWeight: 600, color: '#0d2f24',
        margin: 0, letterSpacing: '0.02em',
      }}>{title}</h3>
    </div>
  )
}