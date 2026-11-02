/** FAQ-Texte der Support-Seiten (wörtlich von Onepage, Tippfehler korrigiert). */
export const faqSupport = [
  { q: 'Remote oder vor Ort – was ist möglich?', a: 'Beides. Die kostenlose Servicestunde gilt remote und vor Ort – auch bei Hardware-Problemen. Für Vor-Ort-Einsätze sind wir im Umkreis von 100 km um Haan tätig. Wir entscheiden gemeinsam vorab, was für dein Problem sinnvoller ist.' },
  { q: 'Was passiert, wenn die erste Stunde nicht reicht?', a: 'Nach der kostenlosen Stunde rechnen wir transparent weiter ab: 25 € pro angefangener 15 Minuten (100 € pro Stunde). Du entscheidest, ob du weitermachen möchtest – es gibt keine Verpflichtung.' },
  { q: 'Was ist das kostenlose Vorab-Gespräch?', a: 'Bevor wir die operative Servicestunde beginnen, sprechen wir unverbindlich mit dir: Wo stehst du? Was ist dein Problem? Wie können wir die Stunde optimal für dich nutzen? Dieses Vorgespräch ist vollständig kostenlos und unverbindlich – unabhängig von der Servicestunde.' },
  { q: 'Ist die erste Stunde wirklich komplett kostenlos?', a: 'Ja – keine versteckten Kosten, kein Trick. Wir analysieren und lösen dein IT-Problem eine Stunde lang vollständig kostenlos. Danach entscheidest du, ob du weitermachen möchtest.' },
  { q: 'Für welche Unternehmen gilt das Angebot?', a: 'Für Unternehmen ab 10 Mitarbeitern im Raum Haan und einem Umkreis von 100 km. Remote-Support ist grundsätzlich deutschlandweit möglich.' },
  { q: 'Wie schnell bekomme ich einen Termin?', a: 'Innerhalb von 24 Stunden an Werktagen stellen wir die kostenlose Servicestunde zur Verfügung. Nach deiner Anfrage melden wir uns schnellstmöglich für das kostenlose Vorab-Gespräch.' },
  { q: 'Bin ich nach der Servicestunde an etwas gebunden?', a: 'Nein. Es gibt keinen automatischen Vertrag und keine Verpflichtung. Wenn du überzeugt bist, können wir über eine langfristige Betreuung sprechen – das ist aber deine Entscheidung.' },
];

/** /full-it-wartung – FAQ 6 („Wie schnell bekomme ich einen Termin?“) war ein Platzhalter und entfällt (Entscheidung R3). */
export const faqWartung = [
  { q: 'Was ist genau in den 3 Monaten inklusive?', a: 'Alles, was an IT anfällt – vollständig. Server-Wartung, Updates, Netzwerk, Outlook, E-Mail, Backup-Überwachung, Security-Monitoring, Remote-Support und Vor-Ort-Einsätze. Kurz: Deine komplette IT läuft – oder wir sorgen dafür.' },
  { q: 'Muss ich meinen aktuellen IT-Anbieter kündigen?', a: 'Nein. Du kannst parallel testen. Wir übernehmen die Betreuung, während du deinen bestehenden Anbieter noch hast – so hast du null Risiko beim Wechsel.' },
  { q: 'Was passiert nach den 3 Monaten?', a: 'Nichts – wenn du nicht willst. Wenn du überzeugt bist, bieten wir dir den regulären Full-Wartungsvertrag an: ca. 50 €/Mitarbeiter/Monat, keine Mindestlaufzeit, jederzeit kündbar.' },
  { q: 'Gilt das auch bei Hardware-Problemen oder nur remote?', a: 'Beides. Remote und vor Ort – für Vor-Ort-Einsätze sind wir im Umkreis von 100 km um Haan tätig. Wir entscheiden gemeinsam, was für dein Problem sinnvoller ist.' },
  { q: 'Für welche Unternehmen gilt das Angebot?', a: 'Für Unternehmen ab 10 Mitarbeitern im Raum Haan und einem Umkreis von 100 km. Remote-Support ist grundsätzlich deutschlandweit möglich.' },
];

export const faqJsonLd = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
});
