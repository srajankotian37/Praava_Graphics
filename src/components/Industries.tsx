import { useEffect, useRef, useState } from "react";
import { BookOpen, Newspaper, Package } from "lucide-react";

const industries = [
  {
    icon: BookOpen,
    title: "Book & Educational",
    items: [
      "High-Volume Book Printers",
      "Educational Publishers",
      "Log Stacking for Signatures",
      "Long-Run Production",
    ],
  },
  {
    icon: Newspaper,
    title: "Newspaper & Newsprint",
    items: [
      "Newspaper Printers",
      "Web Offset Plants",
      "Compensating Stackers",
      "Press Relocation & Rebuilds",
    ],
  },
  {
    icon: Package,
    title: "Commercial & Packaging",
    items: [
      "Commercial Web Printers",
      "Catalogues and Magazines",
      "Packaging Inserts",
      "Custom Conveyor Integration",
    ],
  },
];

const Industries = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      className="py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        {/* SMALL HEADLINE */}
        <div
          className="flex items-center gap-3 mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <span
            className="text-base font-bold"
            style={{ color: "#d4a93a" }}
          >
            ⟶
          </span>
          <span className="text-xs font-semibold tracking-[0.28em] text-foreground">
            INDUSTRIES
          </span>
        </div>

        {/* DESCRIPTION */}
        <p
          className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground max-w-3xl mb-20 leading-snug"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            transitionDelay: "0.1s",
          }}
        >
          DAP supports a wide range of printing operations — from high-volume
          newspaper and book production to commercial and packaging environments.
        </p>

        {/* INDUSTRY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="bg-white relative transition-all duration-300 hover:-translate-y-2"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity 0.8s ease-out ${0.2 + index * 0.12}s,
                               transform 0.8s ease-out ${0.2 + index * 0.12}s`,
                }}
              >
                {/* TOP YELLOW LINE */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

                <div className="p-10">
                  {/* ICON */}
                  <div className="w-16 h-16 bg-primary flex items-center justify-center mb-10">
                    <Icon className="w-8 h-8 text-black" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-medium text-foreground mb-10 leading-tight">
                    {industry.title}
                  </h3>

                  {/* LIST */}
                  <ul className="space-y-4">
                    {industry.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-foreground/70 border-b border-border pb-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
