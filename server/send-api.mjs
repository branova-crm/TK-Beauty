import http from 'node:http';
import nodemailer from 'nodemailer';

const PORT = Number(process.env.API_PORT || 3001);
const SMTP_HOST = process.env.SMTP_HOST || 'mail.agenturserver.de';
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || process.env.SMTP_PASSWORD || '';
const MAIL_TO = process.env.EMAIL_RECEIVER || process.env.MAIL_TO || 'info@branova.de';
const MAIL_FROM = process.env.SMTP_FROM || SMTP_USER || 'info@tkbeautystudio.de';
const SMTP_SECURE =
  process.env.SMTP_SECURE != null
    ? process.env.SMTP_SECURE === 'true' || process.env.SMTP_SECURE === '1'
    : SMTP_PORT === 465;

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > 32_768) {
        reject(new Error('Payload too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function json(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(body));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

const server = http.createServer(async (req, res) => {
  const url = req.url || '/';

  if (req.method === 'GET' && (url === '/api/health' || url === '/api/leads')) {
    json(res, 200, { ok: true, smtpConfigured: Boolean(SMTP_USER && SMTP_PASS) });
    return;
  }

  if (req.method === 'OPTIONS' && url === '/api/leads') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method !== 'POST' || url !== '/api/leads') {
    json(res, 404, { error: 'Not found' });
    return;
  }

  if (!SMTP_USER || !SMTP_PASS) {
    console.error('[send-api] SMTP_USER / SMTP_PASSWORD missing');
    json(res, 503, { error: 'Mail not configured' });
    return;
  }

  try {
    const raw = await readBody(req);
    const data = JSON.parse(raw);
    const name = String(data.name || '').trim();
    const email = String(data.email || '').trim();
    const phone = String(data.phone || '').trim();
    const treatment = String(data.treatment || '').trim();
    const message = String(data.message || '').trim();

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      json(res, 400, { error: 'Missing required fields' });
      return;
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Website Kontaktformular" <${MAIL_FROM}>`,
      to: MAIL_TO,
      replyTo: email,
      subject: `Neue Anfrage von ${name}${treatment ? ` - ${treatment}` : ''}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Telefon: ${phone || 'Nicht angegeben'}`,
        `Behandlung: ${treatment || 'Nicht angegeben'}`,
        `Nachricht: ${message || 'Keine Nachricht hinterlassen'}`,
      ].join('\n'),
      html: `
        <div style="font-family:sans-serif;max-width:600px;padding:20px;border:1px solid #eee">
          <h2 style="color:#8A7A65">Neue Anfrage erhalten</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Telefon:</strong> ${escapeHtml(phone || 'Nicht angegeben')}</p>
          <p><strong>Behandlung:</strong> ${escapeHtml(treatment || 'Nicht angegeben')}</p>
          <p><strong>Nachricht:</strong><br>${escapeHtml(message || 'Keine Nachricht hinterlassen')}</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0">
          <p style="font-size:12px;color:#999">Gesendet über das Kontaktformular von TK BEAUTYSTUDIO.</p>
        </div>
      `,
    });

    console.log('[send-api] lead mail sent');
    json(res, 200, { success: true });
  } catch (err) {
    console.error('[send-api] failed:', err?.message || err);
    json(res, 500, { error: 'Internal Server Error' });
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(
    `Leads API on 127.0.0.1:${PORT} | SMTP ${SMTP_HOST}:${SMTP_PORT} | to=${MAIL_TO} | pass=${SMTP_PASS ? 'set' : 'MISSING'}`,
  );
});
