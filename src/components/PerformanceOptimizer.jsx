import { useEffect } from 'react'

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement('link')
      fontLink.rel = 'preload'
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      fontLink.as = 'style'
      fontLink.onload = function() { this.rel = 'stylesheet' }
      document.head.appendChild(fontLink)

      // Preload critical images (if any)
      const criticalImages = [
        '/images/logo.png',
        '/images/hero-bg.jpg'
      ]

      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = src
        link.as = 'image'
        document.head.appendChild(link)
      })
    }

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      // Lazy load images with intersection observer
      const images = document.querySelectorAll('img[data-src]')
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target
              img.src = img.dataset.src
              img.classList.remove('lazy')
              imageObserver.unobserve(img)
            }
          })
        })

        images.forEach(img => imageObserver.observe(img))
      } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
          img.src = img.dataset.src
          img.classList.remove('lazy')
        })
      }
    }

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Load analytics after page load
      window.addEventListener('load', () => {
        // Google Analytics (example)
        // gtag('config', 'GA_MEASUREMENT_ID')
        
        // Facebook Pixel (example)
        // fbq('init', 'PIXEL_ID')
        
        console.log('Third-party scripts loaded after page load')
      })
    }

    // Service Worker registration for caching
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js')
            .then(registration => {
              console.log('SW registered: ', registration)
            })
            .catch(registrationError => {
              console.log('SW registration failed: ', registrationError)
            })
        })
      }
    }

    // Critical CSS inlining (handled by build process)
    const inlineCriticalCSS = () => {
      // This would typically be handled by the build process
      // but we can add some critical styles here if needed
      const criticalCSS = `
        /* Critical above-the-fold styles */
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; }
        .hero-section { min-height: 100vh; }
      `
      
      const style = document.createElement('style')
      style.textContent = criticalCSS
      document.head.appendChild(style)
    }

    // Resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetchDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'www.google-analytics.com'
      ]

      dnsPrefetchDomains.forEach(domain => {
        const link = document.createElement('link')
        link.rel = 'dns-prefetch'
        link.href = `//${domain}`
        document.head.appendChild(link)
      })

      // Preconnect to critical third-party origins
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ]

      preconnectDomains.forEach(domain => {
        const link = document.createElement('link')
        link.rel = 'preconnect'
        link.href = domain
        link.crossOrigin = 'anonymous'
        document.head.appendChild(link)
      })
    }

    // Execute optimizations
    preloadCriticalResources()
    lazyLoadResources()
    optimizeThirdPartyScripts()
    // registerServiceWorker() // Uncomment when SW is ready
    inlineCriticalCSS()
    addResourceHints()

    // Performance monitoring
    const monitorPerformance = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0]
            console.log('Page Load Performance:', {
              'DNS Lookup': perfData.domainLookupEnd - perfData.domainLookupStart,
              'TCP Connection': perfData.connectEnd - perfData.connectStart,
              'Request': perfData.responseStart - perfData.requestStart,
              'Response': perfData.responseEnd - perfData.responseStart,
              'DOM Processing': perfData.domContentLoadedEventStart - perfData.responseEnd,
              'Total Load Time': perfData.loadEventEnd - perfData.navigationStart
            })
          }, 0)
        })
      }
    }

    monitorPerformance()

  }, [])

  return null // This component doesn't render anything
}

export default PerformanceOptimizer
