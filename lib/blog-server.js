import { cache } from 'react';
import clientPromise from '../models/mongodb-blogs';
import { getPostBySlugOrId } from './blog-utils';

export const SITE_URL = 'https://www.hautedevelopers.com';
export const CATEGORIES = ['Real Estate', 'Investment', 'Market Trends', 'Lifestyle', 'News', 'Tips & Advice'];

const HIDDEN_STATUSES = ['draft', 'scheduled', 'unpublished', 'deleted', 'archived'];

export async function postsCollection() {
  const client = await clientPromise;
  return client.db('blogs').collection('posts');
}

/** Mongo filter: only publicly visible posts. Extra conditions can be appended. */
export function liveFilter(extra = [], now = new Date()) {
  return {
    $and: [
      { status: { $nin: HIDDEN_STATUSES } },
      { deleted: { $ne: true } },
      { $or: [{ publishAt: { $exists: false } }, { publishAt: null }, { publishAt: { $lte: now } }] },
      ...extra,
    ],
  };
}

/** Same rule, applied to a single document in JS. */
export function isLive(post, now = new Date()) {
  if (!post) return false;
  if (post.deleted === true) return false;
  if (post.status && HIDDEN_STATUSES.includes(post.status)) return false;
  if (post.publishAt && new Date(post.publishAt) > now) return false;
  return true;
}

export function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

export function readTime(content) {
  return Math.max(1, Math.ceil(stripHtml(content).split(' ').length / 200));
}

function toISO(d) {
  const x = new Date(d);
  return isNaN(x.getTime()) ? null : x.toISOString();
}

// Fixed timezone so server and browser never disagree on the date
export function formatDate(d) {
  const x = new Date(d);
  if (isNaN(x.getTime())) return '';
  return x.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' });
}

/** Lightweight, serialisable object for cards (no full article body). */
export function toCard(post) {
  return {
    _id: String(post._id),
    slug: post.slug || String(post._id),
    title: post.title || '',
    category: post.category || '',
    coverImage: post.coverImage || '',
    createdAt: toISO(post.createdAt),
    dateLabel: formatDate(post.createdAt),
    excerpt: stripHtml(post.content).slice(0, 200),
    readTime: readTime(post.content),
  };
}

/** Full article, serialisable. */
export function toArticle(post) {
  return {
    ...toCard(post),
    content: post.content || '',
    metaTitle: post.metaTitle || '',
    metaDescription: post.metaDescription || '',
    updatedAt: toISO(post.updatedAt || post.createdAt),
  };
}

export async function getPosts({ category, limit = 100 } = {}) {
  try {
    const col = await postsCollection();
    const query = liveFilter(category ? [{ category }] : []);
    return await col.find(query).sort({ createdAt: -1 }).limit(limit).toArray();
  } catch (err) {
    console.error('getPosts error:', err);
    return [];
  }
}

export async function getLatestPosts(n = 3) {
  const posts = await getPosts({ limit: n });
  return posts.map(toCard);
}

export function countByCategory(posts) {
  const counts = {};
  posts.forEach((p) => { counts[p.category] = (counts[p.category] || 0) + 1; });
  return counts;
}

export const getPostBySlug = cache(async (slug) => {
  try {
    const col = await postsCollection();
    const post = await getPostBySlugOrId(col, slug);
    return isLive(post) ? post : null;
  } catch (err) {
    console.error('getPostBySlug error:', err);
    return null;
  }
});

export async function getSitemapPosts() {
  try {
    const col = await postsCollection();
    return await col
      .find(liveFilter(), { projection: { slug: 1, createdAt: 1, updatedAt: 1 } })
      .sort({ createdAt: -1 })
      .toArray();
  } catch (err) {
    console.error('getSitemapPosts error:', err);
    return [];
  }
}