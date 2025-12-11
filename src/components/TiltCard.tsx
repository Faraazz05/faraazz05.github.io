import { useRef, useState, useEffect, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  glowColor?: "accent" | "gold";
}

const TiltCard = ({ children, className = "", onClick, glowColor = "accent" }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTilt({ rotateX, rotateY });
    setSpotlight({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    setSpotlight({ x: 50, y: 50 });
  };

  // Device motion for mobile
  useEffect(() => {
    if (!isMobile) return;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      const gamma = e.gamma || 0; // Left-right tilt
      const beta = e.beta || 0;   // Front-back tilt

      setTilt({
        rotateX: Math.max(-15, Math.min(15, beta * 0.3)),
        rotateY: Math.max(-15, Math.min(15, gamma * 0.3)),
      });
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, [isMobile]);

  const glowColorValue = glowColor === "gold" 
    ? "hsl(var(--accent-gold))" 
    : "hsl(var(--accent))";

  return (
    <div
      ref={cardRef}
      className={`tilt-card-container ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-magnetic="true"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="tilt-card glass transition-all duration-300 ease-out relative overflow-hidden rounded-xl p-6"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateZ(${isHovered ? '20px' : '0px'})`,
          boxShadow: isHovered 
            ? `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 40px ${glowColorValue.replace(')', ' / 0.3)')}` 
            : '0 8px 32px rgba(0,0,0,0.3)',
          borderColor: isHovered ? glowColorValue.replace(')', ' / 0.5)') : 'rgba(255,255,255,0.1)',
        }}
      >
        {/* Spotlight effect */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-xl"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, ${glowColorValue.replace(')', ' / 0.15)')}, transparent 50%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TiltCard;
