'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { SectionReveal } from '@/components/shared/section-reveal'
import { useCounter } from '@/hooks/useCounter'

interface StatItem {
  numericValue: number
  suffix: string
  textValue?: string
  label: string
  sublabel: string
  accentClass: string
}

const statItems: StatItem[] = [
  {
    numericValue: 3,
    suffix: '+',
    label: 'Projects shipped',
    sublabel: 'React & Next.js',
    accentClass: 'text-primary',
  },
  {
    numericValue: 15,
    suffix: '+',
    label: 'Technologies',
    sublabel: 'Frontend & Backend',
    accentClass: 'text-primary',
  },
  {
    numericValue: 5,
    suffix: '',
    label: 'Roles held',
    sublabel: 'Work & Leadership',
    accentClass: 'text-emerald-600',
  },
  {
    numericValue: 3,
    suffix: '',
    label: 'Certifications',
    sublabel: 'Postman · Google · NAAI',
    accentClass: 'text-blue-600',
  },
]

const ease = [0.32, 0.72, 0, 1] as const

/** Animated number stat with 3D spring tilt on hover. */
function AnimatedStat({ item, index }: { item: StatItem; index: number }) {
  const { ref: countRef, count } = useCounter(item.numericValue, 1200)
  const shouldReduce = useReducedMotion()
  const cardRef  = useRef<HTMLDivElement>(null)
  const rawRX    = useMotionValue(0)
  const rawRY    = useMotionValue(0)
  const rotateX  = useSpring(rawRX, { stiffness: 200, damping: 24 })
  const rotateY  = useSpring(rawRY, { stiffness: 200, damping: 24 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduce || !cardRef.current) return
    const r = cardRef.current.getBoundingClientRect()
    rawRY.set(((e.clientX - r.left  - r.width  / 2) / (r.width  / 2)) * 10)
    rawRX.set(((r.top + r.height / 2 - e.clientY)   / (r.height / 2)) * 10)
  }
  const handleLeave = () => { rawRX.set(0); rawRY.set(0) }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease, delay: index * 0.07 }}
      style={{ perspective: '600px' }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY }}
        className="group cursor-default rounded-2xl border border-border bg-card px-6 py-7 text-center transition-shadow duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/6"
      >
        <p
          ref={countRef}
          className={`font-display text-4xl font-bold tracking-tight md:text-5xl ${item.accentClass}`}
          aria-label={item.textValue ?? `${item.numericValue}${item.suffix}`}
        >
          {item.numericValue > 0 ? `${count}${item.suffix}` : item.textValue}
        </p>
        <p className="mt-1.5 text-sm font-semibold text-foreground">{item.label}</p>
        <p className="mt-0.5 text-[11px] text-muted-foreground">{item.sublabel}</p>
      </motion.div>
    </motion.div>
  )
}

export function Stats() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {statItems.map((item, i) => (
              <AnimatedStat key={item.label} item={item} index={i} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
