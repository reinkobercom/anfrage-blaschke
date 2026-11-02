import type { APIRoute } from 'astro';
import { getSecret } from 'astro:env/server';
import { Resend } from 'resend';
import { forms, mail } from '../../data/forms';
import { site } from '../../data/site';
import { buildHtml, buildSubject, buildText, buildTheme, validate, type LeadPayload } from '../../lib/lead-mail';

// Einzige Route, die auf Anfrage (serverseitig) läuft – alle Seiten sind statisch.
export const prerender = false;

const HONEYPOT = 'website';
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const hits = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const list = (hits.get(key) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  list.push(now);
  hits.set(key, list);
  if (hits.size > 5000) hits.clear();
  return list.length > RATE_LIMIT.max;
}

const FAIL_MESSAGE = `Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an: ${site.phone.display}.`;

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8' } });

async function readPayload(request: Request): Promise<{ payload: LeadPayload; hp: string; isForm: boolean }> {
  const type = request.headers.get('content-type') ?? '';
  if (type.includes('application/json')) {
    const body = (await request.json()) as LeadPayload & { [HONEYPOT]?: string };
    const values = Object.fromEntries(Object.entries(body.values ?? {}).map(([k, v]) => [k, String(v ?? '')]));
    return { payload: { ...body, values }, hp: String(body[HONEYPOT] ?? values[HONEYPOT] ?? ''), isForm: false };
  }
  // Fallback ohne JavaScript: klassischer Formular-POST
  const fd = await request.formData();
  const values: Record<string, string> = {};
  fd.forEach((v, k) => {
    if (typeof v === 'string') values[k] = values[k] ? `${values[k]}, ${v}` : v;
  });
  const { formId = '', page = '', ...rest } = values;
  return { payload: { formId, values: rest, page }, hp: values[HONEYPOT] ?? '', isForm: true };
}

export const POST: APIRoute = async ({ request, clientAddress, redirect }) => {
  let parsed;
  try {
    parsed = await readPayload(request);
  } catch {
    return json(400, { ok: false, message: FAIL_MESSAGE });
  }
  const { payload, hp, isForm } = parsed;
  const def = forms[payload.formId];
  if (!def) return json(400, { ok: false, message: FAIL_MESSAGE });

  const back = (q: string) => redirect(`${payload.page || def.pages[0]}?${q}#formular`, 303);

  // Honeypot: Bots bekommen eine Erfolgsantwort, es wird nichts versendet.
  if (hp) return isForm ? redirect(def.redirect || `${payload.page || def.pages[0]}?gesendet=1`, 303) : json(200, { ok: true, redirect: def.redirect ?? null });

  let ip = 'unknown';
  try {
    ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || clientAddress || 'unknown';
  } catch {}
  if (rateLimited(`${ip}:${def.id}`)) {
    const message = `Zu viele Anfragen in kurzer Zeit. Bitte versuchen Sie es in einigen Minuten erneut oder rufen Sie uns an: ${site.phone.display}.`;
    return isForm ? back('fehler=limit') : json(429, { ok: false, message });
  }

  const errors = validate(def, payload.values);
  if (Object.keys(errors).length) {
    return isForm ? back('fehler=pflichtfelder') : json(422, { ok: false, errors, message: 'Bitte prüfen Sie die markierten Felder.' });
  }

  const theme = buildTheme(def, payload.values);
  const timestamp = new Intl.DateTimeFormat('de-DE', {
    dateStyle: 'medium', timeStyle: 'medium', timeZone: 'Europe/Berlin',
  }).format(new Date());
  const replyTo = def.replyToField ? payload.values[def.replyToField]?.trim() : undefined;

  const apiKey = getSecret('RESEND_API_KEY');
  if (!apiKey) {
    console.error('[lead] RESEND_API_KEY fehlt – Anfrage NICHT versendet', { form: def.id, page: payload.page, values: payload.values });
    return isForm ? back('fehler=versand') : json(500, { ok: false, message: FAIL_MESSAGE });
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: mail.from,
      to: mail.to,
      subject: buildSubject(theme),
      html: buildHtml(def, payload, theme, timestamp),
      text: buildText(def, payload, theme, timestamp),
      ...(replyTo ? { replyTo } : {}),
    });
    if (error) throw error;
    console.log('[lead] versendet', { form: def.id, id: data?.id });
  } catch (err) {
    // Keine Anfrage darf still verloren gehen: vollständig protokollieren.
    console.error('[lead] Resend-Fehler – Anfrage NICHT versendet', { form: def.id, page: payload.page, values: payload.values, err });
    return isForm ? back('fehler=versand') : json(502, { ok: false, message: FAIL_MESSAGE });
  }

  if (isForm) return redirect(def.redirect || `${payload.page || def.pages[0]}?gesendet=1#formular`, 303);
  return json(200, { ok: true, redirect: def.redirect ?? null });
};

export const ALL: APIRoute = () => json(405, { ok: false, message: 'Method not allowed' });
