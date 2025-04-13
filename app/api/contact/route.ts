import { NextRequest } from 'next/server'
import { connectToDB } from '@/lib/mongodb'
import Contact from '@/lib/model/contact'
import { sendContactEmail } from '@/lib/mail'
import { contactSchema } from '@/lib/validation/contactSchema'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

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
<<<<<<< HEAD
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Something went wrong.' }), {
=======
  } catch (err) {
    console.error('Internal error:', err)
    return new Response(JSON.stringify({ error: 'Internal server error.' }), {
>>>>>>> 20c88e3af57eb6350ffe635e623b39ea12bdc595
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
