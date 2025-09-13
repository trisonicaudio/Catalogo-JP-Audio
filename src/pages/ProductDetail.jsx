import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import SEO, { getProductSchema, getBreadcrumbSchema } from '../components/SEO'
import { 
  ArrowLeft, 
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

const ProductDetail = ({ produto, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview')

  if (!produto) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
          <Button onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Catálogo
          </Button>
        </div>
      </div>
    )
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const breadcrumbItems = produto ? [
    { name: 'Início', url: 'https://jpaudio.com.br' },
    { name: 'Catálogo', url: 'https://jpaudio.com.br/catalogo' },
    { name: produto.nome, url: `https://jpaudio.com.br/produto/${produto.id}` }
  ] : []

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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
          </div>
        )

      default:
        return (
          <div className="text-center py-12 text-gray-500">
            <p>Conteúdo em desenvolvimento</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {produto && (
        <SEO 
          title={`${produto.nome} - JP Audio | ${produto.categoria} ${produto.potencia}W`}
          description={`${produto.descricao} Potência RMS: ${produto.potencia}W. Compre com garantia e suporte técnico especializado JP Audio.`}
          keywords={`${produto.nome}, ${produto.categoria}, ${produto.potencia}W, JP Audio, áudio automotivo`}
          url={`https://jpaudio.com.br/produto/${produto.id}`}
          type="product"
          structuredData={{
            ...getProductSchema(produto),
            ...getBreadcrumbSchema(breadcrumbItems)
          }}
        />
      )}
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Catálogo
            </Button>
            <div className="flex gap-2">
              <Badge variant="secondary">{produto.categoria}</Badge>
              <Badge variant="outline">{produto.potencia}W</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <Eye className="h-24 w-24 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Imagem do Produto</p>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{produto.nome}</h1>
                <p className="text-gray-600 text-lg">{produto.descricao}</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {formatPrice(produto.preco)}
                </div>
                <div className="text-gray-600">
                  Preço à vista • Consulte condições para parcelamento
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Phone className="h-5 w-5 mr-2" />
                  Solicitar Cotação
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
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

          {/* Tab Content */}
          <div className="p-8">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
