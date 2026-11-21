'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './blogs.css'

const CATEGORIES = ['Real Estate', 'Investment', 'Market Trends', 'Lifestyle', 'News', 'Tips & Advice']

export default function BlogsClient({ posts, recent, counts, activeCategory }) {
  const [visibleCount, setVisibleCount] = useState(6)

  const featured = posts[0]
  const rest = posts.slice(1, visibleCount + 1)

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

        <div className="blogs-main">
          <div className="blogs-content-col">
            {posts.length === 0 ? (
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
                {featured && (
                  <>
                    <div className="blogs-featured-label">Featured Story</div>
                    <Link href={`/blogs/${featured.slug}`} className="blogs-featured">
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
                          <span>{featured.dateLabel}</span>
                          <span className="dot">|</span>
                          <span>{featured.readTime} Minutes Read</span>
                        </div>
                        <h2 className="blogs-featured-title">{featured.title}</h2>
                        <p className="blogs-featured-excerpt">{featured.excerpt}...</p>
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

                {rest.length > 0 && (
                  <div className="blogs-divider">
                    <div className="blogs-divider-line" />
                    <div className="blogs-divider-diamond" />
                    <div className="blogs-divider-line" />
                  </div>
                )}

                {rest.length > 0 && (
                  <>
                    <div className="blogs-section-head">
                      <div className="blogs-section-label">Latest Articles</div>
                      <div className="blogs-count">{posts.length - 1} article{posts.length - 1 !== 1 ? 's' : ''}</div>
                    </div>

                    <div className="blogs-grid">
                      {rest.map((blog) => (
                        <Link key={blog._id} href={`/blogs/${blog.slug}`} className="blog-card">
                          <div className={blog.coverImage ? 'blog-card-img' : 'blog-card-no-img'}>
                            {blog.coverImage ? (
                              <img src={blog.coverImage} alt={blog.title} loading="lazy" />
                            ) : (
                              <div className="blog-card-no-img-letter">{blog.title?.[0]}</div>
                            )}
                            <div className="blog-card-cat">{blog.category}</div>
                          </div>
                          <div className="blog-card-body">
                            <div className="blog-card-meta">
                              <span>{blog.category}</span>
                              <span className="dot">|</span>
                              <span>{blog.dateLabel}</span>
                              <span className="dot">|</span>
                              <span>{blog.readTime} Min Read</span>
                            </div>
                            <h3 className="blog-card-title">{blog.title}</h3>
                            <p className="blog-card-excerpt">{blog.excerpt.slice(0, 130)}...</p>
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

                    {posts.length - 1 > visibleCount && (
                      <div className="blogs-load-more">
                        <button className="blogs-load-btn" onClick={() => setVisibleCount((v) => v + 6)}>
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

          {/* Sidebar */}
          <aside className="blogs-sidebar">
            <div className="blogs-sidebar-card">
              <div className="blogs-sidebar-head">
                <div className="blogs-sidebar-head-title">Categories</div>
              </div>
              <div className="blogs-cat-list">
                {activeCategory !== 'All' && (
                  <Link href="/blogs" className="blogs-cat-item"><span>All Articles</span></Link>
                )}
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat}
                    href={`/blogs?category=${encodeURIComponent(cat)}`}
                    className={`blogs-cat-item ${activeCategory === cat ? 'active' : ''}`}
                  >
                    <span>{cat} <span className="blogs-cat-count">({counts[cat] || 0})</span></span>
                  </Link>
                ))}
              </div>
            </div>

            {recent.length > 0 && (
              <div className="blogs-sidebar-card">
                <div className="blogs-sidebar-head">
                  <div className="blogs-sidebar-head-title">Recent Blogs</div>
                </div>
                <div className="blogs-recent-list">
                  {recent.map((r) => (
                    <Link key={r._id} href={`/blogs/${r.slug}`} className="blogs-recent-item">
                      <div className="blogs-recent-thumb">
                        {r.coverImage
                          ? <img src={r.coverImage} alt={r.title} loading="lazy" />
                          : <span className="blogs-recent-no-img">{r.title?.[0]}</span>}
                      </div>
                      <div>
                        <div className="blogs-recent-title">{r.title}</div>
                        <div className="blogs-recent-date">{r.dateLabel}</div>
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