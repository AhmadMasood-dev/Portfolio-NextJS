import type { Metadata } from 'next'
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ScrollProgress } from '@/components/shared/scroll-progress'
import { TooltipProvider } from '@/components/ui/tooltip'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Ahmad Masood | Frontend Developer',
  description:
    'Computer Science student at Quaid-e-Azam University and Frontend Developer specializing in React.js, Next.js, and TypeScript. Microsoft Learn Student Ambassador.',
  keywords: [
    'Ahmad Masood',
    'Frontend Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'MLSA',
    'Microsoft Learn Student Ambassador',
    'Islamabad',
    'Pakistan',
    'Web Developer',
  ],
  authors: [{ name: 'Ahmad Masood', url: 'https://github.com/AhmadMasood-dev' }],
  creator: 'Ahmad Masood',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Ahmad Masood | Frontend Developer',
    description:
      'CS Student & Frontend Developer specializing in React.js, Next.js, and TypeScript. Microsoft Learn Student Ambassador.',
    siteName: 'Ahmad Masood Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmad Masood | Frontend Developer',
    description: 'CS Student & Frontend Developer. React · Next.js · TypeScript · MLSA',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="bg-background text-foreground antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <TooltipProvider>
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  )
}
