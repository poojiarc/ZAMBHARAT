import { Link } from "@tanstack/react-router";
import { Home, Wrench, Info, Phone, Mail, MapPin, Facebook, Heart } from "lucide-react";
import { services } from "@/data/services";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-gradient-hero text-white mt-20">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Logo" className="h-14 w-14 rounded-full ring-2 ring-white/40" />
            <div>
              <div className="font-bold">ZAMBHARAT DRILLTECH</div>
              <div className="text-xs text-accent">Water King</div>
            </div>
          </div>
          <p className="text-sm text-white/80">
            Borehole drilling, water solutions and mineral exploration experts across Zambia.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[{to:"/",l:"Home",I:Home},{to:"/services",l:"Services",I:Wrench},{to:"/about",l:"About",I:Info},{to:"/contact",l:"Contact",I:Phone}].map(({to,l,I})=>(
              <li key={to}>
                <Link to={to} className="flex items-center gap-2 text-white/85 hover:text-accent transition">
                  <I className="h-4 w-4" /> {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.slice(0,6).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="text-white/85 hover:text-accent transition">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> Plot No. 29, Acacia Avenue, Avondale, Lusaka</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> 0777 777 337</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> zambharatdrilltech@gmail.com</li>
            <li>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-2 hover:text-accent transition">
                <Facebook className="h-4 w-4" /> Zambharat Borehole Drilling
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/80">
          <p>© {new Date().getFullYear()} ZAMBHARATDRILL TECH LIMITED. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="h-3.5 w-3.5 text-accent fill-accent" /> by
            <a href="#" className="font-semibold text-accent hover:underline ml-1">StaffArc</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
