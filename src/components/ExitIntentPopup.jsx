import { useState, useEffect, useRef } from 'react'
import { X, Heart, Sparkles } from 'lucide-react'
import { openCheckout } from '../config'

const STORAGE_KEY = 'exitIntentShown'
const MIN_TIME_ON_PAGE_MS = 8000

const ExitIntentPopup = ({ onCheckout }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const modalRef = useRef(null)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return

    let readyToShow = false

    const timer = setTimeout(() => {
      readyToShow = true
    }, MIN_TIME_ON_PAGE_MS)

    const trigger = () => {
      previousFocusRef.current = document.activeElement
      setIsVisible(true)
      sessionStorage.setItem(STORAGE_KEY, 'true')
    }

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && readyToShow) {
        trigger()
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }

    let lastScrollY = window.scrollY
    let lastScrollTime = Date.now()

    const handleScroll = () => {
      if (!readyToShow) return

      const currentScrollY = window.scrollY
      const currentTime = Date.now()
      const timeDelta = currentTime - lastScrollTime
      const scrollDelta = lastScrollY - currentScrollY

      if (scrollDelta > 150 && timeDelta < 300 && window.scrollY < lastScrollY - 100) {
        trigger()
        window.removeEventListener('scroll', handleScroll)
      }

      lastScrollY = currentScrollY
      lastScrollTime = currentTime
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const modal = modalRef.current
    if (!modal) return

    const focusableSelectors =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    const focusableElements = modal.querySelectorAll(focusableSelectors)
    const first = focusableElements[0]
    const last = focusableElements[focusableElements.length - 1]

    first?.focus()

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        close()
        return
      }
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    modal.addEventListener('keydown', handleKeyDown)
    return () => modal.removeEventListener('keydown', handleKeyDown)
  }, [isVisible])

  const close = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsClosing(false)
      previousFocusRef.current?.focus()
    }, 250)
  }

  const handleCheckout = () => {
    close()
    if (onCheckout) {
      onCheckout()
    } else {
      openCheckout()
    }
  }

  if (!isVisible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Oferta especial"
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-250 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className="absolute inset-0 bg-brown-900/70 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />

      <div
        ref={modalRef}
        className={`relative bg-sand-50 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden transition-transform duration-250 ${
          isClosing ? 'scale-95' : 'scale-100'
        }`}
      >
        <div className="bg-gradient-to-r from-rose-300 to-rose-400 px-8 pt-8 pb-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Sparkles className="w-5 h-5 text-sand-50" />
            <span className="text-sand-50 font-body font-semibold text-sm uppercase tracking-wider">
              Espere! Temos algo para você
            </span>
            <Sparkles className="w-5 h-5 text-sand-50" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold text-sand-50 leading-tight">
            Cansada de viver cansada?
          </h2>
        </div>

        <div className="px-8 py-6 text-center">
          <p className="text-taupe-600 font-body leading-relaxed mb-6">
            Antes de ir, lembre-se: cada dia que passa é mais um dia vivendo no cansaço.
            O Método MEC está aqui para te ajudar a recuperar sua energia.
          </p>

          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 mb-6">
            <p className="text-taupe-500 text-sm font-body mb-1">Investimento especial</p>
            <div className="flex items-center justify-center space-x-3">
              <span className="text-taupe-400 line-through font-body">R$1.997</span>
              <span className="bg-rose-200 text-rose-700 text-xs font-bold px-2 py-0.5 rounded-full">-75% OFF</span>
            </div>
            <p className="font-display text-4xl font-bold text-brown-600 mt-1">R$497</p>
            <p className="text-taupe-500 text-sm font-body mt-1">ou 12x de R$51,10</p>
          </div>

          <button
            type="button"
            onClick={handleCheckout}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-sand-50 py-4 rounded-2xl font-bold font-body transition-all hover:shadow-lg hover:shadow-rose-600/40 hover:scale-[1.02] active:scale-[0.98] mb-4"
          >
            <Heart className="w-5 h-5" />
            <span>Quero recuperar minha energia</span>
          </button>

          <button
            type="button"
            onClick={close}
            className="text-taupe-400 hover:text-taupe-600 text-sm font-body transition-colors underline underline-offset-2"
          >
            Não, vou continuar do jeito que estou
          </button>
        </div>

        <button
          type="button"
          onClick={close}
          aria-label="Fechar"
          className="absolute top-4 right-4 text-sand-50/70 hover:text-sand-50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default ExitIntentPopup
