import { sendEmail, emailHtml, row, jsonOk, jsonErr } from './_resend';

interface Env { RESEND_API_KEY: string }

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const { empresa, contacto, email, telefono, website, mensaje } = await request.json() as Record<string, string>;
    if (!empresa || !contacto || !email || !mensaje) return jsonErr('Faltan campos obligatorios', 400);

    await sendEmail(env.RESEND_API_KEY, {
      subject: `Nueva propuesta de partnership – ${empresa}`,
      html: emailHtml(
        'Nueva propuesta de Partnership',
        row('Empresa', empresa) + row('Contacto', contacto) + row('Email', email) +
        row('Teléfono', telefono) + row('Web', website) + row('Propuesta', mensaje)
      ),
    });

    return jsonOk();
  } catch (e) {
    console.error(e);
    return jsonErr('Error al enviar la propuesta');
  }
};
