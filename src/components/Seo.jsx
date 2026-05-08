import { useEffect } from 'react'
import site from '../data/site.json'

function setMeta(attrName, content, useProperty = false) {
  if (!content) return
  const selector = useProperty
    ? `meta[property="${attrName}"]`
    : `meta[name="${attrName}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(useProperty ? 'property' : 'name', attrName)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function Seo() {
  useEffect(() => {
    const { seo, contact, person, siteUrl } = site
    const keywords = seo.keywords?.join(', ') || ''

    document.title = seo.title
    setMeta('description', seo.description)
    setMeta('keywords', keywords)
    setMeta('author', seo.author)
    setMeta('robots', 'index, follow')
    setMeta('googlebot', 'index, follow')

    setMeta('og:title', seo.title, true)
    setMeta('og:description', seo.description, true)
    setMeta('og:type', 'profile', true)
    if (seo.ogImage) setMeta('og:image', seo.ogImage, true)
    if (siteUrl) setMeta('og:url', siteUrl, true)

    setMeta('twitter:card', seo.twitterCard || 'summary_large_image')
    if (seo.twitterSite) setMeta('twitter:site', seo.twitterSite)
    setMeta('twitter:title', seo.title)
    setMeta('twitter:description', seo.description)
    if (seo.ogImage) setMeta('twitter:image', seo.ogImage)

    if (siteUrl) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', siteUrl)
    }

    const sameAs = [contact.linkedin, contact.github, contact.telegram].filter(Boolean)
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: person.displayName,
      jobTitle: seo.jobTitle || 'Senior Full Stack Engineer',
      email: contact.email,
      url: siteUrl || contact.github,
      sameAs,
      knowsAbout: [
        'Full stack development',
        'Frontend development',
        'Backend development',
        'React',
        'Node.js',
        'TypeScript',
        'Mobile development'
      ]
    }

    let script = document.getElementById('ld-json-person')
    if (!script) {
      script = document.createElement('script')
      script.id = 'ld-json-person'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(ld)
  }, [])

  return null
}
