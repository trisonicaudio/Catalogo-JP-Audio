import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  X, 
  Eye, 
  Settings, 
  BarChart3, 
  Play, 
  Wrench, 
  ShoppingCart, 
  FileText,
  Download,
  ExternalLink,
  Phone,
  MessageCircle,
  MapPin
} from 'lucide-react'

const ProductModal = ({ produto, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview')

  if (!isOpen || !produto) return null

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: Eye },
    { id: 'specs', label: 'Especificações', icon: Settings },
    { id: 'curves', label: 'Curvas', icon: BarChart3 },
    { id: 'media', label: 'Mídia', icon: Play },
    { id: 'applications', label: 'Aplicações & Setup', icon: Wrench },
    { id: 'purchase', label: 'Onde Comprar', icon: ShoppingCart },
    { id: 'documents', label: 'Documentos', icon: FileText }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Sobre o Produto</h3>
              <p className="text-gray-600 leading-relaxed">{produto.descricao}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Características Principais</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Potência RMS</div>
                  <div className="text-xl font-bold text-blue-600">{produto.especificacoes?.potencia_rms || `${produto.potencia}W`}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Impedância</div>
                  <div className="text-xl font-bold text-blue-600">{produto.especificacoes?.impedancia || '4Ω'}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Diâmetro</div>
                  <div className="text-xl font-bold text-blue-600">{produto.especificacoes?.diametro || 'N/A'}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Sensibilidade</div>
                  <div className="text-xl font-bold text-blue-600">{produto.especificacoes?.sensibilidade || 'N/A'}</div>
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
        )

      case 'specs':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Especificações Técnicas</h3>
            <div className="grid gap-4">
              {Object.entries(produto.especificacoes || {}).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700 capitalize">
                    {key.replace(/_/g, ' ')}
                  </span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )

      case 'curves':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Curvas de Resposta</h3>
            {produto.curvas && produto.curvas.length > 0 ? (
              <div className="grid gap-6">
                {produto.curvas.map((curva, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-3 capitalize">
                      {curva.tipo.replace(/_/g, ' ')}
                    </h4>
                    <div className="bg-white p-4 rounded border-2 border-dashed border-gray-300 text-center">
                      <BarChart3 className="h-16 w-16 mx-auto text-gray-400 mb-2" />
                      <p className="text-gray-500">Gráfico de {curva.tipo.replace(/_/g, ' ')}</p>
                      <p className="text-xs text-gray-400 mt-1">Imagem: {curva.imagem}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <BarChart3 className="h-16 w-16 mx-auto mb-4" />
                <p>Curvas de resposta não disponíveis</p>
              </div>
            )}
          </div>
        )

      case 'media':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Mídia</h3>
            
            {/* Imagens */}
            <div>
              <h4 className="font-medium mb-3">Imagens</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {produto.imagens?.map((imagem, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg p-4 text-center">
                    <Eye className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                    <p className="text-xs text-gray-500">Imagem {index + 1}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vídeos */}
            {produto.videos && produto.videos.length > 0 && (
              <div>
                <h4 className="font-medium mb-3">Vídeos</h4>
                <div className="space-y-3">
                  {produto.videos.map((video, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Play className="h-5 w-5 text-blue-600 mr-3" />
                        <span>{video.titulo}</span>
                      </div>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Assistir
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )

      case 'applications':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Aplicações & Setup</h3>
            
            <div>
              <h4 className="font-medium mb-3">Aplicações Recomendadas</h4>
              <div className="grid gap-3">
                {produto.aplicacoes?.map((aplicacao, index) => (
                  <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Wrench className="h-5 w-5 text-blue-600 mr-3" />
                    <span>{aplicacao}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-medium mb-3 text-yellow-800">Dicas de Instalação</h4>
              <ul className="space-y-2 text-sm text-yellow-700">
                <li>• Certifique-se de que a potência do amplificador seja compatível</li>
                <li>• Use cabos de qualidade para melhor desempenho</li>
                <li>• Considere o ambiente de instalação (temperatura, umidade)</li>
                <li>• Consulte um profissional para instalações complexas</li>
              </ul>
            </div>
          </div>
        )

      case 'purchase':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Onde Comprar</h3>
            
            <div className="grid gap-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Loja Oficial JP Audio</h4>
                <p className="text-blue-700 mb-4">Compre diretamente conosco com garantia total</p>
                <div className="flex gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Comprar Agora
                  </Button>
                  <Button variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Revendedores Autorizados</h4>
                <p className="text-green-700 mb-4">Encontre um revendedor próximo a você</p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  <MapPin className="h-4 w-4 mr-2" />
                  Encontrar Revendedor
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Informações de Compra</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Garantia de 12 meses contra defeitos de fabricação</li>
                <li>• Frete calculado no checkout</li>
                <li>• Pagamento à vista com desconto ou parcelado</li>
                <li>• Suporte técnico especializado</li>
              </ul>
            </div>
          </div>
        )

      case 'documents':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Documentos</h3>
            
            {produto.documentos && produto.documentos.length > 0 ? (
              <div className="grid gap-3">
                {produto.documentos.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-600 mr-3" />
                      <div>
                        <div className="font-medium">{doc.nome}</div>
                        <div className="text-sm text-gray-500 capitalize">{doc.tipo}</div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <FileText className="h-16 w-16 mx-auto mb-4" />
                <p>Documentos não disponíveis</p>
              </div>
            )}
          </div>
        )

      default:
        return <div>Conteúdo não encontrado</div>
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold">{produto.nome}</h2>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary">{produto.categoria}</Badge>
              <Badge variant="outline">{produto.potencia}W</Badge>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="border-b">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {renderTabContent()}
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
              <Phone className="h-4 w-4 mr-2" />
              Solicitar Cotação
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
