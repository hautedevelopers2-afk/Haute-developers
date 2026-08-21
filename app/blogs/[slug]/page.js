import clientPromise from '../../../models/mongodb-blogs';
import { getPostBySlugOrId } from '../../../lib/blog-utils';
import BlogDetailClient from './BlogDetailClient';

function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
}

async function fetchPost(slug) {
  const client = await clientPromise;
  const db = client.db('blogs');
  const collection = db.collection('posts');
  return getPostBySlugOrId(collection, slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    return { title: 'Article Not Found' };
  }

  const title = post.metaTitle?.trim() || post.title;
  const description = post.metaDescription?.trim() || stripHtml(post.content).slice(0, 160);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: post.coverImage ? [post.coverImage] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <BlogDetailClient slug={slug} />;
}