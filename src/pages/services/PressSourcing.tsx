import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Cpu, Gauge, Radio, Settings } from "lucide-react";
import { Link } from "react-router-dom";


const PressSourcing = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero - Tech Style */}
      <section className="relative min-h-[70vh] flex items-center bg-foreground overflow-hidden">
        {/* Grid Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="w-6 h-6 text-primary" />
                  <span className="text-primary text-sm tracking-wider">USED EQUIPMENT</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
                  Press Sourcing
                </h1>
                <p className="text-lg text-background/70 mb-8">
                  Sourcing and supply of used web-offset presses matched to your format, speed and budget requirements, leveraging deep knowledge of press condition and performance.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Find Your Press
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="hidden lg:grid grid-cols-2 gap-4">
                <div className="aspect-square border border-background/20 flex items-center justify-center">
                  <Gauge className="w-16 h-16 text-primary" />
                </div>
                <div className="aspect-square border border-background/20 flex items-center justify-center mt-8">
                  <Radio className="w-16 h-16 text-background/40" />
                </div>
                <div className="aspect-square border border-background/20 flex items-center justify-center -mt-8">
                  <Settings className="w-16 h-16 text-background/40" />
                </div>
                <div className="aspect-square border border-background/20 flex items-center justify-center">
                  <Cpu className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Press Matching",
                services: [
                  "Format requirements analysis",
                  "Speed capacity matching",
                  "Budget optimization",
                  "Technology recommendations",
                  "Configuration options",
                ]
              },
              {
                title: "Global Network",
                services: [
                  "Worldwide press sourcing",
                  "Manufacturer connections",
                  "Market intelligence",
                  "Availability tracking",
                  "Price negotiation",
                ]
              },
              {
                title: "Complete Support",
                services: [
                  "Technical evaluation",
                  "Purchase facilitation",
                  "Logistics coordination",
                  "Installation planning",
                  "Commissioning support",
                ]
              },
            ].map((category, i) => (
              <div key={i}>
                <h3 className="text-xl font-medium text-foreground mb-6 pb-4 border-b-2 border-primary">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.services.map((service, j) => (
                    <li key={j} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Certifications */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#f5f1eb' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 text-center">
            Press Makes We Source
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Harris",
              "Heidelberg Harris",
              "GOSS",
              "Baker Perkins",
              "Komori",
              "Manugraph",
              "Mitsubishi",
              "KBA",
            ].map((cert, i) => (
              <div 
                key={i}
                className="py-6 px-4 bg-background text-center text-sm font-medium text-foreground"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Industries */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-foreground">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-background mb-12">
            Why Choose DAP for Press Sourcing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Deep Technical Knowledge",
                desc: "Over 60 years combined experience means we understand what makes a good used press and what problems to avoid."
              },
              {
                title: "Honest Assessment",
                desc: "We provide realistic evaluations of press condition and required work - no surprises after purchase."
              },
              {
                title: "Budget Alignment",
                desc: "We match presses to your actual budget, considering not just purchase price but installation and commissioning costs."
              },
              {
                title: "Ongoing Support",
                desc: "Unlike typical brokers, we support you after the sale with service, parts and troubleshooting expertise."
              },
            ].map((item, i) => (
              <div 
                key={i}
                className="py-8 px-6 border border-background/20"
              >
                <h3 className="text-xl font-medium text-background mb-3">{item.title}</h3>
                <p className="text-background/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-primary-foreground mb-6">
            Looking for a Used Press?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Contact DAP to discuss your requirements - format, speed, budget and timeline.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Start Your Search
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


      <Footer />
    </main>
  );
};


export default PressSourcing;
