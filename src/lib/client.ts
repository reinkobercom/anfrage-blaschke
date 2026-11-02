/**
 * Browser-Helfer für Formulare und Tracking. Wird von React-Inseln und nativen Formularen genutzt.
 */

type FbqArgs = [string, string, Record<string, unknown>?];

declare global {
  interface Window {
    bitTrack?: (...args: FbqArgs) => void;
  }
}

/**
 * Meta-Pixel-Event auslösen. Vor der Einwilligung werden Events gepuffert und erst nach
 * „Alle akzeptieren“ gesendet; bei Ablehnung verworfen.
 * Beispiel: track('track', 'Lead') · track('trackCustom', 'LeadHandwerk')
 */
export function track(method: 'track' | 'trackCustom', event: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  try {
    window.bitTrack?.(method, event, params);
  } catch {}
}

function readUtm(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem('bit_utm') || '{}');
  } catch {
    return {};
  }
}

export type SubmitResult = {
  ok: boolean;
  errors?: Record<string, string>;
  message?: string;
  redirect?: string | null;
};

export const PHONE_DISPLAY = '0202 319070 33';
export const PHONE_HREF = 'tel:+4920231907033';
const FALLBACK_MESSAGE = `Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an: ${PHONE_DISPLAY}.`;

/**
 * Sendet ein Formular an /api/lead.
 * @param honeypot Wert des unsichtbaren Feldes „website“ (bei Menschen leer)
 */
export async function submitLead(opts: {
  formId: string;
  values: Record<string, string | boolean | undefined | null>;
  extra?: { label: string; value: string }[];
  honeypot?: string;
}): Promise<SubmitResult> {
  const values = Object.fromEntries(
    Object.entries(opts.values).map(([k, v]) => [k, v === true ? 'ja' : v === false ? 'nein' : String(v ?? '')]),
  );
  try {
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        formId: opts.formId,
        values,
        extra: opts.extra,
        page: location.pathname,
        utm: readUtm(),
        website: opts.honeypot ?? '',
      }),
    });
    const data = (await res.json().catch(() => ({}))) as SubmitResult;
    if (!res.ok || !data.ok) return { ok: false, errors: data.errors, message: data.message || FALLBACK_MESSAGE };
    return { ok: true, redirect: data.redirect ?? null };
  } catch {
    return { ok: false, message: FALLBACK_MESSAGE };
  }
}

/** Weiterleitung nach Erfolg (wie bisher: auf die Dankeseite) */
export function goTo(url: string, delayMs = 0) {
  if (!url) return;
  window.setTimeout(() => window.location.assign(url), delayMs);
}
