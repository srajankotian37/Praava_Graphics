import { useEffect, useRef, useState } from "react";

const partners = [
  { name: "Repro India Ltd." },
  { name: "Navneet Publication India Ltd." },
  { name: "Hindustan Times" },
  { name: "Manipal Press" },
  { name: "Thomson Press" },
  { name: "Indian Express" },
  { name: "Print House International" },
  { name: "Print-O-Pac" },
];

const Partners = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div
          className="flex items-center gap-3 mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <span className="text-xs tracking-[0.2em]" style={{ color: '#c9a227' }}>——</span>
          <span className="text-xs tracking-[0.2em] uppercase" style={{ color: '#1a1a1a' }}>
            Trusted By Leading Printers
          </span>
        </div>

        {/* Partners Grid */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ 
            borderTop: '1px solid #e5e5e5',
            borderLeft: '1px solid #e5e5e5',
          }}
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-8 md:p-12 min-h-[140px] md:min-h-[180px]"
              style={{
                borderRight: '1px solid #e5e5e5',
                borderBottom: '1px solid #e5e5e5',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.8s ease-out ${0.1 + index * 0.08}s, transform 0.8s ease-out ${0.1 + index * 0.08}s`,
              }}
            >
              {/* Logo Placeholder */}
              <div 
                className="w-full max-w-[160px] h-12 flex items-center justify-center rounded"
                style={{ backgroundColor: '#f5f5f5' }}
              >
                <span 
                  className="text-xs text-center px-2"
                  style={{ color: '#999999' }}
                >
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
