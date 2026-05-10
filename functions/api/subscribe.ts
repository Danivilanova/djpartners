import { sendEmail, emailHtml, row, jsonOk, jsonErr } from './_resend';

interface Env { RESEND_API_KEY: string }

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const { email } = await request.json() as Record<string, string>;
    if (!email) return jsonErr('Email requerido', 400);

    await sendEmail(env.RESEND_API_KEY, {
      subject: 'Nueva suscripción al newsletter',
      html: emailHtml('Nueva suscripción al newsletter', row('Email', email)),
    });

    return jsonOk();
  } catch (e) {
    console.error(e);
    return jsonErr('Error al procesar la suscripción');
  }
};
