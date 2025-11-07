import GlassCard from "@/components/GlassCard";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  // TODO: Replace with actual projects
  const projects = [
    {
      title: "AI Research Project",
      description: "Neural architecture exploration focusing on adaptive learning systems and real-time reasoning capabilities.",
      techStack: ["Python", "PyTorch", "Docker"],
      githubLink: "https://github.com/faraazz05",
      liveLink: null,
    },
    {
      title: "Intelligent Backend System",
      description: "Scalable backend architecture for AI-powered applications with real-time processing capabilities.",
      techStack: ["Python", "Flask", "PostgreSQL", "Redis"],
      githubLink: "https://github.com/faraazz05",
      liveLink: null,
    },
    {
      title: "Creative Writing Platform",
      description: "Digital platform for publishing and showcasing creative works including prose, poetry, and long-form narratives.",
      techStack: ["React", "TypeScript", "Node.js"],
      githubLink: "https://github.com/faraazz05",
      liveLink: null,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text animate-fade-in">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground mb-16 animate-fade-in-up">
            Building systems that matter
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <GlassCard
                key={index}
                className="flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3 text-accent">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-accent/30 hover:bg-accent/10 hover:border-accent"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.liveLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-accent/30 hover:bg-accent/10 hover:border-accent"
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Note about TODO items */}
          <div className="mt-12 p-4 rounded-lg bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-accent">Note:</strong> These are placeholder projects. 
              Update the projects array in Projects.tsx with your actual work and GitHub links.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
