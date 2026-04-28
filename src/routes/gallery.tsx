import { Helmet } from "react-helmet-async";
import { useReveal } from "@/hooks/use-reveal";

// Import all images from the gallery folder using a relative path
const images = Object.values(import.meta.glob("../assets/gallery/*", { eager: true, import: "default" })) as string[];

export default function GalleryPage() {
  useReveal();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Gallery — Zambharat Drill tech (SAVE WATER SAVE LIFE)</title>
        <meta name="description" content="View our drilling projects, machinery and team in action across Zambia. Borehole drilling excellence by Zambharat Drill tech Limited." />
        <meta property="og:title" content="Zambharat Drill tech Gallery — SAVE WATER SAVE LIFE" />
        <meta property="og:description" content="A visual showcase of our drilling operations and completed projects." />
      </Helmet>

      {/* Header */}
      <section className="bg-gradient-hero text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-aqua/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-4 text-center animate-fade-up relative">
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-semibold mb-4 text-white">
            📸 Our Work in Action
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Project Gallery</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            A showcase of our professional borehole drilling, pump installations, and water solutions across Zambia.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-20">
        {images.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {images.map((src, i) => (
              <div
                key={i}
                className="reveal break-inside-avoid rounded-3xl overflow-hidden shadow-water hover:shadow-glow hover:-translate-y-2 transition-all duration-500 group cursor-pointer border border-border bg-card"
              >
                <div className="relative overflow-hidden aspect-auto">
                  <img
                    src={src}
                    alt={`Zambharat Drill tech Project ${i + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-white font-bold text-sm bg-accent/80 px-3 py-1 rounded-full">Project {i + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-card rounded-3xl border border-dashed border-border">
            <p className="text-muted-foreground text-lg">No images found in the gallery folder yet.</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="reveal bg-gradient-water rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-water">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Inspired by Our Work?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-xl mx-auto">
            Get your own reliable water source with our expert drilling services.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl"
          >
            Get a Free Quote
          </a>
        </div>
      </section>
    </div>
  );
}
