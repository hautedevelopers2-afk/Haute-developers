import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import './blog-detail.css'

const CATEGORIES = ['Real Estate', 'Investment', 'Market Trends', 'Lifestyle', 'News', 'Tips & Advice']

export default function BlogDetailClient({ blog, recentBlogs, catCounts }) {
  return (
    <>
      <Navbar />
      <div className="bd-page">

        {/* ── Hero ── */}
        <div className="bd-hero">
          <div className="bd-hero-inner">
            <nav className="bd-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="bc-sep">○</span>
              <Link href="/blogs">Blog</Link>
              <span className="bc-sep">○</span>
              <Link href={`/blogs?category=${encodeURIComponent(blog.category)}`} className="bc-active">{blog.category}</Link>
            </nav>
            <h1 className="bd-hero-title">{blog.title}</h1>
            <div className="bd-hero-meta">
              <span className="bd-hero-cat">{blog.category}</span>
              <span className="dot">|</span>
              <time dateTime={blog.createdAt}>{blog.dateLabel}</time>
              <span className="dot">|</span>
              <span>{blog.readTime} Minutes Read</span>
            </div>
          </div>
        </div>

        {/* ── Main ── */}
        <div className="bd-main">
          <article className="bd-article">
            {blog.coverImage && (
              <img src={blog.coverImage} alt={blog.title} className="bd-article-cover" />
            )}
            <div className="bd-article-cover-meta">
              <span className="bd-cover-cat">{blog.category}</span>
              <span>{blog.readTime} Minutes Read</span>
            </div>
            <div className="bd-article-body">
              <div className="bd-prose" dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
            <div className="bd-article-footer">
              <Link href="/blogs" className="bd-back-btn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                </svg>
                Back to Blog
              </Link>
              <div className="bd-published-date">Published {blog.dateLabel}</div>
            </div>
          </article>

          <aside className="bd-sidebar">
            <div className="bd-sidebar-card">
              <div className="bd-sidebar-head">
                <div className="bd-sidebar-head-title">Categories</div>
              </div>
              <div className="bd-cat-list">
                {CATEGORIES.map((cat) => (
                  <Link key={cat} href={`/blogs?category=${encodeURIComponent(cat)}`} className="bd-cat-item">
                    <span>{cat} <span className="bd-cat-count">({catCounts[cat] || 0})</span></span>
                  </Link>
                ))}
              </div>
            </div>

            {recentBlogs.length > 0 && (
              <div className="bd-sidebar-card">
                <div className="bd-sidebar-head">
                  <div className="bd-sidebar-head-title">Recent Blogs</div>
                </div>
                <div className="bd-recent-list">
                  {recentBlogs.map((r) => (
                    <Link key={r._id} href={`/blogs/${r.slug}`} className="bd-recent-item">
                      <div className="bd-recent-thumb">
                        {r.coverImage
                          ? <img src={r.coverImage} alt={r.title} loading="lazy" />
                          : <span className="bd-recent-no-img">{r.title?.[0]}</span>}
                      </div>
                      <div>
                        <div className="bd-recent-title">{r.title}</div>
                        <div className="bd-recent-date">{r.dateLabel}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
      <Footer />
    </>
  )
}