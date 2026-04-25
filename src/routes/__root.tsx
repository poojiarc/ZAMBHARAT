import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Link } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero text-white px-4">
      <div className="text-center">
        <h1 className="text-8xl font-black">404</h1>
        <p className="mt-3 text-xl">This page drilled too deep.</p>
        <Link to="/" className="mt-6 inline-block bg-accent px-6 py-3 rounded-full font-semibold hover:scale-105 transition">Go Home</Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zambharat Drilltech Limited | Water King — Borehole Drilling Zambia" },
      { name: "description", content: "Zambharat Drilltech Limited (Water King) — borehole drilling, geophysical survey, pump installation and water solutions across Zambia." },
      { name: "author", content: "Zambharat Drilltech Limited" },
      { property: "og:title", content: "Zambharat Drilltech Limited | Water King" },
      { property: "og:description", content: "Borehole drilling, water solutions and mineral exploration across Zambia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
