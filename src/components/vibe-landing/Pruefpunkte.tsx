import React from 'react';
import Title from '../siteui/title';
import Text from '../siteui/text';
import Button from '../siteui/button';
import Icon from '../siteui/icon';
import styles from './pruefpunkte.module.css';
import vl from './vl.module.css';

/**
 * Nummeriertes Raster mit Hinweisbox + CTA.
 * Kanzlei: „Was der Risikocheck prüft“ (4 Spalten) · Handwerk: „Was im Notfallplan steht“ (3 Spalten).
 */
export default function Pruefpunkte({ content: c, columns = 4 }: { content: Record<string, any>; columns?: 3 | 4 }) {
  const list: any[] = Array.isArray(c.points) ? c.points : [];
  return (
    <section className={styles.section} style={{ backgroundColor: c.bgColor }}>
      <div className={styles.inner}>
        <div className={styles.kicker}>
          <span className={styles.kickerRule} />
          <Text kicker tone="accent" as="span">{c.kicker}</Text>
        </div>

        <Title as="h2" size="lg" className={styles.head}>
          {c.headStart} <em>{c.headAccent}</em>
        </Title>

        <Text size="md" tone="muted" className={styles.lead}>{c.paragraph}</Text>

        <div className={`${styles.grid} ${columns === 3 ? styles.grid3 : ''}`}>
          {list.map((p, i) => (
            <div
              className={vl.revealCell}
              key={i}
              data-reveal=""
              style={{ '--reveal-y': '14px', '--reveal-duration': '.4s', '--reveal-delay': `${(i % columns) * 0.05}s` } as React.CSSProperties}
            >
              <div className={styles.cell}>
                <span className={styles.num} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.cellTitle}>{p.title}</h3>
                <Text size="sm" tone="muted">{p.body}</Text>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.noteBox}>
            <div className={styles.noteHead}>
              <Icon name="shield" size={19} />
              <h3 className={styles.noteTitle}>{c.boxTitle}</h3>
            </div>
            <Text size="sm" tone="muted">{c.boxBody}</Text>
          </div>

          <div className={styles.ctaWrap}>
            <Button href={c.ctaHref} variant="primary" size="md" className={vl.tap}>{c.ctaLabel}</Button>
            <Text size="xs" tone="muted">{c.ctaNote}</Text>
          </div>
        </div>
      </div>
    </section>
  );
}
