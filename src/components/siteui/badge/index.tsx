import React from 'react';
import styles from './styles.module.css';

export type BadgeProps = {
  children?: React.ReactNode;
  variant?: 'light' | 'accent' | 'dark' | 'outline' | 'alert';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  dot?: boolean;
  className?: string;
};

export default function Badge({
  children,
  variant = 'light',
  size = 'md',
  icon,
  dot = false,
  className = '',
}: BadgeProps) {
  const cls = [styles.badge, styles['variant_' + variant], styles['size_' + size], className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={cls}>
      {dot ? <span className={styles.dot} /> : null}
      {icon}
      <span>{children}</span>
    </span>
  );
}
