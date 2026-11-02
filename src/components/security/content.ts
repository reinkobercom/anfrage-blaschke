/**
 * Texte der Security-Check-Seiten (/securitycheck, /security-check und Entwurf /sicherheitscheck).
 * Wörtlich von der Live-Seite übernommen, nur Tippfehler/Zeichensetzung korrigiert
 * (Liste: /home/claude/analysis/build-notes/security.txt). Anrede (du/Sie) wie vorgefunden.
 */
import type { ImageKey } from '../../data/images';
import type { ProblemIcon } from './icons';

export type Problem = { icon: ProblemIcon; title: string; text: string };

/** Gemeinsame Bausteine beider Varianten */
export const shared = {
  sslBadge: 'SSL-verschlüsselt · DSGVO-konform',
  valueBar: { lead: 'Kostenloser Security-Check', pre: 'im', highlight: 'Wert von 500 €' },
  bullets: [
    'Für Unternehmen ab 10 MA',
    'Kein Vertrag, keine Kosten, keine Bindung',
    'PDF-Report mit Handlungsempfehlungen',
    'Persönliches Vorabgespräch',
  ],
  person: { name: 'Lukas Blaschke', role: 'Geschäftsführer · Blaschke IT, Haan' },
  quote:
    '„Ich habe diesen Check Hunderte Male gemacht. Ich habe noch nie einen Betrieb komplett ohne Befund gesehen. Die Frage ist nicht ob – sondern was.“',
  form: {
    heading: 'Jetzt Security-Check sichern',
    button: 'Jetzt Security-Check sichern',
    buttonSub: 'Kostenlos & unverbindlich',
    note: 'Kein Vertrag · Keine Kosten · DSGVO-konform',
  },
  benefits: {
    label: 'Was du bekommst',
    heading: 'Voller Service. Null Kosten.',
    items: [
      { title: 'Kostenloses Vorabgespräch', text: 'Wir lernen deine IT-Umgebung kennen – welche Systeme, welche Software, wo wir ansetzen.' },
      { title: 'Vollständiger Security-Scan', text: 'Analyse deiner IT auf Sicherheitslücken, Backup-Status, Datenschutzrisiken und offene Zugänge.' },
      { title: 'PDF-Report mit konkreten Handlungsempfehlungen', text: 'Priorisiert nach Dringlichkeit: was ist kritisch, was mittelfristig, was sofort. Gehört dir – egal was danach passiert.' },
      {
        title: 'Null Kosten. Null Bindung. Null Druck.',
        text: 'Kein Vertrag, keine Mindestlaufzeit, keine versteckten Kosten. Den Security-Check machen wir für Dich, egal ob du danach mit uns arbeitest oder nicht. Wir verdienen dein Vertrauen durch Leistung, nicht durch Paragrafen.',
      },
    ],
    totalLabel: 'Gesamtwert des Checks:',
    totalValue: '500€',
  },
  testimonial: {
    heading: 'Was Kunden sagen',
    quote:
      '„Wir dachten unsere IT läuft gut – wir haben seit Jahren keine Probleme gehabt. Der Check hat drei offene Zugänge von Ex-Mitarbeitern aufgedeckt und ein Backup, das seit acht Monaten still­schweigend fehlschlug. Das hätte uns im Ernstfall alles gekostet.“',
    name: 'Thomas K., Geschäftsführer',
    role: 'Elektrounternehmen · 24 Mitarbeiter · Düsseldorf',
    rating: 5,
  },
  whyFree: {
    label: 'Warum kostenlos?',
    heading: 'Das ist kein Marketing-Trick.',
    text: 'Ein professioneller Security-Check kostet normalerweise 400–600 € – Personalaufwand, Scan-Tools, Report-Erstellung. Wir bieten ihn kostenlos an, weil wir überzeugt sind: Wenn wir dir zeigen, wo es brennt, wirst du selbst entscheiden, ob wir der richtige Partner sind. Kein Druck. Der Report gehört dir.',
  },
  cta: {
    heading: 'Was hast Du zu verlieren?',
    paragraphs: [
      'Im besten Fall findest du heraus, dass deine IT perfekt aufgestellt ist.',
      'Das wäre schön. Ich gönne es dir. Aber in 9 von 10 Checks finden wir etwas – meistens etwas, das der Geschäftsführer nicht wusste und nicht erwartet hat und dich alles kosten könnte.',
      'Bei unserem Security-Check zahlst Du nichts. Du unterschreibst nichts. Du bekommst einen konkreten Report und entscheidest selbst, was du damit machst.',
    ],
    button: 'Jetzt kostenlos sichern',
    buttonSub: 'Kein Vertrag · Keine Kosten · DSGVO-konform',
  },
};

export type Stat = { prefix?: string; value: number; suffix?: string; text: string };

export type Variant = {
  h1: { before: string; highlight: string; after?: string };
  subline?: string;
  intro: { bold: string; text: string };
  stats: Stat[];
  problems: { heading: string; items: Problem[] };
  testimonialImage: ImageKey;
  ctaImage: ImageKey;
};

/** /securitycheck */
export const securitycheck: Variant = {
  h1: { before: 'Deine Daten liegen\ngerade ', highlight: 'ungesichert in Amerika', after: '.' },
  intro: {
    bold: 'Und du weißt es wahrscheinlich nicht mal.',
    text: 'In 9 von 10 Betrieben finden wir mindestens eine kritische Lücke – meistens ohne dass jemand es wusste. Nutze jetzt unseren kostenlosen Security-Check, um frühzeitig Mängel in deiner IT-Sicherheit zu finden.',
  },
  stats: [
    { prefix: 'Bei', value: 92, suffix: '%', text: 'aller Betriebe finden wir kritische Lücken beim Security-Check.' },
    { value: 500, suffix: '€', text: 'Wert des Security-Checks inkl. Vorabgespräch, Check und Handlungsempfehlungen per PDF.' },
    { value: 20, suffix: '+', text: 'Jahre IT-Erfahrung im Mittelstand' },
  ],
  problems: {
    heading: 'Warum das wichtig ist',
    items: [
      {
        icon: 'alert',
        title: 'Deine Daten liegen in Amerika.',
        text: 'Microsoft 365, Google, Dropbox – alle US-Anbieter müssen per Patriot Act US-Behörden Zugang zu deinen Daten geben. Deine Patente, Verträge, Kundendaten. Egal wo die Server stehen.',
      },
      {
        icon: 'clock',
        title: 'Wann war die letzte Prüfung?',
        text: 'Kein Backup getestet. Software seit Jahren nicht aktualisiert. Zugänge von Ex-Mitarbeitern noch offen. Das ist kein Einzelfall – das ist der Normalzustand in den meisten KMUs.',
      },
      {
        icon: 'warning',
        title: 'Ein Absturz. Drei Wochen weg.',
        text: '„Backup lief – aber Wiederherstellung nicht möglich.“ Das hören wir wöchentlich. Datenverlust, Betriebsausfall, Reputationsschaden. Ein Check vorher kostet nichts. Der Schaden danach alles.',
      },
    ],
  },
  testimonialImage: 'kunde-portraet-buero',
  ctaImage: 'lukas-blaschke-rechenzentrum',
};

/** /security-check (Textvariante) */
export const securityCheck: Variant = {
  h1: { before: 'Du hörst es täglich.\nGehackt. ', highlight: 'Alles weg.' },
  subline: 'Jahre Arbeit. Kundendaten. Reputation. Verloren.',
  intro: {
    bold: 'Und du weißt es wahrscheinlich nicht mal.',
    text: 'In 9 von 10 Betrieben finden wir mindestens eine kritische Sicherheitslücke – meistens ohne dass es jemand wusste. Unser kostenloser Security-Check zeigt dir in schwarz auf weiß, wie sicher deine IT wirklich ist.',
  },
  stats: [
    { prefix: 'Bei', value: 92, suffix: '%', text: 'aller Betriebe finden wir kritische Lücken beim Security-Check.' },
    { value: 500, suffix: '€', text: 'Wert des Security-Checks inkl. Vorabgespräch, Check und Handlungsempfehlungen per PDF.' },
    { value: 20, suffix: '+ Jahre', text: 'IT-Erfahrung im Mittelstand hat uns gelehrt, dass Vorsorge immer besser als Nachsorge ist.' },
  ],
  problems: {
    heading: 'Warum das jeden betrifft',
    items: [
      {
        icon: 'alert',
        title: 'Cyberkriminalität trifft keine Konzerne – sie trifft Betriebe wie deinen.',
        text: '68% aller Cyberangriffe richten sich gegen kleine und mittlere Unternehmen. Nicht weil sie mehr wert sind – sondern weil ihre IT leichter zu knacken ist.',
      },
      {
        icon: 'clock',
        title: 'Jahrzehnte Arbeit, in Stunden vernichtet.',
        text: 'Kundendaten, Buchhaltung, Aufträge, Verträge. Ein erfolgreicher Angriff oder ein Datenverlust ohne funktionierendes Backup kann einen Betrieb in die Knie zwingen. Nicht irgendwann – das passiert täglich.',
      },
      {
        icon: 'warning',
        title: 'Die meisten Lücken sind seit Jahren offen.',
        text: 'Kein getestetes Backup. Veraltete Software. Zugänge von Mitarbeitern, die längst weg sind. Das ist kein Versagen – das ist Alltag. Und genau das finden wir beim Check.',
      },
    ],
  },
  testimonialImage: 'kunde-portraet-buero-2',
  ctaImage: 'lukas-blaschke',
};

/** Mitarbeiteranzahl-Optionen (Dropdown, live einfache Auswahl) */
export const employeeOptions = ['10-20 Mitarbeiter', '21-50 Mitarbeiter', 'mehr als 51 Mitarbeiter'];
