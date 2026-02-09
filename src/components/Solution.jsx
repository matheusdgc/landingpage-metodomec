import { Sparkles, Brain, Heart, HeartHandshake, Flower2 } from 'lucide-react'

const Solution = () => {
  const benefits = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Clareza Mental",
      description: "Liberte-se dos padrões de pensamento que te aprisionam"
    },
        {
      icon: <Heart className="w-6 h-6" />,
      title: "Cuidar do corpo",
      description: "Escolhas diárias que sustentam saúde: movimento, alimentação simples, sono e respeito aos limites."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Conexão Espiritual",
      description: "Reconecte-se com sua essência e propósito de vida"
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Relacionamentos Saudáveis",
      description: "Transforme suas relações através da vulnerabilidade consciente"
    },
    {
      icon: <Flower2 className="w-6 h-6" />,
      title: "Feminilidade Resgatada",
      description: "Permita-se florescer e ser a mulher que nasceu para ser"
    }
  ]

  return (
    <section id="metodo" className="py-20 lg:py-28 bg-gradient-to-b from-sand-100 to-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-gold-100 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span className="text-sm font-medium text-gold-600">A Solução</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-600 mb-6">
              Apresentamos o{' '}
              <span className="gradient-text">Método MEC</span>
            </h2>
            
            <p className="text-lg text-taupe-500 mb-8 leading-relaxed font-body">
              Uma jornada transformadora de 12 encontros ao vivo, onde você será guiada 
              pela Dra. Andreia Polo Luquete através de um processo profundo de reconexão 
              com sua <strong className="text-brown-600">Mente, Espírito e Corpo</strong>.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-sand-50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-400 flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-600 mb-1">{benefit.title}</h4>
                    <p className="text-taupe-500 text-sm font-body">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#investimento"
              className="inline-flex items-center space-x-2 bg-rose-400 hover:bg-rose-500 text-sand-50 px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl font-body"
            >
              <span>Quero Fazer Parte</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-rose-50 via-sand-50 to-gold-50 rounded-3xl p-8 md:p-12 elegant-shadow">
              {/* MEC Circles */}
              <div className="flex flex-col items-center space-y-6">
                {/* Mente */}
                <div className="w-full max-w-sm bg-sand-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-rose-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-300 to-rose-400 flex items-center justify-center text-white font-serif text-2xl font-bold">
                      M
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-brown-600">Mente</h3>
                      <p className="text-taupe-500 text-sm">Clareza e libertação de padrões</p>
                    </div>
                  </div>
                </div>

                {/* Espírito */}
                <div className="w-full max-w-sm bg-sand-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-gold-400">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center text-white font-serif text-2xl font-bold">
                      E
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-brown-600">Espírito</h3>
                      <p className="text-taupe-500 text-sm">Conexão com sua essência</p>
                    </div>
                  </div>
                </div>

                {/* Corpo */}
                <div className="w-full max-w-sm bg-sand-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-taupe-400">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-taupe-400 to-taupe-500 flex items-center justify-center text-white font-serif text-2xl font-bold">
                      C
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-brown-600">Corpo</h3>
                      <p className="text-taupe-500 text-sm">Saúde integral e vitalidade</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-rose-200 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-200 rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
