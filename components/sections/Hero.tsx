'use client';
import Image from "next/image";

export default function Hero() {
  // เปลี่ยน path รูปพื้นหลังที่นี่
  const bgImage = "/bg-hero.jpg"; // 👈 ใส่ path รูปของคุณ

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src='/bg.jpg'
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Dark Overlay - ปรับความเข้มได้ตามต้องการ */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-blue-950/85"></div>

      {/* Additional color overlay สำหรับ tone สีน้ำเงิน */}
      <div className="absolute inset-0 z-10 bg-blue-900/30 mix-blend-multiply"></div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Small uppercase text */}
        <p className="text-blue-400/90 text-sm lg:text-base font-medium tracking-[0.3em] uppercase mb-6 lg:mb-8">
          Welcome to My Portfolio
        </p>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] tracking-tight mb-6 lg:mb-8">
        Development
          Experiences
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl text-blue-200/80 max-w-2xl mx-auto leading-relaxed mb-10 lg:mb-12">
          Full-Stack Developer specializing in API development,{" "}
          <span className="text-blue-300 underline decoration-blue-400/50 underline-offset-4">
            modern web frameworks
          </span>{" "}
          and AI-powered tools.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects"
            className="group relative px-8 py-3.5 rounded-full border border-blue-400/30 text-blue-100 font-medium text-sm tracking-wide hover:bg-blue-500/10 hover:border-blue-300/50 transition-all duration-300"
          >
            View My Work
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          
          <a 
            href="#contact"
            className="px-8 py-3.5 rounded-full text-blue-200/70 font-medium text-sm tracking-wide hover:text-blue-100 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Profile section */}
        <div className="mt-16 lg:mt-20 flex flex-col items-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          <div className="flex items-center gap-3">
            <Image
              src="/profile2.jpg"
              width={40}
              height={40}
              alt="Serapat Ratanapachai"
              className="rounded-full w-10 h-10 object-cover border-2 border-blue-400/30"
            />
            <div className="text-left">
              <p className="text-white text-sm font-medium">Serapat Ratanapachai</p>
              <p className="text-blue-300/70 text-xs">Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 rounded-full border-2 border-blue-400/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-blue-400/50 rounded-full animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}