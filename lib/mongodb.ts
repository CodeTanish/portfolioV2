import mongoose from 'mongoose'

const mongodb_uri = process.env.MONGODB_URI as string

if (!mongodb_uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

let cached = (global as any).mongoose || { conn: null, promise: null }

export async function connectToDB() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(mongodb_uri, {
      bufferCommands: false,
    })
  }

  cached.conn = await cached.promise
  return cached.conn
}
