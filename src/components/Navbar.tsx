import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Home, Wrench, Info, Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/services", label: "Services", icon: Wrench },
  { to: "/about", label: "About", icon: Info },
  { to: "/contact", label: "Contact", icon: Phone },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Zambharat Drilltech Limited" className="h-12 w-12 rounded-full ring-2 ring-primary/30 group-hover:ring-primary transition" />
          <div className="hidden sm:block leading-tight">
            <div className="font-bold text-primary text-sm">ZAMBHARAT DRILLTECH</div>
            <div className="text-xs text-accent font-semibold">Water King</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: to === "/" }}
              activeProps={{ className: "bg-primary text-primary-foreground" }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-primary/10 transition"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 bg-gradient-sunset text-accent-foreground px-5 py-2 rounded-full text-sm font-semibold shadow-water hover:scale-105 transition"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border animate-fade-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: to === "/" }}
                activeProps={{ className: "bg-primary text-primary-foreground" }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium hover:bg-primary/10 transition"
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
