import type { FormDef } from '../data/forms';
import { mail, FREEMAIL_DOMAINS } from '../data/forms';

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

export type LeadPayload = {
  formId: string;
  values: Record<string, string>;
  /** Zusätzliche, nicht im Formular definierte Werte (z. B. Quiz-Antworten) – Label → Wert */
  extra?: { label: string; value: string }[];
  page?: string;
  utm?: Record<string, string>;
};

export function validate(def: FormDef, values: Record<string, string>) {
  const errors: Record<string, string> = {};
  for (const f of def.fields) {
    const v = (values[f.name] ?? '').trim();
    if (f.required && (!v || (f.type === 'checkbox' && v !== 'ja' && v !== 'true' && v !== 'on'))) {
      errors[f.name] = f.type === 'checkbox' ? 'Bitte bestätigen.' : 'Bitte ausfüllen.';
      continue;
    }
    if (v && f.type === 'email') {
      if (!EMAIL_RE.test(v)) errors[f.name] = 'Bitte prüfen Sie die E-Mail-Adresse.';
      else if (def.blockFreemail && FREEMAIL_DOMAINS.includes(v.split('@')[1].toLowerCase()))
        errors[f.name] = def.blockFreemailMessage ?? 'Bitte verwenden Sie Ihre geschäftliche Adresse.';
    }
  }
  return errors;
}

export function buildTheme(def: FormDef, values: Record<string, string>) {
  const fromField = def.themeField ? (values[def.themeField] ?? '').trim() : '';
  if (fromField) return fromField.replace(/\s+/g, ' ').slice(0, 120);
  const fb = def.themeFallback?.(values)?.trim();
  return fb || def.title;
}

export function buildSubject(theme: string) {
  return mail.subjectTemplate.replace('{kunde}', mail.customerName).replace('{thema}', theme);
}

const displayValue = (type: string | undefined, v: string) => {
  if (type === 'checkbox') return v === 'ja' || v === 'true' || v === 'on' ? 'Ja' : 'Nein';
  return v;
};

export function buildHtml(def: FormDef, p: LeadPayload, theme: string, timestamp: string) {
  const rows: [string, string][] = def.fields
    .filter((f) => f.type !== 'hidden' || (p.values[f.name] ?? '') !== '')
    .map((f) => [f.label, displayValue(f.type, (p.values[f.name] ?? '').trim()) || '–']);
  for (const e of p.extra ?? []) rows.push([e.label, e.value || '–']);

  const meta: [string, string][] = [
    ['Formular', def.title],
    ['Thema', theme],
    ['Absende-Seite', p.page || '–'],
    ['Zeitstempel', timestamp],
  ];
  if (p.utm && Object.keys(p.utm).length)
    meta.push(['UTM', Object.entries(p.utm).map(([k, v]) => `utm_${k}=${v}`).join(', ')]);

  const tr = ([k, v]: [string, string]) =>
    `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#555;vertical-align:top;white-space:nowrap"><strong>${escapeHtml(k)}</strong></td><td style="padding:8px 12px;border-bottom:1px solid #eee;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`;

  return `<!doctype html><html><body style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#16191a">
<h2 style="margin:0 0 12px;font-size:18px">Neue Anfrage über ${escapeHtml(mail.customerName)} – ${escapeHtml(def.title)}</h2>
<table cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;max-width:680px">${rows.map(tr).join('')}</table>
<h3 style="margin:24px 0 8px;font-size:14px;color:#555">Details</h3>
<table cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;max-width:680px">${meta.map(tr).join('')}</table>
</body></html>`;
}

export function buildText(def: FormDef, p: LeadPayload, theme: string, timestamp: string) {
  const lines = def.fields.map((f) => `${f.label}: ${displayValue(f.type, (p.values[f.name] ?? '').trim()) || '–'}`);
  for (const e of p.extra ?? []) lines.push(`${e.label}: ${e.value || '–'}`);
  lines.push('', `Formular: ${def.title}`, `Thema: ${theme}`, `Absende-Seite: ${p.page || '–'}`, `Zeitstempel: ${timestamp}`);
  return lines.join('\n');
}
