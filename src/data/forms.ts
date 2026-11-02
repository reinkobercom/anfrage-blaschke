/**
 * Formular-Versand (Resend).
 *
 * - Empfänger, Absender und Betreff-Vorlage gelten für ALLE Formulare.
 * - Die einzelnen Formulare (Felder, Pflichtfelder, Thema-Feld, Weiterleitung) stehen in
 *   src/data/form-definitions/*.ts – je Seitengruppe eine Datei.
 * - Der API-Key liegt NUR als Umgebungsvariable RESEND_API_KEY in Vercel.
 */

export const mail = {
  to: 'leads@reinkober.agency',
  /** Anzeigename | Absenderadresse (Domain ist in Resend verifiziert) */
  from: 'Blaschke IT | Website <leads@reinkober-leadportal.com>',
  customerName: 'Blaschke IT',
  /** {kunde} und {thema} werden ersetzt. Das Thema ist nie leer. */
  subjectTemplate:
    'Neue Anfrage | {kunde} - reinkober.com - Unternehmensberatung für Wachstum, Vertrieb & Recruiting  | {thema}',
} as const;

export type FieldType = 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'hidden';

export type FieldDef = {
  /** Schlüssel, unter dem der Wert gesendet wird */
  name: string;
  /** Beschriftung in der Lead-Mail */
  label: string;
  type?: FieldType;
  required?: boolean;
};

export type FormDef = {
  /** Onepage-Form-ID bzw. sprechende ID – wird vom Formular mitgeschickt */
  id: string;
  /** Formularname, dient als Thema, wenn kein Thema-Feld befüllt ist (z. B. „Rückruf“) */
  title: string;
  /** Seite(n), auf denen das Formular steht */
  pages: string[];
  /** Felder in Formular-Reihenfolge (so erscheinen sie in der Mail) */
  fields: FieldDef[];
  /** Feld, dessen Wert als Thema im Betreff steht (falls befüllt) */
  themeField?: string;
  /** Optional: Thema aus mehreren Werten bauen, z. B. (v) => `Rückruf Kanzlei – ${v.rueckruf_kanzlei}` */
  themeFallback?: (values: Record<string, string>) => string | undefined;
  /** Feld mit der E-Mail-Adresse des Absenders → reply_to */
  replyToField?: string;
  /** Freemail-Adressen ablehnen (Kanzlei-/Handwerk-Formulare) */
  blockFreemail?: boolean;
  blockFreemailMessage?: string;
  /** Ziel nach erfolgreichem Absenden (leer = Meldung auf der Seite) */
  redirect?: string;
};

const modules = import.meta.glob<{ default: FormDef[] }>('./form-definitions/*.ts', { eager: true });

export const forms: Record<string, FormDef> = Object.fromEntries(
  Object.values(modules)
    .flatMap((m) => m.default)
    .map((f) => [f.id, f]),
);

export const FREEMAIL_DOMAINS = [
  'gmail.com', 'googlemail.com', 'gmx.de', 'gmx.net', 'gmx.at', 'gmx.ch', 'gmx.com', 'web.de',
  'yahoo.com', 'yahoo.de', 'hotmail.com', 'hotmail.de', 'outlook.com', 'outlook.de', 'live.de',
  'live.com', 't-online.de', 'freenet.de', 'aol.com', 'icloud.com', 'me.com', 'mail.de',
  'posteo.de', 'arcor.de', 'protonmail.com', 'proton.me',
];
