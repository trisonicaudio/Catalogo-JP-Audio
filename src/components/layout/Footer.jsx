import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre a JP Audio */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">JP Audio</h3>
            <p className="text-gray-300 mb-4">
              Especializada em equipamentos de áudio de alta qualidade, a JP Audio oferece 
              soluções completas para som automotivo, home theater e sistemas profissionais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/catalogo" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="/revendedores" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Seja um Revendedor
                </a>
              </li>
              <li>
                <a href="/consumidor" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Onde Comprar
                </a>
              </li>
              <li>
                <a href="/suporte" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Suporte Técnico
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">(62) 3333-4444</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">contato@jpaudio.com.br</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <span className="text-gray-300">
                  Goiânia, GO<br />
                  Brasil
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 JP Audio. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacidade" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
