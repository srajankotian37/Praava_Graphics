import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import ServicesSection from "@/components/Services";
import Industries from "@/components/Industries";
import ProjectsSection from "@/components/Projects";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    console.log("🎉 Intro complete");
    setShowIntro(false);
  };

  return (
    <>
      {/* MAIN CONTENT (always mounted) */}
      <main className="min-h-screen">
        <Header />
        <Hero />
        <WhoWeAre />
        <ServicesSection />
        <Industries />
        <ProjectsSection />
        <Partners />
        <Footer />
      </main>

      {/* INTRO OVERLAY */}
      {showIntro && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}
    </>
  );
};

export default Index;
