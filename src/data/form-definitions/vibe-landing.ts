/**
 * Formulare der React-Landingpages Kanzlei + Handwerk (ehemals Onepage-CRM-Formulare).
 * Freemail-Sperre wie live nur beim Kanzlei-Check und beim Notfallplan-Optin.
 */
import type { FormDef } from '../forms';

const rueckrufFields = (org: 'kanzlei' | 'betrieb', orgLabel: string) => [
  { name: 'rueckruf_name', label: 'Vor- und Nachname', required: true },
  { name: `rueckruf_${org}`, label: orgLabel, required: true },
  { name: 'rueckruf_telefon', label: 'Telefonnummer', type: 'tel' as const, required: true },
  { name: 'rueckruf_email', label: 'Geschäftliche E-Mail', type: 'email' as const, required: true },
  { name: 'rueckruf_anliegen', label: 'Worum geht es? (optional)', type: 'textarea' as const },
  { name: 'rueckruf_consent', label: 'Einwilligung Kontaktaufnahme', type: 'checkbox' as const, required: true },
];

const defs: FormDef[] = [
  {
    id: 'ca140241-9de0-4de3-a53d-3569791503f5',
    title: 'Kanzlei-IT-Risikocheck',
    pages: ['/kanzlei-it-check'],
    fields: [
      { name: 'q1', label: 'Speicherort der Mandantenakten' },
      { name: 'q2', label: 'Wer betreut die Technik' },
      { name: 'q3', label: 'Eigener Mailserver / Exchange' },
      { name: 'q4', label: 'Letzter Backup-Wiederherstellungstest' },
      { name: 'q5', label: 'Erwartete Ausfalldauer' },
      { name: 'q6', label: 'Sperrung von Zugängen bei Austritt' },
      { name: 'q7', label: 'Zugriff von unterwegs' },
      { name: 'q8', label: 'Anzahl IT-Arbeitsplätze' },
      { name: 'risiko_score', label: 'Risiko-Punktzahl (max. 21)' },
      { name: 'risiko_stufe', label: 'Risiko-Stufe' },
      { name: 'vorname', label: 'Vorname', required: true },
      { name: 'nachname', label: 'Nachname', required: true },
      { name: 'kanzlei', label: 'Kanzlei', required: true },
      { name: 'email', label: 'Geschäftliche E-Mail', type: 'email', required: true },
      { name: 'telefon', label: 'Telefon', type: 'tel', required: true },
      { name: 'consent', label: 'Einwilligung Kontaktaufnahme', type: 'checkbox', required: true },
    ],
    themeField: 'risiko_stufe',
    themeFallback: () => 'Kanzlei-IT-Risikocheck',
    replyToField: 'email',
    blockFreemail: true,
    blockFreemailMessage: 'Bitte verwenden Sie Ihre Kanzlei-Adresse',
    // Ergebnis erscheint inline – keine Weiterleitung
  },
  {
    id: '771beacc-d3a9-4300-bac5-21d9959d1b7d',
    title: 'Rückruf Kanzlei-Landingpage',
    pages: ['/kanzlei-it-check'],
    fields: rueckrufFields('kanzlei', 'Kanzlei'),
    themeField: 'rueckruf_anliegen',
    themeFallback: () => 'Rückruf Kanzlei',
    replyToField: 'rueckruf_email',
    // Erfolgsmeldung inline – keine Weiterleitung
  },
  {
    id: '9bfe25e8-3d9d-4905-b8d3-22fd0549a18d',
    title: 'Handwerk Notfallplan – PDF-Optin',
    pages: ['/handwerk-notfallplan'],
    fields: [
      { name: 'softwareort', label: 'Wo liegt die Auftrags- und Angebotssoftware?' },
      { name: 'vorname', label: 'Vorname', required: true },
      { name: 'nachname', label: 'Nachname', required: true },
      { name: 'betrieb', label: 'Betrieb', required: true },
      { name: 'email', label: 'Geschäftliche E-Mail', type: 'email', required: true },
      { name: 'telefon', label: 'Telefon', type: 'tel', required: true },
      { name: 'consent', label: 'Einwilligung Kontaktaufnahme', type: 'checkbox', required: true },
    ],
    themeFallback: () => 'Notfallplan Handwerk (PDF)',
    replyToField: 'email',
    blockFreemail: true,
    blockFreemailMessage: 'Bitte verwenden Sie Ihre betriebliche Adresse',
    redirect: '/handwerk-notfallplan-danke',
  },
  {
    id: 'eb338088-c2e9-4dfc-8cb4-716d9bd70a95',
    title: 'Handwerk Notfallplan – Rückruf',
    pages: ['/handwerk-notfallplan'],
    fields: rueckrufFields('betrieb', 'Betrieb'),
    themeField: 'rueckruf_anliegen',
    themeFallback: () => 'Rückruf Handwerk',
    replyToField: 'rueckruf_email',
    redirect: '/handwerk-rueckruf-danke',
  },
  {
    id: 'ef18b494-d5e4-4b4b-a19e-4c5f1f43458c',
    title: 'Handwerk Danke – Rückruf',
    pages: ['/handwerk-notfallplan-danke'],
    fields: rueckrufFields('betrieb', 'Betrieb'),
    themeField: 'rueckruf_anliegen',
    themeFallback: () => 'Rückruf Handwerk (nach Notfallplan)',
    replyToField: 'rueckruf_email',
    redirect: '/handwerk-rueckruf-danke',
  },
];

export default defs;
