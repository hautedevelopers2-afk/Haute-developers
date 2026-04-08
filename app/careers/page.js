import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'
import Link from 'next/link'

export const metadata = {
  title: 'Careers at Haute Developers | Join Our Real Estate Team in Noida NCR',
  description:
    'Explore career opportunities at Haute Developers — a premium real estate company delivering excellence since 2011. Join our growing team in Noida, Delhi NCR. Apply now.',
  keywords: [
    'careers at Haute Developers',
    'real estate jobs Noida',
    'real estate careers NCR',
    'property sales jobs Delhi',
    'jobs in real estate India',
    'Haute Developers hiring',
  ],
  alternates: { canonical: 'https://www.hautedevelopers.com/careers' },
  openGraph: {
    title: 'Careers at Haute Developers | Real Estate Jobs in NCR',
    description: 'Be part of a team that is redefining premium real estate across Delhi NCR, Vrindavan, Dholera & Dehradun. View open roles at Haute Developers.',
    url: 'https://www.hautedevelopers.com/careers',
  },
}

/* ── Inline SVG icons ── */

const IconCurrency = ({ size = 22, color = "var(--gold)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
)

const IconTrendingUp = ({ size = 22, color = "var(--gold)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
)

const IconHome = ({ size = 22, color = "var(--gold)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><polyline points="9 21 9 12 15 12 15 21"/>
  </svg>
)

const IconGraduationCap = ({ size = 22, color = "var(--gold)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
)

const IconUsers = ({ size = 22, color = "var(--gold)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const IconMapPin = ({ size = 22, color = "var(--gold)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
  </svg>
)

const IconShield = ({ size = 20, color = "var(--gold)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7L12 2z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
)

const IconRocket = ({ size = 20, color = "var(--gold)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
)

const IconLeaf = ({ size = 20, color = "var(--gold)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 8C8 10 5.9 16.17 3.82 19.34A1 1 0 0 0 4.7 21C13 19 20.36 9.68 17 8z"/>
    <path d="M3.82 19.34C3 14 6 8 17 8"/>
  </svg>
)

const IconHandshake = ({ size = 20, color = "var(--gold)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
  </svg>
)

const IconLocationDot = ({ size = 15, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
  </svg>
)

const IconClock = ({ size = 15, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

const IconBriefcase = ({ size = 15, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
)

const roles = [
  {
    title: 'Senior Sales Executive',
    dept: 'Sales & Business Development',
    type: 'Full-Time',
    location: 'Noida, UP',
    exp: '2–5 Years',
    desc: 'Drive residential plot and villa sales across our active project sites. Build client relationships, conduct site visits, and close deals with a consultative approach.',
    skills: ['Real Estate Sales', 'Client Relationship Management', 'Site Presentations', 'Target-Driven'],
  },
  {
    title: 'Channel Partner Manager',
    dept: 'Sales & Partnerships',
    type: 'Full-Time',
    location: 'Noida / Delhi NCR',
    exp: '3–6 Years',
    desc: 'Onboard, manage and grow our network of channel partners, brokers and real estate agents across NCR. Conduct training sessions and drive partner-led sales.',
    skills: ['Channel Sales', 'Broker Network Management', 'Real Estate Market Knowledge', 'CRM Tools'],
  },
  {
    title: 'Digital Marketing Executive',
    dept: 'Marketing',
    type: 'Full-Time',
    location: 'Noida, UP',
    exp: '1–3 Years',
    desc: 'Plan and execute digital campaigns across Google, Meta and YouTube to generate qualified leads for our projects. Manage SEO, content, and paid media strategy.',
    skills: ['Google Ads', 'Meta Ads', 'SEO', 'Lead Generation', 'Analytics'],
  },
  {
    title: 'Real Estate Legal Executive',
    dept: 'Legal & Compliance',
    type: 'Full-Time',
    location: 'Noida, UP',
    exp: '2–4 Years',
    desc: 'Assist in RERA registration, property documentation, title verification, sale deeds, and ensure all project compliance under UP RERA regulations.',
    skills: ['RERA Compliance', 'Property Documentation', 'Title Search', 'Legal Drafting'],
  },
  {
    title: 'Site & Project Coordinator',
    dept: 'Projects & Operations',
    type: 'Full-Time',
    location: 'Ghaziabad / Greater Noida',
    exp: '2–4 Years',
    desc: 'Coordinate between contractors, engineers and management to ensure timely project delivery. Monitor site progress, quality checks and vendor coordination.',
    skills: ['Project Management', 'Site Coordination', 'Vendor Management', 'Reporting'],
  },
  {
    title: 'Customer Relationship Executive',
    dept: 'Customer Experience',
    type: 'Full-Time',
    location: 'Noida, UP',
    exp: '1–3 Years',
    desc: 'Be the primary point of contact for clients post-booking. Handle queries, coordinate possession, resolve grievances and ensure a premium post-sale experience.',
    skills: ['Customer Service', 'CRM Software', 'Communication', 'Problem Solving'],
  },
  {
    title: 'Accounts & Finance Executive',
    dept: 'Finance',
    type: 'Full-Time',
    location: 'Noida, UP',
    exp: '2–4 Years',
    desc: 'Manage day-to-day accounting, payment collections from clients, vendor payments, GST filing, and coordinate with the audit team for financial reporting.',
    skills: ['Tally / QuickBooks', 'GST Filing', 'Accounts Receivable', 'MIS Reporting'],
  },
  {
    title: 'Graphic Designer & Content Creator',
    dept: 'Marketing & Creative',
    type: 'Full-Time',
    location: 'Noida, UP (Hybrid)',
    exp: '1–3 Years',
    desc: 'Create compelling visual content for social media, brochures, hoardings and digital ads. Develop video content and reels for project launches and brand campaigns.',
    skills: ['Adobe Suite', 'Canva', 'Video Editing', 'Social Media Content', 'Real Estate Branding'],
  },
]

const perks = [
  { Icon: IconCurrency, title: 'Competitive Pay', desc: 'Industry-leading salaries with performance-linked incentives and annual bonuses.' },
  { Icon: IconTrendingUp, title: 'Growth Path', desc: 'Clear career progression with mentorship from senior leadership and industry experts.' },
  { Icon: IconHome, title: 'Employee Discounts', desc: 'Special pricing on Haute properties for employees and their families.' },
  { Icon: IconGraduationCap, title: 'Learning & Development', desc: 'Sponsored certifications, real estate training programs and skill workshops.' },
  { Icon: IconUsers, title: 'Collaborative Culture', desc: 'A team that celebrates wins together — open-door leadership and flat hierarchy.' },
  { Icon: IconMapPin, title: 'Prime Work Location', desc: 'Modern office in Sector 63, Noida — well connected and vibrant work environment.' },
]

const coreValues = [
  { Icon: IconShield, title: 'Integrity First', desc: 'We operate with complete transparency — with clients, partners and our team.' },
  { Icon: IconRocket, title: 'Ambition & Growth', desc: 'We encourage every team member to think big, take ownership, and grow boldly.' },
  { Icon: IconLeaf, title: 'Sustainable Impact', desc: 'Every project we build is designed to enrich communities and improve lives.' },
  { Icon: IconHandshake, title: 'Customer Obsession', desc: 'From site visit to possession, our clients experience world-class service.' },
]

export default function CareersPage() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="careers-hero" aria-label="Careers at Haute Developers">
        <div className="careers-hero-bg" aria-hidden="true" />
        <div className="careers-hero-overlay" aria-hidden="true" />
        <div className="container">
          <div className="careers-hero-content">
            <div className="hero-badge" style={{ marginBottom: '1.5rem' }}>
              <span />
            </div>
            <h1 className="careers-hero-title">
              Build Your Career at<br />
              <em>Haute Developers</em>
            </h1>
            <p className="careers-hero-desc">
              Join a team redefining premium real estate across India. We are looking for passionate,
              driven professionals who want to grow with a company that has been delivering excellence since 2011.
            </p>
            <a href="#open-roles" className="btn-primary" style={{ display: 'inline-flex', marginTop: '0.5rem' }}>
              View Open Roles →
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT WORKING HERE ── */}
      <section className="careers-about" aria-labelledby="careers-about-heading">
        <div className="container">
          <div className="careers-about-grid">
            <div>
              <span className="section-label">About Us</span>
              <h2 id="careers-about-heading">More Than Just a Workplace</h2>
              <div className="divider" />
              <p>
                At Haute Developers, we strongly believe that a home is the most precious asset for anyone.
                Since 2011, we have been building modern, safe, secure and compassionate communities — delivering
                ZEN living experiences through innovative design and sustainable infrastructure.
              </p>
              <p style={{ marginTop: '1rem' }}>
                From premium plotted developments in Noida to India's first AI-enabled township on the
                Delhi–Meerut Expressway, every Haute project reflects our commitment to quality, transparency,
                and community living. We operate across 6+ cities including Noida, Ghaziabad, Greater Noida,
                Dehradun, Vrindavan and Dholera.
              </p>
              <p style={{ marginTop: '1rem' }}>
                When you join Haute Developers, you join a culture that values integrity, ownership, and
                ambition. Our people are our greatest asset — and we invest in them as much as we invest in our projects.
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <div className="careers-stat">
                  <strong>15+</strong>
                  <span>Years of Excellence</span>
                </div>
                <div className="careers-stat">
                  <strong>1000+</strong>
                  <span>Families Served</span>
                </div>
                <div className="careers-stat">
                  <strong>6+</strong>
                  <span>Cities Active</span>
                </div>
              </div>
            </div>

            <div className="careers-values">
              <h3>Our Core Values</h3>
              {coreValues.map(v => (
                <div className="careers-value-card" key={v.title}>
                  <span className="careers-value-icon">
                    <v.Icon size={20} color="var(--gold)" />
                  </span>
                  <div>
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="careers-perks" aria-labelledby="perks-heading">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 540, margin: '0 auto' }}>
            <span className="section-label" style={{ color: 'var(--gold)' }}>Why Join Us</span>
            <h2 id="perks-heading" style={{ color: 'var(--white)' }}>What We Offer</h2>
            <div className="divider" style={{ margin: '1rem auto' }} />
          </div>
          <div className="careers-perks-grid">
            {perks.map((p, i) => (
              <div className="careers-perk-card animate-fade-up" key={p.title} style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="careers-perk-icon">
                  <p.Icon size={22} />
                </span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section className="careers-roles" id="open-roles" aria-labelledby="roles-heading">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
            <span className="section-label">Join the Team</span>
            <h2 id="roles-heading">Open Positions</h2>
            <div className="divider" style={{ margin: '1rem auto' }} />
            <p style={{ color: 'var(--gray)', fontSize: '0.95rem' }}>
              Don't see your role? We're always open to exceptional talent. Reach out directly to
              <a href="mailto:careers@hautedevelopers.com" style={{ color: 'var(--gold)', fontWeight: 600 }}> careers@hautedevelopers.com</a>
            </p>
          </div>

          <div className="careers-roles-list" role="list">
            {roles.map((role, i) => (
              <article
                className="careers-role-card animate-fade-up"
                key={role.title}
                role="listitem"
                style={{ animationDelay: `${i * 0.06}s` }}
                itemScope itemType="https://schema.org/JobPosting"
              >
                <div className="careers-role-header">
                  <div>
                    <span className="careers-role-dept">{role.dept}</span>
                    <h3 itemProp="title">{role.title}</h3>
                    <div className="careers-role-meta">
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <IconLocationDot size={13} /> {role.location}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <IconClock size={13} /> {role.exp}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <IconBriefcase size={13} /> {role.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:careers@hautedevelopers.com?subject=Application: ${encodeURIComponent(role.title)}&body=Hi Haute Developers Team,%0A%0AI would like to apply for the ${encodeURIComponent(role.title)} position.%0A%0APlease find my details below:%0AName:%0APhone:%0AExperience:%0A%0ALooking forward to hearing from you.`}
                    className="btn-primary careers-apply-btn"
                    aria-label={`Apply for ${role.title}`}
                  >
                    Apply Now →
                  </a>
                </div>

                <p className="careers-role-desc" itemProp="description">{role.desc}</p>

                <div className="careers-role-skills">
                  {role.skills.map(s => (
                    <span className="careers-skill-tag" key={s}>{s}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLY CTA ── */}
      <section className="careers-cta" aria-label="Apply to Haute Developers">
        <div className="container">
          <div className="careers-cta-inner">
            <div>
              <h2>Don't See the Right Role?</h2>
              <p>
                We're always on the lookout for talented, driven professionals. Tell us about yourself
                and the role you think you'd excel in — we'd love to hear from you.
              </p>
            </div>
            <a
              href="mailto:careers@hautedevelopers.com?subject=General Application — Haute Developers&body=Hi Haute Developers Team,%0A%0AI'd like to be considered for a role at Haute Developers.%0A%0AName:%0APhone:%0ARole I'm interested in:%0AYears of Experience:%0A%0ALooking forward to connecting."
              className="btn-primary"
            >
              Email Your Application →
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}