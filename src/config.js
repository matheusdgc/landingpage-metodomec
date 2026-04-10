
export const CHECKOUT_URL = 'https://payfast.greenn.com.br/h459jh2'

export const WHATSAPP_NUMBER = '5515998346269'
export const WHATSAPP_MESSAGE = 'Olá! Tenho interesse no Método MEC e gostaria de saber mais informações. 💫'
export const WHATSAPP_WAITLIST_MESSAGE = 'Olá! Gostaria de entrar na lista de espera do Método MEC para a próxima turma. 💫'

export const ENROLLMENT_DEADLINE = new Date('2026-03-05T23:59:59')

export const INSTAGRAM_URL = 'https://www.instagram.com/dra.andreialuquete'
export const EMAIL = 'draandreialuquete@gmail.com'

export const SITE_URL = 'https://metodomec.com.br'

export const CRM_VERIFICATION_URL = 'https://portal.cfm.org.br/busca-medicos/'

export const openCheckout = () => {
  window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer')
}

export const getWhatsAppUrl = (message = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
