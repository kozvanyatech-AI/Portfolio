import { useState } from 'react'
import { useInView } from '../hooks'

function ContactSection() {
  const [ref, isInView] = useInView()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" ref={ref} className={`section-spacing relative overflow-hidden border-t border-white/10 transition-smooth ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-primary-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28 lg:mb-32">
          <p className="text-xs uppercase tracking-widest text-primary-400 font-semibold mb-4">Get In Touch</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Have a project in mind? Let's talk about how we can help bring your ideas to life.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-2xl glass-effect border-primary-400/30 p-10 md:p-14 overflow-hidden group hover:bg-white/10 transition-all duration-300">
            {/* Success Message */}
            {submitted && (
              <div className="absolute inset-0 rounded-2xl bg-gray-950/90 backdrop-blur-md flex items-center justify-center z-50 animate-fade-in">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-500/20 border-2 border-primary-500 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-gray-400 text-lg">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              </div>
            )}

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="relative z-10 space-y-7">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-6 py-4 rounded-xl glass-effect-subtle border-primary-400/20 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-500/20 hover:border-primary-400/40 hover:bg-white/5"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-6 py-4 rounded-xl glass-effect-subtle border-primary-400/20 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-500/20 hover:border-primary-400/40 hover:bg-white/5"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="6"
                  required
                  className="w-full px-6 py-4 rounded-xl glass-effect-subtle border-primary-400/20 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-primary-400/50 focus:ring-2 focus:ring-primary-500/20 hover:border-primary-400/40 hover:bg-white/5 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/40 transform hover:-translate-y-1.5 mt-10"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                  Send Message
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>

            {/* Contact Info Below Form */}
            <div className="relative z-10 mt-14 pt-10 border-t border-white/10 group-hover:border-primary-400/30 transition-colors">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">Email</p>
                  <a href="mailto:hello@kozvanya.com" className="text-primary-300 hover:text-primary-200 text-base font-semibold transition-colors">
                    hello@kozvanya.com
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">Phone</p>
                  <a href="tel:+1234567890" className="text-primary-300 hover:text-primary-200 text-base font-semibold transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">Location</p>
                  <p className="text-primary-300 text-base font-semibold">
                    New York, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
