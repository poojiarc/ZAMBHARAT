import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Mail, Phone, User, Send, MessageSquare } from "lucide-react";
import { services } from "@/data/services";
import { useReveal } from "@/hooks/use-reveal";
import { SocialLinks } from "@/components/SocialLinks";

const phones = ["0777 777 337", "0777 777 266", "0777 777 127"];
const emails = ["zambharatdrilltech@gmail.com"];
const locations = [
  "Plot No. 29, Acacia Avenue, Avondale, Lusaka",
];

export default function ContactPage() {
  useReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: services[0].title, message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Zambharat Drilltech,%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Email:* ${encodeURIComponent(form.email)}%0A*Phone:* ${encodeURIComponent(form.phone)}%0A*Service:* ${encodeURIComponent(form.service)}%0A%0A*Message:*%0A${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/260777777337?text=${text}`, "_blank");
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div>
      <Helmet>
        <title>Contact Us — Zambharat Drilltech (Water King)</title>
        <meta name="description" content="Contact Zambharat Drilltech Limited for borehole drilling, pump installation and water solutions. Lusaka offices, phones, emails and WhatsApp." />
        <meta property="og:title" content="Contact Water King" />
        <meta property="og:description" content="Get a free quote for your drilling project." />
      </Helmet>
      <section className="bg-gradient-hero text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-semibold mb-4">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-black mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Talk to <strong>Mr. S V GOUD</strong> and the ZAMBHARATteam about your project today.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 grid lg:grid-cols-3 gap-6">
        {[
          { I: MapPin, title: "Locations", items: locations },
          { I: Phone, title: "Phone Numbers", items: phones, href: (p: string) => `tel:${p.replace(/\s/g, "")}` },
          { I: Mail, title: "Emails", items: emails, href: (e: string) => `mailto:${e}?subject=Enquiry from Website` },
        ].map(({ I, title, items, href }) => (
          <div key={title} className="reveal bg-card border border-border rounded-2xl p-6 hover:shadow-water transition">
            <div className="bg-gradient-water w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
              <I className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-black mb-4 text-foreground">{title}</h3>
            <ul className="space-y-2 text-sm">
              {items.map((it) =>
                href ? (
                  <li key={it}><a href={href(it)} className="text-muted-foreground hover:text-primary transition break-all">{it}</a></li>
                ) : (
                  <li key={it} className="text-muted-foreground">{it}</li>
                )
              )}
            </ul>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-4 pb-20 grid lg:grid-cols-2 gap-10">
        <div className="reveal">
          <h2 className="text-3xl font-black text-foreground mb-2">Send Us a Message</h2>
          <p className="text-muted-foreground mb-6">Fill the form and we'll continue the conversation on WhatsApp.</p>
          <form onSubmit={onSubmit} className="space-y-4 bg-card border border-border rounded-2xl p-6 shadow-md">
            <div className="relative">
              <User className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
              <input required value={form.name} onChange={set("name")} placeholder="Your Name" className="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-input focus:ring-2 focus:ring-primary outline-none transition" />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
              <input required type="email" value={form.email} onChange={set("email")} placeholder="Email Address" className="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-input focus:ring-2 focus:ring-primary outline-none transition" />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
              <input required value={form.phone} onChange={set("phone")} placeholder="Phone Number" className="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-input focus:ring-2 focus:ring-primary outline-none transition" />
            </div>
            <select value={form.service} onChange={set("service")} className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:ring-2 focus:ring-primary outline-none transition">
              {services.map((s) => <option key={s.slug}>{s.title}</option>)}
            </select>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
              <textarea required rows={5} value={form.message} onChange={set("message")} placeholder="Tell us about your project..." className="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-input focus:ring-2 focus:ring-primary outline-none transition resize-none" />
            </div>
            <button type="submit" className="w-full bg-gradient-sunset text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition shadow-water">
              <Send className="h-5 w-5" /> Send via WhatsApp
            </button>
          </form>
        </div>

        <div className="reveal">
          <h2 className="text-3xl font-black text-foreground mb-2">Find Us</h2>
          <p className="text-muted-foreground mb-6">Visit our offices in Lusaka.</p>
          <div className="rounded-2xl overflow-hidden shadow-water border border-border h-[500px]">
            <iframe
              title="Zambharat Drill tech location"
              src="https://www.google.com/maps?q=Acacia+Avenue+Avondale+Lusaka&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a href="https://maps.app.goo.gl/aqinB5kRfaXg2t6A9" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition">
            <MapPin className="h-4 w-4" /> Open in Google Maps
          </a>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="reveal bg-gradient-hero text-white rounded-3xl p-10 md:p-14 text-center shadow-water">
          <h2 className="text-3xl md:text-4xl font-black mb-3">Follow Us</h2>
          <p className="text-white/85 max-w-xl mx-auto mb-6">
            Stay connected with ZAMBHARAT on social media for project updates, drilling tips and behind-the-scenes.
          </p>
          <div className="flex justify-center">
            <SocialLinks variant="light" />
          </div>
        </div>
      </section>
    </div>
  );
}
