import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import HowItWorks from "../components/sections/HowItWorks";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}