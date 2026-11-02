import React from 'react';
import type { ResolvedImage } from '../../../lib/resolve-image';
import styles from './styles.module.css';

/**
 * Ersetzt die Onepage-Bildkomponente (lazysizes + onecdn). Bekommt ein beim Build
 * vorbereitetes Bild (resolveImage) mit WebP-srcset, width/height und Alt-Text.
 * Nur das erste sichtbare Bild einer Seite mit priority laden.
 */
interface Props {
  image: ResolvedImage | null | undefined;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  sizes?: string;
}

const Image: React.FC<Props> = ({ image, alt, className = '', style, priority = false, sizes }) => {
  if (!image) return null;
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes ?? image.sizes}
      width={image.width}
      height={image.height}
      alt={alt ?? image.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      {...(priority ? { fetchPriority: 'high' as const } : {})}
      className={[styles.image, className].filter(Boolean).join(' ')}
      style={style}
    />
  );
};

export default Image;
