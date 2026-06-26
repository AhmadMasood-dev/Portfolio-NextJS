"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, ExternalLink, ArrowRight, Download } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { EyebrowPill } from "@/components/shared/eyebrow-pill";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { personalInfo } from "@/lib/data";

const ease = [0.32, 0.72, 0, 1] as const;

const nameLetters = ["A", "h", "m", "a", "d"];
const lastNameLetters = ["M", "a", "s", "o", "o", "d"];

export function HeroSection() {
  const shouldReduce = useReducedMotion();

  /* ─── 3D tilt for photo card ─── */
  const photoRef = useRef<HTMLDivElement>(null);
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 180, damping: 22 });
  const rotateY = useSpring(rawRotateY, { stiffness: 180, damping: 22 });

  const handleTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduce || !photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rawRotateY.set(((e.clientX - cx) / (rect.width / 2)) * 9);
    rawRotateX.set(((cy - e.clientY) / (rect.height / 2)) * 9);
  };

  const handleTiltLeave = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
  };

  return (
    <section className="relative min-h-[100dvh] overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
      {/* Grain texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
          {/* ─── Left column ─── */}
          <div>
            {/* Available badge */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mb-7"
            >
              <EyebrowPill>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                Available for Work
                <span className="text-primary" aria-hidden>
                  ✦
                </span>
              </EyebrowPill>
            </motion.div>

            {/* Name */}
            <div
              role="heading"
              aria-level={1}
              aria-label="Ahmad Masood"
              className="mb-4 overflow-hidden"
            >
              {/* Ahmad */}
              <div className="flex" aria-hidden="true">
                {nameLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={shouldReduce ? false : { opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.65,
                      ease,
                      delay: 0.08 + i * 0.055,
                    }}
                    className="font-display text-[clamp(3.5rem,9vw,7.5rem)] font-black leading-[0.88] tracking-[-0.04em] text-foreground"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              {/* Masood — orange */}
              <div className="flex" aria-hidden="true">
                {lastNameLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={shouldReduce ? false : { opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.65,
                      ease,
                      delay: 0.28 + i * 0.055,
                    }}
                    className="font-display text-[clamp(3.5rem,9vw,7.5rem)] font-black leading-[0.88] tracking-[-0.04em] text-primary"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Role line */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.72 }}
              className="mb-5 flex items-center gap-3"
            >
              <div className="h-px w-10 bg-foreground" />
              <p className="text-lg font-semibold text-foreground md:text-xl">
                Frontend Developer
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.82 }}
              className="mb-8 max-w-md text-base leading-relaxed text-muted-foreground"
            >
              CS student building interactive, user-friendly interfaces with{" "}
              <strong className="font-semibold text-foreground">React</strong>,{" "}
              <strong className="font-semibold text-foreground">Next.js</strong>{" "}
              &amp; Tailwind. Microsoft Learn Student Ambassador.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.92 }}
              className="mb-10 flex flex-wrap items-center gap-3"
            >
              <MagneticButton strength={8}>
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="group rounded-full bg-foreground px-6 text-sm font-semibold text-background shadow-lg transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl"
                  >
                    See My Work
                    <ArrowRight
                      size={14}
                      className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </Button>
                </Link>
              </MagneticButton>

              <MagneticButton strength={6}>
                <a href="/AhmadMasood.pdf" download>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-border px-6 text-sm font-medium transition-all duration-200 hover:border-primary/50 hover:bg-primary/6 hover:text-primary"
                  >
                    Download CV
                    <Download size={13} className="ml-2" />
                  </Button>
                </a>
              </MagneticButton>
            </motion.div>

            {/* Social circles */}
            <motion.div
              initial={shouldReduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease, delay: 1.05 }}
              className="flex items-center gap-3"
            >
              {[
                { href: personalInfo.github, icon: SiGithub, label: "GitHub" },
                {
                  href: personalInfo.linkedin,
                  icon: FaLinkedinIn,
                  label: "LinkedIn",
                },
                {
                  href: personalInfo.upwork,
                  icon: ExternalLink,
                  label: "Upwork",
                },
                {
                  href: `mailto:${personalInfo.email}`,
                  icon: Mail,
                  label: "Email",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-all duration-200 hover:border-primary/40 hover:bg-primary/8 hover:text-primary hover:scale-110"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ─── Right column — photo card with 3D tilt ─── */}
          <div
            className="relative flex justify-center md:justify-end"
            style={{ perspective: "900px" }}
          >
            <motion.div
              ref={photoRef}
              initial={
                shouldReduce ? false : { opacity: 0, x: 40, scale: 0.97 }
              }
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease, delay: 0.35 }}
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
              style={{ rotateX, rotateY }}
              className="relative"
            >
              {/* Main orange card */}
              <div className="relative h-[420px] w-[320px] overflow-hidden rounded-[2rem] bg-primary sm:h-[480px] sm:w-[360px]">
                <Image
                  src="/profile.png"
                  alt="Ahmad Masood"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 320px, 360px"
                />
              </div>

              {/* Floating card — Based In */}
              <motion.div
                initial={shouldReduce ? false : { opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.9 }}
                className="absolute left-0 top-1/3 -translate-x-1/4 rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-xl backdrop-blur-sm md:-translate-x-1/3"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Based In
                </p>
                <p className="mt-0.5 text-sm font-bold text-foreground">
                  Islamabad, PK
                </p>
              </motion.div>

              {/* Floating card — MLSA */}
              <motion.div
                initial={shouldReduce ? false : { opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 1.05 }}
                className="absolute bottom-6 right-0 translate-x-1/4 flex items-center gap-2.5 rounded-2xl border border-border bg-background/95 px-3 py-2.5 shadow-xl backdrop-blur-sm md:translate-x-1/3"
              >
                {/* Microsoft logo */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0078D4]">
                  <svg viewBox="0 0 21 21" className="h-4 w-4" fill="none">
                    <path d="M1 1h9v9H1z" fill="#F25022" />
                    <path d="M11 1h9v9H11z" fill="#7FBA00" />
                    <path d="M1 11h9v9H1z" fill="#00A4EF" />
                    <path d="M11 11h9v9H11z" fill="#FFB900" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold leading-none text-foreground">
                    MLSA
                  </p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">
                    Microsoft &apos;24
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
