import { getSitemapPosts, SITE_URL } from '../lib/blog-server'

export const revalidate = 3600

export default async function sitemap() {
  const staticPages = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/expressway-residency', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/haute-golf-bungalows', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/shri-dwarka-city', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/haute-eden-valley', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/haute-city-1st-avenue', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/haute-residency', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/blogs', priority: 0.8, changeFrequency: 'daily' },
    { path: '/careers', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms-of-use', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/refund-policy', priority: 0.3, changeFrequency: 'yearly' },
  ].map((p) => ({
    url: `${SITE_URL}${p.path}`,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))

  const posts = await getSitemapPosts()
  const blogPages = posts.map((p) => ({
    url: `${SITE_URL}/blogs/${p.slug || p._id}`,
    lastModified: new Date(p.updatedAt || p.createdAt || Date.now()),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}