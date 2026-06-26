'use client'

import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SectionReveal } from '@/components/shared/section-reveal'
import { EyebrowPill } from '@/components/shared/eyebrow-pill'
import { ProjectThumbnail } from '@/components/shared/project-thumbnail'
import { ScreenshotStrip } from '@/components/shared/screenshot-strip'
import { SpotlightCard } from '@/components/shared/spotlight-card'
import { projects } from '@/lib/data'

const ease = [0.32, 0.72, 0, 1] as const

const filters = ['All', 'React', 'Firebase', 'API', 'HTML/CSS']

export default function ProjectsPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category.some((c) => c.toLowerCase() === active.toLowerCase()))

  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal className="mb-16">
          <EyebrowPill className="mb-4">My Work</EyebrowPill>
          <h1 className="font-display text-5xl font-bold tracking-tight md:text-6xl">
            All Projects
          </h1>
          <p className="mt-4 max-w-lg text-base text-muted-foreground">
            A collection of things I&apos;ve built, from social platforms to movie apps.
          </p>
        </SectionReveal>

        {/* Filter tabs */}
        <SectionReveal className="mb-12" delay={0.1}>
          <Tabs value={active} onValueChange={setActive}>
            <TabsList className="rounded-full bg-muted p-1">
              {filters.map((f) => (
                <TabsTrigger
                  key={f}
                  value={f}
                  className="rounded-full px-4 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {f}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </SectionReveal>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease }}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => {
              const originalIndex = projects.findIndex((p) => p.title === project.title)
              return (
                <SpotlightCard key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="h-full rounded-[1.5rem] border border-border bg-card p-1.5 ring-1 ring-black/4 transition-all duration-300 hover:shadow-xl hover:shadow-primary/6 hover:ring-primary/20">
                    <div className="flex h-full flex-col rounded-[calc(1.5rem-0.375rem)] bg-card p-5">

                      {/* Screenshot strip or CSS thumbnail */}
                      <div className="mb-4 overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-[1.02]">
                        {project.screenshots?.length ? (
                          <ScreenshotStrip src={project.screenshots[0]} alt={project.title} className="h-40" />
                        ) : (
                          <div className="border border-border/30 rounded-xl overflow-hidden">
                            <ProjectThumbnail index={originalIndex} className="h-40 w-full" />
                          </div>
                        )}
                      </div>

                      {project.featured && (
                        <span className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/8 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                          Featured
                        </span>
                      )}

                      <h3 className="mb-2 text-lg font-bold text-foreground">{project.title}</h3>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>

                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="secondary" className="rounded-full text-xs">
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} source code`}
                          className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <SiGithub size={13} /> Code
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live demo`}
                            className="flex items-center gap-1.5 text-xs font-medium text-primary transition-opacity hover:opacity-80"
                          >
                            <ExternalLink size={13} /> Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
                </SpotlightCard>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            No projects found in this category.
          </div>
        )}

        {/* GitHub CTA */}
        <SectionReveal className="mt-16 text-center" delay={0.2}>
          <a
            href="https://github.com/AhmadMasood-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <SiGithub size={16} />
            Browse all repositories on GitHub →
          </a>
        </SectionReveal>
      </div>
    </div>
  )
}
