import { HeroSection } from '@/components/sections/hero'
import { TechStrip } from '@/components/sections/tech-strip'
import { Stats } from '@/components/sections/stats'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { AboutTeaser } from '@/components/sections/about-teaser'
import { SkillsPreview } from '@/components/sections/skills-preview'
import { CollabCTA } from '@/components/sections/collab-cta'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStrip />
      <Stats />
      <FeaturedProjects />
      <AboutTeaser />
      <SkillsPreview />
      <CollabCTA />
    </>
  )
}
