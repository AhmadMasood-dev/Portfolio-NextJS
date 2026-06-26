'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/projects' },
  { label: 'Career', href: '/experience' },
]

const ease = [0.32, 0.72, 0, 1] as const

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      {/* Floating island pill */}
      <header className="fixed left-0 right-0 top-5 z-50 flex justify-center px-4">
        <motion.nav
          initial={shouldReduce ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className={cn(
            'flex items-center gap-1 rounded-full px-3 py-2 transition-all duration-500',
            scrolled
              ? 'bg-white/85 shadow-lg shadow-black/8 ring-1 ring-black/8 backdrop-blur-xl'
              : 'bg-white/70 ring-1 ring-black/6 backdrop-blur-md'
          )}
        >
          {/* Logo + name */}
          <Link href="/" className="mr-2 flex items-center gap-2 transition-opacity duration-200 hover:opacity-80">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
              AM
            </span>
            <span className="hidden text-sm font-semibold text-foreground sm:block">Ahmad</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200',
                    active
                      ? 'bg-primary/8 text-primary'
                      : 'text-muted-foreground hover:bg-black/4 hover:text-foreground'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <Link href="/contact" className="ml-2 hidden md:block">
            <Button size="sm" className="rounded-full px-4 text-sm font-medium">
              Let&apos;s Talk →
            </Button>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-black/6 hover:text-foreground md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <motion.div
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </motion.div>
          </button>
        </motion.nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/95 backdrop-blur-2xl"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col items-center gap-2">
              {[...navLinks, { label: 'Contact', href: '/contact' }].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.06, ease }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-8 py-3 text-2xl font-semibold tracking-tight transition-colors',
                      pathname === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
