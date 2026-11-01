"use client";

/* Navigation — design guide §5 + HOMEPAGE-SPEC: logo left in Fraunces 600,
   links Home / Collections / Blog / About, primary "Explore" pill on the
   right, hairline border, canvas glass background, sticky. Mobile: hamburger
   opening a full-height sheet. The public site carries NO admin/login links
   (ARCHITECTURE §1 rule 2 — the admin panel is a separate app). */
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Nav({ siteName = "The Cozy Canvas" }: { siteName?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-16"
      style={{
        background: "color-mix(in srgb, var(--c-canvas) 85%, transparent)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--c-hairline)",
        boxShadow: scrolled ? "var(--shadow-card-soft)" : "none",
      }}
    >
      <div className="max-w-[1200px] mx-auto h-full px-4 md:px-8 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-serif font-semibold text-[20px] md:text-[22px] text-[var(--c-ink)] no-underline shrink-0"
        >
          {siteName}
        </Link>

        <nav className="hidden md:flex items-center gap-7" aria-label="Main">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14px] no-underline transition-colors pb-0.5"
              style={{
                color: isActive(l.href) ? "var(--c-primary)" : "var(--c-ink-muted)",
                borderBottom: isActive(l.href)
                  ? "2px solid var(--c-primary)"
                  : "2px solid transparent",
                fontWeight: isActive(l.href) ? 600 : 400,
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/collections"
            className="hidden md:inline-flex items-center justify-center rounded-[var(--r-pill)] bg-[var(--c-primary)] text-[var(--c-on-primary)] text-[14px] font-semibold px-5 min-h-[40px] no-underline transition active:scale-[0.97]"
          >
            Explore
          </Link>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[var(--c-ink)]"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col px-6 pt-6 gap-1"
          style={{ background: "var(--c-canvas)" }}
        >
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-serif text-[26px] font-semibold py-3 no-underline"
              style={{
                color: isActive(l.href) ? "var(--c-primary)" : "var(--c-ink)",
                borderBottom: "1px solid var(--c-hairline)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/collections"
            className="mt-6 inline-flex items-center justify-center rounded-[var(--r-pill)] bg-[var(--c-primary)] text-[var(--c-on-primary)] text-[15px] font-semibold px-6 min-h-[48px] no-underline"
          >
            Explore Collections
          </Link>
        </div>
      )}
    </header>
  );
}
