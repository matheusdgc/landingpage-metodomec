import { Sparkles, Brain, Heart, HeartHandshake, Flower2 } from 'lucide-react'

const Solution = () => {
  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Mais Energia e Disposição",
      description: "Saia do ciclo da exaustão e volte a ter pique para a sua própria vida."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Menos Ansiedade, Mais Clareza",
      description: "Acalme a mente em alerta constante e recupere foco e paz no dia a dia."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Melhor Sono e Descanso",
      description: "Durma melhor e acorde de fato descansada, com o corpo respondendo."
    },
    {
      icon: <Flower2 className="w-6 h-6" />,
      title: "Autoestima Resgatada",
      description: "Volte a gostar do que vê no espelho e a cuidar de você sem culpa."
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Redução de Peso como Consequência",
      description: "Hábitos sustentáveis e melhor relação com a alimentação — o peso responde naturalmente."
    }
  ]

  return (
    <section id="metodo" className="py-20 lg:py-28 bg-gradient-to-b from-sand-100 to-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-600 mb-6">
              Conheça o{' '}
              <span className="gradient-text">Método MEC</span>
            </h2>

            <p className="text-lg text-taupe-500 mb-4 leading-relaxed font-body">
              Você não precisa de mais uma dieta. Precisa aprender a governar o seu corpo
              através de uma mente renovada.
            </p>

            <p className="text-lg text-taupe-500 mb-8 leading-relaxed font-body">
              O Método MEC é uma jornada de 8 semanas em que a Dra. Andreia Polo Luquete
              guia você pelo alinhamento entre <strong className="text-brown-600">Mente, Espírito e Corpo</strong> —
              vencendo a exaustão e construindo saúde de dentro para fora.
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
                      <p className="text-taupe-500 text-sm">Transformação de pensamentos, crenças e padrões sabotadores</p>
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
                      <p className="text-taupe-500 text-sm">Renovação da mente pela Palavra de Deus, identidade e propósito</p>
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
                      <p className="text-taupe-500 text-sm">Hábitos sustentáveis: alimentação, movimento, descanso e energia</p>
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