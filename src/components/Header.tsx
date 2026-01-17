import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";

const serviceCategories = [
  {
    title: "MANUFACTURING",
    services: [
      { label: "Log Stackers", href: "/services/log-stackers" },
      { label: "Web Stackers", href: "/services/webstackers" },
      { label: "Conveyors", href: "/services/conveyors" },
    ],
  },
  {
    title: "SERVICE",
    services: [
      { label: "Press Relocation", href: "/services/press-relocation" },
      { label: "Press Rebuilds", href: "/services/press-rebuilds" },
      { label: "Troubleshooting", href: "/services/service-troubleshooting" },
    ],
  },
  {
    title: "USED EQUIPMENT",
    services: [
      { label: "Press Sourcing", href: "/services/press-sourcing" },
      { label: "Technical Evaluation", href: "/services/technical-evaluation" },
      { label: "After-Sales Support", href: "/services/after-sales-support" },
    ],
  },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Products", href: "/products" },
  { label: "Used Equipment", href: "/used-equipment-sales" },
  { label: "Distributors", href: "/distributors" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesView, setMobileServicesView] = useState('main');
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState("/");
  const [logoError, setLogoError] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      setMobileServicesView('main');
    } else {
      document.body.style.overflow = "";
      setMobileServicesView('main');
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 transition-all duration-300">
        <div className="px-4 md:px-8 lg:px-16 xl:px-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50 group cursor-pointer">
            {!logoError ? (
              <img
                src="/images/Brand/logo-fulll.png"
                alt="Praava Graphics"
                className="w-auto object-contain transition-all duration-500 ease-out h-9 md:h-10 group-hover:scale-105"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="text-xl md:text-2xl font-bold tracking-tight px-3 py-1.5 transition-all duration-500 rounded text-white group-hover:scale-105 bg-[#CE8946]">
                Praava
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => {
                  link.hasDropdown && handleDropdownEnter();
                  setHoveredNav(link.href);
                }}
                onMouseLeave={() => {
                  link.hasDropdown && handleDropdownLeave();
                  setHoveredNav(null);
                }}
              >
                <Link
                  to={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-sm font-medium transition-all duration-300 relative group flex items-center gap-1 px-3 py-2 rounded-lg ${activeLink === link.href || (link.hasDropdown && activeLink.startsWith('/services'))
                    ? "text-gray-900 bg-[#CE8946]/10"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  )}
                  {/* Underline */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-0.5 bg-[#CE8946] transition-transform duration-300 origin-left ${activeLink === link.href || (link.hasDropdown && activeLink.startsWith('/services'))
                      ? 'scale-x-100'
                      : hoveredNav === link.href
                        ? 'scale-x-100'
                        : 'scale-x-0'
                      }`}
                  />
                </Link>

                {/* Mega Menu */}
                {link.hasDropdown && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-300 ease-out ${isServicesOpen
                      ? "opacity-100 visible translate-y-0 pointer-events-auto"
                      : "opacity-0 invisible -translate-y-4 pointer-events-none"
                      }`}
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#CE8946] rounded-full shadow-lg" />

                    <div className="bg-white border border-gray-200 shadow-2xl mt-1 min-w-[700px] rounded-xl overflow-hidden">
                      <div className="grid grid-cols-3 gap-0">
                        {serviceCategories.map((category) => (
                          <div
                            key={category.title}
                            className="p-6 border-l border-gray-200 hover:bg-gray-50 transition-colors duration-300"
                          >
                            <h4 className="text-xs font-bold text-gray-500 tracking-widest mb-4 flex items-center gap-2">
                              <span className="w-6 h-0.5 bg-[#CE8946]" />
                              {category.title}
                            </h4>
                            <ul className="space-y-2">
                              {category.services.map((service) => (
                                <li key={service.href}>
                                  <Link
                                    to={service.href}
                                    onClick={() => handleLinkClick(service.href)}
                                    onMouseEnter={() => setHoveredService(service.href)}
                                    onMouseLeave={() => setHoveredService(null)}
                                    className={`flex items-center justify-between text-sm py-2 px-3 rounded-lg transition-all duration-200 relative ${activeLink === service.href
                                      ? "text-gray-900 font-semibold bg-[#CE8946]/10"
                                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                      }`}
                                  >
                                    <span>{service.label}</span>
                                    <ArrowRight
                                      className={`h-4 w-4 transition-all duration-300 ${hoveredService === service.href
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-2'
                                        }`}
                                    />
                                    {/* Underline on hover */}
                                    <span
                                      className={`absolute bottom-0 left-3 right-3 h-0.5 bg-[#CE8946] transition-transform duration-300 origin-left ${hoveredService === service.href || activeLink === service.href ? 'scale-x-100' : 'scale-x-0'
                                        }`}
                                    />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Phone Number */}
            <a
              href="tel:+919820197624"
              className="hidden md:flex items-center gap-2 text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg group text-gray-700 hover:text-gray-900 hover:bg-gray-100 relative"
              onMouseEnter={(e) => {
                const underline = e.currentTarget.querySelector('.phone-underline') as HTMLElement;
                if (underline) underline.style.transform = 'scaleX(1)';
              }}
              onMouseLeave={(e) => {
                const underline = e.currentTarget.querySelector('.phone-underline') as HTMLElement;
                if (underline) underline.style.transform = 'scaleX(0)';
              }}
            >
              <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>+91 98201 97624</span>
              {/* Underline */}
              <span className="phone-underline absolute bottom-0 left-3 right-3 h-0.5 bg-[#CE8946] transition-transform duration-300 origin-left scale-x-0" />
            </a>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 bg-[#CE8946] text-white hover:bg-[#B67739] relative overflow-hidden group"
            >
              <span className="relative z-10">Contact</span>
              <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              {/* Shine effect on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>

            {/* Perfect X Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg transition-all duration-300 text-gray-900 hover:bg-gray-100 relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <span className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45' : 'rotate-0 translate-y-[-4px]'
                }`} />
              <span className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45' : 'rotate-0 translate-y-[4px]'
                }`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900 shadow-2xl transition-transform duration-500 ease-out overflow-hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-white hover:bg-white/10 rounded-lg transition-colors z-10"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Main Menu View */}
          <div className={`absolute inset-0 pt-20 pb-8 px-6 overflow-y-auto transition-transform duration-500 ease-out ${mobileServicesView === 'main' ? 'translate-x-0' : '-translate-x-full'
            }`}>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.href} className="overflow-hidden">
                  {link.hasDropdown ? (
                    <button
                      onClick={() => setMobileServicesView('services')}
                      className={`w-full flex items-center justify-between text-lg font-bold py-4 px-4 rounded-xl transition-all duration-300 text-white hover:bg-white/5 relative ${activeLink.startsWith('/services') ? 'text-[#CE8946] bg-white/10' : ''
                        }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="h-5 w-5" />
                      {/* Underline */}
                      <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#CE8946] transition-transform duration-300 origin-left ${activeLink.startsWith('/services') ? 'scale-x-100' : 'scale-x-0'
                        }`} />
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={`block text-lg font-bold py-4 px-4 rounded-xl transition-all duration-300 text-white hover:bg-white/5 relative ${activeLink === link.href ? 'text-[#CE8946] bg-white/10' : ''
                        }`}
                    >
                      {link.label}
                      {/* Underline */}
                      <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#CE8946] transition-transform duration-300 origin-left ${activeLink === link.href ? 'scale-x-100' : 'scale-x-0'
                        }`} />
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+919820197624"
                className="flex items-center gap-3 text-base font-medium text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-xl hover:bg-white/5"
              >
                <Phone className="h-5 w-5" />
                <span>+91 98201 97624</span>
              </a>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-6 py-4 text-base font-bold rounded-full transition-all duration-300 active:scale-95 bg-[#CE8946] text-white hover:bg-[#B67739]"
              >
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services Submenu View */}
          <div className={`absolute inset-0 pt-20 pb-8 px-6 overflow-y-auto transition-transform duration-500 ease-out ${mobileServicesView === 'services' ? 'translate-x-0' : 'translate-x-full'
            }`}>
            <button
              onClick={() => setMobileServicesView('main')}
              className="flex items-center gap-2 text-white hover:text-[#CE8946] transition-colors mb-6 py-2 px-2 -ml-2"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
              <span className="font-semibold">Back</span>
            </button>

            <h3 className="text-2xl font-bold text-white mb-6">Services</h3>

            <div className="space-y-6">
              {serviceCategories.map((category) => (
                <div key={category.title}>
                  <h4 className="text-xs font-bold tracking-widest mb-3 flex items-center gap-2 text-[#CE8946]">
                    <span className="w-4 h-0.5 bg-[#CE8946]" />
                    {category.title}
                  </h4>
                  <ul className="space-y-1 pl-6">
                    {category.services.map((service) => (
                      <li key={service.href}>
                        <Link
                          to={service.href}
                          onClick={() => handleLinkClick(service.href)}
                          className={`block py-2.5 px-3 text-sm rounded-lg transition-all duration-200 text-gray-300 hover:text-white hover:bg-white/5 relative ${activeLink === service.href ? 'text-[#CE8946] font-semibold bg-white/10' : ''
                            }`}
                        >
                          {service.label}
                          {/* Underline */}
                          <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-[#CE8946] transition-transform duration-300 origin-left ${activeLink === service.href ? 'scale-x-100' : 'scale-x-0'
                            }`} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
