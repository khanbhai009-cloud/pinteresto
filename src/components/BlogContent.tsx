import type { Paragraph, Product } from '../lib/types';
import { AffiliateCTA } from './AffiliateCTA';

export function BlogContent({ paragraphs, products }: { paragraphs: Paragraph[], products: Product[] }) {
  return (
    <div className="blog-content">
      {paragraphs.map((para) => {
        // Find product that should be inserted after this paragraph
        const relatedProduct = products.find(p => p.insert_after_para === para.id);
        
        return (
          <div key={para.id}>
            <p className="text-base md:text-[1.15rem] leading-[1.8] md:leading-[1.9] text-[#3d2e24] mb-8 font-normal tracking-[0.01em]">
              {para.text}
            </p>
            {relatedProduct && <AffiliateCTA product={relatedProduct} />}
          </div>
        );
      })}
    </div>
  );
}
