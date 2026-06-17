"use client";

import { useEffect, ReactNode, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function LenisProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const previousPathRef = useRef<string>("");

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // เก็บ scroll position ก่อนเปลี่ยนหน้า (เฉพาะหน้า home)
    if (previousPathRef.current === "/" && lenisRef.current) {
      const scrollPosition = lenisRef.current.scroll;
      sessionStorage.setItem("homeScrollPosition", scrollPosition.toString());
    }

    // ตรวจสอบว่ากำลังไปหน้า detail หรือไม่
    const isGoingToDetail = pathname.startsWith("/projects/") && pathname !== "/projects/";
    const isComingFromDetail = previousPathRef.current.startsWith("/projects/") && pathname === "/";

    if (isGoingToDetail) {
      // เข้า detail → scroll ขึ้นบนสุด
      requestAnimationFrame(() => {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, {
            duration: 0,
            force: true,
          });
        }
      });
    } else if (isComingFromDetail) {
      // กลับ home → restore scroll position
      const savedPosition = sessionStorage.getItem("homeScrollPosition");
      if (savedPosition && lenisRef.current) {
        setTimeout(() => {
          lenisRef.current?.scrollTo(parseFloat(savedPosition), {
            duration: 0,
            force: true,
          });
        }, 100);
      }
    }

    previousPathRef.current = pathname;
  }, [pathname]);

  return <>{children}</>;
}