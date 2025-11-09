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
      id: "forsaken-ka-chapter-one",
      title: "Forsaken Ká: Chapter One",
      category: "Novel",
      excerpt: "The city remembered everything. Every conversation whispered in shadows, every promise broken at dawn, every soul that walked its streets and never left. It held them all, suspended in amber, waiting...",
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
                    {writing.category === "Novel" ? (
                      <BookOpen className="w-5 h-5 text-accent flex-shrink-0" />
                    ) : (
                      <FileText className="w-5 h-5 text-accent flex-shrink-0" />
                    )}
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

          {/* About Your Creative Work */}
          <AnimatedSection delay={400}>
            <GlassCard hoverable={false} className="border-accent/20">
              {/* TODO: Update this section with info about your novel/creative project */}
              <h2 className="text-2xl font-bold mb-4 text-accent">About Forsaken Ká</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <em>Forsaken Ká</em> is a novel exploring consciousness, memory, and what it means 
                to be human in a world where the boundaries between mind and machine blur. 
                Set in a city that never forgets, it follows characters searching for truth 
                in a reality built on lies.
              </p>
              <p className="text-sm text-muted-foreground">
                Currently in development. Selected excerpts available above.
              </p>
            </GlassCard>
          </AnimatedSection>

          {/* Note about TODO items */}
          <div className="mt-12 p-4 rounded-lg bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-accent">Note:</strong> These are placeholder writings. 
              Update the writings array in Writings.tsx with your actual creative work. 
              Consider linking to full pieces hosted elsewhere or creating dedicated pages for longer works.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writings;
