import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, MapPin, Building2, Wrench } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";

const projectsData = [
  {
    id: "01",
    title: "Suncor Firebag Project",
    location: "Alberta, Canada",
    industry: "Oil & Gas",
    services: ["Electrical", "Instrumentation"],
    description: "A comprehensive electrical and instrumentation project for Suncor's Firebag oil sands facility. Our team delivered complete electrical infrastructure and advanced instrumentation systems to support extraction and processing operations.",
    scope: [
      "Complete electrical system design and installation",
      "Advanced instrumentation and control systems",
      "Power distribution infrastructure",
      "Safety and monitoring systems integration",
    ],
    stats: [
      { number: "150+", label: "Workers Deployed" },
      { number: "18", label: "Months Duration" },
      { number: "99.9%", label: "Safety Record" },
    ],
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "02",
    title: "Imperial Kearl Facility",
    location: "Alberta, Canada",
    industry: "Oil & Gas",
    services: ["Electrical", "Fabrication"],
    description: "Large-scale electrical and fabrication work for Imperial's Kearl oil sands mine. We provided critical infrastructure support including custom steel fabrication and complete electrical systems.",
    scope: [
      "Structural steel fabrication and installation",
      "Electrical systems for processing facilities",
      "Equipment mounting and integration",
      "Quality assurance and testing",
    ],
    stats: [
      { number: "200+", label: "Workers Deployed" },
      { number: "24", label: "Months Duration" },
      { number: "100%", label: "On-Time Delivery" },
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "03",
    title: "CNRL Horizon Site",
    location: "Alberta, Canada",
    industry: "Oil & Gas",
    services: ["Electrical", "Instrumentation", "Fabrication"],
    description: "Multi-disciplinary project at Canadian Natural Resources' Horizon oil sands site. Our integrated approach combined electrical, instrumentation, and fabrication expertise for seamless project delivery.",
    scope: [
      "Integrated electrical and instrumentation systems",
      "Custom fabrication for processing equipment",
      "Control system programming and commissioning",
      "Ongoing maintenance and support",
    ],
    stats: [
      { number: "300+", label: "Workers Deployed" },
      { number: "36", label: "Months Duration" },
      { number: "Zero", label: "Lost Time Incidents" },
    ],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
  },
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-foreground/70" />
        
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link to="/" className="text-background/60 hover:text-background text-sm">Home</Link>
            <span className="text-background/40">→</span>
            <Link to="/projects" className="text-background/60 hover:text-background text-sm">Projects</Link>
            <span className="text-background/40">→</span>
            <span className="text-background text-sm">{project.title}</span>
          </div>

          <span className="text-primary text-sm font-medium">{project.id}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mt-2">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2 text-background/80">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2 text-background/80">
              <Building2 className="w-4 h-4" />
              <span>{project.industry}</span>
            </div>
            <div className="flex items-center gap-2 text-background/80">
              <Wrench className="w-4 h-4" />
              <span>{project.services.join(" · ")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-3 gap-8">
            {project.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.number}</p>
                <p className="text-sm text-primary-foreground/80 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#f5f1eb' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Description */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-primary">⟶</span>
                <span className="text-xs tracking-[0.2em] text-muted-foreground">PROJECT OVERVIEW</span>
              </div>
              <p className="text-xl md:text-2xl font-light text-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Scope */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-primary">⟶</span>
                <span className="text-xs tracking-[0.2em] text-muted-foreground">PROJECT SCOPE</span>
              </div>
              <ul className="space-y-4">
                {project.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6 md:px-12 lg:px-20 bg-muted/30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.id}`}
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <div>
                <span className="text-xs text-muted-foreground block">Previous Project</span>
                <span className="font-medium">{prevProject.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          <Link
            to="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View All Projects
          </Link>

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.id}`}
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors text-right"
            >
              <div>
                <span className="text-xs text-muted-foreground block">Next Project</span>
                <span className="font-medium">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-foreground">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-background">Ready to Start Your Project?</h2>
            <p className="text-background/70 mt-2">Contact us to discuss your requirements.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectDetail;
