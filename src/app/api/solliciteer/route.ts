import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const motivation = formData.get('motivation') as string;
    const file = formData.get('file') as File | null;

    if (!name || !email || !phone || !motivation || !file) {
      return NextResponse.json({ error: 'Vul alle velden in.' }, { status: 400 });
    }
    if (file.type !== 'application/pdf') {
      return NextResponse.json({ error: 'Alleen PDF-bestanden zijn toegestaan.' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'werner.vink@viteco.tech',
        pass: 'cnvedeceixffjnzi',
      },
    });

    const html = `
      <div style="font-family: Arial, sans-serif; background: #f8fafc; padding: 32px;">
        <div style="max-width: 520px; margin: 0 auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); padding: 32px 32px 24px 32px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <img src="https://content.lingacms.nl/upload/sw_220a4a1d/images/logo/infinity-monitoring-amp-consultancy_1_8LVZLY.png" alt="Infinity logo" style="height: 48px; margin-bottom: 8px;" />
          </div>
          <h2 style="color: #111; font-size: 22px; margin-bottom: 24px; text-align: center;">Nieuwe sollicitatie via de website</h2>
          <table style="width: 100%; font-size: 16px; color: #222; margin-bottom: 24px;">
            <tr>
              <td style="font-weight: bold; padding: 6px 0; width: 120px;">Naam:</td>
              <td style="padding: 6px 0;">${name}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 6px 0;">Email:</td>
              <td style="padding: 6px 0;">${email}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 6px 0;">Telefoon:</td>
              <td style="padding: 6px 0;">${phone}</td>
            </tr>
          </table>
          <div style="margin-bottom: 8px; font-weight: bold; color: #00e886;">Motivatie:</div>
          <div style="background: #f3f4f6; border-radius: 8px; padding: 16px; color: #222; font-size: 16px; white-space: pre-line;">${motivation ? motivation.replace(/\n/g, '<br/>') : 'Geen motivatie opgegeven'}</div>
          <div style="margin-top: 32px; text-align: center; color: #888; font-size: 13px;">Infinity Smart Building Platform</div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: 'werner.vink@viteco.tech',
      to: 'j.tourney@infinity-monitoring.com, j.debie@infinity-monitoring.com',
      subject: 'Nieuwe sollicitatie via website',
      text: `Naam: ${name}\nEmail: ${email}\nTelefoon: ${phone}\nMotivatie: ${motivation}`,
      html,
      attachments: [
        {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        },
      ],
    });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
} 