import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Store, 
  Users, 
  TrendingUp, 
  Award, 
  Phone, 
  Mail, 
  MapPin,
  Download,
  FileText,
  Calculator,
  Handshake,
  Target,
  DollarSign,
  Package,
  Truck,
  Shield,
  CheckCircle,
  ArrowRight,
  Building,
  CreditCard,
  BarChart3
} from 'lucide-react'

const ResellerArea = () => {
  const [activeTab, setActiveTab] = useState('benefits')

  const benefits = [
    {
      icon: DollarSign,
      title: 'Margens Competitivas',
      description: 'Margens atrativas que garantem rentabilidade no seu negócio'
    },
    {
      icon: Package,
      title: 'Estoque Disponível',
      description: 'Produtos sempre em estoque para atender seus clientes rapidamente'
    },
    {
      icon: Truck,
      title: 'Logística Eficiente',
      description: 'Entrega rápida e segura para todo o Brasil'
    },
    {
      icon: Shield,
      title: 'Garantia Estendida',
      description: 'Suporte completo e garantia estendida para seus clientes'
    },
    {
      icon: Target,
      title: 'Marketing Compartilhado',
      description: 'Materiais de marketing e campanhas para impulsionar suas vendas'
    },
    {
      icon: Award,
      title: 'Treinamento Técnico',
      description: 'Capacitação técnica para você e sua equipe'
    }
  ]

  const requirements = [
    'CNPJ ativo e em dia com as obrigações fiscais',
    'Experiência comprovada no setor de áudio automotivo',
    'Estrutura física adequada para vendas e instalação',
    'Equipe técnica qualificada',
    'Compromisso com os padrões de qualidade JP Audio'
  ]

  const supportItems = [
    {
      icon: FileText,
      title: 'Catálogos Técnicos',
      description: 'Materiais técnicos detalhados para consulta'
    },
    {
      icon: Calculator,
      title: 'Calculadora de Margem',
      description: 'Ferramenta para calcular preços e margens'
    },
    {
      icon: BarChart3,
      title: 'Relatórios de Vendas',
      description: 'Acompanhe seu desempenho e metas'
    },
    {
      icon: Building,
      title: 'Portal do Revendedor',
      description: 'Acesso exclusivo ao sistema de pedidos'
    }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'benefits':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Vantagens de ser um Revendedor JP Audio</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-lg">{benefit.title}</h4>
                      </div>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-blue-800">Programa de Incentivos</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5%</div>
                  <div className="text-sm text-blue-700">Desconto adicional por volume</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30 dias</div>
                  <div className="text-sm text-blue-700">Prazo de pagamento</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
                  <div className="text-sm text-blue-700">Prazo de entrega</div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'requirements':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Requisitos para se tornar Revendedor</h3>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-yellow-800">Processo de Aprovação</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-yellow-800">1</span>
                  </div>
                  <div className="text-sm font-medium">Cadastro</div>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-yellow-800">2</span>
                  </div>
                  <div className="text-sm font-medium">Análise</div>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-yellow-800">3</span>
                  </div>
                  <div className="text-sm font-medium">Aprovação</div>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-yellow-800">4</span>
                  </div>
                  <div className="text-sm font-medium">Ativação</div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'support':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Suporte e Ferramentas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {supportItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                      <div className="flex items-center mb-4">
                        <div className="bg-green-100 p-3 rounded-lg mr-4">
                          <Icon className="h-6 w-6 text-green-600" />
                        </div>
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Acessar
                      </Button>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-green-800">Suporte Técnico Especializado</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <div className="font-medium">Telefone</div>
                    <div className="text-sm text-green-700">(11) 9999-9999</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-green-700">revendedores@jpaudio.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <div className="font-medium">Horário</div>
                    <div className="text-sm text-green-700">Seg-Sex 8h às 18h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'register':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Cadastro de Revendedor</h3>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Razão Social *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nome da empresa"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CNPJ *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="00.000.000/0000-00"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome do Responsável *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="contato@empresa.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Endereço Completo *
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Rua, número, bairro, cidade, estado, CEP"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experiência no Setor
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Descreva sua experiência no setor de áudio automotivo"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                      Aceito os termos e condições do programa de revendedores
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Enviar Cadastro
                    </Button>
                    <Button type="button" variant="outline" className="flex-1">
                      Limpar Formulário
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const tabs = [
    { id: 'benefits', label: 'Vantagens', icon: TrendingUp },
    { id: 'requirements', label: 'Requisitos', icon: CheckCircle },
    { id: 'support', label: 'Suporte', icon: Handshake },
    { id: 'register', label: 'Cadastro', icon: CreditCard }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <Store className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Área do Revendedor
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Faça parte da rede de revendedores JP Audio e potencialize seu negócio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Users className="h-5 w-5 mr-2" />
                Tornar-se Revendedor
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Phone className="h-5 w-5 mr-2" />
                Falar com Consultor
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Revendedores Ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15 anos</div>
              <div className="text-gray-600">No Mercado</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24h</div>
              <div className="text-gray-600">Suporte Técnico</div>
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

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para fazer parte da família JP Audio?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Junte-se aos nossos revendedores e tenha acesso a produtos de qualidade superior
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <ArrowRight className="h-5 w-5 mr-2" />
            Iniciar Cadastro Agora
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ResellerArea
