import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SiteHeader = () => {
  const [elevated, setElevated] = useState(false)

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={false}
      animate={{
        boxShadow: elevated ? '0 1px 0 0 rgb(15 23 42 / 0.06)' : '0 0 0 0 transparent',
      }}
      className={`fixed inset-x-0 top-0 z-[60] border-b transition-colors duration-300 ${
        elevated
          ? 'border-slate-200/90 bg-white/92 backdrop-blur-md'
          : 'border-transparent bg-white/75 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-center px-4 sm:h-16">
        <p className="text-center font-sans text-base font-semibold tracking-wide text-slate-800 sm:text-lg">
          <span className="bg-gradient-to-l from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
            שיקום הגוף
          </span>
          <span className="mx-2 text-slate-300" aria-hidden>
            |
          </span>
          <span className="font-medium text-slate-600">Guy Nimni</span>
        </p>
      </div>
    </motion.header>
  )
}

export default SiteHeader
