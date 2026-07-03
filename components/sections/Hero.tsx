'use client';

import Link from "next/link";
import { useEffect, useState } from "react";


const ACCENT = "#FF5A36";
const ACCENT_ALT = "#00D4B4";
const PAPER = "#ffffffff";
const CREAM = "#e8ee65ff";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className="min-h-screen p-4 md:p-8 lg:px-6"
      style={{
        backgroundColor: PAPER,
        backgroundImage:
          "radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="max-w-[1600px] mx-auto bg-white rounded-[32px] overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)] ring-1 ring-black/5">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0  items-stretch">

          {/* Column 1 - Profile */}
          <div
            className="p-8 lg:p-10 flex flex-col justify-between min-h-[500px] border-b md:border-r xl:border-b-0 xl:border-r border-gray-100"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease 0.3s'
            }}
          >
            <div>
              <span
                className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] mb-3 inline-block"
                style={{ color: ACCENT }}
              >
                // portfolio
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-black leading-tight mb-4">
                Technology Built Across{" "}
                <span style={{ color: ACCENT }}>Frontend, Backend, Web & Mobile</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                A curated collection of my past work, projects, and technical journey. I build robust and efficient software solutions.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-3xl font-bold text-black mb-1">36</p>
                  <div className="w-6 h-[3px] rounded-full mb-2" style={{ backgroundColor: ACCENT }} />
                  <p className="text-xs text-gray-500">Tech Stacks & Tools</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
              <img
                src="/profile2.jpg"
                alt="Serapat Ratanapachai"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-offset-2"
                style={{ ['--tw-ring-color' as any]: `${ACCENT_ALT}66` }}
              />
              <div>
                <p className="text-sm font-semibold text-black">Serapat Ratanapachai</p>
                <p className="text-xs text-gray-500">Full-Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Column 2 - Black Card (All Projects) - Hover: ดำ → ครีม */}
          <Link href="/projects" className="group">
            <div
              className="relative h-full bg-black p-8 lg:p-10 flex flex-col justify-between min-h-[500px] border-b md:border-b xl:border-b-0 xl:border-r border-gray-800 cursor-pointer
                         ring-1 ring-transparent overflow-hidden
                         transition-all duration-500 ease-out
                         group-hover:-translate-y-2 group-hover:ring-1"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 0.2s ease 0.4s',
                ['--tw-ring-color' as any]: ACCENT_ALT,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 45px -12px ${CREAM}88`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Overlay สีครีม - slide จากล่างขึ้นบน */}
              <div
                className="absolute inset-0 transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0 z-0"
                style={{ backgroundColor: CREAM }}
              />

              {/* Content wrapper - z-10 เพื่อให้ content อยู่ด้านบน overlay */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div
                  className="absolute  right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold
                             transition-transform duration-300 "
                  style={{ backgroundColor: ACCENT_ALT, color: "#032420" }}
                >
                  View projects
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                  <span className="text-[#FF5A36] group-hover:text-black/50 text-[11px] font-mono font-semibold uppercase tracking-[0.25em] transition-colors duration-500">
                    Explore
                  </span>

                  <p className="text-white group-hover:text-black text-4xl lg:text-4xl font-bold text-center leading-[0.95] transition-colors duration-500">
                    All
                    <br />Projects
                  </p>

                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center mt-1
                               transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
                    style={{
                      border: `1px solid ${ACCENT_ALT}66`,
                      backgroundColor: `${ACCENT_ALT}1A`,
                    }}
                  >
                    <svg className="w-4 h-4 text-white group-hover:text-black transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-video rounded-lg overflow-hidden bg-gray-800 ring-1 ring-white/10 transition-all duration-500">
                    <img
                      src="https://cdn.macstories.net/002/nova-1615919427833.png"
                      alt="Video thumbnail"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Column 3 - Intern Experience - Hover: ขาว → ครีม */}
          <Link href="/experience" className="group">
            <div
              className="overflow-hidden relative h-full p-8 lg:p-10 flex flex-col justify-between min-h-[500px] bg-white cursor-pointer border-b md:border-b-0 md:border-r xl:border-b-0 xl:border-r border-gray-100
                         ring-1 ring-transparent
                         transition-all duration-500 ease-out
                         group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(245,230,211,0.6)] group-hover:ring-1"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease 0.5s',
                ['--tw-ring-color' as any]: ACCENT_ALT,
              }}
            >
              {/* Overlay สีครีม - slide จากล่างขึ้นบน */}
              <div
                className="absolute inset-0 transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0 z-0"
                style={{ backgroundColor: CREAM }}
              />

              {/* Content wrapper - z-10 เพื่อให้ content อยู่ด้านบน overlay */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div
                  className="absolute top-[-24px] right-[-15px] flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold
                             transition-transform duration-300"
                  style={{ backgroundColor: ACCENT_ALT, color: "#032420" }}
                >
                  View details
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                <div>
                  <h2 className="text-xl lg:text-3xl font-bold leading-tight mb-4 text-black transition-colors duration-500">
                    Intern <span  className={`text-[#00D4B4] group-hover:text-[#FF5A36]`}>experience</span>
                  </h2>
                  <p className="text-sm leading-relaxed mb-8 text-gray-600 group-hover:text-gray-800 transition-colors duration-500">
                    As a Software Developer Intern, I built full-stack applications using <span className="text-black font-bold">Next.js</span> and <span className="text-black font-bold">Golang</span> streamlining internal workflows.
                  </p>

                  <div className="mb-8">
                    <p className="text-2xl font-bold mb-1 text-black transition-colors duration-500 ">Software Developer intern</p>
                    <p className="text-sm text-gray-500 group-hover:text-gray-700 font-mono transition-colors duration-500">Datapro Computer Systems Co., Ltd</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100 group-hover:border-black/15 transition-colors duration-500">
                  <div>
                    <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-500">
                      Bangkok, Thailand
                    </p>
                  </div>
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: ACCENT_ALT }}
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Column 4 - Image Card */}
          <div
            className="flex relative min-h-[500px] border-b md:border-b-0 xl:border-b-0 border-gray-100 overflow-hidden"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease 0.6s'
            }}
          >
            <img
              src="/profile2.jpg"
              alt="Digital campaign"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(10,5,5,0.55) 45%, transparent 80%)`,
              }}
            />
            <span
              className="absolute top-5 left-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full"
              style={{ backgroundColor: `${ACCENT}E6`, color: "white" }}
            >
              // about
            </span>

            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                About me
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Hello, I am Serapat Ratanapachai (Popo). It is a pleasure to welcome you to my portfolio.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section - Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-gray-100">

          {/* Left Column - Typography */}
          <div
            className="p-8 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-100"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.8s ease 0.1s'
            }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-black leading-[0.9] tracking-tight">
              <br />
              <span className="relative inline-block font-serif italic font-light">
                Overview
                <svg
                  className="absolute left-0 -bottom-2 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 Q50,0 100,5 T200,5" stroke={ACCENT_ALT} strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </div>

          {/* Right Column - Education & Contact List */}
          <div
            className="p-8 lg:p-16 flex flex-col justify-center gap-6"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.8s ease 0.2s'
            }}
          >
            {/* Education Entry */}
            <article className="flex flex-col gap-6 p-4 rounded-xl border-l-2 border-transparent">
              <div className="font-bold text-lg text-black">
                <span>Education</span>
              </div>
              <div className="flex ">
                <img
                  src="https://www.reg.kmitl.ac.th/information/assets/img/logo.gif"
                  alt="KMITL logo"
                  className="w-32 h-32 object-contain  rounded-full"
                />
                <div className="flex-1 flex flex-col items-start justify-center ml-2">
                  <h3 className="text-lg font-bold text-black leading-tight">
                    King Mongkut's University of Technology Ladkrabang
                  </h3>
                  <p className="text-sm text-gray-500">Bachelor's of Science in Information Technology</p>
                  <p className="text-sm text-gray-500">GPAX : 3.16 / 4.00 </p>
                </div>
              </div>
            </article>

            {/* Contact Card */}
            <div className="p-4 rounded-xl">
              <h3 className="text-lg font-bold text-black leading-tight mb-4">
                Contact
              </h3>
              <div className="flex flex-col gap-3">
                {/* Email */}
                <a
                  href="mailto:serapat.rata@gmail.com"
                  className="group/row flex items-center gap-4 p-2 -mx-2 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/row:scale-110"
                    style={{ backgroundColor: `${ACCENT}14` }}
                  >
                    <svg className="w-5 h-5" style={{ color: ACCENT }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">Email</p>
                    <p className="text-sm font-semibold text-black">serapat.rata@gmail.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:0902327959"
                  className="group/row flex items-center gap-4 p-2 -mx-2 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/row:scale-110"
                    style={{ backgroundColor: `${ACCENT_ALT}14` }}
                  >
                    <svg className="w-5 h-5" style={{ color: ACCENT_ALT }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.05 11.05 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">Phone</p>
                    <p className="text-sm font-semibold text-black">090-232-7959</p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/pp811010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/row flex items-center gap-4 p-2 -mx-2 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/row:scale-110"
                    style={{ backgroundColor: "#0000000D" }}
                  >
                    <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.79.55A10.51 10.51 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">GitHub</p>
                    <p className="text-sm font-semibold text-black">github.com/pp811010</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}