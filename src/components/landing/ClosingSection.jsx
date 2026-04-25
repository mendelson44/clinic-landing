import { motion } from 'framer-motion'
import WhatsAppButton from './WhatsAppButton'

const ClosingSection = () => {
  return (
    <section className="px-5 pb-32 pt-8 md:pb-36 md:pt-12" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/90 px-6 py-14 text-center shadow-lg shadow-slate-200/40 sm:px-10 md:py-16"
      >
        <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          תנועה חופשית ללא כאב היא איכות חיים
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-slate-600 sm:text-xl">
          שלחו הודעה ונבדוק איך אפשר לעזור לך לחזור לתפקוד תקין
        </p>
        <WhatsAppButton text="לקביעת טיפול – שלחו הודעה" className="rounded-2xl px-10 py-5 text-lg" />
      </motion.div>
    </section>
  )
}

export default ClosingSection
