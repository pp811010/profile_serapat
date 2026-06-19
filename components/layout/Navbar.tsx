"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }
 
    const sectionIds = navLinks.filter((l) => l.id !== "home").map((l) => l.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
 
    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection("home");
      }
    };
 
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        } else if (window.scrollY < 80) {
          setActiveSection("home");
        }
      },
      { rootMargin: "-64px 0px -55% 0px", threshold: 0 }
    );
 
    sections.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
 
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    if (targetId === "home") {
      if (pathname !== "/") {
        window.location.href = "/";
        return;
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      window.history.replaceState(null, "", "/");
      return;
    }

    if (pathname !== "/") {
      window.location.href = `/#${targetId}`;
      return;
    }

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = 64;

      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      window.history.replaceState(null, "", `#${targetId}`);
    }

    setIsMobileMenuOpen(false);
  };


  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50  h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between ">

        <Link href="/" className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <span>Serapat R.</span>
        </Link>


        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScrollToSection(e, link.id)}
              className={`nav-link-main rounded-full transition-colors ${
                activeSection === link.id
                  ? "text-gray-600  font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.name}
            </a>
          ))}


          <a href="/resume_serapat_ratanapachai.pdf" target="_blank" rel="noopener noreferrer" className="btn-main-primary ml-4">
            Resume
          </a>
        </div>

        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg absolute left-0 right-0">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollToSection(e, link.id)}
                className="block px-4 py-2 text-gray-700 font-medium hover:bg-gray-100 rounded-lg transition"
              >
                {link.name}
              </a>
            ))}
            <a href="/resume_serapat_ratanapachai.pdf" target="_blank" rel="noopener noreferrer" className="block w-full text-center btn-main-primary mt-2">
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}