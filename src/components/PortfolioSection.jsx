import { useState } from "react";
import { useInView } from "../hooks";
import Modal from "./Modal";

function PortfolioSection() {
  const [ref, isInView] = useInView();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Eerly Brain AI",
      description:
        "Advanced SAP AI consultant services with comprehensive toolkit and copilots for preparing SAP documentation, RFPs, ROMs, and work orders. Features a Chrome extension for seamless query handling.",
      tech: ["Angular 15", "TypeScript", "Python", "MySQL"],
      image: "bg-gradient-to-br from-blue-600 to-blue-900",
      category: "AI Platform",
      impact: "Streamlined SAP documentation workflow with AI assistance",
      duration: "Dec 2024 - Present",
      role: "Front-end Lead",
      overview:
        "Eerly Brain AI is an advanced SAP AI consultant platform that provides comprehensive toolkit and copilots for preparing SAP documentation, RFPs, ROMs, and work orders. The platform also features a Chrome extension for seamless query handling.",
      challenges: [
        "Building a complex AI-powered documentation system from scratch",
        "Creating an intuitive UI for non-technical SAP users",
        "Integrating multiple payment gateways securely",
        "Developing a Chrome extension with real-time assistance",
        "Ensuring cross-browser compatibility for all features",
      ],
      solutions: [
        "Designed and implemented a modular component architecture using Angular 15",
        "Created dynamic data visualization components for charts and graphs",
        "Built a secure payment integration system with multiple gateway support",
        "Developed Process AI - a runtime guiding tool for real-time user assistance",
        "Implemented responsive design patterns for all device types",
      ],
      results: [
        "Streamlined SAP documentation workflow by 60%",
        "Reduced user query resolution time by 70%",
        "Achieved 99.9% uptime for the platform",
        "Successfully processed 10,000+ payment transactions",
      ],
    },
    {
      id: 2,
      title: "Raapyd Document AI",
      description:
        "AI-powered document processing platform that automates data extraction from invoices, bank statements, and contracts with high accuracy using pre-trained and customizable AI models.",
      tech: ["Angular 15", "TypeScript", "Python", "MySQL"],
      image: "bg-gradient-to-br from-emerald-600 to-emerald-900",
      category: "AI Platform",
      impact: "Automated document processing reducing manual efforts by 70%",
      duration: "Dec 2024 - Present",
      role: "Front-end Developer",
      overview:
        "Raapyd Document AI is an AI-powered document processing platform that automates data extraction from invoices, bank statements, and contracts with high accuracy using pre-trained and customizable AI models.",
      challenges: [
        "Handling high-volume document processing efficiently",
        "Creating real-time data visualization for processing status",
        "Implementing AI-driven classification and validation",
        "Building a human-in-the-loop review system",
        "Ensuring secure data handling and compliance",
      ],
      solutions: [
        "Built an optimized front-end architecture for high-volume processing",
        "Implemented real-time progress tracking and visualization",
        "Created intuitive review interfaces for human validation",
        "Designed responsive dashboards for analytics and reporting",
        "Integrated secure file handling with encryption",
      ],
      results: [
        "Reduced manual document processing efforts by 70%",
        "Achieved 95% accuracy in automated data extraction",
        "Processed 50,000+ documents with 99.5% success rate",
        "Improved decision-making with comprehensive analytics",
      ],
    },
    {
      id: 3,
      title: "Adopt Wifi SMP",
      description:
        "Angular web app providing internet services to authenticated and guest users with role-based services management for Plans, OTP, Customer, and Vouchers.",
      tech: ["Angular 11", "Spring Boot", "PrimeNG", "MySQL"],
      image: "bg-gradient-to-br from-violet-600 to-violet-900",
      category: "Telecom",
      impact: "Managed WiFi services for 1000+ users with role-based access",
      duration: "May 2021 - May 2023",
      role: "Full Stack Developer",
      overview:
        "Adopt Wi-Fi SMP is an Angular web application that provides internet services to authenticated and guest users. It offers role-based service management for Plans, OTP, Customer, Client groups, and Vouchers.",
      challenges: [
        "Managing authentication for multiple user roles",
        "Building a scalable voucher and plan management system",
        "Integrating OTP-based authentication securely",
        "Creating real-time usage tracking and reporting",
        "Handling high concurrent user load",
      ],
      solutions: [
        "Implemented JWT-based authentication with role management",
        "Built a flexible plan and voucher management system",
        "Created OTP integration with SMS gateways",
        "Developed real-time usage dashboards and reports",
        "Optimized database queries for high performance",
      ],
      results: [
        "Managed WiFi services for 1000+ concurrent users",
        "Reduced plan management time by 50%",
        "Achieved 99.9% system availability",
        "Improved user authentication success rate to 99%",
      ],
    },
    {
      id: 4,
      title: "Booking Engine",
      description:
        "SaaS-based sports club booking system where admins can manage subscriptions and members can book sports activities and slots.",
      tech: ["Angular", "Spring Boot", "J2EE", "MySQL"],
      image: "bg-gradient-to-br from-rose-600 to-rose-900",
      category: "Sports SaaS",
      impact: "Enabled seamless slot booking for 50+ sports clubs",
      duration: "Apr 2021 - May 2021",
      role: "Full Stack Developer",
      overview:
        "Booking Engine is a SaaS-based sports club booking system where admins can buy subscription plans to manage their sports activities' booking. Club Members can do the booking from the system and book their slots.",
      challenges: [
        "Building real-time slot availability system",
        "Managing subscription plans for multiple clubs",
        "Creating an intuitive booking interface",
        "Handling payment integration securely",
        "Managing club-specific configurations",
      ],
      solutions: [
        "Implemented real-time slot availability with WebSocket",
        "Built flexible subscription plan management",
        "Created responsive booking interfaces for all devices",
        "Integrated multiple payment gateways",
        "Developed club-specific customization features",
      ],
      results: [
        "Enabled seamless slot booking for 50+ sports clubs",
        "Reduced booking conflicts by 95%",
        "Improved club revenue by 30%",
        "Achieved 99% customer satisfaction",
      ],
    },
    {
      id: 5,
      title: "Website Builder",
      description:
        "Event management platform providing website templates with ticket booking, batch printing, and event showcasing features for speakers, sponsors, and blogs.",
      tech: ["React.JS", "Node.js", "Bootstrap", "MySQL"],
      image: "bg-gradient-to-br from-amber-600 to-amber-900",
      category: "Event Tech",
      impact: "Created 100+ event websites with integrated booking",
      duration: "Jan 2020 - Jun 2020",
      role: "React.js Developer",
      overview:
        "Website Builder is an event management platform that provides templates for creating different websites. It's a product of an event management company with major features like ticket booking, batch printing, and showcasing event highlights.",
      challenges: [
        "Creating flexible and customizable templates",
        "Building a robust ticket booking system",
        "Implementing batch printing for tickets",
        "Designing event showcase pages for speakers/sponsors",
        "Ensuring template performance and SEO",
      ],
      solutions: [
        "Built a component-based template system with React.js",
        "Implemented secure ticket booking with QR codes",
        "Created batch printing functionality with PDF generation",
        "Developed dynamic showcase pages with CMS integration",
        "Optimized templates for fast loading and SEO",
      ],
      results: [
        "Created 100+ event websites with integrated booking",
        "Processed 500,000+ ticket bookings",
        "Reduced event setup time by 70%",
        "Achieved 95% client satisfaction",
      ],
    },
    {
      id: 6,
      title: "Kuber E-commerce",
      description:
        "E-commerce platform with merchant and user interfaces featuring stock management, offline store details, shipping services, tax management, and payment gateway integration.",
      tech: ["React.JS", "TypeScript", ".NET", "MongoDB"],
      image: "bg-gradient-to-br from-cyan-600 to-cyan-900",
      category: "E-commerce",
      impact: "Built scalable e-commerce solution for 200+ merchants",
      duration: "Jun 2020 - Mar 2021",
      role: "React.js Developer",
      overview:
        "Kuber is an E-commerce website with merchant and user UI. On merchant side, features include stock management, merchant offline store details, shipping services, and tax management. On user side, payment gateway and data showcasing.",
      challenges: [
        "Building dual interfaces for merchants and users",
        "Implementing real-time inventory management",
        "Creating shipping and tax calculation systems",
        "Integrating multiple payment gateways",
        "Handling large product catalogs efficiently",
      ],
      solutions: [
        "Built separate merchant and user dashboards with React.js",
        "Implemented real-time inventory sync with MongoDB",
        "Created dynamic shipping and tax calculation engine",
        "Integrated multiple payment gateways securely",
        "Optimized product catalog with lazy loading",
      ],
      results: [
        "Built scalable e-commerce solution for 200+ merchants",
        "Processed $5M+ in transactions",
        "Reduced inventory management time by 60%",
        "Achieved 99.9% payment success rate",
      ],
    },
    {
      id: 7,
      title: "OVS (Online Voting System)",
      description:
        "Secure voting system with user verification for valid voters and comprehensive voting management including counting on the admin side.",
      tech: ["PHP", "HTML", "CSS", "MySQL"],
      image: "bg-gradient-to-br from-indigo-600 to-indigo-900",
      category: "Government",
      impact: "Facilitated secure voting for 10,000+ registered users",
      duration: "Jun 2018 - Dec 2019",
      role: "Web Developer",
      overview:
        "OVS (Online Voting System) is a voting system for users with a verification system for valid users for vote and counting and voting management on the admin side.",
      challenges: [
        "Ensuring secure and tamper-proof voting",
        "Building robust user verification system",
        "Creating real-time vote counting dashboard",
        "Handling high concurrent voting load",
        "Maintaining voter anonymity",
      ],
      solutions: [
        "Implemented secure authentication with verification",
        "Built encrypted voting system with audit trails",
        "Created real-time vote counting and analytics",
        "Optimized system for high concurrent load",
        "Designed anonymous voting mechanism",
      ],
      results: [
        "Facilitated secure voting for 10,000+ registered users",
        "Achieved 100% vote accuracy",
        "Reduced voting time by 80%",
        "Eliminated manual vote counting errors",
      ],
    },
    {
      id: 8,
      title: "AWIS Captive Portal",
      description:
        "Captive portal enabling authenticated WiFi access for limited time or volume as per policy with two-way login system for guests and members.",
      tech: ["Angular", "Node.js", "MySQL", "Docker"],
      image: "bg-gradient-to-br from-orange-600 to-orange-900",
      category: "Telecom",
      impact: "Managed WiFi access for 5000+ concurrent users",
      duration: "2018 - 2020",
      role: "Full Stack Developer",
      overview:
        "AWIS Captive Portal is a captive portal that allows authenticated users to have WiFi access for limited time or volume as per policy. It features a two-way login system for guests and members.",
      challenges: [
        "Building policy-based access control system",
        "Implementing time and volume tracking",
        "Creating dual login for guests and members",
        "Managing high concurrent user sessions",
        "Ensuring secure authentication",
      ],
      solutions: [
        "Built policy-based access control with Angular",
        "Implemented real-time time and volume tracking",
        "Created separate login flows for guests and members",
        "Optimized session management for high load",
        "Integrated secure authentication protocols",
      ],
      results: [
        "Managed WiFi access for 5000+ concurrent users",
        "Reduced network management overhead by 50%",
        "Achieved 99.9% uptime",
        "Improved user authentication speed by 40%",
      ],
    },
    {
      id: 9,
      title: "Coming Soon",
      description:
        "This slot is reserved for the next project. Full details will be added soon.",
      tech: ["TBD"],
      image: "bg-gradient-to-br from-slate-600 to-slate-900",
      category: "Planned Project",
      impact: "New project details coming soon",
      duration: "TBA",
      role: "TBD",
      overview:
        "A placeholder for the upcoming project. Content will be updated once the project is finalized.",
      challenges: ["Placeholder content"],
      solutions: ["Upcoming integration"],
      results: ["Project details coming soon"],
    },
  ];
  const getProjectIcon = (title) => {
    const sharedProps = {
      className: "w-6 h-6 text-white",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };

    switch (title) {
      case "Eerly Brain AI":
        return (
          <svg viewBox="0 0 24 24" {...sharedProps}>
            <path d="M12 3v3" />
            <path d="M12 18v3" />
            <path d="M3 12h3" />
            <path d="M18 12h3" />
            <path d="M6.5 6.5l2 2" />
            <path d="M15.5 15.5l2 2" />
            <path d="M6.5 17.5l2-2" />
            <path d="M15.5 8.5l2-2" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        );
      case "Raapyd Document AI":
        return (
          <svg viewBox="0 0 24 24" {...sharedProps}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M9 14h6" />
            <path d="M9 18h6" />
            <path d="M9 10h2" />
          </svg>
        );
      case "Adopt Wifi SMP":
        return (
          <svg viewBox="0 0 24 24" {...sharedProps}>
            <path d="M5 12.55a11 11 0 0 1 14 0" />
            <path d="M8.5 15.05a6 6 0 0 1 7 0" />
            <path d="M11.5 18.55a1 1 0 0 1 1.99 0" />
            <path d="M12 21v-2" />
          </svg>
        );
      case "Booking Engine":
        return (
          <svg viewBox="0 0 24 24" {...sharedProps}>
            <rect x="4" y="5" width="16" height="14" rx="2" />
            <path d="M16 3v4" />
            <path d="M8 3v4" />
            <path d="M4 9h16" />
          </svg>
        );
      case "Website Builder":
        return (
          <svg viewBox="0 0 24 24" {...sharedProps}>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 9v11" />
          </svg>
        );
      case "Kuber E-commerce":
        return (
          <svg viewBox="0 0 24 24" {...sharedProps}>
            <path d="M6 6h15l-1.5 9h-12z" />
            <circle cx="9" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
            <path d="M7 6V4h-2" />
          </svg>
        );
      case "OVS (Online Voting System)":
        return (
          <svg viewBox="0 0 24 24" {...sharedProps}>
            <rect x="4" y="6" width="16" height="12" rx="2" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        );
      case "AWIS Captive Portal":
        return (
          <svg viewBox="0 0 24 24" {...sharedProps}>
            <path d="M7 10a5 5 0 0 1 10 0v4" />
            <rect x="5" y="14" width="14" height="6" rx="2" />
            <path d="M9 14v-2a3 3 0 0 1 6 0v2" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" {...sharedProps}>
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3" />
            <path d="M12 19v3" />
          </svg>
        );
    }
  };
  const visibleProjects = projects;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section
      id="portfolio"
      className="section-spacing relative overflow-hidden border-t border-white/10"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div
          ref={ref}
          className="text-center mb-24 md:mb-32 lg:mb-40 animate-fade-in"
        >
          {/* Section Label with Gradient Accent */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary-500"></div>
            <p className="text-xs uppercase tracking-widest text-primary-400 font-semibold">
              Featured Work
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary-500"></div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            A selection of recent projects we've built for innovative companies
            and ambitious startups.
          </p>
        </div>

        {/* Carousel layout - horizontal scrollable */}
        <div>
          <div className="container-custom relative">
            {/* Carousel container */}
            <div className="flex items-center justify-center gap-4 px-8 py-8 w-full overflow-x-auto">
              {/* Left side preview cards */}
              <div className="hidden lg:grid grid-cols-2 gap-4 flex-shrink-0">
                {[1, 2, 3, 4].map((offset) => {
                  const index =
                    (currentIndex - offset + visibleProjects.length) %
                    visibleProjects.length;
                  const project = visibleProjects[index];
                  return (
                    <button
                      key={`left-${offset}`}
                      onClick={() => setCurrentIndex(index)}
                      className="relative h-36 w-44 rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div
                        className={`absolute inset-0 ${project.image} bg-cover bg-center`}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>
                      <div className="absolute inset-x-0 top-1/2 flex flex-col items-center justify-center gap-3 px-4 -translate-y-1/2 text-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 border border-white/15 shadow-sm">
                          {getProjectIcon(project.title)}
                        </div>
                        <h4 className="text-white text-[11px] font-semibold tracking-[0.25em] uppercase leading-tight">
                          {project.title.split(" ").slice(0, 2).join(" ")}
                        </h4>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Center featured card */}
              <div className="flex-shrink-0">
                {visibleProjects[currentIndex] && (
                  <div className="relative w-96 h-96 rounded-3xl overflow-hidden shadow-2xl bg-slate-950">
                    <div
                      className={`h-full ${visibleProjects[currentIndex].image} bg-cover bg-center`}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="inline-flex items-center gap-3 mb-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 border border-white/15 shadow-sm">
                          {getProjectIcon(visibleProjects[currentIndex].title)}
                        </div>
                        <div>
                          <span className="h-2.5 w-2.5 inline-block rounded-full bg-primary-400 mr-2"></span>
                          <p className="text-xs uppercase tracking-[0.25em] text-primary-300 font-semibold inline-block align-middle">
                            Featured
                          </p>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold leading-tight mb-3">
                        {visibleProjects[currentIndex].title}
                      </h3>
                      <p className="text-xs text-gray-200 mb-5 line-clamp-2">
                        {visibleProjects[currentIndex].description}
                      </p>
                      <button
                        onClick={() =>
                          setSelectedProject(visibleProjects[currentIndex])
                        }
                        className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-5 py-2 text-xs font-semibold text-white transition"
                      >
                        View Case Study
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right side preview cards */}
              <div className="hidden lg:grid grid-cols-2 gap-4 flex-shrink-0">
                {[1, 2, 3, 4].map((offset) => {
                  const index =
                    (currentIndex + offset) % visibleProjects.length;
                  const project = visibleProjects[index];
                  return (
                    <button
                      key={`right-${offset}`}
                      onClick={() => setCurrentIndex(index)}
                      className="relative h-36 w-44 rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div
                        className={`absolute inset-0 ${project.image} bg-cover bg-center`}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80"></div>
                      <div className="absolute inset-x-0 top-1/2 flex flex-col items-center justify-center gap-3 px-4 -translate-y-1/2 text-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 border border-white/15 shadow-sm">
                          {getProjectIcon(project.title)}
                        </div>
                        <h4 className="text-white text-[11px] font-semibold tracking-[0.25em] uppercase leading-tight">
                          {project.title.split(" ").slice(0, 2).join(" ")}
                        </h4>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="space-y-8">
            {/* Project Info */}
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-full glass-effect-subtle border-primary-400/30 text-primary-300 text-sm font-medium">
                {selectedProject.category}
              </div>
              <div className="px-4 py-2 rounded-full glass-effect-subtle border-white/10 text-gray-300 text-sm">
                {selectedProject.duration}
              </div>
              <div className="px-4 py-2 rounded-full glass-effect-subtle border-white/10 text-gray-300 text-sm">
                {selectedProject.role}
              </div>
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Overview
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {selectedProject.overview}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full glass-effect-subtle border-primary-400/20 text-primary-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Challenges
              </h4>
              <ul className="space-y-3">
                {selectedProject.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-gray-400">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Solutions
              </h4>
              <ul className="space-y-3">
                {selectedProject.solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-400">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.results.map((result, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl glass-effect-subtle border border-primary-400/20"
                  >
                    <p className="text-primary-300 font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default PortfolioSection;
