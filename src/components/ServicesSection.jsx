import { useInView } from '../hooks'

function ServicesSection() {
  const [ref, isInView] = useInView()

  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'High-performance, scalable web applications tailored for modern businesses.',
      features: ['React, Angular, Next.js development', 'API integration & performance optimization', 'Responsive and SEO-friendly builds'],
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="2" y1="17" x2="22" y2="17"/>
          <line x1="6" y1="21" x2="18" y2="21"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'SaaS Development',
      description: 'End-to-end SaaS product development from idea to scalable platform.',
      features: ['Multi-tenant architecture', 'Secure authentication & billing systems', 'Scalable cloud-ready solutions'],
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="1"/>
          <path d="M12 1v6m0 6v6"/>
          <path d="M4.22 4.22l4.24 4.24m5.08 0l4.24-4.24"/>
          <path d="M1 12h6m6 0h6"/>
          <path d="M4.22 19.78l4.24-4.24m5.08 0l4.24 4.24"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Clean, intuitive, and conversion-focused product design.',
      features: ['Wireframing & prototyping', 'Design systems & branding', 'User experience optimization'],
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
          <path d="M12 9l-3 3 3 3 3-3-3-3zm0 6l2 2 2-2"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'AI Integrations',
      description: 'Smart automation and AI-powered features for modern applications.',
      features: ['Chatbots & AI assistants', 'Workflow automation', 'Data-driven insights & recommendations'],
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
          <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="section-spacing relative overflow-hidden border-t border-white/10">
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-primary-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 md:mb-32 lg:mb-40 animate-fade-in">
          {/* Section Label with Gradient Accent */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary-500"></div>
            <p className="text-xs uppercase tracking-widest text-primary-400 font-semibold">Our Services</p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary-500"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
            Comprehensive <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            From concept to deployment, we provide end-to-end digital solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative h-full transition-smooth ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ 
                transitionDelay: isInView ? `${index * 80}ms` : '0ms',
              }}
            >
              {/* Gradient accent line at top */}
              <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Glass background card */}
              <div className="absolute inset-0 glass-effect group-hover:bg-white/8 group-hover:border-primary-400/30 rounded-2xl transition-all duration-300"></div>

              {/* Content */}
              <div className="relative p-8 md:p-10 h-full flex flex-col">
                {/* Icon Container with Gradient Background */}
                <div className="mb-8 inline-flex">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-4 rounded-xl glass-effect group-hover:bg-white/10 group-hover:border-primary-400/40 text-primary-300 group-hover:text-primary-200 transition-all duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-primary-300 transition-colors duration-300 text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-450 text-base mb-8 flex-grow group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500/70 group-hover:bg-primary-400 transition-colors flex-shrink-0"></span>
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Arrow */}
                <div className="pt-6 border-t border-white/10 group-hover:border-primary-500/40 transition-colors">
                  <div className="flex items-center gap-2 text-primary-400 group-hover:text-primary-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300 text-sm font-semibold">
                    <span>Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 md:mt-28 text-center">
          <p className="text-gray-400 mb-8 text-lg">Ready to start your next project?</p>
          <button className="group relative px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/40 transform hover:-translate-y-1.5">
            <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
              Let's Work Together
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
