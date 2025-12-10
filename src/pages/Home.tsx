import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import RippleButton from "@/components/RippleButton";

const Home = () => {
  const navigate = useNavigate();

  const exploreToAbout = () => {
    // Trigger zoom-out transition to About page
    document.body.style.transition = "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-out";
    document.body.style.transform = "scale(0.95)";
    document.body.style.opacity = "0.3";
    
    setTimeout(() => {
      navigate("/about");
      // Reset on navigation
      document.body.style.transform = "scale(1)";
      document.body.style.opacity = "1";
      setTimeout(() => {
        document.body.style.transition = "";
      }, 100);
    }, 600);
  };

  return <div className="min-h-screen flex flex-col">
      {/* Hero Section - Full-screen Immersive Intro */}
      <section className="flex-1 flex items-center justify-center gradient-bg relative overflow-hidden">
        {/* #todo: Replace particle config in this section if needed */}
        {/* #todo: Optional - add video background in /public/assets/bg/ */}
        
        <div className="container mx-auto px-6 text-center z-10">
          {/* Text fade-up on load, then glow pulse */}
          <div className="animate-fade-in">
            {/* TODO: Replace "FARAAZ" with your name if needed */}
            <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-bold mb-8 glow-text tracking-tight animate-pulse-glow-expand">
              FARAZ
            </h1>
            
            {/* TODO: Update your tagline/roles */}
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 font-light tracking-wide opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              AI Researcher · Writer · Builder · Entrepreneur
            </p>
            
            {/* TODO: Update your one-liner */}
            <p className="text-2xl sm:text-3xl md:text-4xl text-foreground mb-16 font-medium opacity-0 animate-fade-in-up max-w-4xl mx-auto" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              I build systems that think, write, and feel.
            </p>
            
            {/* Enter/Explore button with zoom-out transition */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
              <RippleButton 
                onClick={exploreToAbout} 
                className="glass-hover bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 px-10 py-7 text-xl rounded-xl group transform transition-transform hover:scale-105"
              >
                Explore
                <ArrowDown className="ml-3 w-6 h-6 group-hover:translate-y-1 transition-transform" />
              </RippleButton>
            </div>
          </div>
        </div>

        {/* Faint cinematic particle backdrop (slow drift) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
                background: i % 3 === 0 
                  ? "hsl(var(--accent))" 
                  : i % 3 === 1 
                  ? "hsl(var(--accent-gold))" 
                  : "hsl(var(--foreground) / 0.3)",
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${10 + Math.random() * 8}s`,
                filter: "blur(1px)"
              }} 
            />
          ))}
        </div>

        {/* Radial gradient glow centered on name */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "4s" }} />
        </div>
      </section>

      {/* Note: Ambient sound fade-in is handled by AmbientSound component in Footer */}
      {/* #todo: Replace ambient sound file in /public/assets/sounds/ambient.mp3 */}
    </div>;
};
export default Home;