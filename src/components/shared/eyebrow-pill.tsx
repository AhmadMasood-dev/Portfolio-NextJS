import { cn } from '@/lib/utils'

interface EyebrowPillProps {
  children: React.ReactNode
  className?: string
}

export function EyebrowPill({ children, className }: EyebrowPillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary',
        className
      )}
    >
      {children}
    </span>
  )
}
