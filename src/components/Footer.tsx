"use client";

import { PERSONAL } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-14 pt-20 pb-8 max-w-7xl mx-auto">
      <div className="divider mb-14" />

      {/* Closing statement */}
      <p
        className="font-extrabold leading-none tracking-tight mb-14"
        style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
      >
        <span style={{ color: "var(--text-ghost)" }}>Let&apos;s build something </span>
        <span className="gradient-text">worth using.</span>
      </p>

      {/* Bottom strip */}
      <div className="divider mb-5" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span
          style={{
            fontSize: 9.5,
            color: "var(--text-muted)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          © {year} {PERSONAL.name}
        </span>
        <span style={{ fontSize: 9.5, letterSpacing: "0.08em" }}>
          Built with ❤️ by {PERSONAL.name}
        </span>
      </div>
    </footer>
  );
}
