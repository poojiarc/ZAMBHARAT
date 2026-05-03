import { Link } from "react-router-dom";
import { Home, Wrench, Info, Phone, Mail, MapPin, Heart, Image } from "lucide-react";
import logo from "@/assets/logo.png";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="bg-gradient-hero text-white mt-20">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Logo" className="h-14 w-14 rounded-full ring-2 ring-white/40" />
            <div>
              <div className="font-black text-[13px] sm:text-base tracking-tight leading-none mb-1 whitespace-nowrap">
                <span className="text-[#1A237E]" style={{ textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 3px 5px rgba(0,0,0,0.8)' }}>ZAM</span>
                <span className="text-[#FF7A00] ml-0.5" style={{ textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 3px 5px rgba(0,0,0,0.8)' }}>BHARAT</span>
                <span className="text-[#FFEB3B] ml-1" style={{ textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 3px 5px rgba(0,0,0,0.8)' }}>DRILL TECH</span>
              </div>
              <div className="text-[10px] sm:text-xs text-[#FF7A00] font-bold tracking-wide" style={{ textShadow: '-0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #fff, -0.5px 0.5px 0 #fff, 0.5px 0.5px 0 #fff, 0 2px 4px rgba(0,0,0,0.8)' }}>
                SAVE WATER SAVE LIFE
              </div>
            </div>
          </div>
          <p className="text-sm text-white/80 mb-3">
            Drilling Excellence, Delivering Water — your reliable borehole experts in Zambia.
          </p>
          <p className="text-xs text-accent italic">"Water Solutions You Can Trust"</p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[{ to: "/", l: "Home", I: Home }, { to: "/services", l: "Services", I: Wrench }, { to: "/about", l: "About", I: Info }, { to: "/gallery", l: "Gallery", I: Image }, { to: "/contact", l: "Contact", I: Phone }].map(({ to, l, I }) => (
              <li key={to}>
                <Link to={to} className="flex items-center gap-2 text-white/85 hover:text-accent transition">
                  <I className="h-4 w-4" /> {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <p className="text-sm text-white/80 mb-4">Stay connected on social media for updates and projects.</p>
          <SocialLinks variant="light" />
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> Plot No. 29, Acacia Avenue, Avondale, Lusaka</li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <a href="tel:0777777337" className="hover:text-accent transition">0777 777 337</a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <a href="mailto:zambharatdrilltech@gmail.com?subject=Enquiry from Website" className="hover:text-accent transition break-all">zambharatdrilltech@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-4 pt-8 pb-8 border-t border-white/10 flex flex-col gap-3 justify-center items-center text-xs text-white/60 text-center">
        <div>© {new Date().getFullYear()} ZAMBHARAT DRILL TECH LIMITED. All rights reserved.</div>

      </div>
    </footer>
  );
}
