import BlogsClient from './BlogsClient';
import { getPosts, toCard, countByCategory, CATEGORIES, SITE_URL } from '../../lib/blog-server';

export const revalidate = 3600;

export async function generateMetadata({ searchParams }) {
  const { category } = await searchParams;
  const valid = CATEGORIES.includes(category);
  return {
    title: valid
      ? `${category} Articles | Haute World Developers Blog`
      : 'Real Estate Blog | Haute World Developers',
    description:
      'Expert insights on plots, villas and investment in Delhi NCR, Dholera, Jaipur and beyond — market trends, buying guides and news from Haute World Developers.',
    alternates: { canonical: `${SITE_URL}/blogs` },
    robots: valid ? { index: false, follow: true } : { index: true, follow: true },
  };
}

export default async function BlogsPage({ searchParams }) {
  const { category } = await searchParams;
  const activeCategory = CATEGORIES.includes(category) ? category : 'All';

  const all = await getPosts({ limit: 200 });
  const counts = countByCategory(all);
  const filtered = activeCategory === 'All' ? all : all.filter((p) => p.category === activeCategory);

  return (
    <BlogsClient
      key={activeCategory}
      posts={filtered.map(toCard)}
      recent={all.slice(0, 5).map(toCard)}
      counts={counts}
      activeCategory={activeCategory}
    />
  );
}