import { useEffect } from 'react'

const SEO = ({ 
  title = 'JP Audio - Equipamentos de Áudio Automotivo de Alta Qualidade',
  description = 'Descubra a linha completa de equipamentos de áudio JP Audio. Subwoofers, mid-range e tweeters com qualidade superior, garantia e suporte técnico especializado.',
  keywords = 'áudio automotivo, subwoofer, tweeter, mid-range, som automotivo, JP Audio, alto-falantes, equipamentos de som',
  image = '/images/jp-audio-og.jpg',
  url = 'https://jpaudio.com.br',
  type = 'website',
  structuredData = null
}) => {
  
  useEffect(() => {
    // Atualizar título da página
    document.title = title

    // Função para atualizar ou criar meta tag
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name'
      let tag = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (tag) {
        tag.setAttribute('content', content)
      } else {
        tag = document.createElement('meta')
        tag.setAttribute(attribute, name)
        tag.setAttribute('content', content)
        document.head.appendChild(tag)
      }
    }

    // Meta tags básicas
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('author', 'JP Audio')
    updateMetaTag('robots', 'index, follow')
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0')

    // Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:url', url, true)
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:site_name', 'JP Audio', true)
    updateMetaTag('og:locale', 'pt_BR', true)

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', image)

    // Dados estruturados (Schema.org)
    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]')
      
      if (scriptTag) {
        scriptTag.textContent = JSON.stringify(structuredData)
      } else {
        scriptTag = document.createElement('script')
        scriptTag.type = 'application/ld+json'
        scriptTag.textContent = JSON.stringify(structuredData)
        document.head.appendChild(scriptTag)
      }
    }

    // Canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]')
    if (canonicalTag) {
      canonicalTag.setAttribute('href', url)
    } else {
      canonicalTag = document.createElement('link')
      canonicalTag.setAttribute('rel', 'canonical')
      canonicalTag.setAttribute('href', url)
      document.head.appendChild(canonicalTag)
    }

  }, [title, description, keywords, image, url, type, structuredData])

  return null // Este componente não renderiza nada visível
}

// Dados estruturados pré-definidos para diferentes tipos de página
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "JP Audio",
  "description": "Fabricante de equipamentos de áudio automotivo de alta qualidade",
  "url": "https://jpaudio.com.br",
  "logo": "https://jpaudio.com.br/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-11-99999-9999",
    "contactType": "customer service",
    "availableLanguage": "Portuguese"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR",
    "addressLocality": "São Paulo",
    "addressRegion": "SP"
  },
  "sameAs": [
    "https://www.facebook.com/jpaudio",
    "https://www.instagram.com/jpaudio",
    "https://www.youtube.com/jpaudio"
  ]
})

export const getProductSchema = (produto) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": produto.nome,
  "description": produto.descricao,
  "brand": {
    "@type": "Brand",
    "name": "JP Audio"
  },
  "category": produto.categoria,
  "offers": {
    "@type": "Offer",
    "price": produto.preco,
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "JP Audio"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
})

export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export default SEO
