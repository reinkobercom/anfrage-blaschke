/**
 * Trustindex-Widgets. Code tauschen: nur die `loaderId` (Teil nach "loader.js?") ersetzen.
 * `enabled: false` blendet das Widget überall aus.
 */
export type TrustindexWidget = {
  loaderId: string;
  enabled: boolean;
  /** Mindesthöhe gegen Layout-Springen, solange das Script lädt */
  minHeight: number;
  note: string;
};

export const trustindex = {
  /** Großes Bewertungs-Widget (eigene Sektion „Trustindex Bewertungen“) */
  reviews: {
    loaderId: '0e05693740fe851ef6566782588',
    enabled: true,
    minHeight: 108,
    note: 'Sektion auf /kanzlei-it-check, /handwerk-notfallplan, /service, /sicherheitsleitfaden, /krisenratgeber',
  },
  /** Kleines Badge (unter Formular-Cards im Hero) */
  badge: {
    loaderId: 'ee550d4740ed85185d26f7218e1',
    enabled: true,
    minHeight: 44,
    note: 'Hero von /kanzlei-it-check und /handwerk-notfallplan, Sicherheitsleitfaden/Krisenratgeber',
  },
} satisfies Record<string, TrustindexWidget>;

export type TrustindexKey = keyof typeof trustindex;
