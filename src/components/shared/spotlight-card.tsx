'use client'

import { useRef, useState, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  /** Radius of the spotlight radial-gradient in px */
  radius?: number
}

/**
 * Spotlight border card.
 * A radial-gradient glow follows the cursor and illuminates the card
 * border area. Implemented with useState (no framer-motion) since
 * continuous pointer position does not need the React tree to re-render
 * on a fixed cadence — only on each mousemove event.
 *
 * Reduced-motion: glow is still shown but does not follow the cursor
 * (stays at the last known position, which fades out on mouseleave).
 */
export function SpotlightCard({
  children,
  className,
  radius = 520,
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current) return
      const rect = divRef.current.getBoundingClientRect()
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    },
    []
  )

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn('group relative', className)}
    >
      {/* Spotlight overlay - sits behind card content, above the card background */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[1.5rem] transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(${radius}px circle at ${position.x}px ${position.y}px, rgba(234,129,22,0.20), transparent 40%)`,
        }}
        aria-hidden
      />
      {children}
    </div>
  )
}
