import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const LogStackers = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero - Split Layout */}
      <section className="pt-24 lg:pt-0 lg:min-h-screen flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex items-center px-6 md:px-12 lg:px-20 py-16 lg:py-0">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Link to="/services" className="text-muted-foreground hover:text-foreground text-sm">
                Services
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground text-sm">Manufacturing</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Log Stackers
              <br />
              <span className="text-primary">for Printing</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Industry-leading stackers for high-volume book and commercial printers.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Hero Image - Log Stacker */}
        <div className="lg:w-1/2 min-h-[400px] lg:min-h-screen">
          <img
            src="/images/log-stackers/hero.png"
            alt="DAP Log Stacker for high-volume printing operations"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-foreground py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "50K", label: "IPH Capacity" },
            { number: "444mm", label: "Max Product Length" },
            { number: "483mm", label: "Max Product Width" },
            { number: "20+", label: "Years Manufacturing" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-background/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-[#f5f1eb]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            "High-Speed Operation",
            "Customizable Bundles",
            "Right / Left Hand Configuration",
            "Wide Product Size Range",
            "In-House Design & Fabrication",
            "Pre-Delivery Testing",
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-6 bg-background">
              <CheckCircle2 className="text-primary flex-shrink-0" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Showcase Image 1 */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="/images/log-stackers/showcase-1.png"
                alt="DAP Log Stacker detailed view"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Showcase Image 2 */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="/images/log-stackers/showcase-2.jpg"
                alt="DAP Log Stacker in operation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-center">
        <h2 className="text-4xl text-primary-foreground mb-6">
          Need a Log Stacker for Your Press?
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors"
        >
          GET A QUOTE
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
    </main>
  );
};

export default LogStackers;
