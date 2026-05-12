import { useEffect } from 'react'
import { site } from '../config/site'
import { faqItems } from '../data/faqItems'

const SCRIPT_ID = 'structured-data-site'

function buildGraph() {
  if (!site.url) return null

  const pageUrl = `${site.url}/`
  const imageUrl = `${site.url}${site.ogImagePath}`
  const phoneDigits = String(site.clinicPhoneE164 || '').replace(/\D/g, '')
  const telephone = phoneDigits ? `+${phoneDigits}` : undefined

  const localBusiness = {
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#localbusiness`,
    name: site.businessName,
    description: site.description,
    url: pageUrl,
    image: [imageUrl],
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.addressStreet,
      addressLocality: site.addressLocality,
      addressCountry: site.addressCountry,
    },
    ...(telephone ? { telephone } : {}),
  }

  const faqPage = {
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [localBusiness, faqPage],
  }
}

export default function StructuredData() {
  useEffect(() => {
    const payload = buildGraph()
    if (!payload) return undefined

    let el = document.getElementById(SCRIPT_ID)
    if (!el) {
      el = document.createElement('script')
      el.id = SCRIPT_ID
      el.type = 'application/ld+json'
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(payload)

    return () => {
      document.getElementById(SCRIPT_ID)?.remove()
    }
  }, [])

  return null
}
