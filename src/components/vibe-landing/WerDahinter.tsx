import React from 'react';
import Title from '../siteui/title';
import Text from '../siteui/text';
import Icon, { type IconName } from '../siteui/icon';
import styles from './wer-dahinter.module.css';
import vl from './vl.module.css';

/** „Wer dahintersteht“ – Kennzahlen, drei Argumente, Zitat. Statisch, Einblendung per data-reveal. */
export default function WerDahinter({ content: c }: { content: Record<string, any> }) {
  const statList: any[] = Array.isArray(c.stats) ? c.stats : [];
  const cardList: any[] = Array.isArray(c.cards) ? c.cards : [];
  return (
    <section className={styles.section} style={{ backgroundColor: c.bgColor }}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <div className={styles.kicker}>
              <span className={styles.kickerRule} />
              <Text kicker tone="accent" as="span">{c.kicker}</Text>
            </div>
            <Title as="h2" size="lg" className={styles.head}>
              {c.headStart} <em>{c.headAccent}</em> {c.headEnd}
            </Title>
          </div>
          <Text size="md" tone="muted">{c.paragraph}</Text>
        </div>

        <div className={styles.stats}>
          {statList.map((s, i) => (
            <div
              className={styles.stat}
              key={i}
              data-reveal=""
              style={{ '--reveal-y': '14px', '--reveal-duration': '.45s', '--reveal-delay': `${i * 0.08}s` } as React.CSSProperties}
            >
              <p className={styles.statValue}>{s.value}</p>
              <Text size="sm" tone="muted">{s.label}</Text>
            </div>
          ))}
        </div>

        <div className={styles.cards}>
          {cardList.map((card, i) => (
            <div
              className={vl.revealCell}
              key={i}
              data-reveal=""
              style={{ '--reveal-y': '18px', '--reveal-duration': '.45s', '--reveal-delay': `${i * 0.08}s` } as React.CSSProperties}
            >
              <div className={styles.card}>
                <span className={styles.cardIcon}>
                  <Icon name={card.icon as IconName} size={20} />
                </span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <Text size="sm" tone="muted">{card.body}</Text>
              </div>
            </div>
          ))}
        </div>

        <figure className={styles.quoteBlock} style={{ margin: 0 }}>
          <blockquote className={styles.quoteText}>{c.quote}</blockquote>
          <figcaption>
            <Text size="xs" tone="muted">{c.quoteSource}</Text>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
