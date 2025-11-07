import GlassCard from "@/components/GlassCard";
import { Briefcase, GraduationCap, Code2, BookOpen } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      role: "AI Researcher / Developer",
      company: "Independent",
      duration: "2024 - Present",
      description: "Building intelligent systems that reason and adapt. Focused on neural architecture design and machine learning from first principles.",
    },
  ];

  const education = [
    {
      degree: "Computer Science & AI Research",
      institution: "Self-Directed Learning",
      duration: "Ongoing",
      description: "Deep dive into ML fundamentals, neural networks, and AI systems design.",
    },
  ];

  const languages = [
    { name: "Python", level: "Expert" },
    { name: "JavaScript/TypeScript", level: "Advanced" },
    { name: "C", level: "Proficient" },
    { name: "SQL", level: "Proficient" },
  ];

  const learning = [
    "Machine learning from first principles",
    "Neural architecture design and optimization",
    "Philosophy of intelligence and consciousness",
    "Distributed systems and scalability",
    "Creative writing and narrative structure",
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text animate-fade-in">
            Resume
          </h1>
          <p className="text-xl text-muted-foreground mb-16 animate-fade-in-up">
            Experience, education, and continuous learning
          </p>

          {/* Experience Section */}
          <div className="mb-16 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <GlassCard key={index} hoverable={false}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-accent">{exp.role}</h3>
                      <p className="text-lg text-foreground">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.duration}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16 animate-fade-in-up delay-100">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <GlassCard key={index} hoverable={false}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-accent">{edu.degree}</h3>
                      <p className="text-lg text-foreground">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">{edu.duration}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Languages & Technologies */}
          <div className="mb-16 animate-fade-in-up delay-200">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-bold">Languages & Technologies</h2>
            </div>
            <GlassCard hoverable={false}>
              <div className="grid md:grid-cols-2 gap-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center p-3 rounded-lg bg-background/30">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-accent">{lang.level}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Currently Learning */}
          <div className="animate-fade-in-up delay-300">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-bold">Currently Learning</h2>
            </div>
            <GlassCard hoverable={false}>
              <ul className="space-y-3">
                {learning.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          {/* Note about TODO items */}
          <div className="mt-12 p-4 rounded-lg bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-accent">Note:</strong> This resume is a template. 
              Update the experience, education, and project details in the Resume.tsx file to reflect your actual background.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
