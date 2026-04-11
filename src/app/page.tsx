import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Highlight from "@/components/home/Highlight";
import Steps from "@/components/home/Steps";
import Testimonials from "@/components/home/Testimonials";
import BeforeAfter from "@/components/home/BeforeAfter";

import InstagramPreview from "@/components/home/InstagramPreview";
import ContactMap from "@/components/home/ContactMap";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Services Grid */}
      <Services />

      {/* Motus AX Highlight */}
      <Highlight />

      {/* Before/After Slider */}
      <BeforeAfter />

      {/* Steps Section */}
      <Steps />

      {/* Testimonials */}
      <Testimonials />

      {/* Instagram Preview */}
      <InstagramPreview />

      {/* Contact & Map */}
      <ContactMap />

      <Footer />
    </main>
  );
}
