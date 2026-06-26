import type { Metadata } from 'next'
import { MapPin, GraduationCap, Globe, Briefcase } from 'lucide-react'
import { SectionReveal } from '@/components/shared/section-reveal'
import { EyebrowPill } from '@/components/shared/eyebrow-pill'
import { DoubleBezealCard } from '@/components/shared/double-bezel-card'
import { personalInfo, journey } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About | Ahmad Masood',
  description: 'Learn more about Ahmad Masood, CS student, frontend developer, and Microsoft Learn Student Ambassador based in Islamabad.',
}

const quickFacts = [
  { icon: MapPin, label: 'Location', value: personalInfo.location },
  { icon: GraduationCap, label: 'Studying', value: 'BSc Computer Science, QAU' },
  { icon: Briefcase, label: 'Status', value: 'Open to opportunities' },
  { icon: Globe, label: 'Languages', value: 'Urdu (native) · English' },
]

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">

        <SectionReveal className="mb-16">
          <EyebrowPill className="mb-4">About Me</EyebrowPill>
          <h1
            className="font-display text-5xl font-bold tracking-tight md:text-6xl"
           
          >
            Who I am
          </h1>
        </SectionReveal>

        {/* Editorial split */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-16">
          {/* Bio — left */}
          <SectionReveal className="md:col-span-3" delay={0.1}>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I&apos;m <strong className="font-semibold text-foreground">Ahmad Masood</strong>, a Computer Science student
                at Quaid-e-Azam University, Islamabad, with a deep focus on frontend web development.
              </p>
              <p className="mt-4 leading-relaxed">
                I build interactive, user-friendly websites and web applications using{' '}
                <strong className="font-medium text-foreground">React.js, Next.js, TypeScript,</strong> and{' '}
                <strong className="font-medium text-foreground">Tailwind CSS</strong>. I connect UIs to real-time backends
                with Firebase and Supabase, and I care about every pixel of the experience I ship.
              </p>
              <p className="mt-4 leading-relaxed">
                Beyond coding, I&apos;m a{' '}
                <strong className="font-medium text-foreground">Microsoft Learn Student Ambassador</strong>, organizing
                tech events, running workshops, and helping fellow students grow in the developer community.
              </p>
              <p className="mt-4 leading-relaxed">
                I&apos;m always open to collaborating on interesting projects, connecting with developers, or exploring
                opportunities that push me to grow. If you&apos;re building something meaningful, let&apos;s talk.
              </p>
            </div>
          </SectionReveal>

          {/* Quick facts — right */}
          <SectionReveal className="md:col-span-2" delay={0.2}>
            <DoubleBezealCard>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Quick Facts
              </h3>
              <div className="space-y-4">
                {quickFacts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/8">
                      <Icon size={13} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
                      <p className="text-sm font-medium text-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DoubleBezealCard>
          </SectionReveal>
        </div>

        {/* Journey timeline */}
        <SectionReveal className="mt-24 md:mt-32" delay={0.1}>
          <EyebrowPill className="mb-8">Journey</EyebrowPill>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />

            <div className="space-y-10">
              {journey.map((milestone, i) => (
                <SectionReveal key={`${milestone.year}-${i}`} delay={i * 0.1}>
                  <div className={`relative flex gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Dot */}
                    <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary ring-4 ring-background md:left-1/2">
                      <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                    </div>

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                      <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                        {milestone.year}
                      </span>
                      <h3 className="mb-1 text-lg font-bold text-foreground">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  )
}
