import { useState, useEffect } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  // Handle smooth scroll and close mobile menu
  const handleNavClick = (e, href) => {
    e.preventDefault()
    closeMenu()
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-gray-950/70 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/20'
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0 group cursor-pointer">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0.5 bg-gray-950 rounded-md"></div>
              <div className="absolute inset-0 flex items-center justify-center text-primary-300 font-bold text-sm">K</div>
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent group-hover:from-primary-300 group-hover:to-primary-400 transition-all duration-300">
              Kozvanya
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-4 py-2 text-gray-400 hover:text-gray-100 transition-colors duration-300 group text-sm font-medium cursor-pointer"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-400 to-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>

          {/* Right Section - CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:block px-5 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 transform hover:-translate-y-0.5">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative p-2 w-10 h-10 rounded-lg text-gray-400 hover:text-white focus:outline-none group transition-all duration-300"
            >
              <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <svg className="relative w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 glass-effect-subtle animate-in fade-in slide-in-from-top-2 duration-300 border-t border-0">
            <div className="container-custom px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 group text-sm font-medium cursor-pointer"
                >
                  <span className="relative">
                    {link.label}
                  </span>
                </a>
              ))}
              <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
