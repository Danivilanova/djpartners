const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function sendEmail(
  apiKey: string,
  opts: { subject: string; html: string }
): Promise<void> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'D&J Partners <noreply@djpartners.es>',
      to: ['jordi@djpartners.es'],
      ...opts,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend error ${res.status}: ${body}`);
  }
}

export function row(label: string, value: string | undefined) {
  if (!value) return '';
  return `<tr><td style="padding:6px 12px;font-weight:600;color:#374151;white-space:nowrap">${esc(label)}</td><td style="padding:6px 12px;color:#111827">${esc(value)}</td></tr>`;
}

export function emailHtml(title: string, rows: string) {
  return `<!DOCTYPE html><html><body style="font-family:sans-serif;background:#f9fafb;margin:0;padding:32px">
<div style="max-width:560px;margin:auto;background:#fff;border-radius:12px;border:1px solid #e5e7eb;overflow:hidden">
  <div style="background:#1e293b;padding:20px 24px">
    <p style="margin:0;color:#fff;font-size:18px;font-weight:700">D&amp;J Partners</p>
  </div>
  <div style="padding:24px">
    <h2 style="margin:0 0 16px;font-size:16px;color:#111827">${esc(title)}</h2>
    <table style="width:100%;border-collapse:collapse;background:#f9fafb;border-radius:8px;overflow:hidden">
      ${rows}
    </table>
  </div>
</div>
</body></html>`;
}

export function jsonOk() {
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export function jsonErr(message: string, status = 500) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
