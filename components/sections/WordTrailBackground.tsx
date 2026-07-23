"use client";

import { useEffect, useRef } from "react";

const WORDS = [
  "Next.js", "React", "TypeScript", "Go", "Python", "FastAPI",
  "PostgreSQL", "Docker", "Git", "AWS", "Full-Stack", "Tailwind CSS",
  "Flutter", "RESTful API", "Gin", "Developer", "Engineering", "Design",
  "Software", "Frontend", "Backend", "AI Chatbot", "Agno", "Gin", "SQL Server"
];

// Color configs matching a light theme backdrop (vibrant pastel and navy/purple capsules)
const COLORS = [
  { bg: "bg-[#0b1354]", text: "text-white" },       // Navy
  { bg: "bg-[#540b52]", text: "text-white" },       // Deep Purple
  { bg: "bg-[#e6ff00]", text: "text-black" },       // Neon Lime
  { bg: "bg-[#c3c4f7]", text: "text-[#0b1354]" },   // Pastel Lavender
  { bg: "bg-[#fcc8e7]", text: "text-[#540b52]" },   // Pastel Pink
  { bg: "bg-[#c2fcd6]", text: "text-emerald-950" }, // Mint Green
  { bg: "bg-blue-600", text: "text-white" },        // Electric Blue
  { bg: "bg-pink-500", text: "text-white" }         // Hot Pink
];

interface ParticleData {
  element: HTMLDivElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  scale: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function WordTrailBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastX = useRef<number>(0);
  const lastY = useRef<number>(0);
  const wordIndex = useRef<number>(0);
  const particlesRef = useRef<ParticleData[]>([]);
  const requestRef = useRef<number | null>(null);
  const isAnimating = useRef<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const parent = container.parentElement;
    if (!parent) return;

    const spawnParticle = (x: number, y: number) => {
      // Choose next word and color
      const word = WORDS[wordIndex.current % WORDS.length];
      const color = COLORS[wordIndex.current % COLORS.length];
      wordIndex.current++;

      // Create chip element
      const el = document.createElement("div");
      el.innerText = word;
      
      // Tailwind classes matching capsule style
      el.className = `absolute px-5 py-2.5 rounded-full text-sm md:text-base font-bold shadow-md whitespace-nowrap pointer-events-none select-none transition-transform duration-75 ease-out ${color.bg} ${color.text}`;
      
      // Set initial styles
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.transform = `translate(-50%, -50%) scale(1.1)`;
      el.style.opacity = "1";
      
      container.appendChild(el);

      // Random physics forces: drift slightly outward, float upwards/downwards
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.5 + Math.random() * 1.5;
      const vx = Math.cos(angle) * speed;
      // Drift upwards slightly (negative vy) to simulate floating
      const vy = -1.0 - Math.random() * 1.5;

      const maxLife = 50 + Math.floor(Math.random() * 20); // 50 to 70 frames (approx 1 sec)

      particlesRef.current.push({
        element: el,
        x,
        y,
        vx,
        vy,
        scale: 1.1,
        opacity: 1,
        life: maxLife,
        maxLife
      });

      // Start animation loop if not already running
      if (!isAnimating.current) {
        isAnimating.current = true;
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      const active = particlesRef.current;
      for (let i = active.length - 1; i >= 0; i--) {
        const p = active[i];
        p.life--;

        if (p.life <= 0) {
          p.element.remove();
          active.splice(i, 1);
          continue;
        }

        // Apply physics
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // slight gravity pull down after initial float up
        p.vx *= 0.96; // drag
        p.vy *= 0.96;

        // Visual fade out and scale down towards the end of life
        const ratio = p.life / p.maxLife;
        p.opacity = ratio;
        // Shrink slightly but remain readable
        p.scale = 0.6 + 0.5 * ratio;

        // Apply styles directly to DOM
        p.element.style.left = `${p.x}px`;
        p.element.style.top = `${p.y}px`;
        p.element.style.transform = `translate(-50%, -50%) scale(${p.scale})`;
        p.element.style.opacity = `${p.opacity}`;
      }

      if (active.length > 0) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        isAnimating.current = false;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Distance threshold: spawn a chip every 35px of movement
      const distance = Math.hypot(x - lastX.current, y - lastY.current);
      if (distance > 35) {
        spawnParticle(x, y);
        lastX.current = x;
        lastY.current = y;
      }
    };

    // Support mobile touch gestures
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = parent.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      const distance = Math.hypot(x - lastX.current, y - lastY.current);
      if (distance > 35) {
        spawnParticle(x, y);
        lastX.current = x;
        lastY.current = y;
      }
    };

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("touchmove", handleTouchMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      // Clean up any remaining particles from DOM
      particlesRef.current.forEach(p => p.element.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10"
    />
  );
}
