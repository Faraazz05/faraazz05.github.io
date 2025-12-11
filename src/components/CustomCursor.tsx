import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [targetPosition, setTargetPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isHoveringMagnetic, setIsHoveringMagnetic] = useState(false);
  const [cursorScale, setCursorScale] = useState(1);
  const animationRef = useRef<number>();
  const trailIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Check for magnetic elements
      const magneticElements = document.querySelectorAll('[data-magnetic="true"]');
      let isMagnetic = false;
      let magneticX = mouseX;
      let magneticY = mouseY;

      magneticElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
        );
        
        // Magnetic pull radius
        const pullRadius = 100;
        
        if (distance < pullRadius) {
          isMagnetic = true;
          const pullStrength = 1 - (distance / pullRadius);
          magneticX = mouseX + (centerX - mouseX) * pullStrength * 0.3;
          magneticY = mouseY + (centerY - mouseY) * pullStrength * 0.3;
          setCursorScale(1 + pullStrength * 0.5);
        }
      });

      if (!isMagnetic) {
        setCursorScale(1);
      }
      
      setIsHoveringMagnetic(isMagnetic);
      setTargetPosition({ x: magneticX, y: magneticY });

      // Add trail particle
      const newParticle = { x: mouseX, y: mouseY, id: trailIdRef.current++ };
      setTrail(prev => [...prev.slice(-8), newParticle]);
    };

    // Smooth cursor animation
    const animateCursor = () => {
      setPosition(prev => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.15,
        y: prev.y + (targetPosition.y - prev.y) * 0.15,
      }));
      animationRef.current = requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationRef.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetPosition]);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed rounded-full pointer-events-none z-[9999] mix-blend-screen transition-[width,height,box-shadow] duration-200"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${24 * cursorScale}px`,
          height: `${24 * cursorScale}px`,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)`,
          boxShadow: isHoveringMagnetic 
            ? "0 0 40px hsl(var(--accent) / 0.8), 0 0 80px hsl(var(--accent) / 0.4)" 
            : "0 0 20px hsl(var(--accent) / 0.6)",
        }}
      />
      
      {/* Trail particles */}
      {trail.map((particle, index) => (
        <div
          key={particle.id}
          className="fixed w-2 h-2 rounded-full pointer-events-none z-[9998] animate-fade-out"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: "translate(-50%, -50%)",
            background: `hsl(var(--accent) / ${0.3 - index * 0.03})`,
            animationDuration: "0.6s",
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
