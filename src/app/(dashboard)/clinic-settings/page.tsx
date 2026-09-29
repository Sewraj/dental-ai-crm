import { getTranslations } from 'next-intl/server'
import { Building2, CalendarOff, Clock, UsersRound } from 'lucide-react'

export default async function ClinicSettingsPage() {
  const t = await getTranslations('DentalFoundation.clinicSettings')
  const foundation = await getTranslations('DentalFoundation')
  const sections = [
    { title: 'informationTitle', body: 'informationBody', icon: Building2 },
    { title: 'hoursTitle', body: 'hoursBody', icon: Clock },
    { title: 'exceptionsTitle', body: 'exceptionsBody', icon: CalendarOff },
    { title: 'staffTitle', body: 'staffBody', icon: UsersRound },
  ] as const

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-foreground">{t('title')}</h1>
        <p className="mt-1 max-w-3xl text-sm text-muted-foreground">{t('description')}</p>
      </div>
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2">
        {sections.map(({ title, body, icon: Icon }) => (
          <section key={title} className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-start gap-3">
              <Icon aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">{t(title)}</h2>
            </div>
            <p className="mt-3 text-xs font-medium text-primary">{foundation('planned')}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(body)}</p>
            {title === 'exceptionsTitle' && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {(['close', 'override', 'availability', 'affected', 'notify', 'reschedule'] as const).map(key => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
