import { NextResponse } from 'next/server';
import { postsCollection, isLive } from '../../../../lib/blog-server';
import { getPostBySlugOrId } from '../../../../lib/blog-utils';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

export async function GET(req, { params }) {
  try {
    const { id } = await params; // slug OR legacy ObjectId
    const collection = await postsCollection();
    const post = await getPostBySlugOrId(collection, id);

    if (!post || !isLive(post)) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404, headers: CORS });
    }
    return NextResponse.json({ post }, { status: 200, headers: CORS });
  } catch (err) {
    console.error('Blog GET by ID error:', err);
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500, headers: CORS });
  }
}