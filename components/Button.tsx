import type { ReactNode } from "react";
import Link from "next/link";

/* Ported from the Vite redesign (guide §5): primary = Rose Clay pill,
   ghost = 1.5px primary outline. Colors only from CSS variables. */
interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost";
  href?: string; // internal ("/…") or external ("https://…")
  onClick?: () => void;
  fullWidth?: boolean;
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  fullWidth,
  external = false,
  className,
  type = "button",
}: ButtonProps) {
  const combinedClassName = [
    "inline-flex items-center justify-center gap-2 rounded-[var(--r-pill)]",
    "p-[14px_24px] min-h-[48px] text-[15px] font-semibold no-underline cursor-pointer",
    "transition-all duration-200 active:scale-[0.97] whitespace-nowrap",
    variant === "primary"
      ? "bg-[var(--c-primary)] text-[var(--c-on-primary)] border-[1.5px] border-transparent active:bg-[var(--c-primary-pressed)]"
      : "bg-transparent border-[1.5px] border-[var(--c-primary)] text-[var(--c-primary)]",
    fullWidth ? "w-full" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href && (external || href.startsWith("http"))) {
    return (
      <a
        href={href}
        className={combinedClassName}
        onClick={onClick}
        target="_blank"
        rel="sponsored nofollow noopener"
      >
        {children}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
}
