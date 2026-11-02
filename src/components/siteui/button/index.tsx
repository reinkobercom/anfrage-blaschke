import React from 'react';
import styles from './styles.module.css';

export type ButtonProps = {
  children?: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'primary' | 'dark' | 'outline' | 'ghost' | 'quiet';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
  target?: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  type = 'button',
  disabled = false,
  target,
  iconRight,
  iconLeft,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const cls = [
    styles.button,
    styles['variant_' + variant],
    styles['size_' + size],
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inner = (
    <>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </>
  );

  if (href && !disabled) {
    return (
      <a className={cls} href={href} target={target} onClick={onClick} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }

  return (
    <button className={cls} type={type} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
