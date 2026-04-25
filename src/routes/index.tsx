import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Cpu, Users, Zap, CheckCircle2, Phone } from "lucide-react";
import hero from "@/assets/hero-drilling.jpg";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zambharat Drilltech Limited | Water King — Borehole Drilling Zambia" },
      { name: "description", content: "Borehole drilling up to 300m, geophysical survey, pump installation, overhead tanks and core drilling. Best quality service with affordable price." },
      { property: "og:title", content: "Zambharat Drilltech Limited — Water King" },
      { property: "og:description", content: "Borehole & drilling experts across Zambia." },
    ],
  }),
  component: HomePage,
});

const why = [
  { icon: Award, title: "Best Quality Service With Affordable Price" },
  { icon: Cpu, title: "Advanced Technology & Machinery" },
  { icon: Users, title: "Experienced Team" },
  { icon: Zap, title: "Reliable & Fast Service" },
];

function HomePage() {
  useReveal();
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img src={hero} alt="Borehole drilling rig" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-accent/60" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-aqua/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

        <div className="relative container mx-auto px-4 py-32 text-white">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block glass px-4 py-2 rounded-full text-sm font-semibold mb-6 text-white">
              💧 Water King — Trusted Borehole Experts
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-4 tracking-tight">
              ZAMBHARAT<br />
              <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">DRILLTECH LIMITED</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Water King — Borehole &amp; Drilling Experts
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-gradient-sunset px-8 py-4 rounded-full font-bold shadow-water hover:scale-105 transition flex items-center gap-2">
                Get a Quote <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/services" className="glass px-8 py-4 rounded-full font-bold text-white hover:bg-white/20 transition">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="text-accent font-bold uppercase text-sm tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-5xl font-black mt-2 mb-6 text-foreground">Bringing clean water to every doorstep.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Zambharat Drilltech Limited — known as <strong className="text-primary">Water King</strong> — is a leading Zambian drilling company delivering professional borehole drilling, geophysical surveys, pump installation and overhead tank construction.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            With years of expertise, modern machinery and a dedicated team led by Mr. S V GOUD, we provide reliable water solutions for households, farms, schools and industries across the country.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition">
            Read More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="reveal grid grid-cols-2 gap-4">
          {[
            { n: "15+", l: "Years Experience" },
            { n: "300m", l: "Max Drill Depth" },
            { n: "1000+", l: "Boreholes Drilled" },
            { n: "100%", l: "Customer Focus" },
          ].map((s) => (
            <div key={s.l} className="bg-gradient-water text-white rounded-2xl p-6 shadow-water hover:scale-105 transition">
              <div className="text-4xl font-black">{s.n}</div>
              <div className="text-sm font-medium opacity-90 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <span className="text-accent font-bold uppercase text-sm tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2 mb-4 text-foreground">Our Services</h2>
            <p className="text-muted-foreground text-lg">From geophysical surveys to deep borehole drilling — we handle every step of your water project.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="text-accent font-bold uppercase text-sm tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-black mt-2 mb-4 text-foreground">The Water King Difference</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {why.map(({ icon: Icon, title }) => (
            <div key={title} className="reveal group bg-card border border-border rounded-2xl p-6 hover:shadow-water hover:-translate-y-2 transition-all duration-500">
              <div className="bg-gradient-water w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-foreground flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="container mx-auto px-4 pb-20">
        <div className="reveal bg-gradient-hero rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-water">
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-accent/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-aqua/40 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Need Borehole Drilling?</h2>
            <p className="text-xl mb-8 text-white/90">Contact Us Today for a Free Site Assessment</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition shadow-lg">
                Get Free Quote
              </Link>
              <a href="tel:+260777777337" className="glass-dark text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white/20 transition">
                <Phone className="h-5 w-5" /> 0777 777 337
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
