import {FootyLabsContactMessage} from "@/components/contact/emails/email-template"
import {Resend} from "resend"
import {emailFormSchema} from "@/components/contact/email-contact-form"
import {render} from "@react-email/render"
import {FootyLabsConfirmationMessage} from "@/components/contact/emails/confirmation";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate with Zod
    const {name, email, message} = body;

    // Render the React email to HTML
    const emailHtml = await render(
        FootyLabsContactMessage({
          name,
          email,
          message,
        })
    )
    console.log('Type of HTML content:', typeof emailHtml); // Should log: 'string'
    // Send email
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: "New Contact Form Submission",
      html: emailHtml,
    })

    if (result.error?.message) throw new Error(result.error.message)

    // 2️⃣ Render the user confirmation email
    const confirmationHtml = await render(
        FootyLabsConfirmationMessage({name})
    )

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: email, // <-- user's email
      subject: "We received your message",
      html: confirmationHtml,
    })

    // Return success JSON
    return Response.json({success: true, result})
  } catch (error) {
    console.error("Email API Error:", error)
    return Response.json({success: false, error: String(error)}, {status: 500})
  }
}
