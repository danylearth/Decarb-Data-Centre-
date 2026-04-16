import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = 'Data Center Summit <onboarding@resend.dev>';
const NOTIFY_TO = 'scott.donachie@decarbsummits.com';

function notificationHtml(data: {
  firstName: string;
  lastName: string;
  company: string;
  position: string;
  email: string;
  phone?: string;
}) {
  return `
    <div style="font-family:sans-serif;padding:24px;background:#f4f4f4;">
      <h2 style="margin:0 0 16px;">New Interest Sign-Up — Data Center Summit 2026</h2>
      <table style="border-collapse:collapse;width:100%;background:#fff;border-radius:6px;overflow:hidden;">
        ${Object.entries({
          Name: `${data.firstName} ${data.lastName}`,
          Company: data.company,
          Position: data.position,
          Email: data.email,
          Phone: data.phone || '—',
        })
          .map(
            ([k, v]) => `
          <tr>
            <td style="padding:10px 16px;font-weight:600;color:#555;border-bottom:1px solid #eee;width:120px;">${k}</td>
            <td style="padding:10px 16px;border-bottom:1px solid #eee;">${v}</td>
          </tr>`
          )
          .join('')}
      </table>
    </div>
  `;
}

function welcomeHtml(firstName: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700;900&display=swap" rel="stylesheet" />
  <title>Welcome to Data Center Summit 2026</title>
</head>
<body style="margin:0;padding:0;background:#08092d;font-family:'Space Grotesk',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#08092d;padding:48px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Logo / brand bar -->
          <tr>
            <td style="padding:0 0 32px;">
              <p style="margin:0;font-family:'Space Grotesk',Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.3em;text-transform:uppercase;color:#A7A7D2;">DECARB SUMMITS</p>
            </td>
          </tr>

          <!-- Accent line -->
          <tr>
            <td style="padding:0 0 32px;">
              <div style="height:4px;width:48px;background:#D4FF5B;"></div>
            </td>
          </tr>

          <!-- Headline -->
          <tr>
            <td style="padding:0 0 24px;">
              <h1 style="margin:0;font-family:'Space Grotesk',Arial,sans-serif;font-size:40px;font-weight:900;text-transform:uppercase;color:#ffffff;line-height:1.1;">
                Welcome,<br />${firstName}.
              </h1>
            </td>
          </tr>

          <!-- Body text -->
          <tr>
            <td style="padding:0 0 32px;">
              <p style="margin:0 0 16px;font-size:16px;color:#A7A7D2;line-height:1.7;">
                You're now on the list for the <strong style="color:#ffffff;">Data Center Summit 2026</strong> — the premier gathering for industry leaders, developers, hyper scalers, and investors shaping the future of sustainable data infrastructure.
              </p>
              <p style="margin:0;font-size:16px;color:#A7A7D2;line-height:1.7;">
                We'll keep you updated on speakers, agenda details, and future Decarb Summits events as they're announced.
              </p>
            </td>
          </tr>

          <!-- Event details box -->
          <tr>
            <td style="padding:0 0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#0e1040;border:1px solid #2a2c4e;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;color:#D4FF5B;">EVENT DETAILS</p>
                    <p style="margin:8px 0 0;font-size:22px;font-weight:900;text-transform:uppercase;color:#ffffff;font-family:'Space Grotesk',Arial,sans-serif;">Data Center Summit 2026</p>
                    <p style="margin:6px 0 0;font-size:14px;color:#A7A7D2;letter-spacing:0.1em;text-transform:uppercase;">May 13–14, 2026 &nbsp;•&nbsp; New York City</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA button -->
          <tr>
            <td style="padding:0 0 48px;">
              <a href="https://luma.com/l0inulj5"
                 style="display:inline-block;background:#D4FF5B;color:#08092d;font-family:'Space Grotesk',Arial,sans-serif;font-size:13px;font-weight:900;text-transform:uppercase;letter-spacing:0.2em;padding:16px 40px;text-decoration:none;">
                GET YOUR TICKET
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="border-top:1px solid #2a2c4e;padding:32px 0 0;">
              <p style="margin:0;font-size:11px;color:#43456A;letter-spacing:0.15em;text-transform:uppercase;">
                © 2026 Decarb Summits &nbsp;|&nbsp;
                <a href="mailto:scott.donachie@decarbsummits.com" style="color:#43456A;">scott.donachie@decarbsummits.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, company, position, email, phone } = req.body as {
    firstName: string;
    lastName: string;
    company: string;
    position: string;
    email: string;
    phone?: string;
  };

  if (!firstName || !lastName || !company || !position || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM,
        to: NOTIFY_TO,
        subject: `New interest sign-up: ${firstName} ${lastName} — ${company}`,
        html: notificationHtml({ firstName, lastName, company, position, email, phone }),
      }),
      resend.emails.send({
        from: FROM,
        to: email,
        subject: 'You\'re on the list — Data Center Summit 2026',
        html: welcomeHtml(firstName),
      }),
    ]);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
