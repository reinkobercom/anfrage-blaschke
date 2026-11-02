/**
 * Zeitgesteuerte Hinweise/Termine. Auf der alten Seite gab es keine – die Struktur ist für später vorbereitet.
 * Ein Eintrag wird nur angezeigt, wenn visible === true und das heutige Datum zwischen visibleFrom und visibleUntil liegt.
 */
export type Announcement = {
  id: string;
  text: string;
  href?: string;
  visible: boolean;
  /** ISO-Datum, z. B. '2026-12-01' */
  visibleFrom?: string;
  visibleUntil?: string;
  /** Pfade, auf denen der Hinweis erscheint; leer = alle */
  pages?: string[];
};

export const announcements: Announcement[] = [];

export const activeAnnouncements = (pathname: string, now = new Date()) =>
  announcements.filter((a) => {
    if (!a.visible) return false;
    if (a.visibleFrom && now < new Date(a.visibleFrom)) return false;
    if (a.visibleUntil && now > new Date(a.visibleUntil + 'T23:59:59')) return false;
    if (a.pages?.length && !a.pages.includes(pathname)) return false;
    return true;
  });
