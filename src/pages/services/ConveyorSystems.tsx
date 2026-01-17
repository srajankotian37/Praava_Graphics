import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Wrench, Cog, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const ConveyorSystems = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero - Minimal with Large Typography */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Link to="/services" className="text-muted-foreground hover:text-foreground text-sm">Services</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground text-sm">Manufacturing</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-none mb-8">
            Conveyor<br />Systems
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-xl text-muted-foreground max-w-xl">
              Custom belt conveyors for seamless press line integration. Engineered for smooth product transfer from folder to stacker.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Image Mosaic - 6 Images */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Image 1 - Top Left */}
          <div className="aspect-square overflow-hidden rounded">
            <img 
              src="/images/conveyor-systems/mosaic-detail.jpg" 
              alt="Conveyor system detailed view"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          
          {/* Image 2 - Top Center Left */}
          <div className="aspect-square overflow-hidden rounded">
            <img 
              src="/images/conveyor-systems/mosaic-materials.jpg" 
              alt="Conveyor materials and components"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          
          {/* Image 3 - Hero Wide (spans 2 cols, 2 rows) */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded">
            <img 
              src="/images/conveyor-systems/applications.png" 
              alt="DAP Conveyor system wide overview"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          
          {/* Image 4 - Bottom Left */}
          <div className="aspect-square overflow-hidden rounded">
            <img 
              src="/images/conveyor-systems/mosaic-motor.jpg" 
              alt="Conveyor motor and drive system"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          
          {/* Image 5 - Bottom Center Left */}
          <div className="aspect-square overflow-hidden rounded">
            <img 
              src="/images/conveyor-systems/mosaic-integration.jpg" 
              alt="Conveyor system integration"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Services Icons */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Wrench, title: "Custom Lengths", desc: "Belt conveyors sized to your press floor layout and distance" },
              { icon: Cog, title: "Variable Widths", desc: "Width configurations matching your product size range" },
              { icon: Shield, title: "Speed Control", desc: "Variable speed drives synchronized with folder output" },
              { icon: Zap, title: "Quick Integration", desc: "Designed for easy installation with existing stackers" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-background mb-3">{item.title}</h3>
                <p className="text-sm text-background/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#f5f1eb' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                Applications We Support
              </h2>
              <div className="space-y-4">
                {[
                  "Folder to Log Stacker Transfer",
                  "Web Stacker Infeed Lines",
                  "Compensating Stacker Systems",
                  "Multi-Level Product Routing",
                  "Newspaper & Commercial Lines",
                ].map((material, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-4 p-4 bg-background hover:shadow-md transition-shadow"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-foreground">{material}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Applications Image */}
            <div className="aspect-square overflow-hidden rounded">
              <img 
                src="/images/conveyor-systems/applications.png" 
                alt="Conveyor system real-world applications"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-2">
              Need a Conveyor System?
            </h2>
            <p className="text-muted-foreground">Let's discuss your press line layout and product flow requirements.</p>
          </div>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-colors"
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

export default ConveyorSystems;
