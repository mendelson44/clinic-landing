import { Check } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const primaryConditions = [
  'כאבי גב תחתון',
  'סיאטיקה / תסמונת פיריפורמיס',
  'כאבי צוואר וכתפיים',
  'כאבי ראש ומיגרנות',
]

const additionalConditions = [
  'עומס מצטבר מישיבה ממושכת',
  'פעילות ספורטיבית ועומס על השרירים',
  'תחזוקת הגוף לספורטאים',
  'חיזוק מערכת הרבייה',
]

const WhoSection = () => {
  return (
    <section className="bg-card px-5 py-24 md:py-32" dir="rtl">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700/90">
          התאמה אישית
        </p>
        <h2 className="mb-14 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
          למי הטיפול מתאים?
        </h2>

        <div className="mb-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
          {primaryConditions.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 rounded-2xl border border-border/80 bg-background p-5 shadow-sm"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary shadow-sm shadow-primary/25" aria-hidden>
                <Check className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} aria-hidden />
              </div>
              <span className="text-base font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>

        <p className="mb-5 text-sm font-semibold text-muted-foreground">בנוסף:</p>
        <div className="mb-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
          {additionalConditions.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 rounded-2xl border border-border/80 bg-background p-5 shadow-sm"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/12 ring-1 ring-primary/20" aria-hidden>
                <Check className="h-4 w-4 text-primary" strokeWidth={2.5} aria-hidden />
              </div>
              <span className="text-base font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <WhatsAppButton text="לקביעת טיפול – שלחו הודעה" className="rounded-2xl px-10" />
        </div>
      </div>
    </section>
  )
}

export default WhoSection
