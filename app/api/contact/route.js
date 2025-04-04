import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    console.log("📩 Sending email...")

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // should be "smtp.gmail.com"
      port: 465, // using port 465 for SSL
      secure: true, // secure true means SSL connection
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    const mailOptions = {
      from: `"TechFuel Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<h2>New Contact Form Submission</h2>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    }

    await transporter.sendMail(mailOptions)

    console.log("✅ Email sent successfully!")
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("❌ Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email.", details: error.message }, { status: 500 })
  }
}

