/* The Cozy Canvas logo mark — original hand-drawn geometry: a rounded
   arch (a cozy doorway/window) cradling a small heart, in Rose Clay.
   The same paths live in app/icon.svg (favicon). Stroke/fill follow the
   --c-primary theme token so the admin Design tab recolours the brand. */
export function LogoMark({ size = 30, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="The Cozy Canvas logo"
      className={className}
      style={{ display: "block", flexShrink: 0 }}
    >
      <path
        d="M15 57 V31 a17 17 0 0 1 34 0 V57"
        fill="none"
        stroke="var(--c-primary, #B85468)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M32 46.2c-3.9-4.1-7.8-7.2-7.8-10.5 0-2.7 2-4.5 4.4-4.5 1.4 0 2.7.8 3.4 2 .7-1.2 2-2 3.4-2 2.4 0 4.4 1.8 4.4 4.5 0 3.3-3.9 6.4-7.8 10.5z"
        fill="var(--c-primary, #B85468)"
      />
    </svg>
  );
}
