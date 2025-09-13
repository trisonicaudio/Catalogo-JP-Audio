import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

const ProductModalSimple = ({ produto, isOpen, onClose }) => {
  if (!isOpen || !produto) return null

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold">{produto.nome}</h2>
            <p className="text-gray-600 mt-1">{produto.categoria}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Sobre o Produto</h3>
              <p className="text-gray-600 leading-relaxed">{produto.descricao}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Especificações</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Potência RMS</div>
                  <div className="text-xl font-bold text-blue-600">{produto.especificacoes?.potencia_rms || `${produto.potencia}W`}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Impedância</div>
                  <div className="text-xl font-bold text-blue-600">{produto.especificacoes?.impedancia || '4Ω'}</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Preço</h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {formatPrice(produto.preco)}
                </div>
                <div className="text-sm text-gray-600">
                  Preço à vista • Consulte condições para parcelamento
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t bg-gray-50">
          <div className="text-sm text-gray-600">
            Produto: {produto.id}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              Fechar
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Solicitar Cotação
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModalSimple
