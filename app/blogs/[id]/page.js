'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import './blog-detail.css'

const CATEGORIES = ['Real Estate', 'Investment', 'Market Trends', 'Lifestyle', 'News', 'Tips & Advice']

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })
}

function stripHtml(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()
}

function readTime(content) {
  return Math.max(1, Math.ceil(stripHtml(content).split(' ').length / 200))
}

export default function BlogDetailPage({ params }) {
  const { id } = params
  const [blog, setBlog]           = useState(null)
  const [related, setRelated]     = useState([])
  const [allBlogs, setAllBlogs]   = useState([])
  const [catCounts, setCatCounts] = useState({})
  const [loading, setLoading]     = useState(true)
  const [notFound, setNotFound]   = useState(false)

  useEffect(() => {
    // Fetch the specific blog post
    fetch(`/api/blogs/${id}`)
      .then(r => r.json())
      .then(data => {
        if (!data.post) { setNotFound(true); setLoading(false); return }
        setBlog(data.post)
        setLoading(false)
        // Fetch related by same category
        fetch(`/api/blogs?category=${encodeURIComponent(data.post.category)}&limit=4`)
          .then(r => r.json())
          .then(d => setRelated((d.posts || []).filter(p => p._id !== id).slice(0, 5)))
          .catch(() => {})
      })
      .catch(() => { setNotFound(true); setLoading(false) })

    // Fetch all blogs for sidebar categories + recent
    fetch('/api/blogs')
      .then(r => r.json())
      .then(data => {
        const posts = data.posts || []
        setAllBlogs(posts)
        const counts = {}
        posts.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1 })
        setCatCounts(counts)
      })
      .catch(() => {})
  }, [id])

  const recentBlogs = [...allBlogs]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5)

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
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2e7d52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
            <div className="bd-hero">
              <div className="bd-hero-inner">
                <nav className="bd-breadcrumb" aria-label="Breadcrumb">
                  <Link href="/">Home</Link>
                  <span className="bc-sep">○</span>
                  <Link href="/blogs">Blog</Link>
                  <span className="bc-sep">○</span>
                  <span className="bc-active">{blog.category}</span>
                </nav>
                <h1 className="bd-hero-title">{blog.title}</h1>
                <div className="bd-hero-meta">
                  <span className="bd-hero-cat">{blog.category}</span>
                  <span className="dot">|</span>
                  <span>{formatDate(blog.createdAt)}</span>
                  <span className="dot">|</span>
                  <span>{readTime(blog.content)} Minutes Read</span>
                </div>
              </div>
            </div>

            {/* ── Main Content ── */}
            <div className="bd-main">

              {/* Article */}
              <article className="bd-article">
                {blog.coverImage && (
                  <img src={blog.coverImage} alt={blog.title} className="bd-article-cover" />
                )}
                <div className="bd-article-cover-meta">
                  <span className="bd-cover-cat">{blog.category}</span>
                  <span>{readTime(blog.content)} Minutes Read</span>
                </div>
                <div className="bd-article-body">
                  <div
                    className="bd-prose"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                </div>
                <div className="bd-article-footer">
                  <Link href="/blogs" className="bd-back-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                    </svg>
                    Back to Blog
                  </Link>
                  <div className="bd-published-date">Published {formatDate(blog.createdAt)}</div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="bd-sidebar">

                {/* Categories */}
                <div className="bd-sidebar-card">
                  <div className="bd-sidebar-head">
                    <div className="bd-sidebar-head-title">Categories</div>
                  </div>
                  <div className="bd-cat-list">
                    {CATEGORIES.map(cat => (
                      <Link key={cat} href={`/blogs?category=${encodeURIComponent(cat)}`} className="bd-cat-item">
                        <span>{cat} <span className="bd-cat-count">({catCounts[cat] || 0})</span></span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Recent Blogs */}
                {recentBlogs.length > 0 && (
                  <div className="bd-sidebar-card">
                    <div className="bd-sidebar-head">
                      <div className="bd-sidebar-head-title">Recent Blogs</div>
                    </div>
                    <div className="bd-recent-list">
                      {recentBlogs.map(r => (
                        <Link key={r._id} href={`/blogs/${r._id}`} className="bd-recent-item">
                          <div className="bd-recent-thumb">
                            {r.coverImage
                              ? <img src={r.coverImage} alt={r.title} />
                              : <span className="bd-recent-no-img">{r.title?.[0]}</span>
                            }
                          </div>
                          <div>
                            <div className="bd-recent-title">{r.title}</div>
                            <div className="bd-recent-date">{formatDate(r.createdAt)}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </aside>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  )
}