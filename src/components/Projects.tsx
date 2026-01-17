import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const projects = [
  {
    number: "01",
    title: "Log Stacker Program\nfor Book Printer",
    location: "Vasai, Maharashtra, India",
    industry: "Book & Educational Printing",
    service: "Manufacturing • Custom Log Stackers",
    image: "/images/Home/products/product-log-stacker.jpg",
    alt: "DAP Log Stacker installation for book printing facility"
  },
  {
    number: "02",
    title: "Web-Offset Press Rebuild\nfor Newspaper Plant",
    location: "Mumbai Region, India",
    industry: "Newspaper & Newsprint",
    service: "Press Relocation • Installation • Rebuild",
    image: "/images/Home/products/product-web-stacker.jpg",
    alt: "Web-offset press rebuild and installation project"
  },
  {
    number: "03",
    title: "Conveyor & Stacker Line\nfor Commercial Printer",
    location: "Mumbai, Maharashtra, India",
    industry: "Commercial & Packaging Print",
    service: "Conveyor Systems • Compensating Stackers",
    image: "/images/Home/products/product-conveyor.jpg",
    alt: "Complete conveyor and stacker system installation"
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16 md:mb-24">
          <div>
            {/* Section Label */}
            <div
              className="flex items-center gap-3 mb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
              }}
            >
              <span className="text-xs tracking-[0.2em]" style={{ color: '#c9a227' }}>——</span>
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: '#1a1a1a' }}>
                Featured Products
              </span>
            </div>

            {/* Description */}
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed max-w-xl"
              style={{
                color: '#1a1a1a',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.8s ease-out 0.12s, transform 0.8s ease-out 0.12s",
              }}
            >
              Our products success is driven by our commitment to quality and affordability, with customers rewarding us with{" "}
              <span style={{ color: '#999999' }}>repeat orders.</span>
            </p>
          </div>

          {/* View All Projects Link */}
          <Link
            to="/Products"
            className="inline-flex items-center gap-2 text-sm mt-8 md:mt-0 group"
            style={{
              color: '#1a1a1a',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease-out 0.24s, transform 0.8s ease-out 0.24s",
            }}
          >
            View All Products
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Scroll Stack Projects */}
      <ScrollStack
        useWindowScroll={true}
        itemDistance={40}
        itemScale={0.015}
        itemStackDistance={12}
        stackPosition="15%"
        scaleEndPosition="5%"
        baseScale={0.92}
      >
        {projects.map((project) => (
          <ScrollStackItem key={project.number}>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Left Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    {/* Project Number */}
                    <span
                      className="text-sm mb-4 block"
                      style={{ color: '#999999' }}
                    >
                      {project.number}
                    </span>

                    {/* Project Title */}
                    <h3
                      className="text-2xl md:text-3xl font-medium mb-8 whitespace-pre-line"
                      style={{ color: '#1a1a1a' }}
                    >
                      {project.title}
                    </h3>

                    {/* Project Details */}
                    <div className="space-y-4">
                      <div>
                        <span
                          className="text-xs tracking-[0.1em] uppercase block mb-1"
                          style={{ color: '#999999' }}
                        >
                          Location
                        </span>
                        <span style={{ color: '#1a1a1a' }}>{project.location}</span>
                      </div>

                      <div>
                        <span
                          className="text-xs tracking-[0.1em] uppercase block mb-1"
                          style={{ color: '#999999' }}
                        >
                          Industry
                        </span>
                        <span style={{ color: '#1a1a1a' }}>{project.industry}</span>
                      </div>

                      <div>
                        <span
                          className="text-xs tracking-[0.1em] uppercase block mb-1"
                          style={{ color: '#999999' }}
                        >
                          Service
                        </span>
                        <span style={{ color: '#1a1a1a' }}>{project.service}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="aspect-[4/3] md:aspect-[3/2] rounded overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};

export default Projects;
