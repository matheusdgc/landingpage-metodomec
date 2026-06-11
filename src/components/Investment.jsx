import { Heart, Shield, Clock, Gift, CheckCircle, Star } from 'lucide-react'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'
import { openCheckout } from '../config'

const Investment = () => {
  const handleCheckout = openCheckout

  const includes = [
    "Jornada de 8 semanas com encontros ao vivo",
    "Acesso às gravações por 1 ano",
    "Ambiente exclusivo de alunas",
    "Material de apoio completo",
    "Suporte durante toda a jornada"
  ]

  return (
    <section id="investimento" className="py-20 lg:py-28 bg-gradient-to-b from-sand-50 to-rose-50/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-700 mb-6">
            Invista em{' '}
            <span className="gradient-text">Você Mesma</span>
          </h2>

          <p className="text-lg text-taupe-600 max-w-2xl mx-auto font-body leading-relaxed">
            Uma jornada de 8 semanas para vencer a exaustão e construir saúde de verdade.
            É o cuidado que você merece dar a si mesma.
          </p>
        </div>

        <div className="bg-sand-50 rounded-3xl shadow-xl overflow-hidden max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-rose-300 to-rose-400 p-6 text-center">
            <p className="text-sand-50 font-medium mb-1">Método MEC</p>
            <p className="text-sand-100 text-sm font-body">8 Encontros ao Vivo</p>
          </div>

          <div className="p-8 lg:p-10">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-rose-200 border-2 border-sand-50 flex items-center justify-center text-xs text-rose-600 font-semibold">A</div>
                <div className="w-8 h-8 rounded-full bg-gold-200 border-2 border-sand-50 flex items-center justify-center text-xs text-gold-600 font-semibold">M</div>
                <div className="w-8 h-8 rounded-full bg-taupe-200 border-2 border-sand-50 flex items-center justify-center text-xs text-taupe-600 font-semibold">C</div>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>
              <span className="text-sm text-taupe-500 font-body">+500 mulheres transformadas</span>
            </div>

            <div className="text-center mb-8">
              <p className="text-taupe-500 text-sm mb-2 font-body">Investimento especial:</p>
              <div className="flex items-center justify-center space-x-3 mb-2">
                <span className="text-taupe-400 line-through text-xl font-body">De R$1.997</span>
                <span className="bg-rose-100 text-rose-600 px-2 py-1 rounded-full text-xs font-semibold">-75% OFF</span>
              </div>
              <div className="flex items-baseline justify-center space-x-2">
                <span className="text-taupe-500 text-base sm:text-lg">por apenas</span>
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-600">R$497</span>
              </div>
              <p className="text-taupe-500 mt-2 font-body">ou <strong className="text-brown-600">12x de R$51,10</strong></p>
            </div>

            <div className="bg-gold-50 rounded-xl p-4 mb-8 text-center">
              <p className="text-sm text-taupe-600 font-body">
                Menos do que uma consulta médica comum
                <br />
                <span className="text-gold-600 font-medium">e você terá 8 encontros de transformação</span>
              </p>
            </div>

            <div className="mb-8">
              <p className="font-semibold text-brown-600 mb-4 text-center">O que está incluso:</p>
              <ul className="space-y-3">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <span className="text-taupe-600 font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <MovingBorderButton
              onClick={handleCheckout}
              containerClassName="w-full"
              className="py-4 px-6 gap-3 font-body"
              duration={3000}
            >
              <Heart className="w-5 h-5 flex-shrink-0" />
              <span>Quero Começar Minha Transformação</span>
            </MovingBorderButton>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-taupe-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-gold-500" />
                <span className="font-body">Pagamento Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gold-500" />
                <span className="font-body">Garantia de 7 dias</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gift className="w-4 h-4 text-gold-500" />
                <span className="font-body">Acesso imediato</span>
              </div>
            </div>

            <div className="mt-8 p-4 border border-rose-200 rounded-xl bg-rose-50/50">
              <p className="text-center text-sm text-taupe-600 font-body">
                <strong className="text-brown-600">Garantia incondicional de 7 dias:</strong> Se você não sentir que o Método MEC é para você, devolvemos 100% do seu investimento. Sem perguntas.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto space-y-6">

          <p className="text-taupe-500 italic font-body leading-relaxed">
            "Você não está gastando, está investindo no bem mais precioso que existe: você mesma.
            Quando você se transforma, tudo ao seu redor também se transforma."
          </p>

          <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold gradient-text mt-6">
            Quando a mente muda, o corpo responde.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Investment
