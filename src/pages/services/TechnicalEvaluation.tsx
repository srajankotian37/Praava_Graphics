import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Zap, Building2, Factory, Power } from "lucide-react";
import { Link } from "react-router-dom";

const TechnicalEvaluation = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero - Bold Typography */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Factory className="w-8 h-8 text-primary" />
            <span className="text-primary text-sm tracking-wider">USED EQUIPMENT</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-foreground leading-none tracking-tight">
            TECHNICAL
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-primary leading-none tracking-tight">
            EVALUATION
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Professional inspection and evaluation of used presses to help buyers understand mechanical condition, required work and realistic performance expectations before purchase.
          </p>
          <div className="flex lg:justify-end">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-foreground/90 transition-colors h-fit"
            >
              Request Evaluation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Image Band */}
      <section className="h-[50vh] overflow-hidden">
        <img 
          src="/images/technical-evaluation/evaluation-inspection.jpg" 
          alt="DAP technical evaluation and press inspection"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#f5f1eb' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-16">
            Our Evaluation Process
          </h2>
          <div className="grid md:grid-cols-2 gap-0">
            {[
              { 
                icon: Power,
                title: "Mechanical Inspection", 
                desc: "Comprehensive assessment of cylinders, bearings, gears and all mechanical components",
                number: "01"
              },
              { 
                icon: Building2,
                title: "Electrical Systems", 
                desc: "Evaluation of motors, drives, control systems and electrical condition",
                number: "02"
              },
              { 
                icon: Factory,
                title: "Performance Assessment", 
                desc: "Analysis of registration capability, speed potential and print quality expectations",
                number: "03"
              },
              { 
                icon: Zap,
                title: "Cost Analysis", 
                desc: "Detailed estimate of required work, parts and realistic total investment",
                number: "04"
              },
            ].map((service, i) => (
              <div 
                key={i}
                className="p-8 md:p-12 border border-border bg-background group hover:bg-foreground transition-colors duration-300"
              >
                <div className="flex justify-between items-start mb-8">
                  <service.icon className="w-10 h-10 text-primary" />
                  <span className="text-4xl font-light text-muted-foreground group-hover:text-background/30 transition-colors">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-foreground group-hover:text-background mb-4 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-background/70 transition-colors">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-foreground">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-background mb-12">
            What We Evaluate
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
            {[
              "Cylinder condition",
              "Bearing wear",
              "Gear condition",
              "Drive systems",
              "Registration systems",
              "Folder mechanics",
              "Electrical systems",
              "Control systems",
              "Safety systems",
              "Dampening systems",
              "Inking systems",
              "Overall maintenance",
            ].map((item, i) => (
              <div 
                key={i}
                className="py-3 border-b border-background/20 text-background/80 hover:text-primary hover:border-primary transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-primary">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-primary-foreground mb-6">
              Why Technical Evaluation Matters
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Buying a used press without proper evaluation can lead to costly surprises. Our factory-trained team provides honest, detailed assessments so you know exactly what you're buying and what investment is really required.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary-foreground/10 text-primary-foreground text-sm">
                60+ Years Experience
              </span>
              <span className="px-4 py-2 bg-primary-foreground/10 text-primary-foreground text-sm">
                Factory Trained
              </span>
              <span className="px-4 py-2 bg-primary-foreground/10 text-primary-foreground text-sm">
                Honest Assessment
              </span>
              <span className="px-4 py-2 bg-primary-foreground/10 text-primary-foreground text-sm">
                All Press Makes
              </span>
            </div>
          </div>
          <div className="text-center lg:text-right">
            <div className="text-8xl font-bold text-primary-foreground/20">500+</div>
            <div className="text-primary-foreground text-lg">Presses Evaluated</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            Considering a Used Press?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get a professional evaluation before you buy - know exactly what you're getting.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-foreground/90 transition-colors"
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

export default TechnicalEvaluation;
