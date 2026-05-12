/** Product owner / clinic WhatsApp: +972 52-542-4242 */
const DEFAULT_WHATSAPP_E164 = '972525424242'

/** Canonical / OG base when `VITE_SITE_URL` is unset (production build & live domain) */
const DEFAULT_PRODUCTION_SITE_URL = 'https://guynimni.co.il'

const digitsOnly = (value) => String(value ?? '').replace(/\D/g, '')

const defaultMessage =
  'היי גיא, אשמח לקבוע טיפול'

export function getWhatsAppHref() {
  const e164 = digitsOnly(import.meta.env.VITE_WHATSAPP_E164) || DEFAULT_WHATSAPP_E164
  const params = new URLSearchParams({ text: defaultMessage })
  return `https://wa.me/${e164}?${params.toString()}`
}

const envSiteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || ''
const resolvedSiteUrl =
  envSiteUrl || (import.meta.env.PROD ? DEFAULT_PRODUCTION_SITE_URL : '')

export const site = {
  title: 'שיקום הגוף | Guy Nimni',
  description:
    'טיפול ממוקד בכאבי גב, צוואר וסיאטיקה — שילוב כוסות רוח וטכניקות נוספות. קליניקה בצור יגאל.',
  /** Override with `VITE_SITE_URL` for previews; defaults to production domain in prod builds */
  url: resolvedSiteUrl,
  /** Path under site root for social previews (absolute URL built as `${url}${ogImagePath}`) */
  ogImagePath: '/images/hero/hero-main.png',
  ogImageAlt: 'גיא נימני — שיקום הגוף, טיפול בכאבי גב וצוואר',
  businessName: 'גיא נימני — שיקום הגוף',
  addressStreet: 'בזלת 14',
  addressLocality: 'צור יגאל',
  addressCountry: 'IL',
  /** E.164 digits for schema `telephone` (+ prefix added) */
  clinicPhoneE164: DEFAULT_WHATSAPP_E164,
  accessibilityEmail:
    import.meta.env.VITE_ACCESSIBILITY_EMAIL || 'benmendelson1997@gmail.com',
  accessibilityPhone: import.meta.env.VITE_ACCESSIBILITY_PHONE || '050-485-9798',
}
