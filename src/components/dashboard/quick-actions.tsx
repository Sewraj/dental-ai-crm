"use client"

import Link from 'next/link'
import { Users, MessageSquare, Bot, Zap } from 'lucide-react'
import type { ComponentType } from 'react'

import { useTranslations } from 'next-intl'

// Quick-action shortcuts. Each navigates to the page that owns the
// relevant "create" flow. We deliberately don't try to auto-open any
// modal on the target page — that'd require touching those pages,
// which is out of scope here.
interface Action {
  labelKey: string
  href: string
  icon: ComponentType<{ className?: string }>
  tint: string
}

const ACTIONS: Action[] = [
  { labelKey: 'patients', href: '/contacts', icon: Users, tint: 'text-primary' },
  { labelKey: 'inbox', href: '/inbox', icon: MessageSquare, tint: 'text-primary' },
  { labelKey: 'ai', href: '/agents', icon: Bot, tint: 'text-primary' },
  { labelKey: 'automations', href: '/automations', icon: Zap, tint: 'text-primary' },
]

export function QuickActions() {
  const t = useTranslations('DentalFoundation.actions')
  
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {ACTIONS.map((a) => {
        const Icon = a.icon
        return (
          <Link
            key={a.href}
            href={a.href}
            className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-border hover:bg-muted/60"
          >
            <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-muted ${a.tint}`}>
              <Icon className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium text-foreground">{t(a.labelKey as string)}</span>
          </Link>
        )
      })}
    </div>
  )
}
