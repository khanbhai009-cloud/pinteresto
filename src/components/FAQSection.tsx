import { useState } from 'react';
import type { FAQ } from '../lib/types';
import { motion, AnimatePresence } from 'motion/react';

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-20">
      <div className="text-center mb-8">
        <div className="text-[0.6rem] tracking-[0.25em] uppercase text-[var(--color-honey)] font-semibold mb-2">Good questions</div>
        <h3 className="font-serif text-[1.8rem] text-[var(--color-mocha)]">
          Frequently Asked Questions
        </h3>
      </div>
      <div className="flex flex-col gap-3">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} faq={faq} defaultOpen={idx === 0} />
        ))}
      </div>
    </div>
  );
}

function FAQItem({ faq, defaultOpen = false }: { faq: FAQ; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      className={`rounded-2xl border px-5 py-4 transition-colors duration-300 ${isOpen ? 'bg-[var(--color-cream)] border-[var(--color-sunshine)]/70' : 'bg-white/60 border-[var(--color-sand)]'}`}
    >
      <button
        className="w-full text-left text-[0.95rem] md:text-[1.05rem] font-medium text-[var(--color-mocha)] tracking-wide cursor-pointer flex justify-between items-center gap-4 bg-transparent border-0"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {faq.question}
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-[var(--color-honey)] shrink-0 text-lg leading-none">
          ↓
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <p className="text-[0.9rem] md:text-[1rem] leading-[1.75] text-[#4a3728] pt-3">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
