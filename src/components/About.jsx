import { Award, BookOpen, Heart, Stethoscope, Instagram, ExternalLink } from 'lucide-react'
import { INSTAGRAM_URL, CRM_VERIFICATION_URL } from '../config'

const About = () => {
  const credentials = [
    {
      icon: <Stethoscope className="w-5 h-5" />,
      text: "Médica CRM 119.572",
      href: CRM_VERIFICATION_URL,
      title: "Verificar registro no CFM",
    },
    { icon: <Award className="w-5 h-5" />, text: "Abordagem Integrativa" },
    { icon: <BookOpen className="w-5 h-5" />, text: "+20 Anos de Experiência" },
    { icon: <Heart className="w-5 h-5" />, text: "+500 Mulheres Transformadas" },
  ]

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-gradient-to-b from-sand-50 to-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative">
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

              <div className="hidden sm:block absolute -bottom-6 -right-6 lg:right-0 bg-sand-50 rounded-2xl shadow-xl p-5 max-w-xs animate-float">
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

          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-700 mb-6">
              Dra. Andreia{' '}
              <span className="gradient-text">Polo Luquete</span>
            </h2>

            <p className="text-lg text-taupe-600 mb-6 leading-relaxed font-body">
              Sou filha de agricultores, médica há 21 anos, esposa e mãe. Antes de ajudar
              outras mulheres, eu também vivi o cansaço que não passa, a sobrecarga e a culpa
              de deixar a mim mesma sempre por último. Entendo de perto essa exaustão — porque
              eu também precisei vencê-la.
            </p>

            <p className="text-lg text-taupe-600 mb-8 leading-relaxed font-body">
              Foi assim que criei o Método MEC. Descobri que a saúde verdadeira não começa no
              prato: começa quando a mente é <strong>renovada pela Palavra de Deus</strong>,
              o espírito é fortalecido e os hábitos do <strong>corpo</strong> passam a sustentar
              a vida que você deseja viver. Nós somos <strong>Mente, Espírito e Corpo</strong> —
              e é no equilíbrio entre eles que a transformação acontece.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {credentials.map((credential, index) => {
                const inner = (
                  <>
                    <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0">
                      {credential.icon}
                    </div>
                    <span className="text-sm font-medium text-brown-600">{credential.text}</span>
                    {credential.href && (
                      <ExternalLink className="w-3.5 h-3.5 text-taupe-400 ml-auto flex-shrink-0" />
                    )}
                  </>
                )

                return credential.href ? (
                  <a
                    key={index}
                    href={credential.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={credential.title}
                    className="flex items-center space-x-3 bg-sand-50 rounded-xl p-4 shadow-sm hover:shadow-md hover:bg-rose-50 transition-all group"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={index} className="flex items-center space-x-3 bg-sand-50 rounded-xl p-4 shadow-sm">
                    {inner}
                  </div>
                )
              })}
            </div>

            <blockquote className="border-l-4 border-gold-400 pl-6 py-2 italic text-taupe-600 font-body mb-8">
              "Você não precisa de mais um plano milagroso. Precisa se tornar a mulher capaz
              de sustentar a saúde que deseja viver — e é nisso que vou te ajudar a alcançar."
            </blockquote>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-rose-50 to-gold-50 border border-rose-200 hover:border-rose-300 hover:from-rose-100 hover:to-gold-100 rounded-2xl px-5 py-4 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center flex-shrink-0">
                <Instagram className="w-5 h-5 text-sand-50" />
              </div>
              <div>
                <p className="text-sm font-semibold text-brown-600 group-hover:text-brown-700">
                  Siga no Instagram
                </p>
                <p className="text-sm text-taupe-500 font-body">@dra.andreialuquete</p>
              </div>
              <ExternalLink className="w-4 h-4 text-taupe-400 ml-auto group-hover:text-rose-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
