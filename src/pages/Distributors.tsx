import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, Handshake, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const distributorBenefits = [
  {
    icon: Globe,
    title: "Pan-India Network",
    desc: "Access to our distribution network across India, Middle East and Europe."
  },
  {
    icon: Handshake,
    title: "Technical Support",
    desc: "Factory-trained technical support team with 60+ years combined experience."
  },
  {
    icon: Award,
    title: "Quality Products",
    desc: "Premium log stackers, web stackers and conveyors engineered for durability."
  },
  {
    icon: Users,
    title: "Training & Installation",
    desc: "Comprehensive training on installation, operation and maintenance."
  },
];

const productLines = [
  {
    category: "Manufacturing Equipment",
    products: ["Log Stackers", "Web Stackers (Mini & Compensating)", "Belt Conveyors", "Custom Stacker Solutions"]
  },
  {
    category: "Service Solutions",
    products: ["Press Installation Services", "Press Rebuild Services", "Technical Troubleshooting", "Performance Optimization"]
  },
  {
    category: "Spare Parts",
    products: ["Stacker Components", "Conveyor Parts", "Press Components", "Folder & Gripper Parts"]
  },
  {
    category: "Used Equipment",
    products: ["Used Web-Offset Presses", "Technical Evaluation Services", "Press Sourcing", "After-Sales Support"]
  },
];

const Distributors = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-foreground overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-20">
          <div className="flex items-center gap-2 mb-8">
            <Link to="/" className="text-background/60 hover:text-background text-sm">Home</Link>
            <span className="text-background/40">→</span>
            <span className="text-background text-sm">Distributors</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
            Become a DAP Distributor
          </h1>
          <p className="text-xl text-background/70 max-w-2xl">
            Partner with India's pioneer in stacker manufacturing and expand your business in the printing press industry.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#f5f1eb' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-primary">⟶</span>
            <span className="text-xs tracking-[0.2em] text-muted-foreground">WHY PARTNER WITH DAP</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-16 max-w-2xl">
            Join our network of trusted distributors serving the printing press industry across India and beyond.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {distributorBenefits.map((benefit, i) => (
              <div key={i} className="bg-background p-8 hover:shadow-lg transition-shadow">
                <benefit.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Lines */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12">
            Product & Service Lines
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {productLines.map((line, i) => (
              <div key={i} className="border border-border p-8 hover:border-primary transition-colors">
                <h3 className="text-xl font-medium text-foreground mb-6">{line.category}</h3>
                <ul className="space-y-3">
                  {line.products.map((product, j) => (
                    <li key={j} className="flex items-center gap-3 text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Distributor */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-background mb-6">
                Distributor Requirements
              </h2>
              <p className="text-background/70 mb-8">
                We're looking for qualified partners with experience in the printing press industry. As a DAP distributor, you'll receive:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Competitive dealer pricing on all products",
                  "Exclusive territory opportunities",
                  "Factory training and technical support",
                  "Marketing materials and sales support",
                  "Direct access to spare parts inventory",
                  "Installation and commissioning assistance",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-background">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Partnership Image */}
            <div className="aspect-square overflow-hidden rounded">
              <img 
                src="/images/distributors/partnership.jpg" 
                alt="DAP distributor partnership opportunities"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-primary">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-medium text-primary-foreground mb-2">
              Interested in becoming a DAP distributor?
            </h2>
            <p className="text-primary-foreground/70">Contact us to discuss partnership opportunities in your region.</p>
          </div>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Distributors;
