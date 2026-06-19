"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // เช็คว่าอยู่หน้า Home หรือหน้าอื่น
  const isHomePage = pathname === "/";

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
      return;
    }

    if (pathname !== "/") {
      window.location.href = `/#${targetId}`;
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 56;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({ top: targetPosition, behavior: "smooth" });
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-blue-400/10 shadow-lg shadow-blue-950/20"
            : "bg-transparent"
          : "bg-white border-b border-gray-200 shadow-sm"
      }`}
      style={{ height: "56px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`text-lg font-bold flex items-center gap-2 tracking-wide transition-colors ${
            isHomePage
              ? "text-white hover:text-blue-300"
              : "text-gray-900 hover:text-blue-600"
          }`}
        >
          <span>Serapat R.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScrollToSection(e, link.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isHomePage
                  ? activeSection === link.id
                    ? "text-white font-semibold bg-blue-500/20 border border-blue-400/30"
                    : "text-blue-200/70 hover:text-white hover:bg-white/5"
                  : activeSection === link.id
                  ? "text-white font-semibold bg-blue-600"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume_serapat_ratanapachai.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-3 px-5 py-1.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300 ${
              isHomePage
                ? "border border-blue-400/30 text-blue-100 hover:bg-blue-500/10 hover:border-blue-300/50"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }`}
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isHomePage
              ? "text-white hover:bg-white/5"
              : "text-gray-700 hover:bg-gray-100"
          }`}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden backdrop-blur-xl border-t shadow-2xl absolute left-0 right-0 top-14 ${
            isHomePage
              ? "bg-slate-950/95 border-blue-400/10"
              : "bg-white/95 border-gray-200"
          }`}
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollToSection(e, link.id)}
                className={`block px-4 py-2.5 font-medium rounded-lg transition-all ${
                  isHomePage
                    ? activeSection === link.id
                      ? "bg-blue-500/20 text-white border border-blue-400/30"
                      : "text-blue-200/70 hover:bg-white/5 hover:text-white"
                    : activeSection === link.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume_serapat_ratanapachai.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full text-center px-5 py-2.5 mt-2 rounded-full font-medium text-sm transition-all ${
                isHomePage
                  ? "border border-blue-400/30 text-blue-100 hover:bg-blue-500/10"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}