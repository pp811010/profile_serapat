"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);



  useEffect(() => {
    if (pathname === "/") {
      setCurrentPage("home");
    }else if (pathname === "/projects") {
      setCurrentPage("projects");
    }else if (pathname === "/experience"){
      setCurrentPage("experience")
    }
    
  }, [pathname]);

 

  const navLinks = [
    { pathName: "/", id: "home", name : "All Projects" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
         "bg-[#fds45] backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">SR</span>
          </div>
          <span className="text-sm font-bold text-black">Serapat R.</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.pathName}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                 currentPage === link.id
                  ? "text-black font-semibold bg-black/5"
                  : "text-black/60 hover:text-black hover:bg-black/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-black"
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
        <div className="md:hidden bg-[#e8e8e8] border-t border-black/10 shadow-lg absolute left-0 right-0">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.pathName}
                className={`block px-4 py-3 rounded-lg text-sm transition ${
                  currentPage === link.id
                    ? "text-black font-semibold bg-black/5"
                    : "text-black/60 hover:text-black hover:bg-black/5"
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