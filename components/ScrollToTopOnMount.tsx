"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTopOnMount() {
  const pathname = usePathname();

  useEffect(() => {
    // ใช้ setTimeout เพื่อให้ทำงานหลัง Lenis initialize
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null; // ไม่ render อะไรเลย
}