import { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-plum text-cream hover:bg-plum-dark focus-visible:outline-plum shadow-[0_1px_2px_rgba(34,37,42,0.08)]",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/40 hover:bg-ink/5",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
};

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  type?: "button" | "submit";
  onClick?: () => void;
  target?: never;
  rel?: never;
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", className = "" } = props;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold leading-none transition-all duration-200 ease-out min-h-[48px] active:scale-[0.98]";
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
