import { sendEmail, emailHtml, row, jsonOk, jsonErr } from './_resend';
import { pushLeadToHubSpot } from './_hubspot';

interface Env { RESEND_API_KEY: string; HUBSPOT_TOKEN?: string }

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const { name, email, phone, description, gclid } = await request.json() as Record<string, string>;
    if (!name || !email || !phone) return jsonErr('Faltan campos obligatorios', 400);

    await sendEmail(env.RESEND_API_KEY, {
      subject: `Nueva solicitud de consultoría – ${name}`,
      html: emailHtml('Nueva solicitud de consultoría gratuita',
        row('Nombre', name) + row('Email', email) + row('Teléfono', phone) + row('Descripción', description)),
    });
    await pushLeadToHubSpot(env.HUBSPOT_TOKEN, { email, name, phone, message: description, gclid, source: 'consultation' });
    return jsonOk();
  } catch (e) {
    console.error(e);
    return jsonErr('Error al enviar la solicitud');
  }
};
