import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, projectType, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 32px auto; background: #ffffff; border: 1px solid #e0e0e0; }
    .header { background: #1A1A1A; padding: 28px 32px; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 900; letter-spacing: 0.05em; }
    .header p { color: #3B82F6; margin: 4px 0 0; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; }
    .badge { display: inline-block; background: #3B82F6; color: #fff; font-size: 11px; font-weight: 700; padding: 4px 10px; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 12px; }
    .body { padding: 32px; }
    .section-label { font-size: 10px; font-weight: 700; letter-spacing: 0.18em; color: #888; text-transform: uppercase; margin-bottom: 4px; }
    .field { margin-bottom: 20px; }
    .value { font-size: 15px; color: #1a1a1a; font-weight: 500; line-height: 1.5; }
    .divider { border: none; border-top: 1px solid #e8e8e8; margin: 4px 0 20px; }
    .message-box { background: #f8f8f8; border-left: 3px solid #3B82F6; padding: 16px; font-size: 14px; color: #333; line-height: 1.7; white-space: pre-wrap; }
    .footer { background: #f4f4f4; padding: 16px 32px; border-top: 1px solid #e0e0e0; }
    .footer p { font-size: 11px; color: #999; margin: 0; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>BIG B WOLF ELECTRIC</h1>
      <p>⚡ New Quote Request</p>
      <div class="badge">${projectType || "General Inquiry"}</div>
    </div>
    <div class="body">
      <div class="field">
        <div class="section-label">Full Name</div>
        <hr class="divider" />
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="section-label">Email Address</div>
        <hr class="divider" />
        <div class="value"><a href="mailto:${email}" style="color:#3B82F6;">${email}</a></div>
      </div>
      <div class="field">
        <div class="section-label">Phone Number</div>
        <hr class="divider" />
        <div class="value">${phone || "—"}</div>
      </div>
      <div class="field">
        <div class="section-label">Project Type</div>
        <hr class="divider" />
        <div class="value">${projectType || "Not specified"}</div>
      </div>
      <div class="field">
        <div class="section-label">Project Details</div>
        <hr class="divider" />
        <div class="message-box">${message}</div>
      </div>
    </div>
    <div class="footer">
      <p>Sent from the contact form at bigbwolfelectric.com · ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })} CT</p>
    </div>
  </div>
</body>
</html>`;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Big B Wolf Electric" <noreply@bigbwolfelectric.com>`,
      to: "fleeta@bigbwolfelectric.com",
      replyTo: email,
      subject: `Quote Request — ${projectType || "General"} — ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
