"use client";

/* Timed email-capture popup (user instruction, 2026-11-01): if a visitor
   stays on the site ~20–30 seconds, a small signup card appears with a
   clear way to cut/close it. Non-modal by design — the page stays
   scrollable and usable behind it; ESC, the ✕ button and "No thanks" all
   dismiss it. Frequency capping (localStorage): a dismissal hides it for
   30 days; a successful signup hides it forever. Posts to the same
   POST /api/subscribe endpoint with the same handling (incl. honeypot) as
   components/NewsletterForm. Client-only: renders nothing during SSR and
   nothing until the timer fires. */
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Check, X } from "lucide-react";

const SHOW_AFTER_MS = 25_000; // ~25s on site before the card appears
const DISMISS_KEY = "cc-newsletter-popup-dismissed"; // timestamp (ms)
const DISMISS_DAYS = 30;
const SUBSCRIBED_KEY = "cc-newsletter-popup-subscribed"; // "1" once joined

function storageGet(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function storageSet(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* private mode etc. — popup just won't be capped */
  }
}

function shouldShow(): boolean {
  if (storageGet(SUBSCRIBED_KEY)) return false;
  const dismissedAt = Number(storageGet(DISMISS_KEY) || 0);
  if (dismissedAt && Date.now() - dismissedAt < DISMISS_DAYS * 24 * 60 * 60 * 1000) {
    return false;
  }
  return true;
}

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — must stay empty
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!shouldShow()) return;
    const t = setTimeout(() => setVisible(true), SHOW_AFTER_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, status]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  function dismiss() {
    if (status !== "done") storageSet(DISMISS_KEY, String(Date.now()));
    setVisible(false);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "popup", website }),
      });
      const data = (await res.json().catch(() => null)) as { message?: string } | null;
      if (res.ok) {
        setStatus("done");
        storageSet(SUBSCRIBED_KEY, "1");
        closeTimer.current = setTimeout(() => setVisible(false), 2600);
      } else {
        setErrorMsg(data?.message || "Something went wrong — please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Something went wrong — please try again.");
      setStatus("error");
    }
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Join the Cozy Canvas newsletter"
      className="cc-popup fixed z-50 inset-x-4 bottom-4 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[400px] rounded-[var(--r-lg)] border border-[var(--c-hairline)] bg-[var(--c-card)] p-6 shadow-[0_18px_44px_rgba(70,40,50,0.18)]"
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label="Close"
        className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full text-[var(--c-ink-muted)] cursor-pointer transition-colors hover:bg-[var(--c-blush)] hover:text-[var(--c-ink)]"
      >
        <X size={17} />
      </button>

      {status === "done" ? (
        <div className="flex items-start gap-2.5 pr-6" role="status">
          <Check size={20} className="mt-0.5 shrink-0 text-[var(--c-success)]" />
          <p className="text-[14px] leading-[1.55] text-[var(--c-ink)]">
            You are in! Cozy ideas are on their way to your inbox.
          </p>
        </div>
      ) : (
        <>
          <h2 className="font-serif text-[23px] font-semibold leading-[1.15] text-[var(--c-ink)] pr-6">
            Cozy ideas, straight to your inbox
          </h2>
          <p className="mt-1.5 text-[13.5px] leading-[1.55] text-[var(--c-ink-muted)]">
            Join the newsletter for new room guides and the finds behind our pins.
          </p>

          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2" noValidate>
            {/* Honeypot: off-screen, skipped by keyboard/screen readers. */}
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
            />
            <div className="flex w-full">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email Address"
                aria-label="Email address"
                className="flex-1 min-w-0 bg-[var(--c-canvas)] border border-[var(--c-hairline)] border-r-0 rounded-l-full px-4 py-2.5 text-[13px] text-[var(--c-ink)] outline-none placeholder:text-[var(--c-ink-faint)] focus:border-[var(--c-primary)] transition-colors"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="shrink-0 bg-[var(--c-primary)] border border-[var(--c-primary)] rounded-r-full px-4 py-2.5 text-[11px] tracking-[0.12em] uppercase text-[var(--c-on-primary)] cursor-pointer font-semibold transition-colors hover:bg-[var(--c-primary-pressed)] hover:border-[var(--c-primary-pressed)] disabled:opacity-70"
              >
                {status === "sending" ? "Joining…" : "Subscribe"}
              </button>
            </div>
            {status === "error" && (
              <p role="alert" className="text-[12px] leading-[1.5] text-[var(--c-danger)]">
                {errorMsg}
              </p>
            )}
            <p className="text-[12px] leading-[1.5] text-[var(--c-ink-faint)]">
              One cozy email now and then — new guides and finds. Unsubscribe anytime, and we
              never share your email.
            </p>
          </form>

          <button
            type="button"
            onClick={dismiss}
            className="mt-3 mx-auto block text-[12.5px] text-[var(--c-ink-muted)] underline underline-offset-2 cursor-pointer transition-colors hover:text-[var(--c-ink)]"
          >
            No thanks
          </button>
        </>
      )}
    </div>
  );
}
