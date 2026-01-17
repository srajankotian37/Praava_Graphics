import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    number: "01",
    title: "Log\nStackers",
    category: "Manufacturing",
    capacity: "Up to 50,000 IPH",
    features: ["Tabloid folds", "Quarter folds", "Double-parallel"],
    image: "/images/products/product-log-stacker-main.png",
    alt: "DAP Log Stacker machine for high-volume printing operations",
    href: "/services/log-stackers" // ✅ ADDED
  },
  {
    number: "02",
    title: "Web\nStackers",
    category: "Manufacturing",
    capacity: "Up to 40,000 IPH",
    features: ["Versatile product handling", "Stable construction", "Lower-volume operations"],
    image: "/images/products/product-web-stacker-main.png",
    alt: "DAP Web Stacker for versatile printing product handling",
    href: "/services/webstackers" // ✅ ADDED (or /services/web-stackers if you fixed it)
  },
  {
    number: "03",
    title: "Belt\nConveyors",
    category: "Manufacturing",
    capacity: "Custom lengths & widths",
    features: ["Seamless integration", "Reliable transfer", "Custom configurations"],
    image: "/images/products/product-conveyor-main.png",
    alt: "DAP Belt Conveyor system for seamless material transfer",
    href: "/services/conveyors" // ✅ ADDED
  },
];

const Products = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end bg-foreground overflow-hidden">
        {/* Grid Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link to="/" className="text-background/60 hover:text-background text-sm">Home</Link>
            <span className="text-background/40">→</span>
            <span className="text-background text-sm">Products</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight">
            Our Products<br />
            Built for the<br />
            Printing Industry
          </h1>
        </div>
      </section>

      {/* Products Intro */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#f5f1eb' }}>
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-primary">⟶</span>
            <span className="text-xs tracking-[0.2em] text-muted-foreground">
              OUR PRODUCTS
            </span>
          </div>
          
          <p className="text-2xl md:text-3xl font-light text-foreground max-w-2xl leading-relaxed mb-20">
            DAP is the pioneer in the manufacture of LOG, MINI and COMPENSATING STACKERS in India. Portable and stationary stackers engineered to be the most durable.
          </p>

          {/* Products List */}
          <div className="space-y-16 md:space-y-24">
            {products.map((product, index) => (
              <div 
                key={product.number}
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start"
              >
                {/* Product Info - Left on odd, Right on even for desktop */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <span className="text-sm text-muted-foreground">{product.number}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8 whitespace-pre-line">
                    {product.title}
                  </h2>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <span className="text-xs text-muted-foreground tracking-wider block mb-1">CATEGORY</span>
                      <span className="text-foreground">{product.category}</span>
                    </div>
                    
                    <div>
                      <span className="text-xs text-muted-foreground tracking-wider block mb-1">CAPACITY</span>
                      <span className="text-foreground">{product.capacity}</span>
                    </div>
                    
                    <div>
                      <span className="text-xs text-muted-foreground tracking-wider block mb-1">KEY FEATURES</span>
                      <span className="text-foreground">{product.features.join(" · ")}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={product.href}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                {/* Product Image - Right on odd, Left on even for desktop */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-foreground">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-background/70">
            Need a custom solution?{" "}
            <Link to="/contact" className="text-primary hover:underline font-medium">
              Contact us.
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
