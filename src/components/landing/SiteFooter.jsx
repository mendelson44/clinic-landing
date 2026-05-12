import { getWhatsAppHref } from '../../config/site'

const whatsappHref = getWhatsAppHref()

const SiteFooter = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200/80 bg-white px-5 py-10" dir="rtl">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:flex-wrap sm:justify-between sm:text-start">
        <nav aria-label="קישורים תחתונים" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-600">
          <a href="#services" className="underline-offset-2 hover:text-slate-900 hover:underline">
            שיטת הטיפול
          </a>
          <a href="#why-me" className="underline-offset-2 hover:text-slate-900 hover:underline">
            למה אני
          </a>
          <a href="#faq" className="underline-offset-2 hover:text-slate-900 hover:underline">
            שאלות נפוצות
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:text-slate-900 hover:underline"
          >
            קביעת טיפול בוואטסאפ
          </a>
        </nav>
        <p className="text-sm text-slate-500">© {year} גיא נימני · שיקום הגוף</p>
      </div>
    </footer>
  )
}

export default SiteFooter
