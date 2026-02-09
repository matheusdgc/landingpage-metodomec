import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana S.",
      age: 34,
      role: "Empresária",
      content: "O Método MEC foi divisor de águas na minha vida. Eu vivia no piloto automático, cuidando de todos menos de mim. A Dra. Andreia me ajudou a enxergar que eu merecia cuidado também. Hoje me sinto renovada, mais conectada comigo e com as pessoas que amo.",
      rating: 5
    },
    {
      name: "Carolina M.",
      age: 42,
      role: "Advogada",
      content: "Depois de 15 anos de casamento, eu havia perdido totalmente minha identidade. Me sentia invisível. O MEC me devolveu minha essência feminina. Meu relacionamento melhorou, mas o mais importante: eu me reencontrei.",
      rating: 5
    },
    {
      name: "Juliana R.",
      age: 28,
      role: "Designer",
      content: "Achava que pedir ajuda era fraqueza. O Método MEC me ensinou que ser cuidada é um ato de coragem e amor próprio. A jornada com a Dra. Andreia transformou minha forma de ver a vida e os relacionamentos.",
      rating: 5
    },
    {
      name: "Patricia L.",
      age: 51,
      role: "Médica",
      content: "Como profissional da saúde, sei reconhecer um trabalho sério e transformador. O Método MEC une conhecimento científico com acolhimento genuíno. Recomendo para toda mulher que busca equilíbrio e reconexão.",
      rating: 5
    },
    {
      name: "Fernanda A.",
      age: 38,
      role: "Professora",
      content: "Os 12 encontros foram como um abraço semanal na minha alma. Cada módulo trouxe revelações importantes. Hoje entendo meu corpo, minha mente e meu espírito de uma forma que nunca imaginei ser possível.",
      rating: 5
    },
    {
      name: "Beatriz C.",
      age: 45,
      role: "Arquiteta",
      content: "Investi em muitas terapias ao longo da vida, mas nenhuma trouxe resultados tão profundos quanto o MEC. A abordagem da Dra. Andreia é única - ela realmente entende a alma feminina.",
      rating: 5
    }
  ]

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-gradient-to-b from-sand-100 to-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-50 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
            <span className="text-sm font-medium text-rose-600">Depoimentos Reais</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-700 mb-6">
            Mulheres que{' '}
            <span className="gradient-text">Transformaram</span>{' '}
            Suas Vidas
          </h2>
          
          <p className="text-lg text-taupe-600 max-w-3xl mx-auto font-body">
            Histórias reais de mulheres que tiveram a coragem de se permitir 
            e hoje vivem uma vida mais plena e conectada.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-sand-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center group-hover:bg-rose-200 transition-colors">
                <Quote className="w-5 h-5 text-rose-500" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-taupe-600 leading-relaxed mb-6 line-clamp-5 font-body">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-4 border-t border-rose-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-300 to-rose-400 flex items-center justify-center text-sand-50 font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-brown-600">{testimonial.name}</p>
                  <p className="text-sm text-taupe-500 font-body">{testimonial.age} anos • {testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Bar */}
        <div className="mt-16 bg-gradient-to-r from-brown-600 to-brown-700 rounded-2xl p-8 md:p-10">
          <div className="grid sm:grid-cols-3 gap-8 text-center text-sand-50">
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold mb-2">500+</p>
              <p className="text-sand-200 font-body">Mulheres Transformadas</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold mb-2">4.9</p>
              <p className="text-sand-200 font-body">Avaliação Média</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold mb-2">98%</p>
              <p className="text-sand-200 font-body">Taxa de Satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
