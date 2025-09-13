import { Button } from '@/components/ui/button'
import { ArrowRight, Volume2, Zap, Award, Users } from 'lucide-react'
import SEO, { getOrganizationSchema } from '../components/SEO'

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="JP Audio - Equipamentos de Áudio Automotivo de Alta Qualidade"
        description="Descubra a linha completa de equipamentos de áudio JP Audio. Subwoofers, mid-range e tweeters com qualidade superior, garantia e suporte técnico especializado."
        keywords="áudio automotivo, subwoofer, tweeter, mid-range, som automotivo, JP Audio, alto-falantes"
        url="https://jpaudio.com.br"
        structuredData={getOrganizationSchema()}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Som de <span className="text-yellow-400">Alta Qualidade</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Descubra a linha completa de equipamentos de áudio JP Audio. 
              Potência, clareza e durabilidade em cada produto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" onClick={() => window.location.hash = '/catalogo'}>
                Ver Catálogo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800" onClick={() => window.location.hash = '/revendedores'}>
                Seja um Revendedor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher JP Audio?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mais de uma década de experiência no mercado de áudio, 
              sempre priorizando qualidade e satisfação do cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Volume2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Som Cristalino</h3>
              <p className="text-gray-600">
                Tecnologia avançada para reprodução de áudio com máxima fidelidade
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alta Potência</h3>
              <p className="text-gray-600">
                Equipamentos projetados para entregar máxima potência com eficiência
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600">
                Produtos testados e aprovados pelos melhores profissionais do setor
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte Completo</h3>
              <p className="text-gray-600">
                Equipe especializada para orientação técnica e pós-venda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Produtos
            </h2>
            <p className="text-xl text-gray-600">
              Conheça nossa linha completa de equipamentos de áudio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Volume2 className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Subwoofers</h3>
                <p className="text-gray-600 mb-4">
                  Graves profundos e potentes para sua experiência sonora
                </p>
                <Button variant="outline" className="w-full" onClick={() => window.location.hash = '/catalogo'}>
                  Ver Produtos
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center">
                <Volume2 className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mid-Range</h3>
                <p className="text-gray-600 mb-4">
                  Médios cristalinos para reprodução vocal perfeita
                </p>
                <Button variant="outline" className="w-full" onClick={() => window.location.hash = '/catalogo'}>
                  Ver Produtos
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <Volume2 className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tweeters</h3>
                <p className="text-gray-600 mb-4">
                  Agudos definidos e brilhantes para cada detalhe
                </p>
                <Button variant="outline" className="w-full" onClick={() => window.location.hash = '/catalogo'}>
                  Ver Produtos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para elevar seu som?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossos produtos podem 
            transformar sua experiência sonora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Falar no WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Ver Catálogo Completo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
