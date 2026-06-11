import { Instagram, Mail } from 'lucide-react'
import LogoWithParticles from './ui/LogoWithParticles'
import { INSTAGRAM_URL, EMAIL } from '../config'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brown-700 text-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-6">
              <LogoWithParticles>
                <img
                  src="/images/logo-mec-v2.png"
                  alt="Método MEC"
                  className="h-24 sm:h-32 md:h-36 w-auto"
                />
              </LogoWithParticles>
            </div>
            <p className="text-sand-300 mb-6 max-w-md leading-relaxed font-body">
              Uma jornada de transformação para mulheres que desejam vencer a exaustão,
              recuperar a energia e construir saúde alinhando Mente, Espírito e Corpo.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brown-600 hover:bg-rose-400 flex items-center justify-center transition-colors"
                aria-label="Instagram da Dra. Andreia Polo Luquete"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="w-10 h-10 rounded-full bg-brown-600 hover:bg-rose-400 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-sand-400 hover:text-rose-300 transition-colors font-body mt-2"
            >
              @dra.andreialuquete
            </a>
          </div>

          <div className="text-center md:text-left">
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

          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg font-semibold text-sand-50 mb-6">Contato</h4>
            <ul className="space-y-4 font-body">
              <li className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-5 h-5 text-rose-300 flex-shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-rose-300 transition-colors break-all">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-brown-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-sand-400 font-body">
              © {currentYear} Método MEC. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-brown-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <p className="text-xs text-sand-500 text-center leading-relaxed font-body">
            O Método MEC é um programa de desenvolvimento pessoal e não substitui tratamento médico ou psicológico.
          </p>
          <p className="text-xs text-brown-500 text-center font-body">
            Desenvolvido por{' '}
            <a
              href="https://www.linkedin.com/in/matheus-diasgomes-chichura/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brown-400 hover:text-sand-400 transition-colors underline underline-offset-2"
            >
              Matheus Dias Gomes Chichura
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
