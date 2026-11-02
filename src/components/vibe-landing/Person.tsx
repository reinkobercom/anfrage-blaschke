import React from 'react';
import type { ResolvedImage } from '../../lib/resolve-image';
import styles from '../siteui/person/styles.module.css';

/**
 * Variante von @siteui/person: nimmt ein beim Build vorbereitetes Bild (resolveImage)
 * und rendert es mit WebP-srcset, festen Maßen und lazy loading. Optik identisch.
 */
export type PersonProps = {
  photo?: ResolvedImage | null;
  name?: string;
  role?: string;
  alt?: string;
  theme?: 'light' | 'inverse';
  size?: 'sm' | 'md';
  avatarSize?: number;
  ringColor?: string;
  className?: string;
  priority?: boolean;
};

export default function Person({
  photo,
  name,
  role,
  alt,
  theme = 'light',
  size = 'md',
  avatarSize = 62,
  ringColor,
  className = '',
  priority = false,
}: PersonProps) {
  const cls = [styles.person, theme === 'inverse' ? styles.themeInverse : styles.themeLight, styles['size_' + size], className]
    .filter(Boolean)
    .join(' ');

  const initials = String(name || '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join('');

  return (
    <div className={cls}>
      <span className={styles.avatarRing} style={ringColor ? { borderColor: ringColor } : undefined}>
        {photo && photo.src ? (
          <img
            className={styles.avatar}
            src={photo.src}
            srcSet={photo.srcSet}
            sizes={`${avatarSize}px`}
            width={avatarSize}
            height={avatarSize}
            alt={alt || photo.alt || name || ''}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            style={{ width: avatarSize, height: avatarSize }}
          />
        ) : (
          <span
            className={styles.avatarFallback}
            style={{ width: avatarSize, height: avatarSize, fontSize: Math.round(avatarSize / 2.8) }}
            aria-hidden="true"
          >
            {initials}
          </span>
        )}
      </span>

      <div className={styles.meta}>
        <p className={styles.name}>{name}</p>
        <p className={styles.role}>{role}</p>
      </div>
    </div>
  );
}
