import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">JP Audio</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => window.location.hash = '/'} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Início
            </button>
            <button onClick={() => window.location.hash = '/catalogo'} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Catálogo
            </button>
            <button onClick={() => window.location.hash = '/revendedores'} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Área do Revendedor
            </button>
            <button onClick={() => window.location.hash = '/consumidor'} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Área do Consumidor
            </button>
            <button onClick={() => window.location.hash = '/sobre'} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Sobre
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="default" size="sm">
              Contato
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button onClick={() => { window.location.hash = '/'; setIsMenuOpen(false) }} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Início
              </button>
              <button onClick={() => { window.location.hash = '/catalogo'; setIsMenuOpen(false) }} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Catálogo
              </button>
              <button onClick={() => { window.location.hash = '/revendedores'; setIsMenuOpen(false) }} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Área do Revendedor
              </button>
              <button onClick={() => { window.location.hash = '/consumidor'; setIsMenuOpen(false) }} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Área do Consumidor
              </button>
              <button onClick={() => { window.location.hash = '/sobre'; setIsMenuOpen(false) }} className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Sobre
              </button>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <Button variant="default" className="w-full">
                  Contato
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
