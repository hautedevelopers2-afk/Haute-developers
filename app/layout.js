import './globals.css'
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL('https://www.hautedevelopers.com'),
  title: {
    default: 'Leading Real Estate Developer in NCR | Haute World Developers',
    template: '%s | Haute World Developers',
  },
  description:
    'Explore premium residential properties, luxury villas, plots and investment opportunities with Haute World Developers. Find quality real estate projects in India.',
  keywords: [
    'Haute World Developers',
    'real estate Noida',
    'plots Ghaziabad',
    'Expressway Residency',
    'premium residential plots NCR',
    'Haute City Dholera',
    'Haute Pearl Residency Vrindavan',
    'buy plots Delhi NCR',
    'real estate investment India',
    'RERA approved plots',
  ],
  authors: [{ name: 'Haute World Developers', url: 'https://www.hautedevelopers.com' }],
  creator: 'Haute World Developers',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.hautedevelopers.com',
    siteName: 'Haute World Developers',
    title: 'Haute World Developers | Premium Real Estate Since 2011',
    description:
      'Explore premium residential and investment opportunities across NCR, Noida, Ghaziabad, Vrindavan & Dholera with Haute World Developers.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Haute World Developers - Premium Real Estate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haute World Developers | Premium Real Estate Since 2011',
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
              name: 'Haute World Developers',
              description:
                'Premium real estate developer specializing in residential plots, villas, and apartments across Delhi NCR and India.',
              url: 'https://www.hautedevelopers.com',
              telephone: '+919911807193',
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

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18216224281"
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18216224281');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}