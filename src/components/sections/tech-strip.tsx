import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiNodedotjs,
  SiGit,
  SiJavascript,
  SiSupabase,
  SiRedux,
  SiFigma,
  SiVercel,
} from 'react-icons/si'
import { SectionReveal } from '@/components/shared/section-reveal'

const icons = [
  { Icon: SiReact,       label: 'React',       color: '#61DAFB' },
  { Icon: SiNextdotjs,   label: 'Next.js',     color: '#000000' },
  { Icon: SiTypescript,  label: 'TypeScript',  color: '#3178C6' },
  { Icon: SiTailwindcss, label: 'Tailwind',    color: '#06B6D4' },
  { Icon: SiFirebase,    label: 'Firebase',    color: '#FFCA28' },
  { Icon: SiNodedotjs,   label: 'Node.js',     color: '#339933' },
  { Icon: SiJavascript,  label: 'JavaScript',  color: '#F7DF1E' },
  { Icon: SiSupabase,    label: 'Supabase',    color: '#3ECF8E' },
  { Icon: SiRedux,       label: 'Redux',       color: '#764ABC' },
  { Icon: SiFigma,       label: 'Figma',       color: '#F24E1E' },
  { Icon: SiVercel,      label: 'Vercel',      color: '#000000' },
  { Icon: SiGit,         label: 'Git',         color: '#F05032' },
]

// Double the array so the marquee loop is seamless
const doubled = [...icons, ...icons]

export function TechStrip() {
  return (
    <SectionReveal>
      <div className="relative border-y border-border bg-muted/20 py-7 overflow-hidden">
        {/* Edge fade masks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent"
        />

        {/* Marquee track — pauses on hover */}
        <div
          className="animate-marquee flex gap-10 w-max"
          role="list"
          aria-label="Technologies I work with"
        >
          {doubled.map(({ Icon, label, color }, i) => (
            <div
              key={`${label}-${i}`}
              role="listitem"
              className="flex shrink-0 flex-col items-center gap-2 opacity-35 transition-all duration-300 hover:opacity-100 hover:scale-110 cursor-default select-none"
              title={label}
            >
              <Icon size={22} color={color} aria-hidden="true" />
              <span className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
