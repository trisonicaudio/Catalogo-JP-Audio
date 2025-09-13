import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import ProductDetail from './pages/ProductDetail'
import ResellerArea from './pages/ResellerArea'
import ConsumerArea from './pages/ConsumerArea'
import PerformanceOptimizer from './components/PerformanceOptimizer'
import produtosData from './data/produtos.json'
import './App.css'

function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash.slice(1) || '/')
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash.slice(1) || '/')
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleProductSelect = (produto) => {
    setSelectedProduct(produto)
    setCurrentRoute('/produto')
    window.location.hash = '/produto'
  }

  const handleBackToCatalog = () => {
    setSelectedProduct(null)
    setCurrentRoute('/catalogo')
    window.location.hash = '/catalogo'
  }

  const renderPage = () => {
    switch (currentRoute) {
      case '/':
        return <Home />
      case '/catalogo':
        return <Catalog onProductSelect={handleProductSelect} />
      case '/produto':
        return <ProductDetail produto={selectedProduct} onBack={handleBackToCatalog} />
      case '/revendedores':
        return <ResellerArea />
      case '/consumidor':
        return <ConsumerArea />
      case '/sobre':
        return <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl">Sobre - Em desenvolvimento</h1>
        </div>
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <PerformanceOptimizer />
      <Header />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
