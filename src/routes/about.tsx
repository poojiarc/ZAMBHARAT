import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Target, Eye, Award, Droplets, Users, Cpu, Zap, Heart, Layers } from "lucide-react";
import team from "@/assets/about-team.jpg";
import borehole from "@/assets/svc-borehole.jpg";
import { useReveal } from "@/hooks/use-reveal";
const reasons = [
  { I: Award, t: "Best Quality Service With Affordable Price" },
  { I: Cpu, t: "Modern Equipment & Advanced Technology" },
  { I: Users, t: "Experienced and Skilled Team" },
  { I: Zap, t: "Fast and Reliable Project Delivery" },
  { I: Heart, t: "Customer-Centric Approach" },
  { I: Layers, t: "End-to-End Water Solutions" },
];

export default function AboutPage() {
  useReveal();
  return (
    <div>
      <Helmet>
        <title>About Us — Zambharat DRILL TECH (Water King)</title>
        <meta name="description" content="Zambharat Drill tech Limited (Water King) is a trusted Lusaka-based provider of advanced drilling and water solution services across Zambia." />
        <meta property="og:title" content="About Zambharat DRILL TECH — Water King" />
        <meta property="og:description" content="Our mission, vision and commitment to clean water across Zambia." />
        <meta property="og:image" content={team} />
      </Helmet>
      <section className="bg-gradient-hero text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-semibold mb-4">About Us</span>
          <h1 className="text-4xl md:text-6xl font-black mb-4">About Zambharat Drill tech Limited</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto italic">"Drilling Excellence, Delivering Water"</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="text-accent font-bold uppercase text-sm tracking-wider">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6 text-foreground">A Trusted Name in Water Solutions</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Zambharat DRILL TECH Limited (<strong className="text-primary">Water King</strong>) is a trusted provider of advanced drilling and water solution services based in Lusaka, Zambia. With a strong commitment to quality, innovation, and customer satisfaction, we specialize in delivering reliable and cost-effective borehole drilling and water management solutions for residential, commercial, agricultural, and industrial needs.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our company uses modern drilling technology, skilled technicians, and scientifically backed methods to ensure accurate results and long-lasting water solutions. From initial site surveys to full system installation, we handle every project with precision and professionalism.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We believe that access to clean and reliable water is essential for growth and sustainability. That's why we are dedicated to helping communities, businesses, and farms secure dependable water sources.
          </p>
        </div>
        <div className="reveal">
          <img src={team} alt="Zambharat Drilltech team" loading="lazy" className="rounded-3xl shadow-water w-full" />
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
          <div className="reveal bg-card border border-border rounded-2xl p-8 hover:shadow-water transition">
            <div className="bg-gradient-water w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
              <Target className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-black mb-3 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide high-quality, affordable, and reliable drilling and water solutions using advanced technology and expert knowledge.
            </p>
          </div>
          <div className="reveal bg-card border border-border rounded-2xl p-8 hover:shadow-water transition">
            <div className="bg-gradient-sunset w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
              <Eye className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-black mb-3 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become a leading drilling and water solutions provider in Africa, known for excellence, innovation, and customer trust.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal order-2 lg:order-1">
          <img src={borehole} alt="Drilling rig at work" loading="lazy" className="rounded-3xl shadow-water w-full" />
        </div>
        <div className="reveal order-1 lg:order-2">
          <span className="text-accent font-bold uppercase text-sm tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6 text-foreground">The ZAMBHARAT Difference</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map(({ I, t }) => (
              <div key={t} className="flex gap-3 bg-card border border-border rounded-xl p-4 hover:shadow-water transition">
                <div className="bg-gradient-water w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                  <I className="h-5 w-5 text-white" />
                </div>
                <p className="font-semibold text-foreground text-sm leading-snug self-center">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="reveal bg-gradient-hero rounded-3xl p-10 md:p-14 text-center text-white shadow-water">
          <Droplets className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-black mb-3">"Affordable Quality Water Services"</h2>
          <p className="max-w-2xl mx-auto text-white/90 mb-6">Your Reliable Borehole Experts — bringing Water Solutions You Can Trust to homes, farms, businesses and industries across Zambia.</p>
          <Link to="/contact" className="bg-accent px-8 py-4 rounded-full font-bold inline-block hover:scale-105 transition">Start Your Project</Link>
        </div>
      </section>
    </div>
  );
}
