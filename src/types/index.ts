export interface PersonalInfo {
  name: string
  firstName: string
  lastName: string
  title: string
  tagline: string
  bio: string
  email: string
  phone: string
  location: string
  github: string
  linkedin: string
  upwork: string
}

export interface SkillCategory {
  category: 'Frontend' | 'Backend' | 'Tools'
  items: { name: string; icon: string }[]
}

export interface Experience {
  role: string
  company: string
  companyUrl?: string
  period: string
  location?: string
  type: 'work' | 'leadership'
  current?: boolean
  bullets: string[]
  tech: string[]
}

export interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  live?: string
  featured: boolean
  image: string
  category: string[]
}

export interface Achievement {
  title: string
  org: string
  year: string
  description: string
  icon: string
}

export interface Certification {
  title: string
  issuer: string
  year: string
  description: string
  /** Design token: 'postman' | 'google' | 'naai' */
  variant: 'postman' | 'google' | 'naai'
  link?: string
}

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
  status: string
}

export interface Journey {
  year: string
  title: string
  description: string
}

export type InquiryType = 'job' | 'collaboration' | 'hi'

export interface ContactFormData {
  inquiryType: InquiryType | null
  company?: string
  role?: string
  projectName?: string
  description: string
  timeline?: string
  name: string
  email: string
  handle?: string
}
