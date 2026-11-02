/**
 * Inhalte der Gruppe „ratgeber“: Lead-Magnet-Seiten (/sicherheitsleitfaden, /krisenratgeber) und deren
 * Dankeseiten (/danke-pdf, /danke-notfallratgeber). Beide Paare sind auf Onepage gleich aufgebaut –
 * Texte stehen hier, das Layout in den Komponenten dieses Ordners.
 *
 * Texte wörtlich von der alten Seite; korrigiert wurden nur Tippfehler und fehlende Kommas.
 * Hervorhebungen (orange Unterstreichung) sind mit [[…]] markiert.
 */
import type { ImageKey } from '../../data/images';

export type OptinContent = {
  seo: { title: string; description: string };
  /** Pill-Label über der Hauptzeile */
  label: string;
  /** Hauptzeile (H1), [[…]] = Unterstreichung */
  title: string;
  /** Unterstreichungen der Hauptzeile auch mobil zeigen (live: Sicherheitsleitfaden ja, Krisenratgeber nein) */
  titleHighlightMobile: boolean;
  /** Absatz unter der Hauptzeile (HTML erlaubt: <b>) */
  text: string;
  /** Zweites Label unter dem Absatz (nur Krisenratgeber) */
  label2?: string;
  form: {
    id: string;
    redirect: string;
    /** Überschrift in der Formularbox, [[…]] = Unterstreichung */
    title: string;
    titleHighlightMobile: boolean;
    /** Schriftgröße der Formular-Überschrift mobil (live unterschiedlich: 32 bzw. 24 px) */
    titleSizeMobile: 32 | 24;
    phonePlaceholder: string;
    /** Hinweis zwischen Telefon und Button (nur Krisenratgeber) */
    note?: string;
    button: string;
    buttonSubtitle: string;
    /** Abstand unter dem Telefonfeld (live 20 bzw. 13 px) */
    phoneGap: number;
    /** Abstand unter dem Telefonfeld mobil (live Krisenratgeber 20 px) */
    phoneGapMobile?: number;
    /** Abstand unter „✓ Sofort erhalten …“ Desktop (live 30 bzw. 7 px) */
    afterGapDesktop: number;
  };
  box: {
    /** Desktop-Hintergrund der Formularbox */
    desktopBg: 'image' | 'mesh';
    /** Bild links in der Box (Desktop); fehlt → linke Spalte leer (Hintergrundbild sichtbar) */
    desktopImage?: ImageKey;
    /** Bild oben in der Box (Mobil, randlos) */
    mobileImage: ImageKey;
  };
  product: {
    video: 'sicherheitsleitfaden-cover-animiert' | 'krisenratgeber-cover-animiert';
    videoLabel: string;
    title: string;
    items: string[];
    note: string;
  };
  cta: {
    text: string;
    subtitle?: string;
    /** Chevron-Icon links (nur Krisenratgeber) */
    icon?: boolean;
  };
};

export const optin: Record<'sicherheitsleitfaden' | 'krisenratgeber', OptinContent> = {
  sicherheitsleitfaden: {
    seo: {
      title: 'IT-Sicherheitsleitfaden: 10 Lücken & Lösungen für KMUs',
      description:
        'Entdecke die 10 größten IT-Sicherheitslücken in KMUs und wie man diese erkennt. Jetzt kostenlosen IT-Sicherheitsleitfaden mit Checklisten sichern!',
    },
    label: 'Kostenloses PDF-DOKUMENT 📄',
    title: 'Die [[10 größten IT-Sicherheitslücken]] in deutschen KMUs – und wie du sie erkennst.',
    titleHighlightMobile: true,
    text:
      'Sicherheitsbedenken, schlechter Support oder veraltete Systeme? Hol dir <b>kostenlos den kompletten IT-Sicherheitsleitfaden</b> – mit konkreten Checklisten und sofort umsetzbaren Handlungsempfehlungen für jede der 10 Lücken.',
    form: {
      id: '0bf6b2ae-d59c-4042-a225-fefd7ee1197d',
      redirect: '/danke-pdf',
      title: 'Jetzt den [[kostenlosen]] Sicherheitsleitfaden sichern:',
      titleHighlightMobile: true,
      titleSizeMobile: 32,
      phonePlaceholder: 'Ihre Telefonnummer',
      button: 'IT-Sicherheitsleitfaden jetzt downloaden',
      buttonSubtitle: 'Direkt als PDF verfügbar',
      phoneGap: 20,
      afterGapDesktop: 30,
    },
    box: {
      desktopBg: 'image',
      mobileImage: 'sicherheitsleitfaden-cover-dunkel-2',
    },
    product: {
      video: 'sicherheitsleitfaden-cover-animiert',
      videoLabel: 'Animierte Vorschau des IT-Sicherheitsleitfadens „Die 10 größten IT-Sicherheitslücken in deutschen KMUs“',
      title: 'Das erwartet dich im [[kostenlosen IT-Sicherheitsleitfaden:]]',
      items: [
        'Backup-Lücken · Läuft es wirklich und liegt es auf dem richtigen System?',
        'Ex-Mitarbeiter-Zugänge · Die unsichtbare Gefahr im System',
        'US-Server & Patriot Act · Deine Daten und amerikanisches Recht',
        'Veraltete Software · Wie Angreifer bekannte Lücken ausnutzen',
        'Passwörter & Zugänge · Das Einfallstor Nr. 1 in deutschen KMUs',
        '+ 5 weitere kritische Lücken mit konkreten Checklisten',
      ],
      note: 'Inkl. sofort umsetzbarer Checkliste für jede Lücke – ohne IT-Vorkenntnisse anwendbar.',
    },
    cta: { text: 'Leitfaden jetzt kostenlos sichern →' },
  },

  krisenratgeber: {
    seo: {
      title: 'IT-Sicherheit im KMU: Kostenloser Krisenratgeber & Checkliste',
      description:
        'Sichern Sie Ihr KMU gegen Hackerangriffe ab. Holen Sie sich den kostenlosen Krisenratgeber mit Checkliste und 10 kritischen Fragen für Geschäftsführer als PDF.',
    },
    label: 'KOSTENLOSER KRISENRATGEBER FÜR GESCHÄFTSFÜHRER 📄',
    title: 'Was passiert mit deinem Betrieb, wenn ihr [[morgen gehackt]] werdet?',
    titleHighlightMobile: false,
    text:
      'Kannst du diese 10 Fragen beantworten? Die meisten Geschäftsführer können es nicht, bis es zu spät ist. Hol dir jetzt den kostenlosen Ratgeber und finde heraus, ob dein Betrieb vorbereitet ist.',
    label2: '⏰ 10 Fragen, 8 Minuten Lesezeit',
    form: {
      id: '0XTkDEYR0AZ5CH-mjJLKf',
      redirect: '/danke-notfallratgeber',
      title: 'Jetzt den [[kostenlosen Krisenratgeber]] sichern:',
      titleHighlightMobile: false,
      titleSizeMobile: 24,
      phonePlaceholder: 'Deine Telefonnummer',
      note: '🔒 Kein Spam, keine Weitergabe, kein Callcenter, kein Newsletter.',
      button: 'Krisenratgeber jetzt kostenlos herunterladen',
      buttonSubtitle: 'Direkt als PDF verfügbar',
      phoneGap: 13,
      phoneGapMobile: 20,
      afterGapDesktop: 7,
    },
    box: {
      desktopBg: 'mesh',
      desktopImage: 'krisenratgeber-cover',
      mobileImage: 'krisenratgeber-cover',
    },
    product: {
      video: 'krisenratgeber-cover-animiert',
      videoLabel: 'Animierte Vorschau des Krisenratgebers „Was passiert mit deinem Betrieb, wenn ihr morgen gehackt werdet?“',
      title: 'Das erwartet dich im [[kostenlosen]] Krisenratgeber[[:]]',
      items: [
        'Haftung · Wofür haftest du persönlich, wenn Kundendaten im Darknet landen?',
        'Betriebsstillstand · Wie lange steht dein Betrieb still, wenn alle Daten verschlüsselt sind?',
        'Backup · Kannst du deine Daten wiederherstellen, wenn dein Backup mit verschlüsselt ist?',
        'Lösegeld · Was machst du, wenn Hacker Lösegeld fordern – und was passiert, wenn du zahlst?',
        'Kosten · Was kostet ein Hackerangriff deinen Betrieb wirklich?',
        '+5 weitere kritische Fragen mit konkreten Checklisten',
      ],
      note: 'Keine IT-Kenntnisse nötig – geschrieben für Geschäftsführer, nicht für IT-Experten.',
    },
    cta: { text: 'Krisenratgeber jetzt sichern', subtitle: 'Jetzt kostenlos sichern', icon: true },
  },
};

export type DankeContent = {
  seo: { title: string; description: string };
  /** H1 im Hero */
  title: string;
  /** Hero-Text (HTML erlaubt: <br>) */
  text: string;
  download: {
    video: 'sicherheitsleitfaden-cover-animiert' | 'krisenratgeber-cover-animiert';
    videoLabel: string;
    title: string;
    href: string;
  };
};

/** Gemeinsame Texte beider Dankeseiten (live identisch) */
export const dankeShared = {
  label: 'Dein Download wartet',
  meta: 'PDF · 13 Seiten · Kostenlos',
  button: 'Jetzt herunterladen',
  hint: 'PDF öffnet sich direkt · Kein Account nötig',
  timelineTitle: 'Was jetzt passiert',
  timeline: [
    {
      label: 'Sofort',
      title: 'PDF herunterladen & lesen',
      text: '20 Minuten. 10 Lücken. Für jede gibt es eine konkrete Checkliste, was du diese Woche tun kannst, um die IT-Sicherheit in deinem Unternehmen zu optimieren.',
    },
    {
      label: 'Diese Woche',
      title: 'Checklisten abhaken',
      text: 'Du brauchst keinen IT-Experten. Jede Checkliste ist so geschrieben, dass du sie selbst durchgehen kannst.',
    },
    {
      label: 'Optional · Kostenlos',
      title: 'Unsicher? Wir prüfen es für dich.',
      text: 'Wenn du nach dem Lesen wissen willst, wie es bei euch wirklich aussieht – nutze unseren kostenlosen Security-Check. Kein Vertrag, kein Druck.',
    },
  ],
  personPlace: 'Blaschke IT, Haan',
  quote:
    '„Ich hoffe, der Leitfaden öffnet dir die Augen – so wie er es bei hunderten Betrieben vor dir getan hat. Lies ihn. Hak die Liste ab. Und ruf uns an, wenn du dir unsicher bist.“',
  /** Ergänzt (Entscheidung R3): Telefonnummer, wo zum Anruf aufgefordert wird */
  callLabel: 'Ruf uns direkt an:',
  ctaTitle: 'Willst du wissen, wie es bei euch wirklich aussieht?',
  ctaText:
    'Der Leitfaden zeigt dir, was möglich ist. Unser kostenloser Security-Check zeigt dir, was bei euch konkret offen ist – mit einem auf deinen Betrieb abgestimmten PDF-Report und echten Handlungsempfehlungen. Im Wert von 500 €. Für dich kostenlos.',
  ctaButton: 'Jetzt kostenlos sichern',
  ctaButtonSubtitle: 'Kein Vertrag · Keine Kosten · DSGVO-konform',
  ctaHref: '/security-check',
};

export const danke: Record<'danke-pdf' | 'danke-notfallratgeber', DankeContent> = {
  'danke-pdf': {
    seo: {
      title: 'Dein IT-Sicherheitsleitfaden ist bereit | Blaschke IT',
      description:
        'Lade dir jetzt den kostenlosen Leitfaden „Die 10 größten IT-Sicherheitslücken in deutschen KMUs“ herunter – mit konkreten Checklisten und direkt umsetzbaren Sicherheitstipps.',
    },
    title: 'Dein Leitfaden ist bereit.',
    text:
      'Klick unten auf den Button und lade dir die 10 größten IT-Sicherheitslücken sofort herunter. Mit Hilfe dieses PDFs erhältst Du direkt umsetzbare Sicherheitstipps für die IT deines Unternehmens.',
    download: {
      video: 'sicherheitsleitfaden-cover-animiert',
      videoLabel: 'Animierte Vorschau des Leitfadens „Die 10 größten IT-Sicherheitslücken in deutschen KMUs“',
      title: 'Die 10 größten IT-Sicherheits­lücken in deutschen KMUs',
      href: '/downloads/blaschke-it-sicherheitsreport.pdf',
    },
  },
  'danke-notfallratgeber': {
    seo: {
      title: 'Dein Krisenratgeber ist bereit | Blaschke IT',
      description:
        'Lade dir jetzt den kostenlosen Krisenratgeber herunter und finde heraus, ob dein Betrieb für einen Hackerangriff vorbereitet ist: 10 Fragen, ehrliche Antworten, konkrete nächste Schritte.',
    },
    title: 'Dein Krisenratgeber ist bereit.',
    text:
      'Klick unten auf den Button und finde heraus, ob dein Betrieb für einen Hackerangriff vorbereitet ist.<br />10 Fragen, ehrliche Antworten und konkrete nächste Schritte.',
    download: {
      video: 'krisenratgeber-cover-animiert',
      videoLabel: 'Animierte Vorschau des Krisenratgebers „Was passiert mit deinem Betrieb, wenn ihr morgen gehackt werdet?“',
      title: 'Was passiert mit deinem Betrieb, wenn ihr morgen gehackt werdet?',
      href: '/downloads/blaschke-it-krisenratgeber.pdf',
    },
  },
};

/** [[…]] → <span class="hl">…</span> (Text ist eigener Inhalt, kein Nutzer-Input) */
export function highlight(text: string, cls = 'hl'): string {
  return text.replace(/\[\[(.+?)\]\]/g, `<span class="${cls}">$1</span>`);
}
