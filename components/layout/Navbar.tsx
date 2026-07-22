"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  const [isVisible, setIsVisible] = useState(pathname !== "/");

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/") {
      setCurrentPage("home");
    } else if (pathname === "/projects") {
      setCurrentPage("projects");
    } else if (pathname === "/experience") {
      setCurrentPage("experience");
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { pathName: "/", id: "home", name : "Home" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500 ease-in-out bg-white/75 backdrop-blur-md border-b border-gray-100/60 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-full mx-auto px-10 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 bg-balck rounded-lg flex items-center justify-center shadow-md shadow-cyan-500/10 group-hover:scale-105 transition-transform duration-200">
            <span className="text-white text-[10px] font-black tracking-wider">SR</span>
          </div>
          <span className="text-sm font-bold text-gray-900 group-hover:text-cyan-700 transition-colors duration-200">Serapat R.</span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.pathName}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                 currentPage === link.id
                  ? "text-cyan-700"
                  : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        
        </div>

        <button
          className="md:hidden p-2 text-gray-700 hover:text-cyan-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl absolute left-0 right-0">
          <div className="px-6 py-4 space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.pathName}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                  currentPage === link.id
                    ? "text-cyan-700 bg-cyan-50 border border-cyan-100/40"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
           
          </div>
        </div>
      )}
    </nav>
  );
}