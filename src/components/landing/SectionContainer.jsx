const SectionContainer = ({ children, className = '' }) => {
  return (
    <section className={`px-4 py-10 sm:px-6 sm:py-14 ${className}`}>
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-white/70 bg-gradient-to-b from-white to-slate-50/80 p-6 shadow-[0_10px_35px_-18px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/70 backdrop-blur sm:p-10">
        {children}
      </div>
    </section>
  )
}

export default SectionContainer
