interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY: string;
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function row(label: string, value: string | undefined) {
  if (!value) return '';
  return `<tr><td style="padding:6px 12px;font-weight:600;color:#374151;white-space:nowrap">${esc(label)}</td><td style="padding:6px 12px;color:#111827">${esc(value)}</td></tr>`;
}

function emailHtml(title: string, rows: string) {
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

async function sendEmail(apiKey: string, subject: string, html: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'D&J Partners <noreply@djpartners.es>',
      to: ['info@djpartners.es'],
      subject,
      html,
    }),
  });
  if (!res.ok) throw new Error(`Resend error ${res.status}`);
}

const ok = () => new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
const err = (msg: string, status = 500) => new Response(JSON.stringify({ error: msg }), { status, headers: { 'Content-Type': 'application/json' } });

async function handleContact(req: Request, env: Env) {
  const { name, email, phone, message } = await req.json() as Record<string, string>;
  if (!name || !email || !message) return err('Faltan campos obligatorios', 400);
  await sendEmail(env.RESEND_API_KEY, `Nuevo mensaje de contacto – ${name}`,
    emailHtml('Nuevo mensaje de contacto', row('Nombre', name) + row('Email', email) + row('Teléfono', phone) + row('Mensaje', message)));
  return ok();
}

async function handleSubscribe(req: Request, env: Env) {
  const { email } = await req.json() as Record<string, string>;
  if (!email) return err('Email requerido', 400);
  await sendEmail(env.RESEND_API_KEY, 'Nueva suscripción al newsletter',
    emailHtml('Nueva suscripción al newsletter', row('Email', email)));
  return ok();
}

async function handleConsultation(req: Request, env: Env) {
  const { name, email, phone, description } = await req.json() as Record<string, string>;
  if (!name || !email || !phone) return err('Faltan campos obligatorios', 400);
  await sendEmail(env.RESEND_API_KEY, `Nueva solicitud de consultoría – ${name}`,
    emailHtml('Nueva solicitud de consultoría gratuita', row('Nombre', name) + row('Email', email) + row('Teléfono', phone) + row('Descripción', description)));
  return ok();
}

async function handleCollaborator(req: Request, env: Env) {
  const { nombre, email, telefono, mensaje } = await req.json() as Record<string, string>;
  if (!nombre || !email || !mensaje) return err('Faltan campos obligatorios', 400);
  await sendEmail(env.RESEND_API_KEY, `Nueva solicitud de colaborador – ${nombre}`,
    emailHtml('Nueva solicitud – Red de Colaboradores', row('Nombre', nombre) + row('Email', email) + row('Teléfono', telefono) + row('Propuesta', mensaje)));
  return ok();
}

async function handleInternalTeam(req: Request, env: Env) {
  const { nombre, email, telefono, mensaje } = await req.json() as Record<string, string>;
  if (!nombre || !email || !mensaje) return err('Faltan campos obligatorios', 400);
  await sendEmail(env.RESEND_API_KEY, `Nueva solicitud de equipo interno – ${nombre}`,
    emailHtml('Nueva solicitud – Trabaja con Nosotros', row('Nombre', nombre) + row('Email', email) + row('Teléfono', telefono) + row('Motivación', mensaje)));
  return ok();
}

async function handlePartnership(req: Request, env: Env) {
  const { empresa, contacto, email, telefono, website, mensaje } = await req.json() as Record<string, string>;
  if (!empresa || !contacto || !email || !mensaje) return err('Faltan campos obligatorios', 400);
  await sendEmail(env.RESEND_API_KEY, `Nueva propuesta de partnership – ${empresa}`,
    emailHtml('Nueva propuesta de Partnership', row('Empresa', empresa) + row('Contacto', contacto) + row('Email', email) + row('Teléfono', telefono) + row('Web', website) + row('Propuesta', mensaje)));
  return ok();
}

const routes: Record<string, (req: Request, env: Env) => Promise<Response>> = {
  '/api/contact': handleContact,
  '/api/subscribe': handleSubscribe,
  '/api/consultation': handleConsultation,
  '/api/collaborator': handleCollaborator,
  '/api/internal-team': handleInternalTeam,
  '/api/partnership': handlePartnership,
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === 'POST' && url.pathname in routes) {
      try {
        return await routes[url.pathname](request, env);
      } catch (e) {
        console.error(e);
        return err('Error interno del servidor');
      }
    }

    return env.ASSETS.fetch(request);
  },
};
