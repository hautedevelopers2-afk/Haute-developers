import { NextResponse } from 'next/server';
import { postsCollection, liveFilter } from '../../../lib/blog-server';

const CORS = {
  'Access-Control-Allow-Origin': 'http://localhost:3001',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const parsed = parseInt(searchParams.get('limit') || '100', 10);
    const limit = Math.min(Math.max(Number.isNaN(parsed) ? 100 : parsed, 1), 200);

    const collection = await postsCollection();
    const query = liveFilter(category && category !== 'All' ? [{ category }] : []);

    const posts = await collection.find(query).sort({ createdAt: -1 }).limit(limit).toArray();

    return NextResponse.json({ posts }, { status: 200, headers: CORS });
  } catch (err) {
    console.error('Blog GET error:', err);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500, headers: CORS });
  }
}