"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

//------- Stack card - tech I actually use --------
function StackCard() {
  const stack = [
    { name: "React / Next.js", tag: "App layer", color: "#61DAFB" },
    { name: "TypeScript", tag: "Type safety", color: "#3178C6" },
    { name: "GraphQL", tag: "Data layer", color: "#e535ab" },
    { name: "Redux Toolkit", tag: "State", color: "#764abc" },
  ];
  return (
    <div className="card-shell">
      <span className="card-eyebrow">Core Stack</span>
      {stack.map((s) => (
        <div
          key={s.name}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 9,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: s.color,
                boxShadow: `0 0 6px ${s.color}99`,
                flexShrink: 0,
              }}
            />
            <span className="text-primary" style={{ fontSize: 11, fontWeight: 500 }}>
              {s.name}
            </span>
          </div>
          <span
            className="text-muted"
            style={{
              fontSize: 9.5,
              fontFamily: "'Courier New', monospace",
            }}
          >
            {s.tag}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Metrics card — real numbers ──────────────────────────────
function MetricsCard() {
  const metrics = [
    { label: "Lighthouse", value: "62 → 88", color: "#34d399" },
    { label: "Review time", value: "↓ 15%", color: "#60a5fa" },
    { label: "Sprint delta", value: "↑ 20%", color: "#a78bfa" },
  ];
  return (
    <div className="card-shell">
      <span className="card-eyebrow">Impact</span>
      {metrics.map((m) => (
        <div
          key={m.label}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 11,
          }}
        >
          <span className="text-secondary" style={{ fontSize: 10.5 }}>
            {m.label}
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: m.color,
              fontFamily: "'Courier New', monospace",
            }}
          >
            {m.value}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── PR card — simulated git activity ─────────────────────────
function ActivityCard() {
  const items = [
    { type: "feat", msg: "migrate 200+ class components", color: "#34d399" },
    { type: "perf", msg: "lazy-load, code-split dashboard", color: "#60a5fa" },
    { type: "fix", msg: "resolve production render issue", color: "#fb923c" },
    { type: "arch", msg: "GraphQL schema + caching layer", color: "#a78bfa" },
  ];
  return (
    <div className="card-shell">
      <span className="card-eyebrow">Recent work</span>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 9, alignItems: "flex-start", marginBottom: 8 }}>
          <span
            style={{
              fontSize: 8.5,
              fontWeight: 700,
              padding: "2px 6px",
              borderRadius: 4,
              background: `${item.color}1a`,
              color: item.color,
              border: `1px solid ${item.color}44`,
              flexShrink: 0,
              marginTop: 1,
              fontFamily: "'Courier New', monospace",
            }}
          >
            {item.type}
          </span>
          <span className="text-secondary" style={{ fontSize: 10.5, lineHeight: 1.4 }}>
            {item.msg}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Status card — availability indicator ─────────────────────
function StatusCard() {
  return (
    <div className="card-shell">
      <span className="card-eyebrow">Status</span>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#34d399",
            boxShadow: "0 0 8px #34d39988",
            flexShrink: 0,
          }}
        />
        <span className="text-primary" style={{ fontSize: 11, fontWeight: 600 }}>
          Open to opportunities
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px 10px" }}>
        {[
          { label: "Type", value: "Full-time / Contract" },
          { label: "Mode", value: "Hybrid / Remote" },
          { label: "Start", value: "Immediate" },
          { label: "Location", value: "Delhi, India" },
        ].map((r) => (
          <div key={r.label}>
            <p
              className="text-ghost"
              style={{
                fontSize: 8.5,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 2,
              }}
            >
              {r.label}
            </p>
            <p className="text-secondary" style={{ fontSize: 10, fontWeight: 500 }}>
              {r.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Float animation wrapper ───────────────────────────────────
function Floater({
  delay,
  amplitude,
  duration,
  rotateDeg,
  children,
}: {
  delay: number;
  amplitude: number;
  duration: number;
  rotateDeg: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -amplitude, 0],
        rotate: [rotateDeg, rotateDeg + 0.4, rotateDeg],
      }}
      transition={{
        opacity: { duration: 0.7, delay, ease },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
        rotate: {
          duration: duration * 1.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.5,
        },
      }}
      style={{ rotate: rotateDeg }}
    >
      {children}
    </motion.div>
  );
}

// ── Main export ───────────────────────────────────────────────
export default function HeroVisual() {
  return (
    <div className="relative w-full h-full" style={{ minHeight: 480 }} aria-hidden>
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 55% 45%, rgba(88,28,220,0.14) 0%, transparent 70%)",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          padding: "8px 4px",
          height: "100%",
          alignItems: "start",
        }}
      >
        <div style={{ marginTop: 32 }}>
          <Floater delay={0.3} amplitude={7} duration={6.5} rotateDeg={-1.5}>
            <StackCard />
          </Floater>
        </div>

        <div style={{ marginTop: 0 }}>
          <Floater delay={0.55} amplitude={6} duration={7.2} rotateDeg={1.8}>
            <ActivityCard />
          </Floater>
        </div>

        <div style={{ marginTop: -8 }}>
          <Floater delay={0.75} amplitude={8} duration={5.8} rotateDeg={1.2}>
            <MetricsCard />
          </Floater>
        </div>

        <div style={{ marginTop: -20 }}>
          <Floater delay={0.95} amplitude={6.5} duration={6.8} rotateDeg={-1.2}>
            <StatusCard />
          </Floater>
        </div>
      </div>
    </div>
  );
}
