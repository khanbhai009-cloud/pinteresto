"use client";

import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";

/* Footer — design guide §5 dark band, ported from the Vite redesign.
   Bottom row carries the verbatim Associates sentence (ARCHITECTURE §11.2).
   The newsletter form is live: the shared NewsletterForm posts to
   /api/subscribe (email-collection amendment, 2026-11-01), source="footer". */
interface FooterProps {
  siteName: string;
  tagline: string;
  pinterestUrl: string;
  footerDisclaimer: string;
}

export function Footer({ siteName, tagline, pinterestUrl, footerDisclaimer }: FooterProps) {
  return (
    <footer className="bg-[var(--c-dark)] text-[var(--c-on-dark)] px-6 md:px-12 py-14">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10">
          <div>
            <div className="font-serif text-[24px] font-semibold mb-4">{siteName}</div>
            <p className="text-[13px] leading-[1.6] text-[var(--c-on-dark-muted)] mb-6 max-w-sm">
              {tagline} Curated decor ideas and honest product picks — from Pinterest pin to
              purchase, beautifully.
            </p>
            <NewsletterForm source="footer" className="max-w-xs w-full" />
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.12em] uppercase text-[var(--c-on-dark-muted)] font-semibold mb-4">
              Quick Links
            </h4>
            <div className="space-y-3">
              <Link href="/" className="block text-[13px] text-[var(--c-on-dark)] hover:text-[var(--c-primary-soft)] transition-colors">Home</Link>
              <Link href="/collections" className="block text-[13px] text-[var(--c-on-dark)] hover:text-[var(--c-primary-soft)] transition-colors">Collections</Link>
              <Link href="/blog" className="block text-[13px] text-[var(--c-on-dark)] hover:text-[var(--c-primary-soft)] transition-colors">Blog</Link>
              <Link href="/about" className="block text-[13px] text-[var(--c-on-dark)] hover:text-[var(--c-primary-soft)] transition-colors">About</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.12em] uppercase text-[var(--c-on-dark-muted)] font-semibold mb-4">
              Legal
            </h4>
            <div className="space-y-3">
              <Link href="/privacy-policy" className="block text-[13px] text-[var(--c-on-dark)] hover:text-[var(--c-primary-soft)] transition-colors">Privacy Policy</Link>
              <Link href="/affiliate-disclosure" className="block text-[13px] text-[var(--c-on-dark)] hover:text-[var(--c-primary-soft)] transition-colors">Affiliate Disclosure</Link>
              <Link href="/contact" className="block text-[13px] text-[var(--c-on-dark)] hover:text-[var(--c-primary-soft)] transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <a
            href={pinterestUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-transparent border-[1.5px] border-[rgba(251,247,242,0.35)] text-[var(--c-on-dark)] rounded-[var(--r-pill)] px-5 py-[10px] text-[13px] font-semibold transition-colors hover:bg-[rgba(251,247,242,0.08)]"
          >
            Follow on Pinterest
          </a>
        </div>

        <div className="mt-10 border-t border-[rgba(251,247,242,0.14)] pt-6 flex flex-col md:flex-row justify-between items-center text-[12px] text-[var(--c-on-dark-muted)]">
          <div>&copy; {new Date().getFullYear()} {siteName}</div>
          <div className="mt-4 md:mt-0 text-center md:text-right">{footerDisclaimer}</div>
        </div>
      </div>
    </footer>
  );
}
