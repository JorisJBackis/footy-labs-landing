import { NextRequest, NextResponse } from 'next/server'
import { render } from '@react-email/render'
import FootyLabsContactMessage from "@/components/contact/emails/email-template";
import {FootyLabsConfirmationMessage} from "@/components/contact/emails/confirmation";
import {emailConfig, transporter} from "@/lib/email/mailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const adminEmailHtml = await render(
        FootyLabsContactMessage({ name, email, message })
    )

    // Send email to admin
    await transporter.sendMail({
      from: `"${emailConfig.from.name}" <${emailConfig.from.address}>`,
      to: process.env.SMTP_TO_EMAIL || 'admin@footylabs.ai', // Admin email
      subject: 'New Contact Form Submission',
      html: adminEmailHtml,
      replyTo: email, // So admin can reply to the user
    })

    console.log(`Contact form email sent to admin: ${process.env.SMTP_TO_EMAIL}`)

    const userEmailHtml = await render(
        FootyLabsConfirmationMessage({ name })
    )

    // Send email to user
    await transporter.sendMail({
      from: `"${emailConfig.from.name}" <${emailConfig.from.address}>`,
      to: email,
      subject: 'We received your message',
      html: userEmailHtml,
    })

    console.log(`Confirmation email sent to user: ${email}`)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending contact emails:', error)
    return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
    )
  }
}
