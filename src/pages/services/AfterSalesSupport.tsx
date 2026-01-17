import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, Wrench, AlertTriangle, Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";


const AfterSalesSupport = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero - Service Focused */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-foreground">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-primary text-sm tracking-wider mb-6">USED EQUIPMENT</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
            After-Sales<br />Support
          </h1>
          <p className="text-xl text-background/70 max-w-2xl mb-8">
            Unlike typical brokers, DAP provides ongoing after-sales service and consultancy to keep used presses productive, including spare parts guidance and troubleshooting.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get Support
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="tel:+919820197624"
              className="inline-flex items-center gap-2 border border-background text-background px-8 py-4 text-sm font-medium hover:bg-background hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>
        </div>
      </section>


      {/* Service Types */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Ongoing Consultancy",
                desc: "Expert advice on press operations, production issues and performance optimization.",
                features: [
                  "Technical consultation",
                  "Production optimization",
                  "Problem diagnosis",
                  "Best practices guidance",
                ],
                color: "bg-primary"
              },
              {
                icon: AlertTriangle,
                title: "Troubleshooting Support",
                desc: "Factory-trained technicians available to help resolve mechanical and production issues.",
                features: [
                  "Remote diagnostics",
                  "On-site support",
                  "Emergency assistance",
                  "Root cause analysis",
                ],
                color: "bg-red-500"
              },
              {
                icon: Wrench,
                title: "Spare Parts Assistance",
                desc: "Help sourcing the right parts at the right price, leveraging our supplier network.",
                features: [
                  "Parts identification",
                  "Supplier connections",
                  "Price negotiation",
                  "Quality assurance",
                ],
                color: "bg-foreground"
              },
            ].map((service, i) => (
              <div key={i} className="border border-border">
                <div className={`${service.color} p-6`}>
                  <service.icon className="w-10 h-10 text-white mb-4" />
                  <h3 className="text-2xl font-medium text-white">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Turnaround Support */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#f5f1eb' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                Why DAP is Different
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Most used equipment brokers disappear after the sale. At DAP, we stay involved because we have the technical expertise to help you succeed. Our team has 60+ years combined experience and factory training - we understand these presses inside and out.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Years Experience", value: "60+" },
                  { label: "Presses Supported", value: "200+" },
                  { label: "Response Time", value: "24hrs" },
                  { label: "Customer Success", value: "95%" },
                ].map((stat, i) => (
                  <div key={i} className="bg-background p-6">
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div 
              className="aspect-square bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}
            />
          </div>
        </div>
      </section>


      {/* Response Times */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <Clock className="w-12 h-12 text-primary" />
              <div>
                <div className="text-background font-medium">Technical Support</div>
                <div className="text-background/60">Available When You Need Us</div>
              </div>
            </div>
            <div className="h-px md:h-16 w-full md:w-px bg-background/20" />
            <div className="text-center md:text-left">
              <div className="text-4xl font-bold text-primary">24hrs</div>
              <div className="text-background/60">Typical Response Time</div>
            </div>
            <div className="h-px md:h-16 w-full md:w-px bg-background/20" />
            <a 
              href="tel:+919820197624"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-primary-foreground mb-6">
            Need Support for Your Used Press?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Contact DAP for expert after-sales support that keeps your press productive.
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


export default AfterSalesSupport;
