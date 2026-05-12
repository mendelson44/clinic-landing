import { motion } from 'framer-motion'
import { Activity, BriefcaseMedical, MapPin, Search, Target } from 'lucide-react'

const clinicAddress = 'בזלת 14, צור יגאל'
const encodedAddress = encodeURIComponent(clinicAddress)

const mapEmbedSrc = `https://maps.google.com/maps?q=${encodedAddress}&hl=iw&z=16&output=embed`
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`

const reasons = [
  {
    icon: Search,
    title: 'אבחון קצר ומדויק',
    text: 'להבין מה מקור הכאב ומה מגביל את התנועה',
  },
  {
    icon: Target,
    title: 'טיפול ממוקד בכאב ובתנועה',
    text: 'כוסות רוח, הקזות דם וטכניקות נוספות לפי הצורך',
  },
  {
    icon: BriefcaseMedical,
    title: 'ניסיון בטיפול בכאבים אורתופדיים',
    text: '1000+ מטופלים עברו דרכי\nגב, צוואר, כתפיים, שכמות והקרנות לרגל',
  },
  {
    icon: Activity,
    title: 'הבנה של עומסים מחיי היום־יום',
    text: 'ספורט, עבודה ממושכת וישיבה מול מחשב',
  },
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
          למה להגיע אליי לטיפול?
        </h2>

        <ul className="mb-10 space-y-3">
          {reasons.map((reason) => (
            <li
              key={reason.title}
              className="flex gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-600 shadow-sm shadow-emerald-600/30">
                <reason.icon className="h-5 w-5 text-white" strokeWidth={2.25} aria-hidden />
              </span>
              <div className="space-y-1 pt-0.5">
                <p className="text-base font-semibold leading-relaxed text-slate-900">{reason.title}</p>
                <p className="whitespace-pre-line text-base leading-relaxed text-slate-600">{reason.text}</p>
              </div>
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
              <p className="text-xl font-bold text-slate-900">קליניקה פרטית בצור יגאל</p>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                בזלת 14, צור יגאל — בקרבת כפר סבא, הוד השרון והסביבה
              </p>
            </div>
          </div>
          <div className="relative mt-6 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <iframe
              title="מפה — בזלת 14, צור יגאל"
              src={mapEmbedSrc}
              className="h-[260px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex items-center justify-end gap-3 border-t border-slate-200/80 bg-white/95 px-4 py-3 text-sm">
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 underline-offset-2 hover:text-emerald-800 hover:underline"
              >
                פתיחה במפה
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

export default WhyMeSection
