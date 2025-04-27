import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {

  const { name, email, comments } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `Nova mensagem de ${name}`,
      text: comments,
    });
//error solved
    return NextResponse.json({ error: 'message sent!' }, { status: 200 });
  } catch (e) {
    console.error(e)
    NextResponse.json({ error: 'message not sent!' });;    
  }
}
