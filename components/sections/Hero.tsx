"use client";

import { useMemo, useState, useEffect } from "react";
import { Search, Star, Phone, Mail, X, Copy, Check, ExternalLink } from "lucide-react";
import Link from "next/link";

// Custom Github icon component since brand icons were removed in lucide-react v1.0+
function Github({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}



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
    date: "Jan 2026",
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
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    const handleOpenContact = () => setIsContactOpen(true);
    window.addEventListener("open-contact", handleOpenContact);
    return () => window.removeEventListener("open-contact", handleOpenContact);
  }, []);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

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
      <div className="relative h-screen w-full bg-white overflow-hidden select-none flex items-center justify-center">
        {/* Title / Name (Top Left) */}
        <div className="absolute top-10 left-6 md:top-16 md:left-16 flex flex-col gap-1 z-20 text-left">
          <span className="text-[10px] md:text-xs tracking-[0.2em] text-slate-400 font-bold uppercase">
            Software Developer
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[0.95] uppercase">
            Serapat <br className="hidden md:inline" /> Ratanapachai
          </h1>
        </div>

        {/* Navigation (Top Right) */}
        <div className="absolute top-10 right-6 md:top-16 md:right-16 flex flex-col items-end gap-3 z-20 text-right">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs md:text-sm font-bold tracking-[0.15em] text-slate-900 hover:text-cyan-500 transition-colors uppercase cursor-pointer"
          >
            Home
          </button>
          <button 
            onClick={() => document.getElementById('portfolio-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-xs md:text-sm font-bold tracking-[0.15em] text-slate-400 hover:text-slate-900 transition-colors uppercase cursor-pointer"
          >
            Projects
          </button>
          <button 
            onClick={() => setIsContactOpen(true)}
            className="text-xs md:text-sm font-bold tracking-[0.15em] text-slate-400 hover:text-slate-900 transition-colors uppercase cursor-pointer text-right outline-none"
          >
            Contact
          </button>
        </div>

        {/* Center 3D Asset */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden mt-6 md:mt-0">
          <img 
            src="/surf.jpg" 
            alt="3D Traffic Light" 
            className="h-[65%] md:h-[85%] w-auto object-contain select-none opacity-[0.98]"
          />
        </div>

       

        {/* Footer Meta Info (Bottom Row) */}
        <div className="absolute bottom-10 left-6 right-6 md:bottom-16 md:left-16 md:right-16 grid grid-cols-1 md:grid-cols-3 gap-6 z-20 pt-8 border-t border-slate-100/80">
          <div className="flex flex-col gap-1 text-left">
            <span className="text-[10px] md:text-xs tracking-[0.2em] text-slate-400 font-bold uppercase">Base</span>
            <span className="text-xs md:text-sm font-bold text-slate-900 uppercase">Bangkok, Thailand</span>
          </div>
          <div className="flex flex-col gap-1 text-left">
            <span className="text-[10px] md:text-xs tracking-[0.2em] text-slate-400 font-bold uppercase">Focus</span>
            <span className="text-xs md:text-sm font-bold text-slate-900 uppercase">Full-Stack / Next.js / Go / Python</span>
          </div>
          <div className="flex flex-col gap-1 text-left">
            <span className="text-[10px] md:text-xs tracking-[0.2em] text-slate-400 font-bold uppercase">Index</span>
            <span className="text-xs md:text-sm font-bold text-slate-900 uppercase">Portfolio 2026</span>
          </div>
        </div>
      </div>


      <section className="bg-white/70 backdrop-blur-md border-b border-gray-200/40 sticky top-0 z-20">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 py-4 px-6 w-screen mx-auto">
          <div className="flex-1 w-full flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-gray-200/80 rounded-full px-4 py-2 focus-within:bg-white/95 focus-within:border-cyan-500/50 focus-within:ring-2 focus-within:ring-cyan-500/10 transition-all duration-200">
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


        <div className="flex gap-3 overflow-x-auto px-6 py-4 max-full mx-auto scrollbar">
          <button
            onClick={() => setActiveTag("All")}
            className={`flex items-center gap-1.5 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all duration-200 ${activeTag === "All"
              ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white border-transparent shadow-md shadow-cyan-500/15"
              : "bg-white/40 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-white/90 hover:border-gray-300 hover:text-gray-900"
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
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm cursor-pointer transition-all duration-200 ${active
                  ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white border-transparent shadow-md shadow-cyan-500/15"
                  : "bg-white/40 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-white/90 hover:border-gray-300 hover:text-gray-900"
                  }`}
              >
                {tech}
              </button>
            );
          })}
        </div>
      </section>


      <section id="portfolio-section" className=" px-6 lg:px-10 pb-12 pt-10 max-w-full mx-auto">


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

      {/* Contact Modal Popup */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-sm bg-white border border-slate-100 rounded-3xl p-8 shadow-2xl animate-scale-up">
            {/* Close Button */}
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer outline-none"
            >
              <X size={16} />
            </button>

            {/* Header Icon */}
            <div className="mx-auto w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/10 mb-5">
              <Mail size={20} className="text-white" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-slate-900 mb-2">Get in Touch</h3>

            {/* Items List */}
            <div className="space-y-3.5">
              {/* Phone */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100/55">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                    <Phone size={14} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Phone</span>
                    <span className="text-sm font-semibold text-slate-800">090-232-7959</span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard("090-232-7959", "phone")}
                  className="p-2 rounded-lg hover:bg-slate-200/50 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  {copiedField === "phone" ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100/55">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                    <Mail size={14} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email</span>
                    <span className="text-sm font-semibold text-slate-800">serapat_rata@gmail.com</span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard("serapat_rata@gmail.com", "email")}
                  className="p-2 rounded-lg hover:bg-slate-200/50 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  {copiedField === "email" ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>

              {/* GitHub */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100/55">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                    <Github size={14} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">GitHub</span>
                    <span className="text-sm font-semibold text-slate-800">https://github.com/pp811010</span>
                  </div>
                </div>
                <a
                  href="https://github.com/pp811010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-slate-200/50 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer flex items-center justify-center"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



function ProjectCard({ project }) {
  const sortedTechs = sortTechsFrontToBack(project.techs || []);

  return (
    <Link
      href={project.link || "#"}
      className="group block cursor-pointer bg-white border border-gray-100/70 rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gray-50 border border-gray-100/50">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="mt-4">
        <div className="min-w-0">
          <h4 className="text-base font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors line-clamp-1">
            {project.title}
          </h4>
          <div className="flex items-center justify-between gap-1.5 mt-1.5">
            <span className="text-xs text-gray-500 font-medium line-clamp-1">
              {project.role}
            </span>
            {project.pro && (
              <span className="text-[9px] font-semibold text-cyan-700 bg-cyan-50 border border-cyan-100/50 rounded px-1.5 py-0.5 shrink-0">
                Work
              </span>
            )}
          </div>
        </div>

        {sortedTechs.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {sortedTechs.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] text-slate-600 bg-slate-50 border border-slate-100/80 rounded-md px-2 py-0.5 font-medium tracking-wide"
              >
                {tech}
              </span>
            ))}
            {sortedTechs.length > 3 && (
              <span className="text-[10px] text-slate-400 font-medium px-1 py-0.5">
                +{sortedTechs.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-50 text-[11px] text-slate-400 font-medium">
          <span>Year</span>
          <span>{project.date ? project.date.split(" ").pop() : ""}</span>
        </div>
      </div>
    </Link>
  );
}