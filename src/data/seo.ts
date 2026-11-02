/**
 * Seiten, die NICHT indexiert werden sollen (robots noindex + nicht in der Sitemap).
 * Entscheidung: alle Dankeseiten. Alle Landingpages bleiben indexierbar.
 */
export const noindexPaths: string[] = [
  '/danke',
  '/danke-securitycheck',
  '/danke-pdf',
  '/danke-notfallratgeber',
  '/danke-service',
  '/handwerk-notfallplan-danke',
  '/handwerk-rueckruf-danke',
];

export const isNoindex = (pathname: string) =>
  noindexPaths.includes(pathname.replace(/\/$/, '') || '/');
