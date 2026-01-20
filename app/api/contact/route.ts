import { Resend } from 'resend'
import { NextResponse } from 'next/server'


console.log(
    'RESEND_API_KEY loaded:',
    process.env.RESEND_API_KEY?.slice(0, 6)
)

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: Request) {
    const { name, email, subject, message } = await req.json()

    await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>',
        to: ['taiwofrancisoguntade@gmail.com'],
        subject: subject || 'New Contact Message',
        replyTo: email,
        html: `<p>${message}</p>`,
    })

    return NextResponse.json({ success: true })
}
