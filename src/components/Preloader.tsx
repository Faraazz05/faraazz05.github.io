import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-700",
        isLoaded && "opacity-0 pointer-events-none"
      )}
      style={{
        animation: isLoaded ? "fade-out-preloader 0.7s ease-out forwards" : "none"
      }}
    >
      <h1
        className="text-6xl sm:text-8xl md:text-9xl font-bold text-accent"
        style={{
          animation: "pulse-glow-expand 2.5s ease-out"
        }}
      >
        FARAAZ
      </h1>
    </div>
  );
};

export default Preloader;
