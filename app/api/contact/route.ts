import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message, projectType } = body;

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["oguntadetaiwofrancis@gmail.com"],
            replyTo: email,
            subject: `New Contact Form: ${subject}`,
            text: `
Name: ${name}
Email: ${email}
Type: ${projectType}

Message:
${message}
      `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ error: "Email failed" }, { status: 500 });
    }
}
