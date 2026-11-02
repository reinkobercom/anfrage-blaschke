/**
 * Zentrale Kontakt- und Unternehmensdaten.
 * Änderungen hier wirken auf allen Seiten (Footer, Dankeseiten, Fehlermeldungen der Formulare).
 */
export const site = {
  name: 'Blaschke IT',
  domain: 'https://anfrage.blaschke.cloud',
  mainWebsite: 'https://blaschke.cloud/',

  phone: {
    display: '0202 319070 33',
    href: 'tel:+4920231907033',
  },
  emails: {
    /** Footer der React-Landingpages (Kanzlei, Handwerk) */
    info: 'info@blaschke-it.net',
    /** Kontakt auf den Dankeseiten */
    kontakt: 'kontakt-bit01@blaschke.cloud',
  },

  legal: {
    impressum: 'https://blaschke.cloud/impressum/',
    datenschutz: 'https://blaschke.cloud/datenschutz/',
  },

  person: {
    name: 'Lukas Blaschke',
    role: 'Geschäftsführer',
  },

  address: {
    locality: 'Haan',
    region: 'Nordrhein-Westfalen',
    country: 'DE',
  },

  /** Öffnungszeiten wurden auf der alten Seite nicht angegeben. */
  openingHours: [] as string[],

  social: {} as Record<string, string>,

  tracking: {
    metaPixelId: '1621478833313106',
    hotjarId: 6716845,
  },
} as const;
