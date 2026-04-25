import { Check } from 'lucide-react'

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

        <p className="mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          אם ניסית לנוח, למתוח או פשוט לחכות - וזה עדיין חוזר, יכול להיות שהגיע הזמן לטיפול ממוקד.
        </p>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {primaryConditions.map((item, idx) => (
            <div
              key={idx}
              className="flex min-h-[88px] items-center justify-between gap-4 rounded-[24px] border border-slate-200/90 bg-slate-50/90 px-5 py-4 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.28)] ring-1 ring-slate-100/80"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-200/80 bg-white/80 text-emerald-700 shadow-sm"
                aria-hidden
              >
                <Check className="h-4 w-4" strokeWidth={2.25} aria-hidden />
              </div>
              <span className="flex-1 text-center text-base font-medium leading-snug text-foreground">
                {item}
              </span>
            </div>
          ))}
        </div>

        <p className="mb-5 text-sm font-semibold text-muted-foreground">בנוסף:</p>
        <div className="mb-4 grid gap-4 sm:grid-cols-2">
          {additionalConditions.map((item, idx) => (
            <div
              key={idx}
              className="flex min-h-[88px] items-center justify-between gap-4 rounded-[24px] border border-slate-200/90 bg-slate-50/90 px-5 py-4 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.28)] ring-1 ring-slate-100/80"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-200/80 bg-white/80 text-emerald-700 shadow-sm"
                aria-hidden
              >
                <Check className="h-4 w-4" strokeWidth={2.25} aria-hidden />
              </div>
              <span className="flex-1 text-center text-base font-medium leading-snug text-foreground">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoSection
