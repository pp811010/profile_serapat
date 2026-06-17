'use client';
import Image from "next/image";

export default function Hero() {


  return (
    <section className="hero-section pt-25 pb-24 px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-12 lg:gap-5 ">
          <div>
            <Image
              src="/profile2.jpg"
              width={200}
              height={200}
              alt="profile"
              className="rounded-full w-[250px] h-[250px]  object-cover shrink-0"
            />
          </div>
          <div className="text-center max-w-4xl mx-auto lg:mb-5 mt-5 lg:mb-16 ">
            <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
              Software Developer & Full-Stack
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              <span className="text-blue-600 font-medium">
                Serapat Ratanapachai{'\''}s
              </span>
              {" "}Portfolio
            </p>


          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-12 items-start">

          <div>
            {/* Card 1 */}
            <div className="feature-card">
              <div className="flex items-start gap-4 ">
                <div className="code-icon">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>

                  <p className="text-gray-600 leading-relaxed">
                    Building high-performance APIs and business systems using Go, FastAPI, PostgreSQL, and modern software architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="feature-item">
              <div className="flex items-start gap-3">
                <div className="feature-icon">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm lg:text-base lg:font-medium text-gray-900 mb-1">
                    Creating responsive and intuitive user experiences with Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui.
                  </h4>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="feature-item">
              <div className="flex items-start gap-3">
                <div className="feature-icon">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm lg:text-base lg:font-medium text-gray-900 mb-1">
                    Developing intelligent systems powered by Agentic RAG, LLMs, vector databases, and multi-source knowledge retrieval.
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="mockup-container">
              <Image
                src="https://cdn.macstories.net/002/nova-1615919427833.png"
                alt="Serapat Ratanapachai Profile"
                width={600}
                height={500}
                priority
                className="mockup-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}