/**
 * Reemplazo temporal de la fotografía profesional. No hay una foto real
 * provista, así que se usa un gráfico de marca (nunca una imagen de stock)
 * hasta que se cargue la fotografía definitiva vía next/image.
 */
export function PortraitPlaceholder({
  className = "",
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "about";
}) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-[1.75rem] bg-ink ${className}`}
    >
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`grad-${variant}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2c332f" />
            <stop offset="55%" stopColor="#22252a" />
            <stop offset="100%" stopColor="#171a1d" />
          </linearGradient>
          <radialGradient id={`glow-${variant}`} cx="30%" cy="20%" r="75%">
            <stop offset="0%" stopColor="#7a3b52" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#7a3b52" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#7a3b52" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="500" fill={`url(#grad-${variant})`} />
        <rect width="400" height="500" fill={`url(#glow-${variant})`} />
        <circle cx="330" cy="460" r="160" fill="#5f6f52" opacity="0.18" />
        <g opacity="0.5" stroke="#f1eae0" strokeWidth="1">
          <path d="M0 120 L400 60" opacity="0.12" />
          <path d="M0 420 L400 470" opacity="0.12" />
        </g>
      </svg>
      <div className="relative flex h-full min-h-[22rem] flex-col items-center justify-center gap-3 px-8 py-16 text-center">
        <span className="font-display text-[5rem] italic leading-none text-cream/90">
          SC
        </span>
        <span className="max-w-[13rem] text-xs font-medium uppercase tracking-[0.16em] text-cream/60">
          Fotografía profesional — a incorporar
        </span>
      </div>
    </div>
  );
}
