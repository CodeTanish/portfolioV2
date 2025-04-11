import { NextRequest } from 'next/server'
import { connectToDB } from '../../../lib/mongodb'
import Contact from '../../../lib/model/contact'
import { sendContactEmail } from '../../../lib/mail'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body as {
      name: string
      email: string
      message: string
    }

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    await connectToDB()

    // Save to DB
    await Contact.create({ name, email, message })

    // Send email
    await sendContactEmail({ name, email, message })

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ error: 'Something went wrong.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
