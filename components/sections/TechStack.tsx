'use client';
import { useState, useEffect } from "react";
import { Sparkles } from 'lucide-react';

type Tech = { name: string; logo: string };
type Category = { 
  num: string; 
  category: string; 
  description: string; 
  techs: Tech[];
  count: number;
};

const STACK: Category[] = [
  {
    num: "01", 
    category: "AI & Machine Learning",
    description: "Retrieval-Augmented Generation (RAG), Agentic RAG, LLM Integration, Data Ingestion & Retriever Pipelines",
    count: 4,
    techs: [
      { name: "RAG", logo: "https://cdn.simpleicons.org/openai" },
      { name: "Agentic RAG", logo: "https://cdn.simpleicons.org/anthropic" },
      { name: "LLM Integration", logo: "https://cdn.simpleicons.org/huggingface" },
      { name: "Data Ingestion", logo: "https://cdn.simpleicons.org/tensorflow" },
    ],
  },
  {
    num: "02", 
    category: "Languages",
    description: "Python, Golang, Java (OOP), TypeScript, JavaScript, Dart, HTML, CSS, C, C++, SQL",
    count: 11,
    techs: [
      { name: "Python", logo: "https://cdn.simpleicons.org/python" },
      { name: "Golang", logo: "https://cdn.simpleicons.org/go" },
      { name: "Java", logo: "https://cdn.simpleicons.org/openjdk" },
      { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript" },
      { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript" },
      { name: "Dart", logo: "https://cdn.simpleicons.org/dart" },
      { name: "HTML", logo: "https://cdn.simpleicons.org/html5" },
      { name: "CSS", logo: "https://cdn.simpleicons.org/css3" },
      { name: "C", logo: "https://cdn.simpleicons.org/c" },
      { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus" },
      { name: "SQL", logo: "https://cdn.simpleicons.org/mysql" },
    ],
  },
  {
    num: "03", 
    category: "Frontend",
    description: "Next.js, React.js, Tailwind CSS, Shadcn/ui, Bootstrap",
    count: 5,
    techs: [
      { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs" },
      { name: "React", logo: "https://cdn.simpleicons.org/react" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Shadcn/ui", logo: "https://cdn.simpleicons.org/shadcnui" },
      { name: "Bootstrap", logo: "https://cdn.simpleicons.org/bootstrap" },
    ],
  },
  {
    num: "04", 
    category: "Mobile",
    description: "Flutter",
    count: 1,
    techs: [{ name: "Flutter", logo: "https://cdn.simpleicons.org/flutter" }],
  },
  {
    num: "05", 
    category: "Backend",
    description: "Gin, FastAPI, Django, Agno",
    count: 4,
    techs: [
      { name: "Gin", logo: "https://cdn.simpleicons.org/go" },
      { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi" },
      { name: "Django", logo: "https://cdn.simpleicons.org/django" },
      { name: "Agno", logo: "https://cdn.simpleicons.org/python" },
    ],
  },
  {
    num: "06", 
    category: "Databases & Vector Search",
    description: "PostgreSQL, MySQL, MongoDB, SQLite, Microsoft SQL Server, Supabase, PGVector",
    count: 7,
    techs: [
      { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" },
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql" },
      { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },
      { name: "SQLite", logo: "https://cdn.simpleicons.org/sqlite" },
      { name: "MSSQL", logo: "https://cdn.simpleicons.org/microsoftsqlserver" },
      { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase" },
      { name: "PGVector", logo: "https://cdn.simpleicons.org/postgresql" },
    ],
  },
  {
    num: "07", 
    category: "Tools & Infrastructure",
    description: "Git, Docker, Postman",
    count: 3,
    techs: [
      { name: "Git", logo: "https://cdn.simpleicons.org/git" },
      { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
      { name: "Postman", logo: "https://cdn.simpleicons.org/postman" },
    ],
  },
];

// Random positions for floating icons
const floatingPositions = [
  { top: '5%', left: '5%', delay: '0s' },
  { top: '15%', right: '5%', delay: '1s' },
  { top: '30%', left: '3%', delay: '2s' },
  { top: '45%', right: '3%', delay: '0.5s' },
  { top: '60%', left: '4%', delay: '1.5s' },
  { top: '75%', right: '4%', delay: '2.5s' },
  { top: '88%', left: '6%', delay: '0.8s' },
  { top: '20%', right: '8%', delay: '1.2s' },
  { top: '50%', left: '2%', delay: '1.8s' },
  { top: '70%', right: '6%', delay: '0.3s' },
  { top: '85%', right: '10%', delay: '2.2s' },
  { top: '92%', left: '10%', delay: '1.6s' },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [panelKey, setPanelKey] = useState(0);

  const active = STACK[activeCategory];
  const totalTechs = STACK.reduce((acc, cat) => acc + cat.techs.length, 0);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleCategoryChange = (i: number) => {
    setActiveCategory(i);
    setPanelKey(k => k + 1);
  };

  return (
    <section
      id="tech-stack"
      className="relative py-10 lg:py-4 px-6 lg:px-8 overflow-hidden bg-white"
    >
      {/* Floating Icons - Medium Size */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {STACK.flatMap(cat => cat.techs).slice(0, 12).map((tech, index) => {
          const pos = floatingPositions[index % floatingPositions.length];
          return (
            <div
              key={index}
              className="absolute w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white flex items-center justify-center p-4 animate-float"
              style={{
                ...pos,
                animationDelay: pos.delay,
                animationDuration: '6s',
              }}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-full h-full object-contain"
                onError={(e) => { 
                  (e.target as HTMLImageElement).style.display = "none"; 
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Grid Layout - Left & Right Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE - Stats & Navigation */}
          <div className="space-y-8 flex flex-col items-center ">
            {/* Center Stats - Medium Size */}
            <div className="text-center lg:text-left">
              <p
                className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
                }}
              >
                A growing library of
              </p>
              
              <div className="space-y-2 mb-8">
                <div
                  className="text-6xl lg:text-7xl font-bold text-gray-900"
                  style={{
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "scale(1)" : "scale(0.9)",
                    transition: "opacity 0.8s ease 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
                  }}
                >
                  {totalTechs} <span className="text-3xl lg:text-4xl font-medium text-gray-600">technologies</span>
                </div>
                <div
                  className="text-5xl lg:text-6xl font-bold text-gray-900"
                  style={{
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "scale(1)" : "scale(0.9)",
                    transition: "opacity 0.8s ease 0.3s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s",
                  }}
                >
                  {STACK.length} <span className="text-2xl lg:text-3xl font-medium text-gray-600">categories</span>
                </div>
                <div
                  className="text-4xl lg:text-5xl font-bold text-gray-900"
                  style={{
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "scale(1)" : "scale(0.9)",
                    transition: "opacity 0.8s ease 0.4s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s",
                  }}
                >
                  {active.count} <span className="text-xl lg:text-2xl font-medium text-gray-600">in {active.category.split(' ')[0]}</span>
                </div>
              </div>
            </div>

            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {STACK.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleCategoryChange(i)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === i 
                      ? 'bg-gray-900 text-white shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                  style={{
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "translateY(0)" : "translateY(10px)",
                    transitionDelay: `${0.5 + (i * 0.05)}s`,
                    transition: "opacity 0.6s ease, transform 0.6s ease, background-color 0.2s",
                  }}
                >
                  {item.category}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Active Category Details */}
          <div
            key={`panel-${panelKey}`}
            className="bg-white rounded-3xl p-8 lg:p-12"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease 0.6s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s",
              animation: "panelFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            <div className="text-left mb-8">
              <p className="text-gray-400 text-xs tracking-widest uppercase mb-2">{active.num}</p>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{active.category}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{active.description}</p>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {active.techs.map((tech, j) => (
                <div
                  key={j}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 cursor-default group"
                  style={{
                    animation: `cardIn 0.5s cubic-bezier(0.16,1,0.3,1) ${j * 0.05}s both`,
                  }}
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => { 
                        (e.target as HTMLImageElement).style.display = "none"; 
                      }}
                    />
                  </div>
                  <span className="text-gray-700 text-xs font-medium text-center group-hover:text-gray-900 transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-left text-gray-400 text-xs tracking-widest uppercase">
              {active.techs.length} {active.techs.length === 1 ? "technology" : "technologies"} in this category
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(2deg);
          }
          50% {
            transform: translateY(-10px) rotate(-1deg);
          }
          75% {
            transform: translateY(-25px) rotate(1deg);
          }
        }
        @keyframes panelFadeUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        @keyframes cardIn {
          from { 
            opacity: 0; 
            transform: translateY(12px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}