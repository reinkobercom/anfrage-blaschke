import React from 'react';
import styles from './styles.module.css';

export type TextProps = {
  children?: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  tone?: 'default' | 'muted' | 'accent' | 'inverse' | 'inverseMuted';
  weight?: 'regular' | 'medium' | 'bold';
  align?: 'left' | 'center' | 'right';
  kicker?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
};

export default function Text({
  children,
  size = 'md',
  tone = 'default',
  weight = 'regular',
  align = 'left',
  kicker = false,
  as = 'p',
  className = '',
  id,
  style,
}: TextProps) {
  const Tag = as as any;
  const cls = [
    styles.text,
    kicker ? styles.mono : styles['size_' + size],
    styles['tone_' + tone],
    kicker ? '' : styles['weight_' + weight],
    styles['align_' + align],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={cls} id={id} style={style}>
      {children}
    </Tag>
  );
}
