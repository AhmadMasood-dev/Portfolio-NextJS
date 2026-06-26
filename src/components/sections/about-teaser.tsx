import Link from 'next/link'
import { ArrowRight, MapPin, GraduationCap, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionReveal } from '@/components/shared/section-reveal'
import { EyebrowPill } from '@/components/shared/eyebrow-pill'
import { personalInfo } from '@/lib/data'

const facts = [
  {
    icon: MapPin,
    label: 'Based in',
    value: 'Islamabad, Pakistan',
  },
  {
    icon: GraduationCap,
    label: 'Studying',
    value: 'BSc Computer Science · QAU',
  },
  {
    icon: Award,
    label: 'Recognition',
    value: 'Microsoft Learn Student Ambassador',
  },
]

export function AboutTeaser() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Left — text */}
          <SectionReveal>
            <EyebrowPill className="mb-6">About Me</EyebrowPill>
            <h2 className="font-display mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Turning ideas into{' '}
              <span className="text-primary">polished</span>{' '}
              interfaces
            </h2>
            <p className="mb-4 text-base leading-relaxed text-muted-foreground">
              I&apos;m a Computer Science student at Quaid-e-Azam University, passionate about building
              fast, accessible, and visually sharp web experiences using React &amp; Next.js.
            </p>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              After a hands-on internship at BehinDev and being selected as a Microsoft Learn Student
              Ambassador, I&apos;m actively looking for the next challenge: a full-time
              role, freelance project, or open-source collaboration.
            </p>
            <Link href="/about">
              <Button
                variant="outline"
                className="group rounded-full border-border px-5 text-sm font-medium transition-all duration-200 hover:border-primary/40 hover:bg-primary/4 hover:text-primary"
              >
                Read the full story
                <ArrowRight size={13} className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </SectionReveal>

          {/* Right — quick-facts Double-Bezel card */}
          <SectionReveal delay={0.15}>
            <div className="rounded-[1.5rem] bg-black/[0.03] p-1.5 ring-1 ring-black/6">
              <div className="rounded-[calc(1.5rem-0.375rem)] bg-card shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] p-7">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Quick Facts
                </p>

                <div className="space-y-5">
                  {facts.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                          {label}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-foreground">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 border-t border-border pt-6">
                  <p className="text-xs text-muted-foreground">
                    Currently pursuing graduation (2026) while building real products and
                    shipping open-source projects on{' '}
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary underline underline-offset-2 hover:no-underline"
                    >
                      GitHub
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
