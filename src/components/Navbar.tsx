"use client";

import { motion } from "framer-motion";
import { PERSONAL, NAV_LINKS } from "@/lib/data";
import { useTheme } from "@/context/ThemeContext";
import { SiDarkreader, SiSunrise } from "react-icons/si";

export default function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 navbar-bar">
      <nav className="max-w-7xl mx-auto px-6 md:px-14 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-sm font-bold tracking-[0.18em] uppercase transition-colors duration-300 text-primary"
        >
          {PERSONAL.name}
        </a>

        {/* Links + toggle */}
        <div className="flex items-center gap-6 md:gap-8">
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[12px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 text-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Separator */}
          <div className="hidden md:block w-px h-4 bg-border" />

          {/* Connect link */}
          <a
            href={`mailto:${PERSONAL.email}`}
            className="hidden md:block text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors duration-300 text-muted hover:text-primary"
          >
            Connect ↗
          </a>

          {/* Theme toggle */}
          <motion.button
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex items-center justify-center rounded-full transition-colors duration-300 text-muted hover:text-primary btn-icon"
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? <SiSunrise /> : <SiDarkreader />}
          </motion.button>
        </div>
      </nav>
    </header>
  );
}
