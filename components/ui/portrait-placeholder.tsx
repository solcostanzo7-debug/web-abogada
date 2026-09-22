import Image from "next/image";

export function PortraitPlaceholder({
  className = "",
}: {
  className?: string;
  variant?: "hero" | "about";
}) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-[1.75rem] bg-ink ${className}`}
    >
      <Image
        src="/images/sol-costanzo.jpg"
        alt="Sol Costanzo, abogada"
        fill
        sizes="(min-width: 1024px) 480px, 90vw"
        className="object-cover"
        priority
      />
    </div>
  );
}
