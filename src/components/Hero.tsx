import { ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const heroImages = [
  "/images/Home/hero/hero-slide-1.jpg",
  "/images/Home/hero/hero-slide-2.jpg",
  "/images/Home/hero/hero-slide-3.jpg",
];

const SLIDE_DURATION = 6000;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const nextSlide = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      setProgress(0);
      setIsAnimating(true);
    }, 80);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) =>
        prev >= 100 ? prev : prev + 100 / (SLIDE_DURATION / 50)
      );
    }, 50);

    const slideInterval = setInterval(nextSlide, SLIDE_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Left Column */}
          <div
            className={`transition-all duration-700 ${
              isAnimating
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              <span className={`block transition-all duration-500 delay-100 ${isAnimating ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                International Grade
              </span>
              <span className={`block transition-all duration-500 delay-200 ${isAnimating ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                Stackers
              </span>
              <span className={`block transition-all duration-500 delay-300 ${isAnimating ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                & Conveyors
              </span>
            </h1>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-end lg:pl-24 xl:pl-32 min-h-[260px] lg:min-h-[300px]">
            {/* Progress Bar */}
            <div className="mb-4 h-px w-full overflow-hidden bg-white/20">
              <div
                className="h-full bg-white transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Description – smaller text */}
            <p
              className={`mb-10 max-w-md text-lg leading-relaxed text-white/80 transition-all duration-500 delay-400 ${
                isAnimating
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              Engineered and manufactured in-house at our Vasai facility,
              delivering precision stackers and conveyors for the global printing
              industry.
            </p>

            {/* CTA */}
            <div
              className={`transition-all duration-500 delay-500 ${
                isAnimating
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <button className="group inline-flex items-center gap-3 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:gap-5 hover:bg-white/90">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
