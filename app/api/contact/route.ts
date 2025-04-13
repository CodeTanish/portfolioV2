import { NextRequest } from 'next/server'
import { connectToDB } from '../../../lib/mongodb'
import Contact from '../../../lib/model/contact'
import { sendContactEmail } from '../../../lib/mail'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    await connectToDB()

    await Contact.create({ name, email, message })

    try {
      await sendContactEmail({ name, email, message })
    } catch (mailErr) {
      console.error('Email sending error:', mailErr)
      return new Response(JSON.stringify({ error: 'Saved but failed to send email.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Internal error:', err)
    return new Response(JSON.stringify({ error: 'Internal server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
