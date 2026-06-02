'use client'

import { useState, useEffect, useRef } from 'react'
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

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)
  const heroRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    fetch('/api/blogs')
      .then(r => r.json())
      .then(data => {
        setBlogs(data.posts || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const filtered = activeCategory === 'All'
    ? blogs
    : blogs.filter(b => b.category === activeCategory)

  const featured = filtered[0]
  const rest = filtered.slice(1, visibleCount + 1)

  return (
    <>
      <Navbar />
      <div className="blogs-page">

      {/* ── Hero ── */}
      <section className="blogs-hero">
        <div className="blogs-hero-pattern" />
        <div className="blogs-hero-glow" />
        <div className="blogs-hero-lines" />
        <div className="blogs-hero-content">
          <div>
            <div className="blogs-hero-label">The Journal</div>
            <h1 className="blogs-hero-title">
              Insights &<br />
              <em>Perspectives</em>
            </h1>
          </div>
          <div className="blogs-hero-right">
            <p className="blogs-hero-desc">
              Expert analysis, market intelligence, and curated insights from the forefront of premium real estate in India.
            </p>
            <div className="blogs-hero-meta">
              <div className="blogs-hero-stat">
                <strong>{blogs.length}</strong>
                <span>Articles</span>
              </div>
              <div className="blogs-hero-divider" />
              <div className="blogs-hero-stat">
                <strong>{CATEGORIES.length - 1}</strong>
                <span>Categories</span>
              </div>
              <div className="blogs-hero-divider" />
              <div className="blogs-hero-stat">
                <strong>∞</strong>
                <span>Knowledge</span>
              </div>
            </div>
          </div>
        </div>
        <div className="blogs-hero-bottom" />
      </section>

      {/* ── Filter Bar ── */}
      <div className="blogs-filter-wrap">
        <div className="blogs-filter-inner">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`blogs-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="blogs-main">
        {loading ? (
          <div className="blogs-loading">
            <div className="blogs-spinner" />
            <div className="blogs-loading-text">Curating stories for you...</div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="blogs-empty">
            <div className="blogs-empty-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9901a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h3>No stories yet</h3>
            <p>Check back soon for expert insights and market perspectives.</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featured && (
              <>
                <div style={{ marginBottom: '1.6rem' }}>
                  <div className="blogs-section-label">Featured Story</div>
                </div>
                <Link href={`/blogs/${featured._id}`} className="blogs-featured">
                  <div className="blogs-featured-img">
                    {featured.coverImage ? (
                      <img src={featured.coverImage} alt={featured.title} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0d2f24, #2d5a44)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '6rem', fontWeight: 300, color: 'rgba(245,212,131,0.15)' }}>
                          {featured.title?.[0]}
                        </span>
                      </div>
                    )}
                    <div className="blogs-featured-img-overlay" />
                    <div className="blogs-featured-badge">{featured.category}</div>
                  </div>
                  <div className="blogs-featured-content">
                    <div className="blogs-featured-label">Featured Story</div>
                    <h2 className="blogs-featured-title">{featured.title}</h2>
                    <p className="blogs-featured-excerpt">
                      {stripHtml(featured.content).slice(0, 180)}...
                    </p>
                    <div className="blogs-featured-meta">
                      <div className="blogs-featured-author">
                        <div className="blogs-featured-avatar">
                          {(featured.author || 'A')[0].toUpperCase()}
                        </div>
                        <div>
                          <div className="blogs-featured-author-name">{featured.author || 'Admin'}</div>
                          <div className="blogs-featured-author-date">{formatDate(featured.createdAt)}</div>
                        </div>
                      </div>
                    </div>
                    <div className="blogs-featured-read">
                      <span>Read Full Story</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              </>
            )}

            {/* Ornament + Grid */}
            {rest.length > 0 && (
              <>
                <div className="blogs-ornament">
                  <div className="blogs-ornament-line" />
                  <div className="blogs-ornament-diamond" />
                  <div className="blogs-ornament-line" />
                </div>

                <div className="blogs-section-head">
                  <div className="blogs-section-label">Latest Articles</div>
                  <div className="blogs-count">{filtered.length - 1} article{filtered.length - 1 !== 1 ? 's' : ''}</div>
                </div>

                <div className="blogs-grid">
                  {rest.map((blog, i) => (
                    <Link key={blog._id} href={`/blogs/${blog._id}`} className="blog-card"
                      style={{ animationDelay: `${i * 0.08}s` }}>
                      <div className={blog.coverImage ? 'blog-card-img' : 'blog-card-no-img'}>
                        {blog.coverImage ? (
                          <>
                            <img src={blog.coverImage} alt={blog.title} />
                            <div className="blog-card-img-overlay" />
                          </>
                        ) : (
                          <>
                            <div className="blog-card-no-img-pattern" />
                            <div className="blog-card-no-img-letter">{blog.title?.[0]}</div>
                          </>
                        )}
                        <div className="blog-card-cat">{blog.category}</div>
                      </div>
                      <div className="blog-card-body">
                        <div className="blog-card-date">{formatDate(blog.createdAt)}</div>
                        <h3 className="blog-card-title">{blog.title}</h3>
                        <p className="blog-card-excerpt">
                          {stripHtml(blog.content).slice(0, 120)}...
                        </p>
                        <div className="blog-card-footer">
                          <div className="blog-card-author">
                            <div className="blog-card-avatar">
                              {(blog.author || 'A')[0].toUpperCase()}
                            </div>
                            <div className="blog-card-author-name">{blog.author || 'Admin'}</div>
                          </div>
                          <div className="blog-card-read">
                            Read
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                    <button
                      className="blogs-load-btn"
                      onClick={() => setVisibleCount(v => v + 6)}
                    >
                      <span>Load More Stories</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'relative', zIndex: 1 }}>
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
    </div>
    </>
  )
}