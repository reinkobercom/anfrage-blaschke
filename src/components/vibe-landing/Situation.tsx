import React from 'react';
import Title from '../siteui/title';
import Text from '../siteui/text';
import Button from '../siteui/button';
import styles from './situation.module.css';
import vl from './vl.module.css';

/** „Aktuelle Situation“ – 8 Kacheln mit rotem X. Statisch (kein JS), Einblendung per data-reveal. */
export default function Situation({ content: c }: { content: Record<string, any> }) {
  const list: any[] = Array.isArray(c.tiles) ? c.tiles : [];
  return (
    <section id={c.anchorId} className={styles.section} style={{ backgroundColor: c.bgColor }}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.kicker}>
            <span className={styles.kickerRule} />
            <Text kicker tone="accent" as="span">{c.kicker}</Text>
          </div>
          <Title as="h2" size="lg" align="center" className={styles.headline}>
            {c.headStart} <em>{c.headAccent}</em>
          </Title>
          <Text size="md" tone="muted" align="center">{c.paragraph}</Text>
        </div>

        <div className={styles.grid}>
          {list.map((t, i) => (
            <div
              className={vl.revealCell}
              key={i}
              data-reveal=""
              style={{ '--reveal-y': '16px', '--reveal-duration': '.42s', '--reveal-delay': `${(i % 4) * 0.06}s` } as React.CSSProperties}
            >
              <div className={styles.tile}>
                <span className={styles.xMark} aria-hidden="true">
                  <span className={`${styles.xBar} ${styles.xBarA}`} style={{ backgroundColor: c.alertColor }} />
                  <span className={`${styles.xBar} ${styles.xBarB}`} style={{ backgroundColor: c.alertColor }} />
                </span>
                <h3 className={styles.tileTitle}>{t.title}</h3>
                <Text size="sm" tone="muted">{t.body}</Text>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <Button href={c.ctaHref} variant="primary" size="md" className={vl.tap}>{c.ctaLabel}</Button>
          <Text size="xs" tone="muted" align="center">{c.ctaNote}</Text>
        </div>
      </div>
    </section>
  );
}
