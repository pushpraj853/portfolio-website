import {
  Navbar,
  Hero,
  Projects,
  Approach,
  About,
  Skills,
  Contact,
  Footer,
  ScrollToTop,
} from "@/components";

export default function Page() {
  return (
    <main className="relative min-h-screen pt-12">
      {/* Fixed ambient gradient */}
      <div className="gradient-bg" />

      {/* Architectural background line */}
      <div className="arch-line" aria-hidden>
        <svg viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice">
          <path
            className="arch-curve-1"
            d="M -80 700 Q 300 80 720 420 T 1520 200"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
          <path
            className="arch-curve-3"
            d="M 200 900 Q 600 300 900 600 T 1600 100"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <Navbar />
      <Hero />
      <div className="relative z-10 space-y-28 pt-24 pb-0">
        <Projects />
        <Approach />
        <About />
        <Skills />
        <Contact />
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
