import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'
import LogoWithParticles from './ui/LogoWithParticles'
import { openCheckout } from '../config'

const navLinks = [
  { href: '#metodo', label: 'O Método', sectionId: 'metodo' },
  { href: '#como-funciona', label: 'Como Funciona', sectionId: 'como-funciona' },
  { href: '#sobre', label: 'Dra. Andreia', sectionId: 'sobre' },
  { href: '#investimento', label: 'Investimento', sectionId: 'investimento' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.sectionId)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-sand-50/95 backdrop-blur-md shadow-lg py-5 md:py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center" aria-label="Início — Método MEC">
            <LogoWithParticles>
              <img
                src="/images/header-logo-mec.png"
                alt="Método MEC"
                className="h-14 w-auto"
              />
            </LogoWithParticles>
          </a>

          <nav className="hidden md:flex items-center space-x-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium font-body relative pb-0.5 ${
                  activeSection === link.sectionId
                    ? 'text-brown-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-400 after:rounded-full'
                    : 'text-taupe-600 hover:text-brown-600'
                }`}
                aria-current={activeSection === link.sectionId ? 'true' : undefined}
              >
                {link.label}
              </a>
            ))}
            <MovingBorderButton
              onClick={openCheckout}
              containerClassName=""
              className="px-6 py-2.5 font-body text-base"
              duration={3000}
            >
              Inscreva-se
            </MovingBorderButton>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden p-2 text-taupe-600"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav
            className="md:hidden mt-4 pb-4 border-t border-sand-300 pt-4"
            aria-label="Navegação mobile"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`font-medium font-body transition-colors ${
                    activeSection === link.sectionId
                      ? 'text-brown-600'
                      : 'text-taupe-600 hover:text-brown-600'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <MovingBorderButton
                onClick={() => { openCheckout(); closeMobileMenu() }}
                containerClassName="w-full"
                className="px-6 py-2.5 font-body text-base"
                duration={3000}
              >
                Inscreva-se
              </MovingBorderButton>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
