"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What I Work With
          </motion.span>
          <motion.h2
            className="mt-3 font-extrabold leading-none tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
          >
            Technical Stack
          </motion.h2>
        </div>

        {/* Chip grid */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {SKILLS.map((skill) => {
            const Icon = skill.icon as React.ElementType;
            return (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.88, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease } },
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-card"
                style={{
                  border: `1px solid ${skill.color}30`,
                  boxShadow: `0 0 12px ${skill.color}18`,
                }}
              >
                <Icon style={{ color: skill.color, fontSize: 16, flexShrink: 0 }} aria-hidden />
                <span className="text-sm font-semibold whitespace-nowrap text-primary">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
