import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.hautedevelopers.com'),
  title: {
    default: 'Haute Developers | Premium Real Estate in NCR, Noida, Ghaziabad',
    template: '%s | Haute Developers',
  },
  description:
    'Haute Developers — Delivering premium residential plots, villas, and apartments since 2011. Projects in Noida, Ghaziabad, Dehradun, Vrindavan & Dholera. Invest with Haute.',
  keywords: [
    'Haute Developers',
    'real estate Noida',
    'plots Ghaziabad',
    'Expressway Residency',
    'premium residential plots NCR',
    'Haute City Dholera',
    'Haute Residency Vrindavan',
    'buy plots Delhi NCR',
    'real estate investment India',
    'RERA approved plots',
  ],
  authors: [{ name: 'Haute Developers', url: 'https://www.hautedevelopers.com' }],
  creator: 'Haute Developers',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.hautedevelopers.com',
    siteName: 'Haute Developers',
    title: 'Haute Developers | Premium Real Estate Since 2011',
    description:
      'Explore premium residential and investment opportunities across NCR, Noida, Ghaziabad, Vrindavan & Dholera with Haute Developers.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Haute Developers - Premium Real Estate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haute Developers | Premium Real Estate Since 2011',
    description:
      'Premium residential plots, villas & apartments in Delhi NCR. Invest with Haute.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://www.hautedevelopers.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: 'Haute Developers',
              description:
                'Premium real estate developer specializing in residential plots, villas, and apartments across Delhi NCR and India.',
              url: 'https://www.hautedevelopers.com',
              telephone: '+918383073291',
              email: 'support@hautedevelopers.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Ground Floor, H-214, Sector 63',
                addressLocality: 'Noida',
                addressRegion: 'Uttar Pradesh',
                postalCode: '201301',
                addressCountry: 'IN',
              },
              foundingDate: '2011',
              sameAs: ['https://www.hautedevelopers.com'],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
