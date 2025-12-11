import AnimatedSection from "@/components/AnimatedSection";
import TiltCard from "@/components/TiltCard";
import RippleButton from "@/components/RippleButton";
import { ExternalLink, FileText, Check, Loader2, Clock, Pause } from "lucide-react";

type ProjectStatus = "completed" | "in-progress" | "planning" | "paused";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink: string | null;
  status: ProjectStatus;
  progress?: number;
}

const StatusBar = ({ status, progress }: { status: ProjectStatus; progress?: number }) => {
  const statusConfig = {
    completed: {
      icon: Check,
      label: "Completed",
      barClass: "bg-accent",
      width: "100%",
    },
    "in-progress": {
      icon: Loader2,
      label: `In Progress${progress ? ` • ${progress}%` : ""}`,
      barClass: "bg-gradient-to-r from-accent to-accent-gold status-shimmer",
      width: `${progress || 50}%`,
    },
    planning: {
      icon: Clock,
      label: "Planning",
      barClass: "bg-muted-foreground/50 animate-pulse",
      width: "20%",
    },
    paused: {
      icon: Pause,
      label: "Paused",
      barClass: "bg-muted-foreground/30",
      width: "40%",
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className="mt-4 pt-4 border-t border-border/30">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Icon className={`w-3 h-3 ${status === "in-progress" ? "animate-spin" : ""}`} />
          <span>{config.label}</span>
        </div>
      </div>
      <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${config.barClass}`}
          style={{ width: config.width }}
        />
      </div>
    </div>
  );
};

const Projects = () => {
  // TODO: Replace ALL these placeholder projects with your real projects (15-20 total)
  const projects: Project[] = [
    {
      title: "AI Research Project",
      description: "Neural architecture exploration focusing on adaptive learning systems and real-time reasoning capabilities.",
      techStack: ["Python", "PyTorch", "Docker"],
      githubLink: "https://github.com/faraazz05",
      liveLink: null,
      status: "in-progress",
      progress: 75,
    },
    {
      title: "Intelligent Backend System",
      description: "Scalable backend architecture for AI-powered applications with real-time processing capabilities.",
      techStack: ["Python", "Flask", "PostgreSQL", "Redis"],
      githubLink: "https://github.com/faraazz05",
      liveLink: null,
      status: "completed",
    },
    {
      title: "Creative Writing Platform",
      description: "Digital platform for publishing and showcasing creative works including prose, poetry, and long-form narratives.",
      techStack: ["React", "TypeScript", "Node.js"],
      githubLink: "https://github.com/faraazz05",
      liveLink: null,
      status: "in-progress",
      progress: 60,
    },
    {
      title: "ML Model Optimizer",
      description: "Advanced tools for neural network optimization, pruning, and quantization to reduce model size.",
      techStack: ["Python", "TensorFlow", "NumPy"],
      githubLink: "https://github.com/faraazz05",
      liveLink: null,
      status: "planning",
    },
    {
      title: "API Gateway Service",
      description: "High-performance API gateway with rate limiting, authentication, and request routing capabilities.",
      techStack: ["Node.js", "Express", "Redis", "JWT"],
      githubLink: "https://github.com/faraazz05",
      liveLink: null,
      status: "completed",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive analytics dashboard with real-time data streaming and customizable visualizations.",
      techStack: ["React", "D3.js", "WebSocket"],
      githubLink: "https://github.com/faraazz05",
      liveLink: null,
      status: "paused",
      progress: 45,
    },
    // TODO: Add 9-14 more real projects
    ...Array.from({ length: 14 }, (_, i) => ({
      title: `#todo: Project ${i + 7} Title`,
      description: "#todo: Add project description highlighting the problem solved, tech used, and philosophy behind it",
      techStack: ["#todo", "Add", "Real", "Tech"],
      githubLink: "https://github.com/faraazz05",
      liveLink: null,
      status: (["planning", "in-progress", "completed", "paused"][i % 4]) as ProjectStatus,
      progress: i % 4 === 1 ? 30 + (i * 5) : undefined,
    })),
  ];

  // TODO: Add 3-4 real research papers
  const researchPapers = [
    {
      title: "Foundations of Synthetic Emotion",
      status: "In Progress",
      abstract: "A study on the computational architecture of empathy and contextual understanding in artificial systems. This research explores how machines can develop genuine emotional comprehension beyond pattern recognition.",
      link: "#todo: Add DOI or paper link",
    },
    {
      title: "#todo: Research Paper 2 Title",
      status: "#todo: Status",
      abstract: "#todo: Add abstract describing the research focus, methodology, and key findings",
      link: "#todo: Add DOI or paper link",
    },
    {
      title: "#todo: Research Paper 3 Title",
      status: "#todo: Status",
      abstract: "#todo: Add abstract describing the research focus, methodology, and key findings",
      link: "#todo: Add DOI or paper link",
    },
  ];

  const handleProjectClick = (githubLink: string) => {
    window.open(githubLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen pt-24 pb-20 gradient-bg relative overflow-hidden">
      {/* Vertical Side Text */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col items-center gap-8">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-accent to-transparent" />
          <p className="text-xs tracking-[0.3em] text-accent/60 [writing-mode:vertical-lr] rotate-180">
            03 / PROJECTS
          </p>
          <div className="w-px h-24 bg-gradient-to-t from-transparent via-accent to-transparent" />
        </div>
      </div>

      {/* Parallax Background Shift */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-gold/5 opacity-30 parallax-bg" />

      <div className="container mx-auto px-6 lg:pl-32 relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 glow-text">
              Projects
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-16">
              Building systems that matter
            </p>
          </AnimatedSection>

          {/* Projects Gallery - Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-20">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 50} className="break-inside-avoid">
                <TiltCard
                  onClick={() => handleProjectClick(project.githubLink)}
                  className="group"
                >
                  {/* External link indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-accent" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-accent pr-8">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Live Link Button */}
                  {project.liveLink && (
                    <div className="mt-4">
                      <RippleButton
                        variant="outline"
                        size="sm"
                        className="border-accent/30 hover:bg-accent/10 hover:border-accent"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveLink!, "_blank", "noopener,noreferrer");
                        }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </RippleButton>
                    </div>
                  )}

                  {/* Status Bar */}
                  <StatusBar status={project.status} progress={project.progress} />
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>

          {/* Research Papers Section */}
          <AnimatedSection delay={300}>
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-6 h-6 text-accent-gold" />
              <h2 className="text-3xl font-bold">Research Papers</h2>
            </div>
            <div className="space-y-6">
              {researchPapers.map((paper, index) => (
                <AnimatedSection key={index} delay={400 + index * 100}>
                  <TiltCard glowColor="gold">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-accent-gold">{paper.title}</h3>
                      <span className="text-sm text-muted-foreground mt-2 md:mt-0 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/30">
                        {paper.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{paper.abstract}</p>
                    <RippleButton
                      variant="outline"
                      size="sm"
                      className="border-accent-gold/30 hover:bg-accent-gold/10 hover:border-accent-gold"
                      asChild
                    >
                      <a href={paper.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read Paper
                      </a>
                    </RippleButton>
                  </TiltCard>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Note about TODO items */}
          <div className="mt-12 p-4 rounded-lg bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-accent">Note:</strong> Add 15-20 real projects with GitHub links and 3-4 research papers with DOI/publication links. Update Projects.tsx.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
