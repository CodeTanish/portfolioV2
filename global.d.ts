import mongoose from 'mongoose';

// Augmenting the global object to include mongoose
declare global {
  var mongoose: { conn: mongoose.Mongoose | null; promise: Promise<mongoose.Mongoose> | null } | undefined;
}

// If this is a module, the following line will ensure this file is treated as a module
export {};
