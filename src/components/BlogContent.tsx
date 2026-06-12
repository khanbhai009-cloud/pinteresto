import type { Paragraph, Product } from '../lib/types';
import { AffiliateCTA } from './AffiliateCTA';

export function BlogContent({ paragraphs, products }: { paragraphs: Paragraph[], products: Product[] }) {
  return (
    <div className="blog-content">
      {paragraphs.map((para) => {
        // Find product that should be inserted after this paragraph
        const relatedProduct = products.find(p => p.insert_after_para === para.id);
        
        return (
          <div key={para.id} className="paragraph-block" data-para-id={para.id}>
            <p className="text-lg md:text-[1.25rem] leading-[2.1] md:leading-[2.2] text-[var(--color-mocha)] md:text-[#3d2e24] mb-12 font-sans font-light tracking-wide md:tracking-normal selection:bg-[var(--color-sand)] selection:text-[var(--color-mocha)]">
              {para.text}
            </p>
            {relatedProduct && <AffiliateCTA product={relatedProduct} />}
          </div>
        );
      })}
    </div>
  );
}
