/**
 * Alle Bilder der Seite mit Alt-Text. Die Dateien liegen in src/assets/img/ (max. 2400 px).
 * `onepage` = ursprüngliche Media-ID auf onecdn.io (zum Nachvollziehen der Herkunft).
 * Alt-Text ändern: hier anpassen – gilt überall, wo das Bild verwendet wird
 * (außer eine Komponente setzt bewusst einen eigenen Alt-Text).
 */
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/img/*.{jpg,jpeg,png,webp}', { eager: true });

export const images = {
  'team-blaschke-it-gruppenfoto': { file: 'team-blaschke-it-gruppenfoto.jpg', alt: "Das Team von Blaschke IT im Büro", onepage: '05a80bf2-b140-4fc9-8434-630c0e87d397' },
  'sportwagen-geschwindigkeit': { file: 'sportwagen-geschwindigkeit.jpg', alt: "Sportwagen in schneller Fahrt durch die Stadt", onepage: '0c21ab74-ad45-48b6-aabb-5eb02dafa36d' },
  'mitarbeiter-am-arbeitsplatz': { file: 'mitarbeiter-am-arbeitsplatz.jpg', alt: "Mitarbeiter von Blaschke IT am Arbeitsplatz vor zwei Monitoren", onepage: '1395d834-5130-43a9-88fa-994574b587ce' },
  'support-mitarbeiter-mehrere-monitore': { file: 'support-mitarbeiter-mehrere-monitore.jpg', alt: "IT-Support-Mitarbeiter arbeitet an mehreren Monitoren", onepage: '158c741a-0255-4445-aae4-64c7d06db3ba' },
  'techniker-serverrack': { file: 'techniker-serverrack.jpg', alt: "Techniker arbeitet an einem Serverrack im Rechenzentrum", onepage: '18de0f77-1bc1-4f68-8c2b-5fbf695ca3d0' },
  'support-mitarbeiter-headset-schreibtisch': { file: 'support-mitarbeiter-headset-schreibtisch.jpg', alt: "Support-Mitarbeiter mit Headset am Schreibtisch", onepage: '1bb3f0a9-2137-4aae-b902-ef1d92c52676' },
  'notfallplan-handwerk-cover': { file: 'notfallplan-handwerk-cover.jpg', alt: "Wenn die Baustelle stillsteht – der IT-Notfallplan für Handwerksbetriebe", onepage: '21bddbf8-2010-4ddb-aedd-38a80ddce265' },
  'team-im-rechenzentrum': { file: 'team-im-rechenzentrum.jpg', alt: "Drei Mitarbeiter von Blaschke IT im Rechenzentrum", onepage: '29e030d5-0e5f-443a-ad6d-165a4942149d' },
  'kunde-portraet-buero': { file: 'kunde-portraet-buero.png', alt: "Porträt eines Kunden in seinem Büro", onepage: '36a4ca02-cab1-4e49-b69f-2b1b358667d7' },
  'support-mitarbeiterin-headset-laechelnd': { file: 'support-mitarbeiterin-headset-laechelnd.jpg', alt: "Lächelnde Support-Mitarbeiterin mit Headset", onepage: '4c245071-5f3f-4277-bd50-efba22172f86' },
  'sicherheitsleitfaden-cover-dunkel': { file: 'sicherheitsleitfaden-cover-dunkel.jpg', alt: "Leitfaden „Die 10 größten IT-Sicherheitslücken in deutschen KMUs“ auf dunklem Hintergrund", onepage: '64771c7d-80da-4236-980c-6e2824425e5d' },
  'kunde-portraet-buero-2': { file: 'kunde-portraet-buero-2.png', alt: "Porträt eines Kunden in seinem Büro", onepage: '669b443a-671a-4d28-b6a4-d0212084778d' },
  'mitarbeiter-headset-telefon': { file: 'mitarbeiter-headset-telefon.jpg', alt: "Mitarbeiter von Blaschke IT mit Headset am Telefon", onepage: '6c5dbcf9-0d4e-4007-9f02-a6c0011a43ee' },
  'lukas-blaschke': { file: 'lukas-blaschke.png', alt: "Lukas Blaschke, Geschäftsführer von Blaschke IT", onepage: '8c4e7b14-9a9b-4ea0-a5a5-f246e7f64105' },
  'besprechung-dashboard': { file: 'besprechung-dashboard.jpg', alt: "Zwei Mitarbeiter besprechen ein IT-Dashboard auf einem Bildschirm", onepage: '8fe01d19-cb66-4d53-bdb7-3e6ae9ff9444' },
  'buerogebaeude': { file: 'buerogebaeude.jpg', alt: "Modernes Bürogebäude mit Glasfassade", onepage: '9da888be-e09d-4740-b898-ab4a12bdfb1d' },
  'mitarbeiter-headset-telefon-2': { file: 'mitarbeiter-headset-telefon-2.jpg', alt: "Mitarbeiter mit Headset am Telefon im Büro", onepage: 'a12789ea-fe42-43b6-894c-5125fdd5e27b' },
  'lukas-blaschke-rechenzentrum': { file: 'lukas-blaschke-rechenzentrum.jpg', alt: "Lukas Blaschke im Rechenzentrum", onepage: 'a5cb96e7-001a-49ba-bdd4-5815779c86f3' },
  'logo-blaschke-it': { file: 'logo-blaschke-it.png', alt: "Blaschke IT", onepage: 'a62d5706-8939-45e0-bf81-ee45948f705b' },
  'mitarbeiterin-am-arbeitsplatz': { file: 'mitarbeiterin-am-arbeitsplatz.jpg', alt: "Mitarbeiterin von Blaschke IT am Arbeitsplatz", onepage: 'ab35d725-d889-48a2-877d-f24808505a6b' },
  'felsenkueste-meer': { file: 'felsenkueste-meer.jpg', alt: "Felsenküste mit türkisfarbenem Meer", onepage: 'ae3c83d2-1ba2-4bf8-90eb-c7bef99876b1' },
  'hardware-montage': { file: 'hardware-montage.jpg', alt: "Hand setzt eine Komponente in eine Hauptplatine ein", onepage: 'c44372c1-9fcb-48a4-aef7-15a8d60042c3' },
  'mitarbeiter-headset-arbeitsplatz': { file: 'mitarbeiter-headset-arbeitsplatz.jpg', alt: "Mitarbeiter mit Headset am Arbeitsplatz", onepage: 'd36666cc-d92c-4fb8-9670-8f26e7a07886' },
  'laptop-reparatur': { file: 'laptop-reparatur.jpg', alt: "Techniker repariert einen geöffneten Laptop", onepage: 'de29afd0-3359-4c3e-bac1-d2ac21f08d2f' },
  'handschlag': { file: 'handschlag.jpg', alt: "Zwei Personen geben sich die Hand", onepage: 'e7fd351f-611a-478c-8d1f-5bc74f23cdaf' },
  'mitarbeiterin-headset-arbeitsplatz': { file: 'mitarbeiterin-headset-arbeitsplatz.jpg', alt: "Mitarbeiterin mit Headset am Arbeitsplatz", onepage: 'ea528973-29c5-497a-a756-23c99c7f7e96' },
  'sicherheitsleitfaden-cover-dunkel-2': { file: 'sicherheitsleitfaden-cover-dunkel-2.jpg', alt: "Leitfaden „Die 10 größten IT-Sicherheitslücken in deutschen KMUs“", onepage: 'eea52535-35ee-46da-9ae8-2e8c9a12a959' },
  'support-mitarbeiterin-monitore': { file: 'support-mitarbeiterin-monitore.jpg', alt: "Support-Mitarbeiterin mit Headset an mehreren Monitoren", onepage: 'efe902dd-4c83-445e-af70-6627c8951ee9' },
  'krisenratgeber-cover': { file: 'krisenratgeber-cover.png', alt: "Ratgeber „Was passiert mit deinem Betrieb, wenn ihr morgen gehackt werdet?“", onepage: 'f10b3c9f-856f-4ecf-abb5-3f4dd5c44206' },
  'sicherheitsleitfaden-cover': { file: 'sicherheitsleitfaden-cover.jpg', alt: "Leitfaden „Die 10 größten IT-Sicherheitslücken in deutschen KMUs“", onepage: 'f295a356-3237-478b-ad70-83dced7d54a0' },
  'unsplash-segelboot-bucht': { file: 'unsplash-segelboot-bucht.jpg', alt: "Segelboot in einer Bucht", onepage: 'unsplash-HZ7q643XOc4' },
  'unsplash-huegellandschaft': { file: 'unsplash-huegellandschaft.jpg', alt: "Hügellandschaft im Abendlicht", onepage: 'unsplash-PYh4QCX_fmE' },
  'unsplash-himmel-verlauf': { file: 'unsplash-himmel-verlauf.jpg', alt: "Abendhimmel mit Farbverlauf", onepage: 'unsplash-pC2xOplxsVs' },
  'krisenratgeber-cover-animiert-poster': { file: 'krisenratgeber-cover-animiert-poster.jpg', alt: 'Ratgeber „Was passiert mit deinem Betrieb, wenn ihr morgen gehackt werdet?“', onepage: 'eb81f339-0542-427e-a2e8-a07ad8a883c2' },
  'sicherheitsleitfaden-cover-animiert-poster': { file: 'sicherheitsleitfaden-cover-animiert-poster.jpg', alt: 'Leitfaden „Die 10 größten IT-Sicherheitslücken in deutschen KMUs“', onepage: '2c2ea5d3-2b1b-458d-a18f-a5f19e61bd40' },
} as const;

export type ImageKey = keyof typeof images;

/** Animierte Cover (ehemals GIF) als Video: /public/media/<name>.mp4 */
export const videos = {
  'krisenratgeber-cover-animiert': { src: '/media/krisenratgeber-cover-animiert.mp4', poster: 'krisenratgeber-cover-animiert-poster' as ImageKey, onepage: 'eb81f339-0542-427e-a2e8-a07ad8a883c2' },
  'sicherheitsleitfaden-cover-animiert': { src: '/media/sicherheitsleitfaden-cover-animiert.mp4', poster: 'sicherheitsleitfaden-cover-animiert-poster' as ImageKey, onepage: '2c2ea5d3-2b1b-458d-a18f-a5f19e61bd40' },
} as const;

export function imageMeta(key: ImageKey): ImageMetadata {
  const f = files[`../assets/img/${images[key].file}`];
  if (!f) throw new Error(`Bild fehlt: ${images[key].file}`);
  return f.default;
}

/** Bild-Schlüssel zu einer alten Onepage-URL oder Media-ID finden */
export function keyFromOnepage(urlOrId: string): ImageKey | undefined {
  const id = urlOrId.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)?.[0] ?? urlOrId.replace(/^.*unsplash\//, 'unsplash-').replace(/\/.*$/, '');
  return (Object.keys(images) as ImageKey[]).find((k) => images[k].onepage === id);
}
