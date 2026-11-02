/**
 * /service – Formularkarte „Jetzt kostenlos starten“ (React-Insel, client:visible).
 * Ohne JavaScript funktioniert das Formular als normaler POST an /api/lead.
 */
import { useEffect, useState, type FormEvent } from 'react';
import { submitLead, goTo } from '../../lib/client';
import styles from './ServiceForm.module.css';

type Option = { value: string; label: string };
type Props = {
  formId: string;
  formTitle: string;
  formSub: string;
  offerBadge: string;
  availLabel: string;
  availValue: string;
  submitLabel: string;
  loadingLabel: string;
  disclaimer: string;
  requiredMessage: string;
  errorMessage: string;
  phoneDisplay: string;
  phoneHref: string;
  employeeOptions: Option[];
};

type Fields = { firstName: string; lastName: string; company: string; phone: string; employees: string };
const REQUIRED: (keyof Fields)[] = ['firstName', 'phone', 'employees'];
const REDIRECT = '/danke-service';

export default function ServiceForm(p: Props) {
  const [fields, setFields] = useState<Fields>({ firstName: '', lastName: '', company: '', phone: '', employees: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<'' | 'required' | 'failed'>('');
  const [invalid, setInvalid] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [hp, setHp] = useState('');

  // Rückmeldung aus dem Formular-Versand ohne JavaScript (?fehler=…)
  useEffect(() => {
    const f = new URLSearchParams(window.location.search).get('fehler');
    if (f === 'pflichtfelder') setErrorMsg('required');
    else if (f) setErrorMsg('failed');
  }, []);

  const update = (k: keyof Fields, v: string) => {
    setFields((f) => ({ ...f, [k]: v }));
    if (invalid[k] && v.trim()) setInvalid((i) => ({ ...i, [k]: false }));
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const missing = REQUIRED.filter((k) => !fields[k].trim());
    if (missing.length) {
      setInvalid(Object.fromEntries(missing.map((k) => [k, true])));
      setErrorMsg('required');
      document.getElementById(`svc-${missing[0]}`)?.focus();
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    const res = await submitLead({ formId: p.formId, values: fields, honeypot: hp });
    if (res.ok) {
      goTo(res.redirect || REDIRECT);
      return;
    }
    setStatus('error');
    if (res.errors && Object.keys(res.errors).length) {
      setInvalid(Object.fromEntries(Object.keys(res.errors).map((k) => [k, true])));
      setErrorMsg('required');
    } else {
      setErrorMsg('failed');
    }
  };

  const fieldProps = (k: keyof Fields) => ({
    id: `svc-${k}`,
    name: k,
    value: fields[k],
    'aria-invalid': invalid[k] ? true : undefined,
    'aria-describedby': invalid[k] ? 'svc-form-error' : undefined,
  });

  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div>
          <div className={styles.formTitle}>{p.formTitle}</div>
          <div className={styles.formSub}>{p.formSub}</div>
        </div>
        <div className={styles.badge}>{p.offerBadge}</div>
      </div>

      <div className={styles.avail}>
        <span className={styles.pulse} aria-hidden="true" />
        <span className={styles.availText}>
          {p.availLabel} <strong>{p.availValue}</strong>
        </span>
      </div>

      <form onSubmit={submit} className={styles.form} action="/api/lead" method="post" noValidate>
        <input type="hidden" name="formId" value={p.formId} />
        <input type="hidden" name="page" value="/service" />
        <div className="hp-field" aria-hidden="true">
          <label>
            Website
            <input name="website" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
          </label>
        </div>

        <div className={styles.row}>
          <div className={styles.fg}>
            <label className={styles.label} htmlFor="svc-firstName">Vorname *</label>
            <input
              {...fieldProps('firstName')}
              className={styles.input}
              type="text"
              placeholder="Max"
              onChange={(e) => update('firstName', e.target.value)}
              autoComplete="given-name"
              aria-required="true"
            />
          </div>
          <div className={styles.fg}>
            <label className={styles.label} htmlFor="svc-lastName">Nachname</label>
            <input
              {...fieldProps('lastName')}
              className={styles.input}
              type="text"
              placeholder="Mustermann"
              onChange={(e) => update('lastName', e.target.value)}
              autoComplete="family-name"
            />
          </div>
        </div>
        <div className={styles.fg}>
          <label className={styles.label} htmlFor="svc-company">Unternehmen</label>
          <input
            {...fieldProps('company')}
            className={styles.input}
            type="text"
            placeholder="Muster GmbH"
            onChange={(e) => update('company', e.target.value)}
            autoComplete="organization"
          />
        </div>
        <div className={styles.fg}>
          <label className={styles.label} htmlFor="svc-phone">Telefon *</label>
          <input
            {...fieldProps('phone')}
            className={styles.input}
            type="tel"
            placeholder="+49 ..."
            onChange={(e) => update('phone', e.target.value)}
            autoComplete="tel"
            aria-required="true"
          />
        </div>
        <div className={styles.fg}>
          <label className={styles.label} htmlFor="svc-employees">Mitarbeiterzahl *</label>
          <select
            {...fieldProps('employees')}
            className={styles.select}
            onChange={(e) => update('employees', e.target.value)}
            aria-required="true"
          >
            <option value="" disabled>Bitte wählen</option>
            {p.employeeOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        {errorMsg === 'required' && (
          <div id="svc-form-error" role="alert" className={styles.error}>{p.requiredMessage}</div>
        )}
        {errorMsg === 'failed' && (
          <div id="svc-form-error" role="alert" className={styles.error}>
            {p.errorMessage} <a href={p.phoneHref} className={styles.errorPhone}>{p.phoneDisplay}</a>
          </div>
        )}

        <button type="submit" className={styles.btn} disabled={status === 'loading'}>
          {status === 'loading' ? p.loadingLabel : `${p.submitLabel} →`}
        </button>
        <div className={styles.disclaimer}>{p.disclaimer}</div>
      </form>
    </div>
  );
}
