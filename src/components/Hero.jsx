import { Heart, Sparkles } from 'lucide-react'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sand-50 via-sand-100 to-rose-50">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-200 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sand-200 rounded-full opacity-10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-sand-50/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-6">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium text-taupe-600">12 Encontros Ao Vivo</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-600 leading-tight mb-6">
              Desperte a{' '}
              <span className="gradient-text">Mulher Plena</span>{' '}
              que Existe em Você
            </h1>

            <p className="text-lg sm:text-xl text-taupe-600 mb-4 leading-relaxed font-body">
              <strong className="text-brown-600">Método MEC</strong> — Mente, Espírito, e Corpo
            </p>

            <p className="text-base sm:text-lg text-taupe-500 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0 font-body">
              Transforme sua vida através de uma jornada de autoconhecimento e reconexão 
              com sua essência feminina. Permita-se ser cuidada, acolhida e guiada pela 
              Dra. Andreia Polo Luquete.
            </p>

            <p className="text-2xl sm:text-3xl font-display font-bold mb-8 gradient-text">
              Seja poderosa de verdade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <MovingBorderButton
                as="a"
                href="#investimento"
                containerClassName="w-full sm:w-auto"
                className="px-8 py-4 gap-3 font-body"
                duration={3000}
              >
                <Heart className="w-5 h-5" />
                <span>Quero Transformar Minha Vida</span>
              </MovingBorderButton>
              <a
                href="#metodo"
                className="bg-sand-50 hover:bg-sand-100 text-taupe-600 px-8 py-4 rounded-full font-semibold text-lg transition-all border-2 border-sand-300 hover:border-rose-300 font-body"
              >
                Conhecer o Método
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-taupe-500 font-body">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Médica CRM 119.572</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>+500 Mulheres Transformadas</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Encontros ao Vivo</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-rose-200 transform rotate-3"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-gold-200 transform -rotate-3"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-96 sm:w-96 sm:h-[480px] rounded-3xl overflow-hidden elegant-shadow">
                <img 
                  src="/images/profile1.jpeg" 
                  alt="Dra. Andreia Polo Luquete" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-sand-50 rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-brown-600">12 Encontros</p>
                    <p className="text-sm text-taupe-500">Ao Vivo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
