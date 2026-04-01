import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

// * [POST] /api/contact
export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  try {
    await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: 'david.howe8390@gmail.com',
      subject: `New message from ${name}`,
      replyTo: email,
      text: message
    })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message })
  }
}