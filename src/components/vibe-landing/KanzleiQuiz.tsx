import React, { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Title from '../siteui/title';
import Text from '../siteui/text';
import Button from '../siteui/button';
import Badge from '../siteui/badge';
import Icon from '../siteui/icon';
import Card from '../siteui/card';
import { submitLead, track } from '../../lib/client';
import { EMAIL_RE, isFreemail } from './freemail';
import styles from './hero-kanzlei.module.css';
import vl from './vl.module.css';

/**
 * Kanzlei-IT-Risikocheck (Onepage-Formular ca140241…): 8 Fragen → Kontaktdaten → Ergebnis inline.
 * Pixel wie live: „RisikocheckGestartet“ (custom) bei der ersten Antwort, „Lead“ nach dem Absenden.
 */
export const KANZLEI_QUIZ_FORM_ID = 'ca140241-9de0-4de3-a53d-3569791503f5';
const OPTION_KEYS = ['A', 'B', 'C', 'D'];

type Option = { label: string; score: number; finding: string };

function buildOptions(q: any): Option[] {
  return [1, 2, 3, 4]
    .map((n) => ({ label: q['o' + n], score: Number(q['o' + n + 'Score']) || 0, finding: q['o' + n + 'Finding'] }))
    .filter((o) => o.label && String(o.label).trim().length > 0);
}

/** Server-Feldnamen → Formularfelder */
const SERVER_FIELD: Record<string, string> = { vorname: 'firstName', nachname: 'lastName', kanzlei: 'kanzlei', email: 'email', telefon: 'phone', consent: 'consent' };

export default function KanzleiQuiz({ content: c }: { content: Record<string, any> }) {
  const list: any[] = Array.isArray(c.questions) ? c.questions : [];
  const total = list.length;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Option>>({});
  const [form, setForm] = useState({ firstName: '', lastName: '', kanzlei: '', email: '', phone: '', consent: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const honeypot = useRef<HTMLInputElement>(null);
  const startedRef = useRef(false);

  const phase = step < total ? 'quiz' : step === total ? 'contact' : 'result';

  const score = useMemo(() => Object.values(answers).reduce((sum, a) => sum + (a ? a.score : 0), 0), [answers]);

  const tierList: any[] = Array.isArray(c.tiers) ? c.tiers : [];
  const tier = useMemo(() => {
    const sorted = [...tierList].sort((a, b) => (Number(a.maxScore) || 0) - (Number(b.maxScore) || 0));
    return sorted.find((t) => score <= (Number(t.maxScore) || 0)) || sorted[sorted.length - 1];
  }, [tierList, score]);

  const findings = useMemo(
    () =>
      Object.keys(answers)
        .map((k) => answers[Number(k)])
        .filter((a) => a && a.finding && String(a.finding).trim().length > 0 && a.score >= 2)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3),
    [answers],
  );

  const maxScore = useMemo(
    () =>
      list.reduce((sum, q) => {
        const opts = buildOptions(q);
        return sum + (opts.length ? Math.max(...opts.map((o) => o.score)) : 0);
      }, 0),
    [list],
  );

  function pick(index: number, option: Option) {
    if (!startedRef.current) {
      startedRef.current = true;
      track('trackCustom', c.eventStartName || 'RisikocheckGestartet');
    }
    setAnswers((prev) => ({ ...prev, [index]: option }));
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
    if (!form.kanzlei.trim()) next.kanzlei = c.requiredMessage;
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
    const values: Record<string, string | boolean> = {
      vorname: form.firstName.trim(),
      nachname: form.lastName.trim(),
      kanzlei: form.kanzlei.trim(),
      email: form.email.trim(),
      telefon: form.phone.trim(),
      consent: form.consent,
      risiko_score: String(score),
      risiko_stufe: tier ? tier.headline : '',
    };
    list.forEach((_q, i) => {
      if (i < 8) values['q' + (i + 1)] = answers[i] ? answers[i].label : '';
    });
    const res = await submitLead({ formId: KANZLEI_QUIZ_FORM_ID, values, honeypot: honeypot.current?.value });
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
  }

  const current = phase === 'quiz' ? list[step] : null;
  const currentOptions = current ? buildOptions(current) : [];
  const progress = phase === 'quiz' ? (step / (total + 1)) * 100 : phase === 'contact' ? (total / (total + 1)) * 100 : 100;
  const flaggedCount = Object.keys(answers).filter((k) => answers[Number(k)] && answers[Number(k)].score >= 2).length;
  const filledSegments = maxScore > 0 ? Math.round((score / maxScore) * 10) : 0;
  const toneClass = tier && tier.tone === 'good' ? styles.scoreSegGood : tier && tier.tone === 'alert' ? styles.scoreSegAlert : styles.scoreSegWarn;
  const badgeVariant = tier && tier.tone === 'good' ? 'light' : tier && tier.tone === 'alert' ? 'alert' : 'accent';

  const input = (key: 'firstName' | 'lastName' | 'kanzlei' | 'email' | 'phone', id: string, label: string, full: boolean, type = 'text', autoComplete?: string) => (
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
        <p className={styles.panelTitle}>{c.quizEyebrow}</p>
        {phase === 'quiz' ? (
          <Text size="xs" tone="muted" as="span">
            {c.progressLabel} {step + 1} {c.progressOf} {total}
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

      <div className={styles.stage} aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          {phase === 'quiz' && current ? (
            <motion.div key={'q' + step} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.24 }}>
              <Title as="h2" size="sm" className={styles.question}>{current.question}</Title>
              <div className={styles.options}>
                {currentOptions.map((o, i) => (
                  <button className={styles.optionBtn} key={i} type="button" onClick={() => pick(step, o)}>
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

              {flaggedCount > 0 ? (
                <div className={styles.teaser}>
                  <span className={styles.teaserIcon}><Icon name="alert" size={17} /></span>
                  <Text size="sm" as="span">{String(c.teaserText).replace('{n}', String(flaggedCount))}</Text>
                </div>
              ) : null}

              <Text size="sm" tone="muted">{c.contactNote}</Text>

              <div className={styles.formGrid}>
                {input('firstName', 'kc-first', c.firstNameLabel, false, 'text', 'given-name')}
                {input('lastName', 'kc-last', c.lastNameLabel, false, 'text', 'family-name')}
                {input('kanzlei', 'kc-kanzlei', c.kanzleiLabel, true, 'text', 'organization')}
                {input('email', 'kc-email', c.emailLabel, true, 'email', 'email')}
                {input('phone', 'kc-phone', c.phoneLabelField, true, 'tel', 'tel')}
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
                  aria-describedby={errors.consent ? 'kc-consent-err' : undefined}
                />
                <Text size="xs" tone="muted" as="span">{c.consentText}</Text>
              </label>
              {errors.consent ? <span className={styles.errorText} id="kc-consent-err">{errors.consent}</span> : null}

              <div className={styles.submitRow}>
                <Button variant="primary" size="md" type="submit" disabled={sending} className={vl.tap}>
                  {sending ? c.submittingLabel : c.submitLabel}
                </Button>
                {sendError ? <span className={styles.errorText} role="alert" style={{ display: 'block', marginTop: 8 }}>{sendError}</span> : null}
              </div>

              <Text size="xs" tone="muted" className={styles.formNote}>{c.privacyNote}</Text>
            </motion.form>
          ) : null}

          {phase === 'result' && tier ? (
            <motion.div key="result" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div className={styles.resultTier}>
                <Text kicker tone="muted" as="span">{c.resultEyebrow}</Text>
                <Badge variant={badgeVariant} size="sm">{tier.label}</Badge>
              </div>

              <Title as="h2" size="md">{tier.headline}</Title>

              <div className={styles.scoreBar} style={{ marginTop: 18 }} aria-hidden="true">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <span className={`${styles.scoreSeg} ${i < filledSegments ? toneClass : ''}`} key={i} />
                ))}
              </div>

              <Text size="sm" tone="muted">{tier.description}</Text>

              {findings.length ? (
                <>
                  <Text kicker tone="accent" as="span" style={{ display: 'inline-block', marginTop: 24 }}>{c.findingsTitle}</Text>
                  <ul className={styles.findingList}>
                    {findings.map((f, i) => (
                      <li className={styles.findingItem} key={i}>
                        <span className={styles.findingIcon}><Icon name="alert" size={17} /></span>
                        <Text size="sm" as="span">{f.finding}</Text>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              <Text size="sm" tone="muted" style={{ marginTop: 18 }}>{c.resultNote}</Text>

              <div className={styles.resultCtas}>
                <Button variant="primary" size="md" href={c.primaryCtaHref} className={vl.tap}>{c.primaryCtaLabel}</Button>
                <a className={styles.resultSecondary} href={c.secondaryCtaHref}>{c.secondaryCtaLabel}</a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {phase !== 'result' ? (
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
