import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

import HomePage from "@/routes/index";
import AboutPage from "@/routes/about";
import ServicesPage from "@/routes/services";
import ServiceDetail from "@/routes/services.$slug";
import ContactPage from "@/routes/contact";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero text-white px-4">
      <div className="text-center">
        <h1 className="text-8xl font-black">404</h1>
        <p className="mt-3 text-xl">This page drilled too deep.</p>
        <Link to="/" className="mt-6 inline-block bg-accent px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}
