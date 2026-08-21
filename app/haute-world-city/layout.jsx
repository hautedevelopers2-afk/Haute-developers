// Place this file at: app/haute-world-city/layout.jsx
//
// Client components (page.jsx uses "use client") cannot export `metadata`
// directly — Next.js requires metadata to come from a Server Component.
// This layout is the fix: it stays a server component and wraps the
// client page, so the page keeps its interactivity (accordions, lightbox,
// scroll reveals) while still getting full SEO metadata.

export const metadata = {
  title:
    "Plots for Sale in Dholera Smart City | Haute World City",
  description:
    "Explore plots for sale in Dholera Smart City with Haute World City. Invest in residential and commercial plots on Dholera Bhavnagar Expressway near Dholera SIR.",
  keywords: [
    "Haute World City Dholera",
    "Dholera Smart City plots",
    "Dholera SIR investment",
    "residential plots Dholera",
    "freehold plots Dholera Gujarat",
    "DMIC plots Gujarat",
    "Dholera greenfield smart city",
    "plots near Dholera International Airport",
    "Haute World Developers Dholera",
    "Ahmedabad Dholera Expressway plots",
  ].join(", "),
  alternates: {
    canonical: "https://www.hautedevelopers.com/haute-world-city",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Haute World City – Premium Freehold Plots in Dholera Smart City",
    description:
      "India's first Greenfield smart city. Freehold residential plots by Haute World Developers in Dholera SIR, Gujarat — on the Delhi–Mumbai Industrial Corridor.",
    url: "https://www.hautedevelopers.com/haute-world-city",
    siteName: "Haute World Developers",
    images: [
      {
        url: "/assets/dholera.png",
        width: 1200,
        height: 630,
        alt: "Haute World City — Dholera Smart City aerial view",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haute World City – Freehold Plots in Dholera Smart City",
    description:
      "India's first Greenfield smart city on the DMIC. Freehold residential plots by Haute World Developers, Dholera SIR, Gujarat.",
    images: ["/assets/dholera.png"],
  },
};

export default function HauteWorldCityLayout({ children }) {
  return children;
}