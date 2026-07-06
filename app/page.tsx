import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white w-full overflow-x-hidden">      
      <div className="relative z-10">
        <Hero />
      </div>
    </main>
  );
}