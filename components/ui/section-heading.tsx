export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
      data-reveal
    >
      {eyebrow ? (
        <span className="block font-sans text-sm font-semibold uppercase tracking-[0.14em] text-plum">
          {eyebrow}
        </span>
      ) : null}
      <Heading className="mt-3 font-display text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
