import React from 'react';
import styles from './styles.module.css';

export type TitleProps = {
  children?: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  tone?: 'default' | 'muted' | 'accent' | 'inverse';
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span';
  className?: string;
  id?: string;
  style?: React.CSSProperties;
};

export default function Title({
  children,
  size = 'lg',
  tone = 'default',
  align = 'left',
  as = 'h2',
  className = '',
  id,
  style,
}: TitleProps) {
  const Tag = as as any;
  const cls = [
    styles.title,
    styles['size_' + size],
    styles['tone_' + tone],
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
