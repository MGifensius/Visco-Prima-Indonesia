import { useEffect } from 'react'

const SITE = 'PT. Visco Prima Indonesia'
const BASE_URL = 'https://www.viscochemical.com'
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`

// JSON-LD Organization schema
const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PT. Visco Prima Indonesia',
  alternateName: 'VISCO®',
  url: BASE_URL,
  logo: `${BASE_URL}/visco-logo.png`,
  description: 'Water & Waste Water Treatment Plants and Chemicals — solusi terpercaya untuk kebutuhan pengolahan air industri Indonesia sejak 1990-an.',
  foundingDate: '1990',
  areaServed: 'ID',
  hasMap: 'https://goo.gl/maps/viscoPrimaIndonesia',
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '+62-21-2669-2908', contactType: 'customer service', areaServed: 'ID', availableLanguage: ['Indonesian', 'English'] }
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kompleks Perkantoran Northland No 35-36, Jl. R.E. Martadinata – Ancol',
    addressLocality: 'Jakarta Utara',
    addressRegion: 'DKI Jakarta',
    postalCode: '14430',
    addressCountry: 'ID'
  },
  sameAs: [`${BASE_URL}`]
}

export default function SEOHead({ title, description, path = '', image, schema }) {
  const fullTitle = title ? `${title} | ${SITE}` : `${SITE} — Water Treatment Specialist Indonesia`
  const desc = description || 'PT. Visco Prima Indonesia menyediakan produk kimia VISCO® dan peralatan water treatment untuk industri, hotel, rumah sakit, dan gedung perkantoran di seluruh Indonesia.'
  const ogImage = image || DEFAULT_IMAGE
  const canonical = `${BASE_URL}${path}`

  useEffect(() => {
    document.title = fullTitle

    const metas = [
      { name: 'description', content: desc },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: desc },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: canonical },
      { property: 'og:site_name', content: SITE },
      { property: 'og:locale', content: 'id_ID' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: desc },
      { name: 'twitter:image', content: ogImage },
    ]

    const setOrCreateMeta = (attrs) => {
      const key = attrs.name ? `meta[name="${attrs.name}"]` : `meta[property="${attrs.property}"]`
      let el = document.head.querySelector(key)
      if (!el) { el = document.createElement('meta'); document.head.appendChild(el) }
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
    }
    metas.forEach(setOrCreateMeta)

    // Canonical
    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = canonical

    // JSON-LD
    const ldSchema = schema || ORG_SCHEMA
    const scriptId = 'seo-ld-json'
    let script = document.getElementById(scriptId)
    if (!script) { script = document.createElement('script'); script.id = scriptId; script.type = 'application/ld+json'; document.head.appendChild(script) }
    script.textContent = JSON.stringify(ldSchema)
  }, [fullTitle, desc, ogImage, canonical, schema])

  return null
}
