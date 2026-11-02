/**
 * Freemail-Sperre wie live (Liste aus den Onepage-Komponenten). Der Server prüft zusätzlich
 * mit FREEMAIL_DOMAINS aus src/data/forms.ts – beide Listen sind identisch.
 * (Eigene Kopie, damit die Formular-Definitionen nicht im Browser-Bundle landen.)
 */
export const FREEMAIL = [
  'gmail.com', 'googlemail.com', 'gmx.de', 'gmx.net', 'gmx.at', 'gmx.ch', 'web.de',
  'yahoo.com', 'yahoo.de', 'hotmail.com', 'hotmail.de', 'outlook.com', 'outlook.de',
  'live.de', 'live.com', 't-online.de', 'freenet.de', 'aol.com', 'icloud.com',
  'me.com', 'mail.de', 'posteo.de', 'arcor.de', 'gmx.com', 'protonmail.com', 'proton.me',
];

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const isFreemail = (email: string) => FREEMAIL.includes((email.split('@')[1] || '').toLowerCase());
