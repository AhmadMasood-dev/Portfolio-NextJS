'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticButtonProps {
  children: ReactNode
  /** How far (in px) the magnet pulls at full deflection. Default: 10 */
  strength?: number
  className?: string
}

/**
 * Wraps any child element with a magnetic cursor-pull spring effect.
 * The element gently follows the cursor while hovered, snaps back on leave.
 */
export function MagneticButton({
  children,
  strength = 10,
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const x = useSpring(rawX, { stiffness: 300, damping: 22 })
  const y = useSpring(rawY, { stiffness: 300, damping: 22 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distX = ((e.clientX - centerX) / (rect.width / 2)) * strength
    const distY = ((e.clientY - centerY) / (rect.height / 2)) * strength
    rawX.set(distX)
    rawY.set(distY)
  }

  function handleMouseLeave() {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}
