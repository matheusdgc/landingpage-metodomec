import { AlertCircle, Heart, Users, Frown, HeartCrack, Weight } from 'lucide-react'

const Problem = () => {
  const problems = [
    {
      icon: <Weight className="w-8 h-8" />,
      title: "A Exaustão que Não Passa",
      description: "Você acorda cansada, vive sobrecarregada e dorme mal. Mesmo descansando, parece que a energia nunca volta."
    },
    {
      icon: <Frown className="w-8 h-8" />,
      title: "A Mente em Alerta Constante",
      description: "Ansiedade, pensamentos acelerados e a sensação de que sabe o que precisa fazer — mas não consegue manter a constância."
    },
    {
      icon: <HeartCrack className="w-8 h-8" />,
      title: "A Mulher que Se Deixou por Último",
      description: "Coloca todos à frente de si mesma, perdeu a autoestima e ainda sente culpa quando tenta cuidar de você."
    }
  ]

  return (
    <section id="problema" className="py-20 lg:py-28 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-600 mb-6">
            Talvez você esteja{' '}
            <span className="text-rose-400">vivendo assim...</span>
          </h2>

          <p className="text-lg text-taupe-500 max-w-3xl mx-auto font-body">
            Tem dificuldade para perder peso, sofre com ansiedade, dorme mal e não consegue
            manter hábitos. E, no fim do dia, acha que o problema é falta de força de vontade.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-sand-50 to-sand-100 border border-sand-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-400 flex items-center justify-center mb-6 group-hover:bg-rose-300 group-hover:text-white transition-colors">
                {problem.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-brown-600 mb-3">
                {problem.title}
              </h3>
              <p className="text-taupe-500 leading-relaxed font-body">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Emotional Connection */}
        <div className="relative bg-gradient-to-r from-brown-600 to-brown-700 rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-300 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-300 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="font-serif text-2xl md:text-3xl text-sand-50 leading-relaxed mb-6 italic">
              O problema não é falta de força de vontade — e não está apenas no seu corpo.
            </p>
            <p className="text-rose-100 font-body leading-relaxed mb-6 max-w-2xl mx-auto">
              Você já tentou dietas, recomeços e estratégias diversas, mas continua voltando
              aos mesmos comportamentos. Porque ninguém te ensinou a transformar a mente que
              governa as suas escolhas.
            </p>
            <p className="text-xl md:text-2xl font-display font-bold text-gold-300 mb-3">
              Quando a mente muda, os hábitos mudam.
            </p>
            <p className="text-rose-200 font-medium font-body">
              E quando os hábitos mudam, o corpo responde.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
