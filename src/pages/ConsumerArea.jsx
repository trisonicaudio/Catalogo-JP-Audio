import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Car, 
  Volume2, 
  Zap, 
  Shield, 
  Phone, 
  Mail, 
  MapPin,
  Download,
  FileText,
  Play,
  Star,
  CheckCircle,
  ArrowRight,
  Headphones,
  Settings,
  Award,
  Users,
  MessageCircle,
  ShoppingCart,
  Wrench,
  BookOpen,
  HelpCircle,
  Search
} from 'lucide-react'

const ConsumerArea = () => {
  const [activeTab, setActiveTab] = useState('guide')

  const productCategories = [
    {
      icon: Volume2,
      title: 'Subwoofers',
      description: 'Para graves profundos e impactantes',
      products: ['JP Sub 12" 500W', 'JP Sub 15" 800W', 'JP Sub 10" 300W']
    },
    {
      icon: Headphones,
      title: 'Mid-Range',
      description: 'Médios cristalinos e definidos',
      products: ['JP Mid 6" 300W', 'JP Mid 5" 200W', 'JP Mid 8" 400W']
    },
    {
      icon: Zap,
      title: 'Tweeters',
      description: 'Agudos brilhantes e precisos',
      products: ['JP Tweeter 1" 100W', 'JP Tweeter 0.75" 80W']
    }
  ]

  const installationTips = [
    {
      title: 'Escolha do Local',
      description: 'Posicione os alto-falantes em locais que proporcionem a melhor acústica',
      icon: MapPin
    },
    {
      title: 'Fiação Adequada',
      description: 'Use cabos de qualidade e bitola adequada para evitar perdas',
      icon: Zap
    },
    {
      title: 'Amplificação',
      description: 'Certifique-se de que o amplificador seja compatível com a potência',
      icon: Settings
    },
    {
      title: 'Vedação',
      description: 'Faça a vedação adequada para evitar vazamentos de ar',
      icon: Shield
    }
  ]

  const faqs = [
    {
      question: 'Qual a diferença entre RMS e PMPO?',
      answer: 'RMS é a potência real contínua que o alto-falante pode suportar, enquanto PMPO é um valor de pico momentâneo. Sempre considere a potência RMS para escolher seu amplificador.'
    },
    {
      question: 'Como escolher a impedância correta?',
      answer: 'A impedância deve ser compatível com seu amplificador. As mais comuns são 4Ω e 8Ω. Verifique o manual do seu amplificador para a impedância recomendada.'
    },
    {
      question: 'Posso instalar os produtos sozinho?',
      answer: 'Produtos básicos podem ser instalados por usuários experientes, mas recomendamos instalação profissional para garantir melhor desempenho e preservar a garantia.'
    },
    {
      question: 'Qual a garantia dos produtos JP Audio?',
      answer: 'Todos os produtos JP Audio têm garantia de 12 meses contra defeitos de fabricação, desde que instalados corretamente.'
    }
  ]

  const testimonials = [
    {
      name: 'Carlos Silva',
      location: 'São Paulo, SP',
      rating: 5,
      comment: 'Excelente qualidade! O som ficou perfeito no meu carro. Recomendo a JP Audio.'
    },
    {
      name: 'Ana Costa',
      location: 'Rio de Janeiro, RJ',
      rating: 5,
      comment: 'Atendimento excepcional e produtos de primeira linha. Muito satisfeita!'
    },
    {
      name: 'Roberto Lima',
      location: 'Belo Horizonte, MG',
      rating: 5,
      comment: 'Melhor custo-benefício do mercado. Som cristalino e graves potentes.'
    }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'guide':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Guia de Produtos</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {productCategories.map((category, index) => {
                  const Icon = category.icon
                  return (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-lg">{category.title}</h4>
                      </div>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <div className="space-y-2">
                        {category.products.map((product, idx) => (
                          <div key={idx} className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                            • {product}
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        <Search className="h-4 w-4 mr-2" />
                        Ver Produtos
                      </Button>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-blue-800">Como Escolher o Produto Ideal</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2">1. Defina seu Objetivo</h5>
                  <p className="text-sm text-blue-700 mb-4">
                    Quer mais graves? Médios mais claros? Ou um sistema completo?
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">2. Verifique o Espaço</h5>
                  <p className="text-sm text-blue-700 mb-4">
                    Meça o espaço disponível no seu veículo para instalação.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">3. Considere a Potência</h5>
                  <p className="text-sm text-blue-700 mb-4">
                    Verifique a potência do seu amplificador ou som original.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">4. Orçamento</h5>
                  <p className="text-sm text-blue-700 mb-4">
                    Temos opções para todos os orçamentos sem comprometer a qualidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'installation':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Dicas de Instalação</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {installationTips.map((tip, index) => {
                  const Icon = tip.icon
                  return (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                      <div className="flex items-center mb-4">
                        <div className="bg-green-100 p-3 rounded-lg mr-4">
                          <Icon className="h-6 w-6 text-green-600" />
                        </div>
                        <h4 className="font-semibold text-lg">{tip.title}</h4>
                      </div>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-yellow-800">⚠️ Importante</h4>
              <div className="space-y-3 text-yellow-700">
                <p>• Sempre desligue a bateria antes de iniciar a instalação</p>
                <p>• Use ferramentas adequadas para evitar danos</p>
                <p>• Em caso de dúvidas, procure um profissional qualificado</p>
                <p>• Instalações incorretas podem danificar o produto e anular a garantia</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h4 className="text-xl font-bold mb-4">Vídeos Tutoriais</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <Play className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h5 className="font-semibold mb-2">Instalação de Subwoofer</h5>
                  <p className="text-sm text-gray-600 mb-4">Aprenda a instalar seu subwoofer corretamente</p>
                  <Button variant="outline" size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    Assistir
                  </Button>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <Play className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h5 className="font-semibold mb-2">Configuração de Sistema</h5>
                  <p className="text-sm text-gray-600 mb-4">Como configurar um sistema completo</p>
                  <Button variant="outline" size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    Assistir
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )

      case 'support':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Suporte ao Cliente</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Telefone</h4>
                  <p className="text-gray-600 mb-4">(11) 9999-9999</p>
                  <p className="text-sm text-gray-500">Seg-Sex 8h às 18h</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">WhatsApp</h4>
                  <p className="text-gray-600 mb-4">(11) 99999-9999</p>
                  <p className="text-sm text-gray-500">Resposta rápida</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Mail className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Email</h4>
                  <p className="text-gray-600 mb-4">suporte@jpaudio.com</p>
                  <p className="text-sm text-gray-500">Resposta em 24h</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Perguntas Frequentes</h4>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-start">
                      <HelpCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold mb-2">{faq.question}</h5>
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-blue-800">Central de Downloads</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Manual de Instalação
                </Button>
                <Button variant="outline" className="justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Guia de Especificações
                </Button>
                <Button variant="outline" className="justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Certificado de Garantia
                </Button>
                <Button variant="outline" className="justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Catálogo Completo
                </Button>
              </div>
            </div>
          </div>
        )

      case 'testimonials':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">O que nossos clientes dizem</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm italic">"{testimonial.comment}"</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg text-center">
              <h4 className="text-xl font-bold mb-4 text-green-800">Satisfação Garantida</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                  <div className="text-sm text-green-700">Clientes Satisfeitos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">15 anos</div>
                  <div className="text-sm text-green-700">No Mercado</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">50k+</div>
                  <div className="text-sm text-green-700">Produtos Vendidos</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
              <h4 className="text-xl font-bold mb-4">Compartilhe sua Experiência</h4>
              <p className="text-gray-600 mb-6">
                Conte-nos como foi sua experiência com os produtos JP Audio
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Star className="h-4 w-4 mr-2" />
                Deixar Avaliação
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const tabs = [
    { id: 'guide', label: 'Guia de Produtos', icon: BookOpen },
    { id: 'installation', label: 'Instalação', icon: Wrench },
    { id: 'support', label: 'Suporte', icon: HelpCircle },
    { id: 'testimonials', label: 'Avaliações', icon: Star }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <Car className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Área do Consumidor
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Transforme seu carro em uma experiência sonora única
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Ver Produtos
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                <MapPin className="h-5 w-5 mr-2" />
                Encontrar Loja
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por que escolher JP Audio?</h2>
            <p className="text-gray-600 text-lg">Qualidade, durabilidade e performance em cada produto</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Volume2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Som Cristalino</h3>
              <p className="text-gray-600 text-sm">Qualidade de áudio superior em todas as frequências</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Garantia Total</h3>
              <p className="text-gray-600 text-sm">12 meses de garantia contra defeitos de fabricação</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Qualidade Premium</h3>
              <p className="text-gray-600 text-sm">Materiais de primeira linha e tecnologia avançada</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Headphones className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Suporte Técnico</h3>
              <p className="text-gray-600 text-sm">Equipe especializada para tirar suas dúvidas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Tab Navigation */}
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
                        ? 'border-green-600 text-green-600'
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

      {/* CTA Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para transformar seu som?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Explore nosso catálogo e encontre o produto perfeito para seu veículo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <ArrowRight className="h-5 w-5 mr-2" />
              Ver Catálogo Completo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <MessageCircle className="h-5 w-5 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsumerArea
