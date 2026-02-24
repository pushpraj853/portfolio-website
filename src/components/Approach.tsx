"use client";

import { motion } from "framer-motion";
import { APPROACH_PRINCIPLES } from "@/lib/data";
import { formatNumber } from "@/utils/helper";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Approach() {
  return (
    <section id="approach" className="px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How I work
          </motion.span>
          <motion.h2
            className="mt-3 font-extrabold leading-none tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
          >
            Approach
          </motion.h2>
        </div>

        {/* Principles — editorial list */}
        <div className="flex flex-col">
          {APPROACH_PRINCIPLES.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.75, ease }}
            >
              <div className="divider" />

              {/* Desktop: 3-col | Mobile: stacked */}
              <div className="py-9 md:py-12 flex flex-col md:grid md:grid-cols-[90px_1fr_2fr] gap-4 md:gap-12 items-start">
                {/* Large index — brighter so it's readable at low brightness */}
                <span
                  className="font-black leading-none select-none"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    color: "var(--text-ghost)",
                    transition: "color 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-ghost)")}
                >
                  {formatNumber(index + 1)}
                </span>

                {/* Title */}
                <h3
                  className="font-bold leading-snug transition-colors duration-300"
                  style={{
                    fontSize: "clamp(1.15rem, 2.5vw, 1.55rem)",
                    color: "var(--text-primary)",
                  }}
                >
                  {item.title}
                </h3>

                {/* Body */}
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                    color: "var(--text-secondary)",
                    maxWidth: 520,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="divider" />
        </div>
      </div>
    </section>
  );
}
