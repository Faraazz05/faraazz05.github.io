import GlassCard from "@/components/GlassCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Briefcase, GraduationCap, Code2, Languages, TrendingUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const Resume = () => {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(0);
  const [expandedSkills, setExpandedSkills] = useState<Record<string, boolean>>({
    "Programming": true,
    "AI & ML": false,
    "MLOps": false,
    "Soft Skills": false,
    "Marketing": false,
    "Tools": false,
  });

  // TODO: Replace with 6-7 real work experiences
  const experience = [
    {
      role: "AI Researcher / Developer",
      company: "Independent",
      duration: "2024 - Present",
      description: "Building intelligent systems that reason and adapt. Focused on neural architecture design and machine learning from first principles.",
    },
    // TODO: Add more experience entries here (6-7 total)
    {
      role: "#todo: Add Role Title",
      company: "#todo: Add Company Name",
      duration: "#todo: Add Duration",
      description: "#todo: Add description of responsibilities and achievements",
    },
    {
      role: "#todo: Add Role Title",
      company: "#todo: Add Company Name",
      duration: "#todo: Add Duration",
      description: "#todo: Add description of responsibilities and achievements",
    },
    {
      role: "#todo: Add Role Title",
      company: "#todo: Add Company Name",
      duration: "#todo: Add Duration",
      description: "#todo: Add description of responsibilities and achievements",
    },
    {
      role: "#todo: Add Role Title",
      company: "#todo: Add Company Name",
      duration: "#todo: Add Duration",
      description: "#todo: Add description of responsibilities and achievements",
    },
    {
      role: "#todo: Add Role Title",
      company: "#todo: Add Company Name",
      duration: "#todo: Add Duration",
      description: "#todo: Add description of responsibilities and achievements",
    },
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
    <div className="min-h-screen pt-24 pb-20 gradient-bg relative overflow-hidden">
      {/* Vertical Side Text */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col items-center gap-8">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-accent-gold to-transparent" />
          <p className="text-xs tracking-[0.3em] text-accent-gold/60 [writing-mode:vertical-lr] rotate-180">
            02 / RESUME
          </p>
          <div className="w-px h-24 bg-gradient-to-t from-transparent via-accent-gold to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:pl-32">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 glow-text">
              Resume
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-16">
              Experience, education, and continuous learning
            </p>
          </AnimatedSection>

          {/* Experience Section - Timeline Layout */}
          <AnimatedSection delay={100}>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <div className="relative space-y-6">
              {/* Timeline Line */}
              <div className="absolute left-[2px] top-8 bottom-8 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent hidden md:block" />
              
              {experience.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-6 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,255,0.8)] hidden md:block" />
                  
                  <GlassCard 
                    hoverable={false}
                    className="md:ml-8 cursor-pointer transition-all duration-300 hover:border-accent/50"
                    onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-accent">{exp.role}</h3>
                        <p className="text-lg text-foreground">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-2 md:mt-0">
                        <span className="text-sm text-muted-foreground">{exp.duration}</span>
                        <ChevronDown 
                          className={`w-5 h-5 text-accent transition-transform duration-300 ${
                            expandedExperience === index ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedExperience === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-muted-foreground leading-relaxed pt-2">{exp.description}</p>
                    </div>
                  </GlassCard>
                </div>
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

          {/* Skills Deck - Collapsible Categories */}
          <AnimatedSection delay={400}>
            <div className="flex items-center gap-3 mb-8 mt-16">
              <Code2 className="w-6 h-6 text-accent" />
              <h2 className="text-3xl font-bold">Skills Deck</h2>
            </div>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <GlassCard 
                  key={category} 
                  hoverable={false}
                  className="cursor-pointer transition-all duration-300 hover:border-accent-gold/50"
                  onClick={() => setExpandedSkills(prev => ({ ...prev, [category]: !prev[category] }))}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-accent-gold">{category}</h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-accent-gold transition-transform duration-300 ${
                        expandedSkills[category] ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedSkills[category] ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
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
