import mongoose from 'mongoose';

const mongodb_uri = process.env.MONGODB_URI as string;

if (!mongodb_uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Extend the global object to include a `mongoose` cache
declare global {
  var mongoose: {
    conn: mongoose.Mongoose | null;
    promise: Promise<mongoose.Mongoose> | null;
  } | undefined;
}

// Use a properly typed cache
const globalWithMongoose = global as typeof globalThis & {
  mongoose?: {
    conn: mongoose.Mongoose | null;
    promise: Promise<mongoose.Mongoose> | null;
  };
};

const cached = globalWithMongoose.mongoose ?? {
  conn: null,
  promise: null,
};

globalWithMongoose.mongoose = cached;

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
