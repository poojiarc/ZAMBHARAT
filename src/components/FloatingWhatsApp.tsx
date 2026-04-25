import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/260777777337?text=Hello%20Zambharat%20Drilltech%2C%20I%27d%20like%20a%20quote."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500/60 animate-ping" />
      <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/40 hover:scale-110 transition">
        <MessageCircle className="h-7 w-7 fill-white" />
      </span>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}
