import { useInView } from '../hooks'

function PortfolioSection() {
  const [ref, isInView] = useInView()

  const projects = [
    {
      id: 1,
      title: 'FinFlow Dashboard',
      description: 'A modern financial analytics dashboard for tracking revenue, expenses, and forecasting with real-time insights.',
      tech: ['React', 'Tailwind', 'Node.js'],
      image: 'bg-gradient-to-br from-blue-600 to-blue-900',
      category: 'Financial SaaS',
      impact: 'Improved reporting efficiency by 40%',
    },
    {
      id: 2,
      title: 'ShopSync Platform',
      description: 'A SaaS platform enabling retailers to manage inventory, orders, and suppliers in one unified interface.',
      tech: ['Angular', 'Firebase', 'REST APIs'],
      image: 'bg-gradient-to-br from-emerald-600 to-emerald-900',
      category: 'Retail SaaS',
      impact: 'Reduced manual operations by 60%',
    },
    {
      id: 3,
      title: 'AI Support Assistant',
      description: 'AI-powered chatbot integrated into a customer support system for instant query resolution and 24/7 availability.',
      tech: ['React', 'OpenAI API', 'Node.js'],
      image: 'bg-gradient-to-br from-violet-600 to-violet-900',
      category: 'AI Platform',
      impact: 'Reduced response time by 70%',
    },
  ]

  return (
    <section id="portfolio" className="section-spacing relative overflow-hidden border-t border-white/10">
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-24 md:mb-32 lg:mb-40 animate-fade-in">
          {/* Section Label with Gradient Accent */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary-500"></div>
            <p className="text-xs uppercase tracking-widest text-primary-400 font-semibold">Featured Work</p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary-500"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            A selection of recent projects we've built for innovative companies and ambitious startups.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-9">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group h-full flex flex-col transition-smooth rounded-2xl overflow-hidden ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ 
                transitionDelay: isInView ? `${index * 80}ms` : '0ms',
              }}
            >
              {/* Card Container */}
              <div className="relative h-full rounded-2xl overflow-hidden glass-effect group-hover:bg-white/10 group-hover:border-primary-400/30 flex flex-col cursor-pointer transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary-500/10">
                {/* Image/Background */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-gray-800">
                  <div className={`absolute inset-0 ${project.image} opacity-70 transition-transform duration-500 group-hover:scale-110`}></div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-5 right-5 px-4 py-2 rounded-full glass-effect-subtle border-primary-400/20 text-xs font-semibold text-primary-300 group-hover:border-primary-400/40 transition-all duration-300">
                    {project.category}
                  </div>

                  {/* View Project CTA - appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-950/50 backdrop-blur-sm">
                    <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-xl shadow-primary-500/25">
                      View Project
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 bg-gradient-to-b from-white/[0.03] to-transparent flex flex-col">
                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary-300 transition-colors duration-300 text-white">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-450 text-base mb-8 flex-grow group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6 pb-6 border-b border-white/10 group-hover:border-primary-400/30 transition-colors">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-medium">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs rounded-full glass-effect-subtle border-primary-400/20 text-primary-300 group-hover:border-primary-400/40 group-hover:bg-primary-500/15 transition-all duration-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact/Result with Gradient Background */}
                  <div className="mb-8 pb-8 border-b border-white/10 group-hover:border-primary-400/30 transition-colors">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-medium">Results</p>
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <p className="relative text-sm text-primary-300 font-semibold group-hover:text-primary-200 transition-colors px-2 py-1">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <button className="group/btn relative w-full py-4 px-4 rounded-lg glass-effect-subtle border-primary-400/20 text-primary-400 hover:text-primary-300 group-hover:border-primary-400/40 transition-all duration-300 flex items-center justify-between overflow-hidden hover:bg-white/5 font-semibold">
                    <span className="relative z-10">View Case Study</span>
                    <svg className="relative z-10 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-20 md:mt-28 text-center">
          <p className="text-gray-400 mb-8 text-lg font-light">Want to see more of our work?</p>
          <button className="group relative px-10 py-5 glass-effect-hover border-primary-400/30 text-primary-300 font-semibold rounded-full overflow-hidden transition-all duration-300">
            <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
              View All Projects
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
