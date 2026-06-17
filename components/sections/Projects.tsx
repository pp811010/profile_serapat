"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "Chatdio AI Chatbot Generator Platform (Senior Project)",
    description: "Chatdio แพลตฟอร์มสร้างเเละจัดการ chatbot รูปแบบ Agentic Retrieval-Augmented Generation ",
    techs: [
      "Next.js",
      "FastAPI",
      "Agno Framework",
      "PostgreSQL",
      "pgvector",
      "AWS S3",
      "Tailwind CSS",
      "Cohere Reranker",
      "Embedded Model",
    ],
    image: "/projects/chatdio/Home.jpg",
    role: "Full-Stack Dev",
  },
  {
    id: 2,
    title: "Filmfolio Movie Recommendation Platform",
    description: "พัฒนา FilmFolio แพลตฟอร์มที่ช่วยให้ผู้ใช้งานค้นพบภาพยนตร์ที่น่าสนใจผ่านข้อมูล รีวิว และคะแนนจากชุมชนผู้ชมในที่เดียว",
    techs: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "AWS EC2",
      "AWS S3",
      "AWS VPC",
      "Elastic Load Balancer (ELB)",
    ],
    image: "/projects/filmfolio/hero.jpg",
    role: "Frontend Developer",
  },
  {
    id: 3,
    title: "BitX Cryptocurrency Paper Trading Platform",
    description: "BitX เป็นแพลตฟอร์มจำลองการซื้อขาย Cryptocurrency",
    techs: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn",
      "Prisma.io",
      "Supabase",
      "Clerk",
      "CoinGecko API",
      "Stripe API",
    ],
    image: "/projects/bitx/hero.png",
    role: "Full-Stack Dev",
  },
  {
    id: 4,
    title: "MuMood Review Your Vibe, Discover Your Sound",
    description: "MuMood แพลตฟอร์ม Community แลกเปลี่ยนความคิดเห็นเกี่ยวกับเพลงได้อย่างเต้มที่ เพื่อให้ผู้ใช้งานค้นพบเพลงที่ตรงกับอารมณ์และความชอบของตนเอง",
    techs: [
      "Flutter",
      "Dart",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Pydantic",
      "Spotify API",
      "Deezer API",
    ],
    image: "/projects/mumood/hero.jpg",
    role: "Full-Stack Dev",
  },
  {
    id: 5,
    title: "Expert Connect",
    description: "Expert Connect เป็นแพลตฟอร์มที่เชื่อมโยงผู้ถามกับผู้เชี่ยวชาญ ช่วยให้การค้นหาคำตอบและการแก้ปัญหาที่ซับซ้อนเป็นเรื่องง่ายและน่าเชื่อถือ",
    techs: [
      "Next.js",
      "Golang",
      "PostgreSQL",
      "AWS ECS Fargate",
      "AWS RDS",
      "AWS S3",
      "AWS ALB",
      "AWS WAF",
      "GitHub Actions",
    ],
    image: "/projects/expert-connect/hero.jpg",
    role: "Full-Stack Dev",
  },
  {
    id: 6,
    title: "Sport Management System",
    description: "พัฒนา Sport Management System ระบบบริหารจัดการสนามกีฬาและอุปกรณ์ภายในมหาวิทยาลัย ที่ช่วยลดปัญหาการจองซ้ำซ้อน เพิ่มประสิทธิภาพการติดตามปัญหา และรองรับการจัดการงานของเจ้าหน้าที่อย่างเป็นระบบ",
    techs: ["HTML", "Tailwind CSS", "JavaScript", "Django", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "Full-Stack Dev",
  },
  {
    id: 7,
    title: "Omakase Resturan Management System",
    description: "พัฒนา Restaurant Management System สำหรับจำลองการดำเนินธุรกิจร้านอาหาร Omakase ระดับพรีเมียม ครอบคลุมการจองโต๊ะ การสั่งอาหารล่วงหน้า และการบริหารจัดการภายในร้านแบบครบวงจร",
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap 5",
      "Chart.js",
      "Font Awesome",
      "PHP",
      "SQLite",
    ],
    image: "/projects/omakase/hero.jpg",
    role: "Full-Stack Dev",
  },
];

const filterOptions = [
  { key: "nextjs", label: "Next.js" },
  { key: "react", label: "React" },
  { key: "go", label: "Go" },
  { key: "django", label: "Django" },
  { key: "fastapi", label: "FastAPI" },
  { key: "nodejs", label: "Node.js" },
  { key: "python", label: "Python" },
  { key: "vue", label: "Vue.js" },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 lg:py-24 px-6 lg:px-8  relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex  flex-col lg:items-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-medium text-gray-900">Projects</h2>

            </div>
            <span className="px-3 py-1 bg-[#7345d0] text-white text-sm font-medium rounded-full">
              {projectsData.length} Works

            </span>
          </div>
          <p className="text-gray-500  text-lg mb-6">
            A collection of projects I have worked on throughout my journey as a developer.
          </p>
        </div>

        {projectsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <article
                  className="group bg-white rounded-xl border border-[#c0c0c0] overflow-hidden transition-all duration-300 hover:shadow-[0_4px_12px_rgba(60,64,67,0.15)] hover:-translate-y-0.5 cursor-pointer"
                >
                  {/* Image */}
                  {project.image && (
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techs.map((tech) => {
                        const techLabel =
                          filterOptions.find((f) => f.key === tech)?.label || tech;
                        return (
                          <span
                            key={tech}
                            className="inline-block px-3 py-1 text-sm font-medium rounded bg-gray-300/50 text-black/70"
                          >
                            {techLabel}
                          </span>
                        );
                      })}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/profile2.jpg"
                          alt="Author"
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Serapat R.
                          </p>
                          <p className="text-xs text-gray-500">{project.role}</p>
                        </div>
                      </div>
                      <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg
                          className="w-4 h-4 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-5 text-google-gray">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters to find what you&apos;re looking for.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}