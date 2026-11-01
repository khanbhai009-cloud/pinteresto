import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { getSiteSettings } from "@/lib/db";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "About",
  description: "The story behind The Cozy Canvas — cozy corners, honest picks, and the pins that started it all.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | The Cozy Canvas",
    description: "The story behind The Cozy Canvas — cozy corners, honest picks, and the pins that started it all.",
  },
};

export default async function AboutPage() {
  const site = await getSiteSettings();
  return (
    <section className="pt-[96px] md:pt-[112px] pb-16 px-4 md:px-8" style={{ background: "var(--c-blush)" }}>
      <div className="max-w-[760px] mx-auto text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--c-primary)]">
          About
        </p>
        <h1 className="font-serif text-[32px] md:text-[44px] font-semibold text-[var(--c-ink)] leading-[1.15] mt-2">
          {site.name}
        </h1>
        <p className="font-serif italic text-[18px] leading-[1.4] text-[var(--c-ink-muted)] mt-4">
          {site.tagline}
        </p>
        <div className="mt-8 rounded-[var(--r-lg)] overflow-hidden shadow-[var(--shadow-image-fan)]">
          <Image
            src="https://brroybwnppxbouxqqofz.supabase.co/storage/v1/object/public/The%20cozy%20Canvas/gar1.webp"
            alt="A thatched cottage beside a lily pond — the cozy corner that started The Cozy Canvas"
            width={1000}
            height={1250}
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
        <div className="text-left mt-10 space-y-4 text-[16px] leading-[1.6] text-[var(--c-ink)]">
          <p>
            The Cozy Canvas began as a Pinterest board full of little corners we could not stop
            saving — a reading nook under fairy lights, a balcony swallowed by wisteria, a bed
            that looks like a cloud. Friends kept asking where the pieces came from, so we started
            writing the answers down.
          </p>
          <p>
            Every guide here recreates one of those looks piece by piece: the rug, the light, the
            layers. We only feature products that genuinely fit the rooms in the pins, and we say
            plainly when a link is an affiliate link — that small commission is how this little
            site keeps running, at no extra cost to you.
          </p>
          <p>
            No showroom perfection, no cold minimalism — just warm, lived-in, huggable homes, one
            corner at a time.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          <Button href="/collections">Explore Collections</Button>
          <Button variant="ghost" href={site.pinterestUrl} external>
            Follow on Pinterest
          </Button>
        </div>
      </div>
    </section>
  );
}
