import { useState } from 'react'
import { ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { getWhatsAppHref } from '../../config/site'

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
}

const painQuestions = [
  'קמים בבוקר עם גב תפוס?',
  'יש כאב שמקרין לישבן או לרגל?',
  'סובלים מכאב חוזר בצוואר ובשכמות?',
  'הכתף כואבת או מוגבלת בתנועה?',
]

const HeroSection = ({ heroImage }) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
  })

  const handleFieldChange = (event) => {
    const { name, value } = event.target
    setContactForm((current) => ({ ...current, [name]: value }))
  }

  const handleQuickContactSubmit = (event) => {
    event.preventDefault()

    const messageLines = [
      'היי גיא, אשמח שתחזור אליי.',
      `שם: ${contactForm.name.trim()}`,
      `טלפון: ${contactForm.phone.trim()}`,
    ]

    const href = new URL(getWhatsAppHref())
    href.searchParams.set('text', messageLines.join('\n'))
    window.open(href.toString(), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative w-full overflow-hidden pt-14" dir="rtl" aria-labelledby="hero-heading">
      <div className="lg:grid lg:min-h-[calc(100svh-3.5rem)] lg:grid-cols-2 lg:items-stretch">
        {/* תמונה — חצי מסך; min-w-0 מונע פריצת רשת */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="relative order-1 min-h-[13rem] min-w-0 overflow-hidden sm:min-h-[16rem] lg:order-2 lg:min-h-0 lg:shadow-[6px_0_32px_-8px_rgba(15,23,42,0.12)]"
        >
          {heroImage ? (
            <img
              src={heroImage}
              alt="גיא נימני בטיפול בקליניקה"
              className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
              fetchPriority="high"
              decoding="async"
            />
          ) : (
            <div className="absolute inset-0 bg-slate-200" />
          )}
          {/* מעבר צבע לתוך אזור הטקסט (קצה ימין של התמונה = מול התוכן) */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-8 bg-gradient-to-l from-slate-50 from-10% via-slate-50/40 to-transparent sm:w-10 lg:w-12"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-slate-50 to-transparent lg:hidden"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-l from-transparent via-transparent to-slate-950/8"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-32 bg-gradient-to-r from-slate-950/18 via-slate-900/8 to-transparent lg:block"
            aria-hidden
          />
        </motion.div>

        {/* תוכן — בדסקטופ הכרטיס ממלא את חצי המסך (לא max-w צר) כדי לצמצם רווח מול התמונה */}
        <div className="order-2 flex min-h-0 w-full min-w-0 items-center justify-center bg-slate-50 lg:order-1 lg:bg-gradient-to-bl lg:from-slate-50 lg:via-white lg:to-emerald-50/25 lg:px-4 lg:ps-5 lg:pe-3 xl:px-6 xl:ps-6 xl:pe-4">
          <div className="mx-auto w-full max-w-xl px-5 py-8 sm:px-6 sm:py-10 lg:max-w-none lg:px-0 lg:py-6 xl:py-8">
            <div className="h-full w-full p-1 sm:p-2 lg:p-1">
              <div className="flex flex-col gap-6 text-right sm:gap-7 lg:gap-6">
                <motion.div {...fadeUp} transition={{ delay: 0.06, duration: 0.5 }} className="space-y-5 text-right">
                  <h1
                    id="hero-heading"
                    className="font-sans text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-[3.1rem] md:text-[3.55rem]"
                  >
                    כאב שלא מרפה?
                    <span className="mt-2.5 block bg-gradient-to-l from-emerald-700 via-emerald-500 to-teal-500 bg-clip-text text-transparent sm:mt-3">
                      אפשר לשנות את זה
                    </span>
                  </h1>
                  <ul className="space-y-3">
                    {painQuestions.map((q) => (
                      <li
                        key={q}
                        className="flex items-start gap-3 text-right text-[1.02rem] font-medium leading-snug text-slate-800 sm:text-lg"
                      >
                        <span
                          className="mt-3 h-[2px] w-5 shrink-0 rounded-full bg-gradient-to-l from-emerald-600 to-emerald-400/70"
                          aria-hidden
                        />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                    טיפול ממוקד שמשלב כוסות רוח וטכניקות נוספות לשחרור עומסים והפחתת כאב
                  </p>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ delay: 0.22, duration: 0.5 }}
                  className="flex items-center gap-3.5 rounded-[1.35rem] border border-emerald-300/90 bg-gradient-to-l from-emerald-100 via-emerald-50 to-white px-4 py-4 text-right text-[0.95rem] font-medium leading-relaxed text-slate-800 shadow-[0_18px_40px_-24px_rgba(5,150,105,0.75)] ring-1 ring-emerald-100/80 sm:px-5 sm:text-base"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_12px_26px_-14px_rgba(5,150,105,0.95)] ring-4 ring-emerald-100"
                    aria-hidden
                  >
                    <ShieldCheck className="h-5 w-5" strokeWidth={2.3} aria-hidden />
                  </div>
                  <div>
                    <p>
                      רוב המטופלים מרגישים שינוי כבר אחרי{' '}
                      <span className="font-bold text-emerald-900">טיפול ראשון</span>
                    </p>
                  </div>
                </motion.div>

                <motion.form
                  {...fadeUp}
                  transition={{ delay: 0.38, duration: 0.5 }}
                  onSubmit={handleQuickContactSubmit}
                  className="rounded-[1.6rem] border border-slate-200/85 bg-white/90 p-4 text-right shadow-[0_18px_45px_-32px_rgba(15,23,42,0.35)] ring-1 ring-white/80 sm:p-5"
                >
                  <div className="space-y-1">
                    <p className="text-lg font-bold text-slate-900 sm:text-xl">השאירו פרטים</p>
                    <p className="text-sm text-slate-500">ואחזור אליכם בהקדם</p>
                  </div>

                  <div className="mt-4 grid gap-3">
                    <label className="grid gap-1.5">
                      <span className="text-sm font-medium text-slate-700">שם</span>
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleFieldChange}
                        required
                        placeholder="שם"
                        className="h-12 rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                      />
                    </label>

                    <label className="grid gap-1.5">
                      <span className="text-sm font-medium text-slate-700">טלפון</span>
                      <input
                        type="tel"
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleFieldChange}
                        required
                        placeholder="טלפון"
                        dir="rtl"
                        className="h-12 rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-right text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-5 py-3.5 text-base font-semibold text-white shadow-[0_16px_32px_-18px_rgba(5,150,105,0.8)] transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    שליחה
                  </button>
                </motion.form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-4 bg-slate-50 sm:h-6 lg:h-6" aria-hidden />
    </section>
  )
}

export default HeroSection
