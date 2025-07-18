import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { emailConfig } from '../../../emailConfig';

export async function POST(request: NextRequest) {
  try {
    console.log('GACS Audit API route aangeroepen');
    const body = await request.json();
    console.log('Request body:', body);
    
    const { name, email, phone, addresses, message } = body;

    // HTML template voor GACS audit aanvraag
    const phoneSection = phone ? `<p><strong>Telefoon:</strong> ${phone}</p>` : '';
    const messageSection = message ? `
      <div class="message-box">
        <h3 style="color: #0066cc; margin-top: 0;">Bericht van de aanvrager:</h3>
        <p style="white-space: pre-wrap; margin: 0; color: #000;">${message}</p>
      </div>
    ` : '';
    
    const addressesSection = addresses && addresses.length > 0 ? `
      <div class="info-section">
        <h2 style="color: #00e886; margin-top: 0;">Gebouwadressen voor GACS Audit</h2>
        <table class="buildings-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Gebouwadres</th>
            </tr>
          </thead>
          <tbody>
            ${addresses.map((address: string, index: number) => `
              <tr>
                <td style="color: #000;">${index + 1}</td>
                <td style="color: #000;">${address}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    ` : '';

    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="nl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GACS Audit Aanvraag</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #000;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #00e886 0%, #00c46c 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
          }
          .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .info-section {
            background: white;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            border-left: 4px solid #00e886;
          }
          .contact-info {
            background: #e8f5e8;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
          }
          .contact-info p {
            color: #000;
            margin: 5px 0;
          }
          .buildings-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .buildings-table th {
            background: #00e886;
            color: white;
            padding: 12px;
            text-align: left;
            font-weight: bold;
          }
          .buildings-table td {
            padding: 12px;
            border-bottom: 1px solid #eee;
            color: #000;
          }
          .buildings-table tr:nth-child(even) {
            background: #f9f9f9;
          }
          .message-box {
            background: #f0f8ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #0066cc;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding: 20px;
            background: #f5f5f5;
            border-radius: 8px;
            font-size: 14px;
            color: #666;
          }
          .logo {
            max-width: 200px;
            height: auto;
          }
          .info-section h2 {
            color: #00e886;
            margin-top: 0;
          }
          .info-section p {
            color: #000;
          }
          .info-section ol {
            color: #000;
          }
          .info-section li {
            color: #000;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://content.lingacms.nl/upload/sw_220a4a1d/images/logo/infinity-monitoring-amp-consultancy_1_8LVZLY.png" alt="Infinity logo" style="height: 48px; margin-bottom: 8px;" />
          </div>
          <h1 style="margin: 0; font-size: 28px;">GACS Audit Aanvraag</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">
            Nieuwe aanvraag ontvangen via Infinity Platform
          </p>
        </div>
        
        <div class="content">
          <div class="info-section">
            <h2 style="color: #00e886; margin-top: 0;">Contactgegevens</h2>
            <div class="contact-info">
              <p><strong>Naam:</strong> ${name}</p>
              <p><strong>E-mail:</strong> ${email}</p>
              ${phoneSection}
            </div>
          </div>

          ${messageSection}

          ${addressesSection}

          <div class="info-section">
            <h2 style="color: #00e886; margin-top: 0;">Volgende stappen</h2>
            <ol style="margin: 0; padding-left: 20px;">
              <li>Neem binnen 24 uur contact op met de aanvrager</li>
              <li>Plan een 1-daagse GACS Audit in</li>
              <li>Bereid een concrete business case voor</li>
              <li>Stel een implementatieplan op</li>
            </ol>
          </div>
        </div>

        <div class="footer">
          <p><strong>Infinity - Smart Building Platform</strong></p>
          <p>Deze aanvraag is automatisch gegenereerd via het Infinity platform.</p>
          <p>Voor vragen: info@infinity.nl</p>
        </div>
      </body>
      </html>
    `;

    // Email verzending implementeren
    const transporter = nodemailer.createTransport({
      service: emailConfig.smtp.service,
      auth: {
        user: emailConfig.smtp.user,
        pass: emailConfig.smtp.pass,
      },
    });

    // Bevestigingsemail template voor de aanvrager
    const confirmationTemplate = `
      <!DOCTYPE html>
      <html lang="nl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GACS Audit Aanvraag Bevestiging</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #00e886 0%, #00c46c 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
          }
          .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .info-section {
            background: white;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            border-left: 4px solid #00e886;
          }
          .contact-info {
            background: #e8f5e8;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
          }
          .buildings-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .buildings-table th {
            background: #00e886;
            color: white;
            padding: 12px;
            text-align: left;
            font-weight: bold;
          }
          .buildings-table td {
            padding: 12px;
            border-bottom: 1px solid #eee;
          }
          .buildings-table tr:nth-child(even) {
            background: #f9f9f9;
          }
          .message-box {
            background: #f0f8ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #0066cc;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding: 20px;
            background: #f5f5f5;
            border-radius: 8px;
            font-size: 14px;
            color: #666;
          }
          .cta-button {
            display: inline-block;
            background: #00e886;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            margin: 10px 0;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 style="margin: 0; font-size: 28px;">GACS Audit Aanvraag Bevestiging</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">
            Bedankt voor uw aanvraag via Infinity Platform
          </p>
        </div>
        
        <div class="content">
          <div class="info-section">
            <h2 style="color: #00e886; margin-top: 0;">Beste ${name},</h2>
            <p>Bedankt voor uw GACS audit aanvraag. Wij hebben uw aanvraag succesvol ontvangen en zullen binnen 24 uur contact met u opnemen.</p>
          </div>

          <div class="info-section">
            <h2 style="color: #00e886; margin-top: 0;">Uw aanvraag details</h2>
            <div class="contact-info">
              <p><strong>Naam:</strong> ${name}</p>
              <p><strong>E-mail:</strong> ${email}</p>
              ${phone ? `<p><strong>Telefoon:</strong> ${phone}</p>` : ''}
            </div>
          </div>

          ${message ? `
          <div class="message-box">
            <h3 style="color: #0066cc; margin-top: 0;">Uw bericht:</h3>
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          ` : ''}

          ${addresses && addresses.length > 0 ? `
          <div class="info-section">
            <h2 style="color: #00e886; margin-top: 0;">Gebouwadressen voor GACS Audit</h2>
            <table class="buildings-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Gebouwadres</th>
                </tr>
              </thead>
              <tbody>
                ${addresses.map((address: string, index: number) => `
                  <tr>
                    <td>${index + 1}</td>
                    <td>${address}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
          ` : ''}

          <div class="info-section">
            <h2 style="color: #00e886; margin-top: 0;">Wat gebeurt er nu?</h2>
            <ol style="margin: 0; padding-left: 20px;">
              <li><strong>Binnen 24 uur</strong> nemen wij contact met u op</li>
              <li>We plannen een <strong>1-daagse GACS Audit</strong> in</li>
              <li>We bereiden een <strong>concrete business case</strong> voor</li>
              <li>We stellen een <strong>implementatieplan</strong> op</li>
            </ol>
          </div>

          <div class="info-section">
            <h2 style="color: #00e886; margin-top: 0;">Waarom GACS vanaf 2026?</h2>
            <p>Vanaf 1 januari 2026 is een Gebouwautomatisering- en controlesysteem (GACS) verplicht voor gebouwen met een verwarmings- of airco-installatie vanaf 290 kW nominaal vermogen. Infinity helpt u eenvoudig te voldoen aan deze wettelijke eis én haalt direct meer uit uw gebouw!</p>
          </div>
        </div>

        <div class="footer">
          <p><strong>Infinity - Smart Building Platform</strong></p>
          <p>Voor vragen: info@infinity.nl</p>
          <p>Website: <a href="https://infinity.nl" style="color: #00e886;">infinity.nl</a></p>
        </div>
      </body>
      </html>
    `;

    try {
      // Email naar Infinity team
      await transporter.sendMail({
        from: emailConfig.smtp.user,
        to: 'w.vink@infinity-monitoring.com',
        replyTo: email, // Zodat je direct kunt antwoorden naar de aanvrager
        subject: `Nieuwe GACS Audit Aanvraag - ${name}`,
        text: `Naam: ${name}\nEmail: ${email}\nTelefoon: ${phone || 'Niet opgegeven'}\nBericht: ${message || 'Geen bericht'}\nGebouwadressen: ${addresses && addresses.length > 0 ? addresses.join(', ') : 'Geen adressen opgegeven'}`,
        html: htmlTemplate,
      });

      // Bevestigingsemail naar de aanvrager
      await transporter.sendMail({
        from: emailConfig.smtp.user,
        to: email,
        subject: 'Bevestiging GACS Audit Aanvraag - Infinity',
        text: `Beste ${name},\n\nBedankt voor uw GACS audit aanvraag. Wij hebben uw aanvraag succesvol ontvangen en zullen binnen 24 uur contact met u opnemen.\n\nMet vriendelijke groet,\nInfinity Team`,
        html: confirmationTemplate,
      });

      console.log('GACS Audit Aanvraag succesvol verzonden naar w.vink@infinity-monitoring.com');
      console.log('Bevestigingsemail verzonden naar:', email);
      
      return NextResponse.json({ 
        success: true, 
        message: 'GACS audit aanvraag succesvol verzonden' 
      });
    } catch (error: any) {
      console.error('Email verzending mislukt:', error);
      return NextResponse.json(
        { error: `Email verzending mislukt: ${error.message}` },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error processing GACS audit request:', error);
    return NextResponse.json(
      { error: `Er is iets misgegaan bij het verwerken van de aanvraag: ${error instanceof Error ? error.message : 'Onbekende fout'}` },
      { status: 500 }
    );
  }
} 