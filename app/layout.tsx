import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Beacon } from "@/components/Beacon";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import { getLegalSettings, getSiteSettings, getThemeSettings } from "@/lib/db";
import { JsonLd } from "@/components/JsonLd";
import { websiteJsonLd } from "@/lib/jsonld";

/* Font audit (speed pass, Nov 2026): the site uses Fraunces 600 for
   headlines, Fraunces 400 italic for hooks/taglines, and Inter 400/600
   for body + semibold UI — every face below is genuinely rendered
   somewhere. Preload only the two files every first paint needs
   (Fraunces 600 headlines, Inter 400 body); the italic and Inter 600
   files still load on demand via font-display: swap, just without
   competing with the hero image for first-load bandwidth. */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
  preload: false,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

/* SEO defaults for the whole site. The branded share image
   (public/og-default.png, 1200×630) is the fallback social image wherever
   a page has no specific one; posts and collections override with their
   own imagery. Google Search Console verification is env-driven: set
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel and the meta tag renders
   automatically — no code change needed. */
const OG_DEFAULT_IMAGE = {
  url: "/og-default.png",
  width: 1200,
  height: 630,
  alt: "The Cozy Canvas — cozy home decor ideas and finds",
};

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings();
  return {
    metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
    title: {
      default: site.seoDefaults.title,
      template: "%s | The Cozy Canvas",
    },
    description: site.seoDefaults.description,
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      title: site.seoDefaults.title,
      description: site.seoDefaults.description,
      images: [OG_DEFAULT_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: site.seoDefaults.title,
      description: site.seoDefaults.description,
      images: [OG_DEFAULT_IMAGE.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    },
  };
}

export const revalidate = 60;

/* ARCHITECTURE §4.1: layout reads settings/theme and injects the CSS
   variables on <html> — editing a color in the admin Design tab restyles
   the whole site. Values fall back to the globals.css defaults. */
function themeStyle(theme: Awaited<ReturnType<typeof getThemeSettings>>): CSSProperties {
  const c = theme.colors;
  const style: Record<string, string> = {
    "--c-primary": c.primary,
    "--c-canvas": c.canvas,
    "--c-blush": c.blush,
    "--c-lavender": c.lavender,
    "--c-sage": c.sage,
    "--c-ink": c.ink,
    "--c-dark": c.dark,
  };
  return style as CSSProperties;
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const [site, theme, legal] = await Promise.all([
    getSiteSettings(),
    getThemeSettings(),
    getLegalSettings(),
  ]);

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
      style={themeStyle(theme)}
    >
      <body>
        <JsonLd data={websiteJsonLd(site)} />
        <Nav siteName={site.name} />
        <main>{children}</main>
        <Footer
          siteName={site.name}
          tagline={site.tagline}
          pinterestUrl={site.pinterestUrl}
          footerDisclaimer={legal.footerDisclaimer}
        />
        <Beacon enabled={site.analyticsOn} />
        <NewsletterPopup />
      </body>
    </html>
  );
}
