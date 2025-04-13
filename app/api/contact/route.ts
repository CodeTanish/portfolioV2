import { NextRequest } from 'next/server'
import { connectToDB } from '@/lib/mongodb'
import Contact from '@/lib/model/contact'
import { sendContactEmail } from '@/lib/mail'
import { contactSchema } from '@/lib/validation/contactSchema'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const validated = contactSchema.safeParse(body)
    if (!validated.success) {
      return new Response(JSON.stringify({ error: 'Invalid input.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const { name, email, message } = validated.data

    await connectToDB()
    await Contact.create({ name, email, message })
    await sendContactEmail({ name, email, message })

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Something went wrong.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
