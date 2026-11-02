/**
 * Sektionen der Seite /security-check (Security-Check). true = sichtbar, false = ausgeschaltet.
 * Reihenfolge wie auf der Seite.
 */
export default {
  /** Kopfzeile Desktop/Tablet (≥ 768 px): Logo + „SSL-verschlüsselt · DSGVO-konform“ → Formular */
  header: true,
  /** Mobile Kopfzeile (≤ 767 px): Logo + „🔒 SSL-verschlüsselt · DSGVO-konform“ */
  logoSslMobil: true,
  /** Orange Leiste „Kostenloser Security-Check im Wert von 500 €“ */
  wertLeiste: true,
  /** Hero mit Formular „Jetzt Security-Check sichern“ (Anker #formular) */
  heroFormular: true,
  /** Lukas Blaschke + Zitat, 3 Zahlen-Karten */
  zitatZahlen: true,
  /** Problempunkte + orange Box „Was du bekommst“ + Gesamtwert 500 € */
  warumWasDuBekommst: true,
  /** Kundenstimme „Was Kunden sagen“ */
  referenzen: true,
  /** „Warum kostenlos? – Das ist kein Marketing-Trick.“ */
  warumKostenlos: true,
  /** Orange CTA-Box „Was hast Du zu verlieren?“ */
  ctaVerlieren: true,
  /** Globale Fußzeile (Logo, Copyright, Impressum/Datenschutz) */
  fusszeile: true,
} satisfies Record<string, boolean>;
