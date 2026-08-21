import clientPromise from '../models/mongodb-blogs.js';
import { generateUniqueSlug } from '../lib/blog-utils.js';

async function run() {
  const client = await clientPromise;
  const db = client.db('blogs');
  const collection = db.collection('posts');

  const posts = await collection.find({ slug: { $exists: false } }).toArray();

  for (const post of posts) {
    const slug = await generateUniqueSlug(collection, post.title);
    await collection.updateOne({ _id: post._id }, { $set: { slug } });
    console.log(`${post.title} -> ${slug}`);
  }

  console.log(`Done. ${posts.length} posts updated.`);
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});