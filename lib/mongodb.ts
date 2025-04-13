import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
  if (isConnected) return

  try {
    await mongoose.connect(process.env.MONGODB_URI!)
    isConnected = true
    console.log('MongoDB Connected')
  } catch (error) {
    console.error('DB Error:', error)
  }
}