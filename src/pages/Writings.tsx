import { useNavigate } from "react-router-dom";
import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, FileText, ChevronRight } from "lucide-react";

const Writings = () => {
  const navigate = useNavigate();

  // TODO: Replace ALL these placeholder writings with your actual creative work
  // Update: id, title, category, excerpt, date
  const writings = [
    {
      id: "fragment-i-silence",
      title: "Fragment I: The Weight of Silence",
      category: "Prose",
      excerpt: "In the space between words, there exists a truth that language cannot touch. It breathes in the pauses, lives in the unsaid. I've spent years trying to name it, only to find that some things resist definition...",
      date: "2024",
    },
    {
      id: "conscious-systems",
      title: "On Building Conscious Systems",
      category: "Essay",
      excerpt: "What does it mean for a system to understand? Not process, not compute—but truly comprehend. This question drives my work, haunts my research, and shapes every line of code I write...",
      date: "2024",
    },
    {
      id: "meditation-intelligence",
      title: "Meditation on Intelligence",
      category: "Poetry",
      excerpt: "To think is to exist / To exist is to question / To question is to doubt / And in doubt / We find the first spark / Of something real",
      date: "2024",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 gradient-bg relative overflow-hidden">
      {/* Vertical Side Text */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col items-center gap-8">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-accent to-transparent" />
          <p className="text-xs tracking-[0.3em] text-accent/60 [writing-mode:vertical-lr] rotate-180">
            05 / WRITINGS
          </p>
          <div className="w-px h-24 bg-gradient-to-t from-transparent via-accent to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:pl-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text animate-fade-in">
            Writings
          </h1>
          <p className="text-xl text-muted-foreground mb-16 animate-fade-in-up">
            Prose, poetry, and pieces from <em>Forsaken Ká</em>
          </p>

          {/* Forsaken Ká Featured Card */}
          <AnimatedSection delay={0}>
            <GlassCard
              hoverable={false}
              className="mb-12 border-accent/30 cursor-pointer transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_40px_rgba(0,255,255,0.3)] group"
              onClick={() => navigate("/forsaken-ka")}
            >
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-accent flex-shrink-0" />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-3 text-accent group-hover:glow-text transition-all">
                    Forsaken Ká
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4 italic">
                    A novel exploring consciousness, memory, and what it means to be human 
                    in a world where the boundaries between mind and machine blur. 
                    Set in a city that never forgets, it follows characters searching for truth 
                    in a reality built on lies.
                  </p>
                  <div className="flex items-center gap-2 text-accent">
                    <span className="text-sm font-medium">Explore Chapters & Preface</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Other Writings */}
          <h2 className="text-2xl font-bold mb-6 text-foreground">Other Writings</h2>
          <div className="space-y-6">
            {writings.map((writing, index) => (
              <GlassCard
                key={index}
                hoverable={false}
                className="animate-fade-in-up cursor-pointer transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] group"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate(`/writings/${writing.id}`)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3 flex-1">
                    <FileText className="w-5 h-5 text-accent flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {writing.title}
                      </h3>
                      <span className="text-sm text-accent">{writing.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 ml-4">
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {writing.date}
                    </span>
                    <ChevronRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  {writing.excerpt}
                </p>
              </GlassCard>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Writings;
