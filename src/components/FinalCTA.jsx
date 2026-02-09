import { Heart, ArrowRight, Sparkles } from 'lucide-react'

const FinalCTA = () => {
  const handleCheckout = () => {
    // Integração com Cakto - substituir pela URL real do checkout
    window.open('https://pay.cakto.com.br/XXXXXXX', '_blank')
  }

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-brown-600 via-brown-700 to-brown-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-300 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sand-400 rounded-full opacity-5 blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center space-x-2 bg-rose-400/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-rose-300/30">
            <Sparkles className="w-5 h-5 text-gold-300 animate-pulse" />
            <span className="text-rose-200 font-medium font-body">Próxima turma com vagas limitadas</span>
          </div>

          {/* Main Headline */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-sand-50 mb-8 leading-tight">
            Está na Hora de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-rose-400">
              Se Permitir
            </span>
            <br />
            Viver a Vida que Você Merece
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-sand-100 max-w-3xl mx-auto mb-6 leading-relaxed font-body">
            Você já cuidou de todos ao seu redor. Agora é a sua vez de ser cuidada, 
            acolhida e guiada em uma jornada de transformação profunda.
          </p>

          <p className="text-lg text-rose-200 max-w-2xl mx-auto mb-10 font-body">
            <strong>12 encontros ao vivo</strong> com a Dra. Andreia Polo Luquete 
            para reconectar sua <strong>Mente, Espírito e Corpo</strong>.
          </p>

          {/* Price Reminder */}
          <div className="inline-block bg-sand-50/10 backdrop-blur-sm rounded-2xl p-6 mb-10 border border-sand-50/10">
            <p className="text-sand-200 mb-2 font-body">Investimento especial:</p>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-sand-300 line-through text-xl font-body">R$1.997</span>
              <span className="font-display text-4xl md:text-5xl font-bold text-sand-50">R$497</span>
            </div>
            <p className="text-rose-200 mt-2 font-body">ou 12x de R$57</p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center">
            <button
              onClick={handleCheckout}
              className="group bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-sand-50 px-12 py-6 rounded-full font-bold text-xl transition-all hover:shadow-2xl hover:shadow-rose-500/30 hover:scale-105 flex items-center space-x-3 mb-6 font-body"
            >
              <Heart className="w-6 h-6 group-hover:animate-pulse" />
              <span>SIM, QUERO MINHA TRANSFORMAÇÃO</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-sand-300 text-sm font-body">
              🔒 Pagamento 100% seguro • Garantia de 7 dias
            </p>
          </div>

          {/* Final Emotional Appeal */}
          <div className="mt-16 max-w-3xl mx-auto">
            <blockquote className="font-body text-xl md:text-2xl text-sand-100 italic leading-relaxed">
              "Você não está aqui por acaso. Se chegou até aqui, é porque algo dentro de você 
              está pedindo essa transformação. Permita-se. Você merece."
            </blockquote>
            <p className="mt-6 text-gold-300 font-medium">
              — Dra. Andreia Polo Luquete
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
