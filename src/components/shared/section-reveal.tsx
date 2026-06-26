'use client'

import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.32, 0.72, 0, 1] as const

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduce ? false : { opacity: 0, y: 32, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  )
}
