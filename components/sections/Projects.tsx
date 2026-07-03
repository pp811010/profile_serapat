"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Files, User, ArrowRight } from 'lucide-react';
import { useState } from "react";
import Experience from "./Experience2";

const projectsData = [
  {
    id: 1,
    title: "Chatdio AI Chatbot Generator Platform (Senior Project)",
    description: "Chatdio แพลตฟอร์มสร้างเเละจัดการ chatbot รูปแบบ Agentic Retrieval-Augmented Generation ",
    techs: ["Next.js","FastAPI","Agno Framework","PostgreSQL","pgvector","AWS S3","Tailwind CSS","Cohere Reranker","Embedded Model"],
    image: "/projects/chatdio/Home.jpg",
    role: "Full-Stack Dev",
    date: "Jan 2025",
    category: "Development"
  },
  {
    id: 2,
    title: "Filmfolio Movie Recommendation Platform",
    description: "พัฒนา FilmFolio แพลตฟอร์มที่ช่วยให้ผู้ใช้งานค้นพบภาพยนตร์ที่น่าสนใจผ่านข้อมูล รีวิว และคะแนนจากชุมชนผู้ชมในที่เดียว",
    techs: ["React","Node.js","Express.js","MongoDB Atlas","AWS EC2","AWS S3","AWS VPC","Elastic Load Balancer (ELB)"],
    image: "/projects/filmfolio/hero.jpg",
    role: "Frontend Developer",
    date: "Dec 2024",
    category: "Development"
  },
  {
    id: 3,
    title: "BitX Cryptocurrency Paper Trading Platform",
    description: "BitX เป็นแพลตฟอร์มจำลองการซื้อขาย Cryptocurrency",
    techs: ["Next.js","Tailwind CSS","Shadcn","Prisma.io","Supabase","Clerk","CoinGecko API","Stripe API"],
    image: "/projects/bitx/hero.png",
    role: "Full-Stack Dev",
    date: "Nov 2024",
    category: "Product"
  },
  {
    id: 4,
    title: "MuMood Review Your Vibe, Discover Your Sound",
    description: "MuMood แพลตฟอร์ม Community แลกเปลี่ยนความคิดเห็นเกี่ยวกับเพลงได้อย่างเต้มที่",
    techs: ["Flutter","Dart","FastAPI","Python","PostgreSQL","SQLAlchemy","Pydantic","Spotify API","Deezer API"],
    image: "/projects/mumood/hero.jpg",
    role: "Full-Stack Dev",
    date: "Oct 2024",
    category: "Development"
  },
  {
    id: 5,
    title: "Expert Connect",
    description: "Expert Connect เป็นแพลตฟอร์มที่เชื่อมโยงผู้ถามกับผู้เชี่ยวชาญ",
    techs: ["Next.js","Golang","PostgreSQL","AWS ECS Fargate","AWS RDS","AWS S3","AWS ALB","AWS WAF","GitHub Actions"],
    image: "/projects/expert-connect/hero.jpg",
    role: "Full-Stack Dev",
    date: "Sep 2024",
    category: "Development"
  },
  {
    id: 6,
    title: "Sport Management System",
    description: "ระบบบริหารจัดการสนามกีฬาและอุปกรณ์ภายในมหาวิทยาลัย",
    techs: ["HTML","Tailwind CSS","JavaScript","Django","PostgreSQL"],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1170&auto=format&fit=crop",
    role: "Full-Stack Dev",
    date: "Aug 2024",
    category: "Product"
  },
  {
    id: 7,
    title: "Omakase Resturan Management System",
    description: "ระบบจัดการร้านอาหาร Omakase ครอบคลุมการจองโต๊ะ การสั่งอาหาร และการบริหารภายในร้าน",
    techs: ["HTML","CSS","JavaScript","Tailwind CSS","Bootstrap 5","Chart.js","PHP","SQLite"],
    image: "/projects/omakase/hero.jpg",
    role: "Full-Stack Dev",
    date: "Jul 2024",
    category: "Development"
  },
  {
    id: 8,
    title: "Su Clothes - Clothing Store Management System",
    description: "Desktop Application สำหรับจัดการร้านค้าเสื้อผ้า ประยุกต์ใช้หลักการ OOP",
    techs: ["Java","Object-Oriented Programming (OOP)","Java Swing"],
    image: "/projects/suclothes/hero.jpg",
    role: "Java Developer",
    date: "Jun 2024",
    category: "Design"
  },
];

const filterOptions = [
  { key: "all", label: "View all" },
  { key: "Development", label: "Development" },
  { key: "Product", label: "Product" },
  { key: "Design", label: "Design" },
];

const aboutMeContent = {
  title: "About Me",
  subtitle: "Get to know me better",
  description: "I'm a passionate full-stack developer with expertise in building modern web applications and scalable systems. With a strong foundation in both frontend and backend technologies, I love creating products that make a difference.",
  skills: [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Python", "Go", "FastAPI", "Django"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "GitHub Actions", "CI/CD"] },
  ],
  interests: [
    { title: "Web Development", description: "Building fast, responsive, and accessible web applications" },
    { title: "System Design", description: "Creating scalable and maintainable architecture" },
    { title: "UI/UX Design", description: "Crafting intuitive and beautiful user experiences" },
    { title: "Open Source", description: "Contributing to community projects and sharing knowledge" },
  ],
};

export default function Projects() {
  const [menu, setMenu] = useState("projects");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  // Show only first 4 projects for the grid layout
  const displayedProjects = filteredProjects.slice(0, 4);

  return (
    <section
      id="portfolio"
      className="bg-[#f0f0f0] py-20 px-8 lg:px-16 relative z-10 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Navigation Tabs */}
        <div className="mb-12">
          <div className="flex items-center gap-6 text-sm">
            <button
              onClick={() => setMenu("about")}
              className={`transition-colors ${
                menu === "about" ? "text-black font-semibold" : "text-gray-500 hover:text-black"
              }`}
            >
              About
            </button>
            <button
              onClick={() => setMenu("experience")}
              className={`transition-colors ${
                menu === "experience" ? "text-black font-semibold" : "text-gray-500 hover:text-black"
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setMenu("projects")}
              className={`transition-colors ${
                menu === "projects" ? "text-black font-semibold" : "text-gray-500 hover:text-black"
              }`}
            >
              Projects
            </button>
          </div>
        </div>

        {/* Content Area */}
        {menu === "about" && (
          <div className="max-w-3xl">
            <h1 className="text-5xl font-semibold text-black mb-8">About Me</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              {aboutMeContent.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aboutMeContent.skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <h3 className="text-sm font-semibold text-black uppercase tracking-wide mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1.5 bg-white text-gray-800 text-sm rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {menu === "experience" && (
          <div>
            <h1 className="text-5xl font-semibold text-black mb-8">Work Experience</h1>
            <Experience />
          </div>
        )}

        {menu === "projects" && (
          <div>
            {/* Header */}
            <div className="mb-12 max-w-xl">
              <h1 className="text-5xl font-semibold text-black mb-6">Works Overview</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                [In this collection, you'll find a mix of projects that range from practical design to incredibly absurd art.]
              </p>
            </div>

            {/* Projects Grid - 2x2 Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayedProjects.map((project, index) => (
                <Link key={project.id} href={`/projects/${project.id}`}>
                  <article className="group cursor-pointer">
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl bg-black aspect-[4/3] mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="flex items-start gap-3">
                      <span className="text-sm text-gray-500 font-medium">{index + 1}</span>
                      <div>
                        <h3 className="text-base font-medium text-black mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* View All Link */}
            {filteredProjects.length > 4 && (
              <div className="mt-12 text-center">
                <Link 
                  href="/projects" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-black border-b border-black pb-1 hover:opacity-70 transition-opacity"
                >
                  View all projects <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}