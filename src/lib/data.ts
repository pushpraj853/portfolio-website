// ─────────────────────────────────────────────
// PORTFOLIO DATA — edit this file to update content
// ─────────────────────────────────────────────

import { LuUnplug } from "react-icons/lu";
import {
  SiChainlink,
  SiChartdotjs,
  SiFramer,
  SiGraphql,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiStrapi,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const yearOfExp = new Date().getFullYear() - 2023;

export const PERSONAL = {
  name: "Pushpraj Singh",
  title: "Frontend Software Engineer",
  location: "Delhi, India",
  phone: "+91 7052217738",
  email: "pushpraj853@gmail.com",

  // Hero headline — first line plain, second line is gradient
  headline: ["Engineering the web,", "end-to-end."],
  heroSubline:
    "Frontend Software Engineer. I ship production-grade applications - fast, scalable, and built to last.",
  philosophyTitle: "Engineering Philosophy",
  philosophy:
    "I think in systems, not screens. Good frontend engineering is about scalable state, clean APIs, predictable renders, and code that the next engineer can actually maintain.",
  bio: "Front-End Engineer with 2+ years shipping production-scale web applications using React, Next.js, TypeScript, and GraphQL. Strong on architecture, state management, API integration, and performance - across fintech, AI, and SaaS products.",
};

export const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { label: "Years Exp", value: `${yearOfExp}+`, suffix: "" },
  { label: "Projects", value: "20+", suffix: "" },
  { label: "Users", value: "100K+", suffix: "" },
];

export const APPROACH_PRINCIPLES = [
  {
    title: "Architecture before implementation",
    body: "The cost of a bad decision multiplies with every line of code added on top of it. I define component contracts, data flow, and state boundaries before writing a single hook.",
  },
  {
    title: "Performance is non-negotiable",
    body: "Slow software is broken software. I measure before I optimise - profiling, bottleneck identification, and targeted fixes. Not guesswork, engineering.",
  },
  {
    title: "Write code for the next engineer",
    body: "Clever code that only one person understands is a liability. I write for clarity - consistent patterns, meaningful abstractions, and documentation that actually helps.",
  },
  {
    title: "Production-grade, always",
    body: "Error boundaries, CI/CD integration, accessibility, cross-browser consistency - code I ship is code I'd maintain. Readable, testable, and built for the long run.",
  },
];

export const TECHNOLOGIES = {
  react: { name: "React.js", level: "Expert", pct: 95, color: "#61DAFB", icon: SiReact },
  nextjs: { name: "Next.js", level: "Advanced", pct: 90, color: "#a8b4d0", icon: SiNextdotjs },
  typescript: {
    name: "TypeScript",
    level: "Advanced",
    pct: 88,
    color: "#3178C6",
    icon: SiTypescript,
  },
  tailwind: {
    name: "Tailwind CSS",
    level: "Expert",
    pct: 92,
    color: "#06B6D4",
    icon: SiTailwindcss,
  },
  graphql: {
    name: "GraphQL",
    level: "Intermediate",
    pct: 72,
    color: "#e535ab",
    icon: SiGraphql,
  },
  redux: {
    name: "Redux Toolkit",
    level: "Advanced",
    pct: 85,
    color: "#764abc",
    icon: SiRedux,
  },
  framer: {
    name: "Framer Motion",
    level: "Advanced",
    pct: 82,
    color: "#c084fc",
    icon: SiFramer,
  },
  socket: {
    name: "Socket.io",
    level: "Intermediate",
    pct: 68,
    color: "#68A063",
    icon: SiSocketdotio,
  },
  restAPI: { name: "REST API", level: "Advanced", pct: 85, color: "#68A063", icon: LuUnplug },
};

export const PROJECT_TAGS = {
  stripe: { name: "Stripe", level: "Advanced", pct: 85, color: "#68A063", icon: SiStripe },
  strapi: { name: "Strapi", level: "Advanced", pct: 85, color: "#68A063", icon: SiStrapi },
  charts: { name: "Charts", level: "Advanced", pct: 85, color: "#68A063", icon: SiChartdotjs },
};

export const SKILLS = [
  TECHNOLOGIES.react,
  TECHNOLOGIES.nextjs,
  TECHNOLOGIES.typescript,
  TECHNOLOGIES.tailwind,
  TECHNOLOGIES.graphql,
  TECHNOLOGIES.redux,
  TECHNOLOGIES.framer,
  TECHNOLOGIES.socket,
];

export const PROJECTS = [
  {
    title: "Odin - Internal Processing",
    tagline: "Operations & review platform",
    desc: "End-to-end case review workflow for internal ops. Improved average review time by 15% through scalable, data-driven UI components and optimized processing flows.",
    tags: [TECHNOLOGIES.react, TECHNOLOGIES.typescript, TECHNOLOGIES.restAPI],
    accent: "#6d28d9",
    link: "#",
    year: "2025",
    impact: "15% faster reviews",
  },

  {
    title: "OnGrid Dashboard",
    tagline: "Data-driven analytics UI",
    desc: "Scalable admin dashboard with performance-optimized components, real-time data visualization, and a responsive layout serving thousands of daily users.",
    tags: [TECHNOLOGIES.nextjs, TECHNOLOGIES.typescript, TECHNOLOGIES.restAPI],
    accent: "#1d4ed8",
    link: "#",
    year: "2024",
    impact: "↑ 20% sprint velocity",
  },
  {
    title: "The AugustaRule",
    tagline: "Tax-savings platform",
    desc: "Built from scratch in Next.js — a multi-role platform (Users, Admins, Tax Pros) helping business owners leverage the Augusta Rule for tax savings. Ships a custom tax calculator, Stripe subscriptions, and GraphQL-powered data layer.",
    tags: [
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.graphql,
      TECHNOLOGIES.restAPI,
    ],
    accent: "#0f766e",
    link: "#",
    year: "2024",
    impact: "Multi-tier subscription model",
  },
  {
    title: "TrueFanz",
    tagline: "Creator subscription platform",
    desc: "Modernized front-end for a creator economy platform serving 100K+ users. Led migration from class-based to functional React, integrated Redux Toolkit, real-time WebSocket messaging, Stripe billing, and built an Instagram-style story feature from scratch.",
    tags: [TECHNOLOGIES.react, TECHNOLOGIES.typescript, TECHNOLOGIES.restAPI],
    accent: "#be185d",
    link: "#",
    year: "2023",
    impact: "100K+ users",
  },
  {
    title: "ClientFlow ISBDC",
    tagline: "Advisor-client portal",
    desc: "Multi-role portal with advisor-client workflows, analytics charts, and a dynamic tax calculator used by 2K+ users bi-weekly.",
    tags: [TECHNOLOGIES.react, TECHNOLOGIES.typescript, TECHNOLOGIES.restAPI, PROJECT_TAGS.charts],
    accent: "#4c1d95",
    link: "#",
    year: "2023",
    impact: "2K+ weekly users",
  },
];

export const EXPERIENCE = [
  {
    company: "Handy Online Solutions Pvt Ltd",
    role: "Software Development Engineer",
    period: "Jun 2025 - Present",
    location: "Gurugram",
    desc: "Owned end-to-end delivery of modules with 20% faster turnaround. Shipped 10+ production features, led code reviews for 6+ engineers, and improved Lighthouse score from 62 to 88 on a Strapi-powered public site.",
  },
  {
    company: "Logic Square Technologies Pvt Ltd",
    role: "Software Development Engineer",
    period: "Feb 2023 - Jun 2025",
    location: "Delhi",
    desc: "Delivered front-end features across multiple large projects using React, Next.js, TypeScript, and GraphQL. Migrated 200+ class-based components, built multi-role portals, and shipped subscription access controls for TrueFanz reaching 100K+ users.",
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Maharana Prataap College Of Engineering, Kanpur (U.P.)",
    period: "Aug 2017 - May 2021",
    gpa: "7.5 CGPA",
  },
];

export const COMPETENCIES = [
  "React Architecture",
  "Component Design",
  "Frontend Performance",
  "State Management",
  "AI-driven UI Development",
  "API Integration",
  "Debugging & Optimization",
  "LLM Integration",
];

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/pushpraj853", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/pushpraj853", icon: "linkedin" },
];
