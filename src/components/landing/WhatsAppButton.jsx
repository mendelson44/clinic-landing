import { MessageCircle } from 'lucide-react'
import { getWhatsAppHref } from '../../config/site'

const WHATSAPP_LINK = getWhatsAppHref()

const variantStyles = {
  solid:
    'bg-green-600 text-white shadow-md shadow-green-900/25 hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/25 focus-visible:ring-green-500',
  outline:
    'border-2 border-white/55 bg-white/10 text-white backdrop-blur-sm hover:border-white/80 hover:bg-white/18 focus-visible:ring-white/60',
  ghost:
    'border border-white/25 bg-transparent text-white hover:bg-white/12 focus-visible:ring-white/40',
  soft:
    'border-2 border-emerald-200/90 bg-white text-emerald-900 shadow-sm hover:border-emerald-400 hover:bg-emerald-50/80 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
}

const WhatsAppButton = ({ text, children, className = '', variant = 'solid' }) => {
  const label = text || children || 'לקביעת טיפול – שלחו הודעה'
  const v = variantStyles[variant] ?? variantStyles.solid

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-full items-center justify-center gap-3 rounded-2xl px-8 py-4 text-lg font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto ${v} ${className}`}
      aria-label={`${label} — נפתח בוואטסאפ בחלון חדש`}
    >
      <MessageCircle className="h-6 w-6 shrink-0" aria-hidden />
      <span>{label}</span>
    </a>
  )
}

export default WhatsAppButton
