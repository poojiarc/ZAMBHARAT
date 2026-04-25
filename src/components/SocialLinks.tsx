import { Facebook, Instagram, Youtube } from "lucide-react";

export const socials = [
  { href: "https://www.instagram.com/zb_drilling?igsh=Y2c3M2xjeGszMTFi&utm_source=qr", label: "Instagram", Icon: Instagram },
  { href: "https://www.facebook.com/share/1AwJ5RsBb9/?mibextid=wwXIfr", label: "Facebook", Icon: Facebook },
  { href: "https://x.com/zambharat?s=11", label: "X (Twitter)", Icon: XIcon },
  { href: "https://www.youtube.com/@ZAMBHARATDRILLTECHLIMITED", label: "YouTube", Icon: Youtube },
];

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2H21l-6.52 7.45L22 22h-6.86l-4.78-6.27L4.8 22H2.04l6.98-7.97L2 2h6.99l4.32 5.71L18.24 2Zm-1.2 18h1.86L7.04 4H5.1l11.94 16Z" />
    </svg>
  );
}

export function SocialLinks({ variant = "light" }: { variant?: "light" | "dark" }) {
  const base =
    variant === "light"
      ? "bg-white/10 hover:bg-accent text-white"
      : "bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground";
  return (
    <div className="flex flex-wrap gap-3">
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={`h-10 w-10 rounded-full flex items-center justify-center transition hover:scale-110 ${base}`}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
