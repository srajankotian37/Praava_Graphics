import { Phone, Mail, MapPin, ArrowRight, Award, Users, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [secretClickCount, setSecretClickCount] = useState(0);

  const handleSecretClick = () => {
    setSecretClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 5) {
        toast({
          title: "Admin Access Granted",
          description: "Welcome back, Administrator.",
        });
        sessionStorage.setItem("adminAuthenticated", "true");
        navigate("/admin");
        return 0;
      }

      // Reset count if not clicked again within 1 second
      setTimeout(() => setSecretClickCount(0), 1000);
      return newCount;
    });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      {/* Subtle Pattern Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(to right, #CE8946 1px, transparent 1px), linear-gradient(to bottom, #CE8946 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Top Stats Bar */}
        <div className="py-12 border-b" style={{ borderColor: '#1a1a1a' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <Award className="h-5 w-5" style={{ color: '#CE8946' }} />
                <span className="text-2xl font-bold" style={{ color: '#ffffff' }}>10+</span>
              </div>
              <p className="text-sm" style={{ color: '#888888' }}>Years of Excellence</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <Users className="h-5 w-5" style={{ color: '#CE8946' }} />
                <span className="text-2xl font-bold" style={{ color: '#ffffff' }}>100+</span>
              </div>
              <p className="text-sm" style={{ color: '#888888' }}>Satisfied Clients</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <Clock className="h-5 w-5" style={{ color: '#CE8946' }} />
                <span className="text-2xl font-bold" style={{ color: '#ffffff' }}>24/7</span>
              </div>
              <p className="text-sm" style={{ color: '#888888' }}>Customer Support</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 py-16">

          {/* Company Info - Larger Section */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="mb-6">
              <img
                src="/images/Brand/logo-fulll.png"
                alt="Praava Graphics - DAP Engineering"
                className="h-10 w-auto opacity-90"
              />
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: '#cccccc' }}>
              Praava Graphics, a division of DAP Engineering Pvt. Ltd., specializes in manufacturing log stackers, web stackers, and conveyors for the printing industry since 2013.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 mb-8">
              <a
                href="https://linkedin.com/company/dap-engineering"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border rounded-lg transition-all duration-300 group"
                style={{ borderColor: '#333333', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#CE8946';
                  e.currentTarget.style.backgroundColor = '#CE8946';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#333333';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 transition-colors" fill="#cccccc" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/dapengineering"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border rounded-lg transition-all duration-300 group"
                style={{ borderColor: '#333333', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#CE8946';
                  e.currentTarget.style.backgroundColor = '#CE8946';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#333333';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 transition-colors" fill="#cccccc" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="mailto:info@dapepl.com"
                className="w-10 h-10 flex items-center justify-center border rounded-lg transition-all duration-300 group"
                style={{ borderColor: '#333333', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#CE8946';
                  e.currentTarget.style.backgroundColor = '#CE8946';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#333333';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                aria-label="Email"
              >
                <Mail className="w-4 h-4" style={{ color: '#cccccc' }} />
              </a>
            </div>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{ borderColor: '#CE8946', backgroundColor: 'rgba(206, 137, 70, 0.1)' }}
            >
              <span className="text-xs font-bold" style={{ color: '#CE8946' }}>EST. 2013</span>
              <span className="text-xs" style={{ color: '#888888' }}>|</span>
              <span className="text-xs" style={{ color: '#cccccc' }}>Made in India</span>
            </div>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2" style={{ color: '#CE8946' }}>
              <span className="w-6 h-0.5 bg-[#CE8946]" />
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Log Stackers', href: '/services/log-stackers' },
                { label: 'Web Stackers', href: '/services/webstackers' },
                { label: 'Conveyors', href: '/services/conveyors' },
                { label: 'Press Relocation', href: '/services/press-relocation' },
                { label: 'Press Rebuilds', href: '/services/press-rebuilds' },
                { label: 'Troubleshooting', href: '/services/service-troubleshooting' },
                { label: 'Press Sourcing', href: '/services/press-sourcing' },
                { label: 'Technical Evaluation', href: '/services/technical-evaluation' },
                { label: 'After-Sales Support', href: '/services/after-sales-support' },
              ].map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-sm transition-all duration-300 inline-flex items-center gap-2 group relative"
                    style={{ color: '#cccccc' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#CE8946';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#cccccc';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2" style={{ color: '#CE8946' }}>
              <span className="w-6 h-0.5 bg-[#CE8946]" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Products', href: '/products' },
                { label: 'Used Equipment', href: '/used-equipment-sales' },
                { label: 'Distributors', href: '/distributors' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm transition-all duration-300 inline-flex items-center gap-2 group"
                    style={{ color: '#cccccc' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#CE8946';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#cccccc';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2" style={{ color: '#CE8946' }}>
              <span className="w-6 h-0.5 bg-[#CE8946]" />
              Get in Touch
            </h4>

            <div className="space-y-6">
              {/* Office Address */}
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#CE8946' }} />
                <div>
                  <h5 className="text-sm font-semibold mb-1" style={{ color: '#ffffff' }}>
                    Head Office
                  </h5>
                  <p className="text-sm leading-relaxed" style={{ color: '#cccccc' }}>
                    D-612 Essbel CHS, Lokhandwala Township<br />
                    Kandivali East, Mumbai – 400 101<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Factory */}
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#CE8946' }} />
                <div>
                  <h5 className="text-sm font-semibold mb-1" style={{ color: '#ffffff' }}>
                    Factory
                  </h5>
                  <p className="text-sm leading-relaxed" style={{ color: '#cccccc' }}>
                    Praava Graphics<br />
                    Vasai, Mumbai, Maharashtra
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 group">
                  <Phone className="h-4 w-4" style={{ color: '#CE8946' }} />
                  <a
                    href="tel:+919892500282"
                    className="text-sm transition-all duration-300 relative"
                    style={{ color: '#cccccc' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#CE8946'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'}
                  >
                    +91 98925 00282
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <Phone className="h-4 w-4" style={{ color: '#CE8946' }} />
                  <a
                    href="tel:+919820197624"
                    className="text-sm transition-all duration-300 relative"
                    style={{ color: '#cccccc' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#CE8946'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'}
                  >
                    +91 98201 97624
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" style={{ color: '#CE8946' }} />
                <a
                  href="mailto:info@dapepl.com"
                  className="text-sm transition-all duration-300"
                  style={{ color: '#cccccc' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#CE8946'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#cccccc'}
                >
                  info@dapepl.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: '#1a1a1a' }}
        >
          <p
            className="text-xs cursor-default select-none transition-colors duration-300"
            style={{ color: '#666666' }}
            onClick={handleSecretClick}
          >
            © {currentYear} <span style={{ color: '#CE8946' }}>Praava Graphics</span> - DAP Engineering Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-xs transition-colors duration-300"
              style={{ color: '#666666' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#CE8946'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs transition-colors duration-300"
              style={{ color: '#666666' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#CE8946'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
