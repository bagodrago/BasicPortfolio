import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

import { formSchema } from '@/src/types/formSchema';

const resend = new Resend(process.env.RESEND_API_KEY)

// * [POST] /api/contact
export async function POST(req: NextRequest) {
  const body = await req.json()
  const result = formSchema.safeParse(body);

  if (!result.success) {
    return Response.json({ errors: result.error }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: `${result.data.name} <onboarding@resend.dev>`,
      to: 'david.howe8390@gmail.com',
      subject: `New message from ${result.data.name}`,
      replyTo: result.data.email,
      text: result.data.message
    })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message })
  }
}