import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import BackgroundDots from "@/components/ui/BackgroundDots";
import TechStack from "@/components/sections/TechStack";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white w-full overflow-x-hidden">      
      <div className="relative z-10">
        <Hero />
        
        {/* <Experience /> */}
         {/* <TechStack/> */}
        {/* <Projects /> */}
        
       
        {/* <Contact /> */}
      </div>
    </main>
  );
}