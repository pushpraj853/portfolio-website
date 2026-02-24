"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { formatNumber } from "@/utils/helper";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Section header — asymmetric: label left, large number right */}
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Selected work
            </motion.span>
            <motion.h2
              className="mt-3 font-extrabold leading-none tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08, ease }}
            >
              Projects
            </motion.h2>
          </div>
        </div>

        {/* Bold project grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col glass lift-card rounded-2xl overflow-hidden cursor-pointer"
              style={{ minHeight: 340 }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.75, ease }}
            >
              {/* Accent top bar */}
              <div
                className="h-[3px] w-full flex-shrink-0 transition-all duration-500 group-hover:opacity-100 opacity-60"
                style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
              />

              {/* Body */}
              <div className="flex flex-col flex-1 p-8 gap-5">
                {/* Year + impact — small top row */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                    {project.year}
                  </span>
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{
                      background: `${project.accent}18`,
                      color: `${project.accent}cc`,
                      border: `1px solid ${project.accent}28`,
                    }}
                  >
                    {project.impact}
                  </span>
                </div>

                {/* Title */}
                <div className="flex-1">
                  <p className="text-[11px] font-medium uppercase tracking-widest mb-2 text-muted">
                    {project.tagline}
                  </p>
                  <h3
                    className="font-bold leading-tight transition-colors duration-300 text-primary"
                    style={{
                      fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 text-secondary">{project.desc}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => {
                    const Icon = tag.icon as React.ElementType;
                    return (
                      <span
                        key={tag.name}
                        className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full text-muted border-token"
                      >
                        {Icon && <Icon style={{ color: tag.color, fontSize: 11 }} aria-hidden />}
                        {tag.name}
                      </span>
                    );
                  })}
                </div>

                {/* Hover arrow */}
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 text-secondary">
                  View case study
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
