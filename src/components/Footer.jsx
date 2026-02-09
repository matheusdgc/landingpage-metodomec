import { Heart, Instagram, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brown-700 text-sand-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/images/metodo-mec-vetor.png" 
                alt="Método MEC" 
                className="h-24 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sand-300 mb-6 max-w-md leading-relaxed font-body">
              Uma jornada de transformação para mulheres que desejam reconectar sua 
              Mente, Espírito e Corpo, resgatando sua essência feminina.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-brown-600 hover:bg-rose-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contato@metodomec.com.br" 
                className="w-10 h-10 rounded-full bg-brown-600 hover:bg-rose-400 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-sand-50 mb-6">Links Rápidos</h4>
            <ul className="space-y-3 font-body">
              <li>
                <a href="#metodo" className="hover:text-rose-300 transition-colors">O Método</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-rose-300 transition-colors">Dra. Andreia</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-rose-300 transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#investimento" className="hover:text-rose-300 transition-colors">Investimento</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-sand-50 mb-6">Contato</h4>
            <ul className="space-y-4 font-body">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-300" />
                <a href="mailto:contato@metodomec.com.br" className="hover:text-rose-300 transition-colors">
                  contato@metodomec.com.br
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-300" />
                <a href="tel:+5500000000000" className="hover:text-rose-300 transition-colors">
                  (00) 00000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brown-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-sand-400 font-body">
              © {currentYear} Método MEC. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-brown-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-sand-500 text-center leading-relaxed font-body">
            O Método MEC é um programa de desenvolvimento pessoal e não substitui tratamento médico ou psicológico.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
