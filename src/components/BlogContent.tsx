import { motion } from 'motion/react';
import type { Paragraph, Product } from '../lib/types';
import { AffiliateCTA } from './AffiliateCTA';

export function BlogContent({ paragraphs, products }: { paragraphs: Paragraph[], products: Product[] }) {
  return (
    <div className="blog-content">
      {paragraphs.map((para, idx) => {
        // Find product that should be inserted after this paragraph
        const relatedProduct = products.find(p => String(p.insert_after_para) === String(para.id));

        return (
          <div key={para.id} className="paragraph-block" data-para-id={para.id}>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={
                idx === 0
                  ? "text-lg md:text-[1.25rem] leading-[2.1] md:leading-[2.2] text-[var(--color-mocha)] md:text-[#3d2e24] mb-12 font-sans font-light tracking-wide md:tracking-normal selection:bg-[var(--color-sunshine)] selection:text-[var(--color-mocha)] first-letter:font-serif first-letter:text-[3.6em] first-letter:leading-[0.85] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[var(--color-honey)]"
                  : "text-lg md:text-[1.25rem] leading-[2.1] md:leading-[2.2] text-[var(--color-mocha)] md:text-[#3d2e24] mb-12 font-sans font-light tracking-wide md:tracking-normal selection:bg-[var(--color-sunshine)] selection:text-[var(--color-mocha)]"
              }
            >
              {para.text}
            </motion.p>
            {relatedProduct && <AffiliateCTA product={relatedProduct} />}
          </div>
        );
      })}
    </div>
  );
}
