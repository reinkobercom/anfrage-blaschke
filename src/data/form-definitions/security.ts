/**
 * Formulare der Gruppe „security“ (/securitycheck, /security-check).
 * IDs wie live im Seiten-HTML (Onepage-formIds) – abweichend von der ersten Analyse:
 *   /securitycheck  → 9be3467f-… („Formular Aufzählungspunkte“)
 *   /security-check → RXJaOEVlvXh6c1-lB5lDs („Security Check“)
 * Felder, Pflichtangaben und Optionen wie live; Thema im Betreff: „Security-Check“.
 * Entwurf /sicherheitscheck (Quiz, 838cca75-…) steht unten – er wird erst aktiv genutzt,
 * wenn src/drafts/sicherheitscheck.astro nach src/pages verschoben wird.
 */
import type { FormDef, FieldDef } from '../forms';

const securityFields: FieldDef[] = [
  { name: 'vorname', label: 'Vorname' },
  { name: 'nachname', label: 'Nachname' },
  { name: 'unternehmen', label: 'Unternehmen', required: true },
  { name: 'email', label: 'E-Mail', type: 'email' },
  { name: 'telefon', label: 'Telefon', type: 'tel' },
  { name: 'mitarbeiteranzahl', label: 'Mitarbeiteranzahl', type: 'select', required: true },
];

const defs: FormDef[] = [
  {
    id: '9be3467f-77e1-43f5-958d-c4ebf36ff1fe',
    title: 'Security-Check',
    pages: ['/securitycheck'],
    fields: securityFields,
    replyToField: 'email',
    redirect: '/danke-securitycheck',
  },
  {
    id: 'RXJaOEVlvXh6c1-lB5lDs',
    title: 'Security-Check',
    pages: ['/security-check'],
    fields: securityFields,
    replyToField: 'email',
    redirect: '/danke-securitycheck',
  },
  {
    // ENTWURF /sicherheitscheck (unveröffentlicht): Quiz IT-Sicherheitscheck.
    // Quiz-Antworten werden als extra (Frage → Antwort) mitgesendet.
    id: '838cca75-d091-4c7e-b87d-6d770a7c95ff',
    title: 'IT-Sicherheitscheck (Quiz)',
    pages: ['/sicherheitscheck'],
    fields: [
      { name: 'name', label: 'Vollständiger Name', required: true },
      { name: 'telefon', label: 'Telefonnummer', type: 'tel', required: true },
      { name: 'email', label: 'E-Mail', type: 'email' },
    ],
    replyToField: 'email',
    // Live-Entwurf hatte keine Weiterleitung (Onepage-Vorlagen-Dankeschritt) → Meldung auf der Seite.
  },
];

export default defs;
