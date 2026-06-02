'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import './blog-detail.css'

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })
}

function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()
}

export default function BlogDetailPage({ params }) {
  const { id } = params
  const [blog, setBlogs] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    fetch(`/api/blogs/${id}`)
      .then(r => r.json())
      .then(data => {
        if (!data.post) { setNotFound(true); setLoading(false); return }
        setBlogs(data.post)
        setLoading(false)
        // fetch related posts by same category
        fetch(`/api/blogs?category=${encodeURIComponent(data.post.category)}&limit=4`)
          .then(r => r.json())
          .then(d => setRelated((d.posts || []).filter(p => p._id !== id).slice(0, 3)))
          .catch(() => {})
      })
      .catch(() => { setNotFound(true); setLoading(false) })
  }, [id])

  return (
    <>
      <Navbar />
      <div className="bd-page">

        {loading ? (
          <div className="bd-center-state" style={{ paddingTop: '140px' }}>
            <div className="bd-spinner" />
            <div className="bd-spinner-text">Loading article...</div>
          </div>
        ) : notFound ? (
          <div className="bd-center-state" style={{ paddingTop: '140px' }}>
            <div className="bd-404-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9901a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
            </div>
            <h1 className="bd-404-title">Article Not Found</h1>
            <p className="bd-404-desc">This article may have been removed or the link is incorrect.</p>
            <Link href="/blogs" className="bd-back-btn">← Back to Blog</Link>
          </div>
        ) : (
          <>
            {/* ── Hero ── */}
            <section className="bd-hero">
              {blog.coverImage && (
                <div className="bd-hero-img" style={{ backgroundImage: `url('${blog.coverImage}')` }} />
              )}
              <div className="bd-hero-overlay" />
              <div className="bd-hero-pattern" />
              <div className="bd-hero-content">
                <nav className="bd-breadcrumb" aria-label="Breadcrumb">
                  <Link href="/">Home</Link>
                  <span>/</span>
                  <Link href="/blogs">Blog</Link>
                  <span>/</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{blog.category}</span>
                </nav>
                <div className="bd-cat-badge">{blog.category}</div>
                <h1 className="bd-hero-title">{blog.title}</h1>
                <div className="bd-hero-meta">
                  <div className="bd-hero-author">
                    <div className="bd-hero-avatar">{(blog.author || 'A')[0].toUpperCase()}</div>
                    <div>
                      <div className="bd-hero-author-name">{blog.author || 'Admin'}</div>
                      <div className="bd-hero-date">{formatDate(blog.createdAt)}</div>
                    </div>
                  </div>
                  <div className="bd-meta-sep" />
                  <div className="bd-meta-item">
                    {Math.max(1, Math.ceil(stripHtml(blog.content).split(' ').length / 200))} min read
                  </div>
                </div>
              </div>
              <div className="bd-hero-bottom" />
            </section>

            {/* ── Main Content ── */}
            <div className="bd-main">

              {/* Article */}
              <article className="bd-article">
                {blog.coverImage && (
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="bd-article-cover"
                  />
                )}
                <div className="bd-article-body">
                  <div
                    className="bd-prose"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                </div>
                <div className="bd-article-footer">
                  <Link href="/blogs" className="bd-back-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                    </svg>
                    Back to Blog
                  </Link>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: '#6b7280' }}>
                    Published {formatDate(blog.createdAt)}
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="bd-sidebar">

                {/* Author */}
                <div className="bd-sidebar-card">
                  <div className="bd-sidebar-head">
                    <div className="bd-sidebar-head-label">Written By</div>
                  </div>
                  <div className="bd-author-body">
                    <div className="bd-author-avatar-lg">{(blog.author || 'A')[0].toUpperCase()}</div>
                    <div className="bd-author-name">{blog.author || 'Admin'}</div>
                    <div className="bd-author-role">Haute World Developers</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bd-sidebar-card">
                  <div className="bd-cta-body">
                    <p className="bd-cta-title">Interested in Premium Real Estate?</p>
                    <p className="bd-cta-desc">Explore residential plots and luxury properties across NCR with expert guidance from our team.</p>
                    <a href="/#contact" className="bd-cta-btn">Book a Site Visit →</a>
                  </div>
                </div>

                {/* Related */}
                {related.length > 0 && (
                  <div className="bd-sidebar-card">
                    <div className="bd-sidebar-head">
                      <div className="bd-sidebar-head-label">Related Articles</div>
                    </div>
                    <div className="bd-related-list">
                      {related.map(r => (
                        <Link key={r._id} href={`/blogs/${r._id}`} className="bd-related-item">
                          <div className="bd-related-thumb">
                            {r.coverImage
                              ? <img src={r.coverImage} alt={r.title} />
                              : r.title?.[0]
                            }
                          </div>
                          <div>
                            <div className="bd-related-title">{r.title}</div>
                            <div className="bd-related-date">{formatDate(r.createdAt)}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Back to all */}
                <div className="bd-ornament">
                  <div className="bd-ornament-line" />
                  <div className="bd-ornament-diamond" />
                  <div className="bd-ornament-line" />
                </div>
              </aside>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  )
}