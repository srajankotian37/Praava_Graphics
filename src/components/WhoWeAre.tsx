import { useEffect, useState, useRef, Suspense } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

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

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background py-20 lg:py-32">
      <div className="px-6 md:px-12 lg:px-20">
        {/* WHO WE ARE Label */}
        <div 
          className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-primary text-lg">→</span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            WHO WE ARE
          </span>
        </div>

        {/* Description */}
        <p 
          className={`text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-foreground mb-8 max-w-4xl transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          DAP Engineering is a privately owned Indian company providing stackers, conveyors and web-offset press services for printers and publishers across India and internationally.
        </p>

        {/* More About Us Link */}
        <Link 
          to="/about"
          className={`inline-block text-sm font-medium text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          More About Us
        </Link>

        {/* 3D Model + Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-16 lg:mt-24">
          {/* Left - 3D Model */}
          <div 
            className={`relative h-96 overflow-visible transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
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
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
  );
};

export default WhoWeAre;
