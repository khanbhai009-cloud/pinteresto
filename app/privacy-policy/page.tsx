import type { Metadata } from "next";
import { getLegalSettings } from "@/lib/db";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Privacy Policy | The Cozy Canvas",
  description: "How The Cozy Canvas handles privacy: no accounts, no tracking cookies, anonymous aggregate counts only.",
};

/* Content lives in settings/legal (admin-editable, ARCHITECTURE §3). */
export default async function PrivacyPolicyPage() {
  const legal = await getLegalSettings();
  return (
    <section className="pt-[96px] md:pt-[112px] pb-16 px-4 md:px-8" style={{ background: "var(--c-canvas)" }}>
      <div className="max-w-[760px] mx-auto">
        <h1 className="font-serif text-[32px] md:text-[40px] font-semibold text-[var(--c-ink)] leading-[1.15]">
          Privacy Policy
        </h1>
        <div
          className="mt-6 space-y-4 text-[16px] leading-[1.6] text-[var(--c-ink)] [&>p]:mb-4"
          dangerouslySetInnerHTML={{ __html: legal.privacyHtml }}
        />
      </div>
    </section>
  );
}
