import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css';

export type AccordionItemProps = {
  question: string;
  answer?: React.ReactNode;
  open?: boolean;
  onToggle?: () => void;
  id?: string;
};

export default function AccordionItem({ question, answer, open = false, onToggle, id }: AccordionItemProps) {
  const panelId = (id || 'acc') + '-panel';

  return (
    <div className={styles.item}>
      <button
        className={styles.trigger}
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span>{question}</span>
        <span className={`${styles.marker} ${open ? styles.markerOpen : ''}`}>
          <span className={`${styles.markerBar} ${styles.markerBarH}`} />
          <span className={`${styles.markerBar} ${styles.markerBarV}`} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            className={styles.panel}
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className={styles.panelInner}>{answer}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
