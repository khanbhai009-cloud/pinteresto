import Link from "next/link";

/* Ported from the Vite redesign (guide §5): 36px pill; selected = primary-soft. */
interface ChipProps {
  label: string;
  selected?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Chip({ label, selected = false, href, onClick, className }: ChipProps) {
  const combinedClassName = [
    "inline-flex items-center justify-center h-9 px-4 rounded-[var(--r-pill)]",
    "whitespace-nowrap transition-colors duration-200 cursor-pointer text-[13px] no-underline",
    selected
      ? "bg-[var(--c-primary-soft)] border border-transparent text-[var(--c-primary)] font-semibold"
      : "bg-[var(--c-card)] border border-[var(--c-hairline)] text-[var(--c-ink)] font-normal",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {label}
      </Link>
    );
  }
  return (
    <button type="button" className={combinedClassName} onClick={onClick}>
      {label}
    </button>
  );
}
