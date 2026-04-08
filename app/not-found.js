import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found | Haute Developers',
}

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--forest-dark)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      gap: '1.5rem',
    }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '8rem', fontWeight: 700, color: 'rgba(255,255,255,0.08)', lineHeight: 1 }}>
        404
      </div>
      <h1 style={{ fontFamily: 'var(--font-display)', color: 'white', fontSize: '2rem', marginTop: '-4rem' }}>
        Page Not Found
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 400 }}>
        The page you're looking for doesn't exist. Let's take you back to explore our premium projects.
      </p>
      <Link href="/" className="btn-primary">← Back to Home</Link>
    </div>
  )
}
