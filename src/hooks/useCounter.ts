'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Counts from 0 to `target` over `duration`ms using requestAnimationFrame.
 * Only starts when the returned `ref` element enters the viewport.
 *
 * Usage:
 *   const { ref, count } = useCounter(10, 1200)
 *   <p ref={ref as React.RefObject<HTMLParagraphElement>}>{count}+</p>
 */
export function useCounter(target: number, duration = 1400) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isInView || target === 0) return

    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      }
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [isInView, target, duration])

  return { ref, count }
}
