import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Eye, ShoppingCart, Zap, Volume2 } from 'lucide-react'

const ProductCard = ({ produto, onViewDetails }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'subwoofer':
        return <Volume2 className="h-5 w-5" />
      case 'mid-range':
        return <Volume2 className="h-5 w-5" />
      case 'tweeter':
        return <Zap className="h-5 w-5" />
      default:
        return <Volume2 className="h-5 w-5" />
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'subwoofer':
        return 'bg-blue-100 text-blue-800'
      case 'mid-range':
        return 'bg-yellow-100 text-yellow-800'
      case 'tweeter':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryName = (category) => {
    switch (category) {
      case 'subwoofer':
        return 'Subwoofer'
      case 'mid-range':
        return 'Mid-Range'
      case 'tweeter':
        return 'Tweeter'
      default:
        return category
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
  {product.imagens && product.imagens.length > 0 ? (
    <img src={product.imagens[0]} alt={product.nome} className="h-full w-full object-cover transition-transform duration-300 hover:scale-110" />
  ) : (
    <span className="text-gray-500">Sem imagem</span>
  )}
</div>
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
        {produto.imagens && produto.imagens.length > 0 ? (
          <img 
            src={produto.imagens[0]} 
            alt={produto.nome}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
        ) : null}
        <div className="w-full h-full flex items-center justify-center">
          {getCategoryIcon(produto.categoria)}
        </div>
        
        {/* Badge de Categoria */}
        <div className="absolute top-3 left-3">
          <Badge className={`${getCategoryColor(produto.categoria)} border-0`}>
            {getCategoryName(produto.categoria)}
          </Badge>
        </div>

        {/* Badge de Potência */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-black/70 text-white border-0">
            {produto.potencia}W
          </Badge>
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {produto.nome}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {produto.descricao}
        </p>

        {/* Especificações Rápidas */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center text-xs text-gray-500">
            <Zap className="h-3 w-3 mr-1" />
            {produto.especificacoes?.potencia_rms || `${produto.potencia}W RMS`}
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Volume2 className="h-3 w-3 mr-1" />
            {produto.especificacoes?.impedancia || '4Ω'}
          </div>
        </div>

        {/* Preço */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-blue-600">
            {formatPrice(produto.preco)}
          </span>
          <span className="text-sm text-gray-500 ml-2">à vista</span>
        </div>

        {/* Botões de Ação */}
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => onViewDetails(produto)}
          >
            <Eye className="h-4 w-4 mr-2" />
            Ver Detalhes
          </Button>
          <Button 
            size="sm" 
            className="flex-1 bg-blue-600 hover:bg-blue-700"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cotar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
