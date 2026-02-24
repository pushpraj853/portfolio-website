"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL, SOCIALS } from "@/lib/data";
import type { ReactElement } from "react";

const SOCIAL_ICONS: Record<string, ReactElement> = {
  github: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  twitter: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  dribbble: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm8.289-8.86c-.293-.093-2.644-.786-5.327-.362 1.118 3.074 1.573 5.58 1.66 6.116A8.06 8.06 0 0020.289 13.14zm-2.334 2.9c-2.23.96-5.24 1.36-7.74.98l-.35-.06c.23-1.49.47-2.98.72-4.47.03-.16.05-.33.08-.49 2.01.56 3.77 1.32 5.24 2.22.5.31.78.63 1 1.07l1.05.73zM8.48 2.7a8.01 8.01 0 015.1 1.82c-.35.54-.86 1.06-1.57 1.48C10.7 6.77 8.9 7.1 7.14 7c-.76-.04-1.51-.14-2.24-.3A8.03 8.03 0 018.48 2.7zM3.9 8.29c.82.2 1.68.33 2.56.38 1.93.11 3.91-.22 5.57-1.08.64-.34 1.17-.74 1.62-1.19a8.036 8.036 0 011.5 3.17c-2.35.57-5.4.43-7.96-.48C6.4 8.8 5.12 8.45 3.9 8.29zm-.66 1.87c1.4.16 2.77.55 4.07 1.04 2.56.95 5.42 1.09 7.85.5.06.39.1.79.1 1.2 0 .9-.15 1.77-.42 2.59-2.42-.2-4.73-.88-6.54-2.24-1.41-1.06-2.46-2.38-3.3-3.74-.63-1.04-1.37-1.8-2.16-2.28v2.93h.4zm.03 5.05c.57.97 1.28 1.86 2.1 2.64-.54-1.47-.95-3.06-1.17-4.75-.37.65-.65 1.37-.93 2.11z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get in touch
          </motion.span>
          <motion.h2
            className="mt-3 font-extrabold leading-none tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
          >
            Contact
          </motion.h2>
        </div>

        {/* Two-col desktop, stacked mobile */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-24 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <p
              className="font-semibold leading-snug"
              style={{ fontSize: "clamp(1.05rem, 2vw, 1.35rem)", color: "var(--text-primary)" }}
            >
              Selective about what I take on next. Open to the right engineering problem.
            </p>
            <div className="mt-10 space-y-5">
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-label)",
                }}
              >
                Direct
              </p>
              <a
                href={`mailto:${PERSONAL.email}`}
                style={{
                  display: "block",
                  fontSize: "clamp(0.85rem, 1.4vw, 0.95rem)",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                }}
                className="transition-colors duration-300"
              >
                {PERSONAL.email}
              </a>
              {/* Social links */}
              <div className="flex items-center gap-5 pt-1">
                {SOCIALS.map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="transition-colors duration-300"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {SOCIAL_ICONS[s.icon]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
          >
            {sent ? (
              <motion.div
                className="flex flex-col items-start gap-4 py-12"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--text-ghost)" }}>
                  ✓
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  Message received.
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  I'll follow up within 48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block mb-2"
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--text-label)",
                      }}
                    >
                      Name
                    </label>
                    <input required placeholder="Your name" className="field" />
                  </div>
                  <div>
                    <label
                      className="block mb-2"
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--text-label)",
                      }}
                    >
                      Email
                    </label>
                    <input required type="email" placeholder="you@company.com" className="field" />
                  </div>
                </div>
                <div>
                  <label
                    className="block mb-2"
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.42)",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me what you're working on..."
                    className="field resize-none"
                  />
                </div>
                <button type="submit" className="cta-primary mt-2">
                  Send message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
