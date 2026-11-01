import type { Metadata } from "next";
import { DisclosureBox } from "@/components/DisclosureBox";
import { getLegalSettings } from "@/lib/db";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How affiliate links work on The Cozy Canvas — plainly explained.",
  alternates: { canonical: "/affiliate-disclosure" },
};

/* Content lives in settings/legal (admin-editable, ARCHITECTURE §3).
   This page must exist and stay linked (ARCHITECTURE §11.2). */
export default async function AffiliateDisclosurePage() {
  const legal = await getLegalSettings();
  return (
    <section className="pt-[96px] md:pt-[112px] pb-16 px-4 md:px-8" style={{ background: "var(--c-canvas)" }}>
      <div className="max-w-[760px] mx-auto">
        <h1 className="font-serif text-[32px] md:text-[40px] font-semibold text-[var(--c-ink)] leading-[1.15]">
          Affiliate Disclosure
        </h1>
        <DisclosureBox text={legal.disclosureText} className="mt-8" />
        <div
          className="mt-8 space-y-4 text-[16px] leading-[1.6] text-[var(--c-ink)] [&>p]:mb-4"
          dangerouslySetInnerHTML={{ __html: legal.affiliateDisclosureHtml }}
        />
      </div>
    </section>
  );
}
