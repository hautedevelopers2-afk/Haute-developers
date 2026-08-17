// Place this file at: app/haute-eden-valley/layout.jsx
//
// page.jsx for this route uses "use client" (needed for the hero slideshow,
// scroll reveals, FAQ accordion, etc). Client components CANNOT export
// `metadata` — Next.js silently ignores it and falls back to the nearest
// parent layout's metadata instead. That's why this page was showing the
// homepage's NCR title/description in Google search results.
//
// This layout.jsx stays a Server Component purely to hold the metadata
// export, while still rendering the client page underneath untouched.

export const metadata = {
  title: "Haute Eden Valley | Premium Farmhouse Plots Near Jaipur, Shahpura NH-48",
  description:
    "Haute Eden Valley is a 20-acre nature-inspired luxury farm estate at Shahpura on the Delhi–Jaipur Highway (NH-48). 75 premium 500 sq. yd. farmhouse plots near Jaipur, starting ₹40 Lakhs*. By Haute World Developers.",
  keywords: [
    "farmhouse plots near Jaipur",
    "farmhouse plots in Jaipur",
    "farm land near Jaipur",
    "farmhouse plots near Delhi Jaipur highway",
    "NH-48 farmhouse plots",
    "weekend home near Delhi NCR",
    "gated farmhouse community near Jaipur",
    "luxury farm estate near Jaipur",
    "farmhouse plots Shahpura",
    "Haute Eden Valley",
  ].join(", "),
  alternates: {
    canonical: "https://www.hautedevelopers.com/haute-eden-valley",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Haute Eden Valley | Luxury Farmhouse Plots Near Jaipur",
    description:
      "A 20-acre gated farm estate at Shahpura on the Delhi–Jaipur Highway (NH-48). 75 premium farmhouse plots, starting ₹40 Lakhs*. By Haute World Developers.",
    url: "https://www.hautedevelopers.com/haute-eden-valley",
    siteName: "Haute World Developers",
    images: [
      {
        url: "https://res.cloudinary.com/dpbitfczf/image/upload/v1786180137/Haute-eden-valley_2_1_tsk3b2.webp",
        width: 1200,
        height: 630,
        alt: "Haute Eden Valley — luxury farm estate near Jaipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haute Eden Valley | Farmhouse Plots Near Jaipur",
    description:
      "20-acre luxury farm estate at Shahpura on NH-48. 75 farmhouse plots near Jaipur, starting ₹40 Lakhs*.",
    images: [
      "https://res.cloudinary.com/dpbitfczf/image/upload/v1786180137/Haute-eden-valley_2_1_tsk3b2.webp",
    ],
  },
};

export default function HauteEdenValleyLayout({ children }) {
  return children;
}