/** Product owner / clinic WhatsApp: +972 52-542-4242 */
const DEFAULT_WHATSAPP_E164 = '972525424242'

const digitsOnly = (value) => String(value ?? '').replace(/\D/g, '')

const defaultMessage =
  'היי גיא, אשמח לקבוע טיפול'

export function getWhatsAppHref() {
  const e164 = digitsOnly(import.meta.env.VITE_WHATSAPP_E164) || DEFAULT_WHATSAPP_E164
  const params = new URLSearchParams({ text: defaultMessage })
  return `https://wa.me/${e164}?${params.toString()}`
}

export const site = {
  title: 'גיא נימני | שיקום הגוף',
  description:
    'טיפול ממוקד בכאבי גב, צוואר וסיאטיקה — שילוב כוסות רוח וטכניקות נוספות. קליניקה בצור יצחק.',
  /** Set in production, e.g. https://www.example.co.il */
  url: import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || '',
  businessName: 'גיא נימני — שיקום הגוף',
  accessibilityEmail:
    import.meta.env.VITE_ACCESSIBILITY_EMAIL || 'benmendelson1997@gmail.com',
  accessibilityPhone: import.meta.env.VITE_ACCESSIBILITY_PHONE || '050-485-9798',
}
