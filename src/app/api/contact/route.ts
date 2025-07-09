import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, organization, message } = await req.json();

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
          <img src="https://infinity-analysis.com/Infinity%20Logo%20RGB%20Black.svg" alt="Infinity logo" style="height: 48px; margin-bottom: 8px;" />
        </div>
        <h2 style="color: #111; font-size: 22px; margin-bottom: 24px; text-align: center;">Nieuw bericht via het contactformulier</h2>
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
            <td style="font-weight: bold; padding: 6px 0;">Organisatie:</td>
            <td style="padding: 6px 0;">${organization}</td>
          </tr>
        </table>
        <div style="margin-bottom: 8px; font-weight: bold; color: #00e886;">Bericht:</div>
        <div style="background: #f3f4f6; border-radius: 8px; padding: 16px; color: #222; font-size: 16px; white-space: pre-line;">${message.replace(/\n/g, '<br/>')}</div>
        <div style="margin-top: 32px; text-align: center; color: #888; font-size: 13px;">Infinity Smart Building Platform</div>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: 'werner.vink@viteco.tech',
      to: 'w.vink@infinity-monitoring.com, j.tourney@infinity-monitoring.com',
      subject: 'Nieuw contactformulier bericht via website',
      text: `Naam: ${name}\nEmail: ${email}\nOrganisatie: ${organization}\nBericht: ${message}`,
      html,
    });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
} 