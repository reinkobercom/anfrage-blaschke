import React from 'react';
import Title from '../siteui/title';
import Text from '../siteui/text';
import Icon, { type IconName } from '../siteui/icon';
import styles from './digital.module.css';

/** Handwerk: „Ihr Betrieb ist digital“ (Schmerz-Aufbau). Statisch, Einblendung per data-reveal. */
export default function BetriebDigital({ content: c }: { content: Record<string, any> }) {
  const list: any[] = Array.isArray(c.items) ? c.items : [];
  return (
    <section id={c.anchorId} className={styles.section} style={{ backgroundColor: c.bgColor }}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.kicker}>
            <span className={styles.kickerRule} />
            <Text kicker tone="accent" as="span">{c.kicker}</Text>
          </div>
          <Title as="h2" size="lg" tone="inverse" align="center" className={styles.headline}>
            {c.headStart} <em>{c.headAccent}</em> {c.headEnd}
          </Title>
          <Text size="md" tone="inverseMuted" align="center">{c.paragraph}</Text>
        </div>

        <ul className={styles.rail} style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {list.map((it, i) => (
            <li
              className={styles.railItem}
              key={i}
              data-reveal=""
              style={{ '--reveal-y': '14px', '--reveal-duration': '.45s', '--reveal-delay': `${i * 0.08}s` } as React.CSSProperties}
            >
              <span className={styles.railIcon}>
                <Icon name={it.icon as IconName} size={19} />
              </span>
              <p className={styles.railLabel}>{it.label}</p>
            </li>
          ))}
        </ul>

        <div className={styles.turn} data-reveal="" style={{ '--reveal-duration': '.5s' } as React.CSSProperties}>
          <span className={styles.turnLabel}>{c.turnLabel}</span>
          <p className={styles.turnLine}>{c.turnLine}</p>
          {/* Live unsichtbar (Inline-Span ohne Größe) – bewusst 1:1 übernommen, siehe Build-Notes */}
          <span className={styles.turnRule} aria-hidden="true" />
          <Text size="md" tone="inverseMuted" align="center">{c.turnBody}</Text>
        </div>
      </div>
    </section>
  );
}
