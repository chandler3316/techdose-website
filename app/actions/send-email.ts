"use server"

interface EmailData {
  name: string
  email: string
  message: string
}

export async function sendEmail(data: EmailData) {
  // This is a temporary placeholder function while email functionality is disabled
  console.log("Email sending is temporarily disabled")
  console.log("Would have sent:", data)

  // Simulate successful response
  return { success: true, message: "This is preview mode. Email functionality is temporarily disabled." }
}

