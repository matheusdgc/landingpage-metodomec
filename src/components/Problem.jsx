import { AlertCircle, Heart, Users, Frown } from 'lucide-react'

const Problem = () => {
  const problems = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Individualismo Excessivo",
      description: "Você se vê presa em um mundo onde cada uma cuida apenas de si, sem espaço para vulnerabilidade ou conexão verdadeira."
    },
    {
      icon: <Frown className="w-8 h-8" />,
      title: "Indiferença nos Relacionamentos",
      description: "Sente que as relações ao seu redor se tornaram superficiais, distantes, e que falta aquele cuidado genuíno."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Desconexão com o Feminino",
      description: "Perdeu contato com sua essência feminina, sua capacidade de se permitir ser cuidada e acolhida."
    }
  ]

  return (
    <section id="problema" className="py-20 lg:py-28 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-100 px-4 py-2 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-medium text-rose-600">Você se identifica?</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-600 mb-6">
            O Mundo Moderno Roubou Sua{' '}
            <span className="text-rose-400">Essência Feminina</span>
          </h2>
          
          <p className="text-lg text-taupe-500 max-w-3xl mx-auto font-body">
            Vivemos em uma sociedade que nos ensinou a ser independentes a todo custo, 
            mas esqueceu de nos ensinar a arte de receber, de se permitir, de ser cuidada.
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
            <p className="font-serif text-2xl md:text-3xl text-sand-50 leading-relaxed mb-6 italic font-body">
              "Você acorda todos os dias dando conta de tudo, sendo forte para todos... 
              mas quando foi a última vez que você se permitiu ser cuidada?"
            </p>
            <p className="text-rose-200 font-medium font-body">
              Chegou a hora de mudar essa história.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
