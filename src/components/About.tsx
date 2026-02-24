"use client";

import { motion } from "framer-motion";
import { PERSONAL, EXPERIENCE, yearOfExp } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  return (
    <section id="about" className="px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Two-column on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-24 items-start">
          {/* Left — sticky: header + personal copy */}
          <motion.div
            className="space-y-7 md:sticky md:top-32 self-start"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            {/* Section header lives inside the sticky column */}
            <div className="mb-2">
              <motion.span
                className="eyebrow"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Who I am
              </motion.span>
              <motion.h2
                className="mt-3 font-extrabold leading-none tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.08, ease }}
              >
                About
              </motion.h2>
            </div>

            <p
              className="font-semibold leading-snug text-primary"
              style={{ fontSize: "clamp(1.05rem, 2vw, 1.4rem)" }}
            >
              {PERSONAL.philosophy}
            </p>
            <p
              className="text-secondary"
              style={{
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                lineHeight: 1.8,
              }}
            >
              With {yearOfExp}+ years shipping production-scale applications, I've built multi-role
              portals, migrated 200+ class-based components, and owned features end-to-end across
              fintech, AI, and SaaS products — using React, Next.js, TypeScript, and GraphQL.
            </p>
            <p
              className="text-secondary"
              style={{
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                lineHeight: 1.8,
              }}
            >
              I care about the decisions that happen before code is written: the naming, the
              hierarchy, the system. Good software starts with clear thinking.
            </p>
            <div className="pt-2">
              <a href={`mailto:${PERSONAL.email}`} className="cta-primary inline-flex">
                Say hello →
              </a>
            </div>
          </motion.div>

          {/* Right — experience */}
          <div className="flex flex-col">
            <motion.span
              className="eyebrow mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Experience
            </motion.span>

            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                className="group"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease }}
              >
                <div className="divider" />
                <div className="py-7 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="flex-1">
                    <h4 className="font-semibold transition-colors duration-300 text-primary">
                      {exp.role}
                    </h4>
                    <p
                      className="text-muted"
                      style={{
                        marginTop: 2,
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                      }}
                    >
                      {exp.company}
                    </p>
                    <p
                      className="text-secondary"
                      style={{
                        marginTop: 12,
                        fontSize: "clamp(0.8rem, 1.4vw, 0.9rem)",
                        lineHeight: 1.75,
                      }}
                    >
                      {exp.desc}
                    </p>
                  </div>
                  <span
                    className="text-muted"
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      paddingTop: 2,
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
              </motion.div>
            ))}
            <div className="divider" />
          </div>
        </div>
      </div>
    </section>
  );
}
