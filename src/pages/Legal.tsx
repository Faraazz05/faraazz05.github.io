import AnimatedSection from "@/components/AnimatedSection";

const Legal = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <AnimatedSection>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 glow-text">
            Legal Notice
          </h1>
          
          <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">
                Copyright Notice
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                © 2025 Faraaz. All rights reserved.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                All content, including writings, research, code, and design displayed on this website, 
                are protected under international copyright laws. Unauthorized use, reproduction, or 
                distribution without written permission is prohibited.
              </p>
            </section>

            <div className="h-px bg-border" />

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">
                Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All written works, projects, designs, and visual content displayed on this site are 
                the intellectual property of Faraaz. This includes, but is not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed mt-4 space-y-2 ml-4">
                <li>Original prose, poetry, essays, and monologues</li>
                <li>Research papers and technical documentation</li>
                <li>Software projects and code examples</li>
                <li>Visual designs and interface elements</li>
                <li>The novel "Forsaken Ká" and all related content</li>
              </ul>
            </section>

            <div className="h-px bg-border" />

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">
                Unpublished Works
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Certain sections, particularly "Forsaken Ká", contain unpublished literary works 
                under exclusive authorship. Do not reproduce, excerpt, or adapt these works in any 
                form without explicit written permission.
              </p>
            </section>

            <div className="h-px bg-border" />

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">
                AI Training & Scraping
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The content on this website is explicitly excluded from use in AI training datasets, 
                web scraping, or automated content extraction. Unauthorized data mining or collection 
                is prohibited.
              </p>
            </section>

            <div className="h-px bg-border" />

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">
                Legal Enforcement
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Violations will be subject to copyright infringement claims under applicable law, 
                including but not limited to the Digital Millennium Copyright Act (DMCA) and 
                international copyright treaties.
              </p>
            </section>

            <div className="h-px bg-border" />

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-accent">
                Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For permissions, licensing inquiries, or to report copyright violations, please 
                contact: <a href="mailto:faraaz@example.com" className="text-accent hover:underline">faraaz@example.com</a>
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Legal;
