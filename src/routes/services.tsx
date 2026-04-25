import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Zambharat Drilltech (Water King)" },
      { name: "description", content: "Geophysical survey, water borehole drilling up to 300m, pump installation, overhead tank construction, core drilling and mud drilling." },
      { property: "og:title", content: "Our Services — Water King" },
      { property: "og:description", content: "Complete water and drilling solutions across Zambia." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  useReveal();
  return (
    <div>
      <section className="bg-gradient-hero text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-semibold mb-4">What We Do</span>
          <h1 className="text-4xl md:text-6xl font-black mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Complete water and drilling solutions delivered with the latest technology and expert craftsmanship.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </section>
    </div>
  );
}
