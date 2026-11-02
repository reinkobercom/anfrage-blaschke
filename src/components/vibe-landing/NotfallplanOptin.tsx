import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Title from '../siteui/title';
import Text from '../siteui/text';
import Icon from '../siteui/icon';
import Card from '../siteui/card';
import Button from '../siteui/button';
import type { ResolvedImage } from '../../lib/resolve-image';
import { goTo, submitLead, track } from '../../lib/client';
import { EMAIL_RE, isFreemail } from './freemail';
import PdfButton from './PdfButton';
import styles from './hero-handwerk.module.css';
import vl from './vl.module.css';

/**
 * Notfallplan-Optin Handwerk (Onepage-Formular 9bfe25e8…): 1 Frage → Kontaktdaten → Weiterleitung
 * nach 350 ms auf /handwerk-notfallplan-danke. Pixel wie live: „NotfallplanGestartet“ (custom) bei der
 * ersten Antwort, nach dem Absenden „Lead“ + „LeadHandwerk“ (custom).
 */
export const NOTFALLPLAN_FORM_ID = '9bfe25e8-3d9d-4905-b8d3-22fd0549a18d';
const OPTION_KEYS = ['A', 'B', 'C', 'D'];

const SERVER_FIELD: Record<string, string> = { vorname: 'firstName', nachname: 'lastName', betrieb: 'betrieb', email: 'email', telefon: 'phone', consent: 'consent' };

function buildOptions(q: any) {
  return [1, 2, 3, 4].map((n) => ({ label: q['o' + n] as string })).filter((o) => o.label && String(o.label).trim().length > 0);
}

export default function NotfallplanOptin({ content: c, cover }: { content: Record<string, any>; cover?: ResolvedImage | null }) {
  const list: any[] = Array.isArray(c.questions) ? c.questions : [];
  const total = list.length;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [form, setForm] = useState({ firstName: '', lastName: '', betrieb: '', email: '', phone: '', consent: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const honeypot = useRef<HTMLInputElement>(null);
  const startedRef = useRef(false);

  const phase = step < total ? 'questions' : step === total ? 'contact' : 'success';

  function pick(index: number, label: string) {
    if (!startedRef.current) {
      startedRef.current = true;
      track('trackCustom', c.eventStartName || 'NotfallplanGestartet');
    }
    setAnswers((prev) => ({ ...prev, [index]: label }));
    setStep(index + 1);
  }

  function goBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  function setField(key: string, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!form.firstName.trim()) next.firstName = c.requiredMessage;
    if (!form.lastName.trim()) next.lastName = c.requiredMessage;
    if (!form.betrieb.trim()) next.betrieb = c.requiredMessage;
    if (!form.phone.trim()) next.phone = c.requiredMessage;
    const email = form.email.trim().toLowerCase();
    if (!email) next.email = c.requiredMessage;
    else if (!EMAIL_RE.test(email)) next.email = c.emailInvalidMessage;
    else if (c.blockFreemail && isFreemail(email)) next.email = c.freemailMessage;
    if (!form.consent) next.consent = c.consentMessage;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit(e?: React.FormEvent) {
    e?.preventDefault();
    if (sending || !validate()) return;
    setSending(true);
    setSendError('');
    const res = await submitLead({
      formId: NOTFALLPLAN_FORM_ID,
      values: {
        softwareort: answers[0] || '',
        vorname: form.firstName.trim(),
        nachname: form.lastName.trim(),
        betrieb: form.betrieb.trim(),
        email: form.email.trim(),
        telefon: form.phone.trim(),
        consent: form.consent,
      },
      honeypot: honeypot.current?.value,
    });
    setSending(false);
    if (!res.ok) {
      if (res.errors) {
        const mapped: Record<string, string> = {};
        for (const [k, v] of Object.entries(res.errors)) mapped[SERVER_FIELD[k] || k] = v;
        setErrors(mapped);
      }
      setSendError(res.message || c.errorMessage);
      return;
    }
    setStep(total + 1);
    track('track', c.eventLeadName || 'Lead');
    track('trackCustom', c.eventLeadCustomName || 'LeadHandwerk');
    goTo(res.redirect || c.redirectUrl, 350);
  }

  const current = phase === 'questions' ? list[step] : null;
  const currentOptions = current ? buildOptions(current) : [];
  const progress = phase === 'questions' ? (step / (total + 1)) * 100 : phase === 'contact' ? (total / (total + 1)) * 100 : 100;

  const input = (key: 'firstName' | 'lastName' | 'betrieb' | 'email' | 'phone', id: string, label: string, full: boolean, type = 'text', autoComplete?: string) => (
    <div className={`${styles.field} ${full ? styles.fieldFull : ''}`}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input
        id={id}
        name={key}
        type={type}
        className={`${styles.input} ${errors[key] ? styles.inputError : ''}`}
        value={form[key]}
        onChange={(e) => setField(key, e.target.value)}
        aria-invalid={!!errors[key]}
        aria-describedby={errors[key] ? id + '-err' : undefined}
        aria-required="true"
        autoComplete={autoComplete}
      />
      {errors[key] ? <span className={styles.errorText} id={id + '-err'}>{errors[key]}</span> : null}
    </div>
  );

  return (
    <Card variant="raised" padding="lg" accentTop>
      <div className={styles.panelHead}>
        <p className={styles.panelTitle}>{c.panelEyebrow}</p>
        {phase === 'questions' && total > 1 ? (
          <Text size="xs" tone="muted" as="span">
            {c.progressLabel} {step + 1} {c.progressOf} {total + 1}
          </Text>
        ) : null}
      </div>

      <div
        className={styles.progressTrack}
        role="progressbar"
        aria-label="Fortschritt"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
      >
        <div className={styles.progressFill} style={{ width: progress + '%' }} />
      </div>

      <div className={styles.coverRow}>
        {cover ? (
          <img
            className={styles.coverImg}
            src={cover.src}
            srcSet={cover.srcSet}
            sizes="78px"
            width={78}
            height={106}
            alt=""
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className={styles.coverFallback}><Icon name="document" size={24} /></span>
        )}
        <Text size="sm" tone="muted" as="span">{c.coverCaption}</Text>
      </div>

      <div className={styles.stage} aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          {phase === 'questions' && current ? (
            <motion.div key={'q' + step} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.24 }}>
              <Title as="h2" size="sm" className={styles.question}>{current.question}</Title>
              <div className={styles.options}>
                {currentOptions.map((o, i) => (
                  <button className={styles.optionBtn} key={i} type="button" onClick={() => pick(step, o.label)}>
                    <span className={styles.optionKey} aria-hidden="true">{OPTION_KEYS[i]}</span>
                    <span>{o.label}</span>
                  </button>
                ))}
              </div>
              <Text size="xs" tone="muted" className={styles.reassure}>{c.reassurance}</Text>
            </motion.div>
          ) : null}

          {phase === 'contact' ? (
            <motion.form
              key="contact"
              noValidate
              onSubmit={submit}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.24 }}
            >
              <Text kicker tone="accent" as="span">{c.contactEyebrow}</Text>
              <Title as="h2" size="sm" className={styles.question} style={{ marginTop: 10 }}>{c.contactTitle}</Title>

              <div className={styles.teaser}>
                <span className={styles.teaserIcon}><Icon name="document" size={17} /></span>
                <Text size="sm" as="span">{c.teaserText}</Text>
              </div>

              <Text size="sm" tone="muted">{c.contactNote}</Text>

              <div className={styles.formGrid}>
                {input('firstName', 'np-first', c.firstNameLabel, false, 'text', 'given-name')}
                {input('lastName', 'np-last', c.lastNameLabel, false, 'text', 'family-name')}
                {input('betrieb', 'np-betrieb', c.betriebLabel, true, 'text', 'organization')}
                {input('email', 'np-email', c.emailLabel, true, 'email', 'email')}
                {input('phone', 'np-phone', c.phoneLabelField, true, 'tel', 'tel')}
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
                  name="consent"
                  className={styles.checkbox}
                  checked={form.consent}
                  onChange={(e) => setField('consent', e.target.checked)}
                  aria-invalid={!!errors.consent}
                  aria-describedby={errors.consent ? 'np-consent-err' : undefined}
                />
                <Text size="xs" tone="muted" as="span">{c.consentText}</Text>
              </label>
              {errors.consent ? <span className={styles.errorText} id="np-consent-err">{errors.consent}</span> : null}

              <div className={styles.submitRow}>
                <Button variant="primary" size="md" type="submit" disabled={sending} className={vl.tap}>
                  {sending ? c.submittingLabel : c.submitLabel}
                </Button>
                {sendError ? <span className={styles.errorText} role="alert" style={{ display: 'block', marginTop: 8 }}>{sendError}</span> : null}
              </div>

              <Text size="xs" tone="muted" className={styles.formNote}>{c.privacyNote}</Text>
            </motion.form>
          ) : null}

          {phase === 'success' ? (
            <motion.div key="success" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <span className={styles.successIcon}>
                <Icon name="check" size={22} />
              </span>
              <Text kicker tone="muted" as="span">{c.successEyebrow}</Text>
              <Title as="h2" size="md" style={{ marginTop: 8, marginBottom: 12 }}>{c.successTitle}</Title>
              <Text size="sm" tone="muted">{c.successBody}</Text>

              <div className={styles.successCtas}>
                {c.pdfHref ? <PdfButton href={c.pdfHref} label={c.pdfLabel} size="md" /> : null}
                <a className={styles.successSecondary} href={c.successCtaHref}>{c.successCtaLabel}</a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {phase !== 'success' ? (
          <div className={styles.footRow}>
            <button className={styles.backBtn} type="button" onClick={goBack} disabled={step === 0}>
              <span className={styles.backBtnIcon}><Icon name="arrowRight" size={14} /></span>
              <span>{c.backLabel}</span>
            </button>
            <a className={styles.secondaryOptin} href={c.secondaryOptinHref}>{c.secondaryOptinLabel}</a>
          </div>
        ) : null}
      </div>
    </Card>
  );
}
