import React from 'react';
import Title from '../siteui/title';
import Text from '../siteui/text';
import Button from '../siteui/button';
import { site } from '../../data/site';
import styles from './abschluss.module.css';
import vl from './vl.module.css';

/** Abschluss-CTA + Footer (eine Sektion, dunkel). Rechtstexte/E-Mail zentral aus src/data/site.ts. */
export default function Abschluss({ content: c }: { content: Record<string, any> }) {
  return (
    <section className={styles.section} style={{ backgroundColor: c.bgColor }}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.close} data-reveal="" style={{ '--reveal-y': '20px', '--reveal-duration': '.55s' } as React.CSSProperties}>
          <div className={styles.kicker}>
            <span className={styles.kickerRule} />
            <Text kicker tone="accent" as="span">{c.kicker}</Text>
          </div>
          <Title as="h2" size="lg" tone="inverse" align="center" className={styles.head}>
            {c.headStart} <em>{c.headAccent}</em>
          </Title>
          <Text size="lg" tone="inverseMuted" align="center" className={styles.subline}>{c.subline}</Text>
          <div className={styles.ctaCol}>
            <Button href={c.ctaHref} variant="primary" size="md" className={vl.tap}>{c.ctaLabel}</Button>
            <Text size="xs" tone="inverseMuted" align="center">{c.ctaNote}</Text>
            <a className={styles.secondaryLink} href={c.secondaryHref}>{c.secondaryLabel}</a>
          </div>
        </div>

        <footer>
          <FooterColumns content={c} styles={styles} />
          <div className={styles.copyright}>
            <Text size="xs" tone="inverseMuted">{c.copyright}</Text>
          </div>
        </footer>
      </div>
    </section>
  );
}

/** Footer-Spalten (auch von der Dankeseiten-Fußzeile genutzt). Optional mit Telefonnummer. */
export function FooterColumns({ content: c, styles: s, showPhone = false }: { content: Record<string, any>; styles: Record<string, string>; showPhone?: boolean }) {
  return (
    <div className={s.footer}>
      <div>
        <p className={s.brand}>{c.footerBrand}</p>
        <Text size="sm" tone="inverseMuted">{c.footerTagline}</Text>
      </div>
      <div className={s.footCol}>
        <span className={s.footHead}>{c.footerContactHead}</span>
        <a className={s.footLink} href={`mailto:${site.emails.info}`}>{site.emails.info}</a>
        {showPhone ? <a className={s.footLink} href={site.phone.href}>{site.phone.display}</a> : null}
      </div>
      <div className={s.footCol}>
        <span className={s.footHead}>{c.footerLegalHead}</span>
        <a className={s.footLink} href={site.legal.impressum} rel="noopener">Impressum</a>
        <a className={s.footLink} href={site.legal.datenschutz} rel="noopener">Datenschutz</a>
      </div>
    </div>
  );
}
