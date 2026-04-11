import { motion } from 'framer-motion'
import WhatsAppButton from './WhatsAppButton'

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
}

const painQuestions = [
  'קמים עם כאבי גב בבוקר?',
  'הצוואר תפוס לאורך היום?',
  'כאב שמקרין לרגל ולא משתחרר?',
]

const HeroSection = ({ heroImage }) => {
  return (
    <section className="relative w-full overflow-hidden pt-14" dir="rtl" aria-labelledby="hero-heading">
      <div className="lg:grid lg:min-h-[calc(100svh-3.5rem)] lg:grid-cols-2 lg:items-stretch">
        {/* תמונה — חצי מסך; min-w-0 מונע פריצת רשת */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="relative order-1 min-h-[13rem] min-w-0 overflow-hidden sm:min-h-[16rem] lg:order-2 lg:min-h-0 lg:rounded-r-[clamp(1.25rem,2vw,2rem)] lg:shadow-[6px_0_32px_-8px_rgba(15,23,42,0.12)]"
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
        </motion.div>

        {/* תוכן — בדסקטופ הכרטיס ממלא את חצי המסך (לא max-w צר) כדי לצמצם רווח מול התמונה */}
        <div className="order-2 flex min-h-0 w-full min-w-0 items-center justify-center bg-slate-50 lg:order-1 lg:bg-gradient-to-bl lg:from-slate-50 lg:via-white lg:to-emerald-50/25 lg:px-4 lg:ps-5 lg:pe-3 xl:px-6 xl:ps-6 xl:pe-4">
          <div className="mx-auto w-full max-w-xl px-5 py-8 sm:px-6 sm:py-10 lg:max-w-none lg:px-0 lg:py-6 xl:py-8">
            <div className="h-full w-full rounded-2xl border border-slate-200/70 bg-white/98 p-6 shadow-md shadow-slate-200/40 ring-1 ring-slate-900/[0.03] sm:rounded-[1.35rem] sm:p-7 md:p-8 lg:p-7">
              <div className="flex flex-col gap-7 sm:gap-8 lg:gap-6">
                <motion.div {...fadeUp} transition={{ delay: 0.06, duration: 0.5 }} className="space-y-4">
                  <ul className="space-y-2.5 border-e-[3px] border-emerald-600 pe-3.5 sm:space-y-3 sm:pe-4">
                    {painQuestions.map((q) => (
                      <li
                        key={q}
                        className="text-[1.02rem] font-medium leading-snug text-slate-800 sm:text-lg"
                      >
                        {q}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton
                    variant="soft"
                    text="שלחו הודעה לקביעת טיפול"
                    className="w-full !py-3.5 text-base sm:w-auto sm:!text-[0.95rem]"
                  />
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ delay: 0.14, duration: 0.5 }}
                  className="space-y-3.5 border-t border-slate-200/80 pt-7 sm:space-y-4 sm:pt-8 lg:pt-6"
                >
                  <h1
                    id="hero-heading"
                    className="font-sans text-[1.85rem] font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl md:text-[2.45rem]"
                  >
                    כאב שלא מרפה?
                    <span className="mt-2.5 block bg-gradient-to-l from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent sm:mt-3">
                      אפשר לשנות את זה
                    </span>
                  </h1>
                  <p className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                    טיפול ממוקד שמשלב כוסות רוח וטכניקות נוספות לשחרור עומסים והפחתת כאב
                  </p>
                </motion.div>

                <motion.p
                  {...fadeUp}
                  transition={{ delay: 0.22, duration: 0.5 }}
                  className="rounded-xl border border-emerald-200/90 bg-emerald-50/95 px-3.5 py-3 text-[0.95rem] font-medium leading-relaxed text-slate-800 sm:text-base"
                >
                  רוב המטופלים מרגישים שינוי כבר אחרי{' '}
                  <span className="font-bold text-emerald-800">טיפול ראשון</span>
                </motion.p>

                <motion.div
                  {...fadeUp}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="space-y-3 text-[0.95rem] leading-relaxed text-slate-600 sm:text-base"
                >
                  <p>
                    אם ניסית לנוח, למתוח או פשוט לחכות — וזה עדיין חוזר, יכול להיות שהגיע הזמן לטיפול
                    ממוקד.
                  </p>
                  <p className="text-slate-500">
                    הכאב נמשך כבר תקופה?
                    <br />
                    או שלא השתפר מטיפולים קודמים?
                  </p>
                </motion.div>

                <motion.div {...fadeUp} transition={{ delay: 0.38, duration: 0.5 }} className="pt-0.5">
                  <WhatsAppButton
                    variant="solid"
                    text="לקביעת טיפול – שלחו הודעה"
                    className="w-full !py-[1.05rem] focus-visible:ring-offset-white sm:w-auto"
                  />
                  <p className="mt-2.5 text-center text-xs text-slate-400 sm:text-start">
                    תשובה מהירה בוואטסאפ
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-8 bg-slate-50 sm:h-10 lg:h-10" aria-hidden />
    </section>
  )
}

export default HeroSection
