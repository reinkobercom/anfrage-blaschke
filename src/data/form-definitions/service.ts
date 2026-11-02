/**
 * Formulare der Gruppe „service“ (Seite /service).
 */
import type { FormDef } from '../forms';

const defs: FormDef[] = [
  {
    // Onepage: „Full-IT-Wartung v2 – Anfrage“
    id: 'a6394f4d-2a50-4da7-91f0-65ad0b230a2d',
    title: 'Full-Service-Wartung',
    pages: ['/service'],
    fields: [
      { name: 'firstName', label: 'Vorname', required: true },
      { name: 'lastName', label: 'Nachname' },
      { name: 'company', label: 'Unternehmen' },
      { name: 'phone', label: 'Telefon', type: 'tel', required: true },
      { name: 'employees', label: 'Mitarbeiterzahl', type: 'select', required: true },
    ],
    // Thema = Formularname, mit Unternehmen falls angegeben
    themeFallback: (v) => (v.company?.trim() ? `Full-Service-Wartung – ${v.company.trim()}` : 'Full-Service-Wartung'),
    // Keine E-Mail im Formular → kein replyToField
    redirect: '/danke-service',
  },
];

export default defs;
