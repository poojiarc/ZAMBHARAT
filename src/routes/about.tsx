import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Award, Droplets, Users, Cpu, ShieldCheck } from "lucide-react";
import team from "@/assets/about-team.jpg";
import borehole from "@/assets/svc-borehole.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Zambharat Drilltech (Water King)" },
      { name: "description", content: "Learn about Zambharat Drilltech Limited — Zambia's trusted Water King for borehole drilling, pump installation and water solutions." },
      { property: "og:title", content: "About Zambharat Drilltech — Water King" },
      { property: "og:description", content: "Our mission, vision and commitment to clean water across Zambia." },
      { property: "og:image", content: team },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  return (
    <div>
      <section className="bg-gradient-hero text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-semibold mb-4">About Us</span>
          <h1 className="text-4xl md:text-6xl font-black mb-4">Zambia's Water King</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">A decade-strong drilling company committed to delivering clean water to every corner of Zambia.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="text-accent font-bold uppercase text-sm tracking-wider">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6 text-foreground">Company Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Zambharat Drilltech Limited, popularly known as <strong className="text-primary">Water King</strong>, is a Zambian-registered drilling and water solutions company specialising in geophysical surveys, borehole drilling, pump installation, overhead tank construction and core drilling for mineral exploration.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded with a clear purpose — to make clean, reliable water accessible to everyone — we combine modern drilling technology with experienced engineers and a customer-first attitude. Under the leadership of <strong>Mr. S V GOUD</strong>, we have completed projects for households, farms, schools, communities and industrial clients across the country.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From Lusaka to remote rural sites, our crews work safely, professionally and on schedule, delivering boreholes up to 300 metres deep and complete water systems built to last.
          </p>
        </div>
        <div className="reveal">
          <img src={team} alt="Zambharat Drilltech team" loading="lazy" className="rounded-3xl shadow-water w-full" />
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
          {[
            { I: Target, t: "Our Mission", d: "To deliver high-quality borehole drilling and water solutions that improve lives, support agriculture and power industries — at prices our customers can afford." },
            { I: Eye, t: "Our Vision", d: "To be Zambia's most trusted name in water — the first call for anyone who needs a reliable borehole, pump or water storage system." },
          ].map(({ I, t, d }) => (
            <div key={t} className="reveal bg-card border border-border rounded-2xl p-8 hover:shadow-water transition">
              <div className="bg-gradient-water w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                <I className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-foreground">{t}</h3>
              <p className="text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal order-2 lg:order-1">
          <img src={borehole} alt="Drilling rig at work" loading="lazy" className="rounded-3xl shadow-water w-full" />
        </div>
        <div className="reveal order-1 lg:order-2">
          <span className="text-accent font-bold uppercase text-sm tracking-wider">Experience &amp; Expertise</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6 text-foreground">Decades of Combined Drilling Knowledge</h2>
          <div className="space-y-4">
            {[
              { I: Award, t: "Best Quality Service With Affordable Price", d: "Premium workmanship without the premium price tag." },
              { I: Cpu, t: "Advanced Technology &amp; Machinery", d: "Modern DTH, rotary and core drilling rigs for every job." },
              { I: Users, t: "Experienced Team", d: "Skilled engineers, geologists and technicians on every site." },
              { I: ShieldCheck, t: "Reliable &amp; Fast Service", d: "Projects delivered safely, on time and to spec." },
            ].map(({ I, t, d }) => (
              <div key={t} className="flex gap-4">
                <div className="bg-gradient-sunset w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <I className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground" dangerouslySetInnerHTML={{ __html: t }} />
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="reveal bg-gradient-hero rounded-3xl p-10 md:p-14 text-center text-white shadow-water">
          <Droplets className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-black mb-3">Committed to Clean Water for All</h2>
          <p className="max-w-2xl mx-auto text-white/90 mb-6">Whether it is a single household borehole or a large-scale industrial water project, we bring the same level of care, expertise and quality to every assignment.</p>
          <Link to="/contact" className="bg-accent px-8 py-4 rounded-full font-bold inline-block hover:scale-105 transition">Start Your Project</Link>
        </div>
      </section>
    </div>
  );
}
