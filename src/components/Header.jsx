import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#metodo', label: 'O Método' },
    { href: '#como-funciona', label: 'Como Funciona' },
    { href: '#sobre', label: 'Dra. Andreia' },
    { href: '#investimento', label: 'Investimento' },
  ]

  const handleCheckout = () => {
    window.open('https://pay.cakto.com.br/XXXXXXX', '_blank')
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-sand-50/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="/images/metodo-mec-vetor.png" 
              alt="Método MEC" 
              className="h-20 sm:h-24 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-taupe-600 hover:text-brown-600 transition-colors font-medium font-body"
              >
                {link.label}
              </a>
            ))}
            <MovingBorderButton
              onClick={handleCheckout}
              containerClassName=""
              className="px-6 py-2.5 font-body text-base"
              duration={3000}
            >
              Inscreva-se
            </MovingBorderButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-taupe-600"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-sand-300 pt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-taupe-600 hover:text-brown-600 transition-colors font-medium font-body"
                >
                  {link.label}
                </a>
              ))}
              <MovingBorderButton
                onClick={() => { handleCheckout(); setIsMobileMenuOpen(false); }}
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
