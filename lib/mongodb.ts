import mongoose from 'mongoose';

const mongodb_uri = process.env.MONGODB_URI as string;

if (!mongodb_uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const cached: { conn: mongoose.Mongoose | null; promise: Promise<mongoose.Mongoose> | null } = global.mongoose || { conn: null, promise: null };

if (typeof global !== 'undefined') {
  global.mongoose = cached;
}

export async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(mongodb_uri, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
