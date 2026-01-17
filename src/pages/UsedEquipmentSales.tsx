import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Package, Wrench, CheckCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const equipmentCategories = [
  {
    title: "Web Offset Presses",
    items: [
      "Harris M1000 Series",
      "Heidelberg Harris",
      "GOSS Community",
      "Komori System Press",
      "Manugraph Cityline",
    ]
  },
  {
    title: "Press Components",
    items: [
      "Printing Units",
      "Folder Systems",
      "Reel Stands",
      "Dryer Systems",
      "Control Panels",
    ]
  },
  {
    title: "Finishing Equipment",
    items: [
      "Log Stackers",
      "Web Stackers",
      "Belt Conveyors",
      "Quarter Folders",
      "Bundle Stackers",
    ]
  },
  {
    title: "Auxiliary Equipment",
    items: [
      "Ink Pumping Systems",
      "Chilling Units",
      "Air Compressors",
      "Spare Parts Stock",
      "Tools & Fixtures",
    ]
  },
];

const featuredEquipment = [
  { 
    name: "GOSS Community Press", 
    specs: "578mm Cutoff, 4 Units",
    condition: "Excellent", 
    year: "2010",
    status: "Available"
  },
  { 
    name: "Harris M1000BE Press", 
    specs: "22.75\" Cutoff, 6 Units",
    condition: "Good", 
    year: "2008",
    status: "Available"
  },
  { 
    name: "Heidelberg Harris Tower", 
    specs: "4-High Configuration",
    condition: "Refurbished", 
    year: "2012",
    status: "Available"
  },
  { 
    name: "Komori System 36", 
    specs: "Complete Line",
    condition: "Excellent", 
    year: "2015",
    status: "Sold"
  },
];

const whyChooseUs = [
  {
    icon: CheckCircle,
    title: "Technical Expertise",
    desc: "Over 60 years combined experience in web-offset press evaluation and installation"
  },
  {
    icon: Wrench,
    title: "Complete Service",
    desc: "From sourcing to installation, commissioning and after-sales support"
  },
  {
    icon: Package,
    title: "Quality Assured",
    desc: "Thorough inspection and testing before sale, honest condition reports"
  },
];

const UsedEquipmentSales = () => {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <Header />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 pb-16 md:pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs tracking-[0.2em]" style={{ color: '#CE8946' }}>——</span>
            <Link to="/" className="text-xs tracking-[0.2em] uppercase transition-colors" style={{ color: '#999999' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = '#999999'}>
              Home
            </Link>
            <span style={{ color: '#666666' }}>/</span>
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: '#ffffff' }}>Used Equipment Sales</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6" style={{ color: '#ffffff' }}>
            Used Web-Offset<br />Press Equipment
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl leading-relaxed" style={{ color: '#999999' }}>
            Quality pre-owned printing presses and equipment, professionally evaluated and backed by expert support.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#CE8946' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.4)' }}>——</span>
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Why Choose DAP
            </span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="flex flex-col">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <item.icon className="w-7 h-7" style={{ color: '#ffffff' }} />
                </div>
                <h3 className="text-xl font-medium mb-3" style={{ color: '#ffffff' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-20 md:mb-24">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs tracking-[0.2em]" style={{ color: '#CE8946' }}>——</span>
              <span className="text-xs tracking-[0.2em] uppercase" style={{ color: '#1a1a1a' }}>
                OUR APPROACH
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed max-w-3xl mb-8" style={{ color: '#1a1a1a' }}>
              More Than Just Equipment Sales
            </h2>
            
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl" style={{ color: '#666666' }}>
              DAP Engineering brings decades of hands-on press experience to used equipment sales, offering a service level far beyond typical brokers.
            </p>
          </div>

          {/* Section 1 - Expert Technical Evaluation */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-32">
            {/* Image */}
            <div className="relative overflow-hidden rounded order-2 lg:order-1">
              <img 
                src="/images/used-equipment/press-inspection.jpg" 
                alt="Technical evaluation of used printing press"
                className="w-full aspect-[3/2] object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/images/Home/services/card-technical-evaluation.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-xl font-medium mb-2" style={{ color: '#ffffff' }}>Expert Technical Evaluation</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Thorough inspection before purchase</p>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-2xl md:text-3xl font-light mb-6" style={{ color: '#1a1a1a' }}>
                  Professional Assessment
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  Unlike brokers who simply connect buyers and sellers, DAP provides comprehensive technical evaluation and honest condition assessment. Our team's factory training at Heidelberg Harris USA and extensive experience with Harris, GOSS, Komori, and Manugraph presses ensures you get accurate information and realistic performance expectations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6" style={{ backgroundColor: '#f5f1eb' }}>
                  <div className="text-4xl font-light mb-2" style={{ color: '#CE8946' }}>60+</div>
                  <p className="text-sm" style={{ color: '#666666' }}>Years Combined Experience</p>
                </div>
                <div className="p-6" style={{ backgroundColor: '#f5f1eb' }}>
                  <div className="text-4xl font-light mb-2" style={{ color: '#CE8946' }}>100+</div>
                  <p className="text-sm" style={{ color: '#666666' }}>Presses Evaluated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 - Complete Installation (Reversed) */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-32">
            {/* Text */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-light mb-6" style={{ color: '#1a1a1a' }}>
                  Complete Installation Services
                </h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#666666' }}>
                  We handle complete project management including dismantling, packing, shipping, installation, and commissioning across India, Middle East, and Europe. Our experienced team ensures smooth relocation and setup of your used equipment with minimal downtime.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  'Professional dismantling and packing',
                  'Secure international shipping',
                  'Expert installation and alignment',
                  'Full commissioning and testing',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#CE8946' }} />
                    <span className="text-sm" style={{ color: '#666666' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded">
              <img 
                src="/images/used-equipment/press-installation.jpg" 
                alt="Press installation and commissioning"
                className="w-full aspect-[3/2] object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/images/Home/services/card-press-relocation.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-xl font-medium mb-2" style={{ color: '#ffffff' }}>Professional Installation</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Complete commissioning support</p>
              </div>
            </div>
          </div>

          {/* Section 3 - After-Sales Support */}
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image */}
            <div className="relative overflow-hidden rounded order-2 lg:order-1">
              <img 
                src="/images/used-equipment/after-sales-support.jpg" 
                alt="Ongoing technical support and troubleshooting"
                className="w-full aspect-[3/2] object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/images/Home/services/card-service-troubleshooting.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-xl font-medium mb-2" style={{ color: '#ffffff' }}>Ongoing Support</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>We're with you after installation</p>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-2xl md:text-3xl font-light mb-6" style={{ color: '#1a1a1a' }}>
                  After-Sales Support That Matters
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                  Our used equipment sales include spare parts guidance, troubleshooting support, and consultancy to keep your press productive long after installation. We provide ongoing technical assistance, operator training, and maintenance advice to maximize your investment.
                </p>
              </div>

              <div className="p-8 border-l-4" style={{ backgroundColor: '#f5f1eb', borderColor: '#CE8946' }}>
                <p className="text-base leading-relaxed italic mb-6" style={{ color: '#666666' }}>
                  "Unlike typical brokers, DAP stays involved. Their technical knowledge and commitment to customer success sets them apart in the used equipment market."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-medium" style={{ backgroundColor: '#CE8946' }}>
                    D
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: '#1a1a1a' }}>Industry Client</p>
                    <p className="text-xs" style={{ color: '#999999' }}>Printing Company, Mumbai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#f5f1eb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs tracking-[0.2em]" style={{ color: '#CE8946' }}>——</span>
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: '#1a1a1a' }}>
              EQUIPMENT INVENTORY
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-16 md:mb-20" style={{ color: '#1a1a1a' }}>
            What We Offer
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipmentCategories.map((category, i) => (
              <div key={i} className="p-8 hover:shadow-lg transition-shadow duration-300" style={{ backgroundColor: '#ffffff' }}>
                <h3 className="text-lg font-medium mb-6 pb-4 border-b" style={{ color: '#1a1a1a', borderColor: '#CE8946' }}>
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm" style={{ color: '#666666' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#CE8946' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4" style={{ color: '#1a1a1a' }}>
              Current & Recent Equipment
            </h2>
            <p className="text-base font-light max-w-2xl" style={{ color: '#666666' }}>
              Browse our current inventory and recently sold equipment. Contact us for detailed specifications, photos, and pricing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredEquipment.map((item, i) => (
              <div 
                key={i} 
                className="border hover:border-[#CE8946] transition-all duration-300 overflow-hidden group"
                style={{ borderColor: '#e5e5e5', backgroundColor: '#ffffff' }}
              >
                {/* Image */}
                <div 
                  className="aspect-[4/3] bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundColor: '#d0ccc6' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span 
                    className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium tracking-wider ${
                      item.status === 'Available' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-500 text-white'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-medium mb-2 text-lg" style={{ color: '#1a1a1a' }}>{item.name}</h3>
                  <p className="text-sm mb-4" style={{ color: '#666666' }}>{item.specs}</p>
                  
                  <div className="flex items-center justify-between text-sm pt-4 border-t" style={{ borderColor: '#e5e5e5' }}>
                    <div>
                      <span className="text-xs uppercase tracking-wider block mb-1" style={{ color: '#999999' }}>Condition</span>
                      <span className="font-medium" style={{ color: '#1a1a1a' }}>{item.condition}</span>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider block mb-1" style={{ color: '#999999' }}>Year</span>
                      <span className="font-medium" style={{ color: '#1a1a1a' }}>{item.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#f5f1eb' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-16 text-center" style={{ color: '#1a1a1a' }}>
            Complete Project Management
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Sourcing & Evaluation", desc: "We locate suitable presses matching your format, speed, and budget requirements, with thorough technical inspection" },
              { title: "Installation & Commissioning", desc: "Complete dismantling, packing, shipping, installation and commissioning with experienced technicians" },
              { title: "Technical Support", desc: "Ongoing troubleshooting, spare parts guidance, and performance optimization consultancy" },
              { title: "Training & Documentation", desc: "Operator training, maintenance procedures, and complete technical documentation" },
            ].map((service, i) => (
              <div key={i} className="p-8 border-l-4" style={{ backgroundColor: '#ffffff', borderColor: '#CE8946' }}>
                <h3 className="text-lg font-medium mb-4" style={{ color: '#1a1a1a' }}>{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6" style={{ color: '#ffffff' }}>
            Looking for Specific Equipment?
          </h2>
          <p className="text-lg font-light mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: '#999999' }}>
            Contact us with your requirements. We'll help you find the right used press and provide honest evaluation of condition and capabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#CE8946', color: '#ffffff' }}
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <a 
              href="tel:+919820197624"
              className="inline-flex items-center justify-center gap-2 border-2 px-8 py-4 text-sm font-medium transition-all duration-300 hover:bg-white"
              style={{ borderColor: '#CE8946', color: '#ffffff' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#1a1a1a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              <Phone className="w-4 h-4" />
              +91 98201 97624
            </a>
          </div>
          
          {/* Additional Contact */}
          <div className="pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <p className="text-sm mb-3" style={{ color: '#666666' }}>Or email us directly</p>
            <a 
              href="mailto:info@dapepl.com"
              className="inline-flex items-center gap-2 transition-colors"
              style={{ color: '#999999' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#999999'}
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@dapepl.com</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default UsedEquipmentSales;
