import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export async function DentalPlaceholder({ section }: { section: 'appointments' | 'calendar' | 'treatments' | 'websiteManagement' }) {
  const t = await getTranslations('DentalFoundation')
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold text-foreground">{t(section + '.title')}</h1>
      <section className="rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">{t('planned')}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t(section + '.description')}</p>
        <Link href="/dashboard" className="mt-5 inline-flex rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-primary">{t('back')}</Link>
      </section>
    </div>
  )
}
