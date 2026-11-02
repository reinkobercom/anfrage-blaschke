import React, { useRef, useState } from 'react';
import Text from '../siteui/text';
import Button from '../siteui/button';
import Icon from '../siteui/icon';
import Field from '../siteui/field';
import { goTo, submitLead, track } from '../../lib/client';
import { EMAIL_RE } from './freemail';
import styles from './rueckruf.module.css';
import vl from './vl.module.css';

/**
 * Rückruf-Formular (dunkles Panel). Genutzt für:
 *  - Kanzlei   771beacc… (Feld „Kanzlei“, Erfolg inline)
 *  - Handwerk  eb338088… (Feld „Betrieb“, → /handwerk-rueckruf-danke nach 350 ms)
 *  - Danke     ef18b494… (Feld „Betrieb“, Pixel „RueckrufHandwerk“, → /handwerk-rueckruf-danke nach 350 ms)
 * Keine Freemail-Sperre (wie live).
 */
type Props = {
  content: Record<string, any>;
  formId: string;
  /** 'kanzlei' oder 'betrieb' – Name/Beschriftung des Organisationsfeldes */
  org: 'kanzlei' | 'betrieb';
  /** Custom-Pixel-Event nach dem Absenden (nur Dankeseite) */
  eventName?: string;
  idPrefix?: string;
};

export default function RueckrufPanel({ content: c, formId, org, eventName, idPrefix = 'rr' }: Props) {
  const orgLabel = org === 'kanzlei' ? c.kanzleiLabel : c.betriebLabel;
  const [form, setForm] = useState({ name: '', org: '', phone: '', email: '', message: '', consent: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState('');
  const honeypot = useRef<HTMLInputElement>(null);

  const serverKey: Record<string, string> = {
    rueckruf_name: 'name',
    ['rueckruf_' + org]: 'org',
    rueckruf_telefon: 'phone',
    rueckruf_email: 'email',
    rueckruf_anliegen: 'message',
    rueckruf_consent: 'consent',
  };

  function setField(key: string, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = c.requiredMessage;
    if (!form.org.trim()) next.org = c.requiredMessage;
    if (!form.phone.trim()) next.phone = c.requiredMessage;
    const email = form.email.trim();
    if (!email) next.email = c.requiredMessage;
    else if (!EMAIL_RE.test(email)) next.email = c.emailInvalidMessage;
    if (!form.consent) next.consent = c.consentMessage;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (sending || !validate()) return;
    setSending(true);
    setSendError('');
    const res = await submitLead({
      formId,
      values: {
        rueckruf_name: form.name.trim(),
        ['rueckruf_' + org]: form.org.trim(),
        rueckruf_telefon: form.phone.trim(),
        rueckruf_email: form.email.trim(),
        rueckruf_anliegen: form.message.trim(),
        rueckruf_consent: form.consent,
      },
      honeypot: honeypot.current?.value,
    });
    setSending(false);
    if (!res.ok) {
      if (res.errors) {
        const mapped: Record<string, string> = {};
        for (const [k, v] of Object.entries(res.errors)) mapped[serverKey[k] || k] = v;
        setErrors(mapped);
      }
      setSendError(res.message || c.errorMessage);
      return;
    }
    setSent(true);
    if (eventName) track('trackCustom', eventName);
    const target = res.redirect || c.redirectUrl;
    if (target) goTo(target, 350);
  }

  if (sent) {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon}>
          <Icon name="check" size={22} />
        </span>
        <h3 className={styles.successTitle}>{c.successTitle}</h3>
        <Text size="sm" tone="inverseMuted">{c.successBody}</Text>
      </div>
    );
  }

  const id = (k: string) => `${idPrefix}-${k}`;
  return (
    <form noValidate onSubmit={submit}>
      <h3 className={styles.panelTitle}>{c.formTitle}</h3>

      <div className={styles.fields}>
        <Field id={id('name')} theme="inverse" label={c.nameLabel} value={form.name} onChange={(v) => setField('name', v)} error={errors.name} autoComplete="name" />
        <Field id={id(org)} theme="inverse" label={orgLabel} value={form.org} onChange={(v) => setField('org', v)} error={errors.org} autoComplete="organization" />
        <Field id={id('phone')} theme="inverse" type="tel" label={c.phoneFieldLabel} value={form.phone} onChange={(v) => setField('phone', v)} error={errors.phone} autoComplete="tel" />
        <Field id={id('email')} theme="inverse" type="email" label={c.emailFieldLabel} value={form.email} onChange={(v) => setField('email', v)} error={errors.email} autoComplete="email" />
        <Field id={id('message')} theme="inverse" type="textarea" label={c.messageLabel} value={form.message} onChange={(v) => setField('message', v)} error={errors.message} />
      </div>

      <div className="hp-field" aria-hidden="true">
        <label>
          Website
          <input ref={honeypot} name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className={styles.consentRow}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={form.consent}
          onChange={(e) => setField('consent', e.target.checked)}
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? id('consent-err') : undefined}
        />
        <span className={styles.consentLabel}>{c.consentText}</span>
      </label>
      {errors.consent ? <span className={styles.errorText} id={id('consent-err')}>{errors.consent}</span> : null}

      <div className={styles.submitRow}>
        <Button variant="primary" size="md" type="submit" disabled={sending} className={vl.tap}>
          {sending ? c.submittingLabel : c.submitLabel}
        </Button>
        {sendError ? <span className={styles.errorText} role="alert">{sendError}</span> : null}
      </div>
    </form>
  );
}
