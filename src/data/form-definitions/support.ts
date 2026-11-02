/**
 * Formulare der Gruppe „support“ (/support, /full-it-wartung, /it-support).
 * Alle drei sind auf Onepage gleich aufgebaut; Zuordnung: /it-support und /full-it-wartung live im
 * Seitenquelltext belegt, /support per Ausschluss (46a49a2b…).
 * Kein Themenfeld → Thema = Formularname. Nach dem Absenden → /danke (UTM-Parameter werden mitgegeben).
 */
import type { FormDef, FieldDef } from '../forms';

const fields: FieldDef[] = [
  { name: 'vorname', label: 'Vorname', required: true },
  { name: 'nachname', label: 'Nachname', required: true },
  { name: 'unternehmen', label: 'Unternehmen', required: true },
  { name: 'email', label: 'E-Mail', type: 'email', required: true },
  { name: 'telefon', label: 'Telefon', type: 'tel', required: true },
  { name: 'mitarbeiterzahl', label: 'Mitarbeiterzahl', type: 'select', required: true },
];

const defs: FormDef[] = [
  {
    id: '46a49a2b-ee3d-4f12-a96e-f0cb8befc119',
    title: '1 Std. IT-Support',
    pages: ['/support'],
    fields,
    replyToField: 'email',
    redirect: '/danke',
  },
  {
    id: 'PygUSIzSqQyoHAdYNYB_M',
    title: '3 Monate Full-IT-Wartung',
    pages: ['/full-it-wartung'],
    fields,
    replyToField: 'email',
    redirect: '/danke',
  },
  {
    id: 'w-d5rakJS8vcnXx7Pp4ea',
    title: 'IT-Support',
    pages: ['/it-support'],
    fields,
    replyToField: 'email',
    redirect: '/danke',
  },
];

export default defs;
