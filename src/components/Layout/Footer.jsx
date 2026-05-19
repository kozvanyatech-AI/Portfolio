import { useState } from "react";
import emailjs from "@emailjs/browser";
import icon from "../../assets/icons/icon.png";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const currentYear = new Date().getFullYear();
  const serviceId = "service_y71nwod";
  const templateId = "template_pcim1cu";
  const publicKey = "tBAx4yF6PgJrDz0Kk";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please complete all fields before sending.");
      return;
    }

    setIsSending(true);
    setStatus("Sending message...");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey,
      );
      setStatus("Message sent! We'll be in touch soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Unable to send message right now. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-white/10 glass-effect-subtle mt-20 md:mt-28 lg:mt-32">
      <div className="container-custom py-20 md:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand Section */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl">
                <img
                  src={icon}
                  alt="Kozvanya logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent group-hover:from-primary-300 group-hover:to-primary-400 transition-all duration-300">
                Kozvanya
              </span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm font-light">
              Scaling Ideas Into Intelligent Solutions. Building premium digital
              experiences for forward-thinking organizations.
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white text-xs uppercase tracking-widest font-medium">
              Quick Links
            </h4>
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

          {/* Message Section */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white text-xs uppercase tracking-widest font-medium">
              Send a Message
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your Message"
                className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 resize-none"
              />
              <button
                type="submit"
                disabled={isSending}
                className={`w-full rounded-2xl px-5 py-3 text-sm font-semibold text-white transition ${isSending ? "bg-primary-400/70 cursor-not-allowed" : "bg-primary-500 hover:bg-primary-400"}`}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
              {status && <p className="text-sm text-gray-400 mt-3">{status}</p>}
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-gray-500 text-sm text-center font-light">
            &copy; {currentYear} Kozvanya Agency. All rights reserved. Built
            with precision and care.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
