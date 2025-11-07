import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-preview");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center gradient-bg relative overflow-hidden">
        <div className="container mx-auto px-6 text-center z-10">
          <div className="animate-fade-in">
            <h1 className="text-7xl md:text-9xl font-bold mb-6 glow-text tracking-tight">
              Faraaz
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light tracking-wide">
              AI Researcher · Writer · Builder · Marketing
            </p>
            <p className="text-2xl md:text-3xl text-foreground mb-12 font-medium animate-fade-in-up">
              I build systems that think, write, and feel.
            </p>
            <Button
              onClick={scrollToAbout}
              className="glass-hover bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 px-8 py-6 text-lg rounded-xl group"
            >
              Explore
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Quick About Preview */}
      <section id="about-preview" className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-accent">Who I Am</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I explore the intersection of artificial intelligence, creative expression, 
              and human understanding. Through code, research, and writing, I seek to build 
              systems that don't just compute—they comprehend, adapt, and resonate.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
