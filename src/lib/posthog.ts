/**
 * PostHog (analítica de producto, mapas de calor y grabación de sesiones) en
 * modo dual según la decisión del banner de cookies:
 *
 * - Sin consentimiento: persistencia en memoria (no escribe cookies ni
 *   localStorage; el identificador muere al cerrar la pestaña) y sin grabación.
 *   Solo eventos anónimos, mapas de calor y profundidad de scroll: medición
 *   agregada que no requiere consentimiento (la LSSI art. 22.2 cubre lo que se
 *   guarda o lee en el dispositivo). El proyecto además descarta la IP al
 *   ingerir (anonymize_ips).
 * - Con consentimiento: cookie + localStorage y grabación de sesión con los
 *   campos de formulario enmascarados.
 *
 * El SDK se importa en diferido: no engorda el bundle inicial y nunca se
 * ejecuta en el prerender de vite-react-ssg.
 */
import type { PostHog } from "posthog-js";
import type { ConsentState } from "./consent";

// Clave pública del proyecto "DJPartners" (región UE). No es un secreto: va en
// el cliente igual que el ID del contenedor de GTM.
export const POSTHOG_KEY = "phc_ytUAdM44YBPai9oRQtSuD6ZcKs7z3rSWLZ67C9L66vms";
const API_HOST = "https://eu.i.posthog.com";
const UI_HOST = "https://eu.posthog.com";

/** Nombre de la cookie y de la clave de localStorage que escribe el SDK con consentimiento. */
export const POSTHOG_STORAGE_KEY = `ph_${POSTHOG_KEY}_posthog`;

let client: Promise<PostHog | null> | null = null;

/**
 * Modo en el que está el SDK ahora mismo. Sirve para distinguir, al rechazar,
 * entre retirar un consentimiento dado antes (hay identificador persistido que
 * descartar) y rechazar de entrada (el SDK ya estaba en memoria).
 */
let consented = false;

export function initPostHog(consent: ConsentState | null): Promise<PostHog | null> {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (client) return client;
  const granted = consent === "granted";
  consented = granted;
  client = import("posthog-js")
    .then(({ default: posthog }) => {
      posthog.init(POSTHOG_KEY, {
        api_host: API_HOST,
        ui_host: UI_HOST,
        persistence: granted ? "localStorage+cookie" : "memory",
        secure_cookie: true,
        // Sin perfil de persona para visitantes anónimos: menos datos y más barato.
        person_profiles: "identified_only",
        capture_pageview: "history_change",
        capture_pageleave: true,
        autocapture: true,
        enable_heatmaps: true,
        disable_session_recording: !granted,
        session_recording: { maskAllInputs: true },
        ip: false,
        disable_surveys: true,
      });
      return posthog;
    })
    // Un bloqueador de anuncios puede impedir la carga: la web sigue igual.
    .catch(() => null);
  return client;
}

/**
 * Cambia de modo en caliente cuando el usuario decide en el banner. Si el SDK
 * aún no se ha inicializado no hay nada que hacer: `initPostHog` leerá la
 * decisión ya guardada.
 *
 * Al rechazar sólo se hace `reset()` si venía de un consentimiento dado: es la
 * única forma de descartar el identificador que quedó en cookie + localStorage.
 * Si el SDK ya estaba en memoria (el visitante rechaza de entrada) un `reset()`
 * generaría un `distinct_id` y un `$session_id` nuevos, partiendo la visita en
 * dos sesiones en PostHog: la primera con el pageview y los clics, y otra vacía.
 */
export function applyPostHogConsent(state: ConsentState) {
  if (!client) return;
  const wasConsented = consented;
  consented = state === "granted";
  void client.then((posthog) => {
    if (!posthog) return;
    if (state === "granted") {
      posthog.set_config({ persistence: "localStorage+cookie", disable_session_recording: false });
      posthog.startSessionRecording();
      return;
    }
    // stopSessionRecording() ya deja disable_session_recording en true.
    posthog.stopSessionRecording();
    if (!wasConsented) return;
    // reset() vacía la persistencia actual (cookie + localStorage) y genera
    // un identificador nuevo antes de volver a memoria.
    posthog.reset();
    posthog.set_config({ persistence: "memory", disable_session_recording: true });
  });
}

/** Evento de negocio (sin datos personales). No-op si el SDK no ha cargado. */
export function captureEvent(event: string, properties?: Record<string, unknown>) {
  if (!client) return;
  void client.then((posthog) => posthog?.capture(event, properties));
}
