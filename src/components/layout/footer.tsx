'use client'

import Link from 'next/link'
import { Mail, ArrowUp, ExternalLink } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'

const navLinks = [
  { label: 'Home',       href: '/'           },
  { label: 'About',      href: '/about'      },
  { label: 'Projects',   href: '/projects'   },
  { label: 'Career',     href: '/experience' },
  { label: "Let's Talk", href: '/contact'    },
]

const social = [
  { icon: SiGithub,      href: personalInfo.github,              label: 'GitHub'   },
  { icon: FaLinkedinIn,  href: personalInfo.linkedin,            label: 'LinkedIn' },
  { icon: ExternalLink,  href: personalInfo.upwork,              label: 'Upwork'   },
  { icon: Mail,          href: `mailto:${personalInfo.email}`,   label: 'Email'    },
]

const ease = [0.32, 0.72, 0, 1] as const

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand column */}
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              AM
            </div>
            <p className="font-display text-lg font-bold text-foreground">Ahmad Masood</p>
            <p className="mt-1 text-sm text-muted-foreground">Frontend Developer · CS Student</p>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted-foreground">
              Building fast, accessible, and visually sharp web experiences from Islamabad, Pakistan.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Connect
            </p>
            <ul className="space-y-2.5">
              {social.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <Icon size={13} aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ahmad Masood. Built with{' '}
            <span className="font-medium text-foreground">Next.js</span> &amp;{' '}
            <span className="font-medium text-foreground">Tailwind CSS</span>
          </p>

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease }}
            aria-label="Back to top"
            className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
          >
            <ArrowUp size={11} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
