import React from 'react';
import b from '../siteui/button/styles.module.css';
import vl from './vl.module.css';

/**
 * PDF-Download als Link in der Optik von @siteui/button (primary).
 * Öffnet in einem neuen Tab (der Hinweis „öffnet sich in einem neuen Tab“ stimmt damit).
 * `data-track-download` → Pixel-Event „NotfallplanDownload“ (siehe Seiten-Script), nur wo live vorhanden.
 */
export default function PdfButton({
  href,
  label,
  size = 'md',
  trackDownload = false,
}: {
  href: string;
  label: string;
  size?: 'md' | 'lg';
  trackDownload?: boolean;
}) {
  return (
    <a
      className={[b.button, b.variant_primary, b['size_' + size], vl.tap].join(' ')}
      href={href}
      target="_blank"
      rel="noopener"
      {...(trackDownload ? { 'data-track-download': '' } : {})}
    >
      <span>{label}</span>
    </a>
  );
}
