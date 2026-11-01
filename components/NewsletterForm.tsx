"use client";

/* Newsletter signup — email collection amendment (user instruction,
   2026-11-01): visitors submit ONLY an email, no account, no login.
   Posts to POST /api/subscribe; emails land in Firestore `subscribers`
   and will be emailed later via Resend (see USER-STEPS.md §9).
   Styling: design tokens only, joined-pill form for dark bands (homepage
   Pinterest/Newsletter band + footer). A hidden honeypot field ("website")
   rides along — real visitors never see or fill it; the server silently
   drops submissions that do. Draft generated via the user's API rotation
   (Groq openai/gpt-oss-120b) and adapted to this codebase's conventions. */
import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";

interface NewsletterFormProps {
  /** Where the signup happened, stored with the email (e.g. "homepage"). */
  source?: string;
  className?: string;
}

export function NewsletterForm({ source = "homepage", className }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — must stay empty
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, website }),
      });
      const data = (await res.json().catch(() => null)) as { message?: string } | null;
      if (res.ok) {
        setStatus("done");
      } else {
        setErrorMsg(data?.message || "Something went wrong — please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Something went wrong — please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className={`${className ?? ""} flex items-center gap-2 text-[var(--c-on-dark)]`} role="status">
        <Check size={20} className="shrink-0 text-[var(--c-primary-soft)]" />
        <p className="text-[14px] leading-[1.5]">
          You are in! Cozy ideas are on their way to your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${className ?? ""} flex flex-col gap-2`} noValidate>
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
          className="flex-1 min-w-0 bg-transparent border border-[rgba(251,247,242,0.25)] border-r-0 rounded-l-full px-4 md:px-5 py-2.5 text-[13px] text-[var(--c-on-dark)] outline-none placeholder:text-[var(--c-on-dark-muted)] focus:border-[var(--c-primary)] transition-colors"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 bg-[var(--c-primary)] border border-[var(--c-primary)] rounded-r-full px-4 md:px-5 py-2.5 text-[11px] tracking-[0.12em] uppercase text-[var(--c-on-primary)] cursor-pointer font-semibold transition-colors hover:bg-[var(--c-primary-pressed)] hover:border-[var(--c-primary-pressed)] disabled:opacity-70"
        >
          {status === "sending" ? "Joining…" : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="text-[12px] leading-[1.5] text-[var(--c-primary-soft)]">
          {errorMsg}
        </p>
      )}
      <p className="text-[12px] leading-[1.5] text-[var(--c-on-dark-muted)]">
        One cozy email now and then — new guides and finds. Unsubscribe anytime, and we
        never share your email.
      </p>
    </form>
  );
}
