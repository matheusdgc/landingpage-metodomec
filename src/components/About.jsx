import { Award, BookOpen, Heart, Stethoscope } from 'lucide-react'

const About = () => {
  const credentials = [
    { icon: <Stethoscope className="w-5 h-5" />, text: "Médica CRM 119.572" },
    { icon: <Award className="w-5 h-5" />, text: "Abordagem Integrativa" },
    { icon: <BookOpen className="w-5 h-5" />, text: "+20 Anos de Experiência" },
    { icon: <Heart className="w-5 h-5" />, text: "+500 Mulheres Transformadas" },
  ]

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-gradient-to-b from-sand-50 to-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-gradient-to-br from-rose-200 to-rose-300 transform rotate-3"></div>
                <div className="relative rounded-3xl overflow-hidden elegant-shadow aspect-[4/5]">
                  <img 
                    src="/images/profile2.jpeg" 
                    alt="Dra. Andreia Polo Luquete" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 lg:right-0 bg-sand-50 rounded-2xl shadow-xl p-5 max-w-xs animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center">
                    <Award className="w-7 h-7 text-rose-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-brown-600">Abordagem Integrativa</p>
                    <p className="text-sm text-taupe-500 font-body">Corpo, Mente e Espírito</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 bg-rose-50 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-medium text-rose-600">Sua Mentora</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-700 mb-6">
              Dra. Andreia{' '}
              <span className="gradient-text">Polo Luquete</span>
            </h2>
            
            <p className="text-lg text-taupe-600 mb-6 leading-relaxed font-body">
              Sou médica há 21 anos e, ao longo dessa jornada, compreendi que a saúde verdadeira nasce muito além dos sintomas: ela começa na escuta profunda do corpo, da mente e da alma.
              Depois de um intenso processo de transformação pessoal, escolhi dedicar meu trabalho a apoiar mulheres a retomarem uma vida mais plena, reconectadas com quem realmente são.
            </p>

            <p className="text-lg text-taupe-600 mb-8 leading-relaxed font-body">
              O Método MEC surgiu ao perceber que muitas mulheres adoecem quando se afastam da própria essência. 
              Meu propósito é conduzi-las de volta a si mesmas, resgatando a essência feminina como caminho para uma vida mais consciente, equilibrada e saudável.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {credentials.map((credential, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 bg-sand-50 rounded-xl p-4 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-500 flex items-center justify-center">
                    {credential.icon}
                  </div>
                  <span className="text-sm font-medium text-brown-600">{credential.text}</span>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-gold-400 pl-6 py-2 italic text-taupe-600 font-body">
              "Minha missão é guiar mulheres em uma jornada de reconexão, para que possam 
              florescer e viver a vida plena que merecem."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
