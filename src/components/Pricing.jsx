import { Check, Shield, Clock, CreditCard, Sparkles, ArrowRight } from 'lucide-react'

const Pricing = () => {
  const included = [
    "12 Encontros Ao Vivo com Dra. Andreia",
    "Acesso às Gravações por 1 Ano",
    "Comunidade Exclusiva de Apoio",
    "Material Didático Complementar",
    "Exercícios Práticos Semanais",
    "Certificado de Conclusão",
    "Suporte via WhatsApp",
    "Bônus: Meditações Guiadas"
  ]

  const handleCheckout = () => {
    // Integração com Cakto - substituir pela URL real do checkout
    window.open('https://pay.cakto.com.br/XXXXXXX', '_blank')
  }

  return (
    <section id="investimento" className="py-20 lg:py-28 bg-gradient-to-b from-white to-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Investimento</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Invista em{' '}
            <span className="gradient-text">Você</span>
          </h2>
          
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Quanto vale uma transformação que vai impactar todas as áreas da sua vida?
          </p>
        </div>

        {/* Pricing Comparison */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-secondary-100 to-secondary-50 rounded-3xl p-8 md:p-10 mb-8">
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-secondary-800 mb-6 text-center">
              Comparativo de Valor
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Consultas Tradicionais */}
              <div className="bg-white/80 rounded-2xl p-6 border border-secondary-200">
                <h4 className="font-semibold text-secondary-700 mb-4">Consultas com Especialistas</h4>
                <div className="space-y-3 text-secondary-600 text-sm">
                  <div className="flex justify-between">
                    <span>1 consulta médica com abordagem integrativa</span>
                    <span className="font-semibold">~R$500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>12 consultas (equivalente ao MEC)</span>
                    <span className="font-semibold text-red-500">R$6.000</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-secondary-500 italic">
                  *Valor médio de mercado para consultas com profissionais da área
                </p>
              </div>

              {/* Método MEC */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white">
                <h4 className="font-semibold mb-4">Método MEC</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>12 encontros ao vivo</span>
                    <span className="font-semibold">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Comunidade + Materiais + Bônus</span>
                    <span className="font-semibold">✓</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/20">
                    <span>Investimento total</span>
                    <span className="font-bold text-xl">R$497</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-primary-100 italic">
                  Economia de mais de R$5.500 em relação a consultas individuais
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 text-sm font-semibold rounded-bl-2xl">
              Oferta Especial
            </div>

            <div className="p-8 md:p-12">
              {/* Price */}
              <div className="text-center mb-10">
                <p className="text-secondary-500 line-through text-lg mb-2">De R$1.997</p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-secondary-600 text-xl">Por apenas</span>
                </div>
                <p className="font-serif text-5xl md:text-6xl font-bold gradient-text mb-4">
                  R$497
                </p>
                <p className="text-secondary-600 text-lg">
                  à vista ou em até <strong className="text-primary-600">12x de R$57</strong>
                </p>
                <p className="text-sm text-secondary-500 mt-2">
                  Menos que R$5 por dia para transformar sua vida
                </p>
              </div>

              {/* What's Included */}
              <div className="mb-10">
                <h4 className="font-serif text-xl font-semibold text-secondary-800 mb-6 text-center">
                  Tudo Isso Incluso:
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-secondary-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-5 rounded-2xl font-bold text-xl transition-all hover:shadow-xl hover:scale-[1.02] flex items-center justify-center space-x-3 group"
              >
                <span>QUERO TRANSFORMAR MINHA VIDA</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-secondary-500">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>Compra Segura</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span>7 Dias de Garantia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-green-500" />
                  <span>Parcelamento em até 12x</span>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-10 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-serif text-xl font-semibold text-secondary-800 mb-2">
                  Garantia Incondicional de 7 Dias
                </h4>
                <p className="text-secondary-600">
                  Se por qualquer motivo você não se sentir satisfeita nos primeiros 7 dias, 
                  devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
