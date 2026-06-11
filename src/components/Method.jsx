import { Video, Users, Calendar, Clock, BookOpen } from 'lucide-react'

const Method = () => {
  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "8 Encontros ao Vivo",
      description: "Conexão real e acompanhamento direto com a Dra. Andreia"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Aulas Semanais",
      description: "Um cronograma de 8 semanas pensado para transformação gradual e consistente"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Ambiente Exclusivo",
      description: "Um ambiente de mulheres construindo saúde juntas"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Replays Disponíveis",
      description: "Acesse as gravações caso não possa participar ao vivo"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Material de Apoio",
      description: "Conteúdo complementar para aprofundar sua jornada"
    },
  ]

  const pillars = [
    { letter: "1", title: "Mente", description: "Identificação de crenças limitantes, mudança de padrões mentais e renovação dos pensamentos." },
    { letter: "2", title: "Espírito", description: "Identidade em Deus, renovação pela Palavra e a construção de paz e propósito." },
    { letter: "3", title: "Corpo", description: "Alimentação, movimento, sono e energia — hábitos que sustentam saúde de verdade." },
    { letter: "4", title: "Comportamento", description: "Consistência, disciplina e formação de hábitos que se mantêm no longo prazo." },
    { letter: "5", title: "Legado", description: "A transformação que impacta seu casamento, seus filhos, sua família e sua comunidade." }
  ]

  const journey = [
    { week: "Semana 1", title: "Entendendo a raiz da exaustão" },
    { week: "Semana 2", title: "Renovando a mente" },
    { week: "Semana 3", title: "Quebrando padrões de autossabotagem" },
    { week: "Semana 4", title: "Alimentação e energia" },
    { week: "Semana 5", title: "Movimento e saúde" },
    { week: "Semana 6", title: "Ansiedade e descanso" },
    { week: "Semana 7", title: "Identidade e autoestima" },
    { week: "Semana 8", title: "Construindo uma nova versão de você" }
  ]

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-700 mb-6">
            Os Pilares do{' '}
            <span className="gradient-text">Método MEC</span>
          </h2>
          <p className="text-lg text-taupe-600 max-w-3xl mx-auto font-body">
            Cinco pilares que trabalham juntos para você sair do ciclo da exaustão e
            construir uma vida com mais energia, equilíbrio e saúde.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-sand-100 to-sand-50 rounded-3xl p-8 border border-rose-100 h-full hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-500 text-sand-50 flex items-center justify-center font-serif text-3xl font-bold mb-4">
                  {pillar.letter}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-brown-600 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-taupe-500 leading-relaxed font-body">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 8-Week Journey */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-brown-700 text-center mb-10">
            Sua Jornada de 8 Semanas
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {journey.map((step, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-sand-100 to-sand-50 rounded-2xl p-6 border border-sand-200 hover:border-rose-200 hover:shadow-md transition-all"
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-rose-500 mb-2 font-body">
                  {step.week}
                </span>
                <p className="font-serif text-lg font-semibold text-brown-600 leading-snug">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-gradient-to-br from-brown-600 to-brown-700 rounded-3xl p-8 md:p-12">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-sand-50 text-center mb-10">
            O Que Você Vai Receber
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-5 rounded-2xl bg-sand-50/5 hover:bg-sand-50/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-300 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-sand-50 mb-1">{feature.title}</h4>
                  <p className="text-sand-200 text-sm font-body">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Method
