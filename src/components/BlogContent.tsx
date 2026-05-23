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
            <p className="text-base md:text-lg leading-loose md:leading-loose text-[#4a3728] mb-8 font-light">
              {para.text}
            </p>
            {relatedProduct && <AffiliateCTA product={relatedProduct} />}
          </div>
        );
      })}
    </div>
  );
}
