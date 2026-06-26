import { cn } from '@/lib/utils'

interface DoubleBezealCardProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
}

export function DoubleBezealCard({ children, className, innerClassName }: DoubleBezealCardProps) {
  return (
    <div className={cn('p-1.5 rounded-[1.5rem] bg-black/4 ring-1 ring-black/6', className)}>
      <div
        className={cn(
          'rounded-[calc(1.5rem-0.375rem)] bg-card shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] p-6',
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  )
}
