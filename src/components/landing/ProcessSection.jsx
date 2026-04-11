import { Clock } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const ProcessSection = ({ image }) => {
  return (
    <section className="px-5 py-24 md:py-32" dir="rtl">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700/90">
          לפני שמגיעים
        </p>
        <h2 className="mb-12 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
          איך נראה טיפול?
        </h2>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200/80 lg:order-1">
            {image ? (
              <img
                src={image}
                alt="שיחה קצרה ואבחון לפני טיפול"
                className="aspect-[4/5] h-full w-full object-cover sm:aspect-auto sm:min-h-[320px] lg:min-h-[380px]"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="flex aspect-[4/5] min-h-[280px] items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400 sm:aspect-auto">
                <span className="text-sm">תמונת טיפול</span>
              </div>
            )}
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              מתחילים בשיחה קצרה ואבחון, ומיד עוברים לעבודה ממוקדת על האזור הרלוונטי.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              הדגש הוא על טיפול יעיל ומדויק — בלי לבזבז זמן.
            </p>

            <div className="flex items-center gap-5 rounded-2xl border border-primary/20 bg-gradient-to-l from-primary/8 to-transparent p-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 shadow-inner" aria-hidden>
                <Clock className="h-7 w-7 text-primary" aria-hidden />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">משך טיפול ממוצע</p>
                <p className="text-2xl font-bold tracking-tight text-foreground">כ־30–40 דקות</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <WhatsAppButton text="לקביעת טיפול – שלחו הודעה" className="rounded-2xl px-10" />
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
