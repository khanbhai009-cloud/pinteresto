import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[var(--color-warm-white)] min-h-screen pb-24 pt-32 px-6 md:px-12">
      <Helmet>
        <title>Privacy Policy — Plinth</title>
        <meta name="description" content="Privacy Policy detailing data collection and usage practices for Plinth." />
      </Helmet>

      <div className="max-w-3xl mx-auto bg-[var(--color-cream)] p-8 md:p-12 shadow-sm border border-[rgba(92,61,46,0.05)]">
        <h1 className="font-serif text-[2.5rem] text-[var(--color-mocha)] mb-8 border-b border-[rgba(196,149,106,0.3)] pb-6">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-[0.85rem] leading-[1.9] text-[var(--color-muted)]">
          <p>
            Welcome to Plinth. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website.
          </p>

          <h3 className="font-serif text-xl text-[var(--color-mocha)] mt-8">1. Data We Collect</h3>
          <p>
            We collect minimal data to operate the site effectively:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 mb-4">
            <li><strong>Email Addresses:</strong> Collected only if you voluntarily sign up for our newsletter.</li>
            <li><strong>Usage Data:</strong> Basic analytics related to how you interact with our website.</li>
          </ul>

          <h3 className="font-serif text-xl text-[var(--color-mocha)] mt-8">2. How We Use Your Data</h3>
          <p>
            Your email is used strictly for sending you our newsletter updates. 
            <strong> We do not sell your personal data to any third parties.</strong>
          </p>

          <h3 className="font-serif text-xl text-[var(--color-mocha)] mt-8">3. Cookies</h3>
          <p>
            We use cookies for analytics purposes only (e.g., Google Analytics) to understand website traffic patterns. 
            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
          </p>

          <h3 className="font-serif text-xl text-[var(--color-mocha)] mt-8">4. Third Parties</h3>
          <p>
            This website relies on the following third-party services:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 mb-4">
            <li><strong>Firebase:</strong> Used for database and hosting infrastructure.</li>
            <li><strong>Vercel / Cloud Run:</strong> Used for application hosting.</li>
            <li><strong>Amazon Associates:</strong> Used for processing affiliate link clicks.</li>
          </ul>

          <h3 className="font-serif text-xl text-[var(--color-mocha)] mt-8">5. Your Rights</h3>
          <p>
            Depending on your location, you may have rights regarding your data, including the right to request access, correction, or erasure of your personal data.
          </p>

          <div className="mt-12 pt-6 border-t border-[rgba(196,149,106,0.3)] text-[0.75rem]">
            <p><strong>Last Updated:</strong> May 2026</p>
            <p className="mt-2">For any data requests or privacy questions, please contact us at: <a href="mailto:finishertechai@gmail.com" className="text-[var(--color-mocha)] underline decoration-[rgba(92,61,46,0.3)] underline-offset-4">finishertechai@gmail.com</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
