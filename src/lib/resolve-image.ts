/**
 * Bilder für React-Komponenten vorbereiten (läuft nur beim Build in Astro-Frontmatter).
 * Ergebnis: WebP in mehreren Breiten + width/height + Alt-Text → als Prop an React übergeben.
 *
 *   const lukas = await resolveImage('lukas-blaschke', { sizes: '62px', widths: [124, 186] });
 *   <Hero personPhoto={lukas} />
 */
import { getImage } from 'astro:assets';
import { images, imageMeta, type ImageKey } from '../data/images';

export type ResolvedImage = {
  src: string;
  srcSet: string;
  sizes: string;
  width: number;
  height: number;
  alt: string;
};

const DEFAULT_WIDTHS = [400, 640, 960, 1280, 1600, 2000];

export async function resolveImage(
  key: ImageKey,
  opts: { widths?: number[]; sizes?: string; alt?: string; quality?: number } = {},
): Promise<ResolvedImage> {
  const meta = imageMeta(key);
  const widths = (opts.widths ?? DEFAULT_WIDTHS).filter((w) => w <= meta.width);
  if (!widths.length) widths.push(meta.width);
  const img = await getImage({ src: meta, widths, format: 'webp', quality: opts.quality ?? 78 });
  return {
    src: img.src,
    srcSet: img.srcSet.attribute,
    sizes: opts.sizes ?? '100vw',
    width: meta.width,
    height: meta.height,
    alt: opts.alt ?? images[key].alt,
  };
}
