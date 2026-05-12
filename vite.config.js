import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

/** Must match default in `src/config/site.js` when `VITE_SITE_URL` is unset */
const DEFAULT_SITE_URL = 'https://guynimni.co.il'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const fromEnv = env.VITE_SITE_URL?.replace(/\/$/, '') || ''
  const siteUrl = fromEnv || (mode === 'production' ? DEFAULT_SITE_URL : '')
  const ogImage = siteUrl ? `${siteUrl}/images/hero/hero-main.png` : ''

  return {
    plugins: [
      react(),
      {
        name: 'inject-seo-head',
        transformIndexHtml(html) {
          if (!siteUrl || !ogImage) return html
          const pageUrl = `${siteUrl}/`
          const inject = `
    <link rel="canonical" href="${pageUrl}" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:alt" content="גיא נימני — שיקום הגוף, טיפול בכאבי גב וצוואר" />
    <meta name="twitter:image" content="${ogImage}" />
    <meta name="twitter:title" content="שיקום הגוף | Guy Nimni" />
    <meta name="twitter:description" content="טיפול ממוקד בכאבי גב, צוואר וסיאטיקה — שילוב כוסות רוח וטכניקות נוספות. קליניקה בצור יגאל." />`
          return html.replace('</head>', `${inject}\n  </head>`)
        },
      },
    ],
  }
})
