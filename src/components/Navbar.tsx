"use client";

import { motion } from "framer-motion";
import { PERSONAL, NAV_LINKS } from "@/lib/data";
import { useTheme } from "@/context/ThemeContext";
import { SiDarkreader, SiSunrise } from "react-icons/si";

export default function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: "var(--navbar-bg)",
        backdropFilter: "blur(20px) saturate(160%)",
        WebkitBackdropFilter: "blur(20px) saturate(160%)",
        borderBottom: "1px solid var(--border)",
        boxShadow:
          "0 1px 0 0 color-mix(in srgb, var(--text-primary) 6%, transparent), 0 4px 24px color-mix(in srgb, var(--text-primary) 4%, transparent)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-14 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-sm font-bold tracking-[0.18em] uppercase transition-colors duration-300"
          style={{ color: "var(--text-primary)" }}
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
                  className="text-[12px] font-medium tracking-[0.12em] uppercase transition-colors duration-300"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Separator */}
          <div className="hidden md:block w-px h-4" style={{ background: "var(--border)" }} />

          {/* Connect link */}
          <a
            href={`mailto:${PERSONAL.email}`}
            className="hidden md:block text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors duration-300"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            Connect ↗
          </a>

          {/* Theme toggle */}
          <motion.button
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex items-center justify-center rounded-full transition-colors duration-300"
            style={{
              width: 32,
              height: 32,
              border: "1px solid var(--border)",
              background: "var(--surface)",
              color: "var(--text-muted)",
              cursor: "pointer",
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ borderColor: "var(--border-mid)", color: "var(--text-primary)" }}
          >
            {theme === "dark" ? <SiSunrise /> : <SiDarkreader />}
          </motion.button>
        </div>
      </nav>
    </header>
  );
}
