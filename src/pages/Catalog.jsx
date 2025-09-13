import { useState, useEffect, useMemo } from 'react'
import ProductCard from '../components/product/ProductCard'
import ProductFilters from '../components/product/ProductFilters'
import ProductModalSimple from '../components/product/ProductModalSimple'
import { Button } from '@/components/ui/button'
import { ArrowUp, Grid, List } from 'lucide-react'
import produtosData from '../data/produtos.json'
import SEO, { getBreadcrumbSchema } from '../components/SEO'

const Catalog = ({ onProductSelect }) => {
  const [produtos] = useState(produtosData)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPowerRange, setSelectedPowerRange] = useState('all')
  const [viewMode, setViewMode] = useState('grid') // 'grid' ou 'list'
  const [sortBy, setSortBy] = useState('name') // 'name', 'price', 'power'
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Filtrar produtos
  const filteredProducts = useMemo(() => {
    let filtered = produtos

    // Filtro por busca
    if (searchTerm) {
      filtered = filtered.filter(produto =>
        produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
        produto.categoria.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filtro por categoria
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(produto => produto.categoria === selectedCategory)
    }

    // Filtro por potência
    if (selectedPowerRange !== 'all') {
      filtered = filtered.filter(produto => {
        const power = produto.potencia
        switch (selectedPowerRange) {
          case '0-200':
            return power >= 0 && power <= 200
          case '201-400':
            return power >= 201 && power <= 400
          case '401-600':
            return power >= 401 && power <= 600
          case '601+':
            return power >= 601
          default:
            return true
        }
      })
    }

    // Ordenação
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.preco - b.preco
        case 'power':
          return b.potencia - a.potencia
        case 'name':
        default:
          return a.nome.localeCompare(b.nome)
      }
    })

    return filtered
  }, [produtos, searchTerm, selectedCategory, selectedPowerRange, sortBy])

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleClearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSelectedPowerRange('all')
  }

  const handleViewDetails = (produto) => {
    if (onProductSelect) {
      onProductSelect(produto)
    } else {
      setSelectedProduct(produto)
      setIsModalOpen(true)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const breadcrumbItems = [
    { name: 'Início', url: 'https://jpaudio.com.br' },
    { name: 'Catálogo', url: 'https://jpaudio.com.br/catalogo' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Catálogo de Produtos - JP Audio | Subwoofers, Mid-Range e Tweeters"
        description="Explore nossa linha completa de equipamentos de áudio automotivo. Subwoofers potentes, mid-range cristalinos e tweeters precisos com garantia e qualidade JP Audio."
        keywords="catálogo áudio automotivo, subwoofers JP Audio, tweeters automotivos, mid-range som, produtos áudio carro"
        url="https://jpaudio.com.br/catalogo"
        structuredData={getBreadcrumbSchema(breadcrumbItems)}
      />
      {/* Header da página */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Catálogo de Produtos
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore nossa linha completa de equipamentos de áudio de alta qualidade
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filtros */}
        <ProductFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedPowerRange={selectedPowerRange}
          onPowerRangeChange={setSelectedPowerRange}
          onClearFilters={handleClearFilters}
          totalProducts={produtos.length}
          filteredCount={filteredProducts.length}
        />

        {/* Controles de visualização e ordenação */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Ordenar por:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Nome</option>
              <option value="price">Preço</option>
              <option value="power">Potência</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Visualização:</span>
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Grid de produtos */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((produto) => (
              <ProductCard
                key={produto.id}
                produto={produto}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Grid className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-gray-600 mb-4">
              Tente ajustar os filtros ou termos de busca
            </p>
            <Button onClick={handleClearFilters} variant="outline">
              Limpar Filtros
            </Button>
          </div>
        )}

        {/* Botão de voltar ao topo */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 rounded-full w-12 h-12 shadow-lg z-50"
            size="sm"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        )}

        {/* Modal de detalhes do produto */}
        <ProductModalSimple
          produto={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  )
}

export default Catalog
