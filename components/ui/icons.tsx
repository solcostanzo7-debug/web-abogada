type IconProps = {
  className?: string;
};

export function IconWork({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="7" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3.5 12.5h17" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 12.5v1.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconCar({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4.5 16v-3.2c0-.5.2-1 .55-1.35l1.6-1.6c.35-.35.83-.55 1.33-.55h7.1c.5 0 .98.2 1.33.55l1.6 1.6c.35.35.55.85.55 1.35V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="3" y="16" width="18" height="3.2" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7.5" cy="19.4" r="1.4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.5" cy="19.4" r="1.4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.7 11.8h10.6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconShield({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5l7 2.5v5.2c0 4.3-2.9 7.7-7 9.3-4.1-1.6-7-5-7-9.3V6l7-2.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 12.2l2 2 4-4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWhatsapp({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.02 2.5c-5.26 0-9.52 4.26-9.52 9.52 0 1.68.44 3.3 1.28 4.73L2.5 21.5l4.87-1.27a9.5 9.5 0 0 0 4.65 1.2h.01c5.25 0 9.52-4.26 9.52-9.52 0-2.54-.99-4.93-2.79-6.73A9.45 9.45 0 0 0 12.02 2.5zm0 17.32h-.01a7.9 7.9 0 0 1-4.02-1.1l-.29-.17-2.89.76.77-2.82-.19-.29a7.9 7.9 0 0 1-1.21-4.18c0-4.37 3.56-7.93 7.94-7.93 2.12 0 4.11.83 5.61 2.33a7.87 7.87 0 0 1 2.32 5.6c0 4.38-3.56 7.94-7.93 7.94l-.08-.14zm4.34-5.94c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.18-1.39-1.31-1.63-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.19 1.1.16 1.52.1.46-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
    </svg>
  );
}

export function IconInstagram({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconLinkedin({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 10.5V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="7.7" r="1" fill="currentColor" />
      <path d="M11.5 16v-3.2c0-1.1.8-2 2-2s2 .9 2 2V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11.5 10.5V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMail({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 7l7.5 5.5L19.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPin({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21.5s6.5-6.14 6.5-11A6.5 6.5 0 0 0 5.5 10.5c0 4.86 6.5 11 6.5 11z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.5" r="2.3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconClock({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMenu({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconPlus({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconArrowRight({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCheck({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconQuote({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.5 6.5c-3 1-5 3.6-5 7.1 0 2.6 1.7 4.4 3.8 4.4 1.9 0 3.3-1.4 3.3-3.3 0-1.7-1.2-3-2.8-3.2.3-1.7 1.6-3 3.2-3.6l-2.5-1.4zm9 0c-3 1-5 3.6-5 7.1 0 2.6 1.7 4.4 3.8 4.4 1.9 0 3.3-1.4 3.3-3.3 0-1.7-1.2-3-2.8-3.2.3-1.7 1.6-3 3.2-3.6l-2.5-1.4z" />
    </svg>
  );
}

export function IconStar({ className = "h-5 w-5", filled = false }: IconProps & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} className={className} aria-hidden="true">
      <path
        d="M12 4.2l2.24 4.9 5.36.62-4 3.72.99 5.36L12 15.9l-4.6 2.9.99-5.36-4-3.72 5.36-.62L12 4.2z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const practiceIcons = {
  work: IconWork,
  car: IconCar,
  shield: IconShield,
};
