import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { emailConfig } from '../../../emailConfig';

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, comments, preferences } = await req.json();

  const transporter = nodemailer.createTransport({
    service: emailConfig.smtp.service,
    auth: {
      user: emailConfig.smtp.user,
      pass: emailConfig.smtp.pass,
    },
  });

  // Format voorkeuren
  const voorkeurenHtml = preferences
    .map((pref: { date: string | null, time: string }, i: number) => {
      if (!pref.date && !pref.time) return '';
      return `<li>Voorkeur ${i + 1}: ${pref.date ? pref.date : ''} ${pref.time ? pref.time : ''}</li>`;
    })
    .filter(Boolean)
    .join('');

  const html = `
    <div style="font-family: Arial, sans-serif; background: #f8fafc; padding: 32px;">
      <div style="max-width: 520px; margin: 0 auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); padding: 32px 32px 24px 32px;">
        <div style="text-align: center; margin-bottom: 32px;">
          <img src="https://content.lingacms.nl/upload/sw_220a4a1d/images/logo/infinity-monitoring-amp-consultancy_1_8LVZLY.png" alt="Infinity logo" style="height: 48px; margin-bottom: 8px;" />
        </div>
        <h2 style="color: #111; font-size: 22px; margin-bottom: 24px; text-align: center;">Nieuwe demo aanvraag via de website</h2>
        <table style="width: 100%; font-size: 16px; color: #222; margin-bottom: 24px;">
          <tr>
            <td style="font-weight: bold; padding: 6px 0; width: 120px;">Naam:</td>
            <td style="padding: 6px 0;">${firstName} ${lastName}</td>
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
        <div style="margin-bottom: 8px; font-weight: bold; color: #00e886;">Voorkeuren datum/tijd:</div>
        <ul style="margin-bottom: 24px; color: #222; font-size: 16px; padding-left: 20px;">
          ${voorkeurenHtml || '<li>Geen voorkeuren opgegeven</li>'}
        </ul>
        <div style="margin-bottom: 8px; font-weight: bold; color: #00e886;">Opmerkingen:</div>
        <div style="background: #f3f4f6; border-radius: 8px; padding: 16px; color: #222; font-size: 16px; white-space: pre-line;">${comments ? comments.replace(/\n/g, '<br/>') : 'Geen opmerkingen'}</div>
        <div style="margin-top: 32px; text-align: center; color: #888; font-size: 13px;">Infinity Smart Building Platform</div>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: emailConfig.smtp.user,
      to: emailConfig.recipients.demo,
      subject: 'Nieuwe demo aanvraag via website',
      text: `Naam: ${firstName} ${lastName}\nEmail: ${email}\nTelefoon: ${phone}\nVoorkeuren: ${preferences.map((p: any, i: number) => `\n${i+1}: ${p.date || ''} ${p.time || ''}`).join('')}\nOpmerkingen: ${comments}`,
      html,
    });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
} 