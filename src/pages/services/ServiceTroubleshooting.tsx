import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Mountain, Droplets, Route, TreePine } from "lucide-react";
import { Link } from "react-router-dom";


const ServiceTroubleshooting = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero - Diagonal Split */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundColor: '#3a3a3a',
            backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 40% 100%)'
          }}
        />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-xl">
            <span className="inline-block text-primary text-sm tracking-wider mb-6">SERVICE</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Service & Troubleshooting
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Expert problem-solving and performance optimization backed by over 60 years combined experience and factory training at Heidelberg Harris in the USA.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get Expert Help
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* Services Cards */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#f5f1eb' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            Complete Service Solutions
          </h2>
          <p className="text-muted-foreground mb-16 max-w-xl">
            From emergency breakdowns to performance optimization, our factory-trained team solves the toughest web-offset press challenges.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                icon: Mountain, 
                title: "Emergency Troubleshooting", 
                desc: "Rapid diagnosis and resolution of press breakdowns with experienced technicians who understand web-offset systems.",
                features: ["Quick diagnosis", "Root cause analysis", "Immediate solutions"]
              },
              { 
                icon: Droplets, 
                title: "Performance Optimization", 
                desc: "Fine-tuning press operations to achieve better registration, color consistency and maximum production speed.",
                features: ["Registration tuning", "Speed optimization", "Quality improvement"]
              },
              { 
                icon: Route, 
                title: "Preventive Maintenance", 
                desc: "Scheduled service programs to prevent failures and maintain peak press performance year-round.",
                features: ["Regular inspections", "Lubrication programs", "Component replacement"]
              },
              { 
                icon: TreePine, 
                title: "Technical Consultancy", 
                desc: "Expert advice on press operations, efficiency improvements and troubleshooting complex production issues.",
                features: ["Process analysis", "Efficiency audits", "Problem solving"]
              },
            ].map((service, i) => (
              <div 
                key={i} 
                className="bg-background p-8 hover:shadow-xl transition-shadow group"
              >
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-medium text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Equipment */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-background mb-8">
                Press Makes We Service
              </h2>
              <p className="text-background/70 mb-8">
                Factory-trained at Heidelberg Harris in the USA, our team has deep expertise across all major web-offset press manufacturers. We understand the mechanical, electrical and production aspects of every system.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Harris",
                  "Heidelberg Harris",
                  "GOSS",
                  "Baker Perkins",
                  "Komori",
                  "Manugraph",
                ].map((item, i) => (
                  <div key={i} className="py-3 px-4 border border-background/20 text-background/80 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }} />
              <div className="aspect-square bg-cover bg-center mt-8" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091012184-7d29ab4a6ba9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }} />
              <div className="aspect-square bg-cover bg-center -mt-8" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }} />
              <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }} />
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            Need Expert Troubleshooting?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact DAP for factory-trained expertise in web-offset press service and optimization.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Our Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


      <Footer />
    </main>
  );
};


export default ServiceTroubleshooting;
