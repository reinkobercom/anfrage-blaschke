import React from 'react';
import styles from './styles.module.css';

export type IconName =
  | 'check'
  | 'shield'
  | 'alert'
  | 'clock'
  | 'arrowRight'
  | 'lock'
  | 'server'
  | 'mail'
  | 'phone'
  | 'database'
  | 'user'
  | 'chevronDown'
  | 'close'
  | 'document'
  | 'calendar'
  | 'refresh'
  | 'search';

const PATHS: Record<IconName, React.ReactNode> = {
  check: <polyline points="4 12.5 9 17.5 20 6.5" />,
  shield: (
    <>
      <path d="M12 3 20 6v6c0 4.6-3.2 7.9-8 9-4.8-1.1-8-4.4-8-9V6l8-3Z" />
      <polyline points="8.7 11.8 11.2 14.3 15.5 9.9" />
    </>
  ),
  alert: (
    <>
      <path d="M12 4.5 21 19.5H3L12 4.5Z" />
      <line x1="12" y1="10" x2="12" y2="14" />
      <line x1="12" y1="16.8" x2="12" y2="16.9" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <polyline points="12 7 12 12 15.5 14" />
    </>
  ),
  arrowRight: (
    <>
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="9.5" rx="2" />
      <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" />
    </>
  ),
  server: (
    <>
      <rect x="3.5" y="4.5" width="17" height="6" rx="1.6" />
      <rect x="3.5" y="13.5" width="17" height="6" rx="1.6" />
      <line x1="7" y1="7.5" x2="7.1" y2="7.5" />
      <line x1="7" y1="16.5" x2="7.1" y2="16.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <polyline points="3.6 7 12 13 20.4 7" />
    </>
  ),
  phone: (
    <path d="M6.4 3.5h3l1.6 4-2 1.4a12.5 12.5 0 0 0 6.1 6.1l1.4-2 4 1.6v3a1.9 1.9 0 0 1-2.1 1.9C11.4 19.9 4.1 12.6 3.5 5.6A1.9 1.9 0 0 1 5.4 3.5Z" />
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
      <path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.8 20a7.2 7.2 0 0 1 14.4 0" />
    </>
  ),
  chevronDown: <polyline points="5.5 9 12 15.5 18.5 9" />,
  close: (
    <>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </>
  ),
  document: (
    <>
      <path d="M14 3.5H7a1.8 1.8 0 0 0-1.8 1.8v13.4A1.8 1.8 0 0 0 7 20.5h10a1.8 1.8 0 0 0 1.8-1.8V8.3L14 3.5Z" />
      <polyline points="13.7 3.7 13.7 8.6 18.6 8.6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
      <line x1="8" y1="3" x2="8" y2="6.5" />
      <line x1="16" y1="3" x2="16" y2="6.5" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 11.5a8 8 0 1 0-.9 5" />
      <polyline points="20 5.5 20 11.5 14 11.5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <line x1="15.8" y1="15.8" x2="20.5" y2="20.5" />
    </>
  ),
};

export type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
};

export default function Icon({ name, size = 20, color, strokeWidth, className = '' }: IconProps) {
  const glyph = PATHS[name] || PATHS.check;
  return (
    <span
      className={[styles.icon, className].filter(Boolean).join(' ')}
      style={{ width: size, height: size, color }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" style={strokeWidth ? { strokeWidth } : undefined}>
        {glyph}
      </svg>
    </span>
  );
}
