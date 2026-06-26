import { SectionReveal } from '@/components/shared/section-reveal'
import { skills } from '@/lib/data'

const frontendSkills = skills.find((s) => s.category === 'Frontend')!
const backendSkills = skills.find((s) => s.category === 'Backend')!
const toolsSkills = skills.find((s) => s.category === 'Tools')!

const categoryAccent: Record<string, string> = {
  Backend: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/80',
  Tools: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200/80',
}

const categoryDescription: Record<string, string> = {
  Backend: 'APIs, databases & services',
  Tools: 'Workflow & version control',
}

export function SkillsPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        <SectionReveal className="mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            What I work with
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            A focused stack built around React &amp; Next.js, with cloud backends and modern tooling.
          </p>
        </SectionReveal>

        {/* Asymmetric bento: Frontend (2/3) + Backend & Tools stacked (1/3) */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

          {/* Frontend — featured wide card */}
          <SectionReveal delay={0} className="lg:col-span-2">
            <div className="h-full rounded-[1.5rem] border border-border bg-card p-1.5 ring-1 ring-black/4">
              <div className="flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-0.375rem)] bg-card">
                {/* Accent header */}
                <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-border/50">
                  <div>
                    <span className="rounded-full bg-orange-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-orange-700 ring-1 ring-orange-200/80">
                      Frontend
                    </span>
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      Interfaces &amp; interactions
                    </p>
                  </div>
                  {/* Large ghost count */}
                  <span
                    className="font-display text-[4.5rem] font-black leading-none text-primary/8 select-none"
                    aria-hidden
                  >
                    {frontendSkills.items.length}
                  </span>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2 p-6">
                  {frontendSkills.items.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/6 hover:text-primary"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Backend + Tools — narrow stacked column */}
          <div className="flex flex-col gap-4">
            {[backendSkills, toolsSkills].map((cat, i) => (
              <SectionReveal key={cat.category} delay={(i + 1) * 0.08}>
                <div className="rounded-[1.5rem] border border-border bg-card p-1.5 ring-1 ring-black/4">
                  <div className="flex flex-col rounded-[calc(1.5rem-0.375rem)] bg-card p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {cat.category}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {categoryDescription[cat.category]}
                        </p>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${categoryAccent[cat.category] ?? 'bg-muted text-muted-foreground'}`}
                      >
                        {cat.items.length}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((skill) => (
                        <span
                          key={skill.name}
                          className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/6 hover:text-primary"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
