// Place this file at: app/haute-city-1st-avenue/layout.jsx
//
// page.jsx for this route uses "use client" (needed for the FAQ accordion,
// scroll reveals, etc). Client components CANNOT export `metadata` —
// Next.js silently ignores it and falls back to the nearest parent
// layout's metadata instead, meaning this page has effectively had no
// project-specific title/description in search results at all.
//
// This layout.jsx stays a Server Component purely to hold the metadata
// export, while still rendering the client page underneath untouched.

export const metadata = {
  title: "Haute City 1st Avenue | Customisable Luxury Villas on NE-3, Delhi–Meerut Expressway",
  description:
    "Haute City 1st Avenue offers 33 fully customisable duplex villas on NE-3, Delhi–Meerut Expressway, Ghaziabad — adjacent to the 100-acre Expressway Residency township. Priced at ₹7,150 per sq. ft. By Haute World Developers.",
  keywords: [
    "Haute City 1st Avenue",
    "villas Delhi Meerut Expressway",
    "NE-3 Ghaziabad villas",
    "customisable villas Ghaziabad",
    "duplex villas near Expressway Residency",
    "luxury villas Ghaziabad",
    "villas near Hawa Hawai Restaurant",
    "Haute World Developers villas",
    "boutique villa community NCR",
    "personal swimming pool villas Ghaziabad",
  ].join(", "),
  alternates: {
    canonical: "https://www.hautedevelopers.com/haute-city-1st-avenue",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Haute City 1st Avenue | Customisable Luxury Villas, NE-3 Ghaziabad",
    description:
      "33 boutique duplex villas on NE-3, Delhi–Meerut Expressway — fully customisable layout, interior & Vastu. Personal pool, private lift & rooftop garden on every villa.",
    url: "https://www.hautedevelopers.com/haute-city-1st-avenue",
    siteName: "Haute World Developers",
    images: [
      {
        url: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786515101/Haute_City_1st_Avenue_1_pqk33t.webp",
        width: 1200,
        height: 630,
        alt: "Haute City 1st Avenue — luxury villas on Delhi–Meerut Expressway",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haute City 1st Avenue | Customisable Villas on NE-3, Delhi–Meerut Expressway",
    description:
      "33 boutique duplex villas on NE-3, Delhi–Meerut Expressway. Fully customisable, ₹7,150 per sq. ft.",
    images: [
      "https://res.cloudinary.com/dpbitfczf/image/upload/v1786515101/Haute_City_1st_Avenue_1_pqk33t.webp",
    ],
  },
};

export default function HauteCityFirstAvenueLayout({ children }) {
  return children;
}