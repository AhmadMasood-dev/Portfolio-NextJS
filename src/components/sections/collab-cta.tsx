'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SectionReveal } from '@/components/shared/section-reveal'

const ease = [0.32, 0.72, 0, 1] as const

export function CollabCTA() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [glowOpacity, setGlowOpacity] = useState(0)

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <div
            onMouseMove={handleMove}
            onMouseEnter={() => setGlowOpacity(1)}
            onMouseLeave={() => setGlowOpacity(0)}
            className="relative overflow-hidden rounded-[2rem] bg-foreground px-12 py-16 text-center md:px-20 md:py-24 cursor-default"
          >
            {/* Ambient glows */}
            <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />

            {/* Dot grid overlay */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />

            {/* Interactive cursor glow — tracks mouse position */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-10 rounded-[2rem] transition-opacity duration-500"
              style={{
                opacity: glowOpacity,
                background: `radial-gradient(520px circle at ${pos.x}px ${pos.y}px, rgba(234,129,22,0.18), transparent 50%)`,
              }}
            />

            {/* Content */}
            <div className="relative z-20">
              <motion.h2
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease }}
                className="font-display mb-5 text-4xl font-bold tracking-tight text-background md:text-5xl"
              >
                Ready to build<br className="hidden md:block" /> something great?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
                className="mx-auto mb-10 max-w-sm text-base text-background/55"
              >
                Whether you have a project idea, an opportunity, or just want to connect,{' '}
                <span className="font-medium text-background/85">Ahmad is always open to a conversation.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease, delay: 0.2 }}
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group rounded-full pl-6 pr-3 bg-background text-foreground hover:bg-background/92 shadow-2xl shadow-black/40 transition-all duration-300 hover:shadow-black/50 hover:scale-105"
                  >
                    Start a Conversation
                    <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight size={14} />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
