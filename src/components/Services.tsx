import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";


/* =======================
   SERVICE DATA
======================= */
const serviceTabs = [
  {
    id: "manufacturing",
    label: "MANUFACTURING",
    services: [
      {
        title: "Log Stackers",
        description:
          "DAP is the industry leader in log stackers for book and commercial printers, capable of handling tabloid, quarter and double-parallel folds at speeds up to 50,000 IPH with customizable bundle sizes.",
        href: "/services/log-stacker",
        image: "/images/Home/services/card-log-stacker.jpg",
        alt: "Log Stackers",
      },
      {
        title: "Web Stackers",
        description:
          "Versatile web stackers designed for lower-volume operations, handling all product sizes in tabloid, quarter and double-parallel folds at speeds up to 40,000 IPH with rugged, stable construction.",
        href: "/services/webstacker",
        image: "/images/Home/services/card-web-stacker.jpg",
        alt: "Web Stackers",
      },
      {
        title: "Conveyors",
        description:
          "Custom belt conveyors built to integrate seamlessly with existing folders and stackers, ensuring smooth product flow and reliable transfer throughout the printing line.",
        href: "/services/conveyor",
        image: "/images/Home/services/card-conveyor.jpg",
        alt: "Conveyors",
      },
    ],
  },
  {
    id: "service",
    label: "SERVICE",
    services: [
      {
        title: "Press Relocation",
        description:
          "Complete relocation, installation and commissioning of web-offset presses of all makes, specializing in Harris, Heidelberg Harris and GOSS presses across India, Middle East and Europe.",
        href: "/services/press-relocation",
        image: "/images/Home/services/card-press-relocation.jpg",
        alt: "Press Relocation",
      },
      {
        title: "Press Rebuilds",
        description:
          "Rebuilding and upgrading web-offset presses including Baker Perkins G16, GOSS M130, Heidelberg Harris M1000BE, Komori System 36, GOSS Community, Manugraph Cityline and Harris NCH400.",
        href: "/services/press-rebuilds",
        image: "/images/Home/services/card-press-rebuilds.jpg",
        alt: "Press Rebuilds",
      },
      {
        title: "Troubleshooting",
        description:
          "With over 60 years combined experience and factory training at Heidelberg Harris in the USA, the DAP team provides expert problem-solving and performance optimization for web-offset operations.",
        href: "/services/service-troubleshooting",
        image: "/images/Home/services/card-service-troubleshooting.jpg",
        alt: "Service & Troubleshooting",
      },
    ],
  },
  {
    id: "used-equipment",
    label: "USED EQUIPMENT",
    services: [
      {
        title: "Press Sourcing",
        description:
          "Sourcing and supply of used web-offset presses matched to customer format, speed and budget requirements, leveraging deep knowledge of press condition and performance.",
        href: "/services/press-sourcing",
        image: "/images/Home/services/card-press-sourcing.jpg",
        alt: "Press Sourcing",
      },
      {
        title: "Technical Evaluation",
        description:
          "Professional inspection and evaluation of used presses to help buyers understand mechanical condition, required work and realistic performance expectations before purchase.",
        href: "/services/technical-evaluation",
        image: "/images/Home/services/card-technical-evaluation.jpg",
        alt: "Technical Evaluation",
      },
      {
        title: "After-Sales Support",
        description:
          "Unlike typical brokers, DAP provides ongoing after-sales service and consultancy to keep used presses productive, including spare parts guidance and troubleshooting.",
        href: "/services/after-sales-support",
        image: "/images/Home/services/card-after-sales.jpg",
        alt: "After Sales Support",
      },
    ],
  },
];


/* =======================
   COMPONENT
======================= */
const Services = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("manufacturing");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );


    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);


  const activeServices =
    serviceTabs.find((tab) => tab.id === activeTab)?.services || [];

  const activeTabLabel =
    serviceTabs.find((tab) => tab.id === activeTab)?.label || "";


  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: "#f5f1eb" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* SMALL SERVICE HEADLINE */}
        <div
          className="flex items-center gap-2 mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <span style={{ color: "#d4a93a" }}>⟶</span>
          <span className="text-xs tracking-[0.2em] text-muted-foreground">
            OUR SERVICES
          </span>
        </div>


        {/* DAP DESCRIPTION */}
        <p
          className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground max-w-3xl mb-16 leading-relaxed"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            transitionDelay: "0.1s",
          }}
        >
          DAP Engineering provides manufacturing, service and used-equipment
          solutions for web-offset printers, combining in-house stacker and
          conveyor production with decades of press experience.
        </p>


        {/* TABS - Desktop */}
        <div className="hidden md:flex mb-12">
          {serviceTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex-1 py-5 text-xs tracking-[0.15em]"
              style={{
                backgroundColor:
                  activeTab === tab.id ? "#ffffff" : "#e8e4de",
                color: activeTab === tab.id ? "#1a1a1a" : "#666666",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* DROPDOWN - Mobile */}
        <div className="md:hidden mb-12 relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full py-5 px-6 text-xs tracking-[0.15em] flex items-center justify-between bg-white"
            style={{ color: "#1a1a1a" }}
          >
            {activeTabLabel}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 bg-white z-10 shadow-lg">
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full py-4 px-6 text-xs tracking-[0.15em] text-left"
                  style={{
                    backgroundColor:
                      activeTab === tab.id ? "#f5f1eb" : "#ffffff",
                    color: activeTab === tab.id ? "#1a1a1a" : "#666666",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>


        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeServices.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white overflow-hidden"
              style={{
                height: "550px",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: "all 0.8s ease",
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              {/* IMAGE */}
              <div className="h-[360px] group-hover:h-[300px] transition-all duration-500 ease-out overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover"
                />
              </div>


              {/* TEXT */}
              <div className="absolute left-0 right-0 bottom-16 px-6 text-center transition-all duration-500 ease-out h-[70px] group-hover:h-[180px]">
                <h3 className="text-2xl md:text-3xl font-medium mb-6">
                  {service.title}
                </h3>


                <div className="translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>


              {/* DIVIDER */}
              <div className="absolute left-8 right-8 bottom-16 h-px bg-neutral-300 transition-opacity duration-300 group-hover:opacity-0" />


              {/* BUTTON */}
              <Link
                to={service.href}
                className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-center text-sm font-medium bg-white z-20"
              >
                <span className="flex items-center gap-2 group-hover:hidden">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>


                <span
                  className="hidden group-hover:flex items-center gap-1 w-full h-full justify-center"
                  style={{ backgroundColor: "#B67739", color: "#1a1a1a" }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Services;
