# Haute Developers — Next.js Website

Premium real estate website for Haute Developers, built with Next.js 14 (App Router).

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
haute-developers/
├── app/
│   ├── layout.js          # Root layout with full SEO metadata
│   ├── page.js            # Homepage (all sections)
│   ├── globals.css        # Brand styles, animations, responsive
│   ├── sitemap.js         # Auto-generated XML sitemap
│   ├── robots.js          # robots.txt config
│   └── not-found.js       # 404 page
├── components/
│   ├── Navbar.js          # Sticky navbar with mobile menu
│   ├── Footer.js          # Full footer with links
│   ├── ContactForm.js     # Lead capture form + WhatsApp
│   └── WhatsAppButton.js  # Floating WhatsApp CTA
└── public/
    ├── favicon.ico        # Add your favicon
    └── og-image.jpg       # Add 1200×630 OG image for social sharing
```

## 🎨 Brand Colors

- **Forest Green (Primary):** `#1a4a3a`
- **Gold (Accent):** `#c9901a`
- **Cream (Background):** `#faf8f4`

## 🔍 SEO Features

- ✅ Optimized `<title>` and `<meta description>` per page
- ✅ Open Graph & Twitter Card tags
- ✅ JSON-LD structured data (RealEstateAgent schema)
- ✅ Auto sitemap.xml generation
- ✅ robots.txt
- ✅ Semantic HTML5 with ARIA labels
- ✅ Canonical URLs
- ✅ Mobile-responsive (Core Web Vitals friendly)
- ✅ Google Fonts with `preconnect`
- ✅ `itemScope` / `itemProp` microdata on project cards

## 📝 Content Updates

- **Phone number:** Search for `8383073291` to update
- **Email:** Search for `support@hautedevelopers.com`
- **Address:** Search for `H-214, Sector 63`
- **Google Maps:** Update the iframe `src` in `app/page.js`
- **Google Search Console verification:** Update `google` value in `app/layout.js`

## 📦 Dependencies

- **Next.js 14** — App Router
- **React 18**
- **Google Fonts** — Cormorant Garamond + DM Sans (loaded via CDN)

No additional UI libraries needed — pure CSS with CSS variables.
