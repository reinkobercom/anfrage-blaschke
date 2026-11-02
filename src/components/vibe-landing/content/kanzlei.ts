/**
 * Inhalte /kanzlei-it-check – 1:1 aus den Onepage-Props (package.json-Defaults = Live-Werte).
 * Bilder werden in der Seite über src/data/images.ts eingebunden.
 */

export const hero = {
  "logoAlt": "Blaschke IT",
  "kicker": "Für Rechtsanwälte und Steuerberater",
  "headStart": "In 2 Minuten wissen Sie, wo Ihre Kanzlei-IT",
  "headAccent": "angreifbar",
  "headEnd": "ist.",
  "subline": "Acht Fragen zu Backup, Zugriff und Ausfallsicherheit. Ihre Einschätzung sehen Sie direkt im Anschluss – ohne Verkaufsgespräch.",
  "personName": "Lukas Blaschke",
  "personRole": "Geschäftsführer, Blaschke IT",
  "quizEyebrow": "Kanzlei-IT-Risikocheck",
  "reassurance": "8 Fragen, rund 2 Minuten. Keine technischen Angaben nötig.",
  "progressLabel": "Frage",
  "progressOf": "von",
  "backLabel": "Zurück",
  "secondaryOptinLabel": "Lieber direkt sprechen? Rückruf anfordern",
  "secondaryOptinHref": "#rueckruf",
  "questions": [
    {
      "question": "Wo liegen Ihre Mandantenakten aktuell?",
      "o1": "Auf einem Server in der Kanzlei",
      "o1Score": 3,
      "o1Finding": "Ihre Akten liegen auf Hardware in den eigenen Räumen. Brand, Diebstahl und Defekt treffen Original und Sicherung gleichzeitig, wenn beides im selben Gebäude steht.",
      "o2": "In einem Rechenzentrum in Deutschland",
      "o2Score": 0,
      "o2Finding": "",
      "o3": "In Microsoft 365 oder einer anderen Cloud",
      "o3Score": 1,
      "o3Finding": "Cloud-Speicher ersetzt kein Backup. Gelöschte oder verschlüsselte Daten werden dort in der Regel mitsynchronisiert.",
      "o4": "Das weiß ich nicht genau",
      "o4Score": 3,
      "o4Finding": "Der Speicherort der Mandantenakten ist in der Kanzlei nicht eindeutig bekannt. Das ist der erste Punkt, den Sie klären sollten."
    },
    {
      "question": "Wer kümmert sich um Ihre Technik?",
      "o1": "Ein externer IT-Dienstleister mit Vertrag",
      "o1Score": 0,
      "o1Finding": "",
      "o2": "Ein Mitarbeiter, der es nebenbei macht",
      "o2Score": 3,
      "o2Finding": "Die IT hängt an einer Person ohne festes Zeitbudget. Bei Urlaub, Krankheit oder Kündigung steht die Kanzlei ohne Ansprechpartner da.",
      "o3": "Der Hersteller unserer Kanzleisoftware",
      "o3Score": 2,
      "o3Finding": "Der Softwarehersteller betreut die Anwendung, nicht Ihre Infrastruktur. Server, Backup und Netzwerk fallen dabei meist durch das Raster.",
      "o4": "Niemand fest",
      "o4Score": 3,
      "o4Finding": "Es gibt keine feste Zuständigkeit für die IT. Im Störfall beginnt die Suche nach Hilfe erst dann, wenn der Schaden bereits eingetreten ist."
    },
    {
      "question": "Betreiben Sie einen eigenen E-Mail-Server, zum Beispiel Exchange, in der Kanzlei?",
      "o1": "Ja",
      "o1Score": 3,
      "o1Finding": "Exchange Server 2016 und 2019 erhalten seit dem 14. Oktober 2025 keine Sicherheitsupdates mehr, die Übergangsfrist endete im April 2026. Ein solcher Server verarbeitet Mandantenkommunikation ohne Herstellerpflege.",
      "o2": "Nein, wir nutzen Microsoft 365 oder Ähnliches",
      "o2Score": 0,
      "o2Finding": "",
      "o3": "Weiß ich nicht",
      "o3Score": 2,
      "o3Finding": "Ob ein eigener Mailserver läuft, sollte in der Kanzlei bekannt sein. Ältere Exchange-Versionen erhalten seit Oktober 2025 keine Sicherheitsupdates mehr.",
      "o4": "",
      "o4Score": 0,
      "o4Finding": ""
    },
    {
      "question": "Wann wurde zuletzt geprüft, ob sich Ihre Daten aus dem Backup tatsächlich wiederherstellen lassen?",
      "o1": "Im letzten Jahr, mit Protokoll",
      "o1Score": 0,
      "o1Finding": "",
      "o2": "Vor über einem Jahr",
      "o2Score": 2,
      "o2Finding": "Der letzte Wiederherstellungstest liegt zu lange zurück. Backups fallen häufig unbemerkt aus, weil niemand den Rückweg prüft.",
      "o3": "Noch nie",
      "o3Score": 3,
      "o3Finding": "Ein Backup, das nie zurückgespielt wurde, ist eine Annahme und kein Sicherheitsnetz. Ob es funktioniert, zeigt sich sonst erst im Ernstfall.",
      "o4": "Weiß ich nicht",
      "o4Score": 3,
      "o4Finding": "Ob Ihre Sicherung im Ernstfall trägt, ist derzeit nicht belegt. Lassen Sie sich das letzte Wiederherstellungsprotokoll zeigen."
    },
    {
      "question": "Ihr Server startet Montagfrüh nicht. Wie lange ist Ihre Kanzlei nicht arbeitsfähig?",
      "o1": "Unter vier Stunden, vertraglich zugesichert",
      "o1Score": 0,
      "o1Finding": "",
      "o2": "Etwa einen Tag",
      "o2Score": 2,
      "o2Finding": "Ein Tag Stillstand bedeutet verpasste Fristen, nicht erreichbare Mandanten und Nacharbeit für das gesamte Team.",
      "o3": "Mehrere Tage",
      "o3Score": 3,
      "o3Finding": "Mehrere Tage ohne Aktenzugriff sind für eine Kanzlei ein Haftungsthema, nicht nur ein technisches Problem.",
      "o4": "Weiß ich nicht",
      "o4Score": 3,
      "o4Finding": "Es gibt keine zugesagte Wiederherstellungszeit. Ohne diese Zusage ist die Dauer eines Ausfalls nicht planbar."
    },
    {
      "question": "Ein Mitarbeiter verlässt die Kanzlei. Wie schnell sind alle Zugänge gesperrt?",
      "o1": "Am selben Tag, dokumentiert",
      "o1Score": 0,
      "o1Finding": "",
      "o2": "Innerhalb weniger Tage",
      "o2Score": 2,
      "o2Finding": "Zugänge bleiben nach dem Austritt noch offen. Jeder Tag ohne Sperrung ist ein unnötiges Risiko für Mandantendaten.",
      "o3": "Das ist nie systematisch geregelt worden",
      "o3Score": 3,
      "o3Finding": "Ohne geregelten Austrittsprozess existieren in vielen Kanzleien aktive Zugänge ehemaliger Mitarbeiter. Eine Bestandsaufnahme der Konten ist überfällig.",
      "o4": "Weiß ich nicht",
      "o4Score": 3,
      "o4Finding": "Wer heute Zugriff auf Ihre Akten hat, ist nicht dokumentiert. Eine Übersicht aller aktiven Konten schafft schnell Klarheit."
    },
    {
      "question": "Kann Ihr Team von unterwegs vollwertig auf die Akten zugreifen?",
      "o1": "Ja, über eine gesicherte Umgebung",
      "o1Score": 0,
      "o1Finding": "",
      "o2": "Über VPN oder Fernwartung, aber es hakt",
      "o2Score": 2,
      "o2Finding": "Träger Zugriff von außen kostet täglich Zeit und führt dazu, dass Dateien auf privaten Geräten zwischengespeichert werden.",
      "o3": "Nur im Büro",
      "o3Score": 2,
      "o3Finding": "Ohne gesicherten Fernzugriff entstehen Umwege über E-Mail-Anhänge und USB-Sticks – genau dort verlassen Mandantendaten die Kanzlei unkontrolliert.",
      "o4": "Weiß ich nicht",
      "o4Score": 3,
      "o4Finding": "Wie von außen auf Akten zugegriffen wird, ist nicht klar geregelt. Das sollte dokumentiert sein."
    },
    {
      "question": "Wie viele Personen arbeiten bei Ihnen am Rechner?",
      "o1": "1 bis 4",
      "o1Score": 0,
      "o1Finding": "",
      "o2": "5 bis 9",
      "o2Score": 0,
      "o2Finding": "",
      "o3": "10 bis 24",
      "o3Score": 0,
      "o3Finding": "",
      "o4": "25 oder mehr",
      "o4Score": 0,
      "o4Finding": ""
    }
  ],
  "contactEyebrow": "Letzter Schritt",
  "contactTitle": "Wohin dürfen wir Ihre Auswertung senden?",
  "contactNote": "Wir fragen keine technischen Details, keine Systemnamen und keine Zugangsdaten ab.",
  "teaserText": "Ihre Auswertung ist fertig: {n} Punkte gefunden, die Sie prüfen lassen sollten.",
  "consentText": "Ich bin mit der Verarbeitung meiner Angaben einverstanden und damit, dass Blaschke IT mich zu meiner Auswertung kontaktiert.",
  "privacyNote": "Ihre Angaben werden ausschließlich zur Erstellung der Auswertung verwendet und nicht weitergegeben.",
  "submitLabel": "Auswertung anzeigen",
  "submittingLabel": "Wird ausgewertet",
  "errorMessage": "Das hat leider nicht geklappt. Bitte versuchen Sie es erneut.",
  "firstNameLabel": "Vorname",
  "lastNameLabel": "Nachname",
  "kanzleiLabel": "Kanzlei",
  "emailLabel": "Geschäftliche E-Mail",
  "phoneLabelField": "Telefon",
  "requiredMessage": "Bitte ausfüllen",
  "emailInvalidMessage": "Bitte prüfen Sie die E-Mail-Adresse",
  "freemailMessage": "Bitte verwenden Sie Ihre Kanzlei-Adresse",
  "consentMessage": "Bitte bestätigen Sie die Einwilligung",
  "resultEyebrow": "Ihre Einschätzung",
  "findingsTitle": "Diese Punkte sollten Sie prüfen lassen",
  "resultNote": "Gern gehen wir die Punkte gemeinsam am Telefon durch und ordnen ein, was für Ihre Kanzlei wirklich relevant ist.",
  "primaryCtaLabel": "Auswertung persönlich besprechen",
  "primaryCtaHref": "#rueckruf",
  "secondaryCtaLabel": "Mehr zu Blaschke IT",
  "secondaryCtaHref": "#situation",
  "tiers": [
    {
      "label": "Stufe 1",
      "maxScore": 5,
      "tone": "good",
      "headline": "Grundlagen stehen",
      "description": "Ihre Kanzlei ist besser aufgestellt als die meisten. Die folgenden Punkte sind trotzdem offen und sollten einmal sauber belegt werden."
    },
    {
      "label": "Stufe 2",
      "maxScore": 12,
      "tone": "warn",
      "headline": "Mehrere Risiken sind ungeprüft",
      "description": "Ihre IT läuft, aber an entscheidenden Stellen fehlt der Nachweis, dass sie im Ernstfall trägt. Das lässt sich ohne großen Aufwand klären."
    },
    {
      "label": "Stufe 3",
      "maxScore": 99,
      "tone": "alert",
      "headline": "Akuter Handlungsbedarf",
      "description": "Nach Ihren Angaben ist Ihre Kanzlei auf einen Ausfall oder Datenverlust nicht vorbereitet. Diese Punkte sollten Sie kurzfristig angehen."
    }
  ],
  "bgColor": "#fbfbfa",
  "panelAccentColor": "var(--color-kit-key1)",
  "formId": "ca140241-9de0-4de3-a53d-3569791503f5",
  "eventStartName": "RisikocheckGestartet",
  "eventLeadName": "Lead",
  "blockFreemail": true
};

export const situation = {
  "anchorId": "situation",
  "bgColor": "#f3f4f3",
  "alertColor": "#d13030",
  "accentColor": "var(--color-kit-key1)",
  "kicker": "Die aktuelle Situation",
  "headStart": "Acht Dinge, die in den meisten Kanzleien",
  "headAccent": "niemand geprüft hat",
  "paragraph": "Nicht weil jemand geschlampt hätte, sondern weil die IT einmal eingerichtet wurde und seitdem läuft. Bis sie es nicht mehr tut.",
  "ctaLabel": "Risikocheck starten",
  "ctaHref": "#check",
  "ctaNote": "8 Fragen, rund 2 Minuten. Sie erfahren, welche Punkte auf Ihre Kanzlei zutreffen.",
  "tiles": [
    {
      "title": "Backup nie zurückgespielt",
      "body": "Dass es läuft, heißt nicht, dass es funktioniert."
    },
    {
      "title": "Server steht im eigenen Haus",
      "body": "Akten und Sicherung im selben Gebäude."
    },
    {
      "title": "Exchange ohne Sicherheitsupdates",
      "body": "Support endete am 14. Oktober 2025."
    },
    {
      "title": "Keine zugesagte Ausfallzeit",
      "body": "Niemand weiß, wie lange die Kanzlei stillsteht."
    },
    {
      "title": "Zugänge ehemaliger Mitarbeiter",
      "body": "Nach dem Austritt oft jahrelang aktiv."
    },
    {
      "title": "Kein sicherer Zugriff von unterwegs",
      "body": "Akten wandern per Mailanhang und USB-Stick."
    },
    {
      "title": "IT hängt an einer Person",
      "body": "Urlaub, Krankheit, Kündigung – und niemand ist da."
    },
    {
      "title": "Seit Jahren nichts überprüft",
      "body": "Einmal eingerichtet, nie wieder angesehen."
    }
  ]
};

export const pruefpunkte = {
  "kicker": "Der Kanzlei-IT-Risikocheck",
  "headStart": "Acht Fragen, die Ihnen Ihr IT-Dienstleister",
  "headAccent": "beantworten können sollte",
  "paragraph": "Der Check fragt keine technischen Details ab und verlangt keine Systemnamen oder Zugangsdaten. Er fragt nach dem, was Sie als Kanzleiinhaberin oder Kanzleiinhaber wissen müssen – und macht sichtbar, wo die Antwort fehlt. Die Fragen gelten für Rechtsanwaltskanzleien und Steuerberatungen gleichermaßen.",
  "boxTitle": "Sie bekommen keine Verkaufsunterlage",
  "boxBody": "Jeder Befund ist als Frage formuliert, die Sie Ihrem bestehenden Dienstleister stellen können. Wenn er sie sauber beantwortet, haben Sie Gewissheit – und uns nicht gebraucht.",
  "ctaLabel": "Risikocheck starten",
  "ctaHref": "#check",
  "ctaNote": "8 Fragen, rund 2 Minuten. Ergebnis direkt im Anschluss.",
  "points": [
    {
      "title": "Speicherort der Akten",
      "body": "Liegen Mandantendaten im Haus, im Rechenzentrum oder in der Cloud – und ist das überhaupt eindeutig bekannt?"
    },
    {
      "title": "Zuständigkeit",
      "body": "Gibt es einen festen Ansprechpartner mit Vertrag oder hängt die IT an einer einzelnen Person nebenbei?"
    },
    {
      "title": "Mailserver",
      "body": "Läuft ein eigener Exchange in der Kanzlei? Seit Oktober 2025 gibt es dafür keine Sicherheitsupdates mehr."
    },
    {
      "title": "Backup-Nachweis",
      "body": "Wurde jemals geprüft, ob sich die Sicherung tatsächlich zurückspielen lässt – mit Protokoll?"
    },
    {
      "title": "Ausfalldauer",
      "body": "Wie lange steht die Kanzlei still, wenn der Server morgen nicht startet? Und ist diese Zeit vertraglich zugesichert?"
    },
    {
      "title": "Zugangsverwaltung",
      "body": "Wie schnell sind Zugänge nach einem Austritt gesperrt und ist dokumentiert, wer heute Zugriff hat?"
    },
    {
      "title": "Arbeiten von unterwegs",
      "body": "Kommt Ihr Team von außen sauber an die Akten oder entstehen Umwege über Mailanhang und USB-Stick?"
    },
    {
      "title": "Größe und Struktur",
      "body": "Wie viele Arbeitsplätze hängen an der Umgebung? Davon hängt ab, was sinnvoll und was überdimensioniert ist."
    }
  ],
  "bgColor": "#ffffff",
  "accentColor": "var(--color-kit-key1)"
};

export const trustindex = {
  "eyebrow": "Das sagen unsere Kunden",
  "headline": "Überzeugt durch Leistung."
};

export const werDahinter = {
  "kicker": "Wer hinter dem Check steht",
  "headStart": "Ein IT-Systemhaus mit",
  "headAccent": "eigenen Rechenzentren",
  "headEnd": "– kein Wiederverkäufer.",
  "paragraph": "Blaschke IT betreibt Serverkapazitäten an zwei Standorten in Deutschland und betreut die Systeme selbst. Rechenzentrum und Support kommen damit aus einer Hand – Sie sprechen im Störfall mit der Person, die Ihre Umgebung kennt, und nicht mit einer Warteschleife. Kanzleien und Steuerberatungen betreuen wir deutschlandweit.",
  "stats": [
    {
      "value": "2",
      "label": "Rechenzentrumsstandorte in Nürnberg und Düsseldorf"
    },
    {
      "value": "60 km",
      "label": "Mindestabstand zwischen den Standorten für die Datensicherheit"
    },
    {
      "value": "über 50 %",
      "label": "der Projekte sind Migrationen lokaler Server ins Rechenzentrum"
    }
  ],
  "cards": [
    {
      "icon": "user",
      "title": "Fester Ansprechpartner",
      "body": "Sie bekommen eine Person mit Namen, die Ihre Umgebung kennt – keine Ticketnummer und keine wechselnden Bearbeiter."
    },
    {
      "icon": "server",
      "title": "Infrastruktur im eigenen Haus",
      "body": "Server, Backup und Betreuung liegen bei uns. Bei Problemen gibt es niemanden, an den wir weiterverweisen könnten."
    },
    {
      "icon": "refresh",
      "title": "Migration als Kernkompetenz",
      "body": "Der Umzug vom lokalen Server ins Rechenzentrum ist unser häufigstes Projekt – inklusive DATEV-Umgebung, Backup, Zugriff und Wartung, zum Festpreis."
    }
  ],
  "quote": "Der IT-Dienstleister hat mich umgezogen, aber das System läuft nicht sauber.",
  "quoteSource": "Ein Satz, den wir von neuen Kunden regelmäßig hören",
  "bgColor": "#f3f4f3",
  "accentColor": "var(--color-kit-key1)"
};

export const galerie = {
  "eyebrow": "Das sind wir",
  "headline": "Willkommen bei Blaschke IT.",
  "subline": "Kein anonymes Callcenter. Echte Menschen, die sich darauf freuen, Sie persönlich und Ihre Kanzlei kennenzulernen."
};

export const rueckruf = {
  "anchorId": "rueckruf",
  "formId": "771beacc-d3a9-4300-bac5-21d9959d1b7d",
  "bgColor": "#0f1618",
  "accentColor": "var(--color-kit-key1)",
  "kicker": "Ohne Check direkt sprechen",
  "headStart": "Sie haben eine konkrete Frage zu Ihrer",
  "headAccent": "Kanzlei-IT",
  "headEnd": "?",
  "paragraph": "Dann müssen Sie den Check nicht ausfüllen. Hinterlassen Sie Ihre Nummer – wir rufen zurück und klären die Frage am Telefon. Wenn wir nicht helfen können, sagen wir Ihnen das im selben Gespräch.",
  "points": [
    {
      "text": "Rückruf werktags innerhalb von 24 Stunden"
    },
    {
      "text": "Sie sprechen mit jemandem, der Ihre Frage fachlich beantworten kann"
    },
    {
      "text": "Kein Termindruck, kein Angebot ohne Ihre Aufforderung"
    }
  ],
  "personName": "Lukas Blaschke",
  "personRole": "Geschäftsführer, Blaschke IT",
  "formTitle": "Rückruf anfordern",
  "nameLabel": "Vor- und Nachname",
  "kanzleiLabel": "Kanzlei",
  "phoneFieldLabel": "Telefonnummer",
  "emailFieldLabel": "Geschäftliche E-Mail",
  "messageLabel": "Worum geht es? (optional)",
  "submitLabel": "Rückruf anfordern",
  "submittingLabel": "Wird gesendet",
  "consentText": "Ich bin mit der Verarbeitung meiner Angaben zur Kontaktaufnahme einverstanden.",
  "successTitle": "Vielen Dank, wir melden uns.",
  "successBody": "Ihre Anfrage ist bei uns eingegangen. Wir rufen werktags innerhalb von 24 Stunden unter der angegebenen Nummer zurück.",
  "requiredMessage": "Bitte ausfüllen",
  "emailInvalidMessage": "Bitte prüfen Sie die E-Mail-Adresse",
  "consentMessage": "Bitte bestätigen Sie die Einwilligung",
  "errorMessage": "Das hat leider nicht geklappt. Bitte versuchen Sie es erneut."
};

export const faq = {
  "kicker": "Bevor Sie starten",
  "headStart": "Die Fragen, die",
  "headAccent": "vor dem Check",
  "headEnd": "kommen",
  "ctaLabel": "Risikocheck starten",
  "ctaHref": "#check",
  "ctaNote": "8 Fragen, rund 2 Minuten. Kostenlos und unverbindlich.",
  "contactTitle": "Ihre Frage ist nicht dabei?",
  "contactBody": "Rufen Sie an oder fordern Sie einen Rückruf an. Wir klären Ihre Frage am Telefon.",
  "contactLinkLabel": "Rückruf anfordern",
  "contactLinkHref": "#rueckruf",
  "faqs": [
    {
      "question": "Muss ich technische Details kennen, um den Check auszufüllen?",
      "answer": "Nein. Alle acht Fragen beziehen sich auf organisatorische Dinge, die Sie als Inhaberin oder Inhaber beantworten können. Wenn Sie bei einer Frage nicht sicher sind, ist das eine gültige Antwort und meist die aufschlussreichste."
    },
    {
      "question": "Gebe ich damit Informationen über meine Sicherheitslücken preis?",
      "answer": "Wir fragen keine Systemnamen, keine IP-Adressen, keine Softwareversionen und keine Zugangsdaten ab. Die Fragen betreffen ausschließlich Abläufe in Ihrer Kanzlei. Aus den Antworten lässt sich kein Angriffspunkt ableiten."
    },
    {
      "question": "Was kostet der Check?",
      "answer": "Nichts. Sie sehen Ihre Einstufung und die wichtigsten Befunde direkt im Anschluss auf dem Bildschirm. Wenn Sie die Punkte danach mit uns besprechen möchten, sagen Sie uns das. Von uns aus kommt kein Verkaufsanruf."
    },
    {
      "question": "Wir haben bereits einen IT-Dienstleister. Ist der Check dann sinnlos?",
      "answer": "Im Gegenteil. Die Auswertung ist so formuliert, dass Sie die Punkte Ihrem bestehenden Dienstleister vorlegen können. Beantwortet er sie sauber, haben Sie Gewissheit und brauchen uns nicht. Genau das ist der Zweck."
    },
    {
      "question": "Gilt der Check auch für Steuerberatungen?",
      "answer": "Ja. Rechtsanwaltskanzleien und Steuerberatungen haben bei der IT dieselben Themen: Mandantendaten auf einem lokalen Server, Verschwiegenheitspflicht, Fristen und ein Ausfall, der sofort das ganze Büro trifft. Alle acht Fragen passen für beide."
    },
    {
      "question": "Kennen Sie DATEV und gängige Kanzleisoftware?",
      "answer": "Ja. DATEV-Umgebungen und Terminalserver-Installationen für Kanzleisoftware gehören zu unseren Standardprojekten. Bei der Migration ins Rechenzentrum ziehen wir diese Umgebungen mit um, damit Ihre Anwendungen danach schneller laufen als vorher und nicht langsamer."
    },
    {
      "question": "Sind wir mit unserer Kanzleigröße zu klein?",
      "answer": "Der Check passt für Kanzleien ab etwa fünf Arbeitsplätzen. Bei ein bis vier Personen bekommen Sie zwar eine ehrliche Auswertung, ein Wechsel des Dienstleisters lohnt sich in dieser Größe aber selten. Das sagen wir Ihnen dann auch."
    },
    {
      "question": "Sind Sie nur regional tätig?",
      "answer": "Nein. Die Betreuung läuft über unsere Rechenzentren in Nürnberg und Düsseldorf und funktioniert deutschlandweit. Vor-Ort-Termine sind im Raum Haan und Umgebung möglich, für die laufende Betreuung aber nicht nötig."
    },
    {
      "question": "Wie schnell bekomme ich mein Ergebnis?",
      "answer": "Sofort. Direkt nach der letzten Frage sehen Sie Ihre Einstufung und die Punkte, die bei Ihnen auffällig sind. Wenn Sie möchten, gehen wir die Befunde anschließend telefonisch mit Ihnen durch und ordnen ein, was davon für Ihre Kanzlei wirklich relevant ist."
    },
    {
      "question": "Was passiert mit meinen Daten?",
      "answer": "Ihre Angaben werden ausschließlich zur Erstellung der Auswertung und für die Kontaktaufnahme verwendet. Keine Weitergabe an Dritte, kein Newsletter ohne Ihre Zustimmung, Löschung auf Zuruf."
    }
  ],
  "bgColor": "#ffffff",
  "accentColor": "var(--color-kit-key1)"
};

export const abschluss = {
  "kicker": "Der günstigste Zeitpunkt",
  "headStart": "Die meisten Kanzleien prüfen ihre IT zum ersten Mal",
  "headAccent": "an dem Tag, an dem nichts mehr geht.",
  "subline": "Acht Fragen kosten Sie zwei Minuten. Ein Serverausfall kostet Ihre Kanzlei mehrere Arbeitstage – und im schlechtesten Fall Fristen.",
  "ctaLabel": "Risikocheck starten",
  "ctaHref": "#check",
  "ctaNote": "8 Fragen, rund 2 Minuten. Ergebnis direkt im Anschluss, kein Verkaufsgespräch.",
  "secondaryLabel": "Lieber zuerst sprechen? Rückruf anfordern",
  "secondaryHref": "#rueckruf",
  "footerBrand": "Blaschke IT",
  "footerTagline": "IT-Systemhaus mit eigenen Rechenzentren in Nürnberg und Düsseldorf.",
  "footerContactHead": "Kontakt",
  "footerLegalHead": "Rechtliches",
  "footerMailLabel": "info@blaschke-it.net",
  "footerMailHref": "mailto:info@blaschke-it.net",
  "copyright": "Blaschke IT. Alle Rechte vorbehalten.",
  "legalLinks": [
    {
      "label": "Impressum",
      "href": "https://blaschke.cloud/impressum/"
    },
    {
      "label": "Datenschutz",
      "href": "https://blaschke.cloud/datenschutz/"
    }
  ],
  "bgColor": "#0f1618",
  "accentColor": "var(--color-kit-key1)"
};
