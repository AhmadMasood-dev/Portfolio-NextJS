import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionReveal } from '@/components/shared/section-reveal'

export function CollabCTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-foreground px-12 py-16 text-center md:px-20 md:py-24">

            {/* Ambient glows */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl"
            />

            {/* Dot grid overlay */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="font-display mb-5 text-4xl font-bold tracking-tight text-background md:text-5xl">
                Ready to build<br className="hidden md:block" /> something great?
              </h2>
              <p className="mx-auto mb-10 max-w-sm text-base text-background/55">
                Whether you have a project idea, an opportunity, or just want to connect,{' '}
                <span className="font-medium text-background/85">Ahmad is always open to a conversation.</span>
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group rounded-full pl-6 pr-3 bg-background text-foreground hover:bg-background/92 shadow-2xl shadow-black/40 transition-all duration-300 hover:shadow-black/50"
                >
                  Start a Conversation
                  <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight size={14} />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
