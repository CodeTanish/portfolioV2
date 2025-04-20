// import { connectToDB } from "@/lib/mongodb";
// import { NextRequest } from "next/server";
// import Contact from "@/lib/model/contact"
// import { sendContactEmail } from "@/lib/mail";

// export async function POST(request: NextRequest) {
//   try {
//       const body = await request.json();
//       const { name, email, message } = body;

//       // Validate Input
//       if (!name || !email || !message) {
//           return new Response(
//               JSON.stringify({ error: 'All fields are required.' }),
//               { status: 400, headers: { 'Content-Type': 'application/json' } }
//           );
//       }

//       // Database Connection
//       try {
//           await connectToDB();
//       } catch (error) {
//           console.error('Database connection failed:', error);
//           return new Response(
//               JSON.stringify({ error: 'Database connection error.' }),
//               { status: 500, headers: { 'Content-Type': 'application/json' } }
//           );
//       }

//       // Save to Database
//       try {
//           await Contact.create({ name, email, message });
//       } catch (error) {
//           console.error('Database save error:', error);
//           return new Response(
//               JSON.stringify({ error: 'Failed to save contact message.' }),
//               { status: 500, headers: { 'Content-Type': 'application/json' } }
//           );
//       }

//       // Send Email
//       try {
//           await sendContactEmail({ name, email, message });
//       } catch (error) {
//           console.error('Email sending error:', error);
//           return new Response(
//               JSON.stringify({ error: 'Error sending the email.' }),
//               { status: 500, headers: { 'Content-Type': 'application/json' } }
//           );
//       }

//       return new Response(
//           JSON.stringify({ message: 'Message sent successfully!' }),
//           { status: 200, headers: { 'Content-Type': 'application/json' } }
//       );

//   } catch (error) {
//       console.error('Unexpected Error:', error);
//       return new Response(
//           JSON.stringify({ error: 'Something went wrong.' }),
//           { status: 500, headers: { 'Content-Type': 'application/json' } }
//       );
//   }
// }
