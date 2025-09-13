import { useState, useEffect } from 'react'

// Sistema de roteamento simples baseado em hash
export const navigateTo = (path) => {
  window.location.hash = path
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

export const getCurrentRoute = () => {
  const hash = window.location.hash.slice(1) // Remove o #
  return hash || '/'
}

export const useRouter = () => {
  const [currentRoute, setCurrentRoute] = useState(getCurrentRoute())

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getCurrentRoute())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return {
    currentRoute,
    navigateTo
  }
}
