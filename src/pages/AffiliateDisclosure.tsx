import { Helmet } from 'react-helmet-async';

export default function AffiliateDisclosure() {
  return (
    <div className="bg-[var(--color-warm-white)] min-h-screen pb-24 pt-32 px-6 md:px-12">
      <Helmet>
        <title>Affiliate Disclosure — The Cozy Canvas</title>
        <meta name="description" content="FTC compliant affiliate disclosure for The Cozy Canvas." />
      </Helmet>

      <div className="max-w-3xl mx-auto bg-[var(--color-cream)] p-8 md:p-12 shadow-sm border border-[rgba(92,61,46,0.05)]">
        <h1 className="font-serif text-[2.5rem] text-[var(--color-mocha)] mb-8 border-b border-[rgba(196,149,106,0.3)] pb-6">
          Affiliate Disclosure
        </h1>

        <div className="space-y-6 text-[0.85rem] leading-[1.9] text-[var(--color-muted)]">
          <p>
            This Affiliate Compensation Disclosure is provided by The Cozy Canvas ("we", "us", or "our"), 
            in compliance with the Federal Trade Commission's (FTC) guidelines. 
          </p>

          <h3 className="font-serif text-xl text-[var(--color-mocha)] mt-8">Amazon Associates Program</h3>
          <p>
            The Cozy Canvas is a participant in the Amazon Services LLC Associates Program, an affiliate 
            advertising program designed to provide a means for sites to earn advertising fees by advertising 
            and linking to Amazon.com. We earn commission from Amazon affiliate links inside our blog posts.
          </p>

          <h3 className="font-serif text-xl text-[var(--color-mocha)] mt-8">How it works</h3>
          <p>
            Links on this website that lead to products are marked with a button such as "Check on Amazon →". 
            When you click these links and make a purchase, we may receive a small commission from the retailer.
            <strong> The price you pay is NOT affected by this commission.</strong> You will pay the same price 
            whether you use our affiliate link or go directly to the vendor's website.
          </p>

          <h3 className="font-serif text-xl text-[var(--color-mocha)] mt-8">Our Commitment</h3>
          <p>
            We only recommend products from trusted, established brands that we genuinely believe will add value to your home and space.
          </p>
          <p className="mt-4">
            That said, all purchases are made directly with the respective brand or retailer — The Cozy Canvas acts solely as an affiliate and has no control over product quality, shipping, returns, or after-sale support.
          </p>
          <p className="mt-4">
            If you face any issue with a product — including returns, refunds, damaged items, or delivery problems — please contact the brand or seller directly from whom you made the purchase. We recommend verifying product details, return policies, and seller terms before completing any purchase.
          </p>
          <p className="mt-4">
            We only feature products from reputable brands. However, as an affiliate, The Cozy Canvas is not liable for any loss, dispute, or dissatisfaction arising from your purchase. Your transaction is solely between you and the retailer.
          </p>

          <div className="mt-12 pt-6 border-t border-[rgba(196,149,106,0.3)] text-[0.75rem]">
            <p><strong>Last Updated:</strong> May 2026</p>
            <p className="mt-2">If you have any questions regarding this policy, please contact us at: <a href="mailto:finishertechai@gmail.com" className="text-[var(--color-mocha)] underline decoration-[rgba(92,61,46,0.3)] underline-offset-4">finishertechai@gmail.com</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
