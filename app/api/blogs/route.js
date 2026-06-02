import { NextResponse } from 'next/server';
import clientPromise from '../../../models/mongodb-blogs';

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
    const limit = parseInt(searchParams.get('limit') || '100');

    const client = await clientPromise;
    const db = client.db('blogs');
    const collection = db.collection('posts');

    const query = category && category !== 'All' ? { category } : {};

    const posts = await collection
      .find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray();

    return NextResponse.json(
      { posts },
      { status: 200, headers: CORS }
    );
  } catch (err) {
    console.error('Blog GET error:', err);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500, headers: CORS }
    );
  }
}