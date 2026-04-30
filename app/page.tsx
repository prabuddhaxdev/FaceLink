import Navbar from "@/components/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function Landing() {
  return (
    <main className="min-h-screen bg-dark-2 selection:bg-brand selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}