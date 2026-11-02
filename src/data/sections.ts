/**
 * Sektionen ein-/ausschalten: je Seite eine Datei in src/data/sections/<seite>.ts
 * (true = sichtbar, false = ausgeschaltet). Dieses Modul fasst alle Dateien zusammen.
 *
 *   import { isOn } from '../data/sections';
 *   {isOn('support', 'konditionen') && <Konditionen />}
 */
const modules = import.meta.glob<{ default: Record<string, boolean> }>('./sections/*.ts', { eager: true });

export const sections: Record<string, Record<string, boolean>> = Object.fromEntries(
  Object.entries(modules).map(([path, m]) => [path.replace(/^.*\/(.+)\.ts$/, '$1'), m.default]),
);

export function isOn(page: string, section: string): boolean {
  const v = sections[page]?.[section];
  if (v === undefined) throw new Error(`Sektion "${section}" fehlt in src/data/sections/${page}.ts`);
  return v;
}
