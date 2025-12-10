import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Brain, Code, Pen, Target } from "lucide-react";

const About = () => {
  // TODO: Customize these skills to match your expertise
  const skills = [
    { icon: Brain, label: "AI Architecture", description: "Neural networks, transformers, and intelligent systems" },
    { icon: Code, label: "Backend Engineering", description: "Python, Flask, Docker, scalable systems" },
    { icon: Pen, label: "Creative Writing", description: "Prose, poetry, and narrative design" },
    { icon: Target, label: "Product Strategy", description: "Systems thinking and user-centered design" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 gradient-bg relative overflow-hidden">
      {/* Vertical Side Text */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col items-center gap-8">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-accent to-transparent" />
          <p className="text-xs tracking-[0.3em] text-accent/60 [writing-mode:vertical-lr] rotate-180">
            01 / INTRODUCE
          </p>
          <div className="w-px h-24 bg-gradient-to-t from-transparent via-accent to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:pl-32">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 glow-text">
              About Me
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-16 max-w-3xl">
              A builder at the intersection of logic and emotion.
            </p>
          </AnimatedSection>

          {/* Split Screen Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
            {/* Left: Text Content */}
            <AnimatedSection delay={100} className="space-y-8">
              {/* My Story */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-accent">My Story</h2>
                {/* TODO: Replace with your actual bio and story */}
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    It started when I was in eighth grade, a question that never really left me: what if a machine could feel? Not just copy emotion, but actually understand it. I didn’t have the words for it back then, but I knew it meant something. By the time I reached ninth, that curiosity had turned into an obsession. I remember watching The Age of AI documentary on YouTube, getting lost in movies like Tron and Chappie, and reading books like Superintelligence and Life 3.0. Those stories and ideas opened a door I haven’t been able to close since.
                  </p>
                  <p>
                    Before coming back fully to AI, I spent almost three years in Web3 and marketing, where I learned how systems, people, and narratives interact. That time shaped me into how I think about design, communication, and human behavior. It taught me that building something meaningful or innovative isn’t just about technology, but it is also about Vision-Purpose, Understanding Human behaviour-empathy, Sustainability, and the Human story and emotions behind it.
                  </p>
                  <p>
                    Now my work revolves around learning and exploring explainability(XAI), emotional intelligence in computational systems, and human–machine collaboration. I’m interested in how understanding, empathy, and reasoning can coexist inside artificial systems, and how those same principles reflect our own minds. I’m not chasing the idea of building machines that can feel yet, but I’m drawn to the path that leads there.
                  </p>
                  <p>
                    At the core of everything I do is what I call Tragic Realist Existentialism—a way of seeing life as both a burden and a gift. I don’t believe in chasing perfection or meaning; I believe in living through it all, the beauty and the ruin, the clarity and the confusion. My work, my writing, and the way I live all circle around one truth: “Live life to its fullest so there will be no regret in the end.” Because in the end, birth feels like a curse we never asked for, and death—both a gift and a foe that waits patiently for us to understand it.
                  </p>
                  <p>
                    Forsaken Ká grew from that same space. It follows an unnamed man who endures suffering so constant that he begins to wish for death, but death never comes. There is love in his story, but it isn’t a love story. The girl he meets leaves an imprint on him, yet the narrative doesn’t revolve around her; it revolves around his despair, his torment, and the regret that grows from the choices he made and the things that happened to him.
                  </p>
                  <p>
                    The story unfolds through his blurred memories but moments that surface when he’s on the edge of death, half-conscious, half-lost in reflection. It’s all from his point of view, fractured and unreliable, because that’s how memory behaves when pain becomes the only thing left that feels real. It isn’t written to comfort but to confront. It asks what remains when the mind can no longer forget, and whether remembering is a gift or a curse.
                  </p>
                </div>
              </div>

              {/* Current Focus */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-accent">Current Focus</h2>
                {/* TODO: Update with your current projects and research interests */}
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm currently exploring machine learning from first principles, building neural 
                    architectures that can learn, reason, and adapt in real-world contexts.
                  </p>
                  <p className="text-foreground/80 font-medium">My research interests include:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Neural architecture design and optimization</li>
                    <li>Philosophy of intelligence and consciousness</li>
                    <li>Human-AI collaboration systems</li>
                    <li>Emotional intelligence in computational systems</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Portrait Image */}
            <AnimatedSection delay={200} className="flex justify-center lg:justify-end">
              <div className="relative group">
              {/* Glass Frame with Cyan Glow */}
                <div className="relative glass rounded-2xl p-2 border-2 border-accent/30 shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)] transition-all duration-500">
                {/* TODO: Replace /assets/profile.jpg with your image */}
                  <div className="aspect-square w-full max-w-md bg-gradient-to-br from-accent/20 to-accent-gold/20 rounded-xl overflow-hidden">
                  {/* Actual Image */}
                    <img
                      src="/assets/Profile.jpg"
                      alt="Faraz portrait"
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Optional Glow Overlay */}
                <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-t from-black/30 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              </div>
            </div>
          </AnimatedSection>

          </div>

          {/* Capabilities Grid */}
          <AnimatedSection delay={300}>
            <h2 className="text-3xl font-bold mb-8 text-center">Capabilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <AnimatedSection key={skill.label} delay={400 + index * 100}>
                    <GlassCard className="text-center h-full">
                      <div className="flex justify-center mb-4">
                        <div className="p-4 rounded-xl bg-accent/10 border border-accent/30 transition-all duration-300 hover:scale-110 hover:bg-accent/20">
                          <Icon className="w-8 h-8 text-accent" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{skill.label}</h3>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </GlassCard>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default About;
