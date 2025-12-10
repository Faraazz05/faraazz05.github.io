import { useNavigate } from "react-router-dom";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, ArrowLeft } from "lucide-react";

const ForsakenKa = () => {
  const navigate = useNavigate();

  // TODO: Replace with actual Forsaken Ká chapters and content
  const preface = {
    id: "forsaken-ka-preface",
    title: "Preface: The City Remembers",
    excerpt: "An introduction to the world of Forsaken Ká, where memory becomes reality and the boundaries between past and present dissolve...",
  };

  const chapters = [
    {
      id: "forsaken-ka-chapter-one",
      title: "Chapter One: Silence & Echoes",
      excerpt: "The city remembered everything. Every conversation whispered in shadows, every promise broken at dawn, every soul that walked its streets and never left...",
      status: "Available",
    },
    {
      id: "forsaken-ka-chapter-two",
      title: "Chapter Two: The Weight of Truth",
      excerpt: "Maya discovers that some memories were never meant to be found, and certain truths can reshape reality itself...",
      status: "Available",
    },
    {
      id: "forsaken-ka-chapter-three",
      title: "Chapter Three: Fractured Light",
      excerpt: "In a city where time pools around moments of significance, Kael must choose between preserving the past and creating a future...",
      status: "Coming Soon",
    },
    {
      id: "forsaken-ka-chapter-four",
      title: "Chapter Four: The Amber Archive",
      excerpt: "The city's deepest secrets lie suspended in moments frozen in time, waiting for someone brave enough to unlock them...",
      status: "Coming Soon",
    },
    {
      id: "forsaken-ka-chapter-five",
      title: "Chapter Five: Breaking Dawn",
      excerpt: "As the boundaries between memory and reality collapse, Maya and Kael must make a choice that will determine the fate of the city...",
      status: "Coming Soon",
    },
    {
      id: "forsaken-ka-chapter-six",
      title: "Chapter Six: The Final Memory",
      excerpt: "In the end, the city remembers. But what happens when the city itself begins to forget?",
      status: "Coming Soon",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 gradient-bg relative overflow-hidden">
      {/* Vertical Side Text */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col items-center gap-8">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-accent to-transparent" />
          <p className="text-xs tracking-[0.3em] text-accent/60 [writing-mode:vertical-lr] rotate-180">
            FORSAKEN KÁ
          </p>
          <div className="w-px h-24 bg-gradient-to-t from-transparent via-accent to-transparent" />
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/writings")}
        className="fixed top-24 left-6 lg:left-32 z-50 flex items-center gap-2 text-accent hover:text-accent/80 transition-colors glass rounded-lg px-4 py-2 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Back to Writings</span>
      </button>

      <div className="container mx-auto px-6 lg:pl-32">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <BookOpen className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text glitch-hover cursor-default">
              Forsaken Ká
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A novel exploring consciousness, memory, and what it means to be human 
              in a world where the boundaries between mind and machine blur. 
              Set in a city that never forgets, it follows characters searching for truth 
              in a reality built on lies.
            </p>
          </div>

          {/* Preface Card */}
          <AnimatedSection delay={100}>
            <GlassCard
              hoverable={false}
              className="mb-12 border-accent/30 cursor-pointer transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]"
              onClick={() => navigate(`/writings/${preface.id}`)}
            >
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-accent">{preface.title}</h2>
                  <p className="text-muted-foreground leading-relaxed italic">
                    {preface.excerpt}
                  </p>
                  <p className="text-sm text-accent mt-4">Click to read →</p>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Chapters Grid */}
          <AnimatedSection delay={200}>
            <h2 className="text-3xl font-bold mb-8 text-foreground">Chapters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {chapters.map((chapter, index) => (
                <GlassCard
                  key={chapter.id}
                  hoverable={chapter.status === "Available"}
                  className={`animate-fade-in-up transition-all duration-300 ${
                    chapter.status === "Available"
                      ? "cursor-pointer hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]"
                      : "opacity-60 cursor-not-allowed"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => {
                    if (chapter.status === "Available") {
                      navigate(`/writings/${chapter.id}`);
                    }
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground flex-1">
                      {chapter.title}
                    </h3>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        chapter.status === "Available"
                          ? "bg-accent/20 text-accent"
                          : "bg-muted/20 text-muted-foreground"
                      }`}
                    >
                      {chapter.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm italic">
                    {chapter.excerpt}
                  </p>
                </GlassCard>
              ))}
            </div>
          </AnimatedSection>

          {/* About the Novel */}
          <AnimatedSection delay={400}>
            <GlassCard hoverable={false} className="mt-12 border-accent/20">
              <h2 className="text-2xl font-bold mb-4 text-accent">About the Project</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <em>Forsaken Ká</em> represents an exploration of what happens when technology 
                advances beyond our ability to understand it, when consciousness becomes transferable, 
                and when memories can be stored, shared, and manipulated.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The story asks fundamental questions about identity, free will, and the nature of 
                reality itself. In a world where the city remembers everything, what does it mean 
                to forget? And in a system designed to preserve the past, who controls the future?
              </p>
              <p className="text-sm text-muted-foreground mt-6">
                Currently in development. New chapters released periodically.
              </p>
            </GlassCard>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
};

export default ForsakenKa;
