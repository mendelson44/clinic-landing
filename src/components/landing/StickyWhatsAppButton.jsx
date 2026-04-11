import { MessageCircle } from 'lucide-react'
import { getWhatsAppHref } from '../../config/site'

const WHATSAPP_LINK = getWhatsAppHref()

const StickyWhatsAppButton = () => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))] pt-3">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex max-w-[min(100%,22rem)] items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_8px_32px_rgba(22,163,74,0.45)] ring-2 ring-white/90 transition hover:scale-[1.02] hover:bg-green-700 active:scale-[0.98] motion-safe:animate-pulse-soft sm:max-w-none sm:px-7 sm:py-3.5 sm:text-base"
        aria-label="לקביעת טיפול – שלחו הודעה בוואטסאפ (נפתח בחלון חדש)"
      >
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
        <span>לקביעת טיפול – שלחו הודעה</span>
      </a>
    </div>
  )
}

export default StickyWhatsAppButton
