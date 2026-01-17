import { useEffect, useState, useRef, Suspense } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import Header from "@/components/Header";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";




const stats = [
  { number: "2013", label: "Founded" },
  { number: "60+", label: "Years Combined Experience" },
  { number: "50K", label: "IPH Speed Capability" },
];




// 3D Model Component - Using object_0.glb (offset printer model)
function ConveyorModel() {
  const { scene } = useGLTF("/models/object_0.glb");
  return <primitive object={scene} scale={20} position={[0, 0, 0]} rotation={[0, (360 * Math.PI / 180), 0]} />;
}




// Loading fallback
function ModelLoader() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#8B7355" />
    </mesh>
  );
}




const AnimatedCounter = ({ 
  value, 
  prefix = "", 
  suffix = "", 
  isVisible 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  isVisible: boolean;
}) => {
  const [count, setCount] = useState(0);



  useEffect(() => {
    if (!isVisible) return;



    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);



    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 16);



    return () => clearInterval(timer);
  }, [isVisible, value]);



  const displayValue = Number.isInteger(value) ? Math.floor(count) : count.toFixed(1);



  return (
    <span>
      {prefix}{displayValue}{suffix}
    </span>
  );
};




const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section');
            if (id) {
              setSectionsVisible(prev => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.2 }
    );



    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });



    return () => observer.disconnect();
  }, []);



  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);



  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };



  return (
    <main className="min-h-screen bg-background">
      <Header />



      {/* Hero Section */}
      <div className="relative h-[80vh] md:h-screen flex items-end overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/about/facility-wide-shot.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />



        {/* Breadcrumb */}
        <div 
          className={`absolute top-24 left-6 md:left-12 lg:left-20 z-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-2 text-sm">
            <a href="/" className="text-foreground/70 hover:text-foreground transition-colors">Home</a>
            <span className="text-foreground/50">→</span>
            <span className="text-foreground">About</span>
          </div>
        </div>



        {/* Large Hero Text */}
        <div className="relative z-10 w-full pb-8 md:pb-16">
          <h1 
            className={`text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold text-white tracking-tight leading-none px-6 md:px-12 lg:px-20 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Praava Graphics
          </h1>
        </div>
      </div>



      {/* Who We Are Section */}
      <section 
        ref={setRef('whoweare')} 
        data-section="whoweare"
        className="bg-background py-12 lg:py-16"
      >
        <div className="px-6 md:px-12 lg:px-20">
          {/* WHO WE ARE Label */}
          <div 
            className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
              sectionsVisible['whoweare'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-primary text-lg">→</span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              WHO WE ARE
            </span>
          </div>



          {/* Description */}
          <p 
            className={`text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-foreground mb-16 max-w-4xl transition-all duration-700 delay-100 ${
              sectionsVisible['whoweare'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            DAP Engineering is a privately owned Indian company providing stackers, conveyors and web-offset press services for printers and publishers across India and internationally.
          </p>



          {/* 3D Model + Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left - 3D Model */}
            <div 
              className={`relative h-96 overflow-visible transition-all duration-1000 delay-400 ${
                sectionsVisible['whoweare'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <Canvas
                camera={{ position: [200, 3, 100], fov: 45 }}
                style={{ width: '100%', height: '100%' }}
              >
                <Suspense fallback={<ModelLoader />}>
                  <ambientLight intensity={0.8} />
                  <spotLight position={[15, 15, 15]} angle={0.3} penumbra={1} intensity={1} />
                  <pointLight position={[-10, -10, -10]} intensity={0.5} />
                  <directionalLight position={[0, 10, 5]} intensity={0.5} />
                  <ConveyorModel />
                  <OrbitControls 
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={false}
                    minDistance={18}
                    maxDistance={18}
                    minAzimuthAngle={-0.5}
                    maxAzimuthAngle={0.5}
                    minPolarAngle={1.4}
                    maxPolarAngle={1.65}
                    autoRotateSpeed={0}
                  />
                  <Environment preset="sunset" />
                </Suspense>
              </Canvas>
              
              {/* Accent Bar */}
              <div className="absolute left-0 bottom-0 w-16 h-1/3 bg-primary/30 pointer-events-none" />
              
              {/* Interactive Hint */}
              <div className="absolute bottom-4 right-4 text-xs text-muted-foreground/60 bg-background/80 px-3 py-1.5 rounded-full pointer-events-none">
                Drag to rotate
              </div>
            </div>



            {/* Right - Stats */}
            <div className="flex flex-col justify-center">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`border-b border-border py-6 first:pt-0 last:border-b-0 transition-all duration-700 ${
                    sectionsVisible['whoweare'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <span className="text-4xl md:text-5xl lg:text-6xl font-light text-primary block mb-2">
                    {stat.number}
                  </span>
                  <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Facility Section */}
      <section 
        ref={setRef('facility')} 
        data-section="facility"
        className="py-12 lg:py-16 bg-muted/10"
      >
        <div className="px-6 md:px-12 lg:px-20">
          {/* Section Label */}
          <div 
            className={`flex items-center gap-3 mb-12 transition-all duration-700 ${
              sectionsVisible['facility'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              FACILITY
            </span>
          </div>



          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
            {/* Left Column - Description */}
            <p 
              className={`text-xl md:text-3xl font-medium leading-relaxed text-foreground transition-all duration-700 delay-100 ${
                sectionsVisible['facility'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              DAP operates from a manufacturing facility in Vasai, Maharashtra, equipped for metal fabrication, machining, assembly and testing of stackers and conveyors.
            </p>



            {/* Right Column - Extended Text */}
            <p 
              className={`text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${
                sectionsVisible['facility'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Our in-house capabilities include CNC machining, welding, electrical and pneumatic system integration, and pre-delivery testing. This allows us to control quality and respond quickly to customer requirements.
            </p>
          </div>



          {/* Facility Images Grid */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-1000 delay-300 ${
              sectionsVisible['facility'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img 
                src="/images/about/facility-welding.jpg"
                alt="Factory floor with welding work and stacker assembly"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img 
                src="/images/about/facility-cnc-machining.jpg"
                alt="CNC machining and precision metal fabrication work"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img 
                src="/images/about/facility-plasma-cutting.jpg"
                alt="Industrial plasma cutting production line testing"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Quality Assurance Section - IMPROVED WITH DIFFERENT BACKGROUND */}
      <section 
        ref={setRef('qa')} 
        data-section="qa"
        className="py-12 lg:py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden"
      >
        {/* Optional: Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="px-6 md:px-12 lg:px-20 relative z-10">
          {/* Section Label */}
          <div 
            className={`flex items-center gap-3 mb-12 transition-all duration-700 ${
              sectionsVisible['qa'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              QUALITY ASSURANCE
            </span>
          </div>


          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left - Text Content (3 columns) */}
            <div className="lg:col-span-3 space-y-8">
              <p 
                className={`text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-foreground transition-all duration-700 delay-100 ${
                  sectionsVisible['qa'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                DAP has a dedicated team committed to project controls and comprehensive turnover documentation.
              </p>
              
              <div 
                className={`space-y-6 text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${
                  sectionsVisible['qa'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <p>
                  Our team understands the critical importance of keeping clients informed throughout every stage of production. We provide detailed progress reports, quality control updates, and proactive communication tailored to your requirements.
                </p>
                
                <p>
                  As each stacker and conveyor system is manufactured, we meticulously document all specifications, test results, and performance data. Upon project completion, clients receive a professionally compiled technical package including electrical schematics, mechanical drawings, maintenance schedules, and commissioning reports.
                </p>
              </div>


              {/* Key Features */}
              <div 
                className={`grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 transition-all duration-700 delay-300 ${
                  sectionsVisible['qa'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {[
                  "Pre-delivery testing protocols",
                  "Complete technical documentation",
                  "On-site commissioning support",
                  "Quality control checkpoints"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-background/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-primary/10">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>


            {/* Right - Image (2 columns) */}
            <div 
              className={`lg:col-span-2 transition-all duration-1000 delay-400 ${
                sectionsVisible['qa'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="sticky top-24">
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="/images/about/facility-quality-control.jpg"
                    alt="Quality control inspection and testing procedures"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Highlights Section - IMPROVED */}
      <section 
        ref={setRef('highlights')} 
        data-section="highlights"
        className="py-12 lg:py-16 bg-muted/10"
      >
        <div className="px-6 md:px-12 lg:px-20">
          {/* Section Label */}
          <div 
            className={`flex items-center gap-3 mb-12 transition-all duration-700 ${
              sectionsVisible['highlights'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              HIGHLIGHTS
            </span>
          </div>


          {/* Featured Highlight - Full Width */}
          <div 
            className={`mb-12 transition-all duration-700 delay-100 ${
              sectionsVisible['highlights'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-foreground max-w-5xl">
              DAP specializes in high-speed log stackers for commercial and publication printing operations, with systems engineered to handle speeds up to 50,000 impressions per hour and customizable configurations for various press types.
            </p>
          </div>


          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
            {/* Left - Core Capabilities */}
            <div 
              className={`space-y-6 transition-all duration-700 delay-200 ${
                sectionsVisible['highlights'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h3 className="text-2xl font-semibold text-foreground">
                DAP maintains comprehensive in-house capabilities:
              </h3>


              <div className="space-y-4">
                {[
                  {
                    title: "Engineering & Design",
                    desc: "CAD modeling, mechanical engineering, and custom system design"
                  },
                  {
                    title: "Fabrication",
                    desc: "Metal fabrication, precision CNC machining, and welding services"
                  },
                  {
                    title: "Electrical & Controls",
                    desc: "Control panel design, PLC programming, and system integration"
                  },
                  {
                    title: "Pneumatics & Automation",
                    desc: "Pneumatic system design and automated control integration"
                  },
                  {
                    title: "Installation & Support",
                    desc: "On-site installation, commissioning, and technical training"
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="border-l-2 border-primary pl-4 py-2 hover:bg-background/50 transition-colors duration-300"
                  >
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>


            {/* Right - Image */}
            <div 
              className={`transition-all duration-1000 delay-300 ${
                sectionsVisible['highlights'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src="/images/about/highlights-electrical.jpeg"
                  alt="Industrial electrical control panels and technical equipment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>


          {/* Technical Specifications Banner */}
          <div 
            className={`bg-primary/5 border border-primary/20 rounded-lg p-6 md:p-8 transition-all duration-700 delay-400 ${
              sectionsVisible['highlights'] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-lg md:text-xl font-medium text-foreground mb-4">
              <strong className="text-primary">Expert Engineering:</strong> DAP employs specialized mechanical and electrical engineers to ensure compliance with industry standards, optimal performance, and production efficiency across all systems.
            </p>
            <p className="text-muted-foreground">
              Our engineering team provides technical support throughout the project lifecycle, from initial design consultation to post-installation optimization.
            </p>
          </div>
        </div>
      </section>



      {/* Partners Section */}
      <Partners />



      {/* Footer */}
      <Footer />
    </main>
  );
};



export default About;
