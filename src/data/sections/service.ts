/**
 * Sektionen der Seite /service (Full-Service-Wartung, 3 Monate kostenlos).
 * true = sichtbar, false = ausgeschaltet. Reihenfolge wie auf der Seite.
 */
export default {
  /** Hero: dunkles Foto, H1 „3 Monate Full-Service-Wartung / Komplett auf uns.“, CTA zum Formular */
  hero: true,
  /** Pain Cards: „Das kommt dir bekannt vor?“ – drei Karten mit orangem Rand */
  painCards: true,
  /** Formular „Jetzt kostenlos starten“ (Anker #formular) */
  formular: true,
  /** Angebot (8 Leistungen) & „In 4 Schritten …“ */
  angebotSteps: true,
  /** Kennzahlen, Lukas-Karte & Kundenstimme */
  statsLukasTestimonial: true,
  /** FAQ-Akkordeon & orangener Abschluss-CTA */
  faqCta: true,
  /** Trustindex-Bewertungen „Überzeugt durch Leistung.“ */
  bewertungen: true,
  /** Team-Galerie „Willkommen bei Blaschke IT.“ mit Lightbox */
  teamGalerie: true,
  /** Globale Fußzeile (Logo, Copyright, Impressum/Datenschutz) */
  fusszeile: true,
} satisfies Record<string, boolean>;
