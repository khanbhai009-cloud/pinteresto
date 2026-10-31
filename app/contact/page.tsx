import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { getSiteSettings } from "@/lib/db";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Contact | The Cozy Canvas",
  description: "Say hello to The Cozy Canvas — questions, pin requests and kind words welcome.",
};

/* Footer-only page (guide §9). There is deliberately no public form
   endpoint: ARCHITECTURE §4.3 allows exactly one public route (/api/t),
   so contact happens over email and Pinterest messages. */
export default async function ContactPage() {
  const site = await getSiteSettings();
  return (
    <section className="pt-[96px] md:pt-[112px] pb-16 px-4 md:px-8" style={{ background: "var(--c-canvas)" }}>
      <div className="max-w-[640px] mx-auto text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--c-primary)]">
          Contact
        </p>
        <h1 className="font-serif text-[32px] md:text-[44px] font-semibold text-[var(--c-ink)] leading-[1.15] mt-2">
          Say Hello
        </h1>
        <p className="text-[16px] leading-[1.6] text-[var(--c-ink-muted)] mt-4">
          A question about a guide, a corner you would love us to recreate, or just a kind word —
          we read everything. The fastest way to reach us is a message on Pinterest; for anything
          longer, email works beautifully.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Button href="mailto:finishertechai@gmail.com">Email Us</Button>
          <Button variant="ghost" href={site.pinterestUrl} external>
            Message on Pinterest
          </Button>
        </div>
      </div>
    </section>
  );
}
