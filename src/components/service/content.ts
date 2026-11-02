/**
 * Texte der Seite /service – wörtlich von der Onepage-Seite übernommen.
 * Texte hier ändern; die Komponenten lesen nur aus dieser Datei.
 */
import { site } from '../../data/site';

export const hero = {
  headline: '3 Monate Full-Service-Wartung',
  headlineAccent: 'Komplett auf uns.',
  subline: 'Wir übernehmen deine gesamte IT-Betreuung für 3 Monate auf unsere Kosten. Lern uns kennen, bevor du dich entscheidest.',
  trust: ['Für Unternehmen ab 10 MA', '3 Monate kostenloser Full-Service', 'Kein Vertrag, jederzeit kündbar'],
  ctaLabel: 'Jetzt 3 Monate kostenlos starten',
  ctaHref: '#formular',
};

export const painCards = {
  eyebrow: 'Das kommt dir bekannt vor?',
  title: 'Dann bist du hier genau richtig.',
  cards: [
    {
      tag: 'Erreichbarkeit',
      headline: 'Kein Rückruf. Keine Lösung. Nur eine Ticket-Nummer.',
      body: 'Du hast ein IT-Problem, meldest es... und wartest. Kein Rückruf, keine Lösung, nur eine Nummer im System. Das ist kein Support. Das ist Zeitverschwendung.',
    },
    {
      tag: 'Wechsel-Schmerz',
      headline: 'Migration abgeschlossen. Rechnung bezahlt. Nichts läuft.',
      body: 'Langsam, instabil, Fehler, die niemand erklären kann. Du meldest es. Es wird „angeschaut“. Drei Wochen später das gleiche Problem. Das kennen wir... und wir lösen es.',
    },
    {
      tag: 'Vertrauen',
      headline: 'Du hast schon zweimal gewechselt – und es war jedes Mal dasselbe.',
      body: 'Große Versprechen beim Start. Und dann: Standardlösungen, lange Reaktionszeiten. Das Gefühl, einer von hundert Kunden zu sein, nicht einer von wenigen. Wechseln lohnt sich. Wenn man zum richtigen wechselt.',
    },
  ],
};

export const formular = {
  formId: 'a6394f4d-2a50-4da7-91f0-65ad0b230a2d',
  formTitle: 'Jetzt kostenlos starten',
  formSub: 'Wir melden uns innerhalb 24h werktags',
  offerBadge: '3 Monate gratis',
  availLabel: 'Verfügbar:',
  availValue: 'innerhalb 24h werktags',
  submitLabel: 'Lern uns kennen – 3 Monate ohne Risiko',
  loadingLabel: 'Wird gesendet...',
  disclaimer: 'Kein Vertrag · Keine Kosten · Jederzeit kündbar · Deine Daten werden ausschließlich zur Kontaktaufnahme genutzt und nicht weitergegeben.',
  requiredMessage: 'Bitte Vorname, Telefon und Mitarbeiterzahl ausfüllen.',
  /** Allgemeine Fehlermeldung – Telefonnummer wird angehängt */
  errorMessage: 'Etwas ist schiefgelaufen. Bitte ruf uns direkt an:',
  phoneDisplay: site.phone.display,
  phoneHref: site.phone.href,
  employeeOptions: [
    { value: '10-20', label: '10–20 Mitarbeiter' },
    { value: '21-50', label: '21–50 Mitarbeiter' },
    { value: '51-100', label: '51–100 Mitarbeiter' },
    { value: '100+', label: 'Mehr als 100 Mitarbeiter' },
  ],
};

export const offer = {
  offerEyebrow: 'Was in den 3 Monaten inklusive ist',
  offerTitle: 'Full-Service-Wartung. Alles drin. 3 Monate kostenlos.',
  offerItems: [
    'Vollständige IT-Wartung – alles was anfällt ist abgedeckt',
    'Server-Wartung, Updates, Patches – proaktiv ohne dass du fragst',
    'Netzwerk & WLAN – Überwachung und Entstörung inklusive',
    'Microsoft 365, Outlook, E-Mail – alles läuft oder wir sorgen dafür',
    'Backup-Überwachung – täglich geprüft',
    'Persönlicher Ansprechpartner – direkt erreichbar, kein Ticketsystem',
    'Remote & vor Ort – je nachdem was dein Problem erfordert',
    'Testbar parallel zu deinem jetzigen Anbieter – kein Wechselzwang',
  ],
  priceLabel: 'Danach, wenn du willst:',
  priceValue: 'Wir machen weiter – zu fairen Konditionen.',
  stepsEyebrow: "So funktioniert's",
  stepsTitle: 'In 4 Schritten zu deinen 3 kostenlosen Monaten.',
  steps: [
    { tag: 'Sofort', title: 'Anfrage senden', desc: 'Formular ausfüllen – wir melden uns innerhalb von 24h werktags.' },
    { tag: 'Kostenlos', title: 'Kostenloses Vorab-Gespräch', desc: 'Wir lernen deine IT-Umgebung kennen – Systeme, Probleme, wo wir ansetzen.' },
    { tag: '3 Monate Full-Service', title: 'Wir übernehmen alles – auf unsere Kosten', desc: 'Proaktive Wartung, persönlicher Support, remote & vor Ort. Du zahlst nichts.' },
    { tag: 'Du entscheidest', title: 'Kein Druck. Nie.', desc: "Überzeugt? Dann geht's weiter. Nicht überzeugt? Kein Problem – kein Vertrag, keine Rechnung." },
  ],
};

export const socialProof = {
  stats: [
    { value: '<10 Min', label: 'Mittlere Reaktionszeit bei Support' },
    { value: '2', label: 'Eigene Rechenzentren in Deutschland' },
    { value: '86+', label: 'Migrationen ohne Ausfallzeit' },
    { value: '100%', label: 'Daten in Deutschland · DSGVO-konform' },
  ],
  lukasName: site.person.name,
  lukasRole: `${site.person.role} · Blaschke IT, Haan`,
  lukasQuote: 'Jeder IT-Dienstleister sagt, er ist gut. Wir beweisen es dir: drei Monate lang, kostenlos und komplett ohne Risiko für dich. Wenn wir nicht liefern, gehst du einfach.',
  testiQuote: 'Der vorherige IT-Dienstleister hat uns umgezogen – aber das System lief einfach nicht sauber. Blaschke IT hat das Problem direkt gefunden und gelöst. Seitdem läuft alles.',
  testiAuthor: 'Geschäftsführer',
  testiCompany: 'Elektrounternehmen, 18 Mitarbeiter · Düsseldorf',
};

export const faqCta = {
  faqEyebrow: 'Fragen & Antworten',
  faqs: [
    { q: 'Was ist genau in den 3 Monaten inklusive?', a: 'Alles was an IT anfällt – vollständig. Server-Wartung, Updates, Netzwerk, Outlook, E-Mail, Backup-Überwachung, Security-Monitoring, Remote-Support und Vor-Ort-Einsätze.' },
    { q: 'Muss ich meinen aktuellen IT-Anbieter kündigen?', a: 'Nein. Du kannst parallel testen – wir übernehmen die Betreuung während du deinen bestehenden Anbieter noch hast. Null Risiko.' },
    { q: 'Was passiert nach den 3 Monaten?', a: 'Nichts – wenn du nicht willst. Wenn du überzeugt bist, sprechen wir über eine weitere Zusammenarbeit. Kein automatischer Vertrag, kein Druck.' },
    { q: 'Gilt das auch bei Hardware-Problemen oder nur remote?', a: 'Beides. Remote und vor Ort – für Vor-Ort-Einsätze sind wir im Umkreis von 100 km um Haan tätig.' },
    { q: 'Für welche Unternehmen gilt das Angebot?', a: 'Für Unternehmen ab 10 Mitarbeitern im Raum Haan und einem Umkreis von 100 km. Remote-Support ist deutschlandweit möglich.' },
  ],
  ctaHeadline: '3 Monate Full-Service-Wartung. Auf uns.',
  ctaSub: 'Wir übernehmen deine gesamte IT-Betreuung für 3 Monate auf unsere Kosten. Kein Vertrag. Kein Risiko. Du entscheidest danach.',
  ctaLabel: 'Jetzt 3 Monate kostenlos starten',
  ctaHref: '#formular',
  ctaTrust: ['Kein Vertrag', '3 Monate kostenlos', 'Kein Pitch', 'Ab 10 MA'],
};

export const reviews = {
  eyebrow: 'Das sagen unsere Kunden',
  headline: 'Überzeugt durch Leistung.',
};

export const team = {
  eyebrow: 'Das sind wir',
  headline: 'Willkommen bei Blaschke IT.',
  subline: 'Kein anonymes Callcenter. Echte Menschen, die sich darauf freuen, dich persönlich und deinen Betrieb kennenzulernen.',
  images: [
    'team-blaschke-it-gruppenfoto',
    'mitarbeiter-headset-telefon',
    'mitarbeiter-headset-arbeitsplatz',
    'mitarbeiterin-headset-arbeitsplatz',
    'support-mitarbeiter-headset-schreibtisch',
  ] as const,
};
