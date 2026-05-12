import { useEffect } from 'react'
import { site } from '../config/site'

function setOrCreateMeta(selector, create) {
  let el = document.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  return el
}

export default function DocumentMeta() {
  useEffect(() => {
    document.title = site.title

    const desc = setOrCreateMeta('meta[name="description"]', () => {
      const m = document.createElement('meta')
      m.setAttribute('name', 'description')
      return m
    })
    desc.setAttribute('content', site.description)

    const ogTitle = setOrCreateMeta('meta[property="og:title"]', () => {
      const m = document.createElement('meta')
      m.setAttribute('property', 'og:title')
      return m
    })
    ogTitle.setAttribute('content', site.title)

    const ogDesc = setOrCreateMeta('meta[property="og:description"]', () => {
      const m = document.createElement('meta')
      m.setAttribute('property', 'og:description')
      return m
    })
    ogDesc.setAttribute('content', site.description)

    if (site.url) {
      const pageUrl = `${site.url}/`

      const ogUrl = setOrCreateMeta('meta[property="og:url"]', () => {
        const m = document.createElement('meta')
        m.setAttribute('property', 'og:url')
        return m
      })
      ogUrl.setAttribute('content', pageUrl)

      const ogImage = setOrCreateMeta('meta[property="og:image"]', () => {
        const m = document.createElement('meta')
        m.setAttribute('property', 'og:image')
        return m
      })
      ogImage.setAttribute('content', `${site.url}${site.ogImagePath}`)

      const ogImageAlt = setOrCreateMeta('meta[property="og:image:alt"]', () => {
        const m = document.createElement('meta')
        m.setAttribute('property', 'og:image:alt')
        return m
      })
      ogImageAlt.setAttribute('content', site.ogImageAlt)

      const twImage = setOrCreateMeta('meta[name="twitter:image"]', () => {
        const m = document.createElement('meta')
        m.setAttribute('name', 'twitter:image')
        return m
      })
      twImage.setAttribute('content', `${site.url}${site.ogImagePath}`)

      const twTitle = setOrCreateMeta('meta[name="twitter:title"]', () => {
        const m = document.createElement('meta')
        m.setAttribute('name', 'twitter:title')
        return m
      })
      twTitle.setAttribute('content', site.title)

      const twDesc = setOrCreateMeta('meta[name="twitter:description"]', () => {
        const m = document.createElement('meta')
        m.setAttribute('name', 'twitter:description')
        return m
      })
      twDesc.setAttribute('content', site.description)

      let canonical = document.querySelector('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      canonical.setAttribute('href', pageUrl)
    }
  }, [])

  return null
}
