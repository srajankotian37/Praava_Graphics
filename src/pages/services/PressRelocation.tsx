import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Clock, Shield, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";


const PressRelocation = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero - Boxed with Background */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#f5f1eb' }}>
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-primary text-sm tracking-wider mb-6">SERVICE</span>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Press Relocation & Installation
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Complete relocation, installation and commissioning of web-offset presses. We handle every aspect from dismantling to start-up across India, Middle East and Europe.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div 
              className="aspect-[4/3] bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}
            />
          </div>
        </div>
      </section>


      {/* Key Benefits */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Expert Team", desc: "60+ years combined experience in web-offset presses" },
              { icon: Clock, title: "Fast Turnaround", desc: "Efficient planning and execution to minimize downtime" },
              { icon: Shield, title: "All Press Makes", desc: "Harris, Heidelberg, GOSS, Komori, Manugraph expertise" },
              { icon: BarChart3, title: "Complete Service", desc: "From dismantling to final commissioning and training" },
            ].map((item, i) => (
              <div key={i} className="p-6 border border-border hover:border-primary transition-colors">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Services Accordion Style */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-foreground">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-background mb-16 text-center">
            Our Services
          </h2>
          <div className="space-y-0">
            {[
              { title: "Site Survey & Planning", desc: "Foundation checks, layout design and logistics coordination" },
              { title: "Press Dismantling", desc: "Careful dismantling with documentation and component tagging" },
              { title: "Transportation Management", desc: "Coordination of specialized transport and customs clearance" },
              { title: "Foundation & Installation", desc: "Mechanical installation, leveling and alignment to OEM specs" },
              { title: "Commissioning & Start-Up", desc: "System checks, test runs and performance verification" },
              { title: "Operator Training", desc: "Hands-on training for press crew on operation and maintenance" },
            ].map((item, i) => (
              <div 
                key={i} 
                className="py-6 border-b border-background/20 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium text-background mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-background/60">{item.desc}</p>
                  </div>
                  <span className="text-4xl font-light text-background/20">0{i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Industries */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#f5f1eb' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12">
            Press Makes We Handle
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              "Harris",
              "Heidelberg Harris",
              "GOSS",
              "Baker Perkins",
              "Komori",
              "Manugraph",
              "Mitsubishi",
              "KBA",
            ].map((industry, i) => (
              <span 
                key={i}
                className="px-6 py-3 bg-background text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-primary-foreground mb-6">
            Planning a Press Move?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Contact DAP for complete relocation and installation services.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Contact Us Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


      <Footer />
    </main>
  );
};


export default PressRelocation;
