import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message } = body;

  try {
    const data = await resend.emails.send({
      from: "Elif Technologies <onboarding@resend.dev>",
      to: ["bheki.daweti@gmail.com"],
      subject: `New Website Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true, data });

  } catch (error) {
    return Response.json({ error });
  }
}