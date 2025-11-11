const BackgroundEffects = () => {
  return (
    <>
      {/* Circuit grid overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--accent)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      
      {/* Vignette edges */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, hsl(var(--background)) 100%)",
        }}
      />
      
      {/* Nebula-like gradient */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] animate-pulse-slow"
          style={{ background: "hsl(var(--accent) / 0.15)" }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] animate-pulse-slow"
          style={{ 
            background: "hsl(var(--accent-gold) / 0.12)",
            animationDelay: "2s"
          }}
        />
      </div>
    </>
  );
};

export default BackgroundEffects;
