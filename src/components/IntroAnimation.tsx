import { useEffect, useState, useRef } from "react";

type IntroAnimationProps = {
  onComplete: () => void;
};

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [slideUp, setSlideUp] = useState(false);

  const percentageRef = useRef<HTMLSpanElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  /* ----------------------------
     Fallback if video doesn't load
  ----------------------------- */
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!videoLoaded) {
        console.warn("⚠️ Video load timeout, continuing");
        setVideoLoaded(true);
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [videoLoaded]);

  /* ----------------------------
     Percentage animation
  ----------------------------- */
  useEffect(() => {
    if (!videoLoaded && !videoError) return;

    const duration = 3000;
    const start = performance.now();
    let rafId: number;
    let lastUpdate = 0;

    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);

      if (time - lastUpdate > 100) {
        if (percentageRef.current) {
          percentageRef.current.textContent = `${Math.round(eased * 100)}%`;
        }
        lastUpdate = time;
      }

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        if (percentageRef.current) {
          percentageRef.current.textContent = "100%";
        }

        videoRef.current?.pause();

        // Start slide-up animation
        setSlideUp(true);

        // Wait for animation to finish before removing loader
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [videoLoaded, videoError, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white flex items-center justify-center will-change-transform ${
        slideUp ? "pointer-events-none" : ""
      }`}
      style={
        slideUp
          ? {
              animation:
                "slideUp 1s cubic-bezier(0.77, 0, 0.175, 1) forwards",
            }
          : undefined
      }
    >
      {/* CSS Animation */}
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100%);
          }
        }
      `}</style>

      {/* Video */}
      {!videoError ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
        >
          <source src="/images/videos/logo-animation.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="/images/brand/logo-icon.png"
          alt="Logo"
          className="h-32 w-auto animate-pulse"
        />
      )}

      {/* Percentage */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <span
          ref={percentageRef}
          className="text-6xl md:text-8xl font-bold text-gray-900 tabular-nums"
        >
          0%
        </span>
      </div>
    </div>
  );
};

export default IntroAnimation;
