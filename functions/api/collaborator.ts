import { sendEmail, emailHtml, row, jsonOk, jsonErr } from './_resend';

interface Env { RESEND_API_KEY: string }

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const { nombre, email, telefono, mensaje } = await request.json() as Record<string, string>;
    if (!nombre || !email || !mensaje) return jsonErr('Faltan campos obligatorios', 400);

    await sendEmail(env.RESEND_API_KEY, {
      subject: `Nueva solicitud de colaborador – ${nombre}`,
      html: emailHtml('Nueva solicitud – Red de Colaboradores',
        row('Nombre', nombre) + row('Email', email) + row('Teléfono', telefono) + row('Propuesta', mensaje)),
    });
    return jsonOk();
  } catch (e) {
    console.error(e);
    return jsonErr('Error al enviar la solicitud');
  }
};
