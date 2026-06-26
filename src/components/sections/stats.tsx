'use client'

import { SectionReveal } from '@/components/shared/section-reveal'
import { useCounter } from '@/hooks/useCounter'

interface StatItem {
  /** Numeric value to count to. Set to 0 for text-only stats. */
  numericValue: number
  /** Display suffix after the number, e.g. "+" */
  suffix: string
  /** Shown when numericValue === 0 (non-numeric stat) */
  textValue?: string
  label: string
  sublabel: string
  /** Accent colour class applied to the value */
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

/** A single animated number stat. */
function AnimatedStat({ item }: { item: StatItem }) {
  const { ref, count } = useCounter(item.numericValue, 1200)

  return (
    <div
      className="group rounded-2xl border border-border bg-card px-6 py-7 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/6 hover:-translate-y-1"
    >
      <p
        ref={ref}
        className={`font-display text-4xl font-bold tracking-tight md:text-5xl ${item.accentClass}`}
        aria-label={item.textValue ?? `${item.numericValue}${item.suffix}`}
      >
        {item.numericValue > 0 ? `${count}${item.suffix}` : item.textValue}
      </p>
      <p className="mt-1.5 text-sm font-semibold text-foreground">{item.label}</p>
      <p className="text-[11px] text-muted-foreground mt-0.5">{item.sublabel}</p>
    </div>
  )
}

export function Stats() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {statItems.map((item) => (
              <AnimatedStat key={item.label} item={item} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
