'use client'

import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionReveal } from '@/components/shared/section-reveal'
import { EyebrowPill } from '@/components/shared/eyebrow-pill'
import { ProjectThumbnail } from '@/components/shared/project-thumbnail'
import { SpotlightCard } from '@/components/shared/spotlight-card'
import { projects } from '@/lib/data'

const ease = [0.32, 0.72, 0, 1] as const

const featured = projects.filter((p) => p.featured)

export function FeaturedProjects() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal className="mb-16">
          <EyebrowPill className="mb-4">Featured Work</EyebrowPill>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Selected Projects
            </h2>
            <Link href="/projects" className="hidden md:block">
              <Button variant="ghost" className="group gap-2 text-muted-foreground hover:text-foreground">
                View all
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </SectionReveal>

        {/* Asymmetrical bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featured.map((project, i) => {
            // Find the original index in the full projects array for thumbnail consistency
            const originalIndex = projects.findIndex((p) => p.title === project.title)
            return (
              <SpotlightCard key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer"
              >
                <div className="h-full rounded-[1.5rem] border border-border bg-card p-1.5 ring-1 ring-black/4 transition-all duration-300 hover:shadow-xl hover:shadow-primary/6 hover:ring-primary/20">
                  <div className="flex h-full flex-col rounded-[calc(1.5rem-0.375rem)] bg-card p-6">

                    {/* Unique project thumbnail */}
                    <div className="mb-5 overflow-hidden rounded-xl border border-border/30">
                      <ProjectThumbnail index={originalIndex} className="h-48 w-full" />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <h3 className="mb-2 text-xl font-bold text-foreground">{project.title}</h3>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>

                      <div className="mb-5 flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="secondary" className="rounded-full px-2.5 py-0.5 text-xs font-medium">
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub`}
                          className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <SiGithub size={14} />
                          Code
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live demo`}
                            className="flex items-center gap-1.5 text-xs font-medium text-primary transition-opacity hover:opacity-80"
                          >
                            <ExternalLink size={14} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              </SpotlightCard>
            )
          })}
        </div>

        <SectionReveal className="mt-8 md:hidden">
          <Link href="/projects">
            <Button variant="outline" className="w-full rounded-full">
              View all projects
            </Button>
          </Link>
        </SectionReveal>
      </div>
    </section>
  )
}
