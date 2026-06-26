'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { SectionReveal } from '@/components/shared/section-reveal'
import { EyebrowPill } from '@/components/shared/eyebrow-pill'
import { DoubleBezealCard } from '@/components/shared/double-bezel-card'
import { Certifications } from '@/components/sections/certifications'
import { experience, achievements, education, certifications } from '@/lib/data'
import type { Experience } from '@/types'
import { MapPin, Zap } from 'lucide-react'

const ease = [0.32, 0.72, 0, 1] as const

const workExp = experience.filter((e) => e.type === 'work')
const leadershipExp = experience.filter((e) => e.type === 'leadership')

/* ─── Timeline entry card ─── */
function TimelineCard({
  job,
  index,
  side = 'left',
}: {
  job: Experience
  index: number
  side?: 'left' | 'right'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -32 : 32, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease, delay: index * 0.1 }}
      className="relative pl-12"
    >
      {/* Timeline dot */}
      <div className="absolute left-4 top-6 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-primary ring-4 ring-background">
        <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
      </div>

      <DoubleBezealCard>
        {/* Header */}
        <div className="mb-1 flex flex-wrap items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-bold text-foreground">{job.role}</h3>
              {job.current && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                  <Zap size={8} />
                  Current
                </span>
              )}
            </div>
            <p className="text-sm font-semibold text-primary">{job.company}</p>
          </div>
          <div className="text-right">
            <span className="block rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground whitespace-nowrap">
              {job.period}
            </span>
            {job.location && (
              <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
                <MapPin size={9} />
                {job.location}
              </span>
            )}
          </div>
        </div>

        {/* Bullets */}
        <ul className="mb-5 mt-4 space-y-2">
          {job.bullets.map((b, bi) => (
            <li key={bi} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
              {b}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {job.tech.map((t) => (
            <Badge key={t} variant="secondary" className="rounded-full text-xs">
              {t}
            </Badge>
          ))}
        </div>
      </DoubleBezealCard>
    </motion.div>
  )
}

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="mx-auto max-w-4xl px-6">

        {/* Page header */}
        <SectionReveal className="mb-16">
          <EyebrowPill className="mb-4">Career</EyebrowPill>
          <h1 className="font-display text-5xl font-bold tracking-tight md:text-6xl">
            Experience
          </h1>
          <p className="mt-4 max-w-lg text-base text-muted-foreground">
            From intern to Associate Software Engineer: a journey through product, leadership, and full-stack development.
          </p>
        </SectionReveal>

        {/* ── Work Experience ── */}
        <section className="mb-20">
          <SectionReveal className="mb-10">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Work Experience
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </SectionReveal>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-border" />
            <div className="space-y-8">
              {workExp.map((job, i) => (
                <TimelineCard key={`${job.company}-${i}`} job={job} index={i} side="left" />
              ))}
            </div>
          </div>
        </section>

        {/* ── Leadership ── */}
        <section className="mb-20">
          <SectionReveal className="mb-10">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Leadership &amp; Community
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </SectionReveal>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-border" />
            <div className="space-y-8">
              {leadershipExp.map((job, i) => (
                <TimelineCard key={`${job.company}-${i}`} job={job} index={i} side="right" />
              ))}
            </div>
          </div>
        </section>

        {/* ── Achievements ── */}
        <section className="mb-20">
          <SectionReveal className="mb-10">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Achievements
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </SectionReveal>
          <div className="space-y-4">
            {achievements.map((achievement, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <DoubleBezealCard>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00A4EF]/10">
                      <svg viewBox="0 0 23 23" className="h-6 w-6" fill="none">
                        <path d="M1 1h10v10H1z" fill="#F25022" />
                        <path d="M12 1h10v10H12z" fill="#7FBA00" />
                        <path d="M1 12h10v10H1z" fill="#00A4EF" />
                        <path d="M12 12h10v10H12z" fill="#FFB900" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-foreground">{achievement.title}</h3>
                        <span className="rounded-full bg-[#00A4EF]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#00A4EF]">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {achievement.org}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </DoubleBezealCard>
              </SectionReveal>
            ))}
          </div>
        </section>

        {/* ── Certifications ── */}
        <section className="mb-20">
          <Certifications certs={certifications} />
        </section>

        {/* ── Education ── */}
        <section>
          <SectionReveal className="mb-10">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Education
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {education.map((edu, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <DoubleBezealCard>
                  <div className="mb-1 flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <h3 className="text-base font-bold text-foreground">{edu.degree}</h3>
                      <p className="text-sm font-medium text-primary">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{edu.period}</p>
                      <span className="mt-1 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </DoubleBezealCard>
              </SectionReveal>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
