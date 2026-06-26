'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Award } from 'lucide-react'
import { SectionReveal } from '@/components/shared/section-reveal'
import { EyebrowPill } from '@/components/shared/eyebrow-pill'
import type { Certification } from '@/types'

const ease = [0.32, 0.72, 0, 1] as const

/* ─── Per-variant visual configurations ─── */
const variantConfig = {
  postman: {
    bg: 'bg-[#FF6C37]/8',
    border: 'border-[#FF6C37]/20',
    badgeBg: 'bg-[#FF6C37]',
    badgeText: 'text-white',
    glow: 'hover:shadow-[#FF6C37]/10',
    icon: () => (
      /* Postman logo mark */
      <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
        <circle cx="16" cy="16" r="16" fill="#FF6C37" />
        <path
          d="M20.5 10.5 L16 16 L20.5 21.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="12" cy="16" r="2" fill="white" />
      </svg>
    ),
    label: 'Postman',
    labelColor: 'text-[#FF6C37]',
  },
  google: {
    bg: 'bg-blue-50',
    border: 'border-blue-200/60',
    badgeBg: 'bg-blue-600',
    badgeText: 'text-white',
    glow: 'hover:shadow-blue-500/10',
    icon: () => (
      /* Google G mark */
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
    label: 'Google',
    labelColor: 'text-blue-600',
  },
  naai: {
    bg: 'bg-slate-800',
    border: 'border-slate-700',
    badgeBg: 'bg-primary',
    badgeText: 'text-white',
    glow: 'hover:shadow-primary/10',
    icon: () => (
      <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-primary">
        <span className="text-[9px] font-black text-white">AI</span>
      </div>
    ),
    label: 'NAAI',
    labelColor: 'text-primary',
  },
}

function CertCard({ cert, index }: { cert: Certification; index: number }) {
  const config = variantConfig[cert.variant]
  const Icon = config.icon
  const isDark = cert.variant === 'naai'

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
      className="group relative h-full"
    >
      {/* Shine sweep on hover */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.5rem]">
        <div
          className="absolute -inset-full top-0 z-10 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 transition-all duration-700 group-hover:opacity-100"
          style={{ transform: 'translateX(-100%) skewX(-12deg)' }}
          aria-hidden
        />
      </div>

      <div
        className={`relative h-full rounded-[1.5rem] border p-1.5 transition-all duration-300 hover:shadow-xl ${config.border} ${config.bg} ${config.glow}`}
      >
        <div
          className={`flex h-full flex-col rounded-[calc(1.5rem-0.375rem)] p-6 ${isDark ? 'bg-slate-900' : 'bg-card'}`}
        >
          {/* Header row */}
          <div className="mb-4 flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-card shadow-sm">
                <Icon />
              </div>
              <div>
                <p className={`text-[10px] font-semibold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-muted-foreground'}`}>
                  {config.label}
                </p>
                <p className={`text-[11px] font-medium ${isDark ? 'text-slate-300' : 'text-foreground/70'}`}>
                  {cert.year}
                </p>
              </div>
            </div>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${cert.title}`}
                className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${isDark ? 'text-slate-500 hover:text-slate-200' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <ExternalLink size={12} />
              </a>
            )}
          </div>

          {/* Title */}
          <h3 className={`mb-3 text-base font-bold leading-snug ${isDark ? 'text-slate-100' : 'text-foreground'}`}>
            {cert.title}
          </h3>

          {/* Description */}
          <p className={`flex-1 text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-muted-foreground'}`}>
            {cert.description}
          </p>

          {/* Badge */}
          <div className="mt-5">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${config.badgeBg} ${config.badgeText}`}>
              <Award size={9} />
              Certified
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface CertificationsProps {
  certs: Certification[]
}

export function Certifications({ certs }: CertificationsProps) {
  return (
    <section>
      <SectionReveal className="mb-10">
        <EyebrowPill className="mb-4">Certifications</EyebrowPill>
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          Credentials &amp; Memberships
        </h2>
      </SectionReveal>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {certs.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} />
        ))}
      </div>
    </section>
  )
}
