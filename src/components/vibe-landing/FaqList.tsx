import React, { useState } from 'react';
import AccordionItem from '../siteui/accordion-item';

/** FAQ-Akkordeon wie live: erste Frage offen, immer nur eine offen. */
export default function FaqList({ faqs, idPrefix = 'faq' }: { faqs: { question: string; answer: string }[]; idPrefix?: string }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <>
      {faqs.map((f, i) => (
        <AccordionItem
          key={i}
          id={`${idPrefix}-${i}`}
          question={f.question}
          answer={f.answer}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </>
  );
}
