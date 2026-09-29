import { getTranslations } from 'next-intl/server'
import { CalendarClock, CalendarDays, MessageSquare, Users } from 'lucide-react'
import { MetricCard } from '@/components/dashboard/metric-card'
import { QuickActions } from '@/components/dashboard/quick-actions'

export default async function DashboardPage() {
  const t = await getTranslations('DentalFoundation')
  const dashboard = await getTranslations('Header')
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-foreground">{dashboard('dashboard')}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{t('description')}</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard title={t('today')} value="—" icon={CalendarDays} subtitle={t('appointmentsHint')} />
        <MetricCard title={t('patients')} value="—" icon={Users} subtitle={t('patientsHint')} />
        <MetricCard title={t('upcoming')} value="—" icon={CalendarClock} subtitle={t('appointmentsHint')} />
        <MetricCard title={t('messages')} value="—" icon={MessageSquare} subtitle={t('messagesHint')} />
      </div>
      <QuickActions />
      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">{t('overviewTitle')}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{t('overviewBody')}</p>
      </section>
    </div>
  )
}
