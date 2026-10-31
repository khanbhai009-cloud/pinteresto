import { Info } from "lucide-react";
import Link from "next/link";

/* Guide §5 / ARCHITECTURE §11.2: always visible near the top of every post,
   before the first product. Never hidden or collapsed. The default text
   opens with the verbatim Associates sentence. */
interface DisclosureBoxProps {
  text?: string;
  className?: string;
}

export const DEFAULT_DISCLOSURE_TEXT =
  "As an Amazon Associate I earn from qualifying purchases. This post contains affiliate links — if you buy something through one of these links, we may earn a small commission at no extra cost to you. It helps us keep creating cozy inspiration.";

export function DisclosureBox({ text, className = "" }: DisclosureBoxProps) {
  return (
    <div
      className={`bg-[var(--c-disclosure-bg)] border border-[var(--c-disclosure-border)] rounded-[var(--r-md)] p-4 flex gap-2.5 items-start ${className}`}
    >
      <Info className="w-4 h-4 text-[var(--c-primary)] mt-0.5 shrink-0" />
      <p className="text-[13px] leading-[1.45] text-[var(--c-ink)]">
        {text || DEFAULT_DISCLOSURE_TEXT}{" "}
        <Link href="/affiliate-disclosure" className="underline text-[var(--c-primary)]">
          Read our full disclosure
        </Link>
      </p>
    </div>
  );
}
