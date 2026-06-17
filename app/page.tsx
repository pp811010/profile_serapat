import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import BackgroundDots from "@/components/ui/BackgroundDots";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <BackgroundDots />
      
      <div className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}