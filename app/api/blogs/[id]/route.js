import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '../../../../models/mongodb-blogs';

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
    const { id } = params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: 'Invalid post ID' }, { status: 400, headers: CORS });
    }

    const client = await clientPromise;
    const db = client.db('blogs');
    const collection = db.collection('posts');

    const post = await collection.findOne({ _id: new ObjectId(id) });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404, headers: CORS });
    }

    return NextResponse.json({ post }, { status: 200, headers: CORS });
  } catch (err) {
    console.error('Blog GET by ID error:', err);
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500, headers: CORS });
  }
}