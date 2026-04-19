import Layout from '../components/Layout/Layout'

function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      features: ['React/Next.js', 'Full Stack', 'API Integration'],
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that users love.',
      features: ['User Research', 'Prototyping', 'Design Systems'],
    },
    {
      id: 3,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications.',
      features: ['iOS/Android', 'React Native', 'App Store Ready'],
    },
    {
      id: 4,
      title: 'Consulting',
      description: 'Strategic guidance for your digital transformation.',
      features: ['Technical Strategy', 'Architecture', 'Optimization'],
    },
  ]

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 border-b border-gray-700">
        <div className="container-custom text-center">
          <h1 className="mb-4">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-8 rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 hover:border-primary-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-sm bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ServicesPage
