import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, FileText } from "lucide-react";

const Writings = () => {
  // TODO: Replace ALL these placeholder writings with your actual creative work
  // Update: title, category, excerpt, date
  const writings = [
    {
      title: "Fragment I: The Weight of Silence",
      category: "Prose",
      excerpt: "In the space between words, there exists a truth that language cannot touch. It breathes in the pauses, lives in the unsaid. I've spent years trying to name it, only to find that some things resist definition...",
      date: "2024",
    },
    {
      title: "On Building Conscious Systems",
      category: "Essay",
      excerpt: "What does it mean for a system to understand? Not process, not compute—but truly comprehend. This question drives my work, haunts my research, and shapes every line of code I write...",
      date: "2024",
    },
    {
      title: "Forsaken Ká: Chapter One",
      category: "Novel",
      excerpt: "The city remembered everything. Every conversation whispered in shadows, every promise broken at dawn, every soul that walked its streets and never left. It held them all, suspended in amber, waiting...",
      date: "2024",
    },
    {
      title: "Meditation on Intelligence",
      category: "Poetry",
      excerpt: "To think is to exist / To exist is to question / To question is to doubt / And in doubt / We find the first spark / Of something real",
      date: "2024",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 gradient-bg">
      <div className="container mx-auto px-6">
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
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {writing.category === "Novel" ? (
                      <BookOpen className="w-5 h-5 text-accent flex-shrink-0" />
                    ) : (
                      <FileText className="w-5 h-5 text-accent flex-shrink-0" />
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {writing.title}
                      </h3>
                      <span className="text-sm text-accent">{writing.category}</span>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                    {writing.date}
                  </span>
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
