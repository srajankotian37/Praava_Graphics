import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const WebStackers = () => {
  const steps = [
    { number: "01", title: "Design Consultation", desc: "Understanding your press configuration and product requirements" },
    { number: "02", title: "Engineering", desc: "Custom design and CAD drawings for your specific application" },
    { number: "03", title: "Fabrication", desc: "Precision manufacturing at our Vasai facility with quality checks" },
    { number: "04", title: "Testing", desc: "Pre-delivery speed and product handling verification" },
    { number: "05", title: "Installation", desc: "On-site commissioning and operator training support" },
  ];


  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero - Full Width with Overlay */}
      <section className="relative min-h-[70vh] flex items-end">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundColor: '#1a1a1a',
            backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'), linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)"
          }}
        />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-20">
          <div className="max-w-4xl">
            <span className="inline-block text-primary text-sm tracking-wider mb-4">MANUFACTURING</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Web Stackers
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mb-8">
              Versatile stackers for lower-volume printing operations, handling all product sizes at speeds up to 40,000 IPH with rugged construction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/projects"
                className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-foreground transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Process Timeline */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-foreground">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-background mb-4">
            Our Process
          </h2>
          <p className="text-background/60 mb-16 max-w-xl">
            A systematic approach ensuring quality at every stage
          </p>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-0 right-0 top-8 h-px bg-background/20" />
            
            <div className="grid md:grid-cols-5 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="text-5xl font-bold text-primary mb-4">{step.number}</div>
                  <h3 className="text-lg font-medium text-background mb-2">{step.title}</h3>
                  <p className="text-sm text-background/60">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Capabilities Grid */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#f5f1eb' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-16">
            What We Deliver
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Product Flexibility", items: ["Tabloid folds", "Quarter folds", "Double-parallel", "Variable product sizes"] },
              { title: "Performance", items: ["40,000 IPH capacity", "Stable operation", "Minimal maintenance", "Reliable stacking"] },
              { title: "Customization", items: ["Right/left hand config", "Bundle size options", "Press integration", "Control systems"] },
            ].map((category, i) => (
              <div key={i} className="bg-background p-8">
                <h3 className="text-xl font-medium text-foreground mb-6 pb-4 border-b border-border">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            Need a Web Stacker for Your Press?
          </h2>
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


export default WebStackers;
