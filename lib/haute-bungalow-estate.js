// Place this file at: lib/haute-bungalow-estate.js
//
// Single source of truth for the Haute Bungalows project page.
// - Rename the project in ONE place (PROJECT_NAME).
// - Replace every placeholder image link in the `images` object and MAP_EMBED_URL below.
//   Each placeholder image has text on it telling you where it will appear on the page.
// This is a plain JS module (no "use client") so both the server page and the
// client components can import from it.

export const PROJECT_NAME = "Haute Bungalows";
export const PROJECT_SLUG = "haute-bungalow"; // must match the folder name in /app (app/haute-bungalow)
export const SITE_URL = "https://www.hautedevelopers.com";
export const PAGE_URL = `${SITE_URL}/${PROJECT_SLUG}`;

export const PHONE_DISPLAY = "+91 99118 07193";
export const PHONE_TEL = "+919911807193";

/* ─────────────────────────────────────────
   IMAGE LINKS — placeholders show where each image goes.
   Replace the URL with your real image link when ready.
───────────────────────────────────────── */
const ph = (w, h, label) =>
  `https://placehold.co/${w}x${h}/1a4a3a/f5d483/png?text=${encodeURIComponent(label)}`;

export const images = {
  // Hero background (desktop + mobile)
  hero: "https://res.cloudinary.com/dpbitfczf/image/upload/v1794759937/Warm_Modern_Mansion_Estate_ky5mix.png",
  // About section image (beside "441 Luxury Bungalows on 450 Acres")
  about: "https://res.cloudinary.com/dpbitfczf/image/upload/v1794759936/Golden_Hour_Modern_Mansion_Retreat_fr8b50.webp",
  // Location / route map image (Location Advantage section)
  locationMap: "https://res.cloudinary.com/dpbitfczf/image/upload/v1794819865/blog-covers/ub6qa86i9dxprk0orvy5.webp",
  // Master plan / site layout image
  layout:
    "https://res.cloudinary.com/dpbitfczf/image/upload/v1794758313/haute-bungalow-masterplan-edited_cscfrb.webp",
  // 1200x630 social share image (must be a full https:// URL)
  og: ph(1200, 630, "SOCIAL SHARE IMAGE 1200x630 - Haute Bungalows"),
};

// Google Maps embed URL (the src="..." value from Share > Embed a map)
export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3166.042660336792!2d77.55282822496052!3d28.731765879568478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e9!4m5!1s0x390cf38a1a6d9587%3A0xa42cb39f01afbb80!2sHaute%20City%201st%20Avenue%2C%20Delhi%20-%20Meerut%20Expy%2C%20Didwari%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201206!3m2!1d28.7336757!2d77.55583829999999!4m5!1s0x390cf33ebb2a7351%3A0x4e08c11e7abf3002!2sExpressway%20Residency%2C%20Delhi%20-%20Meerut%20Expy%2C%20near%20Hawa%20Hawai%20Restaurant%2C%20Didwari%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201206!3m2!1d28.7297463!2d77.55329449999999!5e1!3m2!1sen!2sin!4v1794759701357!5m2!1sen!2sin";

/* ─────────────────────────────────────────
   FAQS — used by the accordion AND the FAQPage JSON-LD
───────────────────────────────────────── */
export const faqs = [
  {
    q: `Where is ${PROJECT_NAME} located?`,
    a: `${PROJECT_NAME} is on the Delhi–Meerut Expressway (NE-3) in Ghaziabad, Uttar Pradesh, near Hawa Hawai. It is a Haute World Developers project spread across 450 acres.`,
  },
  {
    q: "How many bungalows are there and how big is the project?",
    a: "The project spans 450 acres of total land with only 441 bungalows, which keeps the estate low-density with large plots and private gardens.",
  },
  {
    q: "What are the prices of the bungalows and plots?",
    a: "The 8 BHK luxury bungalow is priced at ₹6.5 Cr (launch price from 11 November 2026) and a one-acre bungalow with a private garden is available at ₹16 Cr. Per sq. yd. rates effective 20 November 2026 are ₹27,000 for plot only and ₹34,000 for a bungalow.",
  },
  {
    q: "What are the plot, garden and construction sizes of the 8 BHK bungalow?",
    a: "The 8 BHK luxury bungalow sits on a 2,000 sq. yd. plot with a 1,500 sq. yd. private garden and 500 sq. yd. of construction area.",
  },
  {
    q: "How well connected is the project to Delhi, Noida and Ghaziabad?",
    a: "The site is close to NH-24 and the Delhi–Meerut Expressway, about 15 minutes from Sector 62 Noida, 25 minutes from Akshardham Metro Station, 15 minutes from Ghaziabad Railway Station, 15 minutes from Indirapuram and 30 minutes from Hindon Airport.",
  },
  {
    q: "How do I book a site visit?",
    a: `Use the enquiry form on this page or call ${PHONE_DISPLAY}. Our team will arrange a complimentary site visit and share availability, payment plans and documentation.`,
  },
];