import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { emailConfig } from '../../../emailConfig';

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
      service: emailConfig.smtp.service,
      auth: {
        user: emailConfig.smtp.user,
        pass: emailConfig.smtp.pass,
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
      from: emailConfig.smtp.user,
      to: emailConfig.recipients.solliciteer,
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

    // Bevestigingsmail naar sollicitant
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; background: #f8fafc; padding: 32px;">
        <div style="max-width: 520px; margin: 0 auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); padding: 32px 32px 24px 32px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <img src="https://content.lingacms.nl/upload/sw_220a4a1d/images/logo/infinity-monitoring-amp-consultancy_1_8LVZLY.png" alt="Infinity logo" style="height: 48px; margin-bottom: 8px;" />
          </div>
          <h2 style="color: #00e886; font-size: 22px; margin-bottom: 24px; text-align: center;">Bedankt voor je sollicitatie!</h2>
          <p style="font-size: 16px; color: #222; margin-bottom: 24px; text-align: center;">Beste ${name},<br><br>
            We hebben je sollicitatie goed ontvangen. We nemen je sollicitatie zorgvuldig in behandeling.<br><br>
            Je ontvangt binnen <b>5 werkdagen</b> telefonisch bericht van ons over het verdere verloop.<br><br>
            Heb je in de tussentijd vragen? Neem gerust contact met ons op.<br><br>
            Met vriendelijke groet,<br>
            Het Infinity Team
          </p>
          <div style="margin-top: 32px; text-align: center; color: #888; font-size: 13px;">Infinity Monitoring & Consultancy</div>
        </div>
      </div>
    `;
    await transporter.sendMail({
      from: emailConfig.smtp.user,
      to: email,
      subject: 'Bevestiging van je sollicitatie bij Infinity',
      html: confirmationHtml,
    });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
} 