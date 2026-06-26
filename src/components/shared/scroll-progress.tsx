'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Thin spring-physics scroll progress indicator fixed at the very top of the viewport.
 * Uses framer-motion useScroll + useSpring for a natural rubber-band feel.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[200] h-[2px] origin-left bg-primary"
      aria-hidden="true"
    />
  )
}
