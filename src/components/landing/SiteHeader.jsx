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
      <div className="mx-auto flex h-14 max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 sm:relative sm:h-16 sm:flex-nowrap sm:justify-start">
        <nav aria-label="ניווט ראשי" className="text-xs font-medium text-slate-600 sm:text-sm">
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-4">
            <li>
              <a
                href="#services"
                className="rounded-md underline-offset-4 hover:text-slate-900 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                שיטת הטיפול
              </a>
            </li>
            <li>
              <a
                href="#why-me"
                className="rounded-md underline-offset-4 hover:text-slate-900 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                למה אני
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-center font-sans text-base font-semibold tracking-wide text-slate-800 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:text-lg">
          <span className="bg-gradient-to-l from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
            גיא נימני
          </span>
          <span className="mx-2 text-slate-300" aria-hidden>
            |
          </span>
          <span className="font-medium text-slate-600">שיקום הגוף</span>
        </p>
      </div>
    </motion.header>
  )
}

export default SiteHeader
