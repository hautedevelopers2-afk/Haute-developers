import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI_BLOG;
let client;
let clientPromise;

if (!uri) throw new Error('MONGODB_URI_BLOG is not defined in .env');

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromiseBlog) {
    client = new MongoClient(uri);
    global._mongoClientPromiseBlog = client.connect();
  }
  clientPromise = global._mongoClientPromiseBlog;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;