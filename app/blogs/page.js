'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import './blogs.css'

const CATEGORIES = ['All', 'Real Estate', 'Investment', 'Market Trends', 'Lifestyle', 'News', 'Tips & Advice']

function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })
}

function readTime(content) {
  return Math.max(1, Math.ceil(stripHtml(content).split(' ').length / 200))
}

export default function BlogsPage() {
  const [blogs, setBlogs]               = useState([])
  const [loading, setLoading]           = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)
  const [catCounts, setCatCounts]       = useState({})

  useEffect(() => {
    fetch('/api/blogs')
      .then(r => r.json())
      .then(data => {
        const posts = data.posts || []
        setBlogs(posts)
        // Build category counts dynamically
        const counts = {}
        posts.forEach(p => {
          counts[p.category] = (counts[p.category] || 0) + 1
        })
        setCatCounts(counts)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const filtered = activeCategory === 'All'
    ? blogs
    : blogs.filter(b => b.category === activeCategory)

  const featured = filtered[0]
  const rest     = filtered.slice(1, visibleCount + 1)

  // Recent blogs = latest 5 from all posts
  const recentBlogs = [...blogs]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5)

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat)
    setVisibleCount(6)
  }

  return (
    <>
      <Navbar />
      <div className="blogs-page">

        {/* ── Hero ── */}
        <section className="blogs-hero">
          <div className="blogs-hero-bg" />
          <div className="blogs-hero-overlay" />
          <div className="blogs-hero-content">
            <div />
            <h1 className="blogs-hero-title">Blog</h1>
            <div className="blogs-hero-home-link-wrap">
              <Link href="/" className="blogs-hero-home-link">← Home</Link>
            </div>
          </div>
        </section>

        {/* ── Main Layout ── */}
        <div className="blogs-main">

          {/* Left: Content Column */}
          <div className="blogs-content-col">
            {loading ? (
              <div className="blogs-loading">
                <div className="blogs-spinner" />
                <div className="blogs-loading-text">Loading articles...</div>
              </div>
            ) : filtered.length === 0 ? (
              <div className="blogs-empty">
                <div className="blogs-empty-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2e7d52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                </div>
                <h3>No stories yet</h3>
                <p>Check back soon for expert insights and perspectives.</p>
              </div>
            ) : (
              <>
                {/* Featured Post */}
                {featured && (
                  <>
                    <div className="blogs-featured-label">Featured Story</div>
                    <Link href={`/blogs/${featured._id}`} className="blogs-featured">
                      <div className="blogs-featured-img">
                        {featured.coverImage
                          ? <img src={featured.coverImage} alt={featured.title} />
                          : <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#c8c5be,#e0ded9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ fontFamily: 'Playfair Display,serif', fontSize: '5rem', fontWeight: 400, color: 'rgba(26,26,26,0.1)' }}>{featured.title?.[0]}</span>
                            </div>
                        }
                        <div className="blogs-featured-badge">{featured.category}</div>
                      </div>
                      <div className="blogs-featured-content">
                        <div className="blogs-featured-meta-row">
                          <span className="blogs-featured-cat">{featured.category}</span>
                          <span className="dot">|</span>
                          <span>{formatDate(featured.createdAt)}</span>
                          <span className="dot">|</span>
                          <span>{readTime(featured.content)} Minutes Read</span>
                        </div>
                        <h2 className="blogs-featured-title">{featured.title}</h2>
                        <p className="blogs-featured-excerpt">
                          {stripHtml(featured.content).slice(0, 200)}...
                        </p>
                        
                        <div className="blogs-featured-read">
                          Read More
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </>
                )}

                {/* Divider */}
                {rest.length > 0 && (
                  <div className="blogs-divider">
                    <div className="blogs-divider-line" />
                    <div className="blogs-divider-diamond" />
                    <div className="blogs-divider-line" />
                  </div>
                )}

                {/* Section Head + Grid */}
                {rest.length > 0 && (
                  <>
                    <div className="blogs-section-head">
                      <div className="blogs-section-label">Latest Articles</div>
                      <div className="blogs-count">{filtered.length - 1} article{filtered.length - 1 !== 1 ? 's' : ''}</div>
                    </div>

                    <div className="blogs-grid">
                      {rest.map((blog) => (
                        <Link key={blog._id} href={`/blogs/${blog._id}`} className="blog-card">
                          <div className={blog.coverImage ? 'blog-card-img' : 'blog-card-no-img'}>
                            {blog.coverImage ? (
                              <img src={blog.coverImage} alt={blog.title} />
                            ) : (
                              <div className="blog-card-no-img-letter">{blog.title?.[0]}</div>
                            )}
                            <div className="blog-card-cat">{blog.category}</div>
                          </div>
                          <div className="blog-card-body">
                            <div className="blog-card-meta">
                              <span>{blog.category}</span>
                              <span className="dot">|</span>
                              <span>{formatDate(blog.createdAt)}</span>
                              <span className="dot">|</span>
                              <span>{readTime(blog.content)} Min Read</span>
                            </div>
                            <h3 className="blog-card-title">{blog.title}</h3>
                            <p className="blog-card-excerpt">
                              {stripHtml(blog.content).slice(0, 130)}...
                            </p>
                            <div className="blog-card-footer">
                              <div />
                              <div className="blog-card-read">
                                Read More
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Load More */}
                    {filtered.length - 1 > visibleCount && (
                      <div className="blogs-load-more">
                        <button className="blogs-load-btn" onClick={() => setVisibleCount(v => v + 6)}>
                          Load More Stories
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"/>
                          </svg>
                        </button>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>

          {/* Right: Sidebar */}
          <aside className="blogs-sidebar">

            {/* Categories */}
            <div className="blogs-sidebar-card">
              <div className="blogs-sidebar-head">
                <div className="blogs-sidebar-head-title">Categories</div>
              </div>
              <div className="blogs-cat-list">
                {CATEGORIES.filter(c => c !== 'All').map(cat => (
                  <div
                    key={cat}
                    className={`blogs-cat-item ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    <span>{cat} <span className="blogs-cat-count">({catCounts[cat] || 0})</span></span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Blogs */}
            {recentBlogs.length > 0 && (
              <div className="blogs-sidebar-card">
                <div className="blogs-sidebar-head">
                  <div className="blogs-sidebar-head-title">Recent Blogs</div>
                </div>
                <div className="blogs-recent-list">
                  {recentBlogs.map(r => (
                    <Link key={r._id} href={`/blogs/${r._id}`} className="blogs-recent-item">
                      <div className="blogs-recent-thumb">
                        {r.coverImage
                          ? <img src={r.coverImage} alt={r.title} />
                          : <span className="blogs-recent-no-img">{r.title?.[0]}</span>
                        }
                      </div>
                      <div>
                        <div className="blogs-recent-title">{r.title}</div>
                        <div className="blogs-recent-date">{formatDate(r.createdAt)}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </aside>
        </div>
      </div>
    </>
  )
}