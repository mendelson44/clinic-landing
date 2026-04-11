import { motion } from 'framer-motion'
import { Check, MapPin } from 'lucide-react'

const reasons = [
  'אבחון מהיר ומדויק',
  'טיפול ממוקד בכאב ובהגבלה בתנועה',
  'ניסיון בטיפול בבעיות אורתופדיות',
  'הבנה של עומסים מהחיים עצמם — ספורט, עבודה וישיבה',
]

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
}

const WhyMeSection = () => (
  <section id="why-me" className="scroll-mt-20 bg-gradient-to-b from-slate-50 to-white px-5 py-24 sm:px-8 lg:px-10 md:py-32" dir="rtl">
    <div className="mx-auto w-full max-w-3xl">
      <motion.div {...fadeInUp} transition={{ duration: 0.5 }}>
        <h2 className="mb-12 text-center font-sans text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
          למה לבחור בי?
        </h2>

        <ul className="mb-10 space-y-3">
          {reasons.map((line) => (
            <li
              key={line}
              className="flex gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 shadow-sm shadow-emerald-600/30">
                <Check className="h-4 w-4 text-white" strokeWidth={2.5} aria-hidden />
              </span>
              <span className="pt-0.5 text-base font-medium leading-relaxed text-slate-800">{line}</span>
            </li>
          ))}
        </ul>

        <div className="relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-gradient-to-bl from-emerald-50 via-white to-teal-50/40 p-6 shadow-md sm:p-8">
          <div className="absolute -start-8 -top-8 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl" aria-hidden />
          <div className="relative flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/25">
              <MapPin className="h-6 w-6" aria-hidden />
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-900">קליניקה פרטית בצור יצחק</p>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                נוחה להגעה גם מכוכב יאיר, צור יגאל וכפר סבא
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

export default WhyMeSection
