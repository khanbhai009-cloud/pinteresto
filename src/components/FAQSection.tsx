import { useState } from 'react';
import type { FAQ } from '../lib/types';
import { motion, AnimatePresence } from 'motion/react';

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-16">
      <h3 className="font-serif text-[1.8rem] text-[var(--color-mocha)] mb-7 text-center">
        Frequently Asked Questions
      </h3>
      <div className="border-t border-[rgba(196,149,106,0.25)]">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} faq={faq} />
        ))}
      </div>
    </div>
  );
}

function FAQItem({ faq }: { faq: FAQ; key?: string | number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[rgba(196,149,106,0.25)] py-5">
      <div 
        className="text-[0.82rem] font-medium text-[var(--color-mocha)] mb-2.5 tracking-wide cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {faq.question}
        <span className="text-[var(--color-accent)] transform transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ↓
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-[0.78rem] leading-[1.85] text-[var(--color-muted)] pt-2 pb-2">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
