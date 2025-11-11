import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let animationFrameId: number;
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail particle
      const newParticle = { x: e.clientX, y: e.clientY, id: trailId++ };
      setTrail(prev => [...prev.slice(-8), newParticle]);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-screen transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
          boxShadow: "0 0 20px hsl(var(--accent) / 0.6)",
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
