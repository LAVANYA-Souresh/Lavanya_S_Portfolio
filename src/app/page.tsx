"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { portfolio } from "./data/portfolio";
import Link from "next/link";

/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   MOBILE NAV LINK
   ========================================================= */

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block rounded-xl px-4 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-emerald-300"
    >
      {children}
    </a>
  );
}

/* =========================================================
   MAIN PAGE
   ========================================================= */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav className="fixed left-1/2 top-3 z-50 w-[94%] max-w-5xl -translate-x-1/2 rounded-2xl border border-white/10 bg-black/75 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300 sm:top-5 sm:rounded-full sm:px-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="text-lg font-bold tracking-tight transition duration-300 hover:scale-105"
          >
            LS<span className="text-emerald-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 text-sm text-gray-400 lg:flex xl:gap-7">
            <a
              href="#home"
              className="transition duration-300 hover:text-white"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition duration-300 hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              className="transition duration-300 hover:text-white"
            >
              Skills
            </a>

            <a
              href="#experience"
              className="transition duration-300 hover:text-white"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="transition duration-300 hover:text-white"
            >
              Projects
            </a>

            <a
              href="#education"
              className="transition duration-300 hover:text-white"
            >
              Education
            </a>

            <a
              href="#certifications"
              className="transition duration-300 hover:text-white"
            >
              Certifications
            </a>

            <a
              href="#contact"
              className="transition duration-300 hover:text-white"
            >
              Contact
            </a>

            <a
              href="/Lavanya_S_Resume.pdf"
              download
              className="transition duration-300 hover:text-emerald-300"
            >
              Resume ↓
            </a>
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition duration-300 hover:scale-105 hover:bg-gray-200 lg:block"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition duration-300 hover:border-emerald-400/30 hover:text-emerald-300 lg:hidden"
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                  mobileMenuOpen
                    ? "translate-y-[7px] rotate-45"
                    : ""
                }`}
              />

              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                  mobileMenuOpen
                    ? "-translate-y-[7px] -rotate-45"
                    : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            mobileMenuOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-3 border-t border-white/10 pt-3">
            <MobileNavLink href="#home" onClick={closeMobileMenu}>
              Home
            </MobileNavLink>

            <MobileNavLink href="#about" onClick={closeMobileMenu}>
              About
            </MobileNavLink>

            <MobileNavLink href="#skills" onClick={closeMobileMenu}>
              Skills
            </MobileNavLink>

            <MobileNavLink href="#experience" onClick={closeMobileMenu}>
              Experience
            </MobileNavLink>

            <MobileNavLink href="#projects" onClick={closeMobileMenu}>
              Projects
            </MobileNavLink>

            <MobileNavLink href="#education" onClick={closeMobileMenu}>
              Education
            </MobileNavLink>

            <MobileNavLink
              href="#certifications"
              onClick={closeMobileMenu}
            >
              Certifications
            </MobileNavLink>

            <MobileNavLink href="#contact" onClick={closeMobileMenu}>
              Contact
            </MobileNavLink>

            <a
              href="/Lavanya_S_Resume.pdf"
              download
              onClick={closeMobileMenu}
              className="mt-2 block rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-300 transition hover:bg-emerald-400/15"
            >
              Download Resume ↓
            </a>

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-2 block rounded-xl bg-white px-4 py-3 text-center text-sm font-medium text-black transition hover:bg-gray-200"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 md:px-10 md:pt-44"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-16 -z-10 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px] sm:top-20 sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] md:blur-[140px] animate-pulse" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Left */}
          <div>
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-xs text-emerald-300 sm:px-4 sm:text-sm">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400" />

              <span>{portfolio.personal.availability}</span>
            </div>

            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-500 sm:text-sm sm:tracking-[0.25em]">
              Software Engineer • AI & Automation
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
              {portfolio.personal.name}
              <span className="text-emerald-400">.</span>
            </h1>

            <h2 className="mt-5 max-w-3xl text-xl font-medium leading-relaxed text-gray-300 sm:text-2xl md:mt-6 md:text-3xl">
              Building intelligent systems for{" "}
              <span className="text-white">
                real-world business problems.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 md:mt-6 md:text-lg">
              {portfolio.personal.tagline}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3.5 text-center font-medium text-black transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-gray-200"
              >
                View Projects →
              </a>

              <a
                href="/Lavanya_S_Resume.pdf"
                download
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-center font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300"
              >
                Download Resume ↓
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-center font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 sm:mt-14 sm:grid-cols-4 sm:gap-4">
              {portfolio.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-0 transition duration-300 hover:-translate-y-1"
                >
                  <p className="text-xl font-semibold sm:text-2xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-gray-500 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Card */}
          <Reveal delay={250}>
            <div className="relative mx-auto w-full max-w-[330px] sm:max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-emerald-400/10 blur-2xl" />

              <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition duration-500 hover:-translate-y-2 sm:rounded-[2rem] sm:p-6">
                {/* Avatar */}
                <div className="flex aspect-square items-center justify-center rounded-[1.35rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] sm:rounded-[1.5rem]">
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-2xl font-bold text-emerald-300 transition duration-500 group-hover:scale-110 sm:h-24 sm:w-24 sm:text-3xl">
                      LS
                    </div>

                    <p className="mt-4 text-sm text-gray-400 sm:mt-5">
                      Software Engineer
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      AI • Automation • Technology
                    </p>
                  </div>
                </div>

                {/* Card footer */}
                <div className="mt-4 flex items-center justify-between gap-4 sm:mt-5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">
                      Based in {portfolio.personal.location}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Open to opportunities
                    </p>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 group-hover:translate-x-1 group-hover:bg-emerald-400/10 group-hover:text-emerald-300 sm:h-10 sm:w-10">
                    ↗
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="border-t border-white/5 px-5 py-20 sm:px-6 sm:py-24 md:px-10"
      >
        <Reveal>
          <div className="mx-auto max-w-6xl">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-400 sm:text-sm sm:tracking-[0.25em]">
              About
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Technology with a business mindset.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-gray-400 sm:mt-6 sm:text-lg">
              {portfolio.personal.bio}
            </p>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        id="skills"
        className="border-t border-white/5 px-5 py-20 sm:px-6 sm:py-24 md:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-400 sm:text-sm sm:tracking-[0.25em]">
                Technical Toolbox
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Technologies I work with.
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 md:text-lg">
                A combination of software engineering experience, backend
                development, databases, and emerging AI technologies.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Programming */}
            <Reveal delay={0}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-white/[0.05] sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-xl transition duration-300 group-hover:scale-110">
                    &lt;/&gt;
                  </div>

                  <span className="text-xs uppercase tracking-widest text-gray-600">
                    Core
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  Programming
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Languages used for software development and problem solving.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Python", "Java", "SQL"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-gray-300 transition duration-300 hover:border-emerald-400/30 hover:text-emerald-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Backend */}
            <Reveal delay={100}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[0.05] sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-400/10 text-xl transition duration-300 group-hover:rotate-12 group-hover:scale-110">
                    ⚙
                  </div>

                  <span className="text-xs uppercase tracking-widest text-gray-600">
                    Development
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  Backend & APIs
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Backend technologies and application development experience.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Spring Boot",
                    "REST APIs",
                    "Java",
                    "MySQL",
                    "PostgreSQL",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-gray-300 transition duration-300 hover:border-blue-400/30 hover:text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* AI */}
            <Reveal delay={200}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-white/[0.05] sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-400/10 text-xl transition duration-300 group-hover:rotate-12 group-hover:scale-110">
                    ✦
                  </div>

                  <span className="text-xs uppercase tracking-widest text-purple-400/70">
                    Focus
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  AI & Machine Learning
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Technologies and concepts I'm developing toward AI
                  engineering roles.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Generative AI",
                    "LLM Applications",
                    "AI Automation",
                    "Python",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-gray-300 transition duration-300 hover:border-purple-400/30 hover:text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Database */}
            <Reveal delay={0}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl transition duration-300 group-hover:scale-110">
                    ◈
                  </div>

                  <span className="text-xs uppercase tracking-widest text-gray-600">
                    Data
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  Databases
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Working with relational databases, queries, and application
                  data.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "SQL",
                    "MySQL",
                    "PostgreSQL",
                    "Database Management",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-gray-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Tools */}
            <Reveal delay={100}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition duration-500 hover:-translate-y-2 hover:border-orange-400/30 hover:bg-white/[0.05] sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-400/10 text-xl transition duration-300 group-hover:scale-110">
                    ◉
                  </div>

                  <span className="text-xs uppercase tracking-widest text-gray-600">
                    Tools
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  Engineering Tools
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Tools used for development, collaboration, and application
                  operations.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Git",
                    "GitHub",
                    "Jira",
                    "VS Code",
                    "Visual Studio",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-gray-300 transition duration-300 hover:border-orange-400/30 hover:text-orange-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Engineering */}
            <Reveal delay={200}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition duration-500 hover:-translate-y-2 hover:border-yellow-400/30 hover:bg-white/[0.05] sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400/10 text-xl transition duration-300 group-hover:scale-110">
                    ◇
                  </div>

                  <span className="text-xs uppercase tracking-widest text-gray-600">
                    Strength
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  Engineering & Problem Solving
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Connecting technical implementation with requirements and
                  real-world business needs.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Problem Solving",
                    "Requirement Analysis",
                    "Debugging",
                    "Stakeholder Communication",
                    "Documentation",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-gray-300 transition duration-300 hover:border-yellow-400/30 hover:text-yellow-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section
        id="experience"
        className="border-t border-white/5 px-5 py-20 sm:px-6 sm:py-24 md:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-400 sm:text-sm sm:tracking-[0.25em]">
              Experience
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Where I've worked.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-5 sm:mt-12 sm:space-y-6">
            {portfolio.experience.map((job, index) => (
              <Reveal key={`${job.company}-${job.role}`} delay={index * 120}>
                <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition duration-500 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.05] sm:p-8">
                  <div className="flex flex-col justify-between gap-4 md:flex-row">
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold transition duration-300 group-hover:text-emerald-300">
                        {job.role}
                      </h3>

                      <p className="mt-1 text-emerald-400">
                        {job.company}
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500">
                      {job.period}
                    </span>
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400">
                    {job.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-black/40 px-3 py-1.5 text-xs text-gray-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="border-t border-white/5 px-5 py-20 sm:px-6 sm:py-24 md:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-400 sm:text-sm sm:tracking-[0.25em]">
                Featured Work
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Projects that turn ideas into systems.
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 md:text-lg">
                A selection of software and AI-focused projects demonstrating
                my approach to problem solving, application development,
                automation, and intelligent systems.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3">
            {portfolio.projects.map((project, index) => (
              <Reveal
                key={project.title}
                delay={index * 150}
                className={index === 0 ? "lg:col-span-2" : ""}
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-emerald-400/20">
                  {/* Visual */}
                  <div
                    className={`relative overflow-hidden ${
                      index === 0
                        ? "h-56 sm:h-64"
                        : "h-44 sm:h-48"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 transition duration-700 group-hover:scale-110 ${
                        index === 0
                          ? "bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-purple-500/20"
                          : "bg-gradient-to-br from-white/10 to-transparent"
                      }`}
                    />

                    <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:32px_32px]" />

                    {index === 0 ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative h-32 w-32 transition duration-700 group-hover:rotate-6 group-hover:scale-110 sm:h-36 sm:w-36">
                          <div className="absolute inset-0 animate-pulse rounded-full border border-emerald-400/30" />

                          <div className="absolute inset-5 rounded-full border border-cyan-400/30" />

                          <div className="absolute inset-10 flex items-center justify-center rounded-full bg-emerald-400/10 shadow-[0_0_60px_rgba(52,211,153,0.2)]">
                            <span className="text-2xl text-emerald-300 sm:text-3xl">
                              AI
                            </span>
                          </div>

                          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-400 animate-ping" />

                          <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400" />

                          <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-purple-400" />

                          <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-yellow-400" />
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-2xl border border-white/10 bg-black/30 px-6 py-5 text-center backdrop-blur-sm transition duration-500 group-hover:scale-105 sm:px-8 sm:py-6">
                          <div className="text-3xl font-bold text-white">
                            {index === 1 ? "API" : "JAVA"}
                          </div>

                          <div className="mt-2 text-xs uppercase tracking-widest text-gray-500">
                            {project.category}
                          </div>
                        </div>
                      </div>
                    )}

                    <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[11px] font-medium text-gray-300 backdrop-blur-md sm:left-5 sm:top-5 sm:text-xs">
                      {project.category}
                    </span>

                    <span className="absolute right-4 top-4 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[11px] text-emerald-300 backdrop-blur-md sm:right-5 sm:top-5 sm:text-xs">
                      {project.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-7">
                    <h3 className="text-xl font-semibold transition duration-300 group-hover:text-emerald-300 sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      {project.description}
                    </p>

                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-600">
                        Problem
                      </p>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {project.problem}
                      </p>
                    </div>

                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-600">
                        Approach
                      </p>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {project.solution}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-gray-400 transition duration-300 hover:border-emerald-400/20 hover:text-emerald-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-col gap-3 border-t border-white/5 pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <Link
                        href="/projects/ai-business-operations"
                        className="text-sm font-medium text-white transition duration-300 hover:translate-x-1 hover:text-emerald-300"
                      >
                        View Case Study →
                      </Link>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit rounded-full border border-white/10 px-4 py-2.5 text-xs text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/5 hover:text-white"
                      >
                        GitHub ↗
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION
      ===================================================== */}

      <section
        id="education"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal>
            <div className="mb-10 sm:mb-12">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 sm:tracking-[0.25em]">
                07 / Education
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Education
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                Academic foundation in information technology, software
                development, and computer science fundamentals.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition duration-500 hover:border-emerald-400/20 sm:p-8 md:p-10">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-400/10 blur-3xl transition duration-700 group-hover:scale-150" />

              <div className="relative">
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                  <div className="min-w-0">
                    <div className="mb-4 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300">
                      B.TECH
                    </div>

                    <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                      {portfolio.education.degree}
                    </h3>

                    <p className="mt-3 text-base font-medium text-emerald-300 sm:text-lg">
                      {portfolio.education.institution}
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                      {portfolio.education.location}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <span className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs text-gray-400">
                      {portfolio.education.period}
                    </span>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/20">
                    <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                      CGPA
                    </p>

                    <p className="mt-3 text-3xl font-bold text-white">
                      {portfolio.education.cgpa}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/20">
                    <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                      Specialization
                    </p>

                    <p className="mt-3 text-lg font-semibold text-white">
                      Information Technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          CERTIFICATIONS & ACHIEVEMENTS
      ===================================================== */}

      <section
        id="certifications"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal>
            <div className="mb-10 sm:mb-12">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 sm:tracking-[0.25em]">
                08 / Certifications & Achievements
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Certifications & Achievements
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                Professional certifications and competitive achievements that
                demonstrate technical knowledge, problem-solving ability, and
                continuous learning.
              </p>
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal delay={100}>
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                <h3 className="text-xl font-semibold text-white">
                  Certifications
                </h3>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {portfolio.certifications.map((certification, index) => (
                  <div
                    key={certification.name}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-white/[0.05] sm:p-6"
                  >
                    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl transition duration-500 group-hover:scale-150 group-hover:bg-emerald-400/20" />

                    <div className="relative flex gap-4 sm:gap-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 font-mono text-sm text-emerald-300 transition duration-300 group-hover:scale-110">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-base font-semibold leading-6 text-white transition duration-300 group-hover:text-emerald-300 sm:text-lg">
                          {certification.name}
                        </h4>

                        <p className="mt-2 text-sm text-gray-400">
                          {certification.issuer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Achievements */}
          <Reveal delay={200}>
            <div className="mt-14 sm:mt-16">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                <h3 className="text-xl font-semibold text-white">
                  Achievements
                </h3>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {portfolio.achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-white/[0.05] sm:p-6"
                  >
                    <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-emerald-400/10 blur-2xl transition duration-500 group-hover:scale-150 group-hover:bg-emerald-400/20" />

                    <div className="relative">
                      <div className="mb-5 flex items-center justify-between gap-3">
                        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300">
                          Achievement {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-xl text-emerald-400 transition duration-300 group-hover:rotate-12 group-hover:scale-125">
                          ✦
                        </span>
                      </div>

                      <h4 className="text-base font-semibold leading-relaxed text-white transition duration-300 group-hover:text-emerald-300 sm:text-lg">
                        {achievement.title}
                      </h4>

                      <p className="mt-3 text-sm leading-6 text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="border-t border-white/5 px-5 py-20 sm:px-6 sm:py-24 md:px-10"
      >
        <Reveal>
          <div className="mx-auto max-w-6xl">
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-400 sm:text-sm sm:tracking-[0.25em]">
              Contact
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Let's build something meaningful.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 md:text-lg">
              I'm open to software engineering, AI engineering, automation,
              and technology-focused opportunities.
            </p>

            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={`mailto:${portfolio.contact.email}`}
                className="rounded-full bg-white px-6 py-3.5 text-center font-medium text-black transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-gray-200"
              >
                Email Me →
              </a>

              <a
                href={portfolio.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-center font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-white/5 px-5 py-7 sm:px-6 sm:py-8 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-center text-sm text-gray-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {portfolio.personal.name}
          </p>

          <p>
            Built with Next.js • AI • Curiosity
          </p>
        </div>
      </footer>
    </main>
  );
}