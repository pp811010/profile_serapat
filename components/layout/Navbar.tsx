"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const url = usePathname();

  const checkPath = (section: string) => {
    return url === "/" ? `#${section}` : `/#${section}`;
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-16">
          {/* ====== ส่วนซ้าย: Logo + Links ====== */}
          <div className="flex items-center gap-10">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <svg
                  className="w-8 h-8 text-blue-600"
                  viewBox="0 0 24 24 "
                  fill="currentColor"
                >
                  <path d="M4 4 L20 12 L4 20 Z" />
                </svg>
                <span className="lg:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Serapat R.
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-1">
              <Link href={checkPath("projects")} className="nav-link-main">
                Projects
              </Link>
              <Link href={checkPath("experience")} className="nav-link-main">
                Experience
              </Link>
              <Link href={checkPath("contact")} className="nav-link-main">
                Contact
              </Link>
            </div>
          </div>

          {/* ====== profile ====== */}
          <div className="flex items-center gap-4">
           

            <div className="profile-wrapper relative" ref={profileRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 focus:outline-none p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <Image
                  src="/profile2.jpg"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="profile-avatar-main"
                />
                <svg className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* ====== Dropdown ====== */}
              <div
                className={`profile-dropdown absolute right-0 mt-2 w-80 dropdown-main overflow-hidden transition-all duration-200 ${isDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2"
                  }`}
              >
                {/* Header */}
                <div className="bg-white p-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/profile2.jpg"
                      alt="Profile"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">Serapat Ratanapachai</h3>
                      <p className="text-sm text-gray-500">Software Developer</p>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="p-2">
                  {/* GitHub */}
                  <a
                    href="https://github.com/pp811010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:0902327959"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>090-232-7959</span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:serapat.rata@gmail.com"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>serapat.rata@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}