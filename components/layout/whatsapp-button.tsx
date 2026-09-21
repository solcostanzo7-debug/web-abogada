import { IconWhatsapp } from "@/components/ui/icons";
import { buildWhatsappLink, defaultWhatsappMessage } from "@/lib/site-config";

export default function WhatsappButton() {
  return (
    <a
      href={buildWhatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Iniciar una conversación por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-7 sm:right-7"
    >
      <IconWhatsapp className="h-7 w-7" />
    </a>
  );
}
