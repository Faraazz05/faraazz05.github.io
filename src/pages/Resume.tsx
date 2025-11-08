import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Briefcase, GraduationCap, Code2, BookOpen, Languages, TrendingUp } from "lucide-react";

const Resume = () => {
  // TODO: Replace with 6-7 real work experiences
  const experience = [
    {
      role: "AI Researcher / Developer",
      company: "Independent",
      duration: "2024 - Present",
      description: "Building intelligent systems that reason and adapt. Focused on neural architecture design and machine learning from first principles.",
    },
    // TODO: Add more experience entries here (6-7 total)
  ];

  // TODO: Add all 4 education entries
  const education = [
    {
      degree: "10th Grade",
      institution: "#todo: Add your school name",
      duration: "#todo: Add year",
    },
    {
      degree: "12th Grade",
      institution: "#todo: Add your school name",
      duration: "#todo: Add year",
    },
    {
      degree: "College (Dropped)",
      institution: "#todo: Add college name",
      duration: "#todo: Add year",
    },
    {
      degree: "Current College",
      institution: "#todo: Add current college name",
      duration: "#todo: Add year",
    },
  ];

  // TODO: Verify spoken languages
  const spokenLanguages = [
    "Hindi (Fluent)",
    "English (Fluent)",
    "Japanese (Learning)",
  ];

  // TODO: Update with 30+ skills across all categories
  const skills = {
    "Programming": ["Python", "C", "JavaScript", "SQL", "TypeScript"],
    "AI & ML": ["PyTorch", "TensorFlow", "LangChain", "LLM fine-tuning", "Prompt engineering"],
    "MLOps": ["Docker", "Kubernetes", "CI/CD", "MLflow"],
    "Soft Skills": ["Systems thinking", "Leadership", "Creative communication"],
    "Marketing": ["Brand Strategy", "Digital funnels", "Content design"],
    "Tools": ["VSCode", "Figma", "Notion", "Git", "Postman"],
  };

  // TODO: Update with 3-4 current learning topics
  const learning = [
    "Neural architecture design",
    "Philosophy of intelligence",
    "Human-AI co-creativity",
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 glow-text">
              Resume
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-16">
              Experience, education, and continuous learning
            </p>
          </AnimatedSection>

          {/* Experience Section */}
          <AnimatedSection delay={100}>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <GlassCard key={index}>
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
          </AnimatedSection>

          {/* Education Section */}
          <AnimatedSection delay={200}>
            <div className="flex items-center gap-3 mb-6 mt-16">
              <GraduationCap className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="grid gap-4">
              {education.map((edu, index) => (
                <GlassCard key={index}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-accent">{edu.degree}</h3>
                      <p className="text-foreground">{edu.institution}</p>
                    </div>
                    {edu.duration && (
                      <span className="text-sm text-muted-foreground mt-2 md:mt-0">{edu.duration}</span>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>
          </AnimatedSection>

          {/* Spoken Languages */}
          <AnimatedSection delay={300}>
            <div className="flex items-center gap-3 mb-6 mt-16">
              <Languages className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-bold">Spoken Languages</h2>
            </div>
            <GlassCard>
              <div className="flex flex-wrap gap-3">
                {spokenLanguages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/30"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Skills - Expanded to 30+ */}
          <AnimatedSection delay={400}>
            <div className="flex items-center gap-3 mb-6 mt-16">
              <Code2 className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-bold">Skills</h2>
            </div>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <GlassCard key={category}>
                  <h3 className="text-lg font-semibold text-accent-gold mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-background/50 text-foreground border border-border hover:border-accent/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </AnimatedSection>

          {/* Currently Learning */}
          <AnimatedSection delay={500}>
            <div className="flex items-center gap-3 mb-6 mt-16">
              <TrendingUp className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-bold">Currently Learning</h2>
            </div>
            <GlassCard>
              <ul className="space-y-3">
                {learning.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </AnimatedSection>

          {/* Note */}
          <div className="mt-12 p-4 rounded-lg bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-accent">Note:</strong> Update resume with 6-7 experiences, 
              all 4 education entries, 30+ skills across 6 categories, and current learning topics.
              See todo.md for details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
