'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Send, CheckCircle, Briefcase, Handshake, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import type { InquiryType, ContactFormData } from '@/types'

const ease = [0.32, 0.72, 0, 1] as const

const TOTAL_STEPS = 4

const inquiryOptions: { type: InquiryType; icon: React.ElementType; label: string; description: string }[] = [
  { type: 'job', icon: Briefcase, label: 'Job Opportunity', description: "Let's discuss roles and opportunities" },
  { type: 'collaboration', icon: Handshake, label: 'Project Collaboration', description: 'I have a project idea to discuss' },
  { type: 'hi', icon: MessageCircle, label: 'Just Saying Hi', description: 'Want to connect and chat' },
]

const emptyForm: ContactFormData = {
  inquiryType: null,
  company: '',
  role: '',
  projectName: '',
  description: '',
  timeline: '',
  name: '',
  email: '',
  handle: '',
}

export default function ContactPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<ContactFormData>(emptyForm)
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})

  const update = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = (): boolean => {
    const errs: typeof errors = {}
    if (step === 1 && !form.inquiryType) errs.inquiryType = 'Please select an option'
    if (step === 2) {
      if (!form.description.trim()) errs.description = 'Please add a message'
      if (form.inquiryType === 'job' && !form.company?.trim()) errs.company = 'Company name required'
      if (form.inquiryType === 'collaboration' && !form.projectName?.trim()) errs.projectName = 'Project name required'
    }
    if (step === 3) {
      if (!form.name.trim()) errs.name = 'Name is required'
      // RFC 5322-aligned regex: handles plus signs, dots, subdomains
      if (!form.email.trim() || !/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(form.email.trim())) errs.email = 'Valid email required'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const next = () => {
    if (validate()) setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  }
  const back = () => setStep((s) => Math.max(s - 1, 1))

  const handleSend = () => {
    if (validate()) {
      setSent(true)
    }
  }

  const progress = ((step - 1) / (TOTAL_STEPS - 1)) * 100

  if (sent) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease }}
          className="max-w-md text-center"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
            <CheckCircle size={40} className="text-emerald-500" />
          </div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight">
            Message Sent!
          </h2>
          <p className="text-muted-foreground">
            Thanks, <strong className="text-foreground">{form.name}</strong>! Ahmad will reply to{' '}
            <strong className="text-foreground">{form.email}</strong> within 24 hours.
          </p>
          <Button
            variant="outline"
            className="mt-8 rounded-full"
            onClick={() => { setSent(false); setForm(emptyForm); setStep(1) }}
          >
            Send another message
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-[100dvh] pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="mx-auto max-w-2xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
            Get In Touch
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Let&apos;s Talk
          </h1>
          <p className="mt-3 text-muted-foreground">Step {step} of {TOTAL_STEPS}</p>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <Progress value={progress} className="h-1.5 rounded-full" />
          <div className="mt-3 flex justify-between">
            {['Inquiry', 'Details', 'About You', 'Review'].map((label, i) => (
              <span
                key={label}
                className={cn(
                  'text-[10px] font-medium uppercase tracking-wider transition-colors',
                  step > i ? 'text-primary' : 'text-muted-foreground/50'
                )}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24, filter: 'blur(4px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -24, filter: 'blur(4px)' }}
            transition={{ duration: 0.35, ease }}
          >
            {step === 1 && (
              <Step1
                selected={form.inquiryType}
                onSelect={(t) => setForm((prev) => ({ ...prev, inquiryType: t }))}
                error={errors.inquiryType}
              />
            )}
            {step === 2 && (
              <Step2 form={form} update={update} errors={errors} />
            )}
            {step === 3 && (
              <Step3 form={form} update={update} errors={errors} />
            )}
            {step === 4 && (
              <Step4 form={form} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-between">
          {step > 1 ? (
            <Button variant="ghost" onClick={back} className="rounded-full gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft size={14} /> Back
            </Button>
          ) : (
            <div />
          )}

          {step < TOTAL_STEPS ? (
            <Button onClick={next} className="group rounded-full pl-5 pr-3 shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30">
              Next
              <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                <ArrowRight size={13} />
              </span>
            </Button>
          ) : (
            <Button onClick={handleSend} className="group rounded-full pl-5 pr-3 shadow-md shadow-primary/20">
              Send Message
              <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
                <Send size={13} />
              </span>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── Step components ─── */

function Step1({
  selected,
  onSelect,
  error,
}: {
  selected: InquiryType | null
  onSelect: (t: InquiryType) => void
  error?: string
}) {
  return (
    <div>
      <h2 className="font-display mb-2 text-2xl font-bold tracking-tight">
        What brings you here?
      </h2>
      <p className="mb-8 text-muted-foreground">Choose the option that best describes your visit.</p>
      {error && <p className="mb-4 text-sm text-destructive">{error}</p>}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {inquiryOptions.map(({ type, icon: Icon, label, description }) => (
          <button
            key={type}
            onClick={() => onSelect(type)}
            className={cn(
              'group flex flex-col items-start gap-3 rounded-[1.25rem] border-2 p-5 text-left transition-all duration-200 hover:border-primary/60 hover:bg-primary/4',
              selected === type
                ? 'border-primary bg-primary/6 shadow-md shadow-primary/10'
                : 'border-border bg-card'
            )}
          >
            <div className={cn(
              'flex h-10 w-10 items-center justify-center rounded-xl transition-colors',
              selected === type ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
            )}>
              <Icon size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground">{label}</p>
              <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

function Step2({
  form,
  update,
  errors,
}: {
  form: ContactFormData
  update: (k: keyof ContactFormData, v: string) => void
  errors: Partial<Record<keyof ContactFormData, string>>
}) {
  return (
    <div>
      <h2 className="font-display mb-2 text-2xl font-bold tracking-tight">
        Tell Ahmad more
      </h2>
      <p className="mb-8 text-muted-foreground">Share the details so he can understand your needs.</p>

      <div className="space-y-5">
        {form.inquiryType === 'job' && (
          <>
            <Field label="Company / Organization" error={errors.company}>
              <Input
                placeholder="e.g. Acme Inc."
                value={form.company}
                onChange={(e) => update('company', e.target.value)}
                className="rounded-xl"
              />
            </Field>
            <Field label="Role / Position" error={errors.role}>
              <Input
                placeholder="e.g. Frontend Developer"
                value={form.role}
                onChange={(e) => update('role', e.target.value)}
                className="rounded-xl"
              />
            </Field>
          </>
        )}

        {form.inquiryType === 'collaboration' && (
          <Field label="Project Name" error={errors.projectName}>
            <Input
              placeholder="e.g. My SaaS app"
              value={form.projectName}
              onChange={(e) => update('projectName', e.target.value)}
              className="rounded-xl"
            />
          </Field>
        )}

        <Field
          label={form.inquiryType === 'hi' ? 'Your Message' : 'Additional Details'}
          error={errors.description}
        >
          <Textarea
            placeholder={
              form.inquiryType === 'hi'
                ? "Hey Ahmad! I wanted to reach out because..."
                : 'Tell me more about the opportunity or project...'
            }
            value={form.description}
            onChange={(e) => update('description', e.target.value)}
            rows={5}
            className="resize-none rounded-xl"
          />
        </Field>
      </div>
    </div>
  )
}

function Step3({
  form,
  update,
  errors,
}: {
  form: ContactFormData
  update: (k: keyof ContactFormData, v: string) => void
  errors: Partial<Record<keyof ContactFormData, string>>
}) {
  return (
    <div>
      <h2 className="font-display mb-2 text-2xl font-bold tracking-tight">
        How to reach you?
      </h2>
      <p className="mb-8 text-muted-foreground">Ahmad will use this to reply to you directly.</p>

      <div className="space-y-5">
        <Field label="Your Name" error={errors.name}>
          <Input
            placeholder="Ahmad Ali"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className="rounded-xl"
          />
        </Field>

        <Field label="Email Address" error={errors.email}>
          <Input
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className="rounded-xl"
          />
        </Field>

        <Field label="LinkedIn / Twitter (optional)">
          <Input
            placeholder="@yourhandle or linkedin.com/in/..."
            value={form.handle}
            onChange={(e) => update('handle', e.target.value)}
            className="rounded-xl"
          />
        </Field>
      </div>
    </div>
  )
}

function Step4({ form }: { form: ContactFormData }) {
  const inquiryLabel = inquiryOptions.find((o) => o.type === form.inquiryType)?.label ?? ''

  return (
    <div>
      <h2 className="font-display mb-2 text-2xl font-bold tracking-tight">
        Review & Send
      </h2>
      <p className="mb-8 text-muted-foreground">Everything look good? Hit send and Ahmad will be in touch.</p>

      <div className="rounded-[1.25rem] border border-border bg-card p-6 space-y-4">
        <Row label="Inquiry Type" value={inquiryLabel} />
        {form.company && <Row label="Company" value={form.company} />}
        {form.role && <Row label="Role" value={form.role} />}
        {form.projectName && <Row label="Project" value={form.projectName} />}
        {form.description && <Row label="Message" value={form.description} multiline />}
        <div className="my-4 border-t border-border" />
        <Row label="Your Name" value={form.name} />
        <Row label="Email" value={form.email} />
        {form.handle && <Row label="Handle" value={form.handle} />}
      </div>
    </div>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-foreground">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}

function Row({ label, value, multiline }: { label: string; value: string; multiline?: boolean }) {
  return (
    <div className={multiline ? 'space-y-1' : 'flex items-start justify-between gap-4'}>
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground shrink-0">{label}</span>
      <span className={cn('text-sm text-foreground', multiline ? 'block mt-1 leading-relaxed' : 'text-right')}>
        {value}
      </span>
    </div>
  )
}
