/**
 * Formulare der Gruppe „ratgeber“ (PDF-Opt-ins).
 * Live gab es je Seite zwei CRM-Formulare (Desktop-/Mobil-Sektion) mit identischen Feldern.
 * Die neue Seite nutzt EIN responsives Formular mit der Desktop-ID; die Mobil-IDs sind als gleichwertige
 * Definition hinterlegt (falls noch alte Einbindungen/Tests sie senden).
 * Kein Themenfeld → Thema = Formularname. Antwort-Adresse = E-Mail des Absenders.
 * Weiterleitung nach dem Absenden (UTM-Parameter werden im Browser angehängt):
 *   /sicherheitsleitfaden → /danke-pdf
 *   /krisenratgeber       → /danke-notfallratgeber (Entscheidung; live fälschlich /danke-pdf)
 */
import type { FormDef, FieldDef } from '../forms';

const fields: FieldDef[] = [
  { name: 'name', label: 'Name', required: true },
  { name: 'email', label: 'E-Mail', type: 'email', required: true },
  { name: 'firma', label: 'Firmenname', required: true },
  { name: 'telefon', label: 'Telefon', type: 'tel', required: true },
];

const sicherheitsleitfaden = {
  title: 'Sicherheitsleitfaden (PDF)',
  pages: ['/sicherheitsleitfaden'],
  fields,
  replyToField: 'email',
  redirect: '/danke-pdf',
};

const krisenratgeber = {
  title: 'Krisenratgeber (PDF)',
  pages: ['/krisenratgeber'],
  fields,
  replyToField: 'email',
  redirect: '/danke-notfallratgeber',
};

const defs: FormDef[] = [
  { id: '0bf6b2ae-d59c-4042-a225-fefd7ee1197d', ...sicherheitsleitfaden }, // Desktop (genutzt)
  { id: '12592c2d-b958-4ff7-bded-f2b43750c319', ...sicherheitsleitfaden }, // Mobil (live)
  { id: '0XTkDEYR0AZ5CH-mjJLKf', ...krisenratgeber }, // Desktop (genutzt)
  { id: 'iBhuMcD3FMd7J_0GUzFBF', ...krisenratgeber }, // Mobil (live)
];

export default defs;
