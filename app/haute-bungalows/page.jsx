// Place this file at: app/haute-bungalow/page.jsx
// PROJECT_SLUG in lib/haute-bungalow-estate.js must match this folder name ("haute-bungalow").

import Navbar from "../../components/Navbar";
import PopupLeadModal from "../../components/PopupLeadModal";
import SitePlanLightbox from "../../components/SitePlanLightbox";
import BungalowFAQ from "../../components/BungalowFAQ";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import ContactForm from "../../components/ContactForm";
import ExpresswayBlog from "../../components/ExpresswayBlog";
import ExpresswayHighlightItem from "../../components/ExpresswayHighlightItem";
import {
  PROJECT_NAME,
  PAGE_URL,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  MAP_EMBED_URL,
  images,
  faqs,
} from "../../lib/haute-bungalow-estate";
import "../mobile-pages.css";

/* ─────────────────────────────────────────
   SEO METADATA
   Primary keywords: luxury bungalows Ghaziabad, bungalows on Delhi Meerut Expressway,
   8 BHK bungalow Ghaziabad, 1 acre bungalow NCR, bungalow plots Ghaziabad
───────────────────────────────────────── */
export const metadata = {
  title: `Luxury Bungalows in Ghaziabad | ${PROJECT_NAME}`,
  description:
    "441 luxury bungalows on 450 acres, Delhi–Meerut Expressway, Ghaziabad. 8 BHK from ₹6.5 Cr, plots from ₹27,000/sq yd. Book a site visit.",
  keywords: [
    PROJECT_NAME,
    "luxury bungalows Ghaziabad",
    "bungalows on Delhi Meerut Expressway",
    "luxury bungalow project Delhi NCR",
    "first bungalow project in Delhi NCR",
    "8 BHK bungalow Ghaziabad",
    "8 BHK luxury bungalow NCR",
    "1 acre bungalow Delhi NCR",
    "bungalow plots Ghaziabad",
    "independent bungalows Ghaziabad",
    "luxury villas Ghaziabad",
    "private garden bungalow NCR",
    "bungalows near Hawa Hawai Ghaziabad",
    "NE-3 Ghaziabad bungalows",
    "DME corridor bungalows",
    "Haute World Developers bungalows",
    "luxury plots Delhi Meerut Expressway",
  ].join(", "),
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${PROJECT_NAME} – 441 Luxury Bungalows on the Delhi–Meerut Expressway`,
    description:
      "450 acres, only 441 bungalows. 8 BHK luxury bungalow with 1,500 sq yd private garden from ₹6.5 Cr. One-acre bungalow at ₹16 Cr. By Haute World Developers.",
    url: PAGE_URL,
    siteName: "Haute World Developers",
    ...(images.og.startsWith("http")
      ? {
          images: [
            {
              url: images.og,
              width: 1200,
              height: 630,
              alt: `${PROJECT_NAME} luxury bungalows – Delhi–Meerut Expressway, Ghaziabad`,
            },
          ],
        }
      : {}),
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROJECT_NAME} | Luxury Bungalows, Delhi–Meerut Expressway`,
    description:
      "441 bungalows on 450 acres. 8 BHK luxury bungalow from ₹6.5 Cr, 1 acre bungalow ₹16 Cr, plots from ₹27,000/sq yd.",
    ...(images.og.startsWith("http") ? { images: [images.og] } : {}),
  },
};

/* ─────────────────────────────────────────
   SVG ICON COMPONENTS
───────────────────────────────────────── */
const IconCheck = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconTree = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22v-7" /><path d="M9 15H5l7-7 7 7h-4" /><path d="M7 11H3l9-9 9 9h-4" />
  </svg>
);
const IconBuilding = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6" /><path d="M9 13h6" /><path d="M9 17h6" />
  </svg>
);
const IconHome = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 11l9-8 9 8" /><path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
  </svg>
);
const IconLayout = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="12" y1="3" x2="12" y2="21" /><line x1="3" y1="12" x2="21" y2="12" />
  </svg>
);

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

const advantages = [
  "Launched as the first bungalow project in Delhi NCR",
  "Only 441 bungalows across 450 acres for a truly low-density estate",
  "8 BHK luxury bungalows with up to 1,500 sq. yd. of private garden",
  "Choose a plot only, a bungalow, or a one-acre estate",
  "Delhi–Meerut Expressway (NE-3) address in Ghaziabad",
  "Transparent per sq. yd. pricing, clearly published",
  "End-to-end guidance from site visit to registration",
  "Developed by Haute World Developers, delivering since 2011",
];

const layoutStats = [
  { Icon: IconLayout, value: "450", label: "Acres of Total Land" },
  { Icon: IconHome, value: "441", label: "Bungalows Only" },
  { Icon: IconBuilding, value: "2,000", label: "Sq. Yd. Plot Area (8 BHK)" },
  { Icon: IconTree, value: "1,500", label: "Sq. Yd. Private Garden" },
];

// TODO: confirm these distances for the exact site of this project before launch.
const proximityBullets = [
  "Close to NH-24, Delhi–Hapur Expressway",
  "7 Minutes from Lalkuan Ghaziabad",
  "15 Minutes from Sector 62 Noida",
  "25 Minutes from Akshardham Metro Station",
  "15 Minutes from Ghaziabad Railway Station",
  "7 Minutes from Bhojpur Industrial Area",
  "15 Minutes from Indirapuram, Ghaziabad",
  "30 Minutes from Hindon Airport",
];

const projectHighlights = [
  { title: "450-Acre Bungalow Estate", body: "A single, master-planned 450-acre development on the Delhi–Meerut Expressway in Ghaziabad." },
  { title: "Only 441 Bungalows", body: "A limited, low-density collection of independent bungalows, so privacy and space are never compromised." },
  { title: "First Bungalow Project in Delhi NCR", body: "Launched by Haute World Developers as the first bungalow project of its kind in Delhi NCR." },
  { title: "8 BHK Luxury Bungalow", body: "A 2,000 sq. yd. plot with 500 sq. yd. of construction area and a 1,500 sq. yd. private garden." },
  { title: "One-Acre Bungalow Option", body: "For those who want an estate-scale home, a one-acre bungalow with a private garden is available." },
  { title: "Plot-Only Option", body: "Buy the plot alone and design your own bungalow, with transparent per sq. yd. pricing." },
  { title: "Expressway Frontage Location", body: "On the Delhi–Meerut Expressway (NE-3) near Hawa Hawai, with direct links to Delhi, Noida, Ghaziabad and Meerut." },
  { title: "Trusted Developer Since 2011", body: "Haute World Developers has delivered premium communities across NCR for over 15 years and more than 5,000 families." },
];

const priceCards = [
  {
    label: "Plot Only",
    value: "₹27,000",
    unit: "per sq. yd.",
    note: "Buy the land and build your own bungalow. Rate effective 20 November 2026.",
  },
  {
    label: "Bungalow",
    value: "₹34,000",
    unit: "per sq. yd.",
    note: "Bungalow package rate. Rate effective 20 November 2026.",
  },
  {
    label: "8 BHK Luxury Bungalow",
    value: "₹6.5 Cr",
    unit: "launch price from 11 Nov 2026",
    note: "2,000 sq. yd. plot, 1,500 sq. yd. private garden and 500 sq. yd. construction area.",
  },
  {
    label: "1 Acre Bungalow",
    value: "₹16 Cr",
    unit: "with private garden",
    note: "One acre of land with a private garden, for those who want estate-scale living.",
  },
];

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function HauteBungalowsPage() {
  const hasMap = MAP_EMBED_URL.startsWith("http");

  return (
    <>
      <Navbar />
      <PopupLeadModal pageName={PROJECT_NAME} projectName={`${PROJECT_NAME}, Delhi–Meerut Expressway, Ghaziabad`} />

      {/* ══════════════════════════════════════════
          RESPONSIVE STYLES
          Scoped to .er-* classes (same classes as Expressway Residency)
          so nothing bleeds into global styles.
      ══════════════════════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700&display=swap');

        /* ── Two-col grids ── */
        .er-2col      { display: grid; grid-template-columns: 1fr 1fr;      gap: 4rem; align-items: start; }
        .er-2col-map  { display: grid; grid-template-columns: 1fr 1.15fr;   gap: 4rem; align-items: center; }

        /* ── About image ── */
        .er-about-img-wrap { border-radius: 20px; overflow: hidden; height: 420px; box-shadow: 0 8px 40px rgba(26,74,58,0.08); background: var(--cream); }
        .er-about-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
        @media (max-width: 900px) { .er-about-img-wrap { height: 300px; } }

        /* ── Location/route image (fits without cropping) ── */
        .er-route-img-wrap { border-radius: 20px; overflow: hidden; height: auto; background: var(--white); box-shadow: 0 8px 40px rgba(0,0,0,0.25); }
        .er-route-img-wrap img { width: 100%; height: auto; object-fit: contain; display: block; }

        /* ── Project Highlights ── */
        .er-highlight-grid { display: grid; grid-template-columns: 1fr; gap: 1px; background: rgba(13,47,36,0.08); border: 1px solid rgba(13,47,36,0.08); margin-top: 2.5rem; }
        .er-highlight-item { background: var(--white); padding: 1.5rem 1.6rem; display: flex; gap: 1rem; align-items: flex-start; }
        .er-highlight-mark { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--forest); color: #fff; display: flex; align-items: center; justify-content: center; }
        .er-highlight-item h3 { font-family: 'Playfair Display', Georgia, serif; font-weight: 500; font-size: 1.08rem; margin: 0 0 0.4rem; color: var(--charcoal); -webkit-text-stroke: 0.4px currentColor; }
        .er-highlight-item p { margin: 0; font-size: 0.85rem; color: var(--gray); line-height: 1.6; }
        @media (min-width: 768px) { .er-highlight-grid { grid-template-columns: 1fr 1fr; } }

        /* ── Pricing cards ── */
        .er-price-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-top: 2.5rem; }
        .er-price-card { background: linear-gradient(155deg, var(--forest-dark) 0%, var(--forest) 100%); border: 1px solid rgba(201,144,26,0.25); border-radius: 20px; padding: 2rem 1.6rem; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 0.45rem; box-shadow: 0 16px 44px rgba(13,47,36,0.22); }
        .er-price-label { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold-pale); }
        .er-price-value { font-size: clamp(2rem, 3.2vw, 2.5rem); font-weight: 700; color: #fff; line-height: 1.1; margin-top: 0.3rem; }
        .er-price-unit { font-size: 0.84rem; color: var(--gold-pale); font-weight: 600; }
        .er-price-note { margin: 0.7rem 0 0; font-size: 0.82rem; color: rgba(255,255,255,0.68); line-height: 1.65; }
        .er-price-foot { text-align: center; margin: 1.6rem auto 0; max-width: 720px; font-size: 0.8rem; color: var(--gray); line-height: 1.7; }
        @media (min-width: 640px) { .er-price-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1100px) { .er-price-grid { grid-template-columns: repeat(4, 1fr); } }

        /* ── Key Advantages card ── */
        .er-adv-card {
          position: relative;
          background: linear-gradient(155deg, var(--forest-dark) 0%, var(--forest) 100%);
          border-radius: 24px;
          padding: 2.6rem 2.2rem;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(13,47,36,0.35), inset 0 1px 0 rgba(255,255,255,0.06);
          border: 1px solid rgba(201,144,26,0.25);
        }
        .er-adv-card::before {
          content: '';
          position: absolute; top: -120px; right: -100px;
          width: 340px; height: 340px;
          background: radial-gradient(circle closest-side, rgba(201,144,26,0.22) 0%, transparent 100%);
          pointer-events: none;
        }
        .er-adv-card::after {
          content: '';
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0, rgba(255,255,255,0.025) 1px, transparent 0, transparent 50%);
          background-size: 34px 34px;
          pointer-events: none;
        }
        .er-adv-eyebrow {
          position: relative; z-index: 1;
          font-family: var(--font-body); font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold-pale);
          opacity: 0.85; margin-bottom: 0.6rem; display: block;
        }
        .er-adv-title {
          position: relative; z-index: 1;
          font-family: 'Playfair Display', Georgia, serif; font-style: italic; font-weight: 600;
          font-size: 1.65rem; color: #fff; margin-bottom: 1.6rem;
        }
        .er-adv-list { position: relative; z-index: 1; display: flex; flex-direction: column; }
        .er-adv-row {
          display: flex; align-items: flex-start; gap: 1.1rem;
          padding: 0.95rem 0; border-bottom: 1px solid rgba(255,255,255,0.09);
          transition: padding-left 0.3s ease;
        }
        .er-adv-row:last-child { border-bottom: none; }
        .er-adv-row:hover { padding-left: 0.4rem; }
        .er-adv-num {
          flex-shrink: 0; font-family: var(--font-display); font-weight: 700;
          font-size: 1rem; color: var(--gold); min-width: 26px;
          opacity: 0.9;
        }
        .er-adv-row p {
          margin: 0; font-size: 0.92rem; color: rgba(255,255,255,0.88);
          line-height: 1.6; font-weight: 500;
        }

        /* ── Scroll reveal ── */
        .er-block-anim { opacity: 0; transform: translateY(20px); transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1); }
        .er-block-anim.er-inview-item { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) {
          .er-block-anim { opacity: 1 !important; transform: none !important; transition: none !important; }
        }

        /* ── Layout stats (site plan) ── */
        .er-highlights { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: 2rem; }

        /* ── FAQ — full-bleed video background (same as Expressway Residency), card floats on top ── */
        .er-faq-section { position: relative; overflow: hidden; padding: clamp(4rem, 8vw, 6rem) 0; background: var(--forest-dark); }
        .er-faq-video   { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .er-faq-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(13,47,36,0.55) 0%, rgba(13,47,36,0.35) 40%, rgba(13,47,36,0.12) 70%, rgba(13,47,36,0) 100%); }
        .er-faq-inner   { position: relative; z-index: 1; }
        .er-faq-heading { color: #fff; font-size: clamp(1.9rem, 4vw, 2.8rem); margin: 0.6rem 0 2.2rem; line-height: 1.15; }

        .er-faq-box  { max-width: 620px; border-radius: 18px; overflow: hidden; background: var(--white); box-shadow: 0 20px 60px rgba(0,0,0,0.35); }
        .er-faq-row  { border-bottom: 1px solid rgba(201,144,26,0.14); }
        .er-faq-row:last-child { border-bottom: none; }
        .er-faq-btn  { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.15rem 1.5rem; background: none; border: none; cursor: pointer; text-align: left; }
        .er-faq-q    { font-family: var(--font-body); font-weight: 600; font-size: 0.95rem; color: var(--charcoal); }
        .er-faq-a    { padding: 0 1.5rem 1.35rem; font-size: 0.87rem; color: var(--gray); line-height: 1.75; }

        @media (max-width: 640px) {
          .er-faq-overlay { background: linear-gradient(to bottom, rgba(13,47,36,0.55) 0%, rgba(13,47,36,0.72) 100%); }
        }

        /* ── Map placeholder (shown until MAP_EMBED_URL is pasted) ── */
        .er-map-empty { width: 100%; height: 100%; min-height: 340px; display: flex; align-items: center; justify-content: center; text-align: center; padding: 1.5rem; color: var(--gray); font-size: 0.88rem; }

        /* ══════════════════════════
           TABLET  ≤ 900px
        ══════════════════════════ */
        @media (max-width: 900px) {
          .er-2col,
          .er-2col-map  { grid-template-columns: 1fr; gap: 2.5rem; }
          .er-highlights{ grid-template-columns: repeat(2, 1fr); }
        }

        /* ══════════════════════════
           MOBILE  ≤ 600px
        ══════════════════════════ */
        @media (max-width: 600px) {
          .er-section   { padding: 3rem 0; }
          .er-container { padding: 0 1rem; }
          .er-center    { margin-bottom: 1.75rem; }

          .er-highlights { grid-template-columns: 1fr 1fr; gap: 0.7rem; }

          /* Why invest box padding */
          .er-adv-card   { padding: 1.8rem !important; }

          /* Prevent buttons from overflowing on mobile */
          .btn-primary, .btn-dark, .btn-outline {
            max-width: 100%;
            white-space: normal;
            word-break: break-word;
            box-sizing: border-box;
          }
        }

        /* ══════════════════════════
           TINY  ≤ 380px
        ══════════════════════════ */
        @media (max-width: 380px) {
          .er-highlights { grid-template-columns: 1fr; }
        }

        /* ── Hero: swap to mobile-specific image, fit fully without side-cropping ── */
        @media (max-width: 768px) {
          .hero-slide {
            background-image: url('${images.hero}') !important;
            background-size: cover !important;
            background-position: center 35% !important;
            background-repeat: no-repeat !important;
            background-color: var(--forest-dark);
          }

          .hero {
            height: auto !important;
            min-height: 0 !important;
            aspect-ratio: 1 / 1.15;
            align-items: flex-start !important;
            padding-top: 78px !important;
            padding-bottom: 1.2rem !important;
          }

          .hero-content--new {
            padding-top: 0.3rem !important;
            padding-bottom: 0 !important;
          }

          .hero-eyebrow {
            font-size: 0.62rem !important;
            margin-bottom: 0.4rem !important;
          }

          .hero-title {
            font-size: 1.7rem !important;
            line-height: 1.1 !important;
          }

          .hero-desc--stacked {
            font-size: 12.5px !important;
            line-height: 1.55 !important;
            margin-top: 0.6rem !important;
          }

          .hero-col-btns {
            width: 100% !important;
            align-items: center !important;
          }

          .hero-col-btns .hero-actions {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            margin-top: -1.2rem !important;
          }

          .hero-btns button,
          .hero-btns a,
          .hero-col-btns .btn-primary {
            padding: 12px 22px !important;
            font-size: 13px !important;
          }
        }
      `}</style>

      {/* JSON-LD: RealEstateListing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            name: `${PROJECT_NAME} – Luxury Bungalows on the Delhi–Meerut Expressway, Ghaziabad`,
            description:
              "450-acre luxury bungalow project with only 441 bungalows on the Delhi–Meerut Expressway (NE-3), Ghaziabad. 8 BHK luxury bungalow with 1,500 sq. yd. private garden, one-acre bungalows and plot-only options. Developed by Haute World Developers.",
            url: PAGE_URL,
            ...(images.og.startsWith("http") ? { image: images.og } : {}),
            address: {
              "@type": "PostalAddress",
              streetAddress: "Near Hawa Hawai, Delhi–Meerut Expressway (NE-3)",
              addressLocality: "Ghaziabad",
              addressRegion: "Uttar Pradesh",
              postalCode: "201206",
              addressCountry: "IN",
            },
            offers: [
              {
                "@type": "Offer",
                name: "8 BHK Luxury Bungalow (2,000 sq. yd. plot)",
                priceCurrency: "INR",
                price: "65000000",
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                name: "1 Acre Bungalow with Private Garden",
                priceCurrency: "INR",
                price: "160000000",
                availability: "https://schema.org/InStock",
              },
            ],
            brand: {
              "@type": "Organization",
              name: "Haute World Developers",
              url: SITE_URL,
            },
          }),
        }}
      />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: PROJECT_NAME, item: PAGE_URL },
            ],
          }),
        }}
      />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        className="hero mh-hero"
        aria-label={`${PROJECT_NAME} hero`}
        style={{
          background:
            "linear-gradient(135deg, var(--forest-dark) 0%, var(--forest) 50%, #2d5a44 100%)",
        }}
      >
        <div className="hero-slides mh-media" aria-hidden="true">
          <div
            className="hero-slide"
            style={{
              backgroundImage: `url('${images.hero}')`,
              backgroundPosition: "center 35%",
              opacity: 1,
              animation: "none",
            }}
          />
        </div>
        <div className="hero-img-overlay mh-hide" aria-hidden="true" />
        <div className="hero-bottom-shadow mh-hide" aria-hidden="true" />

        <div className="hero-content hero-content--new mh-panel">
          <div className="hero-col-title">
            <p
              style={{
                fontSize: "0.76rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#ffffff",
                marginBottom: "0.6rem",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}
            >
              First Bungalow Project in Delhi NCR
            </p>
            <h1
              className="hero-title mh-title"
              style={{ opacity: 1, transform: "none", animation: "none" }}
            >
              <span
                className="line line-1"
                style={{ opacity: 1, transform: "none", animation: "none" }}
              >
                Haute <em>Bungalows</em>
              </span>
            </h1>
            <p
              className="hero-desc--stacked mh-desc"
              style={{ marginTop: "1.2rem", animation: "none", opacity: 1 }}
            >
              450 acres. Only 441 bungalows. Luxury bungalows on the
              Delhi–Meerut Expressway in Ghaziabad, with 8 BHK residences,
              private gardens up to 1,500 sq. yd., one-acre estates and
              plot-only options.
            </p>
          </div>
          <div className="hero-col-btns">
            <div className="hero-actions mh-actions">
              <a href="#contact" className="btn-primary">
                Book a Site Visit →
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-indicator mh-hide" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════ */}
      <section
        id="about"
        className="er-section"
        aria-labelledby="about-heading"
        style={{ background: "var(--white)" }}
      >
        <div className="er-container">
          <div className="er-2col">
            <div>
              <span className="section-label">About The Project</span>
              <h2
                id="about-heading"
                style={{
                  fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)",
                  lineHeight: 1.15,
                  marginBottom: "0.5rem",
                }}
              >
                441 Luxury Bungalows on 450 Acres, on the Delhi–Meerut Expressway
              </h2>
              <div className="divider" />

              {/* Mobile / tablet image: right after the heading */}
              <div className="er-about-img-wrap er-about-img--mobile">
                <img
                  src={images.about}
                  alt={`${PROJECT_NAME} – luxury bungalow with private garden on the Delhi–Meerut Expressway, Ghaziabad`}
                />
              </div>

              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--gray)",
                  lineHeight: 1.85,
                  marginBottom: "1.2rem",
                }}
              >
                {PROJECT_NAME} is a 450-acre luxury bungalow project on the
                Delhi–Meerut Expressway (NE-3) in Ghaziabad, near Hawa Hawai.
                Launched as the first bungalow project in Delhi NCR, it offers
                just 441 independent bungalows, so every home gets generous
                land, a private garden and real privacy.
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--gray)",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                }}
              >
                Choose the 8 BHK luxury bungalow on a 2,000 sq. yd. plot with a
                1,500 sq. yd. private garden, step up to a one-acre bungalow, or
                buy a plot only and design your own home. Pricing is published
                openly per sq. yd., with full guidance from site visit to
                registration.
              </p>
              <a href="#contact" className="btn-primary">
                Register Interest &amp; Get a Callback →
              </a>
            </div>

            {/* Desktop image: beside the text */}
            <div className="er-about-img-wrap er-about-img--desktop">
              <img
                src={images.about}
                alt={`${PROJECT_NAME} – luxury bungalow with private garden on the Delhi–Meerut Expressway, Ghaziabad`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROJECT HIGHLIGHTS
      ══════════════════════════════════════════ */}
      <section
        id="highlights"
        className="er-section"
        aria-labelledby="project-highlights-heading"
        style={{ background: "var(--cream)" }}
      >
        <div className="er-container">
          <div className="er-center">
            <span className="section-label">Project Highlights</span>
            <h2
              id="project-highlights-heading"
              style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)", marginBottom: "0.5rem" }}
            >
              What Sets {PROJECT_NAME} Apart
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
          </div>

          <div className="er-highlight-grid">
            {projectHighlights.map((h) => (
              <ExpresswayHighlightItem key={h.title}>
                <span className="er-highlight-mark"><IconCheck size={13} /></span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.body}</p>
                </div>
              </ExpresswayHighlightItem>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRICING
      ══════════════════════════════════════════ */}
      <section
        id="pricing"
        className="er-section"
        aria-labelledby="pricing-heading"
        style={{ background: "var(--white)" }}
      >
        <div className="er-container">
          <div className="er-center" style={{ maxWidth: 680 }}>
            <span className="section-label">Price &amp; Configurations</span>
            <h2
              id="pricing-heading"
              style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)", marginBottom: "0.5rem" }}
            >
              Bungalow &amp; Plot Prices on the Delhi–Meerut Expressway
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ fontSize: "0.92rem", color: "var(--gray)", lineHeight: 1.8 }}>
              Transparent rates, published per sq. yd. Prices increase effective
              20 November 2026, and bookings from that date are accepted at the
              new rates only.
            </p>
          </div>

          <div className="er-price-grid">
            {priceCards.map((p) => (
              <div key={p.label} className="er-price-card">
                <span className="er-price-label">{p.label}</span>
                <span className="er-price-value">{p.value}</span>
                <span className="er-price-unit">{p.unit}</span>
                <p className="er-price-note">{p.note}</p>
              </div>
            ))}
          </div>

          <p className="er-price-foot">
            Images are artist&apos;s impressions. Rates are as communicated by
            Haute World Developers and may change. Please confirm final pricing
            and availability with our team.
          </p>

          <div style={{ textAlign: "center", marginTop: "1.6rem" }}>
            <a href="#contact" className="btn-primary">
              Get the Full Price Sheet →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          LOCATION CONNECTIVITY
      ══════════════════════════════════════════ */}
      <section
        id="location"
        className="er-section"
        aria-labelledby="location-heading"
        style={{ background: "var(--forest-dark)" }}
      >
        <div className="er-container">
          <div className="er-2col-map">
            <div>
              <div
                style={{
                  display: "inline-block",
                  borderLeft: "3px solid var(--gold)",
                  paddingLeft: "1rem",
                  marginBottom: "1.4rem",
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "1.1rem",
                    color: "var(--gold)",
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  Location Advantage
                </p>
              </div>
              <h2
                id="location-heading"
                style={{
                  fontSize: "clamp(1.65rem, 3vw, 2.6rem)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: "1.6rem",
                }}
              >
                Luxury bungalows on the Delhi–Meerut Expressway (NE-3), near
                Hawa Hawai, Ghaziabad
              </h2>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem 2rem",
                }}
              >
                {proximityBullets.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      fontSize: "0.95rem",
                      color: "rgba(255,255,255,0.85)",
                      fontWeight: 500,
                      lineHeight: 1.5,
                    }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--gold)"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0 }}
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="er-route-img-wrap">
              <img
                src={images.locationMap}
                alt={`${PROJECT_NAME} – location and connectivity map, Delhi–Meerut Expressway, Ghaziabad`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MASTER PLAN
      ══════════════════════════════════════════ */}
      <section
        id="masterplan"
        className="er-section"
        aria-labelledby="masterplan-heading"
        style={{ background: "var(--white)" }}
      >
        <div className="er-container">
          <div className="er-center">
            <span className="section-label">Project Layout</span>
            <h2 id="masterplan-heading">{PROJECT_NAME} Master Plan</h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p
              style={{
                fontSize: "0.92rem",
                color: "var(--gray)",
                lineHeight: 1.8,
              }}
            >
              A 450-acre estate planned for just 441 bungalows, so the layout
              stays open, green and private.
            </p>
          </div>

          <div>
            <SitePlanLightbox
              src={images.layout}
              alt={`${PROJECT_NAME} master plan and site layout – Delhi Meerut Expressway Ghaziabad`}
            />
          </div>

          <div style={{ marginTop: "1.8rem" }}>
            <a
              href="#contact"
              className="btn-primary"
              style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                padding: "1.2rem 2rem",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            >
              Receive a Return Call →
            </a>
          </div>

          <div className="er-highlights">
            {layoutStats.map((h) => (
              <div
                key={h.label}
                style={{
                  background: "var(--white)",
                  border: "1px solid rgba(201,144,26,0.2)",
                  borderRadius: "14px",
                  padding: "1.2rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.85rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    minWidth: "40px",
                    background: "rgba(201,144,26,0.1)",
                    border: "1px solid rgba(201,144,26,0.25)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h.Icon size={20} color="var(--gold)" />
                </div>
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1.35rem",
                      color: "var(--forest)",
                      fontWeight: 700,
                      lineHeight: 1.1,
                    }}
                  >
                    {h.value}
                  </p>
                  <p
                    style={{
                      margin: "0.25rem 0 0",
                      fontSize: "0.78rem",
                      color: "var(--charcoal)",
                      fontWeight: 600,
                      lineHeight: 1.4,
                    }}
                  >
                    {h.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY INVEST
      ══════════════════════════════════════════ */}
      <section
        id="why-invest"
        className="er-section"
        aria-labelledby="why-invest-heading"
        style={{
          background: "var(--cream)",
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
          className="er-container"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="er-2col">
            <div>
              <span className="section-label">Why Invest</span>
              <h2
                id="why-invest-heading"
                style={{
                  fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)",
                  lineHeight: 1.15,
                  marginBottom: "0.5rem",
                }}
              >
                Why Buy a Luxury Bungalow in Ghaziabad
              </h2>
              <div className="divider" />
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--gray)",
                  lineHeight: 1.85,
                  marginBottom: "1.2rem",
                }}
              >
                The Ghaziabad stretch of the Delhi–Meerut Expressway is
                increasingly seen as one of NCR&apos;s emerging luxury
                addresses, helped by the 14-lane expressway, the NH-24 corridor
                and the Namo Bharat RRTS link between Delhi, Ghaziabad and
                Meerut. Large plots with private gardens are rare on this
                corridor, and {PROJECT_NAME} brings them in a single planned
                estate of just 441 bungalows.
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--gray)",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                }}
              >
                Whether you want a ready 8 BHK bungalow, a one-acre estate or a
                plot to build on, pricing is published per sq. yd., and our
                team guides you from the first site visit to registration.
              </p>
              <blockquote
                style={{
                  borderLeft: "3px solid var(--gold)",
                  paddingLeft: "1.4rem",
                  margin: "0 0 2rem",
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                  color: "var(--charcoal)",
                  lineHeight: 1.65,
                }}
              >
                Only 441 bungalows on 450 acres: space, privacy and a private
                garden that most NCR addresses cannot offer.
              </blockquote>
              <a href="#contact" className="btn-dark">
                Talk to Our Investment Team →
              </a>
            </div>

            <div>
              <div className="er-adv-card">
                <span className="er-adv-eyebrow">Why Choose Us</span>
                <h3 className="er-adv-title">Key Advantages</h3>
                <div className="er-adv-list">
                  {advantages.map((a, i) => (
                    <div key={a} className="er-adv-row">
                      <span className="er-adv-num">{String(i + 1).padStart(2, "0")}</span>
                      <p>{a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ (same drone video background as Expressway Residency)
      ══════════════════════════════════════════ */}
      <section id="faq" className="er-faq-section" aria-labelledby="faq-heading">
        <video
          className="er-faq-video"
          src="https://res.cloudinary.com/dpbitfczf/video/upload/v1786351870/DME-_Drone_View_rgbp0s.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="er-faq-overlay" aria-hidden="true" />
        <div className="er-container er-faq-inner">
          <span className="section-label" style={{ color: "var(--gold)" }}>Got Questions?</span>
          <h2 id="faq-heading" className="er-faq-heading">
            Frequently Asked{" "}
            <em style={{ color: "#fff", fontStyle: "italic" }}>Questions</em>
          </h2>

          <BungalowFAQ />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BLOG
      ══════════════════════════════════════════ */}
      <section id="blogs" className="er-section" aria-labelledby="blogs-heading" style={{ background: "var(--cream)" }}>
        <div className="er-container">
          <ExpresswayBlog />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT + GOOGLE MAP
      ══════════════════════════════════════════ */}
      <section
        id="contact"
        className="er-section"
        aria-labelledby="contact-heading"
        style={{ background: "var(--white)" }}
      >
        <div className="er-container">
          <div className="er-center" style={{ maxWidth: 640 }}>
            <span className="section-label" style={{ color: "var(--gold)" }}>
              Only 441 Bungalows — Register Now
            </span>
            <h2 id="contact-heading" style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)" }}>
              Ready to Own a Bungalow at{" "}
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>
                {PROJECT_NAME}?
              </em>
            </h2>
            <div className="divider" style={{ margin: "1rem auto" }} />
            <p style={{ fontSize: "0.95rem", color: "var(--gray)", lineHeight: 1.8 }}>
              Speak to our team for pricing details, payment plans, and to
              schedule your complimentary site visit. Or call us directly at{" "}
              <a
                href={`tel:${PHONE_TEL}`}
                style={{ color: "var(--gold)", fontWeight: 700, textDecoration: "none" }}
              >
                {PHONE_DISPLAY}
              </a>
              .
            </p>
          </div>

          <div className="er-contact-wrap" style={{ marginTop: "3rem" }}>
            <div className="er-contact-map">
              {hasMap ? (
                <iframe
                  src={MAP_EMBED_URL}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${PROJECT_NAME} Location Map — Delhi Meerut Expressway, Ghaziabad, Uttar Pradesh`}
                />
              ) : (
                <div className="er-map-empty">
                  Google Map will appear here once MAP_EMBED_URL is added in lib/haute-bungalow-estate.js
                </div>
              )}
            </div>
            <div className="er-contact-form-panel">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}