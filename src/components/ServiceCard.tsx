import { Link } from "@tanstack/react-router";
import { Search, Droplets, Wrench, Building2, Mountain, Cog, ArrowRight, type LucideIcon } from "lucide-react";
import type { Service } from "@/data/services";

const icons: Record<Service["icon"], LucideIcon> = { Search, Droplets, Wrench, Building2, Mountain, Cog };

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group reveal block bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-water hover:-translate-y-2 transition-all duration-500 border border-border"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        <div className="absolute bottom-3 left-3 glass rounded-full p-3">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition mb-2">{service.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{service.short}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
          Learn more <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
