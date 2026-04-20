import icon from '../../assets/icons/icon.png'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Contact', href: '#' },
  ]

  return (
    <footer className="border-t border-white/10 glass-effect-subtle mt-20 md:mt-28 lg:mt-32">
      <div className="container-custom py-20 md:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Brand Section */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl">
                <img src={icon} alt="Kozvanya logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent group-hover:from-primary-300 group-hover:to-primary-400 transition-all duration-300">
                Kozvanya
              </span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm font-light">
              Scaling Ideas Into Intelligent Solutions. Building premium digital experiences for forward-thinking organizations.
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white text-xs uppercase tracking-widest font-medium">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-300 transition-colors duration-300 text-base font-light group inline-flex items-center gap-2"
                  >
                    {link.label}
                    <span className="w-0 h-px bg-primary-400 group-hover:w-4 transition-all duration-300 ml-1"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-gray-500 text-sm text-center font-light">
            &copy; {currentYear} Kozvanya Agency. All rights reserved. Built with precision and care.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
