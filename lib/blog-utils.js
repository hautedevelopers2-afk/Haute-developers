import { ObjectId } from 'mongodb';

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')   // strip non-word chars
    .replace(/[\s_]+/g, '-')    // spaces/underscores -> hyphens
    .replace(/-+/g, '-');       // collapse repeated hyphens
}

// Ensures uniqueness by appending -2, -3, etc. if the slug already exists
export async function generateUniqueSlug(collection, title, excludeId = null) {
  const base = slugify(title);
  let slug = base;
  let counter = 2;

  while (true) {
    const query = excludeId
      ? { slug, _id: { $ne: new ObjectId(excludeId) } }
      : { slug };
    const existing = await collection.findOne(query);
    if (!existing) return slug;
    slug = `${base}-${counter}`;
    counter++;
  }
}

// Looks a post up by slug first, falls back to ObjectId
// (keeps old /blogs/<objectid> links working during migration)
export async function getPostBySlugOrId(collection, slugOrId) {
  let post = await collection.findOne({ slug: slugOrId });
  if (!post && ObjectId.isValid(slugOrId)) {
    post = await collection.findOne({ _id: new ObjectId(slugOrId) });
  }
  return post;
}