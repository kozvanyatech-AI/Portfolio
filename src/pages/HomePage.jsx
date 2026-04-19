import Layout from '../components/Layout/Layout'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import PortfolioSection from '../components/PortfolioSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'

function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Features Section */}
      <section className="py-20 md:py-32 border-t border-gray-700">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Why Choose Us</p>
            <h2>Powerful Features</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '⚡', title: 'Fast', desc: 'Lightning quick performance' },
              { icon: '📈', title: 'Scalable', desc: 'Built to grow with you' },
              { icon: '✨', title: 'Modern', desc: 'Latest technologies' },
              { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 hover:border-primary-500 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 border-t border-gray-700">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600/20 to-primary-500/20 border border-primary-500/30 rounded-xl p-12 text-center">
            <h2 className="mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that trust Kozvanya to deliver exceptional digital solutions.
            </p>
            <button className="btn-primary">Contact Us Today</button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
