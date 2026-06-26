'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useAnimationFrame, useReducedMotion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiNodedotjs,
  SiJavascript,
  SiSupabase,
  SiRedux,
  SiFigma,
  SiVercel,
  SiGit,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiRadixui,
  SiShadcnui,
  SiReactquery,
} from 'react-icons/si'

const icons = [
  { Icon: SiReact,       label: 'React',       color: '#61DAFB' },
  { Icon: SiNextdotjs,   label: 'Next.js',     color: '#1a1a1a' },
  { Icon: SiTypescript,  label: 'TypeScript',  color: '#3178C6' },
  { Icon: SiTailwindcss, label: 'Tailwind',    color: '#06B6D4' },
  { Icon: SiFirebase,    label: 'Firebase',    color: '#FFCA28' },
  { Icon: SiNodedotjs,   label: 'Node.js',     color: '#3C873A' },
  { Icon: SiJavascript,  label: 'JavaScript',  color: '#F7DF1E' },
  { Icon: SiSupabase,    label: 'Supabase',    color: '#3ECF8E' },
  { Icon: SiRedux,       label: 'Redux',       color: '#764ABC' },
  { Icon: SiFigma,       label: 'Figma',       color: '#F24E1E' },
  { Icon: SiVercel,      label: 'Vercel',      color: '#1a1a1a' },
  { Icon: SiGit,         label: 'Git',         color: '#F05032' },
  { Icon: SiNestjs,     label: 'NestJS',      color: '#E0234E' },
  { Icon: SiMongodb,    label: 'MongoDB',     color: '#47A248' },
  { Icon: SiPostgresql, label: 'PostgreSQL',  color: '#336791' },
  { Icon: SiRadixui,    label: 'Radix UI',    color: '#161618' },
  { Icon: SiShadcnui,   label: 'shadcn/ui',   color: '#161618' },
  { Icon: SiReactquery, label: 'React Query', color: '#FF4154' },
]

// Doubled so we can loop at exactly the halfway point
const doubled = [...icons, ...icons]

// px per ms — matches the original 30 s feel
const SPEED = 0.055

export function TechStrip() {
  const shouldReduce = useReducedMotion()
  const stripRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)

  useAnimationFrame((_, delta) => {
    if (shouldReduce || !stripRef.current) return

    // Half of the strip = one full icon set (the loop point)
    const halfWidth = stripRef.current.scrollWidth / 2

    const next = x.get() - delta * SPEED
    // When we've scrolled one full set to the left, snap back to 0
    // Content at 0 == content at -halfWidth → seamless
    x.set(next <= -halfWidth ? 0 : next)
  })

  return (
    <div className="relative border-y border-border bg-muted/20 py-5 overflow-hidden">
      {/* Edge fade masks */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-background to-transparent"
      />

      <motion.div
        ref={stripRef}
        style={{ x }}
        className="flex w-max gap-3"
        role="list"
        aria-label="Technologies I work with"
      >
        {doubled.map(({ Icon, label, color }, i) => (
          <div
            key={`${label}-${i}`}
            role="listitem"
            title={label}
            aria-hidden={i >= icons.length}
            className="flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 shadow-sm cursor-default select-none"
          >
            <Icon size={17} color={color} aria-hidden />
            <span className="text-xs font-semibold text-foreground/75 whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
