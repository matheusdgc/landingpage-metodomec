import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { EMAIL } from '../config'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Para quem é o Método MEC?",
      answer: "É para a mulher que vive cansada e sobrecarregada, sofre com ansiedade e insônia, tem dificuldade para perder peso e sente que perdeu a autoestima. Se você sabe o que precisa fazer mas não consegue manter a constância, e já tentou várias estratégias sem resultado duradouro, este método foi feito para você."
    },
    {
      question: "Preciso ter conhecimento prévio sobre abordagem integrativa?",
      answer: "Não! O Método MEC foi desenvolvido para ser acessível a todas as mulheres, independente do seu conhecimento prévio. A Dra. Andreia conduz cada encontro de forma clara, acolhedora e prática, guiando você passo a passo nessa jornada de transformação."
    },
    {
      question: "Como funcionam os encontros ao vivo?",
      answer: "São encontros semanais ao vivo, realizados via plataforma de videoconferência. Cada encontro tem duração de aproximadamente 1 hora, onde a Dra. Andreia apresenta o conteúdo e interage diretamente com as participantes. Você poderá fazer perguntas em tempo real e compartilhar suas experiências."
    },
    {
      question: "E se eu não puder participar de algum encontro ao vivo?",
      answer: "Não se preocupe! Todos os encontros ficam gravados e disponíveis na área de membros por 1 ano. Assim, você pode assistir no seu tempo, quantas vezes quiser. Porém, recomendamos participar ao vivo sempre que possível para aproveitar a energia do grupo e a interação direta com a Dra. Andreia."
    },
    {
      question: "Quanto tempo tenho acesso ao conteúdo?",
      answer: "Você terá acesso a todo o conteúdo, incluindo gravações, materiais de apoio e bônus, por 1 ano a partir da data de inscrição. Isso permite que você revisite o material quantas vezes precisar durante sua jornada de transformação."
    },
    {
      question: "O Método MEC substitui acompanhamento médico ou psicológico?",
      answer: "Não. O Método MEC é um programa de desenvolvimento pessoal e autoconhecimento. Embora seja conduzido por uma médica, não substitui tratamentos médicos ou psicológicos. Se você está em tratamento, recomendamos continuar com seu acompanhamento profissional. O MEC atua como um complemento poderoso para sua jornada de bem-estar."
    },
    {
      question: "Posso parcelar o investimento?",
      answer: "Sim! Você pode optar por pagar à vista por R$497 ou parcelar em até 12x de R$57,78. Trabalhamos com as principais bandeiras de cartão de crédito e também oferecemos opção de PIX para pagamento à vista."
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Simples: você se inscreve, participa do primeiro encontro e, se por qualquer motivo sentir que o Método MEC não é para você, basta solicitar o reembolso em até 7 dias após a compra. Devolvemos 100% do seu investimento, sem perguntas e sem burocracia. Acreditamos tanto na transformação que o MEC proporciona que assumimos todo o risco por você."
    }
  ]

  return (
    <section className="py-20 lg:py-28 bg-sand-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-700 mb-6">
            Perguntas{' '}
            <span className="gradient-text">Frequentes</span>
          </h2>

          <p className="text-lg text-taupe-600 max-w-2xl mx-auto font-body">
            Tire suas dúvidas sobre o Método MEC e dê o primeiro passo
            rumo à sua transformação.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? 'border-rose-200 bg-rose-50/50 shadow-md'
                  : 'border-sand-200 bg-sand-50 hover:border-rose-100'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between"
              >
                <span className={`font-semibold text-lg ${
                  openIndex === index ? 'text-rose-600' : 'text-brown-600'
                }`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-taupe-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-rose-500' : ''
                  }`}
                />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
              }`}>
                <p className="px-6 text-taupe-600 leading-relaxed font-body">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-taupe-600 mb-4 font-body">
            Ainda tem dúvidas? Entre em contato conosco:
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="text-rose-500 hover:text-rose-600 font-semibold transition-colors font-body"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
