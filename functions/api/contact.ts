import { sendEmail, emailHtml, row, jsonOk, jsonErr } from './_resend';

interface Env { RESEND_API_KEY: string }

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const { name, email, phone, message } = await request.json() as Record<string, string>;
    if (!name || !email || !message) return jsonErr('Faltan campos obligatorios', 400);

    await sendEmail(env.RESEND_API_KEY, {
      subject: `Nuevo mensaje de contacto – ${name}`,
      html: emailHtml(
        'Nuevo mensaje de contacto',
        row('Nombre', name) + row('Email', email) + row('Teléfono', phone) + row('Mensaje', message)
      ),
    });

    return jsonOk();
  } catch (e) {
    console.error(e);
    return jsonErr('Error al enviar el mensaje');
  }
};
