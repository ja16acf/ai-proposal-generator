import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";


export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50">
        <Hero />
        <Features />
      </main>
    </>
  );
}