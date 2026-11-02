import React from 'react';
import styles from './styles.module.css';

export type CardProps = {
  children?: React.ReactNode;
  variant?: 'plain' | 'bordered' | 'raised' | 'tinted' | 'dark' | 'accent';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  accentTop?: boolean;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
};

export default function Card({
  children,
  variant = 'bordered',
  padding = 'md',
  accentTop = false,
  className = '',
  id,
  style,
}: CardProps) {
  const cls = [
    styles.card,
    styles['variant_' + variant],
    styles['pad_' + padding],
    accentTop ? styles.accentTop : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cls} id={id} style={style}>
      {children}
    </div>
  );
}
