/**
 * Inhalte der drei Dankeseiten (/danke, /danke-securitycheck, /danke-service).
 * Texte wörtlich von der Live-Seite (nur Tippfehler/Leerzeichen korrigiert).
 * Rich-Text-Felder (`html`) dürfen <b> und Links enthalten – nur hier gepflegt, nie aus Nutzereingaben.
 */
import { site } from '../../data/site';

const tel = `<a href="${site.phone.href}">${site.phone.display}</a>`;

export type TimelineStep = {
  /** Kleines Label über dem Schritt (Großbuchstaben per CSS) */
  label: string;
  /** Schritt-Titel (H3) */
  title: string;
  /** Fließtext (HTML; Zeilenumbrüche bleiben erhalten) */
  html: string;
};

/** Gemeinsamer erster Schritt aller drei Seiten */
const stepRueckruf: TimelineStep = {
  label: 'Innerhalb 24h werktags',
  title: 'Wir melden uns bei dir',
  html: `Einer unserer IT-Experten ruft dich unter der angegebenen Nummer an – <b>innerhalb von 24 Stunden an Werktagen</b>. Bitte halte dein Telefon mit der von dir angegebenen Telefonnummer bereit. Wir melden uns mit der Telefonnummer: <b>${tel}</b>`,
};

/** Hinweis im dunklen Band (auf allen drei Seiten gleich) */
export const hinweisHtml = `🟢 Wir melden uns <b>innerhalb von 24h an Werktagen</b> – bitte halte dein Telefon mit der angegebenen Rufnummer bereit. <b>Wir melden uns mit der Telefonnummer ${tel}</b> bei Dir.`;

/** Intro (Danke-Hero) – auf allen drei Seiten gleich */
export const intro = {
  label: 'Anfrage erhalten',
  /** Titel; das Wort in `highlight` wird orange hervorgehoben (wie live) */
  titleBefore: 'Danke für deine Anfrage, wir melden uns ',
  highlight: 'gleich',
  titleAfter: '.',
  text: 'Deine Anfrage ist bei uns eingegangen. Hier ist, was als Nächstes passiert.',
};

/** Überschrift der Timeline-Sektion */
export const schritteHead = { label: 'Was jetzt passiert', title: 'Deine nächsten Schritte' };

/** Kontaktblock „Lieber direkt?“ */
export const kontakt = {
  label: 'Lieber direkt?',
  title: 'Du erreichst uns auch so.',
  phone: { label: 'Telefon', value: site.phone.display, href: site.phone.href, note: 'Werktags erreichbar' },
  email: { label: 'E-Mail', value: site.emails.kontakt, href: `mailto:${site.emails.kontakt}`, note: 'Antwort innerhalb 24h' },
};

/* ------------------------------------------------------------------ /danke */
export const stepsDanke: TimelineStep[] = [
  stepRueckruf,
  {
    label: 'Kostenlos & unverbindlich',
    title: 'Kostenloses Vorab-Gespräch',
    html: 'Im ersten Gespräch lernen wir deine Situation kennen: Welche Systeme nutzt ihr? Wo liegt das Problem? Was wollt ihr erreichen? So können wir die operative Servicestunde optimal für dich vorbereiten und nutzen.',
  },
  {
    label: 'Remote oder vor Ort',
    title: 'Die kostenlose Servicestunde',
    html: 'Wir lösen dein IT-Problem – vollständig kostenlos in der ersten Stunde. Kein Pitch, kein Druck. Einfach Hilfe. Nach der Stunde besprechen wir gemeinsam, wie es weitergehen kann.',
  },
];

export const szenarien = {
  label: 'Nach der Servicestunde',
  title: 'Wie es weitergehen kann, entscheidest Du',
  a: {
    label: 'Szenario A · Empfehlung',
    title: 'Vollständiger IT-Support – alles aus einer Hand',
    text: 'Du bist überzeugt und möchtest deine IT dauerhaft in guten Händen wissen? Dann sprechen wir über unseren Full-IT-Support Wartungsvertrag.',
    points: [
      'Persönlicher Ansprechpartner, der dein System kennt',
      'Vollständige IT-Betreuung – Outlook, Server, Netzwerk, alles',
      'Proaktive Wartung, Updates und Backup inklusive',
      'Hervorragende direkte Erreichbarkeit',
    ],
  },
  b: {
    label: 'Szenario B · Flexibel',
    title: 'Problem noch nicht gelöst? Wir machen weiter, wenn Du willst.',
    text: 'Manchmal braucht ein IT-Problem mehr als eine Stunde. Kein Problem – wir arbeiten einfach weiter, zu transparenten Konditionen.',
    points: [
      'Abrechnung im 15-Minuten-Takt',
      'Keine Pauschalen, keine versteckten Kosten',
      'Du entscheidest jederzeit, ob wir weitermachen.',
      'Kein Vertrag, keine Bindung',
    ],
    price: '25 € / 15 Min. · 100 € / Std.',
  },
};

/* ------------------------------------------------------ /danke-securitycheck */
export const stepsSecuritycheck: TimelineStep[] = [
  stepRueckruf,
  {
    label: 'Kostenlos & unverbindlich',
    title: 'Kostenloses Vorab-Gespräch',
    html: 'Wir lernen deine IT-Umgebung kennen – welche Systeme, wo wir ansetzen. 15–20 Minuten, remote.',
  },
  {
    label: 'Security-Scan',
    title: 'Wir prüfen deine IT',
    html: 'Sicherheitslücken, Backup-Status, offene Zugänge, Datenschutzrisiken – vollständig und konkret.',
  },
  {
    label: 'PDF-Report',
    title: 'Du bekommst deinen Report',
    html: 'Priorisiert nach Dringlichkeit. Schwarz auf weiß. Gehört dir – egal was danach passiert.',
  },
];

/* ----------------------------------------------------------- /danke-service */
export const stepsService: TimelineStep[] = [
  stepRueckruf,
  {
    label: 'Kostenlos & unverbindlich',
    title: 'Vorab-Gespräch',
    html: 'Im ersten Gespräch lernen wir deine Situation kennen: Welche Systeme nutzt ihr? Wo liegen eure aktuellen Probleme? Wir beginnen mit der umfassenden Betreuung.',
  },
  {
    label: 'Remote oder vor Ort',
    title: '3 Monate volle IT-Betreuung. Null Kosten.',
    html: [
      '✓ Vollständige IT-Wartung – alles was anfällt ist abgedeckt',
      '✓ Server-Wartung, Updates, Patches – proaktiv ohne dass du fragst',
      '✓ Netzwerk &amp; WLAN – Überwachung und Entstörung inklusive',
      '✓ Microsoft 365, Outlook, E-Mail – alles läuft oder wir sorgen dafür',
      '✓ Backup-Überwachung – täglich geprüft',
      '✓ Persönlicher Ansprechpartner – direkt erreichbar, kein Ticketsystem',
      '✓ Remote &amp; vor Ort – je nachdem was dein Problem erfordert',
      '✓ Kein Wechselzwang – parallel zu deinem jetzigen Anbieter testbar',
    ].join('\n'),
  },
];
