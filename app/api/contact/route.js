import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    // Log the email content instead of sending
    console.log("Email Content:")
    console.log(`From: ${name} <${email}>`)
    console.log(`To: ${process.env.CONTACT_EMAIL}`)
    console.log(`Subject: New Contact Form Submission from ${name}`)
    console.log(`Message: ${message}`)

    // In a real scenario, you would send the email here

    return NextResponse.json({ message: "Email content logged successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing form submission:", error)
    return NextResponse.json({ error: "Failed to process form submission" }, { status: 500 })
  }
}

