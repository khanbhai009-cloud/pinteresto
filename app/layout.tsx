import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Beacon } from "@/components/Beacon";
import { getLegalSettings, getSiteSettings, getThemeSettings } from "@/lib/db";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteSettings();
  return {
    metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
    title: site.seoDefaults.title,
    description: site.seoDefaults.description,
    openGraph: {
      title: site.seoDefaults.title,
      description: site.seoDefaults.description,
      images: [{ url: site.seoDefaults.ogImage, width: 1000, height: 1500 }],
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
        <Nav siteName={site.name} />
        <main>{children}</main>
        <Footer
          siteName={site.name}
          tagline={site.tagline}
          pinterestUrl={site.pinterestUrl}
          footerDisclaimer={legal.footerDisclaimer}
        />
        <Beacon enabled={site.analyticsOn} />
      </body>
    </html>
  );
}
