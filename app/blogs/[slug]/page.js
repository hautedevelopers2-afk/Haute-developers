import { notFound } from 'next/navigation';
import BlogDetailClient from './BlogDetailClient';
import {
  getPostBySlug, getPosts, toArticle, toCard, countByCategory, stripHtml, SITE_URL,
} from '../../../lib/blog-server';

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Article Not Found', robots: { index: false, follow: false } };
  }

  const title = post.metaTitle?.trim() || post.title;
  const description = post.metaDescription?.trim() || stripHtml(post.content).slice(0, 160);
  // Always canonicalise to the slug URL, even if visited via a legacy ObjectId link
  const url = `${SITE_URL}/blogs/${post.slug || post._id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title, description, url,
      siteName: 'Haute World Developers',
      images: post.coverImage ? [post.coverImage] : [],
      type: 'article',
      publishedTime: post.createdAt ? new Date(post.createdAt).toISOString() : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title, description,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const article = toArticle(post);
  const all = await getPosts({ limit: 200 });
  const url = `${SITE_URL}/blogs/${article.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.metaTitle || article.title,
    description: article.metaDescription || article.excerpt.slice(0, 160),
    image: article.coverImage ? [article.coverImage] : undefined,
    datePublished: article.createdAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: 'Haute World Developers', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Haute World Developers',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/web-logo.png` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailClient
        blog={article}
        recentBlogs={all.slice(0, 5).map(toCard)}
        catCounts={countByCategory(all)}
      />
    </>
  );
}