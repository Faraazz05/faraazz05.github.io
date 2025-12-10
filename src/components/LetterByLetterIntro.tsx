import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LetterByLetterIntro = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLetters, setShowLetters] = useState(false);
  const name = "FARAZ";

  useEffect(() => {
    // Start letter animation after a brief delay
    const letterTimer = setTimeout(() => setShowLetters(true), 200);
    
    // Hide preloader after animation completes
    const loadTimer = setTimeout(() => setIsLoaded(true), 3000);

    return () => {
      clearTimeout(letterTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-all duration-700",
        isLoaded && "opacity-0 pointer-events-none"
      )}
    >
      <div className="relative">
        {/* Letter by letter animation */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-accent flex">
          {name.split("").map((letter, index) => (
            <span
              key={index}
              className={cn(
                "inline-block opacity-0 transform translate-y-8",
                showLetters && "animate-letter-reveal"
              )}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              {letter}
            </span>
          ))}
        </h1>
        
        {/* Cyan pulse glow behind text */}
        <div 
          className={cn(
            "absolute inset-0 -z-10 blur-3xl bg-accent/30 rounded-full scale-150 opacity-0",
            showLetters && "animate-pulse-glow-intro"
          )}
          style={{ animationDelay: "600ms" }}
        />
        
        {/* Expanding ring effect */}
        <div 
          className={cn(
            "absolute inset-0 -z-20 rounded-full border-2 border-accent/50 scale-100 opacity-0",
            showLetters && "animate-ring-expand"
          )}
          style={{ animationDelay: "900ms" }}
        />
      </div>
    </div>
  );
};

export default LetterByLetterIntro;
