import GlassCard from "@/components/GlassCard";
import { Brain, Code, Pen, Target } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Brain, label: "AI Architecture", description: "Neural networks, transformers, and intelligent systems" },
    { icon: Code, label: "Backend Engineering", description: "Python, Flask, Docker, scalable systems" },
    { icon: Pen, label: "Creative Writing", description: "Prose, poetry, and narrative design" },
    { icon: Target, label: "Product Strategy", description: "Systems thinking and user-centered design" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text animate-fade-in">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl animate-fade-in-up">
            A builder at the intersection of logic and creativity
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Bio Card */}
            <GlassCard className="animate-fade-in-up" hoverable={false}>
              <h2 className="text-2xl font-semibold mb-4 text-accent">My Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm driven by a simple question: What does it mean for a system to truly understand?
                </p>
                <p>
                  My work exists at the convergence of artificial intelligence, systems design, 
                  and creative expression. I build intelligent architectures that reason, adapt, 
                  and evolve—not just process information, but comprehend it.
                </p>
                <p>
                  Beyond code, I write. Stories, poetry, essays—explorations of consciousness, 
                  humanity, and the spaces between certainty and mystery. My novel, <em>Forsaken Ká</em>, 
                  is one such exploration.
                </p>
              </div>
            </GlassCard>

            {/* Current Focus Card */}
            <GlassCard className="animate-fade-in-up delay-100" hoverable={false}>
              <h2 className="text-2xl font-semibold mb-4 text-accent">Current Focus</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm currently exploring machine learning from first principles, building neural 
                  architectures that can learn, reason, and adapt in real-world contexts.
                </p>
                <p>
                  My research interests include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Neural architecture design and optimization</li>
                  <li>Philosophy of intelligence and consciousness</li>
                  <li>Human-AI collaboration systems</li>
                  <li>Emotional intelligence in computational systems</li>
                </ul>
              </div>
            </GlassCard>
          </div>

          {/* Skills Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <GlassCard 
                    key={skill.label} 
                    className="text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-xl bg-accent/10 border border-accent/30">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{skill.label}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
