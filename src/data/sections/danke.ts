/**
 * Sektionen der Seite /danke (Danke-Seite für das Angebot „1 Std. IT-Support“;
 * Ziel der Formulare von /support, /full-it-wartung und /it-support).
 * true = sichtbar, false = ausgeschaltet. Reihenfolge wie auf der Seite.
 */
export default {
  /** Kopfzeile: Logo + „Zurück zur Webseite“ (→ blaschke.cloud) */
  header: true,
  /** Danke-Intro (grau): Häkchen, „Anfrage erhalten“, H1, Lukas Blaschke */
  intro: true,
  /** „Deine nächsten Schritte“: Timeline mit 3 Schritten (Rückruf, Vorab-Gespräch, Servicestunde) */
  schritte: true,
  /** „Wie es weitergehen kann, entscheidest Du“: Szenario A / B mit Preis-Label */
  szenarien: true,
  /** Dunkles Band mit Rückruf-Hinweis */
  hinweis: true,
  /** „Lieber direkt?“: Karten Telefon / E-Mail */
  kontakt: true,
  /** Globale Fußzeile */
  footer: true,
};
