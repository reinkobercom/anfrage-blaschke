import React from 'react';
import styles from './styles.module.css';

export type FieldOption = { label: string; value: string };

export type FieldProps = {
  id: string;
  label?: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  value?: string;
  onChange?: (value: string) => void;
  options?: FieldOption[];
  error?: string;
  theme?: 'light' | 'inverse';
  placeholder?: string;
  autoComplete?: string;
  className?: string;
};

export default function Field({
  id,
  label,
  type = 'text',
  value = '',
  onChange,
  options = [],
  error = '',
  theme = 'light',
  placeholder,
  autoComplete,
  className = '',
}: FieldProps) {
  const controlCls = [
    styles.control,
    theme === 'inverse' ? styles.themeInverse : styles.themeLight,
    error ? styles.hasError : '',
    type === 'textarea' ? styles.textarea : '',
  ]
    .filter(Boolean)
    .join(' ');

  const labelCls = [styles.label, theme === 'inverse' ? styles.labelInverse : styles.labelLight].join(' ');
  const handle = (e: any) => (onChange ? onChange(e.target.value) : undefined);

  return (
    <div className={[styles.field, className].filter(Boolean).join(' ')}>
      {label ? (
        <label className={labelCls} htmlFor={id}>
          {label}
        </label>
      ) : null}

      {type === 'textarea' ? (
        <textarea
          id={id}
          className={controlCls}
          value={value}
          onChange={handle}
          placeholder={placeholder}
          aria-invalid={!!error}
        />
      ) : type === 'select' ? (
        <select id={id} className={controlCls} value={value} onChange={handle} aria-invalid={!!error}>
          <option value="" />
          {options.map((o, i) => (
            <option value={o.value} key={i}>
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          className={controlCls}
          value={value}
          onChange={handle}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={!!error}
        />
      )}

      {error ? <span className={styles.error}>{error}</span> : null}
    </div>
  );
}
