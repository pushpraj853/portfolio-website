"use client";

import { motion } from "framer-motion";
import { PERSONAL, STATS } from "@/lib/data";
import HeroVisual from "./HeroVisual";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-visible">
      <div className="w-full px-6 md:px-14">
        {/* Asymmetric layout: text left | visual right */}
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-0">
          {/* LEFT — type column */}
          <div className="relative z-10 flex-1 md:max-w-[640px]">
            <motion.p
              className="eyebrow mb-8 md:mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Frontend architect · product thinker
            </motion.p>

            <motion.h1
              className="font-extrabold leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease }}
            >
              <span className="block text-primary">{PERSONAL.headline[0]}</span>
              <span className="block gradient-text">{PERSONAL.headline[1]}</span>
            </motion.h1>

            <motion.p
              className="mt-8 md:mt-10 leading-relaxed text-secondary"
              style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
                maxWidth: 460,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.55 }}
            >
              {PERSONAL.heroSubline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.72 }}
            >
              <a href="#projects" className="cta-primary">
                View work
              </a>
              <a href="#contact" className="cta-ghost">
                Get in touch
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="mt-12 md:mt-16 flex flex-wrap gap-8 md:gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.88 }}
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <div
                    className="font-bold leading-none"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}
                  >
                    <span className="gradient-text">{s.value}</span>
                  </div>
                  <div
                    className="mt-1 font-semibold uppercase text-muted"
                    style={{ fontSize: 9, letterSpacing: "0.22em" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — HeroVisual; hidden on small mobile, visible md+ */}
          <motion.div
            className="hidden md:block relative flex-shrink-0"
            style={{
              width: "clamp(360px, 48vw, 660px)",
              marginRight: "-8vw",
              paddingLeft: "clamp(2rem, 4vw, 5rem)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.5, ease }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
