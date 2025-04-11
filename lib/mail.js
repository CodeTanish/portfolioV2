import nodemailer from 'nodemailer'

export async function sendContactEmail({ name, email, message }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use 'smtp' config
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER, // sender
    to: process.env.NOTIFY_EMAIL, // ✅ recipient
    subject: `New Contact Message from ${name}`,
    text: `You have a new message from ${name} <${email}>:\n\n${message}`,
  }
  
  await transporter.sendMail(mailOptions)
}
