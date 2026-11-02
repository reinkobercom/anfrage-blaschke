/**
 * Inhalte /handwerk-notfallplan – 1:1 aus den Onepage-Props (package.json-Defaults = Live-Werte).
 * Bilder werden in der Seite über src/data/images.ts eingebunden.
 */

export const hero = {
  "logoAlt": "Blaschke IT",
  "kicker": "Für Inhaber von Handwerksbetrieben",
  "headStart": "Fällt Ihr Server aus, steht die",
  "headAccent": "Baustelle",
  "headEnd": "still.",
  "subline": "Ihr Betrieb läuft längst digital – Aufträge, Pläne, Zeiten, Rechnungen. Der kostenlose Notfallplan zeigt Ihnen, was passiert, wenn das ausfällt.",
  "bullets": [
    {
      "text": "Was ein Ausfall Sie wirklich kostet"
    },
    {
      "text": "Ihr Backup in drei Schritten selbst prüfen"
    },
    {
      "text": "Was ein Umzug ins Rechenzentrum kostet – mit echten Preisen"
    }
  ],
  "personName": "Lukas Blaschke",
  "personRole": "Geschäftsführer, Blaschke IT",
  "panelEyebrow": "Notfallplan anfordern",
  "coverCaption": "Wenn die Baustelle stillsteht – der IT-Notfallplan für Handwerksbetriebe",
  "reassurance": "Eine Frage, dann Ihre Daten. Download sofort.",
  "progressLabel": "Schritt",
  "progressOf": "von",
  "backLabel": "Zurück",
  "secondaryOptinLabel": "Lieber direkt sprechen? Rückruf anfordern",
  "secondaryOptinHref": "#rueckruf",
  "questions": [
    {
      "question": "Wo liegt Ihre Auftrags- und Angebotssoftware heute?",
      "o1": "Auf einem Server bei uns im Betrieb",
      "o2": "Bei unserem IT-Dienstleister im Rechenzentrum",
      "o3": "Komplett in der Cloud",
      "o4": "Das weiß ich nicht genau"
    }
  ],
  "contactEyebrow": "Letzter Schritt",
  "contactTitle": "Wohin dürfen wir den Notfallplan schicken?",
  "contactNote": "Keine technischen Angaben nötig.",
  "teaserText": "Im PDF stehen echte Zahlen: Kosten, Dauer, Ablauf.",
  "consentText": "Ich bin damit einverstanden, dass Blaschke IT meine Angaben verarbeitet und mich zum Notfallplan kontaktiert.",
  "privacyNote": "Ihre Daten gehen nicht an Dritte.",
  "submitLabel": "Notfallplan anfordern",
  "submittingLabel": "Wird vorbereitet",
  "errorMessage": "Das hat leider nicht geklappt. Bitte versuchen Sie es erneut.",
  "firstNameLabel": "Vorname",
  "lastNameLabel": "Nachname",
  "betriebLabel": "Betrieb",
  "emailLabel": "Geschäftliche E-Mail",
  "phoneLabelField": "Telefon",
  "requiredMessage": "Bitte ausfüllen",
  "emailInvalidMessage": "Bitte prüfen Sie die E-Mail-Adresse",
  "freemailMessage": "Bitte verwenden Sie Ihre betriebliche Adresse",
  "consentMessage": "Bitte bestätigen Sie die Einwilligung",
  "successEyebrow": "Fertig",
  "successTitle": "Ihr Notfallplan steht bereit.",
  "successBody": "Laden Sie das PDF direkt hier herunter. Wenn Sie möchten, gehen wir die Punkte danach am Telefon durch.",
  "pdfLabel": "Notfallplan herunterladen",
  "pdfHref": "/downloads/blaschke-it-notfallplan-handwerk.pdf",
  "successCtaLabel": "Fragen dazu? Rückruf anfordern",
  "successCtaHref": "#rueckruf",
  "bgColor": "#fbfbfa",
  "panelAccentColor": "var(--color-kit-key1)",
  "redirectUrl": "/handwerk-notfallplan-danke",
  "formId": "9bfe25e8-3d9d-4905-b8d3-22fd0549a18d",
  "eventStartName": "NotfallplanGestartet",
  "eventLeadName": "Lead",
  "eventLeadCustomName": "LeadHandwerk",
  "blockFreemail": true
};

export const digital = {
  "anchorId": "digital",
  "bgColor": "#0f1618",
  "accentColor": "var(--color-kit-key1)",
  "kicker": "Warum das jetzt zählt",
  "headStart": "Ihr Betrieb läuft längst",
  "headAccent": "digital.",
  "headEnd": "Auch wenn er nach Handwerk aussieht.",
  "paragraph": "Der Ordner mit den Aufträgen ist verschwunden. Heute steckt alles in der Software.",
  "items": [
    {
      "icon": "document",
      "label": "Aufmaß und Pläne auf dem Tablet"
    },
    {
      "icon": "clock",
      "label": "Zeiten per App von der Baustelle"
    },
    {
      "icon": "calendar",
      "label": "Disposition und Termine im System"
    },
    {
      "icon": "mail",
      "label": "Rechnungen digital, ab 2027 Pflicht"
    }
  ],
  "turnLabel": "Die Frage, die niemand stellt",
  "turnLine": "Und was ist, wenn das alles morgen nicht mehr da ist?",
  "turnBody": "Je digitaler Ihr Betrieb arbeitet, desto mehr hängt an einem einzigen Gerät. Genau dafür sind wir da: dass Ihre Systeme sauber laufen, von überall erreichbar sind und ein Backup haben, das im Ernstfall auch wirklich funktioniert."
};

export const situation = {
  "anchorId": "situation",
  "bgColor": "#f3f4f3",
  "alertColor": "#d13030",
  "accentColor": "var(--color-kit-key1)",
  "kicker": "Der Ernstfall",
  "headStart": "Wenn morgen früh Ihre IT nicht mehr geht,",
  "headAccent": "passiert das hier.",
  "paragraph": "Nicht irgendwann. Am nächsten Morgen um sieben.",
  "ctaLabel": "Notfallplan herunterladen",
  "ctaHref": "#optin",
  "ctaNote": "Kostenlos. Eine Frage, dann Ihre Daten – Download sofort.",
  "tiles": [
    {
      "title": "Die Monteure stehen auf dem Hof",
      "body": "Keiner weiß, wer wohin fährt."
    },
    {
      "title": "Kein Zugriff auf Pläne und Aufmaße",
      "body": "Die Baustelle wartet."
    },
    {
      "title": "Angebote gehen nicht raus",
      "body": "Aufträge verschieben sich um Tage."
    },
    {
      "title": "Stundenzettel fehlen",
      "body": "Was nicht erfasst ist, wird nicht bezahlt."
    },
    {
      "title": "Baustellenfotos sind weg",
      "body": "Ihr Nachweis bei Mängeln auch."
    },
    {
      "title": "Rechnungen bleiben liegen",
      "body": "Kein Geld auf dem Konto."
    },
    {
      "title": "Kunden erreichen niemanden",
      "body": "Termine platzen, Vertrauen geht."
    },
    {
      "title": "Und keiner sagt Ihnen, wie lange",
      "body": "Keine Zusage, kein Ende in Sicht."
    }
  ]
};

export const kapitel = {
  "kicker": "Der IT-Notfallplan für Handwerksbetriebe",
  "headStart": "Sechs Kapitel. Drei davon können Sie",
  "headAccent": "ohne uns umsetzen.",
  "paragraph": "Keine Technik, keine Fachbegriffe. Was auf Ihrem Server liegt, was ein Ausfall kostet, welche Fristen kommen – und am Ende die echten Preise.",
  "boxTitle": "Keine Verkaufsunterlage",
  "boxBody": "Kapitel 3 können Sie morgen selbst durchgehen. Besteht Ihr Backup den Test, haben Sie Gewissheit – und uns nicht gebraucht.",
  "ctaLabel": "Notfallplan herunterladen",
  "ctaHref": "#optin",
  "ctaNote": "Kostenlos, Download sofort.",
  "points": [
    {
      "title": "Wo Ihre Daten heute liegen",
      "body": "Serverschrank im Lager, Sicherung auf einer Platte. Die ehrliche Bestandsaufnahme."
    },
    {
      "title": "Was auf dem Server steckt",
      "body": "Aufmaße, Fotos, Stundenzettel, Protokolle – und was jeder Verlust kostet."
    },
    {
      "title": "Backup selbst prüfen",
      "body": "Drei Schritte, ohne Fachbegriffe. Machen Sie es morgen."
    },
    {
      "title": "Fristen, die ohnehin kommen",
      "body": "E-Rechnung ab Januar 2027. Acht Jahre Aufbewahrung."
    },
    {
      "title": "Was ein Umzug kostet",
      "body": "Echte Zahlen. Ablauf in Wochen. Was am Umzugswochenende passiert."
    },
    {
      "title": "Was schiefgehen kann",
      "body": "Woran Sie einen schlechten Umzug erkennen – vorher."
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
  "kicker": "Wer hinter dem Notfallplan steht",
  "headStart": "Ein IT-Systemhaus mit",
  "headAccent": "eigenen Rechenzentren",
  "headEnd": "– kein Wiederverkäufer.",
  "paragraph": "Wir betreiben eigene Server an zwei Standorten in Deutschland und betreuen sie selbst. Im Störfall sprechen Sie mit jemandem, der Ihre Umgebung kennt – nicht mit einer Warteschleife. Deutschlandweit.",
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
      "body": "Eine Person mit Namen, die Ihre Anlage kennt. Keine Ticketnummer."
    },
    {
      "icon": "server",
      "title": "Alles aus einer Hand",
      "body": "Server, Backup und Betreuung liegen bei uns. Wir können niemanden weiterverweisen."
    },
    {
      "icon": "refresh",
      "title": "Umzug zum Festpreis",
      "body": "Unser häufigstes Projekt – inklusive Ihrer Handwerkersoftware, Backup und Wartung."
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
  "subline": "Kein anonymes Callcenter. Echte Menschen, die sich darauf freuen, Sie und Ihren Betrieb persönlich kennenzulernen."
};

export const rueckruf = {
  "anchorId": "rueckruf",
  "redirectUrl": "/handwerk-rueckruf-danke",
  "formId": "eb338088-c2e9-4dfc-8cb4-716d9bd70a95",
  "bgColor": "#0f1618",
  "accentColor": "var(--color-kit-key1)",
  "kicker": "Ohne Download direkt sprechen",
  "headStart": "Sie wollen nur wissen, was das bei",
  "headAccent": "Ihnen kostet",
  "headEnd": "?",
  "paragraph": "Dann brauchen Sie das PDF nicht. Nummer hinterlassen, 20 Minuten telefonieren, Zahl bekommen.",
  "points": [
    {
      "text": "Rückruf werktags innerhalb von 24 Stunden"
    },
    {
      "text": "20 Minuten, am Ende steht eine konkrete Zahl"
    },
    {
      "text": "Lohnt es sich bei Ihnen nicht, sagen wir das"
    }
  ],
  "personName": "Lukas Blaschke",
  "personRole": "Geschäftsführer, Blaschke IT",
  "formTitle": "Rückruf anfordern",
  "nameLabel": "Vor- und Nachname",
  "betriebLabel": "Betrieb",
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
  "kicker": "Bevor Sie herunterladen",
  "headStart": "Die Fragen, die",
  "headAccent": "vor dem Download",
  "headEnd": "kommen",
  "ctaLabel": "Notfallplan herunterladen",
  "ctaHref": "#optin",
  "ctaNote": "Kostenlos, Download sofort.",
  "contactTitle": "Ihre Frage ist nicht dabei?",
  "contactBody": "Fordern Sie einen Rückruf an. Wir klären Ihre Frage am Telefon.",
  "contactLinkLabel": "Rückruf anfordern",
  "contactLinkHref": "#rueckruf",
  "faqs": [
    {
      "question": "Was kostet der Notfallplan?",
      "answer": "Nichts. Sie laden ihn direkt nach dem Absenden herunter. Von uns aus kommt kein Verkaufsanruf."
    },
    {
      "question": "Stehen im PDF wirklich Preise?",
      "answer": "Ja. Kapitel 5 nennt die Spanne für einen Umzug und die monatliche Betreuung, dazu den Ablauf in Wochen. Die Größenordnung sehen Sie sofort."
    },
    {
      "question": "Wir haben schon einen IT-Dienstleister. Bringt mir das etwas?",
      "answer": "Ja. Kapitel 3 und 6 können Sie ihm vorlegen. Beantwortet er die Punkte sauber, haben Sie Gewissheit und brauchen uns nicht. Genau dafür ist es gedacht."
    },
    {
      "question": "Ist das nur für Betriebe mit eigenem Server?",
      "answer": "Der größte Nutzen entsteht dort. Liegt bei Ihnen alles in der Cloud, sind vor allem die Kapitel zu Backup und Aufbewahrung wichtig."
    },
    {
      "question": "Kennen Sie Streit, pds oder TopKontor?",
      "answer": "Terminalserver für Branchensoftware sind Standardprojekte bei uns. Beim Umzug ziehen wir die Umgebung mit – damit Ihre Software danach schneller läuft, nicht langsamer."
    },
    {
      "question": "Was hat die E-Rechnung mit meinem Server zu tun?",
      "answer": "Die Rechnungssoftware betreuen wir nicht. Aber E-Rechnungen müssen acht Jahre im Original aufbewahrt werden. Wo diese Daten liegen und wer sie sichert – das ist unser Thema."
    },
    {
      "question": "Wann steht mein Betrieb still?",
      "answer": "Die Vorbereitung läuft nebenher, der Wechsel findet am Wochenende statt. Montagfrüh arbeiten Ihre Leute wie vorher, nur schneller."
    },
    {
      "question": "Sind Sie nur regional tätig?",
      "answer": "Nein. Die Betreuung läuft über unsere Rechenzentren in Nürnberg und Düsseldorf, deutschlandweit. Vor Ort kommen wir im Raum Haan."
    },
    {
      "question": "Was passiert mit meinen Daten?",
      "answer": "Wir nutzen sie für den Versand und die Kontaktaufnahme. Keine Weitergabe, kein Newsletter ohne Ihr Ja, Löschung auf Zuruf."
    }
  ],
  "bgColor": "#ffffff",
  "accentColor": "var(--color-kit-key1)"
};

export const abschluss = {
  "kicker": "Der günstigste Zeitpunkt",
  "headStart": "Die meisten denken über ihren Server nach,",
  "headAccent": "wenn er schon steht.",
  "subline": "Das PDF kostet Sie eine halbe Stunde. Ein Ausfall kostet Sie Monteure, die auf dem Hof stehen.",
  "ctaLabel": "Notfallplan herunterladen",
  "ctaHref": "#optin",
  "ctaNote": "Kostenlos, Download sofort, kein Verkaufsgespräch.",
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
