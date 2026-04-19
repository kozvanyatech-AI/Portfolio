function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-52 md:pb-40 lg:pt-64 lg:pb-48 overflow-hidden">
      {/* Animated gradient background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Top gradient orb */}
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-[28rem] sm:h-[28rem] md:w-96 md:h-96 bg-primary-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        
        {/* Bottom gradient orb */}
        <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-[28rem] sm:h-[28rem] md:w-96 md:h-96 bg-primary-600/15 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
        
        {/* Center gradient orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-primary-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-10 lg:space-y-12">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight max-w-5xl text-white animate-fade-in">
            Scaling Ideas Into
            <span className="block mt-3">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 opacity-0 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></span>
                <span className="relative bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                  Intelligent Solutions
                </span>
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light tracking-wide animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We build modern, scalable digital products for startups and businesses ready to transform their ideas into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-6 md:pt-10 animate-fade-in w-full sm:w-auto sm:justify-center" style={{ animationDelay: '0.4s' }}>
            {/* Primary CTA */}
            <button className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/40 transform hover:-translate-y-1.5">
              <span className="relative z-10 flex items-center justify-center gap-2 text-base sm:text-lg">
                Get Started
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Secondary CTA */}
            <button className="group relative px-8 sm:px-10 py-4 sm:py-5 glass-effect-hover rounded-full overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2 text-base sm:text-lg text-gray-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                View Work
              </span>
            </button>
          </div>

          {/* Trust/Social Proof */}
          <div className="pt-12 md:pt-16 lg:pt-20 animate-fade-in w-full" style={{ animationDelay: '0.6s' }}>
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest mb-6 md:mb-8 font-medium">Trusted by forward-thinking companies</p>
            <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap px-4">
              {[
                { name: 'TechCorp', initial: 'TC' },
                { name: 'StartupHub', initial: 'SH' },
                { name: 'InnovateLabs', initial: 'IL' },
                { name: 'FutureWorks', initial: 'FW' },
              ].map((company) => (
                <div
                  key={company.name}
                  className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg glass-effect flex items-center justify-center text-sm font-semibold text-primary-300 group-hover:border-primary-400/30 transition-all duration-300">
                    {company.initial}
                  </div>
                  <span className="text-sm md:text-base text-gray-400 hidden sm:inline group-hover:text-gray-300 transition-colors">{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll down indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-gray-500 group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
