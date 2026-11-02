import React from 'react';
import Text from '../siteui/text';
import { FooterColumns } from './Abschluss';
import styles from './footer.module.css';

/** Fußzeile der Handwerk-Dankeseiten (dunkel). Mit Telefonnummer (Entscheidung R3: Telefon auf Dankeseiten). */
export default function DankeFooter({ content: c }: { content: Record<string, any> }) {
  return (
    <footer className={styles.section} style={{ backgroundColor: c.bgColor }}>
      <div className={styles.inner}>
        <FooterColumns content={c} styles={styles} showPhone />
        <div className={styles.copyright}>
          <Text size="xs" tone="inverseMuted">{c.copyright}</Text>
        </div>
      </div>
    </footer>
  );
}
