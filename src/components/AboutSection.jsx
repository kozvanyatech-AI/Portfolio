import { useInView } from "../hooks";

function AboutSection() {
  const [ref, isInView] = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className={`section-spacing relative overflow-hidden border-t border-white/10 transition-smooth ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left Column - Avatar & Visual */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Animated background circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-3xl blur-3xl"></div>

              {/* Main Avatar Card */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden glass-effect border-primary-400/30 shadow-2xl group">
                {/* Avatar Placeholder with initials */}
                <div className="w-full h-full bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 flex items-center justify-center relative overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                  </div>

                  {/* Brand mark */}
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-white/10 border border-white/10 shadow-lg shadow-black/15">
                      <span className="text-5xl md:text-6xl font-semibold tracking-tight text-white">
                        AC
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-white/80 mt-3 uppercase tracking-wider">
                      Founder & CEO
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating element - small decorative card */}
              <div className="absolute -bottom-6 -right-6 glass-effect border-primary-400/30 rounded-2xl p-5 w-56 shadow-2xl hidden md:block group/float hover:bg-white/10 transition-all duration-300">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-medium">
                  Building Since
                </p>
                <p className="text-3xl font-bold text-primary-300">2019</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-10">
            {/* Subtitle */}
            <div>
              <p className="text-xs uppercase tracking-widest text-primary-400 font-semibold mb-4">
                About Us
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                Meet Our <span className="gradient-text">Founder</span>
              </h2>
            </div>

            {/* Bio Text */}
            <div className="space-y-6 text-gray-300">
              <p className="text-xl leading-relaxed font-light">
                Software Engineer with{" "}
                <span className="font-semibold text-primary-300">
                  5+ years of experience
                </span>{" "}
                building scalable applications and leading high-performing
                development teams.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                Expert in full-stack development and modern technologies,
                passionate about creating exceptional digital experiences and
                mentoring the next generation of developers.
              </p>
              <p className="text-gray-450 text-lg leading-relaxed font-light">
                Focused on product development, system architecture, performance
                optimization, and transforming complex business challenges into
                intelligent digital solutions.
              </p>
            </div>

            {/* Skills/Expertise */}
            <div className="pt-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-5">
                Core Expertise
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Full-Stack Development",
                  "System Architecture",
                  "Product Strategy",
                  "Team Leadership",
                  "Performance Optimization",
                  "Cloud Solutions",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-4 rounded-lg glass-effect-subtle border-primary-400/20 hover:bg-white/10 hover:border-primary-400/40 transition-all duration-300 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary-500 group-hover:bg-primary-400 transition-colors flex-shrink-0"></span>
                    <span className="text-sm text-gray-300 group-hover:text-primary-300 transition-colors font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social / CTA */}
            <div className="pt-4 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
                  Connect
                </p>
                <div className="flex gap-4">
                  {[
                    {
                      icon: "in",
                      label: "LinkedIn",
                      color: "hover:text-blue-400",
                    },
                    {
                      icon: "gh",
                      label: "GitHub",
                      color: "hover:text-gray-300",
                    },
                    {
                      icon: "tw",
                      label: "Twitter",
                      color: "hover:text-sky-400",
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      title={social.label}
                      className={`p-3 rounded-full glass-effect-subtle border-primary-400/20 text-gray-400 ${social.color} transition-all duration-300 hover:border-primary-400/40 hover:bg-white/10 group`}
                    >
                      <span className="text-sm font-semibold">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="group/btn relative w-full px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/40 transform hover:-translate-y-1.5">
                <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                  Let's Work Together
                  <svg
                    className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
