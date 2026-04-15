import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ContactForm from "../components/ContactForm";
import CountUp from "../components/CountUp";
import Link from "next/link";
import ProjectSlider from "../components/ProjectSlider";
import TestimonialsSection from "../components/TestimonialsSection";

export const metadata = {
  title: "Haute Developers | Premium Real Estate — Plots, Villas & Apartments in NCR",
  description: "Haute Developers offers premium plots, villas & residential apartments in Noida, Ghaziabad, Dehradun, Vrindavan & Dholera. Delivering excellence since 2011. Invest with Haute.",
  alternates: { canonical: "https://www.hautedevelopers.com" },
};

const projects = [
  { name: "Neelkanth Pinnacle", location: "Dehradun, UK", desc: "Residential project offering 2 & 3 BHK builder floors and apartments launched in 2011 and delivered in 2013 with 200 units.", status: "Delivered", image: "/assets/neelkanth-pinnacle.jpg" },
  { name: "Sailok Society", location: "Dehradun, UK", desc: "Premium 300 Bigha gated township with residential plots, fully developed and delivered in 2014.", status: "Delivered", image: "/assets/sailok-society.jpg" },
  { name: "Shiv Shakti Enclave", location: "Sector 79, Noida", desc: "A successfully delivered 55 Bigha gated township offering well-planned residential plots with a secure living environment since 2015.", status: "Delivered", image: "/assets/shiv-shakti-enclave.png" },
  { name: "Signature Homes", location: "Govindpuram, Ghaziabad", desc: "800+ freehold 1 & 2 BHK apartments, completed and delivered in 2017 with strong infrastructure and a thriving community.", status: "Delivered", image: "/assets/signature-homes.jpg" },
  { name: "East Avenue Society", location: "Sector 72 & 73, Noida", desc: "A premium residential project featuring 1200+ freehold 2 & 3 BHK apartments, delivered in 2019.", status: "Delivered", image: "/assets/east-avenue-society.jpg" },
  { name: "Aashiyana Homes", location: "Vill. Basai, Sector 70, Noida", desc: "2 & 3 BHK freehold builder floor apartments, successfully delivered in 2020, offering quality construction and modern living.", status: "Delivered", image: "/assets/aashiyana-homes.png" },
  { name: "Neelkanth Villa", location: "Sadullahpur, Sector 10, Greater Noida West", desc: "3 BHK freehold duplex villas in a secure gated community, offering prime location advantage and luxurious living.", status: "Ongoing", image: "/assets/neelkanth-villa.jpg" },
];

const IconMapPin = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);
const IconShield = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7L12 2z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);
const IconTrendingUp = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);
const IconAward = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="6"/>
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
  </svg>
);
const IconUsers = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconTelescope = ({ size = 28, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="2"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
  </svg>
);
const IconTarget = ({ size = 28, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);
const IconPhone = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconMail = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const whyCards = [
  { num: "01", Icon: IconMapPin, title: "Prime Locations", desc: "High-growth zones with excellent connectivity and future appreciation potential." },
  { num: "02", Icon: IconShield, title: "Trusted & Transparent", desc: "Clear documentation, well-planned layouts, and complete transparency at every stage." },
  { num: "03", Icon: IconTrendingUp, title: "Smart ROI", desc: "Projects designed for end-users and investors, ensuring strong long-term value." },
  { num: "04", Icon: IconAward, title: "Quality Development", desc: "Superior infrastructure, modern planning, and well-defined amenities." },
  { num: "05", Icon: IconUsers, title: "Customer-Centric", desc: "Personalized support from site visit to possession — a hassle-free journey." },
];

// Ongoing = green badge | Upcoming = amber badge
const upcomingProjects = [
  {
    name: "Expressway Residency",
    location: "Ghaziabad",
    status: "upcoming",
    href: "/expressway-residency",
    desc: "Delhi NCR's first AI-enabled township on the Delhi–Meerut Expressway...",
    image: "/assets/expressway.png",
  },
  {
    name: "Haute Grand City",
    location: "Near Duhai Metro, Ghaziabad",
    status: "upcoming",
    href: "/haute-grand-city",   // no dedicated page yet → send to contact
    desc: "Premium township offering spacious plots...",
    image: "/assets/hgc-front.png",
  },
  {
    name: "Haute world City",
    location: "Dholera",
    status: "Upcoming",
    href: "/haute-world-city",
    desc: "A landmark investment opportunity in Dholera Smart City...",
    image: "/assets/dholera.png",
  },
  {
    name: "Haute Residency",
    location: "Vrindavan",
    status: "Upcoming",
    href: "/haute-residency",
    desc: "A serene residential retreat in the sacred city of Vrindavan...",
    image: "/assets/vrindavan.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero" aria-label="Hero section">
        <div className="hero-slides" aria-hidden="true">
          <div className="hero-slide hero-slide--1" />
          <div className="hero-slide hero-slide--2" />
          <div className="hero-slide hero-slide--3" />
        </div>
        <div className="hero-img-overlay" aria-hidden="true" />
        <div className="hero-bottom-shadow" aria-hidden="true" />
        <div className="hero-bg-pattern" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content hero-content--new">
          <div className="hero-col-title">
            <h1 className="hero-title">
              <span className="line line-1">
                Welcome to <em>Haute</em>,
              </span>
              <br />
              <span className="line line-2">
                Welcome to <em>Haute Living.</em>
              </span>
            </h1>
            <p className="hero-desc--stacked" style={{ marginTop: "1.2rem" }}>
              Premium residential and investment opportunities designed for
              modern lifestyles — across Delhi NCR, Vrindavan, Dholera &
              Dehradun.
            </p>
          </div>
          <div className="hero-col-btns">
            <div className="hero-actions">
              <Link href="/#upcoming" className="btn-primary">
                Explore Projects →
              </Link>
              <Link href="/#contact" className="btn-outline">
                Get a Callback
              </Link>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="stats-strip" aria-label="Company statistics">
        <div className="stats-strip-inner">
          {[
            { end: "500", suffix: "+", label: "Acres of Prime Land" },
            { end: "15", suffix: "+", label: "Masterpieces" },
            { end: "7", suffix: "+", label: "Cities" },
            { end: "5000", suffix: "+", label: "Happy Families" },
          ].map((s, i) => (
            <>
              {i > 0 && (
                <div
                  className="stats-strip-divider"
                  key={`div-${i}`}
                  aria-hidden="true"
                />
              )}
              <div className="stats-strip-item" key={s.label}>
                <div className="stats-strip-inner-cell">
                  <div className="stats-strip-num">
                    <CountUp end={s.end} suffix={s.suffix} duration={2000} />
                  </div>
                  <div className="stats-strip-label">{s.label}</div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about" id="about" aria-labelledby="about-heading">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual animate-fade-up">
              <div
                className="about-img-frame"
                style={{ padding: 0, overflow: "hidden", borderRadius: "20px" }}
              >
                <img
                  src="/assets/meeting.png"
                  alt="Haute Developers team planning premium real estate projects"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "380px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div className="about-accent-box">
                <span>Delivering Since</span>
                <strong>2011</strong>
              </div>
            </div>
            <div className="about-content animate-fade-up-1">
              <span className="section-label">Company Overview</span>
              <h2 id="about-heading">Building homes that you Love! </h2>
              <div className="divider" />
              <p>
                At Haute Developers, we believe a home is life's most valuable
                asset. We create modern, secure, and thoughtfully designed
                communities — delivering ZEN living experiences through
                innovative architecture and sustainable development since 2011.
              </p>

              <p style={{ marginTop: "1.2rem" }}>
                In the core of everything that we do, the ultimate goal is to
                consistently innovate in design, construction and approach to be
                a top choice for our new residents who join us through our
                projects and provide not just home but a lifestyle living that
                you love and create lifelong memories with family and community.
              </p>

              <p style={{ marginTop: "1.2rem" }}>
                Explore our highly curated upcoming new generation projects and
                schedule a visit to learn more about the projects.
              </p>
              <div style={{ marginTop: "1.8rem" }}>
                <Link href="/#contact" className="btn-dark">
                  Talk to Our Team →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section
        style={{ background: "var(--cream)", padding: "6rem 0" }}
        aria-labelledby="vm-heading"
      >
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: 580,
              margin: "0 auto 4rem",
            }}
          >
            <span className="section-label">Our Purpose</span>
            <h2 id="vm-heading" style={{ lineHeight: 1.2 }}>
              The <em style={{ color: "var(--gold)" }}>Vision & Mission</em>{" "}
              Behind Every Home We Build
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ lineHeight: 1.8 }}>
              At Haute Developers, every brick we lay is guided by a clear
              purpose — to create communities that enrich lives.
            </p>
          </div>

          {/* GRID FIXED */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* VISION CARD */}
            <div
              style={{
                background:
                  "linear-gradient(145deg, var(--forest-dark), var(--forest))",
                padding: "4rem 3rem",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <IconTelescope size={32} color="var(--gold)" />

              <p
                style={{
                  marginTop: "1.5rem",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  color: "var(--gold)",
                }}
              >
                OUR VISION
              </p>

              <h3
                style={{
                  fontSize: "clamp(1.9rem, 2.5vw, 2.4rem)",
                  lineHeight: 1.3,
                  color: "#fff",
                  marginTop: "1rem",
                  maxWidth: "360px",
                }}
              >
                Redefining Modern Living Across India
              </h3>

              <p
                style={{
                  marginTop: "1.5rem",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.7)",
                  maxWidth: "420px",
                }}
              >
                To be India's most trusted real estate developer — delivering
                premium, sustainable, and community-first residential projects
                across every city we enter.
              </p>
            </div>

            {/* MISSION CARD */}
            <div
              style={{
                background:
                  "linear-gradient(145deg, var(--gold), var(--gold-light))",
                padding: "4rem 3rem",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <IconTarget size={32} color="white" />

              <p
                style={{
                  marginTop: "1.5rem",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                OUR MISSION
              </p>

              <h3
                style={{
                  fontSize: "clamp(1.9rem, 2.5vw, 2.4rem)",
                  lineHeight: 1.3,
                  color: "#fff",
                  marginTop: "1rem",
                  maxWidth: "360px",
                }}
              >
                Homes Built on Trust, Transparency & Value
              </h3>

              <p
                style={{
                  marginTop: "1.5rem",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.9)",
                  maxWidth: "420px",
                }}
              >
                To provide value-driven real estate solutions that prioritise
                transparency, customer satisfaction, and long-term community
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section
        id="why-us"
        aria-labelledby="why-heading"
        style={{
          background: "#f7f4ef",
          padding: "4rem 0 7rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top border separator */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #c4901a, transparent)",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              textAlign: "center",
              maxWidth: 560,
              margin: "0 auto 4rem",
            }}
          >
            <span className="section-label">Why Choose Us</span>
            <h2 id="why-heading">Why Haute Developers?</h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--gray)",
                lineHeight: 1.8,
              }}
            >
              Fifteen years of excellence, thousands of happy families, and a
              promise that never wavers.
            </p>
          </div>

          {/* Cards */}
          <div
            className="vm-section-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              border: "1px solid #e0d5c0",
              borderRadius: "20px",
              overflow: "hidden",
              background: "#e0d5c0",
              gap: "1px",
            }}
            role="list"
          >
            {whyCards.map((c, i) => (
              <article
                key={c.title}
                role="listitem"
                style={{
                  background: i === 2 ? "var(--forest)" : "#fffef9",
                  padding: "2.2rem 1.5rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  position: "relative",
                }}
              >
                {/* Ghost number */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1.2rem",
                    fontFamily: "var(--font-display)",
                    fontSize: "3.5rem",
                    fontWeight: 700,
                    color: i === 2 ? "rgba(201,144,26,0.15)" : "#ede8df",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {c.num}
                </div>

                {/* Gold top line */}
                <div
                  style={{
                    width: "32px",
                    height: "2px",
                    background: "var(--gold)",
                    borderRadius: "2px",
                  }}
                />

                {/* Icon box */}
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    border: `1px solid ${i === 2 ? "rgba(201,144,26,0.5)" : "#e0d5c0"}`,
                    background: i === 2 ? "rgba(201,144,26,0.2)" : "#fdf5e0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <c.Icon size={22} color="var(--gold)" />
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: i === 2 ? "#fff" : "var(--charcoal)",
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {c.title}
                </h4>

                {/* Desc */}
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: i === 2 ? "rgba(255,255,255,0.55)" : "var(--gray)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {c.desc}
                </p>

                {/* Bottom gold bar for featured card */}
                {i === 2 && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "55%",
                      height: "2px",
                      background:
                        "linear-gradient(90deg, transparent, var(--gold), transparent)",
                    }}
                  />
                )}
              </article>
            ))}
          </div>

          {/* Footer strip */}
          <div
            style={{
              marginTop: "2rem",
              background: "#fff",
              border: "1px solid #e0d5c0",
              borderRadius: "14px",
              padding: "1.4rem 2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                fontStyle: "italic",
                color: "var(--gray)",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Backed by{" "}
              <strong style={{ color: "var(--gold)", fontStyle: "normal" }}>
                15+ years
              </strong>{" "}
              of trust and{" "}
              <strong style={{ color: "var(--gold)", fontStyle: "normal" }}>
                5000+ families
              </strong>{" "}
              who call Haute home.
            </p>
            <Link
              href="/#contact"
              className="btn-dark"
              style={{ flexShrink: 0 }}
            >
              Start Your Journey →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        className="projects"
        id="projects"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/delivered-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            opacity: 0.9,
            zIndex: 0,
          }}
        />

        {/* Soft overlay to keep text crisp */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(247,244,239,0.3) 0%, rgba(247,244,239,0.1) 50%, rgba(247,244,239,0.35) 100%)",
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="projects-header">
            <div>
              <span className="section-label">Project Portfolio</span>
              <h2>Our Delivered Masterpieces</h2>
              <div className="divider" />
            </div>
          </div>
          <ProjectSlider projects={projects} />
        </div>
      </section>

      {/* ── UPCOMING / ONGOING LAUNCHES ── */}
      <section className="upcoming" id="upcoming">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
            <span className="section-label" style={{ color: "var(--gold)" }}>
              Upcoming Launches
            </span>
            <h2>New Projects, New Opportunities</h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
          </div>
          <div className="projects-grid">
            {upcomingProjects.map((p) => (
              <article className="project-card" key={p.name}>
                <div className="project-card-img">
                  <img src={p.image} alt={p.name} />
                  <div className="project-card-img-overlay" />
                  <span className="project-location-badge">{p.location}</span>
                  {/*
                    status-delivered = green (reusing existing CSS)
                    status-upcoming  = amber (existing CSS)
                  */}
                  <span
                    className={`project-status-badge ${p.status === "Ongoing" ? "status-delivered" : "status-upcoming"}`}
                  >
                    {p.status}
                  </span>
                  <div className="project-card-title-overlay">
                    <h3>{p.name}</h3>
                  </div>
                </div>
                <div className="project-card-body">
                  <p>{p.desc}</p>
                  <div className="project-card-footer">
                    <a href={p.href} className="project-detail-btn">
                      <div className="project-detail-btn-left">
                        <div className="project-detail-btn-dot"></div>
                        <span className="project-detail-btn-text">
                          View Details
                        </span>
                      </div>
                      <div className="project-detail-btn-arrow">→</div>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPRESSWAY RESIDENCY FEATURE ── */}
      <section className="expressway" aria-labelledby="expressway-heading">
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: 600,
              margin: "0 auto 3rem",
            }}
          >
            <span className="section-label" style={{ color: "var(--gold)" }}>
              Featured Project
            </span>
            <h2 id="expressway-heading" style={{ color: "var(--charcoal)" }}>
              Expressway Residency
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
          </div>
          <div
            style={{
              background: "var(--white)",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(201,144,26,0.15)",
              boxShadow: "0 8px 48px rgba(26,74,58,0.1)",
            }}
          >
            <div
              style={{
                position: "relative",
                height: "420px",
                overflow: "hidden",
              }}
            >
              <img
                src="/assets/expressway-front.png"
                alt="Expressway Residency — Delhi NCR's first AI-enabled township in Ghaziabad"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.85) 28%, rgba(0,0,0,0.5) 52%, rgba(0,0,0,0.15) 70%, transparent 85%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(201,144,26,0.28) 0%, rgba(201,144,26,0.1) 30%, transparent 55%)",
                  pointerEvents: "none",
                  mixBlendMode: "screen",
                }}
              />
              <div
                style={{ position: "absolute", top: "1.2rem", left: "1.2rem" }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    background: "rgba(201,144,26,0.92)",
                    color: "white",
                    padding: "0.3rem 0.9rem",
                    borderRadius: "999px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                  }}
                >
                  <IconMapPin size={13} color="white" /> Ghaziabad, NCR
                </span>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "1.2rem",
                  left: "1.4rem",
                }}
              >
                <p
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Delhi–Meerut Expressway, NE-3, Ghaziabad 201206
                </p>
              </div>
            </div>
            <div style={{ padding: "2.5rem 2.8rem 2.8rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                  fontWeight: 600,
                  color: "var(--charcoal)",
                  marginBottom: "0.8rem",
                  fontStyle: "italic",
                  letterSpacing: "0.01em",
                  lineHeight: 1.2,
                }}
              >
                Delhi NCR's First{" "}
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
                  AI-Enabled
                </em>{" "}
                Township
              </h3>
              <p
                style={{
                  color: "var(--gray)",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  marginBottom: "1.6rem",
                  maxWidth: "780px",
                }}
              >
                Expressway Residency is an upcoming premium township
                spread across 100 acres on the Delhi–Meerut Expressway,
                Ghaziabad. Featuring 500+ luxury villas and 450 plotted units,
                it offers 50+ world-class amenities including 8 themed parks, a
                2700 sq yd clubhouse, underground utilities, and 24×7 smart
                surveillance — all just 20 minutes from Akshardham.
              </p>
              <div
                style={{
                  height: "1px",
                  background: "rgba(201,144,26,0.15)",
                  marginBottom: "2rem",
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
                >
                  {[
                    {
                      num: "100",
                      suffix: "",
                      unit: "Acres",
                      label: "Total Area",
                    },
                    {
                      num: "500",
                      suffix: "+",
                      unit: "Villas",
                      label: "Premium Units",
                    },
                    {
                      num: "450",
                      suffix: "",
                      unit: "Plots",
                      label: "Plotted Units",
                    },
                  ].map((s) => (
                    <div
                      key={s.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.7rem",
                        background: "var(--cream)",
                        border: "1.5px solid rgba(201,144,26,0.25)",
                        borderRadius: "999px",
                        padding: "0.55rem 1.2rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.4rem",
                          fontWeight: 700,
                          color: "var(--forest)",
                          lineHeight: 1,
                        }}
                      >
                        <CountUp
                          end={s.num}
                          suffix={s.suffix}
                          duration={2000}
                        />{" "}
                        <small
                          style={{ fontSize: "0.9rem", color: "var(--gold)" }}
                        >
                          {s.unit}
                        </small>
                      </span>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          color: "var(--gray)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          fontWeight: 600,
                        }}
                      >
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
                <Link href="/#contact" className="btn-primary">
                  Book a Site Visit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection />

      {/* ── CONTACT + MAP ── */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        style={{
          background: "var(--cream)",
          padding: "5rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(201,144,26,0.04) 0, rgba(201,144,26,0.04) 1px, transparent 0, transparent 50%)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(201,144,26,0.13) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(201,144,26,0.09) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              textAlign: "center",
              maxWidth: 600,
              margin: "0 auto 3rem",
            }}
          >
            <span className="section-label" style={{ color: "var(--gold)" }}>
              Get In Touch
            </span>
            <h2 id="contact-heading" style={{ color: "var(--charcoal)" }}>
              Let's Find Your{" "}
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
                Perfect Home
              </em>
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ color: "var(--gray)", fontSize: "0.95rem" }}>
              Visit us, call us, or fill in the form — our team is ready to
              guide you every step of the way.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              alignItems: "start",
            }}
          >
            {/* LEFT col */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Map */}
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(201,144,26,0.25)",
                  position: "relative",
                  height: "300px",
                }}
              >
                <div/>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3!2d77.3793752!3d28.6245126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef7d9d90e765%3A0x6fb20d3fc097c88!2sHaute%20Developers!5e0!3m2!1sen!2sin!4v1700000000000"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Haute Developers Corporate Office Location"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: 0,
                    display: "block",
                    filter: "saturate(0.8) contrast(1.05)",
                  }}
                />
              </div>

              {/* BOX 1 — both addresses */}
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(201,144,26,0.25)",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                {/* Corporate */}
                <div
                  style={{
                    padding: "1.4rem 1.6rem",
                    position: "relative",
                    borderBottom: "1px solid rgba(201,144,26,0.15)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: "3px",
                      background:
                        "linear-gradient(to bottom, var(--gold), rgba(201,144,26,0.2))",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        flexShrink: 0,
                        background: "rgba(201,144,26,0.12)",
                        border: "1px solid rgba(201,144,26,0.3)",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconMapPin size={18} color="var(--gold)" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                          marginBottom: "0.3rem",
                        }}
                      >
                        Corporate Office
                      </div>
                      <div
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--charcoal)",
                          fontWeight: 600,
                          lineHeight: 1.4,
                        }}
                      >
                        Ground Floor, H-214, Sector 63
                      </div>
                      <div
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--gray)",
                          lineHeight: 1.5,
                        }}
                      >
                        Noida, Uttar Pradesh 201301
                      </div>
                    </div>
                  </div>
                </div>
                {/* Branch */}
                <div style={{ padding: "1.4rem 1.6rem", position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: "3px",
                      background:
                        "linear-gradient(to bottom, rgba(201,144,26,0.6), rgba(201,144,26,0.1))",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        flexShrink: 0,
                        background: "rgba(201,144,26,0.08)",
                        border: "1px solid rgba(201,144,26,0.2)",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconMapPin size={18} color="rgba(201,144,26,0.7)" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "rgba(201,144,26,0.7)",
                          marginBottom: "0.3rem",
                        }}
                      >
                        Branch Office
                      </div>
                      <div
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--charcoal)",
                          fontWeight: 600,
                          lineHeight: 1.4,
                        }}
                      >
                        A-322, T-3, NX One
                      </div>
                      <div
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--gray)",
                          lineHeight: 1.5,
                        }}
                      >
                        Greater Noida West, 201318
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOX 2 — phone & email, CSS-only hover via .contact-link class */}
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(201,144,26,0.2)",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                {/* Phone row */}
                <div
                  style={{
                    padding: "1.2rem 1.6rem",
                    borderBottom: "1px solid rgba(201,144,26,0.12)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        flexShrink: 0,
                        background: "rgba(201,144,26,0.08)",
                        border: "1px solid rgba(201,144,26,0.25)",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconPhone size={17} color="var(--gold)" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "rgba(201,144,26,0.7)",
                          marginBottom: "0.2rem",
                        }}
                      >
                        Phone
                      </div>
                      <a href="tel:+918383073291" className="contact-link">
                        +91 83830 73291
                      </a>
                    </div>
                  </div>
                </div>
                {/* Email row */}
                <div style={{ padding: "1.2rem 1.6rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        flexShrink: 0,
                        background: "rgba(201,144,26,0.1)",
                        border: "1px solid rgba(201,144,26,0.25)",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconMail size={17} color="var(--gold)" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "rgba(201,144,26,0.7)",
                          marginBottom: "0.2rem",
                        }}
                      >
                        Email
                      </div>
                      <a
                        href="mailto:support@hautedevelopers.com"
                        className="contact-link"
                      >
                        support@hautedevelopers.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Directions */}
              <a
                href="https://maps.google.com/?q=Haute+Developers+Sector+63+Noida"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  background:
                    "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)",
                  color: "var(--forest-dark)",
                  padding: "0.9rem 1.5rem",
                  borderRadius: "12px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(201,144,26,0.3)",
                }}
              >
                <span>Get Directions</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* RIGHT col */}
            <div>
              <ContactForm darkMode={false} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}