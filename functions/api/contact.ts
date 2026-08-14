import { sendEmail, emailHtml, row, jsonOk, jsonErr } from './_resend';
import { pushLeadToHubSpot } from './_hubspot';

interface Env { RESEND_API_KEY: string; HUBSPOT_TOKEN?: string }

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const { name, email, phone, message, gclid } = await request.json() as Record<string, string>;
    if (!name || !email || !message) return jsonErr('Faltan campos obligatorios', 400);

    await sendEmail(env.RESEND_API_KEY, {
      subject: `Nuevo mensaje de contacto – ${name}`,
      html: emailHtml('Nuevo mensaje de contacto',
        row('Nombre', name) + row('Email', email) + row('Teléfono', phone) + row('Mensaje', message)),
    });
    await pushLeadToHubSpot(env.HUBSPOT_TOKEN, { email, name, phone, message, gclid, source: 'home' });
    return jsonOk();
  } catch (e) {
    console.error(e);
    return jsonErr('Error al enviar el mensaje');
  }
};
