import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react'

const ProductFilters = ({ 
  searchTerm, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange, 
  selectedPowerRange, 
  onPowerRangeChange,
  onClearFilters,
  totalProducts,
  filteredCount
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const categories = [
    { value: 'all', label: 'Todas as Categorias', count: totalProducts },
    { value: 'subwoofer', label: 'Subwoofers', count: 0 },
    { value: 'mid-range', label: 'Mid-Range', count: 0 },
    { value: 'tweeter', label: 'Tweeters', count: 0 }
  ]

  const powerRanges = [
    { value: 'all', label: 'Todas as Potências' },
    { value: '0-200', label: '0 - 200W' },
    { value: '201-400', label: '201 - 400W' },
    { value: '401-600', label: '401 - 600W' },
    { value: '601+', label: '601W+' }
  ]

  const hasActiveFilters = selectedCategory !== 'all' || selectedPowerRange !== 'all' || searchTerm.length > 0

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      {/* Header com busca e toggle de filtros */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-4">
        {/* Busca */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Botões de ação */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFilters}
              className="text-red-600 hover:text-red-700"
            >
              <X className="h-4 w-4 mr-2" />
              Limpar
            </Button>
          )}
        </div>
      </div>

      {/* Filtros */}
      <div className={`${isFiltersOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Filtro por Categoria */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Categoria
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => onCategoryChange(category.value)}
                  className="text-xs"
                >
                  {category.label}
                  {category.count > 0 && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {category.count}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Filtro por Potência */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Potência
            </h3>
            <div className="flex flex-wrap gap-2">
              {powerRanges.map((range) => (
                <Button
                  key={range.value}
                  variant={selectedPowerRange === range.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => onPowerRangeChange(range.value)}
                  className="text-xs"
                >
                  {range.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>
            Mostrando <strong>{filteredCount}</strong> de <strong>{totalProducts}</strong> produtos
          </span>
          
          {hasActiveFilters && (
            <div className="flex items-center gap-2">
              <span className="text-xs">Filtros ativos:</span>
              {selectedCategory !== 'all' && (
                <Badge variant="secondary" className="text-xs">
                  {categories.find(c => c.value === selectedCategory)?.label}
                  <button
                    onClick={() => onCategoryChange('all')}
                    className="ml-1 hover:text-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {selectedPowerRange !== 'all' && (
                <Badge variant="secondary" className="text-xs">
                  {powerRanges.find(p => p.value === selectedPowerRange)?.label}
                  <button
                    onClick={() => onPowerRangeChange('all')}
                    className="ml-1 hover:text-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {searchTerm && (
                <Badge variant="secondary" className="text-xs">
                  "{searchTerm}"
                  <button
                    onClick={() => onSearchChange('')}
                    className="ml-1 hover:text-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductFilters
