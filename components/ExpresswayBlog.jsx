"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}
function formatBlogDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
}
function blogReadTime(content) {
  return Math.max(1, Math.ceil(stripHtml(content).split(" ").length / 200));
}

const IconArrowRight = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function ExpresswayBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((r) => r.json())
      .then((data) => {
        setBlogs(data.posts || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const latestBlogs = [...blogs]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  return (
    <>
      <div className="er-blog-head">
        <h2 id="blogs-heading" style={{ margin: 0 }}>
          Our Recent{" "}
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Blogs</em>
        </h2>
        <Link href="/blogs" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
          View All Articles <IconArrowRight size={14} />
        </Link>
      </div>

      {loading ? (
        <div className="er-blog-empty">Loading the latest articles…</div>
      ) : latestBlogs.length === 0 ? (
        <div className="er-blog-empty">New stories are on their way — check back soon.</div>
      ) : (
        <div className="er-blog-grid">
          {latestBlogs.map((b) => (
            <Link key={b._id} href={`/blogs/${b._id}`} className="er-blog-card">
              <div className="er-blog-image">
                {b.coverImage ? (
                  <img src={b.coverImage} alt={b.title} loading="lazy" />
                ) : (
                  <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "3rem", color: "rgba(26,74,58,0.15)" }}>{b.title?.[0]}</span>
                  </div>
                )}
              </div>
              <div className="er-blog-body">
                <span className="er-blog-meta">{b.category} · {formatBlogDate(b.createdAt)} · {blogReadTime(b.content)} Min Read</span>
                <h3>{b.title}</h3>
                <p>{stripHtml(b.content).slice(0, 110)}...</p>
                <span className="er-blog-read">Read More <IconArrowRight size={12} /></span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}