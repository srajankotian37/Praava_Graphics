import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          Our Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Comprehensive construction and maintenance solutions for diversified infrastructure.
        </p>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
