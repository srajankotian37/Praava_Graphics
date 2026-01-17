import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Lightbulb, PenTool, Hammer, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PressRebuilds = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero - Center Aligned */}
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-20 text-center bg-foreground">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block border border-primary text-primary text-xs tracking-wider px-4 py-2 mb-8">
            SERVICE
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6">
            Press Rebuilds & Refurbishment
          </h1>
          <p className="text-xl text-background/70 mb-10 max-w-2xl mx-auto">
            Extend your press life with complete mechanical rebuilds. Restore performance to OEM standards at a fraction of replacement cost.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-16 text-center">
            Our Rebuild Process
          </h2>
          <div className="grid md:grid-cols-3 gap-0">
            {[
              { icon: Lightbulb, phase: "Phase 1", title: "Assessment", desc: "Complete inspection of press condition and component wear analysis" },
              { icon: PenTool, phase: "Phase 2", title: "Refurbishment", desc: "Precision machining, bearing replacement and component restoration" },
              { icon: Hammer, phase: "Phase 3", title: "Commissioning", desc: "Reassembly, alignment and performance testing to OEM specs" },
            ].map((item, i) => (
              <div 
                key={i} 
                className="relative p-8 border border-border group hover:bg-muted transition-colors"
              >
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
                <span className="text-xs text-primary tracking-wider">{item.phase}</span>
                <item.icon className="w-12 h-12 text-foreground my-6" />
                <h3 className="text-2xl font-medium text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#f5f1eb' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                Why Rebuild Your Press?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                A properly executed rebuild restores your press to like-new condition, extending its productive life by 15-20 years. Our comprehensive approach addresses all critical wear points while upgrading components where beneficial.
              </p>
              
              {/* Rebuilds Work Image */}
              <div className="aspect-video overflow-hidden rounded">
                <img 
                  src="/images/press-rebuilds/rebuilds-work.jpg" 
                  alt="DAP press rebuild and refurbishment work"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                { title: "Cost Effective", desc: "60-70% less than new press investment with similar performance" },
                { title: "Minimal Downtime", desc: "Planned rebuild schedule coordinated with your production needs" },
                { title: "OEM Standards", desc: "All work performed to original equipment manufacturer specifications" },
                { title: "Improved Reliability", desc: "New bearings, seals and critical components eliminate failures" },
                { title: "Performance Restoration", desc: "Return to original speed, registration and print quality" },
                { title: "Extended Life", desc: "Add 15-20 years of productive operation to your press" },
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-primary">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "60%", label: "Cost Savings" },
            { value: "20 Years", label: "Extended Life" },
            { value: "100%", label: "Performance Restored" },
            { value: "50+", label: "Presses Rebuilt" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            Ready to Rebuild Your Press?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact DAP for a comprehensive press assessment and rebuild proposal.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PressRebuilds;
