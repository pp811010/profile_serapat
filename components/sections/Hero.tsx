"use client";

import { useMemo, useState } from "react";
import { Search, Star, Phone, Mail } from "lucide-react";
import VantaFogBackground from "@/components/VantaGlobeBackground";
import Link from "next/link";



const experienceProjects = [
  {
    id: "exp-1",
    title: "TPA insurance internal web application - Data pro computer system",
    description:
      "พัฒนา Internal Web Application ให้ BlueVenture Group PCL แบบ Full-Stack รวม 4 Submodule พร้อมออกแบบระบบ Data Validation และจัดทำ API Docs ด้วย Swagger",
    techs: [
      "Next.js",
      "Go",
      "Gin Framework",
      "SQL Server",
      "MinIO",
      "RESTful API",
      "Swagger",
      "Docker",
      "Git",
    ],
    image: "/projects/dcs/21.jpg",
    role: "Software Developer Intern",
    date: "Apr 2025",
    category: "Internship",
    likes: 84,
    views: 512,
    pro: true,
    link: "/experience",
  },
];

const projectsData = [
  {
    id: "proj-1",
    title: "Chatdio AI Chatbot Generator Platform (Senior Project)",
    description:
      "Chatdio แพลตฟอร์มสร้างเเละจัดการ chatbot รูปแบบ Agentic Retrieval-Augmented Generation",
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
    date: "Jan 2025",
    category: "Development",
    likes: 231,
    views: 1840,
    pro: false,
    link: "/projects/1",
  },
  {
    id: "proj-2",
    title: "Filmfolio Movie Recommendation Platform",
    description:
      "พัฒนา FilmFolio แพลตฟอร์มที่ช่วยให้ผู้ใช้งานค้นพบภาพยนตร์ที่น่าสนใจผ่านข้อมูล รีวิว และคะแนนจากชุมชนผู้ชมในที่เดียว",
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
    date: "Dec 2024",
    category: "Development",
    likes: 156,
    views: 980,
    pro: false,
    link: "/projects/2",
  },
  {
    id: "proj-3",
    title: "MuMood Review Your Vibe, Discover Your Sound",
    description:
      "MuMood แพลตฟอร์ม Community แลกเปลี่ยนความคิดเห็นเกี่ยวกับเพลงได้อย่างเต้มที่",
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
    date: "Oct 2024",
    category: "Development",
    likes: 98,
    views: 540,
    pro: false,
    link: "/projects/3",
  },
  {
    id: "proj-4",
    title: "Expert Connect",
    description: "Expert Connect เป็นแพลตฟอร์มที่เชื่อมโยงผู้ถามกับผู้เชี่ยวชาญ",
    techs: [
      "Next.js",
      "Go",
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
    date: "Sep 2024",
    category: "Development",
    likes: 143,
    views: 771,
    pro: false,
    link: "/projects/4",
  },
  {
    id: "proj-5",
    title: "Cryptocurrency Trading Simulator Platform",
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
    date: "Nov 2024",
    category: "Product",
    likes: 119,
    views: 626,
    pro: false,
    link: "/projects/5",
  },
  {
    id: "proj-6",
    title: "Sport Management System",
    description: "ระบบบริหารจัดการสนามกีฬาและอุปกรณ์ภายในมหาวิทยาลัย",
    techs: ["HTML", "Tailwind CSS", "JavaScript", "Django", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1170&auto=format&fit=crop",
    role: "Full-Stack Dev",
    date: "Aug 2024",
    category: "Product",
    likes: 76,
    views: 402,
    pro: false,
    link: "/projects/6",
  },
  {
    id: "proj-7",
    title: "Omakase Restaurant Management System",
    description:
      "ระบบจัดการร้านอาหาร Omakase ครอบคลุมการจองโต๊ะ การสั่งอาหาร และการบริหารภายในร้าน",
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap 5",
      "Chart.js",
      "PHP",
      "SQLite",
    ],
    image: "/projects/omakase/hero.jpg",
    role: "Full-Stack Dev",
    date: "Jul 2024",
    category: "Development",
    likes: 61,
    views: 355,
    pro: false,
    link: "/projects/7",
  },
  {
    id: "proj-8",
    title: "Su Clothes - Clothing Store Management System",
    description:
      "Desktop Application สำหรับจัดการร้านค้าเสื้อผ้า ประยุกต์ใช้หลักการ OOP",
    techs: ["Java", "Object-Oriented Programming (OOP)", "Java Swing"],
    image: "/projects/suclothes/hero.jpg",
    role: "Java Developer",
    date: "Jun 2024",
    category: "Design",
    likes: 47,
    views: 289,
    pro: false,
    link: "/projects/8",
  },
];

const allEntries = [...experienceProjects, ...projectsData].filter(Boolean);

const normalizeTech = (tech: string) => tech.startsWith("AWS") ? "AWS" : tech;

const POPULAR_TECH_ORDER = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Go",
  "FastAPI",
  "Python",
  "Node.js",
  "AWS",
  "Docker",
  "PostgreSQL",
];

function sortTechTagsByPopularity(tags: string[]) {
  return [...tags].sort((a, b) => {
    const aIdx = POPULAR_TECH_ORDER.indexOf(a);
    const bIdx = POPULAR_TECH_ORDER.indexOf(b);
    const aRank = aIdx === -1 ? POPULAR_TECH_ORDER.length : aIdx;
    const bRank = bIdx === -1 ? POPULAR_TECH_ORDER.length : bIdx;
    if (aRank !== bRank) return aRank - bRank;
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
}

const TECH_TAGS = sortTechTagsByPopularity(
  Array.from(new Set(allEntries.flatMap((item) => item.techs.map(normalizeTech))))
);

const TECH_RANK_BUCKETS = [
  ["Next.js", "React", "Vue", "Angular", "Flutter", "Dart", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap 5", "Shadcn"],
  ["FastAPI", "Go", "Gin Framework", "Node.js", "Express.js", "Django", "PHP", "Java", "Java Swing", "Python", "Agno Framework"],
  ["RESTful API", "Swagger", "GraphQL"],
  ["PostgreSQL", "SQL Server", "MongoDB Atlas", "SQLite", "Supabase", "pgvector"],
  ["Docker", "Git", "GitHub Actions", "MinIO", "Elastic Load Balancer (ELB)", "Prisma.io", "Clerk", "AWS S3", "AWS EC2", "AWS VPC", "AWS ECS Fargate", "AWS RDS", "AWS ALB", "AWS WAF"],
];

function getTechRank(tech: string) {
  const idx = TECH_RANK_BUCKETS.findIndex((bucket) => bucket.includes(tech));
  return idx === -1 ? TECH_RANK_BUCKETS.length : idx;
}

function sortTechsFrontToBack(techs: string[]) {
  return [...techs].sort((a, b) => getTechRank(a) - getTechRank(b));
}

export default function Hero() {
  const [activeTag, setActiveTag] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allEntries.filter((item) => {
      const matchesTag = activeTag === "All" || item.techs.some((tech) => normalizeTech(tech) === activeTag);
      const matchesQuery =
        q === "" ||
        item.title.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q) ||
        item.techs.some((tech) => tech.toLowerCase().includes(q));
      return matchesTag && matchesQuery;
    });
  }, [activeTag, query]);

  return (
    <div className="bg-white text-gray-900 font-sans">



      <VantaFogBackground
        className="relative min-h-[70vh] flex items-end justify-center"
        options={{
          highlightColor: 0x8cffbf,
          midtoneColor: 0x469f7e,
          lowlightColor: 0xaff4c4,
          blurFactor: 0.72,
          speed: 2.20,
          zoom: 0.90,
        }}
      >
        <div className="flex flex-col items-center gap-6 pb-20 px-6 text-center ">
          <h1 className="max-w-4xl text-4xl md:text-6xl font-semibold uppercase tracking-wide text-black">
            Hello, I'm Serapat Ratanapachai.
          </h1>
          <p className="max-w-xl text-xl text-gray-500">This space is dedicated to highlighting my past work and my entire journey in the software development career path</p>
        </div>
      </VantaFogBackground>


      <section className="bg-gray-50 border-b border-gray-200 sticky top-0 z-20">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 py-4 px-6 max-w-[1600px] mx-auto">
          <div className="flex-1 w-full flex items-center gap-3 bg-white border border-gray-200 rounded-full px-4 py-2">
            <Search size={16} className="text-gray-400 shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search by project name or tech..."
              className="bg-transparent outline-none text-base flex-1 placeholder:text-gray-400 text-gray-900"
            />
          </div>
        </div>


        <div className="flex gap-3 overflow-x-auto px-6 py-4 max-w-[1600px] mx-auto scrollbar">
          <button
            onClick={() => setActiveTag("All")}
            className={`flex items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors ${activeTag === "All"
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
          >
            <Star size={13} />
            All
          </button>
          {TECH_TAGS.map((tech) => {
            const active = activeTag === tech;
            return (
              <button
                key={tech}
                onClick={() => setActiveTag(tech)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm cursor-pointer transition-colors ${active
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {tech}
              </button>
            );
          })}
        </div>
      </section>


      <section className=" px-6 lg:px-10 pb-12 pt-10 max-w-[1600px] mx-auto">
        <h3 className="text-5xl font-bold mb-8 lg:mt-10 text-white [-webkit-text-stroke:1.5px_#197c57] text-center lg:text-right">My Portfolio</h3>

        {filtered.length === 0 ? (
          <p className="text-base text-gray-500">No projects match "{query}".</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        )}
      </section>


      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-6 py-6 max-w-[1600px] mx-auto text-xs text-gray-500">
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="tel:0902327959"
              className="flex items-center gap-1.5 hover:text-gray-800 transition-colors"
            >
              <Phone size={14} />
              090-232-7959
            </a>
            <a
              href="mailto:serapat_rata@gmail.com"
              className="flex items-center gap-1.5 hover:text-gray-800 transition-colors"
            >
              <Mail size={14} />
              serapat_rata@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}



function ProjectCard({ project }) {
  const sortedTechs = sortTechsFrontToBack(project.techs || []);

  return (
    <Link
      href={project.link || "#"}
      className="group block cursor-pointer ring ring-gray-100 hover:ring-gray-300 p-3 rounded-xl "
    >
      <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop";
          }}
        />
      </div>

      <div className="mt-3">
        <div className="min-w-0">
          <p className="text-lg font-bold text-gray-900 break-words ">
            {project.title}
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-sm text-gray-500 line-clamp-1">
              {project.role}
            </span>
            {project.pro && (
              <span className="text-[10px] font-bold text-white bg-blue-600 rounded px-1.5 py-0.5 shrink-0">
                Work Experience
              </span>
            )}
          </div>
        </div>

        {sortedTechs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {sortedTechs.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs text-gray-600 bg-gray-100 border border-gray-200 rounded-full px-2 py-0.5"
              >
                {tech}
              </span>
            ))}
            {sortedTechs.length > 3 && (
              <span className="text-xs text-gray-400 px-1 py-0.5">
                +{sortedTechs.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}