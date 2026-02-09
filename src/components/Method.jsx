import { Video, Users, Calendar, Clock, BookOpen, Award } from 'lucide-react'

const Method = () => {
  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "12 Encontros ao Vivo",
      description: "Conexão real e acompanhamento direto com a Dra. Andreia"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Aulas Semanais",
      description: "Um cronograma pensado para transformação gradual e consistente"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Grupo Exclusivo",
      description: "Comunidade de mulheres em jornada de transformação"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Replays Disponíveis",
      description: "Acesse as gravações caso não possa participar ao vivo"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Material de Apoio",
      description: "Conteúdo complementar para aprofundar seu aprendizado"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certificado de Conclusão",
      description: "Reconhecimento pela sua jornada de transformação"
    }
  ]

  const modules = [
    { title: "Mente", description: "Identificação e libertação de crenças limitantes, padrões tóxicos e bloqueios emocionais." },
    { title: "Espírito", description: "Reconexão com sua essência, propósito e espiritualidade de forma prática e acolhedora." },
    { title: "Corpo", description: "Integração mente e corpo, autocuidado, como gerar mais saúde no corpo e vitalidade feminina." }
  ]

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-700 mb-6">
            Como Funciona o{' '}
            <span className="gradient-text">Método MEC</span>
          </h2>
          <p className="text-lg text-taupe-600 max-w-3xl mx-auto font-body">
            Uma jornada estruturada em 12 encontros ao vivo para você aprender a se reconectar com sua 
            essência e transformar sua vida de dentro para fora.
          </p>
        </div>

        {/* Modules Timeline */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {modules.map((module, index) => (
            <div key={index} className="relative group">
              <div className="bg-gradient-to-br from-sand-100 to-sand-50 rounded-3xl p-8 border border-rose-100 h-full hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-500 text-sand-50 flex items-center justify-center font-serif text-3xl font-bold mb-4">
                  {module.title.charAt(0)}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-brown-600 mb-3">
                  {module.title}
                </h3>
                <p className="text-taupe-500 leading-relaxed font-body">
                  {module.description}
                </p>
              </div>
              
              {/* Connector Arrow (hidden on last item) */}
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-rose-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
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
