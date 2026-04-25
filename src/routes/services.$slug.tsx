import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Search, Droplets, Wrench, Building2, Mountain, Cog, Phone, type LucideIcon } from "lucide-react";
import { getService, services, type Service } from "@/data/services";
import { useReveal } from "@/hooks/use-reveal";

const icons: Record<Service["icon"], LucideIcon> = { Search, Droplets, Wrench, Building2, Mountain, Cog };

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — Water King` },
          { name: "description", content: loaderData.service.short },
          { property: "og:title", content: loaderData.service.title },
          { property: "og:description", content: loaderData.service.short },
          { property: "og:image", content: loaderData.service.image },
        ]
      : [],
  }),
  errorComponent: ({ error }) => (
    <div className="pt-32 container mx-auto px-4 text-center">
      <p className="text-destructive">{error.message}</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="pt-32 container mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-primary font-semibold">Back to Services</Link>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  useReveal();
  const { service } = Route.useLoaderData();
  const Icon = icons[service.icon];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        <div className="relative container mx-auto px-4 text-white animate-fade-up">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/85 hover:text-accent mb-6 transition">
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="glass rounded-2xl p-4">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black">{service.title}</h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl">{service.short}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="reveal">
            <h2 className="text-2xl md:text-3xl font-black mb-4 text-foreground">Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
          </div>

          <div className="reveal">
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Our Process</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.process.map((p, i) => (
                <div key={p.step} className="bg-card border border-border rounded-2xl p-6 hover:shadow-water transition">
                  <div className="text-accent font-black text-3xl mb-2">0{i + 1}</div>
                  <h3 className="font-bold text-foreground mb-1">{p.step}</h3>
                  <p className="text-sm text-muted-foreground">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="reveal bg-gradient-water text-white rounded-2xl p-6 shadow-water">
            <h3 className="font-black text-xl mb-4">Key Benefits</h3>
            <ul className="space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal bg-gradient-sunset text-white rounded-2xl p-6 shadow-water">
            <h3 className="font-black text-xl mb-2">Need this service?</h3>
            <p className="text-sm mb-4 text-white/90">Get a free quote today.</p>
            <Link to="/contact" className="bg-white text-accent px-5 py-3 rounded-full font-bold inline-flex items-center gap-2 hover:scale-105 transition">
              <Phone className="h-4 w-4" /> Contact Us
            </Link>
          </div>
        </aside>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Other Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((s) => {
              const I = icons[s.icon];
              return (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group bg-card border border-border rounded-2xl p-6 hover:shadow-water hover:-translate-y-1 transition">
                  <div className="bg-gradient-water w-12 h-12 rounded-xl flex items-center justify-center mb-3"><I className="h-6 w-6 text-white" /></div>
                  <h3 className="font-bold group-hover:text-primary transition">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.short}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
